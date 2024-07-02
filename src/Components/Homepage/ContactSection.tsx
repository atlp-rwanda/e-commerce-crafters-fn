<<<<<<< HEAD
import React from "react";
import { useTranslation } from "react-i18next";
const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="pl-64 py-16 bg-gray-100 flex justify-center font-poppins text-xl">
      <div className="flex-grow md:w-1/2">
        <h2 className="text-primary text-4xl font-bold mb-4">
          {t("Get In Touch With Us")}
        </h2>
        <h2 className="text-secondary text-3xl mb-16">
          {t("We Are Here To Help")}
        </h2>
=======
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../Redux/features/contactSlice';
import { RootState, AppDispatch } from '../../Redux/store';

interface Props {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  sendMessage: (messageData: { name: string; email: string; content: string }) => void; 
}

const ContactSection: React.FC<Props> = ({ status, error, sendMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form Data:', { name, email, content });

    if (!name || !email || !content) { 
      alert('All fields are required.');
      return;
    }

    sendMessage({ name, email, content }); 
  };

  return (
    <section className="pl-64 py-16 bg-gray-100 flex justify-center font-poppins text-xl">
      <div className='flex-grow md:w-1/2'>
        <h2 className="text-primary text-4xl font-bold mb-4">Get In Touch With Us</h2>
        <h2 className="text-secondary text-3xl mb-16">We Are Here To Help</h2>
>>>>>>> 8714478 (added integration on contact)
        <div className="flex flex-col">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <div className="flex flex-grow items-center space-x-8 mb-16">
              <i className="fas fa-phone text-primary"></i>
<<<<<<< HEAD
              <p className="text-primary">
                {t(
                  "If you have an urgent business concern please contact us at"
                )}
                07********0
              </p>
            </div>
            <div className="bg-primary flex justify-center space-x-4 mt-4 p-4 text-white text-3xl w-full max-w-md rounded-xl ">
              <a href="#">
                <i className="fab fa-facebook mr-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter mr-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin mr-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram mr-4"></i>
              </a>
=======
              <p className='text-primary'>If you have an urgent business concern please contact us at 07********0</p>
            </div>
            <div className="bg-primary flex justify-center space-x-4 mt-4 p-4 text-white text-3xl w-full max-w-md rounded-xl ">
              <a href="#"><i className="fab fa-facebook mr-4"></i></a>
              <a href="#"><i className="fab fa-twitter mr-4"></i></a>
              <a href="#"><i className="fab fa-linkedin mr-4"></i></a>
              <a href="#"><i className="fab fa-instagram mr-4"></i></a>
>>>>>>> 8714478 (added integration on contact)
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 text-lg">
<<<<<<< HEAD
        <h2 className="text-secondary text-3xl font-bold mb-16">
          {t("Send Us Message")}
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder={t("Your Name")}
              className="w-full p-2 border rounded"
=======
        <h2 className="text-secondary text-3xl font-bold mb-16">Send Us Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
>>>>>>> 8714478 (added integration on contact)
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
<<<<<<< HEAD
              placeholder={t("Your Email")}
              className="w-full p-2 border rounded"
=======
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
>>>>>>> 8714478 (added integration on contact)
            />
          </div>
          <div className="mb-4">
            <textarea
<<<<<<< HEAD
              placeholder={t("Your Message")}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button className="bg-primary flex justify-center space-x-4 mt-4 p-4 text-white text-xl w-full max-w-md rounded-xl ">
            {t("Send Message")}
          </button>
        </form>
=======
              placeholder="Your Message"
              className="w-full p-2 border rounded"
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
            ></textarea>
          </div>
          <button
            className="bg-primary flex justify-center space-x-4 mt-4 p-4 text-white text-xl w-full max-w-md rounded-xl"
            type="submit"
          >
            Send Message
          </button>
        </form>
        {status === 'loading' && <p>Sending...</p>}
        {status === 'succeeded' && <p>Message sent successfully!</p>}
        {status === 'failed' && <p>Error: {error}</p>}
>>>>>>> 8714478 (added integration on contact)
      </div>
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  status: state.contact.status,
  error: state.contact.error,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  sendMessage: (messageData: { name: string; email: string; content: string }) => dispatch(sendMessage(messageData)), // Changed message to content
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);
