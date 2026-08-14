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

    // Format a clean WhatsApp message
    const lines = [
      `🙏 *New Journey Enquiry — I Tour On Wheels*`,
      ``,
      `👤 *Name:* ${values.name}`,
      `📧 *Email:* ${values.email}`,
      `📞 *Phone:* ${values.phone || "Not provided"}`,
      ``,
      `🗺️ *Destination:* ${values.destination || "Not specified"}`,
      `✈️ *Journey:* ${values.journey || "Not specified"}`,
      `📅 *Travel Dates:* ${values.dates || "Flexible"}`,
      `👥 *Travelers:* ${values.travelers || "Not specified"}`,
      ``,
      values.message ? `💬 *Message:*\n${values.message}` : "",
    ].filter(Boolean).join("\n");

    // WhatsApp number — strip non-digits from site phone
    const waNumber = site.phone.replace(/\D/g, "");
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");

    toast.success("Opening WhatsApp with your enquiry", {
      description: `You can also reach us at ${site.phone}`,
    });
    setValues({ ...empty, destination: defaultDestination, journey: defaultJourney });
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
        <Action type="submit">Send via WhatsApp</Action>
        <p className="text-sm text-ink-soft">Opens WhatsApp with your details pre-filled. We reply within one working day.</p>
      </div>
    </form>
  );
}