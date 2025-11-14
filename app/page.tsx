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

  const projects = [
    {
      title: "Wave + Buoyancy Emulator",
      img: "/ocean1.gif",
      desc: "Used Gerstner's wave equation to generate naturally flowing waves.",
      details:
        "Used Gerstner's wave equation incorporating trigonometry to generate naturally flowing waves in a 3D space. Programmed a buoyancy system in Lua to dynamically apply forces to floating objects.",
      link: "https://x.com/plaggno/status/1864364004048580742",
    },
    {
      title: "Speech Emulator for NPC Dialogue",
      img: "/images/goblinFurnitureShot.png",
      desc: "Developed an algorithm that plays speech-like sounds as text shows up progressively.",
      details:
        "Developed an algorithm that plays audio as text shows up progressively, reminiscent of Animal Crossing. Programmed the progression of pitch throughout sentences to make the speech sound more natural.",
      link: "https://x.com/plaggno/status/1861617331287257310",
    },
    {
      title: "Kitchen System",
      img: "/kecaiMixer.gif",
      desc: "For Kecai, created a complete Kitchen system with Chefs, Servers, and Customers.",
      details:
        "Made over 20 minigames both 2D and 3D for player Chefs to use in order to complete recipes. Connected Customers orders to be sent to the Kitchen. Servers can pick up orders and give them to the client once ready.",
    },
    {
      title: "Reactive Particles",
      img: "/boidDemo.gif",
      desc: "Developed a boid algorithm that react's to the player's avatar.",
      details:
        "The boid algorithm rewards the particles based off several rules which result in them randomly and smoothly flowing between one another. The boids will stay in their designated box and not run into the avatar.",
    },
  ];

  const experiences = [
    {
      company: "Danforth Plant Science Center",
      logo: "/images/danforthlogo.webp",
      role: "Data Science Intern",
      period: "Mar 2022 - Jul 2022",
      desc: "Programmed Python workflow modules to analyze data from plant images.",
    },
    {
      company: "Bayer",
      logo: "/images/bayerlogo.webp",
      role: "Software Engineer Intern",
      period: "May 2023 - Aug 2023",
      desc: "Developed new internal web components using React and Vue Javascript libraries.",
    },
    {
      company: "World Wide Technology",
      logo: "/images/wwtlogo.webp",
      role: "Full-stack Developer Intern",
      period: "May 2024 - Aug 2024",
      desc: "Programmed in Vue along with using SQL for backend support.",
    },
    {
      company: "Veterans United",
      logo: "/images/vulogo.webp",
      role: "Software Engineer Intern",
      period: "May 2025 - Aug 2025",
      desc: "Migrated legacy C# services into a new system architecture.",
    },
    {
      company: "Kecai",
      logo: "/images/kecailogo.webp",
      role: "Gameplay Engineer",
      period: "Mar 2025 - Present",
      desc: "Developed gameplay mechanics and interactive systems for multiplayer games.",
    },
  ];

  const topRow = experiences.slice(0, 3);
  const bottomRow = experiences.slice(3);

  return (
    <div>
      {/* ===== ABOUT SECTION ===== */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-12 py-20 gap-10"
      >
        <div className="flex flex-col gap-6 max-w-lg">
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            Hey, I'm <span className="green">Micheal</span> 👋
          </h1>
          <p className="text-lg text-default-600">
            I have lots of experience with Software Engineering and Game
            Development and I'm extremely passionate about my work with every
            step of the way! I am currently looking for{" "}
            <span className="text-secondary">full-time</span> and{" "}
            <span className="text-secondary">contracting</span> positions.
          </p>
          <Button
            as={Link}
            href="#projects"
            color="primary"
            size="lg"
            variant="shadow"
          >
            See My Work
          </Button>
        </div>

        {/* Visual project image */}
        <Image
          alt="Featured project"
          src="/ocean2.gif"
          radius="lg"
          className="shadow-lg w-full max-w-lg object-cover"
        />
      </section>

      <section
        id="education"
        className="w-full py-20 flex justify-center bg-background"
      >
        <div className="w-full max-w-6xl px-6 md:px-12">
          <Card className="bg-content2 shadow-xl p-10 flex flex-col md:flex-row items-center gap-10">
            {/* School Logo */}
            <div className="flex-shrink-0">
              <Image
                alt="University Logo"
                src="/images/mizzoulogo.webp" // Replace with your logo path
                radius="lg"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Education Info */}
            <div className="flex flex-col gap-4 text-center md:text-left max-w-3xl">
              <h2 className="text-4xl font-bold">Education</h2>
              <h3 className="text-2xl font-semibold">
                University of Missouri - Columbia
              </h3>
              <p className="text-lg font-medium">
                BS in Computer Science, Minor in Business
              </p>
              <p className="text-default-500">
                I am currently a senior and will
                be graduating this May!
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section
        id="experience"
        className="w-full max-w-6xl px-6 md:px-12 py-20 flex flex-col items-center gap-12"
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
          className="flex flex-col p-6 h-[280px] w-[280px] rounded-2xl shadow-sm"
        >
          <div className="flex flex-col flex-1 items-center text-center">
            <Image
              alt={job.company}
              src={job.logo}
              width={100}
              height={100}
              className="object-contain mb-4"
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
          className="flex flex-col p-6 h-[280px] w-[280px] rounded-2xl shadow-sm"
        >
          <div className="flex flex-col flex-1 items-center text-center">
            <Image
              alt={job.company}
              src={job.logo}
              width={100}
              height={100}
              className="object-contain mb-4"
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

      {/* ===== PROJECTS SECTION ===== */}
      <section
        id="projects"
        className="w-full max-w-6xl px-6 md:px-12 py-20 flex flex-col items-center gap-12"
      >
        <h2 className="text-4xl font-semibold text-center">Projects</h2>

        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
        />

        <Card className="w-full p-6 rounded-2xl bg-content2">
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* LEFT COLUMN – TITLE + DESCRIPTION */}
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Here's a Speech Emulator I made!
                </h2>

                <p className="text-default-600">
                  I developed an algorithm that plays audio as text shows up
                  progressively, reminiscent of Animal Crossing. Every character
                  is mapped to a specific type of sound and specifc pitch. This
                  way if the character says the same thing twice, it sounds like it! I also programmed the progression of
                  pitch throughout sentences to make the speech sound more
                  natural. All of this was to simulate what a language sounds
                  like when spoken.
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
                    title="YouTube video"
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
              className="hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                    variant="shadow"
                    target="_blank"
                  >
                    Learn More
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
