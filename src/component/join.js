import React from 'react';

const Join = () => {
  return (
    <div className="bg-gray-100">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Response Has Been Recorded
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Thank you for providing your response. We appreciate your feedback!
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Whatsapp Group
            </h2>
            <a
              href="https://chat.whatsapp.com/KwzLe4ihYAfCOuYNVqiPud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-white text-lg mb-6">
                Join Now
              </button>
            </a>
            <a href="/">
              <button className="bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-white text-lg mb-6 ml-3">
                Return Home
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
