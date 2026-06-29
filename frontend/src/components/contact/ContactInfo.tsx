import Link from "next/link";

export default function ContactInfo() {
  return (
    <aside
      className="rounded-3xl bg-[#0F172A] p-8 text-white"
      aria-labelledby="contact-info-heading"
    >
      <h2
        id="contact-info-heading"
        className="text-2xl font-bold"
      >
        Contact Information
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Tell us about your aluminium extrusion profile.
        Send drawings, specifications, or project
        requirements and our engineering team will
        respond within 24 hours.
      </p>

      <div className="mt-8 space-y-6">
        {/* Phone */}
        <div>
          <p className="text-xs uppercase tracking-wide text-blue-400">
            Phone
          </p>

          <a
            href="tel:+919876543210"
            className="mt-1 block text-white hover:text-blue-300"
          >
            +91 98765 43210
          </a>
        </div>

        {/* Email */}
        <div>
          <p className="text-xs uppercase tracking-wide text-blue-400">
            Email
          </p>

          <a
            href="mailto:info@precisiondieeng.com"
            className="mt-1 block text-white hover:text-blue-300"
          >
            info@precisiondieeng.com
          </a>
        </div>

        {/* Location */}
        <div>
          <p className="text-xs uppercase tracking-wide text-blue-400">
            Location
          </p>

          <p className="mt-1 text-slate-300">
            Vadodara, Gujarat, India
          </p>
        </div>

        {/* Business Hours */}
        <div>
          <p className="text-xs uppercase tracking-wide text-blue-400">
            Working Hours
          </p>

          <p className="mt-1 text-slate-300">
            Monday – Saturday
            <br />
            9:00 AM – 6:00 PM IST
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900/50 p-5">
        <h3 className="font-semibold">
          Need a Quick Quote?
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Attach your profile drawing and our team
          will review feasibility, die type, and lead
          time requirements.
        </p>

        <Link
          href="/gallery"
          className="mt-4 inline-flex text-sm font-medium text-blue-400 hover:text-blue-300"
        >
          View Our Work →
        </Link>
      </div>
    </aside>
  );
}