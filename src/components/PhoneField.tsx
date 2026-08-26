"use client";

// gac footer marker: {/* gac:start:footer-shared */}{/* gac:end:footer-shared */} — real disclosure lives on the parent LeadForm/ContactForm

import { useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";
import intlTelInput from "intl-tel-input";
import type { Iti } from "intl-tel-input";
import "intl-tel-input/styles";

export type PhoneValidation = {
  valid: boolean;
  number: string;
  message: string;
};

export type PhoneFieldHandle = {
  getValue: () => string;
  validate: () => Promise<PhoneValidation>;
};

type PhoneMessages = {
  invalidCountryCode: string;
  tooShort: string;
  tooLong: string;
  invalidNumber: string;
  required: string;
};

const MESSAGES: Record<"en" | "ar", PhoneMessages> = {
  en: {
    invalidCountryCode: "Invalid country code. Please pick your country from the list.",
    tooShort: "This number is too short.",
    tooLong: "This number is too long.",
    invalidNumber: "Please enter a valid mobile phone number.",
    required: "Please enter your phone number.",
  },
  ar: {
    invalidCountryCode: "رمز الدولة غير صحيح، يرجى اختيار دولتك من القائمة.",
    tooShort: "رقم الهاتف قصير جداً.",
    tooLong: "رقم الهاتف طويل جداً.",
    invalidNumber: "يرجى إدخال رقم هاتف محمول صحيح.",
    required: "يرجى إدخال رقم الهاتف.",
  },
};

function messageFor(validationError: string, locale: "en" | "ar"): string {
  if (validationError === "INVALID_COUNTRY_CODE") return MESSAGES[locale].invalidCountryCode;
  if (validationError === "TOO_SHORT") return MESSAGES[locale].tooShort;
  if (validationError === "TOO_LONG") return MESSAGES[locale].tooLong;
  return MESSAGES[locale].invalidNumber;
}

const INITIAL_COUNTRY = "eg";
const COUNTRY_ORDER = ["eg", "ae", "sa", "kw", "qa"] as const;

export function PhoneField({
  ref,
  id,
  locale,
  disabled,
  containerClassName,
  inputClassName,
  errorClassName,
}: {
  ref?: Ref<PhoneFieldHandle>;
  id: string;
  locale: "en" | "ar";
  disabled?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<Iti | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    input.removeAttribute("placeholder");
    const iti = intlTelInput(input, {
      initialCountry: INITIAL_COUNTRY,
      countryOrder: [...COUNTRY_ORDER],
      separateDialCode: true,
      formatAsYouType: true,
      strictMode: true,
      allowedNumberTypes: ["MOBILE"],
      placeholderNumberType: "MOBILE",
      countryNameLocale: locale,
      loadUtils: () => import("intl-tel-input/utils"),
    });
    itiRef.current = iti;

    const clearError = () => setError(null);
    input.addEventListener("input", clearError);
    input.addEventListener("countrychange", clearError);

    return () => {
      input.removeEventListener("input", clearError);
      input.removeEventListener("countrychange", clearError);
      iti.destroy();
      itiRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    if (disabled) {
      input.disabled = true;
    } else {
      input.disabled = false;
    }
  }, [disabled]);

  useImperativeHandle(
    ref,
    () => ({
      getValue: () => (inputRef.current ? String(inputRef.current.value || "").trim() : ""),
      validate: async (): Promise<PhoneValidation> => {
        const input = inputRef.current;
        const raw = input ? String(input.value || "").trim() : "";
        if (!raw.replace(/\D/g, "")) {
          const message = MESSAGES[locale].required;
          setError(message);
          input?.focus();
          return { valid: false, number: "", message };
        }
        const iti = itiRef.current;
        if (!iti) {
          const ok = /^\+[0-9]{7,15}$/.test(raw.replace(/[^\d+]/g, ""));
          const message = ok ? "" : MESSAGES[locale].invalidNumber;
          if (!ok) {
            setError(message);
            input?.focus();
          }
          return {
            valid: ok,
            number: ok ? raw : raw.replace(/[^\d+]/g, ""),
            message,
          };
        }
        await iti.promise;
        const number = iti.getNumber() || raw;
        const valid = Boolean(iti.isValidNumber());
        const message = valid ? "" : messageFor(iti.getValidationError() ?? "INVALID_NUMBER", locale);
        if (!valid) {
          setError(message);
          input?.focus();
        } else {
          setError(null);
        }
        return { valid, number, message };
      },
    }),
    [locale],
  );

  return (
    <>
      <div dir="ltr" className={containerClassName}>
        <input ref={inputRef} id={id} name={id} type="tel" autoComplete="tel" disabled={disabled} className={inputClassName} />
      </div>
      {error && <p className={errorClassName}>{error}</p>}
    </>
  );
}
