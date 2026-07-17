import React from "react";
import { User, Code, Sparkles } from "lucide-react";

import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiGit,
  SiGithub,
  SiStreamlit,
  SiJupyter,
  SiKeras,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiFlask,
  SiReact,
} from "react-icons/si";

import { FaAws, FaChartLine } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";




export default function About() {
  const skillCategories = [
    {
      title: "Python Development",
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-400" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
        { name: "Pandas", icon: <SiPandas className="text-purple-400" /> },
        { name: "Matplotlib", icon: <FaChartLine className="text-orange-400" /> },
        { name: "Seaborn", icon: "📊" },
        { name: "OpenCV", icon: <SiOpencv className="text-green-400" /> },
      ],
    },

    {
      title: "Machine Learning",
      skills: [
        {
          name: "Scikit-Learn",
          icon: <SiScikitlearn className="text-orange-500" />,
        },
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="text-orange-400" />,
        },
        {
          name: "Keras",
          icon: <SiKeras className="text-red-500" />,
        },
        {
          name: "Machine Learning",
          icon: "🤖",
        },
        {
          name: "Data Analysis",
          icon: "📈",
        },
        {
          name: "Model Evaluation",
          icon: "📉",
        },
      ],
    },

    {
      title: "Web Development",
      skills: [
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-orange-500" />,
        },
        {
          name: "CSS3",
          icon: "🎨",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-300" />,
        },
        {
          name: "React",
          icon: <SiReact className="text-cyan-400 animate-spin" />,
        },
        {
          name: "Flask",
          icon: <SiFlask className="text-white" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-500" />,
        },
      ],
    },

    {
      title: "Development Tools",
      skills: [
        {
          name: "Git",
          icon: <SiGit className="text-orange-500" />,
        },
        {
          name: "GitHub",
          icon: <SiGithub className="text-white" />,
        },
        {
          name: "AWS",
          icon: <FaAws className="text-orange-400" />,
        },
        {
          name: "Streamlit",
          icon: <SiStreamlit className="text-red-500" />,
        },
        {
          name: "Jupyter",
          icon: <SiJupyter className="text-orange-400" />,
        },
        {
          name: "VS Code",
          icon: <VscVscode className="text-blue-500" />,
        },
      ],
    },
  ];

  const highlights = [
    {
      value: "15+",
      label: "Projects Completed",
    },
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "AI/ML",
      label: "Focused Learning",
    },
    {
      value: "2026",
      label: "B.Tech Graduation",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-zinc-950/40 border-t border-white/5"
    >
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* About Me */}
          {/* ================= About Me ================= */}
          <div className="max-w-5xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">
                Get To Know Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Passionate About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {" "}AI & Machine Learning
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-8">
              Hi, I'm <span className="text-purple-400 font-semibold">Sarika</span>,
              a B.Tech Computer Science Graduate passionate about Artificial Intelligence,
              Machine Learning, and Data Science. I enjoy transforming ideas into
              intelligent solutions through clean code, modern technologies, and
              continuous learning.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

              <div className="group rounded-3xl bg-zinc-900/60 border border-white/10 p-6 hover:border-purple-500 hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-white font-semibold mb-2">
                  AI & ML
                </h3>
                <p className="text-zinc-400 text-sm">
                  Building intelligent models and solving real-world problems.
                </p>
              </div>

              <div className="group rounded-3xl bg-zinc-900/60 border border-white/10 p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-white font-semibold mb-2">
                  Development
                </h3>
                <p className="text-zinc-400 text-sm">
                  Creating responsive web applications with modern technologies.
                </p>
              </div>

              <div className="group rounded-3xl bg-zinc-900/60 border border-white/10 p-6 hover:border-green-500 hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-white font-semibold mb-2">
                  Data Science
                </h3>
                <p className="text-zinc-400 text-sm">
                  Turning data into valuable insights using Python and ML.
                </p>
              </div>

              <div className="group rounded-3xl bg-zinc-900/60 border border-white/10 p-6 hover:border-pink-500 hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-white font-semibold mb-2">
                  Growth
                </h3>
                <p className="text-zinc-400 text-sm">
                  Always learning, exploring, and improving every single day.
                </p>
              </div>

            </div>

            {/* Quote */}
            <div className="mt-14 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8">
              <p className="text-xl italic text-zinc-200 leading-8">
                "I believe technology is most powerful when it solves real-world
                problems. My goal is to build AI-powered applications that create
                meaningful impact while continuously learning and growing as a
                developer."
              </p>
            </div>

          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
              >
                <h4 className="text-3xl font-bold text-purple-400">{item.value}</h4>
                <p className="text-zinc-400 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mt-24">
            <h3 className="flex items-center justify-center gap-3 text-3xl font-bold text-white mb-12">
              <Code className="w-8 h-8 text-purple-400" />
              Technical Skills
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500"
                >
                  <h4 className="text-xl font-bold text-purple-300 mb-6">
                    {category.title}
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-xl bg-zinc-950/70 border border-white/10 px-4 py-3 hover:bg-purple-500/10 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="text-2xl">{skill.icon}</div>
                        <span className="text-zinc-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}