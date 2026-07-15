"use client";

import { useState } from "react";
import { Award } from "lucide-react";



const certifications = [


    {
        title: "Fundamentals of Data Curation using Python",
        organization: "NIELIT (Recognized by NCVET)",
        image: "/projects/nielit.png",

    },
    {
        title: "Data Science with Python",
        organization: "Smarted",
        image: "/projects/smarted.png",

    },
    {
        title: "Data Analysis with Python Developer",
        organization: "freeCodeCamp",
        image: "/projects/free.png",

    },

    {
        title: "HTML, CSS & JavaScript",
        organization: "Udemy",
        image: "/projects/udemy.jpg",

    },
    {
        title: "Introduction to Model Context Protocol (MCP)",
        organization: "Anthropic",
        image: "/projects/model.png",

    },
];

export default function Certifications() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section
                id="certifications"
                className="py-24 bg-zinc-950 border-t border-white/5"
            >
                <div className="max-w-6xl mx-auto px-6">

                    {/* Header */}

                    <div className="grid md:grid-cols-2 gap-8">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition duration-300"
                            >
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-48 object-contain rounded-xl mb-4 cursor-pointer hover:scale-105 transition"
                                    onClick={() => setSelectedImage(cert.image)}
                                />

                                <h3 className="text-xl font-bold text-white">
                                    {cert.title}
                                </h3>

                                <p className="text-purple-400 font-medium mt-2">
                                    {cert.organization}
                                </p>


                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-gray-300"
                    >
                        ✕
                    </button>

                    <img
                        src={selectedImage}
                        alt="Certificate"
                        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
                    />
                </div>
            )}
        </>
    );
}