//import { BotMessageSquare } from "lucide-react";
//import { BatteryCharging } from "lucide-react";
//import { Fingerprint } from "lucide-react";
//import { ShieldHalf } from "lucide-react";
//import { PlugZap } from "lucide-react";
//import { GlobeLock } from "lucide-react";
//import React from 'react'
import user1 from "../assets/profile-pictures/user1.jpeg";
//import user2 from "../assets/profile-pictures/user2.jpg";
//import user3 from "../assets/profile-pictures/user3.jpg";
//import user4 from "../assets/profile-pictures/user4.jpg";
import clinton from "../assets/profile-pictures/clinton.jpeg";
import susan from "../assets/profile-pictures/susan.jpeg";

//import { Shelter, Counseling, Legal, Medical, Crisis, Empowerment, Childcare, Education, SupportGroup, Rehab, Advocacy, JobPlacement, Nutrition, Transport } from "your-icon-library";
//import { FaBed, FaHandHoldingHeart, FaBalanceScale, FaHospital, FaPhoneAlt, FaLightbulb, FaChild, FaGraduationCap, FaUsers, FaHouseUser, FaBullhorn, FaBriefcase, FaAppleAlt, FaCar } from 'react-icons/fa';
import { FaBed as Shelter, FaHandHoldingHeart as Counseling, FaBalanceScale as Legal, FaHospital as Medical, FaPhoneAlt as Crisis, FaLightbulb as Empowerment, FaChild as Childcare, FaGraduationCap as Education, FaUsers as SupportGroup, FaHouseUser as Rehab, FaBullhorn as Advocacy, FaBriefcase as JobPlacement, FaAppleAlt as Nutrition, FaCar as Transport } from 'react-icons/fa';

export const navItems = [
  { label: "What we do", href: "#ServicesSection" },
  { label: "News and Stories", href: "#ResourcesSection" },
  { label: "Law", href: "#https://kenyalaw.org/kl/index.php?id=4512"},
  { label: "Get involved", href: "#" },
  
];


export const aboutUsContent = {
  heading: "About 50% of women face GBV",
  paragraph:
    "Mizpa House is a non-profit safety house that helps shelter young girls and women who go through GBV.",
  donateButtonText: "Donate Now",
  donateLink: "/donate",
  backgroundImage: "../assets/your-background-image.jpg", // Make sure to update with the correct path
};

export const testimonials = [
  {
    user: "Grace",
    company: "Kiambu",
    image: user1,
    text: "Mizpa House saved my life. When I had nowhere to turn, they welcomed me with open arms and helped me find my strength again. Today, I am a survivor, not a victim. Grace, 24" 
  },
  {
    user: "Amina",
    county: "Mombasa",
    image: user1,
    text: "I was trapped in an abusive relationship for years, but Mizpa House gave me the courage to leave. Their support and care have helped me heal and reclaim my life. Amina, 38"
  },
  {
    user: "Wanjiru",
    county: "Muranga",
    image: user1,
    text: "Before coming to Mizpa House, I felt completely alone. Now, I know I have a family here who understands my pain and supports my journey to recovery. Wanjiru 28",
  },
  {
    user: "Ronee Brown",
    conty: "Kitui",
    image: user1,
    text: "Mizpa House is more than a shelter; it's a place of hope. I arrived broken, but with their help, I am rebuilding myself and looking forward to a brighter future.",
  },
  {
    user: "Phylis Igadwa",
   // company: "Visionary Creations",
    image: user1,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Omondi",
    //company: "Synergy Systems",
    image: user1,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];
export const services = [
  {
    icon: <Shelter />,
    text: "Shelter and Safe Accommodation",
    description:
      "Providing a secure and confidential place for survivors to stay, free from the threat of their abusers.",
  },
  {
    icon: <Counseling />,
    text: "Counseling and Therapy",
    description:
      "Offering psychological support through individual and group therapy sessions to help survivors heal from trauma.",
  },
  {
    icon: <Legal />,
    text: "Legal Representation and Advocacy",
    description:
      "Assisting with legal matters, including obtaining restraining orders, filing charges, and providing legal representation in divorce or custody cases.",
  },
  {
    icon: <Medical />,
    text: "Medical Care",
    description:
      "Access to medical services, including health check-ups, emergency medical care, and sexual health services.",
  },
  {
    icon: <Crisis />,
    text: "Crisis Intervention",
    description:
      "Immediate support for individuals in crisis, including hotline services and emergency interventions.",
  },
  {
    icon: <Empowerment />,
    text: "Empowerment Programs",
    description:
      "Workshops and training programs focused on skill-building, education, and economic empowerment to help survivors become self-sufficient.",
  },
  {
    icon: <Childcare />,
    text: "Childcare and Family Support",
    description:
      "Providing childcare services and support for survivors with children, ensuring that the entire family receives care and assistance.",
  },
  {
    icon: <Education />,
    text: "Educational Support",
    description:
      "Helping survivors continue their education or access vocational training to improve their future prospects.",
  },
  {
    icon: <SupportGroup />,
    text: "Support Groups",
    description:
      "Facilitating peer support groups where survivors can connect with others who have shared similar experiences.",
  },
  {
    icon: <Rehab />,
    text: "Rehabilitation Services",
    description:
      "Assisting survivors with substance abuse issues or other challenges through specialized rehabilitation programs.",
  },
  {
    icon: <Advocacy />,
    text: "Advocacy and Awareness Campaigns",
    description:
      "Engaging in broader advocacy efforts to raise awareness about GBV and influence policy changes that protect survivors.",
  },
  {
    icon: <JobPlacement />,
    text: "Job Placement Assistance",
    description:
      "Helping survivors find employment through job placement services and partnerships with local businesses.",
  },
  {
    icon: <Nutrition />,
    text: "Nutrition and Wellness Programs",
    description:
      "Providing access to nutritious meals, fitness programs, and wellness activities to promote overall well-being.",
  },
  {
    icon: <Transport />,
    text: "Transportation Services",
    description:
      "Offering transportation assistance for survivors to attend court hearings, medical appointments, or other essential activities.",
  },
];



export const checklistItems = [
  {
    title: "Donations:",
    description:
    "Join as a Donor.Financial Contributions",
  },
  {
    title: "Volunteering",
    description:
    " Volunteers can offer their time and expertise in areas such as counseling etc."
  },
  {
    title: "Advocacy and Awareness",
    description: ""
  },
  {
    title: "Corporate Partnerships",
    description: " Companies can sponsor events and programs at mizpa and support operational needs eg. Therapy sessions"

  },
  {
    title: "Job placement",
    description: "Employment Opportunities: Businesses can provide job opportunities for survivors, helping them regain financial independence and stability."
  },

];
// src/constants/index.jsx

export const gbvContent = `

  Gender-based violence (GBV) covers a broad spectrum of abuses, including sexual, physical, psychological, and economic harm, whether in public or private spheres. It involves not only direct acts of violence but also threats, coercion, and manipulation. Common manifestations of GBV include domestic violence, sexual assault, child marriage, female genital mutilation, and so-called "honor crimes."

The effects of GBV are significant and can have lasting consequences for survivors, sometimes even resulting in death.

`;

export const training = {
  heading: "Join Us",
  paragraph:
  "We offer training and conferences related to GBV matters (Training of Trainers) in collaboration with our partners and affiliates around the globe, including North America, Western Europe, and Australia."
};

export const resources = [
  {
    title: "Understanding GBV",
    description: "A comprehensive study on the causes and impacts of gender-based violence.",
    points: ["Impact on communities", "Psychological effects", "Preventative measures"],
    link: "#https://www.youtube.com/watch?v=uxyUxFxdRKc",
  },
  {
    title: "Legal Frameworks",
    description: "An analysis of the legal responses to GBV in different countries.",
    points: ["International laws", "National policies", "Case studies"],
    link: "#https://kenyalaw.org/kl/index.php?id=4512",
  },
  {
    title: "Survivors",
    description: "An analysis on how to help victims.",
    points: ["How to ask for Help(SOS)", "National policies", "Case studies"],
    link: "#",
  },
];

export const people = [
  {
    name: "Anthony Mburu",
    title: "Chairman",
    image: "path/to/anthony-mburu.jpg",
  },
  {
    name: "Wilson Wamwea",
    title: "CEO",
    image: "path/to/user1.jpg",
  },
  {
    name: "Susan Muturi",
    title: "Director Operations",
    image: susan,
  },
  {
    name: "James Wamwea",
    title: "Director-Liasion",
    image: "path/to/user1.jpg",
  },
  
  {
    name: "Lisa Lee",
    title: "Director of programs",
    image: "path/to/user1.jpg",
  },

  {
    name: "Santori kims",
    title: "-Head of mission& fundraising - Canada",
    image: clinton,
  },
  {
    name: "Elizabeth Koech",
    title: "Head of mission & Fundraising-Australia",
    image: "path/to/user1.jpg",
  },
  {
    name: "Luke Yego",
    title: "-Head of mission& fundraising - New Zealand",
    image: "path/to/user1.jpg",
  },
  
  
]

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
