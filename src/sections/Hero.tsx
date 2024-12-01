import Image from "next/image";
import animeme from "@/assets/images/animeme.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import Star from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroStars } from "@/components/HeroStars";
export const HeroSection = () => {
  return (
    <div className="py-20 md:py-44 lg:py-40 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-20 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {/* ring div */}
        <div className="size-[620px] ring-item "></div>
        <div className="size-[820px] ring-item"></div>
        <div className="size-[1020px] ring-item"></div>
        <div className="size-[1220px] ring-item"></div>

        <HeroStars
          size={420}
          rotation={-15}
          orbitShouldSpin
          orbitSpinDuration="30s"
          shouldStarSpin
          starSpinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroStars>
        <HeroStars
          size={420}
          rotation={85}
          orbitShouldSpin
          orbitSpinDuration="32s"
          shouldStarSpin
          starSpinDuration="3s"
        >
          <SparkleIcon className="size-4 text-emerald-300/20" />
        </HeroStars>
        <HeroStars
          size={500}
          rotation={-40}
          orbitShouldSpin
          orbitSpinDuration="34s"
        >
          <div className="size-2.5 animate-pulse rounded-full bg-emerald-300/20" />
        </HeroStars>
        <HeroStars
          size={510}
          rotation={12}
          orbitShouldSpin
          orbitSpinDuration="36s"
          shouldStarSpin
          starSpinDuration="6s"
        >
          <Star className="size-12 text-emerald-300" />
        </HeroStars>
        <HeroStars
          size={400}
          rotation={-70}
          orbitShouldSpin
          orbitSpinDuration="30s"
          shouldStarSpin
          starSpinDuration="6s"
        >
          <Star className="size-6 text-emerald-300" />
        </HeroStars>
        <HeroStars
          size={540}
          rotation={185}
          orbitShouldSpin
          orbitSpinDuration="38s"
          shouldStarSpin
          starSpinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroStars>
        <HeroStars
          size={590}
          rotation={98}
          orbitShouldSpin
          orbitSpinDuration="40s"
          shouldStarSpin
          starSpinDuration="6s"
        >
          <Star className="size-8 text-emerald-300" />
        </HeroStars>
        <HeroStars
          size={660}
          rotation={10}
          orbitShouldSpin
          orbitSpinDuration="42s"
        >
          <div className="size-2 animate-pulse rounded-full bg-emerald-300/20" />
        </HeroStars>
        <HeroStars
          size={680}
          rotation={90}
          orbitShouldSpin
          orbitSpinDuration="45s"
        >
          <div className="size-4 animate-pulse rounded-full bg-emerald-300/20" />
        </HeroStars>
        <HeroStars
          size={700}
          rotation={150}
          orbitShouldSpin
          orbitSpinDuration="46s"
          shouldStarSpin
          starSpinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroStars>

        <HeroStars
          size={800}
          rotation={170}
          orbitShouldSpin
          orbitSpinDuration="46s"
        >
          <div className="size-1.5 rounded-full bg-emerald-300/20" />
        </HeroStars>
        <HeroStars
          size={800}
          rotation={-80}
          orbitShouldSpin
          orbitSpinDuration="50s"
          shouldStarSpin
          starSpinDuration="6s"
        >
          <Star className="size-28 text-emerald-300" />
        </HeroStars>
        <HeroStars
          size={700}
          rotation={50}
          orbitShouldSpin
          orbitSpinDuration="28s"
          shouldStarSpin
          starSpinDuration="6s"
        >
          <Star className="size-14 text-emerald-300" />
        </HeroStars>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={animeme}
            alt="hero img"
            width={130}
            height={120}
            className="z-50"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new contributions
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto ">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-5 md:mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-sm text-center text-white/60 md:text-lg lg:w-[490px] mx-auto">
            I specialize into transforming ideas and designs
            intofuncitonal,high-performing web applications.Let&apos;s make you
            dream project a reality ✨
          </p>
        </div>
        <div className="flex flex-col items-center mt-2 md:mt-8 gap-4 md:flex-row justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span>Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
