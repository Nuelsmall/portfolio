import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import caseStudy from "@/assets/edventur/Edventur_case_study json 1.json";

export const metadata: Metadata = {
  title: "Edventur Case Study | Emmanuel John",
  description:
    "Edventur is an AI-powered study app that turns notes into interactive quizzes. Explore the research, design decisions, and outcomes behind Study Mode.",
};

type CaseStudySection = {
  section: string;
  text?: string[];
  images?: string[];
};

const SectionWrapper = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={`w-full px-10 py-20 flex items-center justify-center max-lg:py-12 ${className}`}
  >
    <div className="w-full max-w-350">{children}</div>
  </section>
);

const EdventurCaseStudyPage = () => {
  const sections = (caseStudy.content as CaseStudySection[]).reduce(
    (acc, item) => {
      acc[item.section] = item;
      return acc;
    },
    {} as Record<string, CaseStudySection>
  );

  const overview = sections["Overview"]?.text ?? [];
  const role = sections["Role"]?.text ?? [];
  const snapshot = sections["Project Snapshot"]?.text ?? [];
  const challenge = sections["The challenge"]?.text ?? [];
  const understanding = sections["Understanding the problem"]?.text ?? [];
  const research = sections["Research Insight"]?.text ?? [];
  const definingUser = sections["Defining the user"]?.text ?? [];
  const mapping = sections["Mapping the experience"]?.text ?? [];
  const pathway = sections["Setting the Path way"]?.text ?? [];
  const wireframes = sections["Wireframes to high fidelity"]?.text ?? [];
  const decisions = sections["Design Decisions"]?.text ?? [];
  const usability = sections["Usability Testing"]?.text ?? [];
  const performance = sections["Performance summary"]?.text ?? [];
  const workedWell = sections["What worked well"]?.text ?? [];
  const issues = sections["Key issues found"]?.text ?? [];
  const result = sections["Result"]?.text ?? [];
  const reflection = sections["Reflection and Key Outcomes"]?.text ?? [];

  const snapshotItems = snapshot
    .map((item) => {
      const [label, ...rest] = item.split(":");
      return {
        label: label?.trim(),
        value: rest.join(":").trim(),
      };
    })
    .filter((item) => item.label && item.value);

  const researchIntro = research[0];
  const researchBullets = research.slice(1);

  const roleTitle = role[0];
  const roleBody = role.slice(1);

  const usabilityIntro = usability[0];
  const usabilityLabel = usability[1];
  const usabilityBullets = usability.slice(2);

  const workedWellSummary = workedWell[workedWell.length - 1];
  const workedWellBullets = workedWell.slice(0, -1);

  const decisionsIntro = decisions[0];
  const decisionsOutro = decisions[decisions.length - 1];
  const decisionPairs = [] as { title: string; detail: string }[];
  for (let i = 1; i < decisions.length - 1; i += 2) {
    const title = decisions[i];
    const detail = decisions[i + 1];
    if (!title || !detail) break;
    decisionPairs.push({ title, detail });
  }

  const outcomesIndex = reflection.findIndex((line) =>
    line.toLowerCase().startsWith("key outcomes")
  );
  const reflectionIntro =
    outcomesIndex === -1 ? reflection : reflection.slice(0, outcomesIndex);
  const outcomes =
    outcomesIndex === -1 ? [] : reflection.slice(outcomesIndex + 1);

  const mockups = [
    "/edventur/upload-1.png",
    "/edventur/upload-2.png",
    "/edventur/upload-3.png",
    "/edventur/mode-selection.png",
    "/edventur/ai-gen-1.png",
    "/edventur/ai-gen-3.png",
    "/edventur/quiz-summary.png",
    "/edventur/leaderboard.png",
  ];

  return (
    <div className="flex flex-col bg-gray-100 min-h-dvh border">
      <Header />
      <main className="flex-1">
        <SectionWrapper>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="border w-fit px-3 py-1 rounded-full text-sm text-orange-800">
                  Case Study
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-600">
                  Education
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-600">
                  Mobile App
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-600">
                  AI-Powered Learning
                </span>
              </div>
              <h1 className="text-5xl font-semibold leading-tight max-lg:text-4xl max-w-220">
                Edventur — Turning study material into active, repeatable
                practice
              </h1>
              <p className="text-lg text-gray-600 max-w-190">
                {overview[0]}
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-3xl border bg-white shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <Image
                src="/edventur/overview.png"
                alt="Edventur case study hero"
                width={1536}
                height={1024}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                  Overview
                </span>
                <div className="flex flex-col gap-4 text-gray-700 leading-7 mt-12">
                  {overview.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              {/* <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Project Snapshot
                </h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {snapshotItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                    >
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Role
                </p>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                  {roleTitle}
                </h3>
                <div className="mt-4 flex flex-col gap-3 text-sm leading-6 text-gray-600">
                  {roleBody.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Outcome
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {snapshotItems.find((item) => item.label === "Outcome")?.value}
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold text-neutral-900">
                The Challenge
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {challenge.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold text-neutral-900">
                Understanding the Problem
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {understanding.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Research Insight
              </span>
              <p className="text-lg text-neutral-900 font-semibold">
                {researchIntro}
              </p>
              <ul className="flex flex-col gap-3 text-sm leading-6 text-gray-600">
                {researchBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/edventur/research-insights.png"
                alt="Edventur research insights"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Defining the User
              </span>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {definingUser.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/edventur/user-persona.png"
                alt="User persona"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Mapping the Experience
              </span>
              <p className="text-gray-600 leading-7">{mapping[0]}</p>
            </div>

            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/edventur/user-journey.png"
                alt="User journey map"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Setting the Pathway
              </span>
              <p className="text-gray-600 leading-7">{pathway[0]}</p>
            </div>

            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/edventur/user-flow.png"
                alt="User Flow"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Information Architecture
              </span>
              <p className="text-gray-600 leading-7">
                The information architecture for Edventur was designed to make the study journey intuitive and seamless. I mapped out every step—from uploading materials to quiz completion—ensuring that users always know where they are and what comes next. The structure reduces friction, keeps navigation simple, and supports momentum by making each stage of the process clear and easy to follow. Special care was taken to address edge cases, so learners feel confident and supported throughout their experience.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/edventur/information-architecture.png"
                alt="Information Architecture"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Wireframes to High Fidelity
              </span>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {wireframes.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <div
                className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]"
              >
                <Image
                  src="/edventur/wireframe-3.png"
                  alt="Wireframe exploration"
                  width={1536}
                  height={1024}
                  className="h-auto w-full rounded-xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>

              <div
                className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]"
              >
                <Image
                  src="/edventur/wireframe-5.png"
                  alt="Wireframe exploration"
                  width={1536}
                  height={1024}
                  className="h-auto w-full rounded-xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
            <div className="grid gap-4">
              {[
                // "/edventur/wireframe-3.png",
                "/edventur/wireframe-4.png",
                // "/edventur/wireframe-5.png",
              ].map((src) => (
                <div
                  key={src}
                  className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]"
                >
                  <Image
                    src={src}
                    alt="Wireframe exploration"
                    width={1536}
                    height={1024}
                    className="h-auto w-full rounded-xl object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 max-w-200">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Design Decisions
              </span>
              <p className="text-gray-600 leading-7">{decisionsIntro}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {decisionPairs.map((decision) => (
                <div
                  key={decision.title}
                  className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {decision.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {decision.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 max-w-200">{decisionsOutro}</p>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col gap-4">
                <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                  Usability Testing
                </span>
                <p className="text-gray-600 leading-7">{usabilityIntro}</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {usabilityLabel}
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                  {usabilityBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                "/edventur/usability-1.png",
                "/edventur/usability-2.png",
                "/edventur/usability-3.png",
                "/edventur/usability-4.png",
                "/edventur/usability-5.png",
              ].map((src) => (
                <div
                  key={src}
                  className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]"
                >
                  <Image
                    src={src}
                    alt="Usability testing snapshot"
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-xl object-cover"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Performance Summary
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                {performance.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                What Worked Well
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                {workedWellBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                {workedWellSummary}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Key Issues Found
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Result
              </span>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {result.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/edventur/results.png"
                alt="Edventur results summary"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Final Designs
              </span>
              <h2 className="text-3xl font-semibold text-neutral-900">
                Study Mode in Action
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {mockups.map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]"
                >
                  <Image
                    src={src}
                    alt="Edventur screen"
                    width={1320}
                    height={2868}
                    className="h-auto w-full rounded-xl object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
            {/* Figma Prototype Button */}
=======
>>>>>>> cab08290dc3bc19f9a191a944926a1b69fa8f9d1
          <div className="w-full flex justify-center py-10 bg-gray-200">
            <a
              href="https://www.figma.com/proto/lC55Xfxl1IA7p7eDDY8XGp/Edventur?node-id=32-633&p=f&t=IVeJvxLZEEDrzpNC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=32%3A633"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
              style={{ textDecoration: 'none' }}
            >
              View Figma Prototype
            </a>
          </div>
<<<<<<< HEAD
=======
          {/* Figma Prototype Button */}
>>>>>>> cab08290dc3bc19f9a191a944926a1b69fa8f9d1
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold text-neutral-900">
                Reflection and Key Outcomes
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {reflectionIntro.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Key Outcomes
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>

      </main>
      <Footer />
      <div className="fixed bottom-0 bg-linear-to-tl from-white/20 to-transparent z-1000 left-0 h-10 w-full backdrop-blur-sm max-md:hidden"></div>
    </div>
  );
};

export default EdventurCaseStudyPage;
