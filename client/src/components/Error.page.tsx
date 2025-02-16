import { FC } from "react";
import { useNavigate } from "react-router";

interface ErrorPageProps {
  error: unknown;
}

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  const navigate = useNavigate();

  let errorMessage = "Произошла неизвестная ошибка";

  if (typeof error === "object" && error !== null) {
    if ("status" in error) {
      errorMessage = `Ошибка ${error.status}`;
    } else if ("message" in error) {
      errorMessage = error.message as string;
    }
  }

  return (
    <div className="border mt-6 border-gray-200 p-4 rounded-lg text-center flex justify-center items-center flex-col">
      <h2 className="text-2xl font-semibold text-[#ff4053]">
        Что-то пошло не так. {errorMessage}
      </h2>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-4">
        <button
          onClick={() => navigate(-1)}
          className="min-w-[150px] cursor-pointer bg-[#dee9f3] text-[#087fe7] font-medium text-base flex items-center justify-center rounded-lg pt-[10px] px-5 pb-3 transition-colors hover:bg-[#d6e1f5] active:bg-[#d6e1f5]"
        >
          Назад
        </button>

        <button
          onClick={() => navigate("/")}
          className="min-w-[150px] cursor-pointer bg-[#0582ff] text-white font-medium text-base flex items-center justify-center rounded-lg pt-[10px] px-5 pb-3 transition-colors hover:bg-[#045ac3] active:bg-[#045ac3]"
        >
          Главная
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
