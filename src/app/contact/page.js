'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt, FaPaperPlane } from 'react-icons/fa';
import sendEmail from '@/app/libs/sendEmail';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    const emailContent = `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `;
    
    try {
      await sendEmail(formData.email, 'Message from Contact Form', emailContent);
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  
    setTimeout(() => {
      toast.error('Error. Please try again later.');
    }, 5000);
  };  

  return (
    <div className="min-h-screen flex items-center justify-center py-4 px-2 lg:py-10 lg:px-4 mt-14 lg:mt-0">
      <ToastContainer />
      <motion.div
        className="shadow-lg rounded-lg p-6 lg:p-12 max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Get In Touch</h2>
        
        <form className="space-y-6" onSubmit={handleSendEmail}>
          <div className="flex items-center border-b border-blue-400 py-2">
            <FaUser className="text-blue-600 text-xl mr-4" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-2 px-2 bg-transparent outline-none text-foreground"
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange}
              required 
            />
          </div>

          <div className="flex items-center border-b border-blue-400 py-2">
            <FaEnvelope className="text-blue-600 text-xl mr-4" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-2 px-2 bg-transparent outline-none text-foreground"
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border-b border-blue-400 py-2">
            <FaPhone className="text-blue-600 text-xl mr-4" />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full py-2 px-2 bg-transparent outline-none text-foreground"
              name="phone" 
              id="phone" 
              value={formData.phone} 
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-start border-b border-blue-400 py-2">
            <FaCommentAlt className="text-blue-600 text-xl mr-4 mt-2" />
            <textarea
              placeholder="Your Message"
              name='message'
              id='message'
              className="w-full py-2 px-2 bg-transparent outline-none text-foreground resize-none"
              value={formData.message} 
              onChange={handleChange}
              required
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="mr-2" /> {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
