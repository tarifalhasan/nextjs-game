import CategoryCard from "@/components/shared/category-card";
import Image from "next/image";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/death-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      }}
      className=" w-full relative before:z-10 before:absolute before:w-full before:h-full  before:bg-dark-bg overflow-hidden min-h-screen bg-cover bg-center flex flex-col items-center justify-end"
    >
      <div className=" container py-6 space-y-5 max-w-[448px] flex flex-col items-center justify-center relative z-40">
        <div>
          <Image
            width={77}
            height={106}
            alt="dfjndkjfdn"
            src={"/images/death.png"}
          />
        </div>
        <div>
          <h2 className=" text-center text-2xl lg:text-4xl  font-[900]">
            YOU DIED
          </h2>
          <p className=" text-xs font-medium text-white  text-center opacity-[72%]">
            GLOCK 19
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-9 h-9 rounded-[8px] border border-skin-border  bg-skin-dark-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={16}
            viewBox="0 0 14 16"
            fill="none"
          >
            <path
              d="M12.2499 3.94734L11.2426 4.9369M11.2426 4.9369C10.1174 3.83141 8.5913 3.21035 7 3.21035C5.4087 3.21035 3.88258 3.83141 2.75736 4.9369C1.63214 6.0424 1 7.54177 1 9.10518C1 10.6686 1.63214 12.168 2.75736 13.2734C3.88258 14.3789 5.4087 15 7 15C8.5913 15 10.1174 14.3789 11.2426 13.2734C12.3679 12.168 13 10.6686 13 9.10518C13 7.54177 12.3679 6.0424 11.2426 4.9369ZM7 6.15784V9.10518M4.75006 1H9.24994"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className=" flex flex-col  space-y-1 text-center">
          <p className=" text-xs italic   font-extrabold">TIME LEFT</p>
          <p className=" text-xs italic  text-skin-green font-extrabold">
            X:XX
          </p>
        </div>
        <div className=" w-full grid gap-3 lg:grid-cols-2">
          <CategoryCard logo="Q" isActive name="RESPAWN WITH AP" price="$$$$" />
          <CategoryCard logo="E" name="RESPAWN WITH AP" price="$$$$" />
        </div>
      </div>
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(77, 255, 116, 0.40) 0%, rgba(77, 255, 116, 0.00) 100%)",
        }}
        className=" z-20  lg:max-h-full lg:max-w-full  w-[1145px] h-[587px] rounded-full blur-[100px] absolute bottom-[-40%] left-1/2 -translate-x-1/2"
      ></div>
    </div>
  );
};

export default page;
