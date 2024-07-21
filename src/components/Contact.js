import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ name, email, message });

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/contact`,
        { name, email, message },
        body,
        config
      );
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };
  return (
    <div
      name="contact"
      className="w-full py-4 text-black bg-white  dark:bg-[#1c1a1b]"
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto ">
        <div className="pb-8 fade-in">
          <p className="inline p-2 text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white">
            Contact
          </p>
          <p className="py-6 text-black dark:text-white">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex items-center justify-center px-1 fade-in md:px-4">
          <form
            onClick={handleOnSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter your name"
              className="p-2 text-black bg-transparent border-2 border-black rounded-md dark:text-white focus:outline-none dark:border-white"
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              className="p-2 mt-1 text-black bg-transparent border-2 border-black rounded-md dark:text-white focus:outline-none dark:border-white"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={message}
              onChange={handleOnChange}
              className="p-2 mt-1 text-black bg-transparent border-2 border-black rounded-md dark:text-white focus:outline-none dark:border-white"
            ></textarea>

            <button
              type="submit"
              className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 bg-[#DA5724] rounded-md dark:bg-gradient-to-b dark:from-cyan-500 dark:to-blue-500 hover:scale-110"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-start justify-center">
        <span className="text-sm font-semibold text-black dark:text-white ">Made with ❤️ by Firdosh</span>
      </div>
    </div>
  );
}

export default Contact;
