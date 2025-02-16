import { FC } from "react";

interface CompleteStepProps {
  isEditing: boolean;
}

const CompleteStep: FC<CompleteStepProps> = ({ isEditing }) => {
  return (
    <>
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-6xl">
            Объявление было успешно {isEditing ? "отредактировано" : "создано"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CompleteStep;
