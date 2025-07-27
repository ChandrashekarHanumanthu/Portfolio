import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with all form data
    const subject = formData.subject || 'Portfolio Contact Form';
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}%0A%0ASent from portfolio website on ${new Date().toLocaleString()}`;
    
    // Open user's default email client
    window.location.href = `mailto:hanumanthuchandrashekar972@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    setSubmitStatus('success');
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400 resize-none"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <div className="bg-green-900/50 border border-green-700 text-green-200 p-4 rounded-lg text-center">
                Thank you for your message! Your email client should have opened. 
                Please send the email to complete the process.
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-slate-700 break-words">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a 
              href="mailto:hanumanthuchandrashekar972@gmail.com" 
              className="text-slate-300 hover:text-purple-300 transition-colors break-all"
              style={{ wordBreak: 'break-word' }}
            >
              hanumanthuchandrashekar972@gmail.com
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-slate-700">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href="tel:+918500394181" className="text-slate-300 hover:text-purple-300 transition-colors">
              8500394181
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-slate-700">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-slate-300">Hyderabad, Telangana</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-slate-700">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://linkedin.com/in/chandrashekar-hanumanthu-1329232b3" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/ChandrashekarHanumanthu" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-gray-300 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;