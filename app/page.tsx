"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const projects = [
    {
      title: "Wave + Buoyancy Emulator",
      img: "./ocean1.gif",
      desc: "Used Gerstner's wave equation to generate naturally flowing waves.",
      details:
        "Used Gerstner's wave equation incorporating trigonometry to generate naturally flowing waves in a 3D space. Programmed a buoyancy system in Lua to dynamically apply forces to floating objects.",
      link: "https://x.com/plaggno/status/1864364004048580742",
    },
    {
      title: "Reactive Particles",
      img: "./boidDemo.gif",
      desc: "Developed a boid algorithm that react's to other nodes along with the player's avatar.",
      details:
        "The boid algorithm rewards the particles based off several rules which result in them randomly and smoothly flowing between one another. The boids will attempt to stay in their designated zone and avoid the player.",
      link: "https://www.roblox.com/games/18242072567/Boid-Particle-Demo",
    },

    {
      title: "Cooking System",
      img: "./kecaiMixer.gif",
      desc: "For Kecai, created a complete cooking system with a chef queue, recipes, and minigames.",
      details:
        "Chefs queue up using a UI overview to recieve an order. The chef then can play through over 10 minigames both 2D and 3D as they work through the steps of the recipe to prepare the meal.",
    },
    {
      title: "Rogue-like Burger Game",
      img: "./slorgsEateryDemo.gif",
      desc: "Silly customers and strategic flexibility with dynamic progression.",
      details:
        "Developed a rogue-like cooking web game using JavaScript with a dynamic progression system. Engineered an algorithmic daily shop for strategic upgrades, while personally creating all visual assets.",
      link: "https://slorg.club/#/race"
    },
  ];

  const experiences = [
    {
      company: "Danforth Plant Science Center",
      logo: "./images/danforthlogo2.webp",
      role: "Data Science Intern",
      period: "Mar 2022 - Jul 2022",
      desc: "Programmed Python workflow modules to analyze data from plant images.",
      bullets: [
        "Programmed Python workflow modules to analyze and extract data from plant images using PlantCV.",
        "Made graphs of data using R based off experiment results from CSV tables.",
      ],
    },
    {
      company: "Bayer",
      logo: "./images/bayerlogo.webp",
      role: "Software Engineer Intern",
      period: "May 2023 - Aug 2023",
      desc: "Developed new internal web components using React and Vue Javascript libraries.",
      bullets: [
        "Developed new internal web components for Bayer employees using ReactJS and VueJS.",
        "Enhanced debugging skills by working collaboratively with previous developer's code in a team environment.",
      ],
    },
    {
      company: "World Wide Technology",
      logo: "./images/wwtlogo2.webp",
      role: "Full-Stack Developer Intern",
      period: "May 2024 - Aug 2024",
      desc: "Programmed in Vue along with writing raw SQL for backend support.",
      bullets: [
        "Implemented new features for WWT's corporate website using VueJS, including a modernized research footer.",
        "Supported backend development by writing and running SQL scripts for efficient internal page creation.",
      ],
    },
    {
      company: "Veterans United",
      logo: "./images/vulogo2.webp",
      role: "Software Engineer Intern",
      period: "May 2025 - Aug 2025",
      desc: "Migrated legacy C# services into a new system architecture.",
      bullets: [
        "Migrated and modernized legacy C# services into a new system architecture.",
        "Debugged and optimized front-end web components for loan modules using JavaScript.",
      ],
    },
    {
      company: "Kecai",
      logo: "./images/kecailogo2.png",
      role: "Gameplay Engineer",
      period: "Mar 2025 - Dec 2025",
      desc: "Developed gameplay mechanics and interactive systems for multiplayer games.",
      bullets: [
        "Designed and developed engaging 2D and 3D puzzles for kitchen-themed minigames using Lua.",
        "Optimized ordering systems by streamlining logic and accounting for edge cases in Roblox.",
      ],
    },
  ];

  const highlighted_text = "text-cyan-200"

  const topRow = experiences.slice(0, 3);
  const bottomRow = experiences.slice(3);

  return (
    <div>
      {/* ===== ABOUT SECTION ===== */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12 py-20 gap-10"
      >
        <Card className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12 py-20 gap-10 ">
        <div className="flex flex-col gap-6 max-w-lg">
          <h1 className="text-2xl font-bold tracking-tight leading-tight">
            Hello, I'm <span className={highlighted_text}>Micheal</span>
          </h1>
          <p className="text-lg text-default-600">
            I've worked professionally in <span className={highlighted_text}>Software Engineering</span> and <span className={highlighted_text}>Game Development</span>{" "}
            from C# architecture migrations to owning multiplayer role management systems in Lua.
            I enjoy moving across different stacks, the technology changes but the problem solving is what keeps me hooked.
            Currently looking for{" "}
            <span className={highlighted_text}>full-time</span> and{" "}
            <span className={highlighted_text}>contracting</span> positions.
          </p>
          <Button
            as={Link}
            href="#projects"
            color="primary"
            size="lg"
            variant="solid"
            className = "transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(45,110,235,0.8)] hover:-translate-y-1"
          >
            See My Work
          </Button>
        </div>

        {/* Visual project image */}
        <Image
          alt="Featured project"
          src="./ocean2.gif"
          radius="lg"
          className="shadow-lg w-full max-w-lg object-cover"
        />
        </Card>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section
        id="experience"
        className="w-full max-w-6xl px-6 md:px-12 py-5 flex flex-col items-center gap-12"
      >
        <h2 className="text-4xl font-semibold text-center">
          Professional Experience
        </h2>

        <div className="w-full flex flex-col items-center gap-10">
          {/* ---------- TOP ROW: ALWAYS 3 ITEMS ---------- */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {topRow.map((job, i) => (
              <Card
                key={i}
                className="flex flex-col p-6 h-[280px] w-[280px] rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 cursor-pointer items-center"
                isPressable
                onPress={() => setSelectedJob(job)}
              >
                <div className="flex flex-col flex-1 items-center text-center">
                  <Image
                    alt={job.company}
                    src={job.logo}
                    width={100}
                    height={100}
                    className="object-contain mb-4 mx-auto shrink-0"
                  />

                  <h3 className="text-lg font-semibold leading-tight mb-1 px-2">
                    {job.company}
                  </h3>

                  <p className="text-sm font-medium text-default-700 leading-snug px-3">
                    {job.role}
                  </p>

                  <p className="text-sm text-default-500 mt-auto pt-4">
                    {job.period}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* ---------- BOTTOM ROW: ALWAYS 2 ITEMS ---------- */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {bottomRow.map((job, i) => (
              <Card
                key={i}
                className="flex flex-col p-6 h-[280px] w-[280px] rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 cursor-pointer items-center"
                isPressable
                onPress={() => setSelectedJob(job)}
              >
                <div className="flex flex-col flex-1 items-center text-center">
                  <Image
                    alt={job.company}
                    src={job.logo}
                    width={100}
                    height={100}
                    className="object-contain mb-4 mx-auto shrink-0"
                  />

                  <h3 className="text-lg font-semibold leading-tight mb-1 px-2">
                    {job.company}
                  </h3>

                  <p className="text-sm font-medium text-default-700 leading-snug px-3">
                    {job.role}
                  </p>

                  <p className="text-sm text-default-500 mt-auto pt-4">
                    {job.period}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section
        id="education"
        className="w-full max-w-6xl px-6 md:px-12 py-5 flex flex-col items-center gap-12"
      >
        <h2 className="text-4xl font-semibold text-center">
          Education
        </h2>
        <div className="w-full ">
          <Card className=" shadow-xl p-5 flex flex-col md:flex-row items-center gap-10">
            {/* School Logo */}
            <div className="flex-shrink-0">
              <Image
                alt="University Logo"
                src="./images/mizzoulogo.webp" // Replace with your logo path
                radius="sm"
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* Education Info */}
            <div className="flex flex-col gap-4 text-center md:text-left max-w-3xl">
              <h4 className="text-2xl font-semibold">
                University of Missouri - Columbia
              </h4>
              <p className="text-md font-medium">
                BS in Computer Science, Minor in Business - Graduated: May 2026
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section
        id="projects"
        className="w-full max-w-6xl px-6 md:px-12 py-5 flex flex-col items-center gap-12"
      >
        <h2 className="text-4xl font-semibold text-center">Projects</h2>

        <Card className="w-full p-6 rounded-2xl">
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* LEFT COLUMN – TITLE + DESCRIPTION */}
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Here's a Speech Emulator I made!
                </h2>

                <p className="text-default-600">
                  I developed an algorithm that plays audio as text shows up
                  progressively, reminiscent of games like Animal Crossing. Every alphabetical letter
                  is mapped to a specific sound and a specifc pitch. This way if
                  the character says the same thing twice, it sounds like it! I
                  also programmed the progression of pitch throughout sentences
                  to make the speech sound more natural. All of this was to
                  simulate (to a degree) what a language sounds like when
                  spoken.
                </p>
              </div>

              {/* RIGHT COLUMN – VIDEO EMBED */}
              <div className="w-full">
                {/* YouTube Embed */}
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/gQm2lnQOUUo?si=pM25QQC1pvzQ9xA1"
                    title="Speech Emulator Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {projects.map((proj, i) => (
            <Card
              key={i}
              isPressable
              onPress={() => setSelectedProject(proj)}
              className="transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 cursor-pointer"
            >
              <Image
                alt={proj.title}
                src={proj.img}
                radius="lg"
                className="object-cover w-full h-64"
              />
              <CardBody className="flex flex-col items-start gap-3 p-5">
                <h3 className="text-2xl font-semibold">{proj.title}</h3>
                <p className="text-default-600 text-sm">{proj.desc}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== PROJECT MODAL ===== */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        size="lg"
        scrollBehavior="inside"
        hideCloseButton
        classNames={{
        base: "shadow-[0_0_40px_rgba(37,99,235,0.3)]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">
                {selectedProject?.title}
              </ModalHeader>
              <ModalBody>
                <Image
                  alt={selectedProject?.title}
                  src={selectedProject?.img}
                  radius="lg"
                  className="object-cover w-full h-64 mb-4"
                />
                <p className="text-default-600">{selectedProject?.details}</p>
              </ModalBody>
              <ModalFooter>
                {selectedProject?.link && (
                  <Button
                    as={Link}
                    href={selectedProject.link}
                    color="primary"
                    variant="solid"
                    target="_blank"
                    className = "transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(45,110,235,0.6)]"
                  >
                    See More
                  </Button>
                )}
                <Button variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={selectedJob}
        onClose={() => setSelectedJob(null)}
        size="lg"
        scrollBehavior="inside"
        hideCloseButton
        classNames={{
        base: "shadow-[0_0_40px_rgba(37,99,235,0.3)]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">
                {selectedJob?.role}
              </ModalHeader>
              <ModalBody>
                <Image
                  alt={selectedJob?.company}
                  src={selectedJob?.logo}
                  radius="lg"
                  className="object-cover w-20 h-20 mb-4"
                />
                <div className="text-default-600 space-y-3">
                  {selectedJob?.details && <p>{selectedJob.details}</p>}

                  {selectedJob?.bullets && selectedJob.bullets.length > 0 && (
                    <ul className="list-disc pl-6 space-y-1">
                      {selectedJob.bullets.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                {selectedJob?.link && (
                  <Button
                    as={Link}
                    href={selectedJob.link}
                    color="primary"
                    variant="shadow"
                    target="_blank"
                  >
                    See More
                  </Button>
                )}
                <Button variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
