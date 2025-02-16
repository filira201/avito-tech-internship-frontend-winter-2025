import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { TypeAdvertisement, UltimateType } from "../models/types";
import { advertisementApi } from "../services/AdvertisementService";
import { useEffect, useState } from "react";
import { FORM_STEPS } from "../lib/constants/constants";
import FormBaseStep from "../components/FormBaseStep";
import FormCategoryStep from "../components/FormCategoryStep";
import FormNavigation from "../components/FormNavigation";
import { useSearchParams } from "react-router";
import CompleteStep from "../components/CompleteStep";
import ErrorPage from "../components/Error.page";
import Loader from "../components/Loader";

const FormAdvertisement = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const searchParamsId = searchParams.get("id");
  const advertisementId = searchParamsId ? Number(searchParamsId) : undefined;

  const [createAdvertisement] =
    advertisementApi.useCreateAdvertisementMutation();
  const [updateAdvertisement] =
    advertisementApi.useUpdateAdvertisementMutation();
  const {
    data: advertisement,
    isLoading,
    isFetching,
    error,
  } = advertisementApi.useGetAdvertisementByIdQuery(advertisementId as number, {
    skip: !advertisementId,
  });

  const methods = useForm<UltimateType>();
  const {
    handleSubmit,
    setError,
    watch,
    getValues,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const selectedType = watch("type");

  useEffect(() => {
    if (advertisement) {
      reset(advertisement);
    }
  }, [advertisement, reset]);

  useEffect(() => {
    if (selectedType && !advertisement) {
      const baseFields = {
        name: getValues("name"),
        description: getValues("description"),
        location: getValues("location"),
        type: getValues("type"),
        image: getValues("image"),
      };

      reset(baseFields);
    }
  }, [selectedType, reset, getValues, advertisement]);

  if ((advertisementId && isLoading) || isFetching) return <Loader />;
  if (advertisementId && error) return <ErrorPage error={error} />;
  if (advertisementId && !advertisement)
    return (
      <h2 className="text-center text-2xl font-semibold text-[#1a1a1a]">
        Данных не найдено
      </h2>
    );

  const isEditing = advertisementId !== undefined;

  const onSubmit: SubmitHandler<UltimateType> = async (data) => {
    try {
      let response;
      if (advertisementId !== undefined) {
        response = await updateAdvertisement({ ...data, id: advertisementId });
      } else {
        response = await createAdvertisement(data as TypeAdvertisement);
      }
      if (response.error) {
        throw new Error("Произошла ошибка при отправке формы");
      } else {
        reset();
        setCurrentStep((cs) => cs + 1);
      }
    } catch (error) {
      setError("root", {
        message: `${error}`,
      });
    }
  };

  const handleNextStep = async () => {
    const isValid = await trigger([
      "name",
      "description",
      "location",
      "type",
      "image",
    ]);

    if (!isValid) return;

    if (isValid && currentStep < FORM_STEPS) {
      setCurrentStep((cs) => cs + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((cs) => cs - 1);
    }
  };

  return (
    <div className="w-full mx-auto mt-10">
      {currentStep < FORM_STEPS && (
        <h1 className="text-3xl font-semibold mb-2 text-[#1a1a1a]">
          {isEditing
            ? "Форма редактирования объявления"
            : "Форма размещения объявления"}
        </h1>
      )}

      {currentStep < FORM_STEPS && (
        <p className="text-2xl font-semibold mb-6">
          Шаг <span className="text-[#ff4053]">{currentStep}</span> из{" "}
          {FORM_STEPS - 1}
        </p>
      )}

      <FormProvider {...methods}>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && <FormBaseStep isEditing={isEditing} />}
          {currentStep === 2 && <FormCategoryStep />}
          {currentStep === 3 && <CompleteStep isEditing={isEditing} />}
          {currentStep < FORM_STEPS && (
            <FormNavigation
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
              currentStep={currentStep}
              isSubmitting={isSubmitting}
            />
          )}

          {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        </form>
      </FormProvider>
    </div>
  );
};

export default FormAdvertisement;
