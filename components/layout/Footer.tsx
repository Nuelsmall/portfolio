import Talk from "../ui/talk";
import Email from "../ui/email";
import Image from "next/image";
import Resume from "../ui/Resume";

const Footer = () => {
  return (
    <div className="text-white flex flex-col min-h-130 h-fit px-30 max-lg:px-20 max-md:px-10 max-md:py-10 max-lg:py-15 py-20 bg-black">
      <div className="flex-1 flex lg:gap-10 max-lg:flex-col justify-between gap-5">
        <div className="flex-1 max-lg:w-full  flex flex-col gap-3">
        <div className="border-2 w-12 h-12 overflow-hidden border-gray-400 shadow-md rounded-xl ">
          <Image width={20} height={20} alt="" className="w-full h-full" src={"/portrait.png"}/>
        </div>
          <h2 className="text-2xl font-semibold">Ready to create with purpose?</h2>
          <p className="text-lg max-w-130">
            If you’re looking for a design partner who listens, understands, and
            crafts with intention, let’s start the conversation
          </p>
          <div className="flex gap-5">
            <Talk />
            <Email />
            <Resume/>
          </div>
        </div>
        <ul className="h-50  *:w-fit *:cursor-pointer font-medium w-fit flex flex-col gap-5 *:text-lg flex-wrap">
          <li>Home</li>
          <li>Projects</li>
          <li>More</li>
          <li>About</li>
          <li>Linkedin</li>
        </ul>
      </div>
      <div className="border-t border-gray-300/30 pt-5">
        <p className="text-gray-100/50 text-md font-semibold">
          © 2026 All right reserved to Emmanuel John
        </p>
      </div>
    </div>
  );
};

export default Footer;
