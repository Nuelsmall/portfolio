import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import caseStudy from "@/assets/Rentwise_case_study.json";

export const metadata: Metadata = {
  title: "RentWise Case Study | Emmanuel John",
  description:
    "RentWise is a rental platform designed to help Nigerians find trustworthy homes faster and help landlords list properties with less friction. Explore the research, design decisions, and outcomes behind the product.",
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

const RentwiseCaseStudyPage = () => {
  const sections = (caseStudy.content as CaseStudySection[]).reduce(
    (acc, item) => {
      acc[item.section] = item;
      return acc;
    },
    {} as Record<string, CaseStudySection>
  );

  const overview = sections["Overview"]?.text ?? [];
  const role = sections["Role"]?.text ?? [];
  const challenge = sections["The challenge"]?.text ?? [];
  const businessProblem = sections["Business problem"]?.text ?? [];
  const userProblem = sections["User problem"]?.text ?? [];
  const discovery = sections["Discovery Research"]?.text ?? [];
  const whatIFound = sections["What I found"]?.text ?? [];
  const personas = sections["Personas"]?.text ?? [];
  const personaJourney = sections["Renter persona behind this journey"]?.text ?? [];
  const dropPoints = sections["Key emotional drop points"]?.text ?? [];
  const opportunities = sections["Most important product opportunities"]?.text ?? [];
  const userFlows = sections["User Flows"]?.text ?? [];
  const wireframes = sections["Wireframes to High-Fidelity"]?.text ?? [];
  const decisions = sections["Design Decisions"]?.text ?? [];
  const usability = sections["Usability Testing"]?.text ?? [];
  const results = sections["Results"]?.text ?? [];
  const reflection = sections["Reflection"]?.text ?? [];

  // Design Decisions formatting
  const decisionPairs = [] as { title: string; detail: string }[];
  for (let i = 0; i < decisions.length; i += 4) {
    if (decisions[i] && decisions[i + 1] && decisions[i + 2] && decisions[i + 3]) {
      decisionPairs.push({
        title: decisions[i],
        detail: `${decisions[i + 1]} ${decisions[i + 2]} ${decisions[i + 3]}`,
      });
    }
  }

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
                  Real Estate
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-600">
                  Web Platform
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-600">
                  Trust &amp; UX
                </span>
              </div>
              <h1 className="text-5xl font-semibold leading-tight max-lg:text-4xl max-w-220">
                RentWise — Making rentals safer and simpler
              </h1>
              <p className="text-lg text-gray-600 max-w-190">
                {overview[0]}
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-3xl border bg-white shadow-[0_20px_50px_rgba(15,15,15,0.06)]">
              <Image
                src="/Rentwise/rentwise.png"
                alt="Rentwise case study hero"
                width={1536}
                height={1024}
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
                  {challenge.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Role
                </p>
                <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                  {role[0]}
                </h3>
                <div className="mt-4 flex flex-col gap-3 text-sm leading-6 text-gray-600">
                  {role.slice(1).map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {/* <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <Image
                  src="/rentwise/overview-side-placeholder.png"
                  alt="Overview side visual"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-xl object-cover"
                  style={{ maxHeight: 300 }}
                />
              </div> */}
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Business Problem
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {businessProblem[0]}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  User Problem
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {userProblem[0]}
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Discovery Research
              </span>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {discovery.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <h3 className="font-bold mt-2">What I found</h3>
              <ul className="list-disc ml-6 mb-2">
                {whatIFound.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/Rentwise/Research Insight.png"
                alt="Research insights"
                width={1920}
                height={1080}
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
                Personas
              </span>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {personas.map((item) => (
                  <p key={item}>{item}</p>
                ))}
                {personaJourney.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/Rentwise/User persona.png"
                alt="User persona"
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
                Key Emotional Drop Points
              </span>
              <ul className="list-disc ml-6 mb-2">
                {dropPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="font-bold mt-2">Most important product opportunities</h3>
              <ul className="list-disc ml-6 mb-2">
                {opportunities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/Rentwise/rentwise_user_journey_map.png"
                alt="User journey map"
                width={1920}
                height={1080}
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
                User Flows
              </span>
              <div className="flex flex-col gap-4 text-gray-600 leading-7">
                {userFlows.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
              <Image
                src="/Rentwise/user flow.png"
                alt="User flow"
                width={1920}
                height={1080}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="wireframes">
          <div className="flex flex-col gap-8">
            <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
              Wireframes to High-Fidelity
            </span>
            <div className="flex flex-col gap-4 text-gray-600 leading-7 mb-6">
              {wireframes.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[
                "/Rentwise/low/splash.png",
                "/Rentwise/low/dashboard 1.png",
                "/Rentwise/low/dashboard 2.png",
                "/Rentwise/low/onboarding.png",
                "/Rentwise/low/wireframe3.png",
                "/Rentwise/low/wireframe4.png",
              ].map((src, idx) => (
                <div
                  key={src}
                  className="rounded-2xl border bg-white p-1 shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex items-center justify-center"
                  style={{ aspectRatio: '3 / 4', minHeight: '220px' }}
                >
                  <Image
                    width={1200}
                    height={1920}
                    src={src}
                    alt={`Wireframe ${idx + 1}`}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

          {/* High Fidelity Wireframes Section - 3x2 grid, images fill container */}
        <SectionWrapper className="high-fidelity-wireframes">
          <div className="flex flex-col gap-8">
            <span className="w-fit rounded-full border border-blue-400 px-4 py-1 text-sm text-blue-700">
              High Fidelity Wireframe Designs
            </span>
            <div className="flex flex-col gap-4 text-gray-600 leading-7 mb-6">
              <p>These are the high fidelity wireframe designs for the Rentwise platform, showing the final look and feel of the product.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[
                "/Rentwise/hi/hi1.png",
                "/Rentwise/hi/hi2.png",
                "/Rentwise/hi/hi3.png",
                "/Rentwise/hi/hi4.png",
                "/Rentwise/hi/hi5.png",
                "/Rentwise/hi/hi6.png",
              ].map((src, idx) => (
                <div
                  key={src}
                  className="rounded-2xl border bg-transparent shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex items-center justify-center"
                  style={{ aspectRatio: '3 / 4', minHeight: '220px' }}
                >
                  <Image
                    width={1200}
                    height={1600}
                    src={src}
                    alt={`High Fidelity Wireframe ${idx + 1}`}
                    className="object-contain w-full h-full rounded-xl"
                    style={{ background: 'white' }}
                  />
                </div>
              ))}
            </div>
            {/*Figma prototype button */}
             <div className="w-full flex justify-center py-10 bg-gray-200">
            <a
              href="https://www.figma.com/proto/Li9mXcpNjhupBAUEkgvKtr/Rent-Wise?node-id=753-15770&p=f&t=xPFUx83ePq8i1lIU-1&scaling=scale-down&content-scaling=fixed&page-id=3%3A29&starting-point-node-id=302%3A1802&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg"
              style={{ textDecoration: 'none' }}
            >
              View Early Prototype
            </a>
          </div>
          <div className="w-full hidden lg:flex justify-center py-10 bg-gray-200">
            <iframe
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="800"
              height="450"
              src="https://embed.figma.com/proto/Li9mXcpNjhupBAUEkgvKtr/Rent-Wise?scaling=scale-down&content-scaling=fixed&page-id=3%3A29&node-id=753-15770&starting-point-node-id=302%3A1802&show-proto-sidebar=1&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
          
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 max-w-400">
              <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                Design Decisions
              </span>
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Manually structure each card for Issue, Decision, Why */}
                {/* Decision 1 */}
                <div className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Filters were too easy to miss</h3>
                  <div className="mb-1">
                    <span className="font-semibold text-orange-700">Issue:</span>
                    <span className="text-gray-700 ml-1">Renters ignored or struggled to find the filter controls early in the flow.</span>
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold text-blue-700">Decision:</span>
                    <span className="text-gray-700 ml-1">I introduced a sticky filter bar with clearer labels and stronger hierarchy.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700">Why:</span>
                    <span className="text-gray-700 ml-1">Users needed faster control over budget and property type without scanning the whole page.</span>
                  </div>
                </div>
                {/* Decision 2 */}
                <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">The interface felt too icon-heavy</h3>
                  <div className="mb-1">
                    <span className="font-semibold text-orange-700">Issue:</span>
                    <span className="text-gray-700 ml-1">Too many icons made the UI feel noisy and harder to interpret.</span>
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold text-blue-700">Decision:</span>
                    <span className="text-gray-700 ml-1">I reduced icon density and relied more on text labels and clear section headings.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700">Why:</span>
                    <span className="text-gray-700 ml-1">This lowered cognitive load and made navigation easier to understand at a glance.</span>
                  </div>
                </div>
                {/* Decision 3 */}
                <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">Renters wanted to save listings</h3>
                  <div className="mb-1">
                    <span className="font-semibold text-orange-700">Issue:</span>
                    <span className="text-gray-700 ml-1">Users wanted a way to shortlist homes before contacting landlords.</span>
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold text-blue-700">Decision:</span>
                    <span className="text-gray-700 ml-1">I added a Favorites feature for bookmarking and comparing listings.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700">Why:</span>
                    <span className="text-gray-700 ml-1">Comparing properties is a natural part of renting, and forcing immediate action increased hesitation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid gap-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col gap-4">
                <span className="w-fit rounded-full border border-orange-400 px-4 py-1 text-sm text-orange-700">
                  Usability Testing
                </span>
                <p className="text-gray-600 leading-7">
                  {usability[0]}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)]">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Key Findings
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                  {usability.slice(1).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                "/Rentwise/usability1.png",
                "/Rentwise/usability2.png",
                "/Rentwise/usability3.png",
                "/Rentwise/usability4.png",
                "/Rentwise/usability5.png",
              ].map((src, idx) => (
                <div
                  key={src}
                  className="rounded-2xl border bg-white p-3 shadow-[0_12px_30px_rgba(15,15,15,0.06)]"
                >
                  <Image
                    src={src}
                    alt={`Usability testing snapshot ${idx + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
                    // style={{ background: 'white', aspectRatio: '3 / 4', minHeight: '180px' }}
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-200">
          <div className="flex flex-col gap-8">
            <span className="w-fit rounded-full border border-green-400 px-4 py-1 text-sm text-green-700">
              Results
            </span>
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Observed Results */}
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Observed Results</h3>
                <p className="text-gray-700 mb-2">The revised prototype moved RentWise closer to a more trustworthy and easier rental experience. The most important thing the data showed was this: the core opportunity was not simply helping users search for properties. It was reducing hesitation at every decision point.</p>
                <ul className="list-disc ml-4 text-gray-600 text-sm">
                  <li>Users understood the value of verified listings</li>
                  <li>Renters wanted direct landlord access</li>
                  <li>The product direction strongly matched a real market problem</li>
                </ul>
              </div>
              {/* Key Numbers */}
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Key Numbers</h3>
                <ul className="list-disc ml-4 text-gray-600 text-sm">
                  <li>Browse/filter completion: 80%</li>
                  <li>Save/apply completion: 70%</li>
                  <li>Average SUS: 63.1</li>
                  <li>Average confidence: 3.1 / 5</li>
                </ul>
              </div>
              {/* Projected Results */}
              <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Projected Results</h3>
                <ul className="list-disc ml-4 text-gray-600 text-sm">
                  <li>Browse/filter completion: from 80% → 90%</li>
                  <li>Save/apply completion: from 70% → 85%</li>
                  <li>Average confidence: from 3.1 → 4.2</li>
                  <li>Average SUS: from 63.1 → 98</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="flex flex-col gap-8">
            <span className="w-fit rounded-full border border-purple-400 px-4 py-1 text-sm text-purple-700">
              Reflection
            </span>
            <div className="rounded-2xl bg-white p-8 shadow-[0_12px_30px_rgba(15,15,15,0.06)] flex flex-col gap-6">
              <blockquote className="italic text-lg text-gray-700 border-l-4 border-purple-400 pl-4 mb-2">
                {reflection[0]}
              </blockquote>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-2">Key Takeaways</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  {reflection.slice(1).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>

      </main>
      <Footer />
      <div className="fixed bottom-0 bg-linear-to-tl from-white/20 to-transparent z-1000 left-0 h-10 w-full backdrop-blur-sm max-md:hidden"></div>
    </div>
  );
};

export default RentwiseCaseStudyPage;
