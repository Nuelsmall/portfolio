import Image from "next/image";
import { useEffect, useState } from "react";

const Profile = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;

      const newScale = Math.min(1 + scrollY * 0.001,1.4)
      setScale(newScale);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="border-gray-300 overflow-hidden w-full max-w-100 h-full z-10 rounded-2xl border-6">
      <Image
        src={"/profile.png"}
        alt="profile"
        className="w-full h-full"
        width={400}
        height={400}
        objectFit="contain"
        style={{
          transform: `scale(${scale})`,
          transitionDuration: "500ms",
        }}
      />
    </div>
  );
};

export default Profile;
