"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { profile } from "@/data/profile";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "--name required";
  if (!email.trim()) errors.email = "--email required";
  else if (!emailRe.test(email.trim())) errors.email = "--email syntax error: missing '@' or domain";
  if (message.trim().length < 4) errors.message = "--message required";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [out, setOut] = useState({ text: "", kind: "" });

  const errors = validate(form);
  const valid = Object.keys(errors).length === 0;
  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!valid) { setOut({ text: "✗ validation failed", kind: "err" }); return; }
    setSending(true);
    setOut({ text: `$ send --name="${form.name.trim()}" ... running`, kind: "" });
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          to_name: profile.name,
          email: form.email.trim(),
          to_email: profile.email,
          message: form.message.trim(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setOut({ text: "✓ message sent — I will get back to you as soon as possible", kind: "ok" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setOut({ text: `✗ something went wrong — email me at ${profile.email}`, kind: "err" });
    } finally {
      setSending(false);
    }
  };

  const field = (name, label, placeholder, multiline) => {
    const touched = form[name] !== "";
    const err = touched ? errors[name] : "";
    const Tag = multiline ? "textarea" : "input";
    return (
      <div className={`field${err ? " has-error" : ""}`}>
        <label htmlFor={`f-${name}`}>{label}</label>
        <Tag id={`f-${name}`} name={name} placeholder={placeholder} value={form[name]} onChange={change}
          {...(multiline ? {} : { type: "text" })} />
        <div className="field-error">{err}</div>
      </div>
    );
  };

  return (
    <section id="contact" aria-label="Contact">
      <SectionHead label="contact" title="contact.sh" />
      <Reveal className="contact-wrap">
        <form className="contact-form" onSubmit={submit} noValidate>
          {field("name", "name", "Jane Doe")}
          {field("email", "email", "jane@company.com")}
          {field("message", "message", "Let's talk about...", true)}
          <button type="submit" className="send-btn" disabled={!valid || sending}>$ send</button>
          <div className={`term-output ${out.kind}`} aria-live="polite">{out.text}</div>
        </form>
        <div className="contact-direct">
          <a href={`mailto:${profile.email}`}><span>✉</span> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><span>⌥</span> {profile.githubLabel}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span>in</span> {profile.linkedinLabel}</a>
        </div>
      </Reveal>
    </section>
  );
}
