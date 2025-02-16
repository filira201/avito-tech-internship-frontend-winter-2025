import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center items-start min-h-[80vh] px-4 mt-20">
      <section className="flex flex-col items-center text-center gap-6">
        <h1 className="font-semibold text-4xl tracking-tight text-[#1a1a1a] md:text-6xl lg:text-7xl">
          Создавайте эффективные объявления.
        </h1>
        <h2 className="max-w-[400px] text-lg tracking-tight font-medium sm:text-2xl">
          Otiva помогает вам легко размещать объявления, удобно их редактировать
          и находить товары и услуги.
        </h2>
        <nav className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-4">
          <button
            onClick={() => navigate("/list")}
            className="min-w-[150px] cursor-pointer bg-[#0582ff] text-white font-medium text-base flex items-center justify-center rounded-lg pt-[10px] px-5 pb-3 transition-colors hover:bg-[#045ac3] active:bg-[#045ac3]"
          >
            Список объявлений
          </button>

          <button
            onClick={() => navigate("/form")}
            className="min-w-[150px] cursor-pointer bg-[#02d15c] text-white font-medium text-base flex items-center justify-center rounded-lg pt-[10px] px-5 pb-3 transition-colors hover:bg-[#00c257] active:bg-[#00c257]"
          >
            Разместить объявление
          </button>
        </nav>
      </section>
    </div>
  );
};

export default HomePage;
