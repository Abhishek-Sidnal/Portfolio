import React, { useState } from "react";
import emailjs from "emailjs-com";
import { AiOutlineCheckCircle, AiOutlineLoading3Quarters, AiOutlineCopy } from "react-icons/ai";
import contact from "../assets/images/contact.png";

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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
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
          setFormData({ name: "", email: "", message: "" }); // Clear form after submission
        })
        .catch((error) => {
          console.error("Email sending error:", error);
          setLoading(false);
          setErrors({ submit: "Failed to send message. Please try again." });
        });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
  };

  return (
    <section id="contact" className="p-5 md:p-10  transition-colors duration-300">
      <div className="max-w-7xl mx-auto md:px-4 lg:px-6 ">
        <h2 className="text-center text-3xl font-heading font-bold text-light-primary dark:text-dark-text mb-12">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Contact Information Section */}
          <div className="text-light-primary dark:text-dark-text">
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <div className="mb-6">
              <img src={contact} alt="Contact" className="rounded-4xl shadow-custom-light dark:shadow-custom-dark" />
            </div>
            <p className="text-light-secondary dark:text-dark-text-secondary mb-6">
              I'm actively seeking new job opportunities and available for freelance projects. Feel free to reach out if you have any positions or projects you'd like to discuss.
            </p>
            <p className="mb-2 flex items-center">
              <span className="font-bold">Email: </span>
              <span className="ml-2">{`sidnalap051@gmail.com`}</span>
              <AiOutlineCopy 
                onClick={() => copyToClipboard("sidnalap051@gmail.com")}
                className="ml-2 cursor-pointer"
                title="Copy email"
              />
            </p>
            <p className="mb-2 flex items-center">
              <span className="font-bold">Location: </span>
              <span className="ml-2 whitespace-nowrap">{`Bangalore, Karnataka, India`}</span>
             
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full">
            {!loading && !submitted && (
              <form onSubmit={handleSubmit} className="space-y-6 p-5 lg:p-8 bg-light-card dark:bg-dark-card shadow-light-lg dark:shadow-dark-lg rounded-xl sm:rounded-2xl lg:rounded-4xl">
                <div>
                  <label htmlFor="name" className="block text-light-primary dark:text-dark-text font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-text focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent shadow-custom-light dark:shadow-custom-dark"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-light-primary dark:text-dark-text font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-text focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent shadow-custom-light dark:shadow-custom-dark"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-light-primary dark:text-dark-text font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-bg dark:bg-dark-bg text-light-primary dark:text-dark-text focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent shadow-custom-light dark:shadow-custom-dark"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 ${loading ? 'bg-gray-400' : 'bg-light-accent dark:bg-dark-accent'} text-white font-semibold rounded-lg hover:bg-light-primary dark:hover:bg-dark-primary focus:outline-none focus:ring-4 focus:ring-light-accent dark:focus:ring-dark-accent transition-all`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}

            {/* Loading Animation */}
            {loading && (
              <div className="flex flex-col items-center space-y-3">
                <AiOutlineLoading3Quarters className="animate-spin text-light-accent dark:text-dark-accent" size={40} />
                <p className="text-light-primary dark:text-dark-text">Sending message, please wait...</p>
              </div>
            )}

            {/* Success Message */}
            {submitted && !loading && (
              <div className="flex flex-col items-center space-y-3">
                <AiOutlineCheckCircle className="text-light-accent dark:text-dark-accent" size={40} />
                <p className="text-light-primary dark:text-dark-text">Thank you! Your message has been sent.</p>
              </div>
            )}
            {/* Submission Error Message */}
            {errors.submit && <p className="text-red-500 text-sm mt-1 text-center">{errors.submit}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
