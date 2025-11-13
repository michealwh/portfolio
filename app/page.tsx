"use client";

import { Button } from "@heroui/button";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-10">
        <div className="flex flex-col items-start gap-5 text-left">
          <h1 className="text-5xl font-bold tracking-tight">
            Hey, I'm <span className="text-primary">Micheal</span> 🤠
          </h1>
          <p className="text-lg text-default-600 max-w-lg">
            I'm a Software Developer and Gameplay Engineer.
          </p>
          <div className="flex gap-3">
            <Button as={Link} href="#projects" color="primary" variant="shadow">
              View My Work
            </Button>
            <Button as={Link} href="#contact" variant="flat">
              Get In Touch
            </Button>
          </div>
        </div>
        <Image
          alt="Profile picture"
          src="https://via.placeholder.com/250"
          radius="full"
          className="w-48 h-48 object-cover"
        />
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-default-600 max-w-2xl">
          With experience in brand development, digital marketing, and creative strategy,
          I help businesses grow their online presence through authentic storytelling
          and actionable insights.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl w-full flex flex-col items-center gap-8">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shadow-md">
              <CardHeader className="pb-0">
                <h3 className="text-xl font-semibold">Project {i}</h3>
              </CardHeader>
              <CardBody>
                <Image
                  alt={`Project ${i}`}
                  src={`https://picsum.photos/400/300?random=${i}`}
                  className="rounded-lg mb-3"
                />
                <p className="text-default-600">
                  A short description of what this project is about and what you accomplished.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold">Let’s Connect</h2>
        <p className="text-default-600 max-w-xl">
          Interested in collaborating or just want to say hi? I'd love to hear from you.
        </p>
        <Button as={Link} href="mailto:michealwhaley42@gmail.com" color="primary" variant="shadow">
          Say Hello 👋
        </Button>
      </section>

      {/* Footer */}
    </div>
  );
}
