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
    <section className="bg-light-bg dark:bg-dark-bg transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-light-primary dark:text-dark-text mb-8">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="text-light-primary dark:text-dark-text">
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="text-light-secondary dark:text-dark-text-secondary mb-6">
              I'm actively seeking new job opportunities and available for freelance projects. Feel free to reach out if you have any positions or projects you'd like to discuss.
            </p>
            <p className="mb-2">
              <span className="font-bold">Email: </span>
              sidnalap051@gmail.com
            </p>
            <p>
              <span className="font-bold">Location: </span>
              Bangalore, Karnataka, India
            </p>
          </div>

          {/* Form Section */}
          <div>
            {!loading && !submitted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-light-primary dark:text-dark-text font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full mt-2 p-3 border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-text focus:ring-light-accent dark:focus:ring-dark-accent"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-light-primary dark:text-dark-text font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full mt-2 p-3 border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-text focus:ring-light-accent dark:focus:ring-dark-accent"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-light-primary dark:text-dark-text font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full mt-2 p-3 border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-text focus:ring-light-accent dark:focus:ring-dark-accent"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-light-accent dark:bg-dark-accent text-white font-semibold rounded-lg hover:bg-light-primary dark:hover:bg-dark-primary focus:ring-4 focus:ring-light-accent dark:focus:ring-dark-accent"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Loading Animation */}
            {loading && (
              <div className="flex flex-col items-center space-y-3">
                <AiOutlineLoading3Quarters className="animate-spin text-light-accent dark:text-dark-accent" size={40} />
                <p className="text-light-primary dark:text-dark-text">
                  Sending message, please wait...
                </p>
              </div>
            )}

            {/* Success Message */}
            {submitted && !loading && (
              <div className="flex flex-col items-center space-y-3">
                <AiOutlineCheckCircle className="text-light-accent dark:text-dark-accent" size={40} />
                <p className="text-light-primary dark:text-dark-text">
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
