"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

import { SectionHeader } from "../components/SectionHeader";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { personalInfo } from "../data/portfolioData";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errorMsg) {
      setErrorMsg("");
    }

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setErrorMsg("");
    setSubmitted(false);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    const serviceId = (
      import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      (typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_EMAILJS_SERVICE_ID : "") ||
      ""
    ).trim();
    const templateId = (
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      (typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID : "") ||
      ""
    ).trim();
    const publicKey = (
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
      (typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY : "") ||
      ""
    ).trim();

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.", {
        serviceId: Boolean(serviceId),
        templateId: Boolean(templateId),
        publicKey: Boolean(publicKey),
      });

      setErrorMsg(
        "Email service is not configured correctly. Please try again later."
      );

      return;
    }

    if (!formRef.current) {
      setErrorMsg("Unable to submit the form. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey,
        }
      );

      setSubmitted(true);
      setFormData(initialFormData);

      window.setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error: unknown) {
      console.error("EmailJS error:", error);

      let message = "Unable to send your message. Please try again.";

      if (error && typeof error === "object") {
        if ("text" in error && typeof (error as { text: unknown }).text === "string") {
          message = (error as { text: string }).text;
        } else if ("message" in error && typeof (error as { message: unknown }).message === "string") {
          message = (error as { message: string }).message;
        }
      } else if (typeof error === "string" && error.trim()) {
        message = error;
      }

      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build Something"
          description="Have a project, opportunity, or idea you'd like to discuss? Send me a message and I'll get back to you."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 break-all text-base font-medium text-white">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 text-base font-medium text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-400/50" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-400">
                    Availability
                  </p>

                  <p className="mt-1 text-base font-medium text-white">
                    {personalInfo.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="mb-4 text-sm font-medium text-gray-400">
                Find me online
              </p>

              <div className="flex gap-3">
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    <GithubIcon size={19} />
                  </a>
                )}

                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <LinkedinIcon size={19} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="from_name" value={formData.name} />
              <input type="hidden" name="from_email" value={formData.email} />
              <input type="hidden" name="reply_to" value={formData.email} />

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name <span className="text-blue-400">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email <span className="text-blue-400">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  autoComplete="off"
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message <span className="text-blue-400">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project or opportunity..."
                  rows={7}
                  required
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-blue-500/50 focus:bg-black/30 focus:ring-2 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Success message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-300"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0"
                    />

                    <div>
                      <p className="font-medium">
                        Message sent successfully.
                      </p>

                      <p className="mt-1 text-green-300/70">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error message */}
              <AnimatePresence>
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300"
                  >
                    <AlertCircle
                      size={19}
                      className="mt-0.5 shrink-0"
                    />

                    <div>
                      <p className="font-medium">
                        Message could not be sent.
                      </p>

                      <p className="mt-1 break-words text-red-300/80">
                        {errorMsg}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-relaxed text-gray-600">
                Your message will be sent directly to my email.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

