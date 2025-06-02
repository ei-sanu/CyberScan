import { motion } from 'framer-motion';
import { Mail, MessageSquare, User } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-28 pb-16"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-cyber-blue">Get in</span>{' '}
            <span className="text-cyber-pink">Touch</span>
          </h1>
          <p className="text-cyber-purple-200">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={onSubmit}
          className="space-y-6 bg-cyber-dark p-6 rounded-lg border border-cyber-purple-700"
        >
          {/* Name Input */}
          <div className="flex items-center relative bg-cyber-dark/50 rounded-lg">
            <User className="absolute left-3 text-cyber-purple-400" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-4 pl-12 bg-transparent border border-cyber-purple-400 text-white rounded-lg focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center relative bg-cyber-dark/50 rounded-lg">
            <Mail className="absolute left-3 text-cyber-purple-400" size={20} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-4 pl-12 bg-transparent border border-cyber-purple-400 text-white rounded-lg focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
            />
          </div>

          {/* Message Input */}
          <div className="flex relative bg-cyber-dark/50 rounded-lg">
            <MessageSquare className="absolute left-3 top-4 text-cyber-purple-400" size={20} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 pl-12 bg-transparent border border-cyber-purple-400 text-white rounded-lg focus:outline-none focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue"
            />
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-cyber-blue text-white rounded-lg font-semibold hover:bg-cyber-blue/90 transition-colors"
          >
            Send Message
          </button>

          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center p-3 rounded-lg ${result === "Sending...."
                  ? "bg-cyber-purple-400/20 text-cyber-purple-200"
                  : result.includes("success")
                    ? "bg-green-500/20 text-green-500"
                    : "bg-red-500/20 text-red-500"
                }`}
            >
              {result}
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
