import { FC } from "react";

interface DetailItemProps {
  label: string;
  value: string | number;
}

const DetailItem: FC<DetailItemProps> = ({ label, value }) => (
  <li className="text-lg">
    <span className="text-[#787774]">{label}:</span> {value}
  </li>
);

export default DetailItem;
