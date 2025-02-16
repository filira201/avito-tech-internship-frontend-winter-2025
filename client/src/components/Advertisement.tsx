import { FC } from "react";
import { TypeAdvertisement } from "../models/types";
import { useNavigate } from "react-router";
import AdvertisementImage from "./AdvertisementImage";

interface AdvertisementProps {
  advertisement: TypeAdvertisement;
}

const Advertisement: FC<AdvertisementProps> = ({ advertisement }) => {
  const navigate = useNavigate();

  return (
    <article className="bg-[#ffffffe6] shadow-lg rounded-lg overflow-hidden">
      <AdvertisementImage
        imageUrl={advertisement.image}
        alt={advertisement.name}
        size="medium"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-[#1a1a1a] mb-2 truncate w-full">
          {advertisement.name}
        </h2>
        <p className="text-[#787774] text-sm truncate w-full">
          {advertisement.location}
        </p>
        <p className="text-[#0099f7] font-medium truncate w-full">
          {advertisement.type}
        </p>
        <button
          onClick={() => navigate(`/item/${advertisement.id}`)}
          className="mt-4 w-full cursor-pointer py-2 bg-[#0582ff] text-white rounded-lg transition-colors hover:bg-[#045ac3] active:bg-[#045ac3]"
        >
          Открыть
        </button>
      </div>
    </article>
  );
};

export default Advertisement;
