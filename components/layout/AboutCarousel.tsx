import Image from "next/image";

const carouselItems = [
  {
    src: "/Discora.png",
    alt: "Discora mobile app screens",
    z: 1,
    position:
      "left-[4%] -rotate-6 max-lg:-rotate-4 max-lg:left-[1%] max-md:hidden",
  },
  {
    src: "/dinendash.png",
    alt: "Dine n' Dash ordering flow",
    z: 2,
    position:
      "left-[20%] rotate-4 max-xl:left-[14%] max-lg:hidden",
  },
  {
    src: "/Edventur.png",
    alt: "Edventur education platform screens",
    z: 1,
    position:
      "right-[4%] rotate-6 max-lg:rotate-4 max-lg:right-[2%] max-md:hidden",
  },
  {
    src: "/Paypoint.png",
    alt: "Paypoint fintech dashboard",
    z: 1,
    position:
      "right-[20%] -rotate-4 max-xl:right-[14%] max-lg:hidden",
  },
];

const AboutCarousel = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-350 h-120 max-lg:h-100 max-md:h-fit">
        <div className="absolute inset-x-0 bottom-6 mx-auto h-8 w-2/3 rounded-full bg-black/10 blur-2xl max-md:hidden" />

        {carouselItems.map((item, index) => (
          <div
            key={item.src}
            style={{ zIndex: item.z }}
            className={`absolute top-1/2 -translate-y-1/2 ${item.position}`}
          >
            <div
              className={`about-carousel-float ${
                index % 2 === 0 ? "about-carousel-delay" : ""
              }`}
            >
              <div className="rounded-2xl bg-white p-2 shadow-[0_20px_60px_rgba(15,15,15,0.15)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={420}
                  height={260}
                  className="h-52 w-80 rounded-xl object-cover max-lg:h-44 max-lg:w-64"
                />
              </div>
            </div>
          </div>
        ))}

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ zIndex: 5 }}
        >
          <div className="about-carousel-float about-carousel-center">
            <div className="rounded-3xl bg-black p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <Image
                src="/profile.png"
                alt="Portrait"
                width={520}
                height={360}
                className="h-64 w-96 rounded-2xl object-cover max-lg:h-56 max-lg:w-80 max-md:h-52 max-md:w-72"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 hidden gap-4 overflow-x-auto pb-4 pt-4 max-md:flex">
          {carouselItems.map((item) => (
            <div
              key={`${item.src}-mobile`}
              className="min-w-72 shrink-0 rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(15,15,15,0.15)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={360}
                height={220}
                className="h-44 w-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
