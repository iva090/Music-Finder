import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      console.log("Form Data:", formData);
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 text-center">
        <div className="animate-in fade-in zoom-in duration-300">
          <h1 className="text-3xl font-bold text-white mb-2">Message Sent!</h1>
          <p className="text-gray-400 mb-6">Thanks for reaching out, {formData.name.split(' ')[0]}.</p>
          <button 
            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
            className="text-blue-500 hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#121212] border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Get in Touch</h1>
          <p className="text-red-900 text-sm">Every field is required.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Full Name</label>
            <input 
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              placeholder="John Doe"
              className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Email</label>
            <input 
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email" 
              placeholder="name@company.com"
              className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Message</label>
            <textarea 
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="How can we help?"
              className="w-full bg-[#1a1a1a] border border-white/5 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-all active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;