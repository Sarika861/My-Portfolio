import { FileText, Eye, Download } from "lucide-react";

export default function Resume() {
    return (
        <section
            id="resume"
            className="py-24 bg-zinc-950 border-t border-white/5"
        >
            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center mb-14">
                    <div className="flex justify-center items-center gap-2 text-purple-400 mb-3">
                        <FileText className="w-5 h-5" />
                        <span className="uppercase tracking-widest text-sm font-semibold">
                            Resume
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold text-white">
                        My Resume
                    </h2>

                    <div className="w-16 h-1 bg-purple-500 rounded-full mx-auto mt-4"></div>
                </div>

                <div className="group bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-10 transition-all duration-500 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:-translate-y-2">

                    <div className="flex flex-col items-center text-center">

                        <div className="w-24 h-24 rounded-full bg-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                            <FileText className="w-12 h-12 text-purple-400" />
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-4">
                            Resume
                        </h3>

                        <p className="text-zinc-400 max-w-2xl leading-8 mb-10">
                            Explore my resume to learn more about my education,
                            technical skills, certifications, internships, and
                            real-world projects in Web Development, AI, and Data Science.
                        </p>

                        <div className="flex flex-wrap justify-center gap-5">

                            <a
                                href="/Final resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105"
                            >
                                <Eye size={20} />
                                View Resume
                            </a>

                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center gap-2 border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105"
                            >
                                <Download size={20} />
                                Download Resume
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}