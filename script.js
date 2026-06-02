const projects = [
  {
    name: "Sellix",
    period: "2026",
    category: "Aplicacion web",
    summary:
      "Plataforma web tipo vitrina/comercio digital preparada para demostracion. El proyecto sigue en proceso; para ver una demo guiada, contacta conmigo.",
    technologies: ["React", "Vercel", "JavaScript", "Frontend", "UI"],
    accent: "#0f7f65",
    initials: "SX",
    status: "Demo bajo contacto",
    url: "https://sellix-five.vercel.app/",
  },
  {
    name: "SC-Manager",
    period: "2026",
    category: "Gestion",
    summary:
      "Sistema orientado a administrar informacion, procesos y recursos desde una interfaz centralizada para facilitar seguimiento y control.",
    technologies: ["Web app", "JavaScript", "Gestion", "Dashboard", "Frontend"],
    accent: "#355f9f",
    initials: "SC",
    status: "En proceso de desarrollo",
    url: "",
  },
  {
    name: "Escuela_Bayesiana_LLM",
    period: "2026",
    category: "IA + educacion",
    summary:
      "Proyecto educativo que combina conceptos bayesianos con modelos de lenguaje para apoyar aprendizaje, explicaciones y exploracion guiada.",
    technologies: ["LLM", "Python", "IA", "Educacion", "Probabilidad"],
    accent: "#d85c4a",
    initials: "EB",
    status: "En proceso de desarrollo",
    url: "",
  },
  {
    name: "E-COMERCE-AQUASENSE-VFINAL",
    period: "2026",
    category: "E-commerce + IoT",
    summary:
      "Version final de AquaSense como experiencia web de comercio y presentacion del producto, enfocada en mostrar la propuesta y facilitar la navegacion.",
    technologies: ["React", "Vercel", "E-commerce", "AquaSense", "Responsive Design"],
    accent: "#c18a17",
    initials: "AQ",
    status: "Publicado",
    url: "https://e-comerce-aquasense-vfinal.vercel.app/",
  },
  {
    name: "SmileFlow",
    period: "2026",
    category: "Salud + gestion",
    summary:
      "Aplicacion pensada para organizar flujos de atencion, seguimiento o gestion en un entorno relacionado con servicios dentales.",
    technologies: ["Web app", "Frontend", "Gestion", "UX", "JavaScript"],
    accent: "#6d5fb8",
    initials: "SF",
    status: "En proceso de desarrollo",
    url: "",
  },
  {
    name: "Gestion-Proyectos-ITSOEH",
    period: "2026",
    category: "Gestion + composta",
    summary:
      "Sistema para apoyar la gestion de un proyecto de composta en contexto academico, con enfoque en organizacion, seguimiento y claridad operativa.",
    technologies: ["Gestion de proyectos", "Web app", "Composta", "Dashboard"],
    accent: "#1f7a8c",
    initials: "GP",
    status: "Demo bajo contacto",
    url: "https://gestion-proyectos-itsoeh-v1.vercel.app/",
  },
  {
    name: "Snake_Deteccion_Puntos",
    period: "2026",
    category: "Juego + vision",
    summary:
      "Version experimental de Snake enfocada en deteccion de puntos, logica de juego e interaccion para practicar procesamiento y control visual.",
    technologies: ["Python", "OpenCV", "Juego", "Deteccion", "Computer Vision"],
    accent: "#b64d7a",
    initials: "SD",
    status: "En proceso de desarrollo",
    url: "",
  },
  {
    name: "Snake_Multijugador",
    period: "2026",
    category: "Juego",
    summary:
      "Adaptacion multijugador de Snake con mecanicas competitivas, control de jugadores y logica de tablero para partidas compartidas.",
    technologies: ["JavaScript", "Game Logic", "Multijugador", "Canvas", "Frontend"],
    accent: "#27745f",
    initials: "SM",
    status: "En proceso de desarrollo",
    url: "",
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
  "Sensores",
  "Analisis de datos",
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
        ? `<a class="button project-link ready" href="${project.url}" target="_blank" rel="noreferrer">Abrir proyecto</a>`
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
            <li><strong>Periodo</strong><span>${project.period}</span></li>
            <li><strong>Area</strong><span>${project.category}</span></li>
          </ul>
          <div class="tag-list" aria-label="Tecnologias de ${project.name}">
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
  ].sort((a, b) => a.localeCompare(b, "es"));
  techCloud.innerHTML = techs.map((tech) => `<span class="tech-chip">${tech}</span>`).join("");
}

renderProjects();
renderTechCloud();
