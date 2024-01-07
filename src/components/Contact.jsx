import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send");
  const form = useRef();
  const sendButtonRef = useRef();

  const sendEmail = () => {
    setIsSendingEmail(true);
    emailjs
      .sendForm(
        "service_flheecf",
        "template_qazgl3w",
        form.current,
        "MJtcHKRge4r2JlYuh"
      )
      .then(
        () => {
          setIsSendingEmail(false);
          setSendButtonText("Email Sent!");
          sendButtonRef.current.disabled = false;
          setTimeout(() => {
            setSendButtonText("Send");
          }, 10000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    if (isSendingEmail) {
      setSendButtonText("Sending...");
      sendButtonRef.current.disabled = true;
    }
  }, [isSendingEmail]);
  return (
    <div>
      <p className='text-xl font-medium'>
        Send me an email if you'd like to get in touch!
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!form.current.checkValidity()) {
            form.current.reportValidity();
            return;
          } else {
            sendEmail();
          }
        }}
        ref={form}
        className='mx-auto gap-2 mt-3 flex flex-col items-start'
      >
        <div className='flex gap-2 flex-col md:flex-row w-full'>
          <input
            required
            className='w-full rounded-md border-[1px] border-base-300 bg-base-200 px-5 py-2 font-semibold'
            type='email'
            name='sender_email'
            placeholder='Email'
          />
          <input
            required
            className='w-full rounded-md border-[1px] border-base-300 bg-base-200 px-5 py-2 font-semibold'
            type='name'
            name='sender_name'
            placeholder='Name'
          />
        </div>
        <textarea
          required
          placeholder='Message'
          className='w-full rounded-md border-[1px] border-base-300 bg-base-200 px-4 py-2 font-semibold'
          name='message'
          rows={4}
          cols={40}
        />
        <button ref={sendButtonRef} className='btn-accent btn rounded-md'>
          <span className="text-base-content">{sendButtonText}</span>
          {isSendingEmail && (
            <svg className='h-5 w-5 animate-spin' viewBox='0 0 24 24'>
              <circle
                class='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                class='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
