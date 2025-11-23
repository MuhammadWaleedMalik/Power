import React from "react";
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "Pricing", path: "/pricing" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Rising Leaders", path: "/emergingandrisingleader" },
      { name: "HR Teams", path: "/hrleader" },
      { name: "L&D Teams", path: "/landleader" },
    ],
  },
  {
    title: "Insights",
    links: [{ name: "Case Studies", path: "/use-case" }],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Cookie Settings", path: "/cookie-settings" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        name: "LinkedIn",
        path: "https://www.linkedin.com/company/powerroom",
        external: true,
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/voices-of-influence--an-eloquent-speaker-s-journey-1.png')",
      }}
    >
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-20 flex flex-col gap-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-200 hover:text-white hover:underline transition"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-gray-200 hover:text-white hover:underline transition"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center font-serif text-2xl sm:text-3xl md:text-4xl leading-snug max-w-4xl mx-auto">
          PowerRoom exists to strengthen conversation and leadership skills
          across individuals, teams, companies, and societies.
        </div>
      </div>
    </footer>
  );
};
