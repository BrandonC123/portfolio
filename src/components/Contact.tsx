"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send");
  const formRef = useRef<HTMLFormElement>(null);
  const sendButtonRef = useRef<HTMLButtonElement>(null);

  const sendEmail = () => {
    setIsSendingEmail(true);
    emailjs
      .sendForm(
        "service_flheecf",
        "template_qazgl3w",
        formRef.current as HTMLFormElement,
        "MJtcHKRge4r2JlYuh"
      )
      .then(
        () => {
          setIsSendingEmail(false);
          setSendButtonText("Email Sent!");
          const sendButton = sendButtonRef.current as HTMLButtonElement;
          sendButton.disabled = false;
          setTimeout(() => {
            setSendButtonText("Send");
          }, 10000);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    if (isSendingEmail) {
      setSendButtonText("Sending...");
      const sendButton = sendButtonRef.current as HTMLButtonElement;
      sendButton.disabled = true;
    }
  }, [isSendingEmail]);
  return (
    <div className='flex flex-col gap-4 mb-6'>
      <h3 className='text-black border-b self-start'>Contact</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = formRef.current as HTMLFormElement;
          if (!form.checkValidity()) {
            form.reportValidity();
            return;
          } else {
            sendEmail();
          }
        }}
        ref={formRef}
        className='gap-2 mt-3 flex flex-col items-start'
      >
        <div className='flex gap-2 flex-col md:flex-row w-full'>
          <input
            required
            className='w-full rounded-md border-[1px] bg-white px-5 py-2'
            type='email'
            name='sender_email'
            placeholder='Email'
          />
          <input
            required
            className='w-full rounded-md border-[1px] bg-white px-5 py-2'
            type='name'
            name='sender_name'
            placeholder='Name'
          />
        </div>
        <textarea
          required
          placeholder='Message'
          className='w-full rounded-md border-[1px] bg-white px-4 py-2'
          name='message'
          rows={4}
          cols={40}
        />
        <button
          ref={sendButtonRef}
          className='flex gap-2 items-center bg-[#292929] hover:bg-[#3a3a3a] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 ease-in-out cursor-pointer'
        >
          <span className='text-base-content'>{sendButtonText}</span>
          {isSendingEmail && (
            <svg className='h-5 w-5 animate-spin' viewBox='0 0 24 24'>
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
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
