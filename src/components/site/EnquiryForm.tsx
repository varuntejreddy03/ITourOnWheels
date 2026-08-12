import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import { destinations } from "@/data/destinations";
import { journeys } from "@/data/journeys";
import { site } from "@/data/site";
import { Action } from "./Primitives";

const empty = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  dates: "",
  travelers: "",
  journey: "",
  message: "",
};

const fieldClass =
  "w-full border-b border-line bg-transparent pt-2 pb-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-terracotta focus:outline-none transition-colors duration-500";

const labelClass = "mb-3 block text-[0.7rem] uppercase tracking-[0.26em] text-ink-soft";

export function EnquiryForm({
  defaultDestination = "",
  defaultJourney = "",
}: {
  defaultDestination?: string;
  defaultJourney?: string;
}) {
  const [values, setValues] = useState(() => ({ ...empty, destination: defaultDestination, journey: defaultJourney }));

  const update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    // ponytail: no backend yet — mailto is the zero-dependency stopgap. Swap for a real
    // email/CRM endpoint (e.g. Resend, Formspree) once one is chosen.
    const subject = `Journey enquiry from ${values.name || "the website"}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Destination: ${values.destination || "Not specified"}`,
      `Travel dates: ${values.dates || "Flexible"}`,
      `Number of travelers: ${values.travelers || "Not specified"}`,
      `Interested journey: ${values.journey || "Not specified"}`,
      "",
      values.message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email to send this enquiry", {
      description: `If nothing opens, email us directly at ${site.email}.`,
    });
    setValues(empty);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-10 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          onChange={update}
          placeholder="Your full name"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={update}
          placeholder="you@email.com"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={update}
          placeholder="With country code"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="destination">
          Destination
        </label>
        <select
          id="destination"
          name="destination"
          value={values.destination}
          onChange={update}
          className={fieldClass}
        >
          <option value="">Select a destination</option>
          {destinations
            .filter((d) => d.status === "live")
            .map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="dates">
          Travel Dates
        </label>
        <input
          id="dates"
          name="dates"
          value={values.dates}
          onChange={update}
          placeholder="e.g. March 2027, or flexible"
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="travelers">
          Number Of Travelers
        </label>
        <input
          id="travelers"
          name="travelers"
          type="number"
          min={1}
          value={values.travelers}
          onChange={update}
          placeholder="2"
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="journey">
          Interested Journey
        </label>
        <select
          id="journey"
          name="journey"
          value={values.journey}
          onChange={update}
          className={fieldClass}
        >
          <option value="">Select a journey</option>
          {journeys
            .filter((j) => j.status === "live")
            .map((j) => (
              <option key={j.slug} value={j.title}>
                {j.title} — {j.duration}
              </option>
            ))}
          <option value="A tailor-made journey">A tailor-made journey</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={update}
          placeholder="Tell us how you like to travel"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
        <Action type="submit">Send Enquiry</Action>
        <p className="text-sm text-ink-soft">We reply personally within one working day.</p>
      </div>
    </form>
  );
}