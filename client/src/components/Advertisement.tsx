import { FC } from "react";
import { TypeAdvertisement } from "../models/types";
import { useNavigate } from "react-router";

interface AdvertisementProps {
  advertisement: TypeAdvertisement;
}

const Advertisement: FC<AdvertisementProps> = ({ advertisement }) => {
  const navigate = useNavigate();

  return (
    <article className="bg-[#ffffffe6] shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover"
        src={
          advertisement.image ||
          "https://t2informatik.de/en/wp-content/uploads/sites/2/2023/04/stub.png"
        }
        alt={advertisement.name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-[#1a1a1a]">
          {advertisement.name}
        </h2>
        <p className="text-[#787774] text-sm">{advertisement.location}</p>
        <p className="text-[#0099f7] font-medium">{advertisement.type}</p>
        <button
          onClick={() => navigate(`/item/${advertisement.id}`)}
          className="mt-4 w-full cursor-pointer py-2 bg-[#00aaff] text-white rounded-lg transition-colors hover:bg-[#0098f7] active:bg-[#0098f7]"
        >
          Открыть
        </button>
      </div>
    </article>
  );
};

export default Advertisement;
