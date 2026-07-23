export interface Experience {
  id: string;
  role: string;
  company: string;
  dates: string;
  place?: string;
  url?: string;
  points: string[];
  skills: string[];
}

/**
 * =====================================================================
 * HOW TO ADD AN EXPERIENCE
 * ---------------------------------------------------------------------
 * Copy the template below into the EXPERIENCES array. Put the MOST RECENT
 * job first — the top entry starts expanded, the rest start collapsed.
 *
 *   {
 *     id: "05",                        // unique
 *     role: "Job title",
 *     company: "Company",
 *     dates: "Mon YYYY — Mon YYYY",
 *     place: "City",                   // optional
 *     url: "https://company.com/",     // optional — adds a "./visit" button
 *     points: ["What you did", "..."], // bullets shown when the card is open
 *     skills: ["Skill1", "Skill2"],    // small outline tags
 *   },
 *
 * The existing content came from Emmanuel's 2025/26 CV.
 * =====================================================================
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "01",
    role: "Software Engineering Summer Intern",
    company: "JPMorgan Chase & Co.",
    dates: "Jun 2025 — Aug 2025",
    place: "London",
    url: "https://www.jpmorgan.com/",
    points: [
      "Built a bulk subscription feature for the firm’s Model Engineering platform, directly improving usability and efficiency.",
      "Worked in an Agile team to deliver production-quality code aligned with stakeholder needs.",
      "Built expertise in Scala while sharpening problem-solving, testing and communication.",
    ],
    skills: ["Scala", "Agile", "Production code"],
  },
  {
    id: "02",
    role: "Software Engineering Volunteer",
    company: "PRGRSS",
    dates: "Dec 2022 — Dec 2024",
    place: "Remote",
    points: [
      "Contributed across the full development cycle of a mobile app — a successful launch with feedback from 100+ users.",
      "Boosted team efficiency ~30% through streamlined Git, GitHub and Slack workflows.",
    ],
    skills: ["Git", "GitHub", "Mobile"],
  },
  {
    id: "03",
    role: "Research Fellow Intern",
    company: "Loughborough University",
    dates: "Feb 2024 — Mar 2024",
    place: "Loughborough",
    points: [
      "Built diverse talking avatars inside a VR environment using AI.",
      "Configured VR simulations to replicate realistic interview scenarios.",
      "Oversaw recording of interviewer↔avatar interactions, ensuring data integrity.",
    ],
    skills: ["AI", "VR", "Data collection"],
  },
  {
    id: "04",
    role: "Business Intelligence Intern",
    company: "Sodexo",
    dates: "Jun 2023 — Aug 2023",
    place: "Luton",
    url: "https://www.sodexo.com/",
    points: [
      "Analysed customer data to drive marketing strategy, targeting a 20% lift in engagement.",
      "Sharpened communication & presentation across team and client interactions.",
      "Adapted quickly to the business environment and contributed to brainstorming.",
    ],
    skills: ["Data analysis", "Teamwork", "Presenting"],
  },
];
