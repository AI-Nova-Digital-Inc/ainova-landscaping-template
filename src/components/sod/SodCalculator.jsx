"use client";

import { useState } from "react";

const tiers = [
  { label: "Up to 499 ft²", min: 0,    max: 499,  rate: null,  flat: 1750,  display: "$1,750 (Flat Rate)" },
  { label: "500 - 599 ft²", min: 500,  max: 599,  rate: 3.61,  flat: null,  display: "$3.61 / ft²" },
  { label: "600 - 699 ft²", min: 600,  max: 699,  rate: 3.10,  flat: null,  display: "$3.10 / ft²" },
  { label: "700 - 799 ft²", min: 700,  max: 799,  rate: 2.89,  flat: null,  display: "$2.89 / ft²" },
  { label: "800 - 899 ft²", min: 800,  max: 899,  rate: 2.59,  flat: null,  display: "$2.59 / ft²" },
  { label: "900 - 999 ft²", min: 900,  max: 999,  rate: 2.49,  flat: null,  display: "$2.49 / ft²" },
  { label: "1000 - 1099 ft²", min: 1000, max: 1099, rate: 2.26, flat: null, display: "$2.26 / ft²" },
  { label: "1100+ ft²",     min: 1100, max: Infinity, rate: 2.15, flat: null, display: "$2.15 / ft²" },
];

function calcCost(total) {
  if (total <= 0) return 0;
  const tier = tiers.find((t) => total >= t.min && total <= t.max);
  if (!tier) return 0;
  return tier.flat ?? tier.rate * total;
}

function activeTierIndex(total) {
  if (total <= 0) return -1;
  return tiers.findIndex((t) => total >= t.min && total <= t.max);
}

export default function SodCalculator() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const total = (parseFloat(front) || 0) + (parseFloat(back) || 0);
  const cost = calcCost(total);
  const activeIdx = activeTierIndex(total);

  return (
    <section className="bg-[#f7f7f7] px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-8 shadow-[0_2px_24px_rgba(0,0,0,0.08)] sm:p-10">

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-xl font-black uppercase tracking-wide text-evergreen-700 sm:text-2xl">
              Sod Installation Cost Calculator
            </h2>
            <p className="mt-1 font-bold text-charcoal">Rough estimate</p>
            <p className="mt-2 text-sm leading-6 text-charcoal/60">
              Please enter in the field boxes below the surface area of your front yard and/or back yard requiring sodding, in square feet (ft²).
            </p>
          </div>

          {/* Inputs */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-charcoal">Yard Surface Area (ft²)</label>
              <input
                type="number"
                min="0"
                placeholder="e.g., 500"
                value={front}
                onChange={(e) => setFront(e.target.value)}
                className="w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm text-charcoal transition focus:border-evergreen-700 focus:outline-none focus:ring-2 focus:ring-evergreen-700/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-charcoal">Back Yard Surface Area (ft²)</label>
              <input
                type="number"
                min="0"
                placeholder="e.g., 1200"
                value={back}
                onChange={(e) => setBack(e.target.value)}
                className="w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm text-charcoal transition focus:border-evergreen-700 focus:outline-none focus:ring-2 focus:ring-evergreen-700/20"
              />
            </div>
          </div>

          {/* Result box */}
          <div className="mt-6 rounded-lg border border-charcoal/10 bg-[#f2f2f2] px-6 py-5" style={{ borderLeft: "5px solid #076b39" }}>
            <p className="text-center text-sm font-medium text-charcoal/70">Your Estimated Sod Installation Cost</p>
            <p className="mt-1 text-center font-black text-evergreen-700" style={{ fontSize: "2.25rem" }}>
              ${cost.toFixed(2)}
            </p>
            {total > 0 && (
              emailSent ? (
                <p className="mt-3 text-center text-sm font-semibold text-evergreen-700">✓ Estimate sent to your email!</p>
              ) : (
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-charcoal/20 px-4 py-2.5 text-sm text-charcoal focus:border-evergreen-700 focus:outline-none sm:w-auto sm:flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => { if (email) setEmailSent(true); }}
                    className="w-full rounded-lg bg-evergreen-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-evergreen-600 sm:w-auto"
                  >
                    Send this estimate to my email
                  </button>
                </div>
              )
            )}
          </div>

          {/* Rates table */}
          <div className="mt-8">
            <h3 className="mb-4 text-center font-bold text-charcoal">Current Sod Installation Rates</h3>
            <div className="overflow-hidden rounded-lg border border-charcoal/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-evergreen-700 text-white">
                    <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider">Surface Area (ft²)</th>
                    <th className="px-5 py-3 text-left text-xs font-black uppercase tracking-wider">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map(({ label, display }, i) => {
                    const isActive = i === activeIdx;
                    return (
                      <tr
                        key={label}
                        className={`border-t border-charcoal/8 transition-colors ${isActive ? "bg-evergreen-700/10" : i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}
                      >
                        <td className={`px-5 py-3 ${isActive ? "font-bold text-charcoal" : "text-charcoal/75"}`}>{label}</td>
                        <td className={`px-5 py-3 ${isActive ? "font-bold text-evergreen-700" : "text-charcoal/75"}`}>{display}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
