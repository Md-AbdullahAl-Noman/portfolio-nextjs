import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
const footerLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/abdullah-al-noman-se/",
  },
  {
    title: "GitHub",
    url: "https://github.com/Md-AbdullahAl-Noman",
  },
  {
    title: "LeetCode",
    url: "https://leetcode.com/u/md-abdullahal-noman/",
  },
];
export const Footer = () => {
  return (
    <footer className="relative mt-8 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 ">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 text-white z-50">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
