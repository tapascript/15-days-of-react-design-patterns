import { useRef } from "react";

export default function UncontrolledFeedbackForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name) { nameRef.current.focus(); return; }
    if (!email.includes("@")) { emailRef.current.focus(); return; }
    if (!message) { messageRef.current.focus(); return; }

    console.log("Form submitted:", { name, email, message });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input className="border rounded-2xl p-2 my-3" type="text" ref={nameRef} placeholder="Name" />
      <input className="border rounded-2xl p-2 my-3" type="email" ref={emailRef} placeholder="Email" />
      <textarea className="border rounded-2xl p-2 my-3" ref={messageRef} placeholder="Your message" />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">Send Feedback</button>
    </form>
  );
}