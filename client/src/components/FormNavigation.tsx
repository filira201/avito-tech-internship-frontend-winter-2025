import { FC } from "react";
import { FORM_STEPS } from "../lib/constants/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface FormNavigationProps {
  currentStep: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  isSubmitting: boolean;
}

const FormNavigation: FC<FormNavigationProps> = ({
  currentStep,
  handleNextStep,
  handlePrevStep,
  isSubmitting,
}) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={handlePrevStep}
        disabled={currentStep === 1}
        className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-lg font-semibold text-white bg-[#0582ff] transition-color hover:bg-[#045ac3] active:bg-[#045ac3] disabled:bg-[#dddad6] disabled:pointer-events-none"
      >
        <ChevronLeftIcon className="size-6" />
      </button>
      <button
        disabled={isSubmitting || currentStep !== FORM_STEPS - 1}
        className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-lg font-semibold text-white bg-[#02d15c] transition-color hover:bg-[#00c257] active:bg-[#00c257] disabled:bg-[#dddad6] disabled:pointer-events-none"
        type="submit"
      >
        {isSubmitting ? "Отправка" : "Отправить"}
      </button>
      <button
        onClick={handleNextStep}
        type="button"
        disabled={currentStep === FORM_STEPS - 1}
        className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-lg font-semibold text-white bg-[#0582ff] transition-color hover:bg-[#045ac3] active:bg-[#045ac3] disabled:bg-[#dddad6] disabled:pointer-events-none"
      >
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
};

export default FormNavigation;

//   <div className="flex justify-between items-center">
//   <button
//     type="button"
//     onClick={handlePrevStep}
//     disabled={currentStep === 1}
//     className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-lg font-semibold text-white bg-[#00aaff] transition-color hover:bg-[#0098f7] active:bg-[#0098f7] disabled:bg-[#dddad6] disabled:pointer-events-none"
//   >
//     <ChevronLeftIcon className="size-6" />
//     Назад
//   </button>

//   {currentStep === FORM_STEPS - 1 ? (
//     <button
//       disabled={isSubmitting || currentStep !== FORM_STEPS - 1}
//       className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-lg font-semibold text-white bg-[#02d15c] transition-color hover:bg-[#00c257] active:bg-[#00c257] disabled:bg-[#dddad6] disabled:pointer-events-none"
//       type="submit"
//     >
//       {isSubmitting ? "Отправка..." : "Отправить"}
//     </button>
//   ) : (
//     <button
//       onClick={handleNextStep}
//       type="button"
//       className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-lg font-semibold text-white bg-[#02d15c] transition-color hover:bg-[#00c257] active:bg-[#00c257]"
//     >
//       Вперёд
//       <ChevronRightIcon className="size-6" />
//     </button>
//   )}
// </div>
