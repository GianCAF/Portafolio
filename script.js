const projects = [
  {
    name: "Sellix",
    period: "2026",
    category: "Web Application",
    summary:
      "A digital storefront/e-commerce web platform ready for demonstration. The project is ongoing; please contact me for a guided demo.",
    technologies: ["React", "Vercel", "JavaScript", "Frontend", "UI"],
    accent: "#0f7f65",
    initials: "SX",
    status: "Demo upon request",
    url: "https://sellix-five.vercel.app/",
  },
  {
    name: "SC-Manager",
    period: "2026",
    category: "Management",
    summary:
      "A system designed to manage information, processes, and resources from a centralized interface for easy tracking and control.",
    technologies: ["Web app", "JavaScript", "Management", "Dashboard", "Frontend", "Backend"],
    accent: "#355f9f",
    initials: "SC",
    status: "Confidential",
    url: "",
  },
  {
    name: "E-COMERCE-AQUASENSE-VFINAL",
    period: "2026",
    category: "E-commerce + IoT",
    summary:
      "The final version of AquaSense as an e-commerce web experience and product presentation, focused on showcasing the value proposition and facilitating navigation.",
    technologies: ["React", "Vercel", "E-commerce", "AquaSense", "Responsive Design", "Firebase"],
    accent: "#c18a17",
    initials: "AQ",
    status: "Published",
    url: "https://e-comerce-aquasense-vfinal.vercel.app/",
  },
  {
    name: "SmileFlow",
    period: "2026",
    category: "Health + Management",
    summary:
      "An application designed to organize workflows, tracking, or management within an environment related to dental services.",
    technologies: ["Web app", "Frontend", "Backend", "Management", "UX", "JavaScript", "React", "Firebase"],
    accent: "#6d5fb8",
    initials: "SF",
    status: "In development",
    url: "",
  },
  {
    name: "Gestion-Proyectos-ITSOEH",
    period: "2026",
    category: "Management + Composting",
    summary:
      "A system to support the management of a composting project within an academic context, with a focus on organization, tracking, and operational clarity.",
    technologies: ["Project Management", "Web app", "Composting", "Dashboard"],
    accent: "#1f7a8c",
    initials: "GP",
    status: "Demo upon request",
    url: "",
  },
  {
    name: "Snake_Deteccion_Puntos",
    period: "2026",
    category: "Game + Vision",
    summary:
      "An experimental version of Snake focused on point detection, game logic, and interaction to practice computer vision processing and control.",
    technologies: ["Python", "OpenCV", "Game", "Detection", "Computer Vision"],
    accent: "#b64d7a",
    initials: "SD",
    status: "For local execution, you can download it from my GitHub.",
    url: "https://github.com/GianCAF/Snake_Deteccion_Puntos",
  },
  {
    name: "Snake_Multijugador",
    period: "2026",
    category: "Game",
    summary:
      "A multiplayer adaptation of Snake featuring competitive mechanics, player controls, and board logic for shared matches.",
    technologies: ["JavaScript", "Game Logic", "Multiplayer", "Canvas", "Frontend"],
    accent: "#27745f",
    initials: "SM",
    status: "For local execution, you can download it from my GitHub.",
    url: "https://github.com/GianCAF/Snake_Multijugador",
  },
];

const extraTechnologies = [
  "Python",
  "React",
  "Vite",
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "FastAPI",
  "Uvicorn",
  "Vercel",
  "Git",
  "GitHub",
  "Vue",
  "Firebase",
  "Firestore",
  "Supabase",
  "MySQL",
  "ESP32",
  "ESP32-C6",
  "ESP LilyGO",
  "MQTT",
  "JSON",
  "Node-RED",
  "n8n",
  "Sensors",
  "Data Analysis",
  "Pandas",
  "NumPy",
  "Chart.js",
  "Hetzner",
  "SQL Server",
];

const projectGrid = document.querySelector("#projectGrid");
const techCloud = document.querySelector("#techCloud");

function renderProjects() {
  projectGrid.innerHTML = projects
    .map((project) => {
      const isReady = Boolean(project.url);
      const action = isReady
        ? `<a class="button project-link ready" href="${project.url}" target="_blank" rel="noreferrer">Open project</a>`
        : `<button class="button project-link" type="button" disabled>${project.status}</button>`;

      return `
        <article class="project-card">
          <div class="card-top">
            <span class="project-icon" style="background:${project.accent}">${project.initials}</span>
            <span class="status-pill">${project.status}</span>
          </div>
          <h3>${project.name}</h3>
          <p class="project-summary">${project.summary}</p>
          <ul class="project-meta">
            <li><strong>Timeline</strong><span>${project.period}</span></li>
            <li><strong>Area</strong><span>${project.category}</span></li>
          </ul>
          <div class="tag-list" aria-label="${project.name} technologies">
            ${project.technologies.map((tech) => `<span class="tag">${tech}</span>`).join("")}
          </div>
          <div class="card-actions">${action}</div>
        </article>
      `;
    })
    .join("");
}

function renderTechCloud() {
  const techs = [
    ...new Set([...projects.flatMap((project) => project.technologies), ...extraTechnologies]),
  ].sort((a, b) => a.localeCompare(b, "en"));
  techCloud.innerHTML = techs.map((tech) => `<span class="tech-chip">${tech}</span>`).join("");
}

renderProjects();
renderTechCloud();