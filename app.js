// Starlett Olivas Exam & Interview Prep Suite Logic

// 1. DATASETS
const examQuestions = [
  {
    question: "Under 42 CFR Part 2, what is required before a substance use disorder (SUD) counselor can disclose client records to an employer?",
    options: [
      "A verbal request from the client",
      "A general HIPAA release form signed by the client",
      "A specific written consent form detailing the recipient, purpose, and expiration date",
      "A subpoena signed by an attorney"
    ],
    answer: 2,
    explanation: "42 CFR Part 2 requires a specific written consent form naming the recipient, purpose, and expiration date. General HIPAA releases or attorney subpoenas are insufficient."
  },
  {
    question: "A client states: 'I know my drinking is causing issues at home, but it's the only way I can deal with stress.' Which stage of change in the Transtheoretical Model is this client demonstrating?",
    options: [
      "Precontemplation",
      "Contemplation",
      "Preparation",
      "Action"
    ],
    answer: 1,
    explanation: "Contemplation is characterized by ambivalence—recognizing that a problem exists while simultaneously experiencing conflicting feelings about changing."
  },
  {
    question: "Abrupt cessation of heavy alcohol use can lead to life-threatening seizures and Delirium Tremens (DTs) primarily due to severe rebound hyperactivity of which neurotransmitter?",
    options: [
      "Dopamine",
      "Serotonin",
      "Glutamate",
      "Endorphins"
    ],
    answer: 2,
    explanation: "Alcohol chronic use suppresses Glutamate (excitatory) and potentiates GABA (inhibitory). Abrupt cessation causes uninhibited Glutamate surge, risking seizures and DTs."
  },
  {
    question: "According to DSM-5-TR diagnostic criteria for Substance Use Disorders, meeting how many criteria out of 11 qualifies for a 'Moderate' severity rating?",
    options: [
      "1 criterion",
      "2 to 3 criteria",
      "4 to 5 criteria",
      "6 or more criteria"
    ],
    answer: 2,
    explanation: "DSM-5-TR classifies SUD severity as Mild (2-3 criteria), Moderate (4-5 criteria), and Severe (6+ criteria)."
  },
  {
    question: "What concept in Marlatt & Gordon's cognitive-behavioral relapse model describes the intense guilt and perceived loss of control following an initial slip/lapse?",
    options: [
      "Abstinence Violation Effect (AVE)",
      "Anhedonia",
      "Decisional Balance",
      "Cognitive Reframing"
    ],
    answer: 0,
    explanation: "The Abstinence Violation Effect (AVE) describes the psychological reaction to an initial slip, where guilt/shame can drive a minor lapse into a full-blown relapse."
  }
];

const oshaQuestions = [
  {
    question: "In OSHA General Industry standards (29 CFR 1910.28), at what height above a lower level is fall protection required for walking-working surfaces?",
    options: [
      "2 feet",
      "4 feet",
      "6 feet",
      "10 feet"
    ],
    answer: 1,
    explanation: "Under OSHA General Industry standards, fall protection is required when workers are exposed to falls of 4 feet or more. (In Construction, it is 6 feet)."
  },
  {
    question: "Who is legally authorized to remove a Lockout/Tagout (LOTO) device applied to a piece of machinery during maintenance?",
    options: [
      "Any coworker on the shift",
      "The safety manager",
      "Only the authorized employee who applied the lock/tag",
      "The shift supervisor"
    ],
    answer: 2,
    explanation: "Under 29 CFR 1910.147, each lockout/tagout device shall be removed from each energy isolating device by the employee who applied the device."
  },
  {
    question: "According to OSHA's Hazard Communication Standard (HazCom), what signal word indicates a MORE severe hazard on a chemical Safety Data Sheet (SDS)?",
    options: [
      "WARNING",
      "DANGER",
      "CAUTION",
      "NOTICE"
    ],
    answer: 1,
    explanation: "Under GHS/HazCom labeling, 'DANGER' is used for more severe hazard categories, while 'WARNING' is used for less severe hazards."
  },
  {
    question: "What level of the Hierarchy of Controls is considered the LEAST effective method of protecting workers from hazards?",
    options: [
      "Engineering Controls",
      "Elimination",
      "Personal Protective Equipment (PPE)",
      "Administrative Controls"
    ],
    answer: 2,
    explanation: "PPE is the last line of defense and least effective control method because it does not eliminate or isolate the hazard itself; it relies on worker compliance and proper gear."
  },
  {
    question: "Under the OSHA General Duty Clause (Section 5(a)(1)), what is an employer's primary responsibility?",
    options: [
      "To provide health insurance to all employees",
      "To furnish a workplace free from recognized hazards causing or likely to cause death or serious physical harm",
      "To guarantee 40 hours of work per week",
      "To inspect employee vehicles before entry"
    ],
    answer: 1,
    explanation: "Section 5(a)(1) requires employers to furnish to each worker a place of employment free from recognized hazards causing or likely to cause death or serious physical harm."
  }
];

const interviewScenarios = [
  {
    category: "local47",
    question: "Local 47 Riverside Scenario: A union member calls the Riverside Dispatch Hall agitated because they were not dispatched for a job call they believed they were next in line for. How do you handle this call?",
    sample: "1) Maintain a calm, respectful tone and actively listen without interrupting. 2) Validate their frustration and explain the exact dispatch rules/book order transparently. 3) Cross-reference dispatch logs to verify book status. 4) If an error occurred, follow official correction protocol; if not, clearly explain book order and offer next available options."
  },
  {
    category: "local47",
    question: "Logistics & Punctuality: At Local 47, dispatch and record-keeping require high accuracy and strict deadlines. How does your experience at UPS prepare you for this volume?",
    sample: "Highlight your 3 years at UPS managing high-volume, time-sensitive delivery logistics under strict deadlines. Emphasize zero-error documentation, audit-ready logs, and 100% punctuality."
  },
  {
    category: "caregiving",
    question: "De-escalation & Patient Advocacy: Describe a situation as a caregiver at Visiting Angels where a client became agitated or uncooperative. How did you de-escalate?",
    sample: "Use STAR method: Describe the client's condition (Situation), your duty to maintain safety (Task), your active listening, calm posture, and non-confrontational communication (Action), and the successful calming of the client (Result)."
  },
  {
    category: "counseling",
    question: "Ethics & Confidentiality: If a client's relative calls asking about their treatment progress, how do you respond while upholding 42 CFR Part 2 and HIPAA?",
    sample: "Explain that without a specific, signed 42 CFR Part 2 consent form on file naming that relative, you can neither confirm nor deny the individual's presence or treatment status, maintaining strict professional boundaries."
  }
];

const flashcardsData = [
  {
    category: "OSHA 10 Safety",
    front: "What is the trigger height for fall protection in General Industry under OSHA?",
    back: "4 Feet above lower levels (29 CFR 1910.28). In Construction it is 6 feet."
  },
  {
    category: "OSHA 10 Safety",
    front: "What are the 5 levels of the Hierarchy of Controls from most to least effective?",
    back: "1. Elimination 2. Substitution 3. Engineering Controls 4. Administrative Controls 5. PPE (Personal Protective Equipment)."
  },
  {
    category: "Ethics & Law",
    front: "What is the key difference between HIPAA and 42 CFR Part 2?",
    back: "42 CFR Part 2 specifically protects Substance Use Disorder (SUD) records and requires a specific written consent naming the recipient and purpose. HIPAA allows general TPO disclosures."
  },
  {
    category: "Pharmacology",
    front: "What is the primary brain reward pathway activated by addictive substances?",
    back: "The Mesolimbic Dopamine Pathway (VTA → Nucleus Accumbens → Prefrontal Cortex)."
  },
  {
    category: "MI Techniques",
    front: "What does the OARS acronym stand for in Motivational Interviewing?",
    back: "O = Open-ended questions, A = Affirmations, R = Reflective listening, S = Summaries."
  }
];

// 2. STATE VARIABLES
let currentExamIdx = 0;
let score = 0;
let currentOshaIdx = 0;
let oshaScore = 0;
let currentInterviewIdx = 0;
let currentFlashIdx = 0;

// 3. INITIALIZATION & TAB SWITCHING
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  loadQuestion();
  loadOshaQuestion();
  loadInterviewScenario();
  loadFlashcard();
  setupEventListeners();
});

function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });
}

// 4. CADC EXAM SIMULATOR LOGIC
function loadQuestion() {
  const q = examQuestions[currentExamIdx];
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('question-progress').textContent = `Question ${currentExamIdx + 1} of ${examQuestions.length}`;
  
  const optionsGrid = document.getElementById('options-container');
  optionsGrid.innerHTML = '';
  document.getElementById('explanation-box').classList.add('hidden');

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
    btn.addEventListener('click', () => selectOption(idx, btn));
    optionsGrid.appendChild(btn);
  });
}

function selectOption(selectedIdx, btnElement) {
  const q = examQuestions[currentExamIdx];
  const buttons = document.querySelectorAll('#options-container .option-btn');
  buttons.forEach(b => b.style.pointerEvents = 'none');

  if (selectedIdx === q.answer) {
    btnElement.classList.add('correct');
    score++;
  } else {
    btnElement.classList.add('incorrect');
    buttons[q.answer].classList.add('correct');
  }

  updateScoreDisplay();
  
  const expBox = document.getElementById('explanation-box');
  document.getElementById('explanation-text').textContent = q.explanation;
  expBox.classList.remove('hidden');
}

function updateScoreDisplay() {
  const pct = Math.round((score / (currentExamIdx + 1)) * 100);
  document.getElementById('score-display').textContent = `Score: ${score}/${currentExamIdx + 1} (${pct}%)`;
}

function nextQuestion() {
  currentExamIdx++;
  if (currentExamIdx < examQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-container').classList.add('hidden');
  const results = document.getElementById('results-screen');
  results.classList.remove('hidden');
  
  const finalPct = Math.round((score / examQuestions.length) * 100);
  document.getElementById('final-score').textContent = `${finalPct}%`;
  
  let msg = finalPct >= 80 ? "Outstanding performance! You are fully prepared for the CADC exam." : "Good effort! Review the study modules in your portfolio to strengthen weaker areas.";
  document.getElementById('feedback-message').textContent = msg;
}

function restartExam() {
  currentExamIdx = 0;
  score = 0;
  document.getElementById('results-screen').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  updateScoreDisplay();
  loadQuestion();
}

// 5. OSHA 10 EXAM SIMULATOR LOGIC
function loadOshaQuestion() {
  const q = oshaQuestions[currentOshaIdx];
  document.getElementById('osha-question-text').textContent = q.question;
  document.getElementById('osha-question-progress').textContent = `Question ${currentOshaIdx + 1} of ${oshaQuestions.length}`;
  
  const optionsGrid = document.getElementById('osha-options-container');
  optionsGrid.innerHTML = '';
  document.getElementById('osha-explanation-box').classList.add('hidden');

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
    btn.addEventListener('click', () => selectOshaOption(idx, btn));
    optionsGrid.appendChild(btn);
  });
}

function selectOshaOption(selectedIdx, btnElement) {
  const q = oshaQuestions[currentOshaIdx];
  const buttons = document.querySelectorAll('#osha-options-container .option-btn');
  buttons.forEach(b => b.style.pointerEvents = 'none');

  if (selectedIdx === q.answer) {
    btnElement.classList.add('correct');
    oshaScore++;
  } else {
    btnElement.classList.add('incorrect');
    buttons[q.answer].classList.add('correct');
  }

  updateOshaScoreDisplay();
  
  const expBox = document.getElementById('osha-explanation-box');
  document.getElementById('osha-explanation-text').textContent = q.explanation;
  expBox.classList.remove('hidden');
}

function updateOshaScoreDisplay() {
  const pct = Math.round((oshaScore / (currentOshaIdx + 1)) * 100);
  document.getElementById('osha-score-display').textContent = `Score: ${oshaScore}/${currentOshaIdx + 1} (${pct}%)`;
}

function nextOshaQuestion() {
  currentOshaIdx++;
  if (currentOshaIdx < oshaQuestions.length) {
    loadOshaQuestion();
  } else {
    showOshaResults();
  }
}

function showOshaResults() {
  document.getElementById('osha-quiz-container').classList.add('hidden');
  const results = document.getElementById('osha-results-screen');
  results.classList.remove('hidden');
  
  const finalPct = Math.round((oshaScore / oshaQuestions.length) * 100);
  document.getElementById('osha-final-score').textContent = `${finalPct}%`;
  
  let msg = finalPct >= 80 ? "Excellence verified! You have mastered OSHA 10 Safety Standards." : "Review the OSHA 10 Study Guide module to perfect your safety scores.";
  document.getElementById('osha-feedback-message').textContent = msg;
}

function restartOshaExam() {
  currentOshaIdx = 0;
  oshaScore = 0;
  document.getElementById('osha-results-screen').classList.add('hidden');
  document.getElementById('osha-quiz-container').classList.remove('hidden');
  updateOshaScoreDisplay();
  loadOshaQuestion();
}

// 6. INTERVIEW SIMULATOR LOGIC
function loadInterviewScenario() {
  const item = interviewScenarios[currentInterviewIdx];
  document.getElementById('interview-category').textContent = item.category.toUpperCase();
  document.getElementById('interview-question').textContent = item.question;
  document.getElementById('user-response').value = '';
  document.getElementById('sample-answer-box').classList.add('hidden');
  document.getElementById('sample-answer-text').textContent = item.sample;
}

function nextInterview() {
  currentInterviewIdx = (currentInterviewIdx + 1) % interviewScenarios.length;
  loadInterviewScenario();
}

// 7. FLASHCARDS LOGIC
function loadFlashcard() {
  const card = flashcardsData[currentFlashIdx];
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('flash-category').textContent = card.category;
  document.getElementById('flash-front-text').textContent = card.front;
  document.getElementById('flash-back-text').textContent = card.back;
  document.getElementById('flash-counter').textContent = `${currentFlashIdx + 1} / ${flashcardsData.length}`;
}

// 8. EVENT LISTENERS
function setupEventListeners() {
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('restart-btn').addEventListener('click', restartExam);

  document.getElementById('osha-next-btn').addEventListener('click', nextOshaQuestion);
  document.getElementById('osha-restart-btn').addEventListener('click', restartOshaExam);
  
  document.getElementById('sample-ans-btn').addEventListener('click', () => {
    document.getElementById('sample-answer-box').classList.toggle('hidden');
  });
  
  document.getElementById('next-interview-btn').addEventListener('click', nextInterview);

  const flashcardEl = document.getElementById('flashcard');
  flashcardEl.addEventListener('click', () => {
    flashcardEl.classList.toggle('flipped');
  });

  document.getElementById('prev-flash').addEventListener('click', () => {
    if (currentFlashIdx > 0) {
      currentFlashIdx--;
      loadFlashcard();
    }
  });

  document.getElementById('next-flash').addEventListener('click', () => {
    if (currentFlashIdx < flashcardsData.length - 1) {
      currentFlashIdx++;
      loadFlashcard();
    }
  });

  const toggleRefBtn = document.getElementById('toggle-raw-ref-btn');
  if (toggleRefBtn) {
    toggleRefBtn.addEventListener('click', () => {
      document.getElementById('raw-ref-box').classList.toggle('hidden');
    });
  }
}
