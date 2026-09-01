import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Profile — Vriddhi Digital ID" },
      {
        name: "description",
        content:
          "Vriddhi student profile with a tap-to-flip Digital ID: institution, attendance, fees and a full-screen scannable QR code.",
      },
      { property: "og:title", content: "Student Profile — Vriddhi Digital ID" },
      {
        property: "og:description",
        content:
          "Tap the QR widget to flip the profile cards into a full-screen scannable student Digital ID.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/student-profile.html" });
  },
  component: () => null,
});
