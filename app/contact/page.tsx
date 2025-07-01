'use client'; // Needed for form event handling

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <label className="block mb-2">Message</label>
        <textarea
          className="w-full border p-2 mb-4"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}
