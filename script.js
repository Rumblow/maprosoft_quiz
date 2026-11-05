// BANCO DE PREGUNTAS EXTRAÍDO DE MOPROSOFT QUEST
const questionsBank = [
  {
    process: "Nivel 1: ¿Qué es MoProSoft?",
    question: "¿Bajo qué Norma Mexicana fue oficializado el modelo MoProSoft y en qué año se publicó en el DOF?",
    options: { A: "NMX-I-059-NYCE-2005, publicada el 15 de agosto de 2005.", B: "ISO/IEC 29110, publicada en el año 2002.", C: "NMX-I-15504-NYCE-2016, publicada el 10 de octubre de 2010." },
    correct: "A",
    explanation: "MoProSoft se oficializó como Norma Mexicana bajo la nomenclatura NMX-I-059-NYCE-2005 el 15 de agosto de 2005."
  },
  {
    process: "Nivel 1: ¿Qué es MoProSoft?",
    question: "¿Quién lideró el equipo creador de MoProSoft en la Facultad de Ciencias de la UNAM?",
    options: { A: "Ing. Ramírez con la AMCIS.", B: "Hanna Oktaba y su equipo de trabajo.", C: "El comité evaluador de NYCE y CMMI." },
    correct: "B",
    explanation: "MoProSoft fue creado por Hanna Oktaba y su equipo en la UNAM, impulsado por PROSOFT."
  },
  {
    process: "Nivel 2: Historia y Contexto",
    question: "¿Cuál fue la principal razón de contexto para crear MoProSoft a través del programa PROSOFT?",
    options: { A: "Sustituir metodologías ágiles como Scrum o XP.", B: "Modelos como CMMI resultaban muy costosos y complejos para PyMEs.", C: "Obligar a las grandes corporaciones a cambiar sus estándares." },
    correct: "B",
    explanation: "El problema principal era que modelos internacionales como CMMI eran inviables y costosos para empresas de pocas personas."
  },
  {
    process: "Nivel 4: Estructura del Modelo",
    question: "¿Cómo se dividen las 3 categorías jerárquicas de procesos en la estructura de MoProSoft?",
    options: { A: "Planificación, Ejecución y Monitoreo.", B: "Alta Dirección, Gerencia y Operación.", C: "Requerimientos, Desarrollo y Pruebas." },
    correct: "B",
    explanation: "MoProSoft organiza sus 9 procesos en Alta Dirección (estrategia), Gerencia (recursos) y Operación (productos)."
  },
  {
    process: "Nivel 5: Procesos (Alta Dirección)",
    question: "¿Cuál es el único proceso perteneciente a la categoría de Alta Dirección y de qué se encarga?",
    options: { A: "Gestión de Procesos (GPR): Mantiene los activos.", B: "Gestión de Negocio (GN): Define visión, estrategia y vigila el negocio.", C: "Administración de Proyectos (APE): Dirige los proyectos." },
    correct: "B",
    explanation: "El proceso GN (Gestión de Negocio) pertenece a Alta Dirección y define la razón de ser, estrategia y portafolio."
  },
  {
    process: "Nivel 5: Subprocesos de Gerencia",
    question: "¿Cuáles son los 3 subprocesos que integran el proceso de Gestión de Recursos (GRE)?",
    options: { A: "APE, DMS y GPY.", B: "RHAT (Recursos Humanos), BSI (Bienes e Infraestructura) y CO (Conocimiento de la Organización).", C: "GPR, GNE y EVAL." },
    correct: "B",
    explanation: "GRE se subdivide en RHAT, BSI y CO dentro del nivel de Gerencia."
  },
  {
    process: "Nivel 5: Procesos de Operación",
    question: "¿Cuáles son los dos procesos de la categoría de Operación dentro de MoProSoft?",
    options: { A: "GPY y GPR.", B: "APE (Administración de Proyectos Específicos) y DMS (Desarrollo y Mantenimiento de Software).", C: "RHAT y BSI." },
    correct: "B",
    explanation: "La Operación se compone de APE (planear/cerrar proyectos) y DMS (construcción del software)."
  },
  {
    process: "Nivel 7: Ciclo de DMS",
    question: "¿Cuál es la secuencia correcta de las 6 actividades dentro del ciclo del proceso DMS?",
    options: { A: "Requerimientos, Diseño, Pruebas, Inicio, Construcción y Cierre.", B: "Inicio, Requerimientos, Análisis y diseño, Construcción, Integración y pruebas, Cierre.", C: "Planeación, Codificación, Auditoría, Despliegue, Mantenimiento y Evaluación." },
    correct: "B",
    explanation: "El ciclo DMS sigue 6 fases ordenadas desde Inicio hasta Cierre."
  },
  {
    process: "Nivel 8: Roles clave",
    question: "En empresas muy pequeñas con pocos empleados, ¿cómo gestiona MoProSoft la asignación de roles?",
    options: { A: "Se debe contratar a un profesional distinto para cada rol.", B: "Una sola persona puede asumir y cumplir varios roles.", C: "Se omiten los roles de Gerencia." },
    correct: "B",
    explanation: "MoProSoft es flexible para PyMEs, permitiendo que una misma persona asuma múltiples roles."
  },
  {
    process: "Nivel 9: Niveles de Capacidad",
    question: "¿En qué estándar internacional se basan los 6 niveles de capacidad (0 a 5) de MoProSoft?",
    options: { A: "PMBOK 7ma Edición.", B: "ISO/IEC 15504.", C: "SWEBOK v3." },
    correct: "B",
    explanation: "Los niveles de capacidad de MoProSoft están estrictamente basados en ISO/IEC 15504."
  },
  {
    process: "Nivel 9: Niveles de Capacidad",
    question: "Si un proceso se realiza con un proceso definido y adaptado formalmente desde el estándar de la empresa, ¿en qué nivel está?",
    options: { A: "Nivel 1 (Realizado).", B: "Nivel 3 (Establecido).", C: "Nivel 5 (En optimización)." },
    correct: "B",
    explanation: "El Nivel 3 (Establecido) implica adaptar formalmente el estándar de la organización."
  },
  {
    process: "Nivel 10: EvalProSoft",
    question: "¿Qué es EvalProSoft y con qué organismo de certificación se verifica el cumplimiento en México?",
    options: { A: "Un software de programación creado por la UNAM.", B: "El método oficial de evaluación de procesos de MoProSoft, verificado con entes como NYCE.", C: "Un examen presencial de la Secretaría de Economía." },
    correct: "B",
    explanation: "EvalProSoft es el método de evaluación (basado en ISO 15504) verificado con organismos como NYCE."
  },
  {
    process: "Nivel 11: Relación con otros modelos",
    question: "¿Qué relación guarda MoProSoft con la norma internacional ISO/IEC 29110 para Pequeñas Entidades?",
    options: { A: "Son modelos competidores e incompatibles.", B: "Las investigaciones de MoProSoft alimentaron COMPETISOFT e influyeron en la ISO/IEC 29110.", C: "MoProSoft se copió de la ISO/IEC 29110." },
    correct: "B",
    explanation: "MoProSoft alimentó a COMPETISOFT e influyó en la creación de la norma internacional ISO/IEC 29110."
  },
  {
    process: "Nivel 6: Anatomía de un proceso",
    question: "Dentro de la estructura fija con la que se documenta cada proceso en MoProSoft, ¿qué elemento define los entregables y su estado?",
    options: { A: "Prácticas y flujos de trabajo.", B: "Entradas, salidas y productos.", C: "Guías de ajuste." },
    correct: "B",
    explanation: "La anatomía documenta entradas, salidas y productos con sus respectivos estados."
  },
  {
    process: "Nivel 12: Retos de Implementación",
    question: "De acuerdo con el modelo MoProSoft, ¿cuál de las siguientes opciones representa un RETO común durante la adopción?",
    options: { A: "Trazabilidad y menos retrabajo.", B: "Crear una cultura de documentación, tiempo de capacitación y apoyo constante de la dirección.", C: "Acceso inmediato a nuevos mercados sin auditoría." },
    correct: "B",
    explanation: "Los principales retos son la resistencia a documentar, el tiempo de capacitación y asegurar el compromiso directivo."
  }
];

// DIÁLOGOS NARRATIVOS PREVIOS
const introDialogues = [
  "Bienvenido a Process Enterprise. Tome asiento. Mi nombre es Ing. Ramírez, Auditor Senior de Calidad de Software.",
  "Estamos buscando contratar un Líder de Procesos para coordinar y certificar nuestras unidades de desarrollo.",
  "Para este puesto no basta con saber programar: necesitamos que domine a fondo la norma mexicana MoProSoft (NMX-I-059-NYCE-2005).",
  "Le realizaré una evaluación técnica sobre las 3 categorías del modelo, los 9 procesos, el ciclo DMS y los niveles de capacidad.",
  "Para ser contratado requerirá al menos un 70% de precisión. Las preguntas aparecerán de forma aleatoria. ¿Está listo?"
];

let introStep = 0;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// MEZCLAR PREGUNTAS (ALEATORIZACIÓN)
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// MANEJO DE LA INTRODUCCIÓN NARRATIVA
function showIntroStep() {
  document.getElementById("intro-dialogue-text").innerText = introDialogues[introStep];
  if (introStep === introDialogues.length - 1) {
    document.getElementById("intro-btn").innerText = "Comenzar Evaluación ➔";
  }
}

function nextIntroStep() {
  introStep++;
  if (introStep < introDialogues.length) {
    showIntroStep();
  } else {
    // Transición del contexto al cuestionario
    document.getElementById("intro-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    document.getElementById("progress-container").classList.remove("hidden");
    initQuiz();
  }
}

// MANEJO DEL CUESTIONARIO
function initQuiz() {
  currentQuestions = shuffleArray([...questionsBank]);
  currentIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById("process-tag").innerText = q.process;
  document.getElementById("question-text").innerText = q.question;
  document.getElementById("optA").innerText = "A) " + q.options.A;
  document.getElementById("optB").innerText = "B) " + q.options.B;
  document.getElementById("optC").innerText = "C) " + q.options.C;
  
  document.getElementById("progress-text").innerText = `Pregunta ${currentIndex + 1} de ${currentQuestions.length}`;
  document.getElementById("score-text").innerText = `Aciertos: ${score}`;
  document.getElementById("feedback-box").classList.add("hidden");
  
  // Habilitar botones de opción
  const buttons = document.querySelectorAll(".opt-btn");
  buttons.forEach(btn => btn.disabled = false);

  setMood("neutral", "[NEUTRAL]");
}

function setMood(moodClass, text) {
  const avatar = document.getElementById("avatar");
  avatar.className = `avatar ${moodClass}`;
  document.getElementById("mood-label").innerText = text;

  const imageByMood = {
    neutral: "Ramirez_neutral.png",
    happy: "Ramirez_happy.png",
    disappointed: "Ramirez_dissapointed.png"
  };
  avatar.src = imageByMood[moodClass];
}

function selectOption(selected) {
  const q = currentQuestions[currentIndex];
  const feedbackBox = document.getElementById("feedback-box");
  feedbackBox.classList.remove("hidden");

  // Deshabilitar botones para evitar múltiples clics
  const buttons = document.querySelectorAll(".opt-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === q.correct) {
    score++;
    setMood("happy", "[APROBADO]");
  } else {
    setMood("disappointed", "[DESAPROBADO]");
  }
  
  document.getElementById("explanation-text").innerText = q.explanation;
  document.getElementById("score-text").innerText = `Aciertos: ${score}`;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showEndScreen();
  }
}

function showEndScreen() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("end-screen").classList.remove("hidden");
  
  const pct = (score / currentQuestions.length) * 100;
  document.getElementById("final-results").innerText = `Obtuviste ${score} de ${currentQuestions.length} respuestas correctas (${pct.toFixed(1)}% de precisión).`;
  
  const badge = document.getElementById("status-badge");
  if (pct >= 70) {
    badge.className = "badge success";
    badge.innerText = "¡CONTRATADO! Demuestras una excelente alineación con la norma NMX-I-059-NYCE.";
    setMood("happy", "[CONTRATADO]");
  } else {
    badge.className = "badge error";
    badge.innerText = "RECHAZADO. Te sugerimos repasar el catálogo de procesos de MoProSoft e intentarlo de nuevo.";
    setMood("disappointed", "[RECHAZADO]");
  }
}

function restartQuiz() {
  introStep = 0;
  document.getElementById("end-screen").classList.add("hidden");
  document.getElementById("intro-screen").classList.remove("hidden");
  document.getElementById("progress-container").classList.add("hidden");
  document.getElementById("intro-btn").innerText = "Continuar ➔";
  setMood("neutral", "[NEUTRAL]");
  showIntroStep();
}

// INICIALIZACIÓN
window.onload = function() {
  showIntroStep();
};