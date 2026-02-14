function Contact() {
  return (
    <div className="flex justify-center items-center py-16 bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />

        <textarea
          placeholder="Message"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
