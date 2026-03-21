
import Talk from "../ui/talk";
import Email from "../ui/email";
import Image from "next/image";
import Resume from "../ui/Resume";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/#reviews" },
];

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-10 text-white sm:px-10 lg:px-20 xl:px-30">
      <div className="flex min-h-[420px] flex-col justify-between gap-10 lg:min-h-[520px]">
        <div className="flex flex-1 flex-col justify-between gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <div className="border-2 w-12 h-12 overflow-hidden border-gray-400 shadow-md rounded-xl">
              <Image
                width={20}
                height={20}
                alt="Emmanuel John portrait"
                className="w-full h-full object-cover"
                src="/portrait.png"
              />
            </div>

            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Ready to create with purpose?
            </h2>

            <p className="max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              If you’re looking for a design partner who listens, understands,
              and crafts with intention, let’s start the conversation.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-5">
              <Talk />
              <Email />
              <Resume />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Quick Links
            </p>

            <ul className="flex flex-col gap-4">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="https://www.linkedin.com/in/john-emmanuel-3327a11a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-white/80 transition hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300/20 pt-5">
          <p className="text-sm font-medium text-white/45 sm:text-base">
            © 2026 All rights reserved to Emmanuel John
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;