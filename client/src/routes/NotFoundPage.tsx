import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";

const NotFoundPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  if (isRouteErrorResponse(error)) {
    return (
      <main className="min-h-full place-items-center text-[#050505] bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-[#ff4053]">{error.status}</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-[#1a1a1a] sm:text-6xl">
            Что-то пошло не так
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-[#787774] sm:text-xl/8">
            Описание ошибки: {error.statusText}
          </p>
          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full cursor-pointer bg-[#dee9f3] text-[#087fe7] font-medium text-lg flex items-center justify-center rounded-lg pt-[10px] px-5 pb-3 transition-colors hover:bg-[#d6e1f5] active:bg-[#d6e1f5]"
            >
              Назад
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full cursor-pointer bg-[#0582ff] text-white font-medium text-lg flex items-center justify-center rounded-lg pt-[10px] px-5 pb-3 transition-colors hover:bg-[#045ac3] active:bg-[#045ac3]"
            >
              Главная страница
            </button>
          </div>
        </div>
      </main>
    );
  }
};

export default NotFoundPage;
