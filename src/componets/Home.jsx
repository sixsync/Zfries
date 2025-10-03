import Carousel from "./Carousel";
import Navbar from "./Header";

export default function HomeTop() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-[#310F0F] to-[#A72A2A]">
      <Navbar />
      <div className="w-full max-w-5xl relative">
        <Carousel className="absolute w-1/1 left-1/2 -translate-1/2 z-10 " />
        <div className="absolute h-[600px] top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center text-center px-4 py-10">
          <div className="flex justify-between items-center w-full px-10">
            <h1 className="grey-qo text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold">
              Super
            </h1>
            <h1 className="bungee-hairline text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-wide mt-2">
              DELICIOUS
            </h1>
          </div>
          <h1 className="absolute inter-main pr-3 bg-gradient-to-b from-[#FFD400] via-[#FFE148]/60 to-[#CCAA00] bg-clip-text text-transparent text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[13rem] font-extrabold leading-tight">
            POPCORN
          </h1>
        </div>
      </div>

      <div className="absolute justify-between px-[25px] bottom-20 flex w-full inter-main text-center text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] bg-gradient-to-b from-[#ffffff] to-[#ffffff6a] bg-clip-text text-transparent ">
        <div className="max-w-[300px]">
          Light, fluffy, and perfectly roasted – popcorn made to brighten your
          moments.
        </div>
        <div className="max-w-[300px]">
          From salty classics to cheesy thrills, every pack is a taste
          adventure.
        </div>
      </div>
    </main>
  );
}
