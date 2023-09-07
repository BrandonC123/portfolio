import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (btn) => {
    emailjs
      .sendForm(
        "service_gckd70k",
        "template_d1nlf8h",
        form.current,
        "MJtcHKRge4r2JlYuh"
      )
      .then(
        (result) => {
          console.log(result.text);
          btn.textContent = "Feedback Sent";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-4">
      <h2 className="text-center text-2xl font-bold">Contact Us</h2>
      <h3 className="text-md mb-5 text-center font-semibold text-[#727272]">
        Enter your email and message here.
      </h3>

      <div className="mx-auto mt-3 flex w-[95%] max-w-[650px] flex-col items-center">
        <form ref={form}>
          <input
            className="mb-5 w-full rounded-md border-[1px] border-base-300 bg-base-200 px-5 py-2 font-semibold text-[#444444]"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            placeholder="Get in touch with the team, suggest a feature, report a bug, or give us feedback!"
            className="w-full rounded-md border-[1px] border-base-300 bg-base-200 px-4 py-2 font-semibold text-[#444444]"
            name="feedback_content"
            rows={4}
            cols={40}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              sendEmail(e.currentTarget);
            }}
            type="button"
            className="btn-accent btn mt-3 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
