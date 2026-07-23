import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Card, Input, SectionHeading, Textarea } from "../design-system";
import Socials, { GITHUB_URL, LINKEDIN_URL } from "./Socials";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgwaeqp";
const EMAIL = "emmanueladio065@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

const BUTTON_LABEL: Record<Status, string> = {
  idle: "Send message",
  sending: "Sending…",
  sent: "Thanks — message sent ✓",
  error: "Something went wrong — try again",
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "sent" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);

      setFormData({ name: "", email: "", message: "" });
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div className="contact__intro">
          <SectionHeading
            eyebrow="04 — contact"
            title="Let's build something"
            subtitle="Looking for a graduate software / AI engineer, or just want to say hi? Drop me a line — I’ll get back to you soon."
          />
          <div className="contact__links">
            <a className="contact__line" href={`mailto:${EMAIL}`}>
              <span>./email</span> {EMAIL}
            </a>
            <a
              className="contact__line"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>./github</span> EmmanuelAdio
            </a>
            <a
              className="contact__line"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>./linkedin</span> emmanuel-adio
            </a>
          </div>
          <Socials size="lg" />
        </div>

        <Card variant="raised" className="contact__card">
          <form className="contact__form" onSubmit={handleSubmit}>
            <Input
              label="Name"
              name="name"
              placeholder="Ada Lovelace"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="ada@analytical.engine"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              label="Message"
              name="message"
              placeholder="Say hello…"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={status === "sending"}
            >
              {BUTTON_LABEL[status]}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
