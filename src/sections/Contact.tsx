import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const ContactSection = () => {
  return (
    <div className="py-10 mt-20 lg:mt-28 ">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left z-0 relative overflow-hidden md:py-4 lg:py-4">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-4xl ">
                Let&#39;s create something amazing together 🤘
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your ideas to life? Let&#39;s connect and discuss
                I can help you achieve your digital solutions
              </p>
            </div>
            <div className="flex gap-4">
              <button className="text-white bg-gray-900 inline-flex items-center px-4 h-12 rounded-xl gap-2 w-max border border-gray-900 text-sm">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
              <a
                href="src/assets/files/MdAbdullahAlNoman_Resume_SoftwareEngineer.pdf"
                download
                className="text-gray-900 bg-white inline-flex items-center px-4 h-12 rounded-xl gap-2 w-max border border-gray-900 text-sm"
              >
                <span className="font-semibold">Download CV</span>
                <ArrowDown className="size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
