import { cn } from "@/lib/utils";
import { FC } from "react";

interface ICategoryCard {
  isActive?: boolean;
  name: string;
  price: string;
  logo: string;
}

const CategoryCard: FC<ICategoryCard> = ({
  isActive = false,
  name,
  price,
  logo,
}) => {
  return (
    <div
      style={{
        backgroundColor: isActive
          ? "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), radial-gradient(50% 50% at 50% 50%, rgba(77, 255, 116, 0.10) 0%, rgba(5, 128, 32, 0.40) 100%)"
          : "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), radial-gradient(50% 50% at 50% 50%, rgba(137, 137, 137, 0.10) 0%, rgba(137, 137, 137, 0.40) 100%)",
      }}
      className={cn(
        "border w-full flex items-center gap-2 rounded-[8px] py-3 px-3 ",
        isActive ? "border-[#4DFF74]" : "border-[#898989]"
      )}
    >
      <div>
        <div
          className={cn(
            " text-white w-[26px] h-[26px] rounded-[4px] grid place-items-center",
            !isActive ? "bg-skin-gray-50" : " bg-skin-green/65"
          )}
        >
          <span className=" block text-xs text-center font-black italic">
            {logo}
          </span>
        </div>
      </div>
      <div>
        <h3 className=" text-[10px] font-black text-white">{name}</h3>
        <h4 className=" text-[10px] font-black  text-skin-gray-100">{price}</h4>
      </div>
    </div>
  );
};

export default CategoryCard;
