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
    <section className="px-8 md:px-64 py-16 bg-gray-100 flex flex-col md:flex-row justify-center font-outfit md:text-xl md:space-x-40 sm:h-auto md:h-screen mt-24 sm:mt-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Get In Touch With Us</h2>
        <h2 className="text-secondary text-2xl md:text-3xl mb-16">We Are Here To Help</h2>
        <div className="flex flex-col">
          <div className="w-full mb-4 md:mb-0">
            <div className="flex items-center space-x-4 mb-16">
              <i className="fas fa-phone text-primary"></i>
              <p className="text-primary sm:text-sm md:text-2xl">If you have an urgent business concern please contact us at 07********0</p>
            </div>
            <div className="bg-primary flex justify-center space-x-6 mt-4 p-4 text-white text-2xl md:text-3xl w-full max-w-md rounded-xl">
              <a href="#"><i className="fab fa-facebook mr-4"></i></a>
              <a href="#"><i className="fab fa-twitter mr-4"></i></a>
              <a href="#"><i className="fab fa-linkedin mr-4"></i></a>
              <a href="#"><i className="fab fa-instagram mr-4"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-base md:text-lg">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold mb-4">Send Us Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded"
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
            ></textarea>
          </div>
          <button
            className="bg-primary mt-4 p-4 text-white text-lg md:text-xl w-full rounded-xl"
            type="submit"
          >
            Send Message
          </button>
        </form>
        {status === 'loading' && <p className="mt-4 text-primary">Sending...</p>}
        {status === 'succeeded' && (
          <div className="mt-4 p-4 border-l-4 border-green-500 bg-green-100 text-green-700">
            <p className="font-bold">Success!</p>
            <p>Your message has been sent successfully!</p>
          </div>
        )}
        {status === 'failed' && (
          <div className="mt-4 p-4 border-l-4 border-red-500 bg-red-100 text-red-700">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  status: state.contact.status,
  error: state.contact.error,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  sendMessage: (messageData: { name: string; email: string; content: string }) => dispatch(sendMessage(messageData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);
