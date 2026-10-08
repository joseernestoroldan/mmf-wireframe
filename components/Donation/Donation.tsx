"use client";

import { useState } from "react";
import Image from "next/image";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import styles from "./Donation.module.css";

type Frequency = "once" | "monthly";
type Status = "idle" | "complete" | "canceled" | "error";

const PRESETS = [
  { amount: 25, impact: "A week of food for a rescued animal in our care." },
  {
    amount: 50,
    impact: "Vaccinations and deworming for a shelter pet waiting for a home.",
  },
  { amount: 100, impact: "An emergency vet visit: exam, medication, and bandages." },
  {
    amount: 200,
    impact: "A night rescue transport: fuel, crates, and safe passage.",
  },
  { amount: 500, impact: "Surgery and post-op care for an animal with no one else." },
];

const MIN_AMOUNT = 1;

const formatMoney = (value: number) => `$${value.toFixed(2)}`;

type Props = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function Donation({
  imageSrc = "/carrousel/image05.webp",
  imageAlt = "A rescued puppy sleeping beside a brick wall",
}: Props) {
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [preset, setPreset] = useState<number | null>(25);
  const [custom, setCustom] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const planId = process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID;

  const customRaw = custom.trim();
  const amount = preset === null ? (customRaw === "" ? null : Number(customRaw)) : preset;
  const amountNumber =
    typeof amount === "number" && Number.isFinite(amount) ? amount : null;
  const amountText = amountNumber !== null ? formatMoney(amountNumber) : "";
  const amountValue = amountNumber !== null ? amountNumber.toFixed(2) : "";
  const isCustomInvalid = preset === null && customRaw !== "" && amountNumber === null;
  const isTooSmall =
    preset === null && customRaw !== "" && amountNumber !== null && amountNumber < MIN_AMOUNT;
  const isReady = amountNumber !== null && amountNumber >= MIN_AMOUNT;

  const changeFrequency = (next: Frequency) => {
    setFrequency(next);
    setStatus("idle");
  };

  const selectPreset = (value: number) => {
    setPreset(value);
    setCustom("");
  };

  const activateCustom = () => {
    setPreset(null);
    setStatus((current) => (current === "complete" ? current : "idle"));
  };

  return (
    <section id="donation" aria-labelledby="donation-heading" className={styles.section}>
      <div className={styles.media}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 46vw"
          className={styles.mediaImage}
        />
        <div className={styles.mediaShade} aria-hidden="true" />
        <p className={styles.mediaCaption}>
          Your gift decides whether tonight ends in a safe, warm place.
        </p>
      </div>

      <div className={styles.form}>
        <div className={styles.formHeader}>
          <h2 id="donation-heading" className={styles.heading}>
            Choose your impact
          </h2>
          <span className={styles.headingAccent} aria-hidden="true" />
          <p className={styles.intro}>
            Every amount below goes straight to rescues, medical care, and food.
            Give once or make it monthly.
          </p>
        </div>

        <div className={styles.group}>
          <p className={styles.groupLabel} id="frequency-label">
            Donation frequency
          </p>
          <div className={styles.segmented} role="group" aria-labelledby="frequency-label">
            <input
              type="radio"
              name="donation-frequency"
              id="frequency-once"
              className={styles.radioInput}
              checked={frequency === "once"}
              onChange={() => changeFrequency("once")}
            />
            <label className={styles.segmentLabel} htmlFor="frequency-once">
              One-time
            </label>
            <input
              type="radio"
              name="donation-frequency"
              id="frequency-monthly"
              className={styles.radioInput}
              checked={frequency === "monthly"}
              onChange={() => changeFrequency("monthly")}
            />
            <label className={styles.segmentLabel} htmlFor="frequency-monthly">
              Monthly
            </label>
          </div>
          {frequency === "monthly" && (
            <p className={styles.note}>
              You will be charged the selected amount every month until you
              cancel from your PayPal account.
            </p>
          )}
        </div>

        <div className={styles.group}>
          <p className={styles.groupLabel} id="amount-label">
            Choose an amount
          </p>
          <div className={styles.amountGrid} role="group" aria-labelledby="amount-label">
            {PRESETS.map(({ amount: value, impact }) => (
              <div className={styles.tile} key={value}>
                <input
                  type="radio"
                  name="donation-amount"
                  id={`amount-${value}`}
                  className={styles.radioInput}
                  checked={preset === value}
                  onChange={() => selectPreset(value)}
                />
                <label className={styles.tileLabel} htmlFor={`amount-${value}`}>
                  <span className={styles.amount}>${value}</span>
                  <span className={styles.impact}>{impact}</span>
                </label>
              </div>
            ))}

            <div
              className={`${styles.tile} ${styles.customTile} ${
                isCustomInvalid || isTooSmall ? styles.tileInvalid : ""
              }`}
            >
              <input
                type="radio"
                name="donation-amount"
                id="amount-custom"
                className={styles.radioInput}
                checked={preset === null}
                onChange={() => setPreset(null)}
              />
              <label className={styles.customLabel} htmlFor="amount-custom">
                Other amount
              </label>
              <div className={styles.currencyField}>
                <span className={styles.currencySymbol} aria-hidden="true">
                  $
                </span>
                <input
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="0.00"
                  className={styles.currencyInput}
                  aria-label="Custom donation amount"
                  aria-invalid={isCustomInvalid || isTooSmall}
                  value={custom}
                  onFocus={activateCustom}
                  onChange={(event) => {
                    activateCustom();
                    const raw = event.target.value;
                    // Strip non-numeric chars except dot, then enforce
                    // at most one dot and up to 2 decimal digits.
                    let cleaned = raw.replace(/[^0-9.]/g, "");
                    const parts = cleaned.split(".");
                    if (parts.length > 2) {
                      // Keep only first two segments (before and after first dot)
                      cleaned = parts[0] + "." + parts[1];
                    }
                    if (parts.length === 2 && parts[1].length > 2) {
                      cleaned = parts[0] + "." + parts[1].slice(0, 2);
                    }
                    setCustom(cleaned);
                  }}
                />
              </div>
              {(isCustomInvalid || isTooSmall) && (
                <p className={styles.errorText} role="alert">
                  Enter an amount of $1.00 or more.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.summaryRow}>
          <p className={styles.summary} role="status">
            {isReady ? (
              <>
                You&rsquo;re giving <strong>{amountText}</strong>{" "}
                {frequency === "monthly" ? "every month" : "today"}.
              </>
            ) : (
              <span className={styles.summaryPlaceholder}>
                No amount selected yet.
              </span>
            )}
          </p>
        </div>

        {status === "complete" ? (
          <div className={styles.confirmation} role="status">
            <h3 className={styles.confirmTitle}>
              {frequency === "monthly"
                ? "Your monthly gift is active."
                : "Thank you, your gift is complete."}
            </h3>
            <p className={styles.confirmText}>
              {frequency === "monthly"
                ? `${amountText} will be charged every month until you cancel. Manage it anytime from your PayPal account.`
                : `${amountText} has been received. It goes straight to rescues, medical care, and food.`}
            </p>
            <button
              type="button"
              className={styles.resetButton}
              onClick={() => setStatus("idle")}
            >
              Give again
            </button>
          </div>
        ) : !clientId ? (
          <p className={styles.notice}>
            Checkout isn&rsquo;t connected yet. Add{" "}
            <code>NEXT_PUBLIC_PAYPAL_CLIENT_ID</code> to <code>.env.local</code> and
            restart the dev server to enable PayPal.
          </p>
        ) : !isReady ? (
          <p className={styles.notice}>
            {isCustomInvalid || isTooSmall
              ? "Enter a valid amount above to continue."
              : "Choose an amount to continue."}
          </p>
        ) : frequency === "monthly" && !planId ? (
          <p className={styles.notice}>
            Monthly giving isn&rsquo;t connected yet. Add{" "}
            <code>NEXT_PUBLIC_PAYPAL_PLAN_ID</code> to <code>.env.local</code> and
            restart the dev server to enable subscriptions.
          </p>
        ) : (
          <div className={styles.checkout}>
            {status === "canceled" && (
              <p className={styles.inlineInfo} role="status">
                Checkout canceled. Your donation wasn&rsquo;t charged.
              </p>
            )}
            {status === "error" && (
              <p className={styles.inlineError} role="alert">
                PayPal couldn&rsquo;t start the checkout. Please try again.
              </p>
            )}

            <PayPalScriptProvider
              key={frequency}
              options={{
                clientId,
                currency: "USD",
                intent: frequency === "monthly" ? "subscription" : "capture",
              }}
            >
              <PayPalButtons
                style={{
                  layout: "vertical",
                  color: "gold",
                  shape: "rect",
                  height: 48,
                  label: frequency === "monthly" ? "subscribe" : "donate",
                  tagline: false,
                }}
                createOrder={
                  frequency === "once"
                    ? async (_data, actions) =>
                        actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              amount: {
                                currency_code: "USD",
                                value: amountValue,
                              },
                              description: "Donation to Magic Marble Foundation",
                            },
                          ],
                        })
                    : undefined
                }
                createSubscription={
                  frequency === "monthly"
                    ? async (_data, actions) => {
                        if (!planId) {
                          throw new Error("Missing NEXT_PUBLIC_PAYPAL_PLAN_ID");
                        }
                        return actions.subscription.create({
                          plan_id: planId,
                          plan: {
                            billing_cycles: [
                              {
                                sequence: 1,
                                pricing_scheme: {
                                  fixed_price: {
                                    value: amountValue,
                                    currency_code: "USD",
                                  },
                                },
                              },
                            ],
                          },
                        });
                      }
                    : undefined
                }
                onApprove={async (_data, actions) => {
                  try {
                    if (frequency === "monthly") {
                      await actions.subscription?.get();
                    } else {
                      await actions.order?.capture();
                    }
                    setStatus("complete");
                  } catch {
                    setStatus("error");
                  }
                }}
                onCancel={() => setStatus("canceled")}
                onError={() => setStatus("error")}
              />
            </PayPalScriptProvider>

            <p className={styles.fineprint}>
              Payments are processed by PayPal. You&rsquo;ll confirm the details
              before you pay.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
