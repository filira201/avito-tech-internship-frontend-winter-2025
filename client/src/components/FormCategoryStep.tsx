import { useFormContext } from "react-hook-form";
import { UltimateType } from "../models/types";
import RealEstateForm from "./RealEstateForm";
import AutoForm from "./AutoForm";
import ServicesForm from "./ServicesForm";

const FormCategoryStep = () => {
  const { watch } = useFormContext<UltimateType>();

  const selectedType = watch("type");

  return (
    <>
      {selectedType === "Недвижимость" && <RealEstateForm />}
      {selectedType === "Авто" && <AutoForm />}
      {selectedType === "Услуги" && <ServicesForm />}
    </>
  );
};

export default FormCategoryStep;
