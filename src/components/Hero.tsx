import React from "react";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>

      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "-4s" }}
      ></div>

      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-16">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <span className="inline-block bg-purple-950/40 border border-purple-500/30 text-purple-400 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
            AI & Machine Learning Developer
          </span>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 bg-clip-text text-transparent">
              Sarika
            </span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            I'm a B.Tech Computer Science student passionate about Python,
            Machine Learning, Data Science, and Web Development. I enjoy
            building intelligent applications that solve real-world problems
            using AI.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#projects"
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </a>

            <a
              href="#contact"
              className="bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 text-zinc-400">
            <a
              href="https://github.com/Sarika861"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/sarika-choudhary-a585a7372"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:choudharysarika244@gmail.com"
              className="hover:text-white transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-3xl opacity-40"></div>

            {/* Profile Image */}
            <Image
              src={profile}
              alt="Sarika "
              width={420}
              height={420}
              priority
              className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-purple-500 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}