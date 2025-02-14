import { sizeClasses } from "../lib/constants/constants";
import { AdvertisementImageSize } from "../models/types";
import template from "/images/template.png";

interface AdvertisementImageProps {
  imageUrl: string | undefined;
  alt: string;
  size: AdvertisementImageSize;
}

const AdvertisementImage: React.FC<AdvertisementImageProps> = ({
  imageUrl,
  alt,
  size,
}) => {
  return (
    <img
      src={imageUrl || template}
      alt={alt}
      className={`${sizeClasses[size]} object-cover`}
    />
  );
};

export default AdvertisementImage;
