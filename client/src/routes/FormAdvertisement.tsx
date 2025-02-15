import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { TypeAdvertisement, UltimateType } from "../models/types";
import { advertisementApi } from "../services/AdvertisementService";
import { useEffect, useState } from "react";
import { FORM_STEPS } from "../lib/constants/constants";
import FormBaseStep from "../components/FormBaseStep";
import FormCategoryStep from "../components/FormCategoryStep";
import FormNavigation from "../components/FormNavigation";

const FormAdvertisement = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [createAdvertisement] =
    advertisementApi.useCreateAdvertisementMutation();

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
    const baseFields = {
      name: getValues("name"),
      description: getValues("description"),
      location: getValues("location"),
      type: getValues("type"),
      image: getValues("image"),
    };

    if (selectedType) {
      reset(baseFields);
    }
  }, [selectedType, reset, getValues]);

  const onSubmit: SubmitHandler<UltimateType> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await createAdvertisement(data as TypeAdvertisement);
      if (response.error) {
        throw new Error("Произошла ошибка при отправке формы");
      } else {
        setCurrentStep((cs) => cs + 1);
        reset();
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
      <h1 className="text-3xl font-semibold mb-2 text-[#1a1a1a]">
        Форма размещения объявления
      </h1>
      {currentStep < 3 && (
        <p className="text-2xl font-semibold mb-6">
          Шаг <span className="text-[#ff4053]">{currentStep}</span> из{" "}
          {FORM_STEPS - 1}
        </p>
      )}

      <FormProvider {...methods}>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && <FormBaseStep />}
          {currentStep === 2 && <FormCategoryStep />}
          {currentStep === 3 && <div>Вы успешно сдали форму</div>}
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
