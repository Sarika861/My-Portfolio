import {
    Briefcase,
    Calendar,
    MapPin,
    CheckCircle,
} from "lucide-react";

const experiences = [
    {
        role: "Data Science Trainee",
        company: "Meander Software",
        duration: "Jan 2026 – Jul 2026",
        location: "On-site",
        highlights: [
            "Working with real-world datasets",
            "Building Machine Learning models",
            "Creating data visualizations",
            "Learning Deep Learning concepts",
        ],
        skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    },
    {
        role: "Data Science Using Python",
        company: "SmartED Innovations",
        duration: "Sep 2025 – Nov 2025",
        location: "Remote",
        highlights: [
            "Performed data preprocessing",
            "Built predictive models",
            "Analyzed real-world datasets",
            "Created visual dashboards",
        ],
        skills: [
            "Python",
            "Data Analysis",
            "Machine Learning",
            "Statistics",
        ],
    },
    {
        role: "Fundamentals of Data Curation Using Python",
        company: "NIELIT Ropar",
        duration: "Jun 2025 – Jul 2025",
        location: "On-site",
        highlights: [
            "Data collection & cleaning",
            "Data preprocessing",
            "Worked with Python libraries",
            "Improved analytical skills",
        ],
        skills: [
            "Python",
            "Data Cleaning",
            "Preprocessing",
            "Data Management",
        ],
    },
];
export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 bg-black border-t border-white/5"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-purple-400 mb-3">
                        <Briefcase className="w-5 h-5" />
                        <span className="uppercase tracking-widest text-sm font-semibold">
                            Experience
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold text-white">
                        Experience & Education
                    </h2>

                    <div className="w-16 h-1 bg-purple-500 rounded-full mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {experiences.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-lg p-7 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]"
                        >
                            {/* Glow */}
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>

                            <h3 className="text-2xl font-bold text-white">
                                {item.role}
                            </h3>

                            <p className="text-purple-400 font-semibold mt-2">
                                {item.company}
                            </p>

                            <div className="flex items-center gap-2 text-zinc-400 text-sm mt-5">
                                <Calendar size={16} />
                                {item.duration}
                            </div>

                            <div className="flex items-center gap-2 text-zinc-400 text-sm mt-2">
                                <MapPin size={16} />
                                {item.location}
                            </div>

                            <div className="mt-6 space-y-3">
                                {item.highlights.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle
                                            size={18}
                                            className="text-green-400 mt-0.5"
                                        />
                                        <span className="text-zinc-300 text-sm">
                                            {point}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-7">
                                {item.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs hover:bg-purple-500 hover:text-white transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}