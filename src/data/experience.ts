export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string[];
  techUsed: string[];
  current: boolean;
  type: "work" | "research" | "leadership" | "volunteering";
}

export const experiences: ExperienceItem[] = [
  {
    id: "robocon",
    role: "AI/ML Head",
    organization: "Team Robocon IITR",
    duration: "Jun 2025 – Present",
    description: [
      "Managed the AI/ML division for robotics systems.",
      "Built low-latency object detection pipelines for autonomous robotics.",
      "Guided junior developers and integrated ML pipelines with hardware systems.",
    ],
    techUsed: ["Robotics", "Computer Vision", "Embedded AI", "Real-Time Systems"],
    current: true,
    type: "work",
  },
  {
    id: "gambitor",
    role: "Technical Head",
    organization: "GambitoR, IIT Roorkee",
    duration: "June 2025 – Present",
    description: [
      "Conducted IITR-focused motivational sessions for 200+ JEE aspirants at leading coaching centers.",
      "Led national outreach exam drive; organized 3-day IITR campus visit for 50+ school students.",
      "Managed outreach website and led counselling support for incoming IITR students during admissions season.",
    ],
    techUsed: ["Leadership", "Mentoring", "Web Systems", "Operations"],
    current: true,
    type: "leadership",
  },
  {
    id: "mars",
    role: "Member",
    organization: "Models and Robotics Section (MaRS), IIT Roorkee",
    duration: "April 2024 - Present",
    description: [
      "Built and trained AI models optimized for real-time performance and improved predictive accuracy.",
      "Led first-year recruitment and coordinated open projects involving 500+ student participants across IIT Roorkee.",
    ],
    techUsed: ["AI/ML", "Robotics", "Team Coordination", "Project Management"],
    current: true,
    type: "work",
  },
  {
    id: "ncc",
    role: "Executive Member (Operations and Events)",
    organization: "NCC, IIT Roorkee",
    duration: "February 2024 - June 2025",
    description: [
      "Coordinated Blood Donation and Eye & Health Checkup Camp 2024, ensuring smooth execution for 500+ participants.",
      "Planned NCC's annual event calendar, driving effective scheduling and strong student engagement.",
    ],
    techUsed: ["Event Planning", "Operations", "Leadership", "Coordination"],
    current: false,
    type: "leadership",
  },
];
