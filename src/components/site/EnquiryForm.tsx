import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "sonner";
import { destinations } from "@/data/destinations";
import { journeys } from "@/data/journeys";
import { Action } from "./Primitives";

const empty = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  dates: "",
  travellers: "",
  journey: "",
  message: "",
};

const fieldClass =
  "w-full border-b border-line bg-transparent pb-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-terracotta focus:outline-none transition-colors duration-500";

const labelClass = "mb-3 block text-[0.62rem] uppercase tracking-[0.26em] text-ink-soft";

export function EnquiryForm() {
  const [values, setValues] = useState(empty);

  const update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    // No backend connected yet — enquiries are not stored or emailed.
    toast.success("Thank you — your enquiry details are ready to send", {
      description: "Connect an email or database to start receiving enquiries.",
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
        <label className={labelClass} htmlFor="travellers">
          Number Of Travellers
        </label>
        <input
          id="travellers"
          name="travellers"
          type="number"
          min={1}
          value={values.travellers}
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

      <div className="sm:col-span-2">
        <Action type="submit">Send Enquiry</Action>
      </div>
    </form>
  );
}