"use client";

import Link from "next/link";
import { useState } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";

const TEXT = {
  en: {
    defaultTitle: "Send a Message",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    message: "Message",
    sentNotice: "Thank you for reaching out. Your message has been received (demo).",
    submit: "Submit",
    privacyHref: "/en/privacy-policy",
  },
  ar: {
    defaultTitle: "أرسل رسالة",
    firstName: "الاسم",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    sentNotice: "شكراً لتواصلك. تم استلام رسالتك (عرض تجريبي).",
    submit: "إرسال",
    privacyHref: "/ar/privacy-policy",
  },
} as const;

// gac disclosure marker: {/* gac:start:disclosure-ar */}{/* gac:end:disclosure-ar */}
export function ContactForm({
  title,
  locale = "ar",
}: {
  title?: string;
  locale?: "en" | "ar";
}) {
  const [sent, setSent] = useState(false);
  const t = TEXT[locale];
  const resolvedTitle = title ?? t.defaultTitle;

  const fields = [
    { name: "first_name", label: t.firstName, type: "text", required: true },
    { name: "last_name", label: t.lastName, type: "text", required: true },
    { name: "email", label: t.email, type: "email", required: true },
    { name: "message", label: t.message, type: "textarea", required: true },
  ];

  return (
    <>
      {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
      <form
      className="space-y-[18px] bg-white p-[30px]"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        trackMetaEvent("Contact");
      }}
    >
      <h2 className="mb-[10px] text-[22px] font-bold text-qd-navy uppercase">
        {resolvedTitle}
      </h2>
      {sent ? (
        <p className="text-[15px] text-qd-navy">{t.sentNotice}</p>
      ) : (
        <>
          {fields.map((f) => (
            <div key={f.name}>
              <label className="mb-[6px] block text-[13px] font-bold text-qd-navy">
                {f.label}
                {f.required ? " *" : ""}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  name={f.name}
                  required={f.required}
                  rows={5}
                  className="w-full border border-qd-rule bg-qd-cream px-[14px] py-[12px] text-[14px] outline-none focus:border-qd-gold"
                />
              ) : (
                <input
                  type={f.type}
                  name={f.name}
                  required={f.required}
                  className="w-full border border-qd-rule bg-qd-cream px-[14px] py-[12px] text-[14px] outline-none focus:border-qd-gold"
                />
              )}
            </div>
          ))}
          {/* gac:start:form-consent-ar */}
          <p className="my-[8px] text-[12px] leading-[20px] text-qd-text">
            By submitting this form, you agree to be contacted by Fair Direction
            regarding Qatar Diar properties, and to our{" "}
            <Link href={t.privacyHref} className="underline">
              Privacy Policy
            </Link>
            .
          </p>
          {/* gac:end:form-consent-ar */}
          <button
            type="submit"
            className="bg-qd-navy px-[28px] py-[12px] text-[14px] font-bold text-white uppercase transition hover:bg-qd-gold"
          >
            {t.submit}
          </button>
        </>
      )}
    </form>

    <div className="mt-[24px] border-t border-qd-rule pt-[20px] text-[13px] leading-[22px] text-qd-text">
      <p className="font-bold text-qd-navy">Fair Direction</p>
      <p>124 Othman Ibn Affan St, Floor 7, Apartment 73, New Cairo, Cairo, Egypt</p>
      <p>
        Phone:{" "}
        <a href="tel:+201515124909" className="underline">
          +20 1515124909
        </a>{" "}
        · Email:{" "}
        <a href="mailto:operation@fairdirection.com" className="underline">
          operation@fairdirection.com
        </a>
      </p>
    </div>
    </>
  );
}
