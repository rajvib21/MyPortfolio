import React from "react";

// function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
   <div
  name="contact"
  className="min-h-screen w-full pt-24 bg-gradient-to-b from-[#f7efe5] to-[#a18276]"
>

      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-black">
        
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#6f4e37]">
            Contact
          </p>

          <p className="py-6 text-lg">
            Submit the form below to get in touch with me.
            <br />
            You can also reach me directly at:{" "}
            <span className="font-semibold">Rajvi Bhatt</span> —{" "}
            <span className="underline">rajvibhatt21@gmail.com</span>
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 border-[#6f4e37] rounded-md text-black placeholder-gray-700 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 border-[#6f4e37] rounded-md text-black placeholder-gray-700 focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 border-[#6f4e37] rounded-md text-black placeholder-gray-700 focus:outline-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="text-white bg-[#6f4e37] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
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
