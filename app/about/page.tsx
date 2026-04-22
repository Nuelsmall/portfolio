"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutCarousel from "@/components/layout/AboutCarousel";
import Resume from "@/components/ui/Resume";
import Email from "@/components/ui/email";

const expertiseAreas = [
  {
    title: "UX Design",
    subtitle: "User flows, IA, prototypes, usability feedback.",
    tagline: "Crafting intentional experiences backed by strategy.",
    detail:
      "With over 4 years of experience in product design, I specialize in transforming real-world problems into elegant digital solutions. From mobile to web, I've designed across domains with one goal in mind: designing with purpose. My strength lies in creating user experiences that not only look and feel right but also perform.",
  },
  {
    title: "Interaction Design",
    subtitle: "Microinteractions, transitions, state handling.",
    tagline: "Because user flows should never feel like mazes.",
    detail:
      "I obsess over how users move through digital interfaces. Whether it's tapping, scrolling, swiping, or pausing, every micro-movement matters. I bring clarity to complex interactions through intuitive flows and responsive feedback, ensuring users always know where they are and where they're going.",
  },
  {
    title: "Visual Design",
    subtitle: "Layout, grids, typography, color systems, responsive UI.",
    tagline: "Function meets form in a balanced dance.",
    detail:
      "Great visuals do more than catch the eye, they guide behavior. I create clean, purposeful visuals that elevate usability. My approach is grounded in visual hierarchy, consistency, and brand alignment, blending aesthetic intelligence with user psychology. Every pixel has a job to do.",
  },
  {
    title: "UX Research",
    subtitle: "Interviews, surveys, usability tests, insight synthesis.",
    tagline: "Asking the right questions to uncover the real needs.",
    detail:
      "I don't guess, I gather. Through interviews, usability tests, surveys, and field research, I uncover insights that drive evidence-based design. Whether it's identifying friction points or validating design decisions, I ensure the user's voice is embedded into every phase of the product lifecycle. Research is where I start, and often where I return to iterate and improve.",
  },
];

const skillset = [
  "User Interface Design",
  "User Experience Research",
  "Wireframing & Prototyping",
  "Design Systems",
  "Interaction Design",
  "Mobile App Design",
  "Web Design",
  "Usability Testing",
  "Accessibility Design (WCAG)",
  "Microinteractions",
];

const education = [
  "B.Sc. Computer Science – University of the People (2024–2027)",
  "PGD in Project Management – CIPM, Ghana (2020)",
  "B.Sc. Zoology & Environmental Biology – University of Calabar (2018)",
];

const certifications = [
  "Human Computer Interaction - Udemy (2025)",
  "Google UX Design Certificate - Google (2025)",
  "UI/UX Master Class – EmboldLab, UK. (2024)",
  "Front-End Web Development – SimpliLearn (2024)",
  "Website UI/UX Design Using ChatGPT – SimpliLearn (2024)",
  "Product Designer (UI/UX) – Terra Learning (2022)",
];

const AboutPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 h-fit min-h-dvh border">
      <Header />
      <div className="flex-1">
        <section className="w-full p-10 flex items-center justify-center py-20 max-lg:py-12">
          <div className="w-full max-w-350 flex flex-col gap-14">
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-5xl font-semibold max-w-230 leading-tight max-lg:text-4xl">
                UI/UX Portfolio || Emmanuel John
              </h1>
              <p className="text-xl text-gray-500 max-w-150">
                I&apos;m a product designer driven by the balance between
                creativity, usability, and impact.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
              <p className="text-lg font-semibold text-neutral-900">About</p>
              <div className="flex flex-col gap-5 text-gray-600 leading-7">
                <p>
                  With over 4 years of experience designing web and mobile
                  products across education, SaaS, and service platforms, I
                  create digital experiences that do more than look good; they
                  solve real problems, feel intuitive to use, and scale with
                  clarity.
                </p>
                <p>
                  My work blends UX research, interaction design, and thoughtful
                  visual systems to help teams build products that are
                  accessible, efficient, and user-centered. From admin tools to
                  mobile apps and digital platforms, I&apos;ve contributed to
                  products at Digital Fortress LTD, Braveryloop, Fixxir,
                  Dselevura, and other startups, always with the same goal: to
                  design with intention and create experiences that truly work
                  for people.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Resume hero />
                  <Email hero />
                </div>
              </div>
            </div>

            <AboutCarousel />

            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                  Expertise
                </span>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {expertiseAreas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {area.title}
                      </h3>
                      <p className="text-sm text-gray-500">{area.subtitle}</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {area.tagline}
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {area.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_2fr]">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900">
                  My Skillset
                </h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {skillset.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-[0_10px_24px_rgba(15,15,15,0.05)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <h3 className="text-xl font-semibold text-neutral-900">
                  Education
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                  {education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <h3 className="text-xl font-semibold text-neutral-900">
                  Certifications & Training
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
      <div className="fixed bottom-0 bg-linear-to-tl from-white/20 to-transparent z-1000 left-0 h-10 w-full backdrop-blur-sm max-md:hidden"></div>
    </div>
  );
};

export default AboutPage;
