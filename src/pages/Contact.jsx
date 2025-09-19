import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 lg:px-40">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 border-b-4 border-pink-200 pb-4">
          Contact Us 🐾
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-gray-700">
              We'd love to hear from you! Whether you have questions about our products, need help with your order,
              or just want to say hi — feel free to reach out.
            </p>

            <div className="text-gray-700 space-y-2">
              <p><strong>📍 Address:</strong> 123 Pet Lane, Paws City, PC 45678</p>
              <p><strong>📞 Phone:</strong> (123) 456-7890</p>
              <p><strong>✉️ Email:</strong> hello@shimmeringpaws.com</p>
              <p><strong>⏰ Hours:</strong> Mon–Sat, 9am – 6pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
