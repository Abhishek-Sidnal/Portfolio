import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  AiOutlineCheckCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const emailData = {
        to_name: "Abhishek Sidnal",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      emailjs
        .send(serviceId, templateId, emailData, publicKey)
        .then(() => {
          setSubmitted(true);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Email sending error:", error);
          setLoading(false);
        });
    }
  };

  return (
    <section className="min-h-screen py-12 bg-light-bg dark:bg-dark-bg transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-light-primary dark:text-dark-text mb-12">
          Get in touch
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Information Section */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 dark:from-purple-400 dark:to-pink-600">
              Let's talk
            </h3>
            <p className="text-light-secondary dark:text-dark-text-secondary">
              I'm actively seeking new job opportunities and available for
              freelance projects. Feel free to reach out if you have any
              positions or projects you'd like to discuss. I'm open to
              connecting anytime!
            </p>
            <div className="space-y-4">
              <p className="flex items-center justify-center md:justify-start space-x-3">
                <span className="material-icons text-light-accent dark:text-dark-accent">
                  email
                </span>
                <span className="text-light-secondary dark:text-dark-text-secondary">
                  sidnalap051@gmail.com
                </span>
              </p>
              <p className="flex items-center justify-center md:justify-start space-x-3">
                <span className="material-icons text-light-accent dark:text-dark-accent">
                  location
                </span>
                <span className="text-light-secondary dark:text-dark-text-secondary">
                  Bangalore, Karnataka, India.
                </span>
              </p>
            </div>
          </div>

          {/* Form or Animation Section */}
          <div className="flex-1 w-full relative flex justify-center items-center bg-light-card dark:bg-dark-card sm:p-8 p-4 rounded-lg shadow-lg dark:shadow-dark-lg transition duration-300 ease-in-out">
            {/* Show form if not loading or submitted */}
            {!loading && !submitted && (
              <form onSubmit={handleSubmit} className="w-full sm:space-y-6 space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-light-secondary dark:text-dark-text-secondary"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-light-border dark:border-dark-border bg-transparent rounded-md text-light-primary dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition duration-300"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-light-secondary dark:text-dark-text-secondary"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-light-border dark:border-dark-border bg-transparent rounded-md text-light-primary dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition duration-300"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-light-secondary dark:text-dark-text-secondary"
                  >
                    Write your message here
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-light-border dark:border-dark-border bg-transparent rounded-md text-light-primary dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent transition duration-300"
                    placeholder="Enter your message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-light-accent hover:bg-light-primary dark:bg-dark-accent dark:hover:bg-dark-primary text-light-card dark:text-dark-card font-semibold py-3 rounded-md shadow-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Loading Animation */}
            {loading && (
              <div className="flex flex-col items-center justify-center animate-fadeIn">
                <AiOutlineLoading3Quarters className="animate-spin text-5xl text-light-primary dark:text-dark-accent" />
                <p className="mt-4 text-lg text-light-secondary dark:text-dark-text-secondary">
                  Sending message, please wait...
                </p>
              </div>
            )}

            {/* Success Message */}
            {submitted && !loading && (
              <div className="flex flex-col items-center justify-center animate-fadeIn">
                <AiOutlineCheckCircle className="text-green-500 text-6xl" />
                <p className="mt-4 text-lg text-green-500 font-medium">
                  Thank you! Your message has been sent.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
