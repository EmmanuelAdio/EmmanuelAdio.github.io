export interface Project {
  id: string;
  title: string;
  /** mono eyebrow above the title, e.g. "Hackathon winner · React" */
  kind: string;
  blurb: string;
  tech: string[];
  repo: string;
  points: string[];
  /** screenshot path; when absent a branded typographic placeholder is used */
  img?: string;
  /** placeholder glyph, used only when `img` is absent */
  glyph?: string;
  /** placeholder glow colour, used only when `img` is absent */
  accent?: "accent" | "corona";
}

/**
 * =====================================================================
 * HOW TO ADD A PROJECT
 * ---------------------------------------------------------------------
 * Copy the template below into the PROJECTS array. Position in the array
 * = position on the page (top of the array = first card).
 *
 * Imagery — pick ONE:
 *   • a screenshot: drop a ~16:10 image in public/assets/projects/ and set
 *     `img`, OR
 *   • a branded placeholder: omit `img` and set `glyph` + `accent`.
 *   Don't set both — if `img` is present the glyph is ignored.
 *
 *   {
 *     id: "10",                          // unique; also shown as the card's corner number
 *     title: "Project name",
 *     kind: "Type · main tech",          // small mono line above the title
 *     blurb: "1–2 sentence summary shown on the card and in the pop-up.",
 *     tech: ["Tech1", "Tech2", "Tech3"], // first 3 show on the card; ALL show in the pop-up
 *     repo: "https://github.com/EmmanuelAdio/...",
 *     points: ["Detail bullet 1", "Detail bullet 2"], // shown in the pop-up
 *     // --- EITHER a screenshot: ---
 *     img: "/assets/projects/your-file.png",
 *     // --- OR a placeholder (delete the img line above): ---
 *     glyph: "◆",                        // any character or emoji
 *     accent: "accent",                  // "accent" = indigo glow, "corona" = magenta glow
 *   },
 *
 * The existing content came from Emmanuel's 2025/26 CV.
 * =====================================================================
 */
export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Agentic AI for Red-Teaming",
    kind: "Final-year thesis · LangChain",
    glyph: "⌖",
    accent: "corona",
    blurb:
      "An agent-based framework that evaluates LLM-powered systems (RAG pipelines) for reliability and security — reproducible, structured red-teaming.",
    tech: ["Python", "LangChain", "LLMs", "RAG"],
    repo: "https://github.com/EmmanuelAdio/agentic-red-team-framework",
    points: [
      "Agent framework to probe RAG pipelines for reliability & security",
      "Analyses AI outputs for accuracy, consistency & robustness",
      "Reproducible testing + reporting environment",
      "2025 – present · MEng thesis",
    ],
  },
  {
    id: "02",
    title: "Gemi9 — Spotlight",
    kind: "Hackathon winner · React",
    glyph: "◎",
    accent: "accent",
    blurb:
      "An AI web app spotlighting the contributions of Black inventors in science. Won First Place and the People’s Choice Award at the BGN Hackathon, hosted at Google London.",
    tech: ["React", "Gemini API", "Google Vision", "GCP"],
    repo: "https://github.com/jalliet/spotlight",
    points: [
      "Spotlight AI: Google Vision + Gemini identify objects → surface the relevant inventor",
      "Quiz + leaderboard to engage users in learning",
      "Responsive React frontend across mobile & desktop",
      "🏆 First Place + People’s Choice — BGN Hackathon @ Google London",
    ],
  },
  {
    id: "03",
    title: "Crypto Price Prediction",
    kind: "Deep learning · Python",
    glyph: "₿",
    accent: "accent",
    blurb:
      "Deep-learning models (ANN, LSTM, CNN-GRU) forecasting Bitcoin prices from market data and news sentiment — with a full research report.",
    tech: ["TensorFlow", "Scikit-learn", "BERT", "TextBlob"],
    repo: "https://github.com/EmmanuelAdio",
    points: [
      "ANN / LSTM / CNN-GRU compared on historical market data",
      "NLP sentiment (BERT, TextBlob) from scraped financial news",
      "Evaluated with RMSE, MAE & directional accuracy",
      "Full report on volatility & ML in finance",
    ],
  },
  {
    id: "04",
    title: "BetterYesterday",
    kind: "Android app · Kotlin",
    img: "/assets/projects/betteryesterday.png",
    blurb:
      "A goal-tracking Android app that helps users stay motivated by tracking progress and setting milestones.",
    tech: ["Kotlin", "Room DB", "NavController", "Sharesheet"],
    repo: "https://github.com/EmmanuelAdio/BetterYesterday",
    points: [
      "Multiple screens via NavHost & NavController",
      "Local storage with Preference Datastores + Room",
      "Calendar integration through implicit intents",
      "Responsible permission handling for notifications",
    ],
  },
  {
    id: "05",
    title: "ANN — Flood Index",
    kind: "Machine learning · Java",
    img: "/assets/projects/ann-flood.png",
    blurb:
      "A neural network built from scratch with backpropagation to predict a flood index — reaching an MSE of 0.0015618, far past linear regression.",
    tech: ["Java", "Backprop", "IntelliJ"],
    repo: "https://github.com/EmmanuelAdio/ANNCoursework",
    points: [
      "Data cleaning, splitting, randomising & standardising",
      "Momentum, annealing, bold-driver, weight decay & batching",
      "MSE 0.0015618 — far outperforming baselines",
    ],
  },
  {
    id: "06",
    title: "Open Day AI Chatbot",
    kind: "Group project · FastAPI",
    glyph: "⌁",
    accent: "corona",
    blurb:
      "A chatbot answering prospective-student queries with structured, FAQ-style responses — themed, tested and refined for clarity.",
    tech: ["Python", "FastAPI", "NLP"],
    repo: "https://github.com/EmmanuelAdio",
    points: [
      "Structured FAQ-style answers to student queries",
      "Questions organised into themes for clarity & access",
      "Responses tested for accuracy, consistency & UX",
      "2025 – present",
    ],
  },
  {
    id: "07",
    title: "Bookshop Inventory",
    kind: "OOP system · Java",
    img: "/assets/projects/bookshop.png",
    blurb:
      "A robust inventory management system for a bookstore with role-based access for Admin and Customer — scored a perfect 100/100.",
    tech: ["Java", "OOP", "Role-based access"],
    repo: "https://github.com/EmmanuelAdio/OOP_Bookshop_Prog",
    points: [
      "Role-based access: Admin vs Customer",
      "Inventory management + basket operations",
      "Comprehensive error handling (out-of-stock, credit)",
      "Clean OOP design from strict requirements",
    ],
  },
  {
    id: "08",
    title: "Smart Home Monitor",
    kind: "Embedded · Arduino",
    img: "/assets/projects/smart-home.png",
    blurb:
      "An Arduino smart-home monitor rendering message-processed info on an LCD, with sync and error handling between board and host. Scored 94/100.",
    tech: ["C/C++", "Arduino", "Embedded"],
    repo: "https://github.com/EmmanuelAdio/Embedded_Prog",
    points: [
      "Error handling & host↔board synchronisation",
      "Custom characters, SRAM display, device filtering",
      "Data persistence + long-string scrolling",
      "Memory optimisation for constrained hardware",
    ],
  },
  {
    id: "09",
    title: "Tic-Tac-Toe AI",
    kind: "EPQ · game AI",
    img: "/assets/projects/tictactoe.png",
    blurb:
      "A series of AI opponents from random moves to a strategic Minimax agent, exploring how AI complexity shapes difficulty and enjoyment.",
    tech: ["Python", "Minimax", "EPQ"],
    repo: "https://github.com/EmmanuelAdio/TicTacToe_EPQ",
    points: [
      "Player vs Player, Random, Smart & Minimax AI",
      "Studied AI complexity vs player enjoyment",
      "Full testing & evaluation of AI performance",
    ],
  },
];
