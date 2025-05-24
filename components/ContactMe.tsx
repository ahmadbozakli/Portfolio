"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail, Send, User, MessageSquare, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function ContactMe() {
  const [state, handleSubmit] = useForm("mzzrlzpe");

  if (state.succeeded) {
    toast.success("Message sent successfully!");
  }

  return (
    <section
      id="contact"
      className="px-6 bg-gradient-to-b from-black/10 via-[#0d0d0d]/20 to-black/30 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold tracking-tight mb-3">
          <span className="bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text">
            Get In Touch
          </span>
        </h2>
        <p className="text-gray-300 max-w-md mx-auto text-base sm:text-lg">
          Have a project or just want to say hello? Drop me a message and I'll get back to you as soon as I can.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto space-y-6 bg-[#0f1115]/80 border border-white/10 shadow-xl backdrop-blur-md rounded-xl p-8"
      >
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-300" htmlFor="name">Your Name</label>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3">
            <User className="h-4 w-4 text-gray-400" />
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="bg-transparent flex-1 px-3 py-2 text-white placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-300" htmlFor="email">Your Email</label>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-md px-3">
            <Mail className="h-4 w-4 text-gray-400" />
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="bg-transparent flex-1 px-3 py-2 text-white placeholder-gray-500 focus:outline-none"
            />
          </div>
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-300" htmlFor="message">Message</label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-white/5 border border-white/10 text-white rounded-md px-4 py-2 placeholder-gray-500 focus:outline-none resize-none"
            />
            <MessageSquare className="absolute top-3 right-3 text-gray-400 h-4 w-4" />
          </div>
          <ValidationError field="message" prefix="Message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-accent text-black font-semibold py-2 rounded-md hover:bg-accent/90 transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {state.submitting ? (
            <>
              <Loader2 className="animate-spin h-4 w-4" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </motion.form>
    </section>
  );
}
