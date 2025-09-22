import React, { useReducer, useEffect } from "react";
import { MailIcon } from "./Icons";
import Image from 'next/image';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  status: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FIELD":
      return { ...state, [action.field]: action.value };
    case "STATUS":
      return { ...state, status: action.status };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
}

const ContactInfo = () => (
  <div className="pt-0 px-0 sm:pt-1 sm:px-0 md:pt-2 md:px-0 lg:pt-2 lg:px-0 xl:pt-2 xl:px-0 2xl:pt-2 2xl:px-0 flex flex-col items-center justify-center mt-4 mb-8 md:mb-6">
    <div className="text-sm md:text-sm lg:text-sm xl:text-base text-gray-700 dark:text-gray-300 space-y-3 text-center">
      {/* Use a fixed width for each row so the icon column and labels align, while the whole block stays centered */}
  <div className="w-64 md:w-full mx-auto flex items-center gap-3 justify-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black dark:bg-white border border-black/10 dark:border-white/10 shadow-sm flex items-center justify-center">
          <Image src="/images/icons/email-black.png" alt="email" width={16} height={16} className="w-4 h-4 filter invert dark:invert-0" />
        </div>
        <a href="mailto:jlloyd.legaspi@gmail.com" className="underline text-sm md:text-base text-left">jlloyd.legaspi@gmail.com</a>
      </div>

      <div className="w-64 md:w-full mx-auto flex items-center gap-3 justify-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black dark:bg-white border border-black/10 dark:border-white/10 shadow-sm flex items-center justify-center">
          <Image src="/images/icons/phone.png" alt="phone" width={16} height={16} className="w-4 h-4 filter invert dark:invert-0" />
        </div>
        <a href="tel:+639455816978" className="underline text-sm md:text-base text-left">+63 945 581 6978</a>
      </div>

      <div className="w-64 md:w-full mx-auto flex items-center gap-3 justify-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black dark:bg-white border border-black/10 dark:border-white/10 shadow-sm flex items-center justify-center">
          <Image src="/images/icons/location.png" alt="location" width={16} height={16} className="w-4 h-4 filter invert dark:invert-0" />
        </div>
  <span className="text-sm md:text-base text-left">Manila, Philippines</span>
      </div>
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="mt-4 flex flex-col items-center md:flex-col md:items-center md:gap-8 md:justify-center">
      <div className="flex gap-4 items-center justify-center">
        <a
          href="/Legaspi_John_Lloyd_Resume.pdf"
          target="_blank"
          className="flex items-center h-9 px-4 text-xs rounded bg-black text-white dark:bg-white dark:text-black font-medium border border-transparent transform transition-transform duration-200 hover:scale-105 hover:shadow-sm"
          download={true}
          aria-label="Download CV"
        >
          <span className="leading-none">Download CV</span>
        </a>

        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center h-9 px-4 text-xs rounded bg-black text-white dark:bg-white dark:text-black font-medium border border-transparent transform transition-transform duration-200 hover:scale-105 hover:shadow-sm"
          aria-label="Schedule a meeting"
        >
          <span className="leading-none">Schedule Meeting</span>
        </a>
      </div>

  {/* Social icons removed per request; buttons above retained */}
  </div>
);

const ContactSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { firstName, lastName, email, message, status } = state;

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => dispatch({ type: "STATUS", status: null }), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "FIELD", field: name, value });
  };

  const isValidEmail = (value) => {
    // simple, permissive email check
    return /\S+@\S+\.\S+/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      dispatch({ type: "STATUS", status: { type: "error", text: "Please fill in your full name, email and message." } });
      return;
    }
    if (!isValidEmail(email)) {
      dispatch({ type: "STATUS", status: { type: "error", text: "Please enter a valid email address." } });
      return;
    }

    const fullName = `${firstName} ${lastName}`.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${fullName}`);
    const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\n\n${message}`);

    // Open user's mail client as a simple fallback for this static site
    if (typeof window !== "undefined") {
      window.location.href = `mailto:jlloyd.legaspi@gmail.com?subject=${subject}&body=${body}`;
      dispatch({ type: "STATUS", status: { type: "success", text: "Opening your mail client..." } });
    } else {
      dispatch({ type: "STATUS", status: { type: "error", text: "Unable to open mail client in this environment." } });
    }
  };

  return (
    <section
      id="contact"
      className={
        "w-full bg-light dark:bg-dark pt-0 " +
        "pb-8 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-12 2xl:pb-12"
      }
    >
  <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-12 pb-6 sm:pb-6 md:pb-8 lg:pb-8 xl:pb-8 2xl:pb-8">
        <div className="w-full mt-6 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6">
          <div className="grid grid-cols-3 md:grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 items-start">

            {/* Header: left column on large screens, centered on small screens */}
            <div className="col-span-1 text-center mb-0 max-w-md mx-auto md:mx-0">
              <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold mb-2">Let’s Connect!</h3>
              <p className="max-w-2xl md:max-w-full font-medium text-sm leading-relaxed mt-3 mb-8">I’m open to collaborations, internships, job offers, and exciting opportunities.</p>

              {/* Contact details and CTA buttons */}
              <ContactInfo />

            </div>

            {/* Form: spans two columns on large screens, full-width stacked on small screens */}
            <div className="col-span-2">
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm md:h-full md:flex md:flex-col">
                <form onSubmit={handleSubmit} className="w-full bg-transparent md:h-full md:flex md:flex-col">
                  <div className="flex flex-col gap-4 md:flex-1">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                      <label className="flex flex-col text-sm md:text-base text-left" htmlFor="firstName">
                        <span className="mb-1 text-gray-700 dark:text-gray-300 text-sm md:text-base text-left font-semibold">First name <span className="text-red-600 ml-1">*</span></span>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={firstName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          aria-required="true"
                          placeholder="First Name"
                          required
                        />
                      </label>

                      <label className="flex flex-col text-sm md:text-base text-left" htmlFor="lastName">
                        <span className="mb-1 text-gray-700 dark:text-gray-300 text-sm md:text-base text-left font-semibold">Last name <span className="text-red-600 ml-1">*</span></span>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={lastName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                          aria-required="true"
                          placeholder="Last Name"
                          required
                        />
                      </label>
                    </div>

                    <label className="flex flex-col text-sm md:text-base text-left" htmlFor="email">
                      <span className="mb-1 text-gray-700 dark:text-gray-300 text-sm md:text-base text-left font-semibold">Email <span className="text-red-600 ml-1">*</span></span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        aria-required="true"
                        placeholder="you@domain.com"
                        required
                      />
                    </label>

                    <label className="flex flex-col text-sm md:text-base text-left" htmlFor="message">
                      <span className="mb-1 text-gray-700 dark:text-gray-300 text-sm md:text-base text-left font-semibold">Message <span className="text-red-600 ml-1">*</span></span>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-4 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        aria-required="true"
                        placeholder="Drop your message — I’d love to hear from you."
                        required
                      />
                    </label>

            <div className="flex flex-row items-center gap-4 mt-6 md:mt-auto 2xl:mt-auto">
                      <button
                        type="submit"
            className="h-12 sm:h-12 md:h-14 px-6 rounded bg-black text-white dark:bg-white dark:text-black font-semibold transition-transform hover:scale-105 w-auto sm:w-full text-sm md:text-base flex items-center justify-center gap-3"
                      >
                      <Image src="/images/icons/paper-plane.png" alt="send" width={20} height={20} className="w-5 h-5 invert dark:invert-0" />
                        <span>Send</span>
                      </button>
                    </div>

                    {status && (
                      <div role="status" aria-live="polite" className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                        {status.text}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
