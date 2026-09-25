import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,

  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-5 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">

        {/* Hero */}
        <section className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B4527A]">
            Get In Touch
          </p>

          <h1
            className="mt-3 text-4xl font-medium text-[#2A1226] md:text-6xl"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            We'd Love To Hear From You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Have a question about your order, our products, or
            anything else? Our team is here to help.
          </p>
        </section>

        {/* Contact Info */}
        <section className="mb-10 grid gap-5 md:grid-cols-3">

          {/* Email */}
          <div className="group rounded-[26px] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(42,18,38,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1E4EA] text-[#B4527A] transition-all duration-300 group-hover:scale-110">
              <Mail size={21} />
            </div>

            <h3
              className="mt-5 text-xl text-[#2A1226]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Email Us
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              hello@velora.com
            </p>

            <p className="mt-1 text-xs text-gray-400">
              We usually reply within 24 hours.
            </p>
          </div>

          {/* Phone */}
          <div className="group rounded-[26px] bg-[#2A1226] p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(42,18,38,0.16)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B4527A] text-white transition-all duration-300 group-hover:scale-110">
              <Phone size={21} />
            </div>

            <h3
              className="mt-5 text-xl"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Call Us
            </h3>

            <p className="mt-2 text-sm text-white/70">
              +92 300 1234567
            </p>

            <p className="mt-1 text-xs text-white/45">
              Mon – Sat, 10 AM – 7 PM
            </p>
          </div>

          {/* Location */}
          <div className="group rounded-[26px] bg-[#F4EBDD] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(42,18,38,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#D9A86C] transition-all duration-300 group-hover:scale-110">
              <MapPin size={21} />
            </div>

            <h3
              className="mt-5 text-xl text-[#2A1226]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Visit Us
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Velora Studio
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Pakistan
            </p>
          </div>

        </section>

        {/* Main Contact Area */}
        <section className="grid overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(42,18,38,0.07)] lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}
          <div className="relative overflow-hidden bg-[#2A1226] p-8 text-white md:p-10">

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#B4527A]/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#D9A86C]/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9A86C]">
                Customer Care
              </p>

              <h2
                className="mt-4 text-3xl leading-tight md:text-4xl"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Let's Make Your
                <br />
                Velora Experience Better.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                Whether you need help choosing the perfect piece
                or have a question about your order, we're always
                happy to help.
              </p>

              {/* Small Info */}
              <div className="mt-10 space-y-5">

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Clock size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Support Hours
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      Monday – Saturday · 10 AM – 7 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Email Support
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      hello@velora.com
                    </p>
                  </div>
                </div>

              </div>

              {/* Social */}
              <div className="mt-10 flex gap-3">

                {/* <
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#B4527A]"
                >
                  {/* <Instagram size={17} /> */}
                
{/* 
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#B4527A]"
                >
                  <Facebook size={17} />
                </a> */}

              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-7 md:p-10">

            <div className="mb-8">
              <h2
                className="text-2xl text-[#2A1226] md:text-3xl"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Send Us A Message
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and we'll get back to you soon.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-[#E8DED8] bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#2A1226] outline-none transition focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-[#E8DED8] bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#2A1226] outline-none transition focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-[#E8DED8] bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#2A1226] outline-none transition focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#2A1226]">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-2xl border border-[#E8DED8] bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#2A1226] outline-none transition focus:border-[#B4527A] focus:ring-2 focus:ring-[#B4527A]/10"
                />
              </div>

              {/* Button */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

                {sent ? (
                  <p className="text-sm font-semibold text-[#B4527A]">
                    ✓ Message sent successfully!
                  </p>
                ) : (
                  <p className="text-xs text-gray-400">
                    We'll respond as soon as possible.
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-full bg-[#2A1226] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B4527A] hover:shadow-xl"
                >
                  Send Message

                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </div>

            </form>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-10 rounded-[28px] bg-[#F1E4EA] px-6 py-8 text-center md:px-10">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B4527A]">
            Need Quick Help?
          </p>

          <h2
            className="mt-2 text-2xl text-[#2A1226]"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Explore Our Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Find quick answers about shipping, returns, orders
            and more.
          </p>

          <a
            href="/#faq"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2A1226]"
          >
            Visit FAQ
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </section>

      </div>
    </main>
  );
};

export default Contact;
