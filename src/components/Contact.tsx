"use client";

import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

import { Github, Linkedin } from "./SocialIcons";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_zdntmuz",
        "template_bunppda",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "gd8CbiB4lSJl9eysW"
      );

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);

      if (error?.text) {
        console.error("Error Text:", error.text);
      }

      if (error?.status) {
        console.error("Status:", error.status);
      }

      alert(`Error: ${error?.text || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-24 bg-zinc-950 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-purple-400 mb-3">
            <MessageSquare className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm font-semibold">
              Contact
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white">
            Get In Touch
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            I'm always open to internships, freelance opportunities,
            collaborations, or simply connecting with fellow developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">

          {/* Contact Information */}

          <div className="lg:col-span-5 bg-zinc-900 border border-white/10 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            {/* Email */}

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-500">
                  Email
                </p>

                <a
                  href="mailto:choudharysarika244@gmail.com"
                  className="text-white hover:text-purple-400 transition"
                >
                  choudharysarika244@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-500">
                  Phone
                </p>

                <a
                  href="tel:+919805430398"
                  className="text-white hover:text-purple-400 transition"
                >
                  +91 9805430398
                </a>
              </div>
            </div>

            {/* Location */}

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-500">
                  Location
                </p>

                <p className="text-white">
                  Himachal Pradesh, India
                </p>
              </div>
            </div>

            {/* GitHub */}

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Github className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/Sarika861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition"
                >
                  github.com/Sarika861
                </a>
              </div>
            </div>

            {/* LinkedIn */}

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Linkedin className="w-5 h-5" />
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-500">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/sarika-choudhary-a585a7372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition"
                >
                  linkedin.com/in/sarika-choudhary-a585a7372
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <div className="lg:col-span-7">

            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-8 space-y-6"
            >

              {submitted && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>
                    Message sent successfully!
                  </span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">

                <div>
                  <label className="text-sm text-zinc-400">
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="text-sm text-zinc-400">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
                    placeholder="you@example.com"
                  />
                </div>

              </div>

              <div>

                <label className="text-sm text-zinc-400">
                  Message
                </label>

                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="w-full mt-2 bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none resize-none"
                  placeholder="Write your message..."
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <Send className="w-5 h-5" />}
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}