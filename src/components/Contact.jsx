import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = formData.subject || 'Portfolio Contact';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:hanumanthuchandrashekar972@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9]">
              Let's <br /> <span className="text-zinc-600">Connect</span>.
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-md">
              Whether you have a project in mind or just want to say hi, 
              my inbox is always open.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">Email</h4>
                <a href="mailto:hanumanthuchandrashekar972@gmail.com" className="text-2xl font-display text-white hover:text-purple-400 transition-colors">
                  h.chandrashekar@dev.com
                </a>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">Social</h4>
                <div className="flex gap-6">
                  <a href="#" className="text-xl text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-xl text-zinc-400 hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-zinc-800"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-white text-black font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-500 rounded-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
