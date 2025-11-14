"use client";

import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { SocialIcon } from 'react-social-icons'

import {DiscordIcon, LinkedinIcon, MailIcon, TwitterIcon, XIcon} from "./icons"

export default function Footer() {
  return (
    <footer className="w-full mt-10 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4">
        <h4 className="text-xl font-semibold">Connect</h4>

        {/* Social Icons */}
        <div className="flex gap-6">

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/micheal-whaley"
            target="_blank"
            className="text-default-600 hover:text-primary transition-colors"
          >
            <LinkedinIcon size={16} />
          </Link>

          {/* Email */}
          <Link
            href="mailto:michealwhaley42@gmail.com"
            className="text-default-600 hover:text-primary transition-colors"
          >
            <MailIcon size={20} />
          </Link>

          {/* X (Twitter) */}
          <Link
            href="https://x.com/plaggno"
            target="_blank"
            className="text-default-600 hover:text-primary transition-colors"
          >
            <XIcon size={16} />
          </Link>

          {/* Discord */}
          <Link
            href="https://discord.gg/5p4vexVS8V"
            target="_blank"
            className="text-default-600 hover:text-primary transition-colors"
          >
            <DiscordIcon size={20} />
          </Link>

        </div>
      </div>
    </footer>
  );
}

