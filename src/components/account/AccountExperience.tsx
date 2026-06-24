"use client";

import { useEffect, useId, useState } from "react";
import {
  ArrowRight,
  Check,
  LockKeyhole,
  Mail,
  Phone,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { accountAssets } from "@/lib/account-assets";

type AccountMode = "sign-in" | "create-account";

const fieldClass =
  "w-full rounded-[1.75rem] border-2 border-purple-deep/20 bg-white font-semibold text-ink outline-none transition placeholder:text-soft-ink/55 focus:border-magenta-neon focus:ring-4 focus:ring-magenta-neon/15";

export function AccountExperience() {
  const [mode, setMode] = useState<AccountMode | null>(null);
  const [notice, setNotice] = useState("");
  const dialogTitleId = useId();

  useEffect(() => {
    if (!mode) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMode(null);
        setNotice("");
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [mode]);

  function openDialog(nextMode: AccountMode) {
    setNotice("");
    setMode(nextMode);
  }

  function closeDialog() {
    setMode(null);
    setNotice("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "The secure account service is not connected yet. No password or personal information was sent or saved.",
    );
  }

  return (
    <main className="min-h-screen bg-[#ffd6e6] pt-[calc(var(--site-header-height,7rem)+0.9in)]">
      <section className="relative overflow-hidden bg-[#ffd6e6]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={accountAssets.hero.src}
          alt={accountAssets.hero.alt}
          className="block h-auto w-full"
          width={accountAssets.hero.width}
          height={accountAssets.hero.height}
          decoding="async"
        />

        <div
          className="absolute z-10 flex flex-col sm:flex-row"
          style={{
            ...accountAssets.guestActionSlot,
            gap: accountAssets.heroActionSpec.gap,
          }}
          data-account-ui="hero-actions"
        >
          <AccountButton tone="magenta" onClick={() => openDialog("sign-in")}>
            Sign In
          </AccountButton>
          <AccountButton tone="yellow" onClick={() => openDialog("create-account")}>
            Create Account
          </AccountButton>
        </div>

        <section className="sr-only" aria-label="Account page details">
          <h1>Create your Açaí Factory Account.</h1>
          <p>
            Create your Açaí Factory Account. Order faster, earn rewards, save your favorite bowls,
            and receive exclusive offers.
          </p>
        </section>
      </section>

      <section
        className="mx-auto grid w-full max-w-[1500px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-16"
        aria-label="Account access options"
      >
        <AccountCard
          eyebrow="Welcome back"
          title="Sign in to your account"
          description="Access rewards, order history, saved addresses, and your favorite Açaí Factory bowls."
          tone="magenta"
          actionLabel="Open Sign In"
          onClick={() => openDialog("sign-in")}
        />
        <AccountCard
          eyebrow="New to Açaí Factory?"
          title="Create your account"
          description="Order faster, earn rewards, receive exclusive offers, and keep your preferences together."
          tone="purple"
          actionLabel="Open Registration"
          onClick={() => openDialog("create-account")}
        />
      </section>

      {mode ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-purple-deep/82 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          data-account-ui={`${mode}-dialog`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeDialog();
            }
          }}
        >
          <div
            className="relative my-auto overflow-y-auto rounded-[3.5rem] bg-[#fff9fc] shadow-[0_35px_100px_rgba(39,8,73,0.48)]"
            style={{
              width: accountAssets.formSpec.width,
              minHeight: accountAssets.formSpec.minHeight,
              maxHeight: accountAssets.formSpec.maxHeight,
              padding: accountAssets.formSpec.padding,
            }}
          >
            <button
              type="button"
              onClick={closeDialog}
              className="absolute right-8 top-8 inline-flex items-center justify-center rounded-full bg-purple-deep px-[2.375rem] py-[1.4rem] font-extrabold leading-none text-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-magenta-neon/35"
              style={{ fontSize: accountAssets.formSpec.closeFontSize }}
              aria-label="Close account form"
            >
              <X className="size-[1em]" strokeWidth={3} aria-hidden />
            </button>

            <div className="pr-24">
              <p
                className="font-display font-extrabold uppercase tracking-[0.18em] text-magenta-neon"
                style={{ fontSize: accountAssets.formSpec.eyebrowFontSize }}
              >
                My Account
              </p>
              <h2
                id={dialogTitleId}
                className="mt-[1.385rem] font-display font-extrabold uppercase leading-none text-ink"
                style={{ fontSize: accountAssets.formSpec.titleFontSize }}
              >
                {mode === "sign-in" ? "Sign In" : "Create Account"}
              </h2>
              <p
                className="mt-8 max-w-[16in] font-semibold leading-snug text-soft-ink"
                style={{ fontSize: accountAssets.formSpec.descriptionFontSize }}
              >
                {mode === "sign-in"
                  ? "Enter your email and password to access your Açaí Factory account."
                  : "Create your profile to order faster, earn rewards, and receive exclusive offers."}
              </p>
            </div>

            <form
              className="mt-[3.565rem] grid"
              style={{ gap: accountAssets.formSpec.formGap }}
              onSubmit={handleSubmit}
            >
              {mode === "create-account" ? (
                <div
                  className="grid md:grid-cols-2"
                  style={{ gap: accountAssets.formSpec.formGap }}
                >
                  <AccountField
                    icon={<UserRound aria-hidden />}
                    label="Full Name"
                    name="fullName"
                    autoComplete="name"
                  />
                  <AccountField
                    icon={<Phone aria-hidden />}
                    label="Phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
              ) : null}

              <AccountField
                icon={<Mail aria-hidden />}
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
              />

              <div
                className={mode === "create-account" ? "grid md:grid-cols-2" : ""}
                style={mode === "create-account" ? { gap: accountAssets.formSpec.formGap } : undefined}
              >
                <AccountField
                  icon={<LockKeyhole aria-hidden />}
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
                />
                {mode === "create-account" ? (
                  <AccountField
                    icon={<LockKeyhole aria-hidden />}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                  />
                ) : null}
              </div>

              {notice ? (
                <div
                  className="rounded-[1.75rem] border-2 border-yellow-deep bg-yellow/18 px-[2.575rem] py-8 font-bold leading-relaxed text-ink"
                  style={{ fontSize: accountAssets.formSpec.labelFontSize }}
                  role="status"
                >
                  {notice}
                </div>
              ) : null}

              <button
                type="submit"
                className="mt-8 inline-flex items-center justify-center gap-5 rounded-full bg-magenta-neon px-[3.565rem] py-[2.575rem] font-display font-extrabold uppercase tracking-wide text-white shadow-[0_18px_42px_rgba(236,0,140,0.28)] transition hover:-translate-y-0.5 hover:bg-magenta-dark focus:outline-none focus:ring-8 focus:ring-magenta-neon/25"
                style={{ fontSize: accountAssets.formSpec.submitFontSize }}
              >
                {mode === "sign-in" ? "Continue to Sign In" : "Create My Account"}
                <ArrowRight className="size-[1em]" aria-hidden />
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function AccountButton({
  children,
  tone,
  onClick,
}: {
  children: React.ReactNode;
  tone: "magenta" | "yellow";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex flex-1 items-center justify-center rounded-full text-center font-display font-black uppercase tracking-wide shadow-[0_16px_36px_rgba(74,18,136,0.3)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-[clamp(4px,0.65vw,10px)] ${
        tone === "yellow"
          ? "border-yellow bg-yellow text-ink hover:bg-yellow-deep focus:ring-yellow/35"
          : "border-magenta-neon bg-magenta-neon text-white hover:bg-magenta-dark focus:ring-magenta-neon/30"
      }`}
      style={{
        minHeight: accountAssets.heroActionSpec.minHeight,
        fontSize: accountAssets.heroActionSpec.fontSize,
        paddingInline: accountAssets.heroActionSpec.horizontalPadding,
        borderWidth: accountAssets.heroActionSpec.borderWidth,
      }}
    >
      {children}
    </button>
  );
}

function AccountCard({
  eyebrow,
  title,
  description,
  tone,
  actionLabel,
  onClick,
}: {
  eyebrow: string;
  title: string;
  description: string;
  tone: "magenta" | "purple";
  actionLabel: string;
  onClick: () => void;
}) {
  const purple = tone === "purple";

  return (
    <article
      className={`flex min-h-[390px] flex-col justify-between rounded-[2.5rem] border-4 p-8 shadow-[0_24px_70px_rgba(74,18,136,0.18)] sm:p-10 lg:p-12 ${
        purple
          ? "border-purple-deep bg-purple-deep text-white"
          : "border-white bg-white text-ink"
      }`}
    >
      <div>
        <div
          className={`inline-flex size-20 items-center justify-center rounded-3xl ${
            purple ? "bg-yellow text-ink" : "bg-magenta-neon text-white"
          }`}
        >
          {purple ? <Sparkles className="size-10" aria-hidden /> : <Check className="size-10" aria-hidden />}
        </div>
        <p
          className={`mt-7 text-[18px] font-black uppercase tracking-[0.2em] ${
            purple ? "text-yellow" : "text-magenta-neon"
          }`}
        >
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-[clamp(38px,4vw,58px)] font-black leading-[1.02]">
          {title}
        </h2>
        <p
          className={`mt-5 text-[clamp(20px,2vw,26px)] font-semibold leading-relaxed ${
            purple ? "text-white/88" : "text-soft-ink"
          }`}
        >
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onClick}
        className={`mt-8 inline-flex min-h-[78px] w-full items-center justify-center gap-3 rounded-full px-8 text-[clamp(22px,2.3vw,30px)] font-black uppercase tracking-wide transition hover:-translate-y-0.5 focus:outline-none focus:ring-8 ${
          purple
            ? "bg-yellow text-ink shadow-[0_16px_38px_rgba(255,196,0,0.22)] focus:ring-yellow/30"
            : "bg-magenta-neon text-white shadow-[0_16px_38px_rgba(236,0,140,0.24)] focus:ring-magenta-neon/25"
        }`}
      >
        {actionLabel}
        <ArrowRight className="size-8" aria-hidden />
      </button>
    </article>
  );
}

function AccountField({
  icon,
  label,
  name,
  type = "text",
  autoComplete,
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
}) {
  return (
    <label
      className="grid gap-2 font-extrabold uppercase tracking-wide text-ink"
      style={{ fontSize: accountAssets.formSpec.labelFontSize }}
    >
      <span className="flex items-center gap-2">
        <span className="text-magenta-neon [&>svg]:size-[1em]">{icon}</span>
        {label}
      </span>
      <input
        className={fieldClass}
        style={{
          fontSize: accountAssets.formSpec.fieldFontSize,
          paddingBlock: accountAssets.formSpec.fieldPaddingY,
          paddingInline: accountAssets.formSpec.fieldPaddingX,
        }}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
      />
    </label>
  );
}
