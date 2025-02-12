import { PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const CreateAdvertisementButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/form")}
      className="flex min-h-12 items-center cursor-pointer rounded-lg bg-[#02d15c] px-4 text-sm font-medium text-white transition-colors hover:bg-[#00c257] active:bg-[#00c257]"
    >
      <PlusIcon className="size-6 md:mr-2" />
      <span className="hidden md:block">Разместить объявление</span>
    </button>
  );
};

export default CreateAdvertisementButton;
