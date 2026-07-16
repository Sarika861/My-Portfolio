import React from "react";
import Image from "next/image";
import { FolderGit2, ExternalLink } from "lucide-react";
import { Github } from "./SocialIcons";

export default function Projects() {
  const projects = [
    {
      title: "Automatic Resume Parser",
      description: "A smart tool that extracts and structures key details from resumes automatically.",
      image: "/projects/Resume.png",
      tags: ["Angular", "Python", "FastAPI", "ChromaDB"],
      github: "https://github.com/Sarika861/Automatic-Resume-Parser",
      demo: "https://resume-parser-frontend-wheat.vercel.app/",
    },
    {
      title: "Face Mask Detection",
      description: "A computer vision project that detects whether a person is wearing a face mask.",
      image: "/projects/face.png",
      tags: ["OpenCV", "Python", "ML"],
      github: "https://github.com/Sarika861/Face-Mask-Detection",
      demo: "https://face-mask-detection-yfxb.onrender.com",
    },
    {
      title: "Virtual Keyboard",
      description: "An on-screen keyboard experience built for touch and accessibility-friendly input.",
      image: "/projects/virtual.png",
      tags: ["JavaScript", "UI", "Web"],
      github: "https://github.com/Sarika861/Virtual-Keyboard",
      demo: "https://virtual-keyboard-1-i0di.onrender.com",
    },

    {
      title: "Skincare Recommendation System",
      description: "A personalized skincare assistant that recommends products based on skin needs.",
      image: "/projects/skin.png",
      tags: ["Streamlit", "Python", "Recommendation"],
      github: "https://github.com/Sarika861/skin-care-recommendation-",
      demo: "https://sarika861-skin-care-recommendation.streamlit.app/",
    },
    {
      title: "Movie Ticket Booking System",
      description: "A booking application for selecting movies, seats, and completing reservations.",
      image: "/projects/movie.png",
      tags: ["Flask", "Python", "Web App"],
      github: "https://github.com/Sarika861/Movie-Ticket-Booking",
      demo: "https://movie-ticket-booking-wygp.onrender.com",
    },


    {
      title: "Chat History Analyzer",
      description: "An analysis app for exploring conversation patterns and extracting useful insights.",
      image: "/projects/chat.png",
      tags: ["Streamlit", "Pandas", "Python", "Matplotlib"],
      github: "https://github.com/Sarika861/Chat-History-Analyser",
      demo: "https://chat-history-analyser-12.streamlit.app/",
    },
    {
      title: " E-commerce Website",
      description: "A frontend replica of E-commerce with product browsing and modern UI styling.",
      image: "/projects/ecom.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sarika861/Ecommerce-Website",
      demo: "https://amazon-clone-ecommerce-website-mz2hal4qm-sarika861s-projects.vercel.app/",
    },


  ];

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="w-[90%] max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>My Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-purple-500 rounded-full mt-4"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glow-card rounded-2xl overflow-hidden flex flex-col h-full group"
            >
              {/* Project Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-zinc-950 border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/40 text-white transition-all"
                    aria-label="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-zinc-950 border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/40 text-white transition-all"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white/5 border border-white/5 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
