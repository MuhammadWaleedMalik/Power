import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const pricingPlans = [
  {
    name: "Free Plan",
    price: "$0",
    priceUnit: "/ month",
    description:
      "Build confidence, no credit card required",
    features: [
      "Access to core PowerRooms (2 sessions per room / month)",
      "Basic feedback and progress tracking",
      "Solo practice, anytime",
      "Community newsletter + tips",
    ],
    buttonText: "Start Free",
    isPopular: false,
  },
  {
    name: "Pro Plan",
    price: "$49",
    priceUnit: "/ month per user",
    description:
      "Unlimited practice to master high-stakes conversations",
    features: [
      "Unlimited sessions across all five Rooms",
      "Advanced feedback and personalized insights",
      "Save scenarios & track growth over time",
      "Priority email support",
      "Optional add-on: 1:1 coaching credits",
    ],
    buttonText: "Upgrade to Pro",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceUnit: "(contact sales)",
    description:
      "Scalable leadership development for the whole company",
    features: [
      "Unlimited users & sessions",
      "Custom Rooms tailored to org challenges",
      "SSO / advanced security",
      "Team & org-level analytics dashboards",
      "Dedicated success manager + onboarding",
      "Quarterly leadership impact reports",
    ],
    buttonText: "Request a Demo",
    isPopular: false,
  },
];

export const Pricing = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-[#fffaf3]">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Start free. Scale when you're ready.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative bg-white border rounded-2xl shadow-sm ${
              plan.isPopular
                ? "border-[#f7ca45] shadow-lg"
                : "border-gray-200"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f7ca45] text-black text-xs sm:text-sm font-medium px-4 py-1 rounded-full shadow">
                Most Popular
              </div>
            )}

            <CardContent className="p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm sm:text-base">
                    {plan.priceUnit}
                  </span>
                </div>
                <p className="mt-3 text-gray-700 text-sm sm:text-base">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                    >
                      <img
                        src="/check.svg"
                        alt="check"
                        className="w-5 h-5 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className={`mt-8 w-full py-3 rounded-lg font-medium text-base ${
                  plan.isPopular
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-[#f7ca45] text-black hover:bg-[#f7ca45]/90"
                }`}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
