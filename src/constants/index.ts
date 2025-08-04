import { Android, Ios, Web, Windows } from "./icons";

export const features = [
  {
    id: "0",
    icon: "/images/feature-1.png",
    caption: "AI-Powered Analysis",
    title: "Captures & Analyzes Transcripts",
    text: "Auto-processes every sales call, onboarding training, team meeting, or implementation call with real-time transcript capture and AI-driven content analysis.",
    button: {
      icon: "/images/magictouch.svg",
      title: "Watch the demo",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "Smart CRM Integration",
    title: "Finds the Right CRM Record",
    text: "AI matches meeting content to correct account in CRM/micro-CRM with seamless data synchronization and Airtable integration.",
    button: {
      icon: "/images/docs.svg",
      title: "Read the docs",
    },
  },
] as const;

export const details = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "AI meeting intelligence",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Automated follow-ups",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "CRM integration",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "24 / 7 AI support",
  },
] as const;

export const faq = [
  {
    id: "0",
    question: "How does CoNNIE AI capture meeting content?",
    answer:
      "CoNNIE AI automatically connects to your Zoom or Teams meetings, captures real-time transcripts, and analyzes conversations for key insights, action items, and follow-up opportunities.",
  },
  {
    id: "1",
    question: "Can CoNNIE AI integrate with my existing CRM?",
    answer:
      "Yes! CoNNIE AI seamlessly integrates with Airtable and other CRM platforms, automatically matching meeting content to the correct account records and updating your pipeline.",
  },
  {
    id: "2",
    question: "How accurate is the AI analysis?",
    answer:
      "Our AI is trained on thousands of sales calls and meetings, providing highly accurate insights and action items. The system learns from your feedback to improve accuracy over time.",
  },
  {
    id: "3",
    question: "What types of meetings does CoNNIE AI work with?",
    answer:
      "CoNNIE AI works with sales calls, team meetings, onboarding sessions, implementation calls, and any other business meeting where you need to capture insights and follow-ups.",
  },
  {
    id: "4",
    question: "Do you offer enterprise plans?",
    answer:
      "Absolutely! We offer custom enterprise plans with advanced features, dedicated support, and tailored integrations for larger teams and organizations.",
  },
  {
    id: "5",
    question: "How secure is my meeting data?",
    answer:
      "Your data security is our top priority. We use enterprise-grade encryption, comply with SOC 2 standards, and never share your meeting content with third parties.",
  },
  {
    id: "6",
    question: "Can I customize the follow-up messages?",
    answer:
      "Yes! CoNNIE AI allows you to review and customize all AI-generated follow-ups before they're sent, ensuring they match your brand voice and communication style.",
  },
  {
    id: "7",
    question: "How do I invite my team to use CoNNIE AI?",
    answer:
      "Simply share your team invitation link or add team members through your dashboard. Each member gets their own secure access with role-based permissions.",
  },
  {
    id: "8",
    question: "Do you offer training for teams?",
    answer:
      "Yes! We provide comprehensive onboarding sessions, training materials, and dedicated customer success support to ensure your team gets maximum value from CoNNIE AI.",
  },
  {
    id: "9",
    question: "What if I need help with my account?",
    answer:
      "Our support team is available 24/7 via chat, email, or phone. We also offer dedicated customer success managers for enterprise customers.",
  },
] as const;

export const plans = [
  {
    id: "0",
    title: "Starter",
    priceMonthly: 29,
    priceYearly: 19,
    caption: "Best for solo professionals",
    features: [
      "100 meeting hours/month",
      "Basic CRM integration",
      "AI meeting summaries",
      "Email support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Professional",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "Unlimited meeting hours",
      "Advanced CRM integration",
      "Priority support",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Enterprise",
    priceMonthly: 199,
    priceYearly: 149,
    caption: "For teams & organizations",
    features: [
      "All Professional features",
      "Custom integrations",
      "Dedicated success manager",
      "SLA guarantees",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
] as const;

export const testimonials = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Sales Director, TechCorp",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment:
      "CoNNIE AI has transformed our sales process. We never miss follow-ups anymore, and our conversion rates have increased by 40%.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "VP Operations, GrowthCo",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment:
      "The AI insights are incredibly accurate. It's like having a personal assistant for every meeting, ensuring nothing falls through the cracks.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Customer Success, ScaleUp",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Our onboarding process is now 3x faster thanks to CoNNIE AI. The automated task creation saves us hours every week.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Sales Manager, InnovateTech",
    avatarUrl: "/images/testimonials/alicia-barker.png",
    comment:
      "The CRM integration is seamless. CoNNIE AI automatically updates our pipeline with meeting insights, keeping everything organized.",
  },
  {
    id: "4",
    name: "Becky Snider",
    role: "Team Lead, StartupXYZ",
    avatarUrl: "/images/testimonials/becky-snider.png",
    comment:
      "Switched to CoNNIE AI last month, and I'm already seeing results. Our team productivity has skyrocketed.",
  },
  {
    id: "5",
    name: "Jim Bradley",
    role: "CEO, Enterprise Solutions",
    avatarUrl: "/images/testimonials/jim-bradley.png",
    comment:
      "The automated follow-ups are game-changing. Our clients love the personalized touch, and we love the time savings.",
  },
] as const;

export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
] as const;

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: Ios,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: Android,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: Windows,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: Web,
    url: "#",
  },
] as const;

export const socials = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
] as const;

export const site_links = {
  sourceCode: "https://github.com/sanidhyy/xora-saas",
} as const;
