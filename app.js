/**
 * أذكاري زادي وعتادي - المحرك البرمجي والتفاعلي ونظام التقارير ومتابعة أولياء الأمور
 * برنامج الملهم التربوي (أ. محمد الدقن) بالتعاون مع إتقان التربية
 */

// 1. Data Model: 16 Weeks Plan (8 Two-Week Modules)
const adhkarCurriculum = [
  {
    id: 1,
    weeksLabel: "الأسبوع الأول - الثاني",
    cycleName: "الأسبوع ١ - ٢",
    title: "الرضا بالله ورسوله ودينه",
    text: "رَضِيتُ بِاللهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    targetCount: 3,
    virtue: "من قالها حين يصبح وحين يمسي ثلاث مرات، كان حقاً على الله تعالى أن يرضيه يوم القيامة (رواه أبو داود والترمذي). يذوق بها المؤمن حلاوة الإيمان وينال رضوان الله التام وجنة النعيم.",
    instructions: "يقوم مقدم الإذاعة بقراءة الذكر بتمهل، مبيناً للطلاب أن الرضا بالله يملأ القلب سعادة وسكينة، ثم يردده الطلاب ثلاثاً.",
    category: "التوحيد والرضا"
  },
  {
    id: 2,
    weeksLabel: "الأسبوع الثالث - الرابع",
    cycleName: "الأسبوع ٣ - ٤",
    title: "التوكل والكفاية التامة",
    text: "حَسْبِيَ اللهُ لا إِلَهَ إِلا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ العَرْشِ العَظِيمِ",
    targetCount: 7,
    virtue: "من قالها إذا أصبح وإذا أمسى سبع مرات كفاه الله ما أهمه من أمر الدنيا والآخرة (رواه أبو داود). كفاية تامة من المخاوف والهموم والغموم، وتفويض الأمر لرب العرش العظيم.",
    instructions: "يوضح مقدم الإذاعة أن «حسبي الله» تعني الله يكفيني ويحميني من كل خوف، ثم يردد الطلاب سبع مرات بهمة ويقين.",
    category: "التوكل وتفريج الهموم"
  },
  {
    id: 3,
    weeksLabel: "الأسبوع الخامس - السادس",
    cycleName: "الأسبوع ٥ - ٦",
    title: "العفو والعافية والحفظ من الجهات الست",
    text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
    targetCount: 1,
    virtue: "دعاء الحفظ والستر التام الشامل؛ لم يكن النبي ﷺ يدع هؤلاء الدعوات حين يمسي وحين يصبح قط (رواه أبو داود). يحفظ الطالب من حوادث الغفلة ومكائد الشيطان من كل جهة.",
    instructions: "يبين مقدم الإذاعة أهمية سؤال العافية في الصحة والدراسة والأهل، ويحث الطلاب على حفظ الدعاء وترديده بخشوع.",
    category: "الحفظ والعافية الشاملة"
  },
  {
    id: 4,
    weeksLabel: "الأسبوع السابع - الثامن",
    cycleName: "الأسبوع ٧ - ٨",
    title: "الاستعاذة من شر النفس والشيطان",
    text: "اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، عَالِمَ الغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لا إِلَهَ إِلا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَشَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
    targetCount: 1,
    virtue: "علمه النبي ﷺ لأبي بكر الصديق رضي الله عنه ليقوله صباحاً ومساءً وعند النوم. يعصم القلب من وساوس الشيطان، ويزجر النفس عن إيذاء المسلمين أو اقتراف الذنوب.",
    instructions: "يؤكد مقدم الإذاعة على خلق سلامة الصدر ومحبة الزملاء وعدم جلب الأذى لأي زميل، استجابةً لمعاني هذا الدعاء العظيم.",
    category: "عصمة النفس والسلامة"
  },
  {
    id: 5,
    weeksLabel: "الأسبوع التاسع - العاشر",
    cycleName: "الأسبوع ٩ - ١٠",
    title: "خواتيم سورة البقرة (الآيتان الكافيتان)",
    text: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ المَصِيرُ ۝ لا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلا تُحَمِّلْنَا مَا لا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلانَا فَانْصُرْنَا عَلَى القَوْمِ الكَافِرِينَ [البقرة: ٢٨٥ - ٢٨٦]",
    targetCount: 1,
    virtue: "قال رسول الله ﷺ: «من قرأ بالآيتين من آخر سورة البقرة في ليلة كفتاه» (متفق عليه). أي كفتاه من شر الإنس والجن والآفات، وقيل كفتاه عن قيام الليل بحفظ الله ورعايته.",
    instructions: "يتلو مقدم الإذاعة الآيتين بتجويد وتأنٍ، ويستمع الطلاب ثم يرددونها معه بخشوع واستحضار لأعظم آيات الدعاء والتسليم.",
    category: "كفاية القرآن والسكينة"
  },
  {
    id: 6,
    weeksLabel: "الأسبوع الحادي عشر - الثاني عشر",
    cycleName: "الأسبوع ١١ - ١٢",
    title: "سيد الاستغفار وأعظمه",
    text: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ",
    targetCount: 1,
    virtue: "سيد الاستغفار؛ قال النبي ﷺ: «من قالها موقناً بها حين يمسي فمات من ليلته دخل الجنة، وكذلك إذا أصبح» (صحيح البخاري). حوت التوحيد الخالص، والاعتراف بالنعم والاعتذار من التقصير.",
    instructions: "يوضح مقدم الإذاعة معنى «أبوء لك» أي أعترف لك بنعمك وأعترف بذنبي، ليخرج الطالب من قلبه الكبر ويحل محله التواضع لله.",
    category: "سيد الاستغفار والجنة"
  },
  {
    id: 7,
    weeksLabel: "الأسبوع الثالث عشر - الرابع عشر",
    cycleName: "الأسبوع ١٣ - ١٤",
    title: "ترسيخ وتعميق سيد الاستغفار",
    text: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ",
    targetCount: 1,
    virtue: "مرحلة التثبيت والتمكين لسيد الاستغفار، ليصبح ورد الطالب الدائم في الصباح والمساء، فيحفظه في صدره كاسمه ويغرس في نفسه حسن الصلة بالله والتوبة المستمرة.",
    instructions: "مراجعة حفظ الطلاب لسيد الاستغفار واختيار نماذج من الطلاب لقراءته أمام زملائهم لتعزيز الثقة والإتقان.",
    category: "تثبيت وترسيخ الاستغفار"
  },
  {
    id: 8,
    weeksLabel: "الأسبوع الخامس عشر - السادس عشر",
    cycleName: "الأسبوع ١٥ - ١٦",
    title: "شهادة التوحيد والعتق من النار",
    text: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلائِكَتِكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لا إِلَهَ إِلا أَنْتَ وَحْدَكَ لا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    targetCount: 4,
    virtue: "من قالها حين يصبح أو يمسي أعتق الله رُبُعَهُ من النار، فإن قالها مرتين أعتق الله نصفه، فإن قالها ثلاثاً أعتق ثلاثة أرباعه، فإن قالها أربعاً أعتقه الله من النار (رواه أبو داود).",
    instructions: "يحث مقدم الإذاعة الطلاب على استشعار شهادة الملائكة وحملة العرش للتوحيد، وترديد الذكر أربع مرات متتالية بنية العتق من النار.",
    category: "العتق والشهادة بالتوحيد"
  }
];

// 2. Rotating Inspirations
const quotesLibrary = [
  "«مثل الذي يذكر ربه والذي لا يذكر ربه، مثل الحي والميت» - متفق عليه",
  "«ألا أنبئكم بخير أعمالكم، وأزكاها عند مليككم، وأرفعها في درجاتكم؟ ذكر الله» - رواه الترمذي",
  "«من لزم الاستغفار جعل الله له من كل هم فرجاً، ومن كل ضيق مخرجاً» - رواه أبو داود",
  "«كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم»",
  "«لا يزال لسانك رطباً من ذكر الله» - وصية نبوية شريفة",
  "«سبق المفردون، قالوا: وما المفردون يا رسول الله؟ قال: الذاكرون الله كثيراً والذاكرات» - صحيح مسلم"
];

// Seed Students Data (for immediate impressive reporting)
const initialSeedStudents = [
  {
    id: "STU-1001",
    name: "محمد أحمد إبراهيم",
    grade: "الصف الخامس الابتدائي",
    streak: 8,
    totalCount: 48,
    lastCheckinDate: new Date().toDateString(),
    dailyHistory: generateRecentDates(8),
    parentConfirmed: true
  },
  {
    id: "STU-1002",
    name: "عمر خالد المنصور",
    grade: "الصف الأول متوسط",
    streak: 14,
    totalCount: 92,
    lastCheckinDate: new Date().toDateString(),
    dailyHistory: generateRecentDates(14),
    parentConfirmed: true
  },
  {
    id: "STU-1003",
    name: "سارة عبدالله الزهراني",
    grade: "الصف الرابع الابتدائي",
    streak: 6,
    totalCount: 35,
    lastCheckinDate: new Date(Date.now() - 86400000).toDateString(),
    dailyHistory: generateRecentDates(6, 1),
    parentConfirmed: false
  },
  {
    id: "STU-1004",
    name: "فهد سلطان الحربي",
    grade: "الصف السادس الابتدائي",
    streak: 3,
    totalCount: 18,
    lastCheckinDate: new Date().toDateString(),
    dailyHistory: generateRecentDates(3),
    parentConfirmed: true
  },
  {
    id: "STU-1005",
    name: "ريان ماجد الدوسري",
    grade: "الصف الثاني متوسط",
    streak: 21,
    totalCount: 140,
    lastCheckinDate: new Date().toDateString(),
    dailyHistory: generateRecentDates(21),
    parentConfirmed: true
  }
];

function generateRecentDates(daysBack, offset = 0) {
  const dates = [];
  const now = new Date();
  for (let i = offset; i < daysBack + offset; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    dates.push(d.toDateString());
  }
  return dates;
}

// Storage Keys
const STORAGE_PREFIX = "azkari_itqan_v2_";
const KEY_STUDENTS = STORAGE_PREFIX + "students";
const KEY_ACTIVE_STUDENT_ID = STORAGE_PREFIX + "active_student_id";
const KEY_THEME = STORAGE_PREFIX + "theme";

// State Management
let studentsList = [];
let currentActiveStudent = null;
let currentCycleIndex = 0;
let tasbeehCounter = 0;
let speechInstance = null;
let isAudioPlaying = false;
let currentFontSizeLevel = 0;

// DOM Elements
const weeksSlider = document.getElementById("weeksSlider");
const activeWeekLabel = document.getElementById("activeWeekLabel");
const activeTargetCount = document.getElementById("activeTargetCount");
const dailyStatusBadge = document.getElementById("dailyStatusBadge");
const activeDhikrText = document.getElementById("activeDhikrText");
const activeVirtueText = document.getElementById("activeVirtueText");
const tasbeehClickBtn = document.getElementById("tasbeehClickBtn");
const currentTasbeehCount = document.getElementById("currentTasbeehCount");
const maxTasbeehCount = document.getElementById("maxTasbeehCount");
const tasbeehProgCircle = document.getElementById("tasbeehProgCircle");
const resetTasbeehBtn = document.getElementById("resetTasbeehBtn");
const playAudioBtn = document.getElementById("playAudioBtn");
const audioBtnText = document.getElementById("audioBtnText");
const copyDhikrBtn = document.getElementById("copyDhikrBtn");
const shareDhikrBtn = document.getElementById("shareDhikrBtn");
const increaseFontBtn = document.getElementById("increaseFontBtn");
const decreaseFontBtn = document.getElementById("decreaseFontBtn");
const tickerQuote = document.getElementById("tickerQuote");
const currentDateHijri = document.getElementById("currentDateHijri");
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Header Student Bar
const activeStudentNameHeader = document.getElementById("activeStudentNameHeader");
const activeStudentGradeHeader = document.getElementById("activeStudentGradeHeader");
const openParentShareBtn = document.getElementById("openParentShareBtn");
const openStudentReportBtn = document.getElementById("openStudentReportBtn");
const openSwitchStudentBtn = document.getElementById("openSwitchStudentBtn");

// Parent Welcome Banner
const parentWelcomeBanner = document.getElementById("parentWelcomeBanner");
const pwbStudentName = document.getElementById("pwbStudentName");
const parentConfirmRecitationBtn = document.getElementById("parentConfirmRecitationBtn");

// Student Challenge Elements
const badgeBannerText = document.getElementById("badgeBannerText");
const streakDaysCount = document.getElementById("streakDaysCount");
const totalRecitationsCount = document.getElementById("totalRecitationsCount");
const studentRankName = document.getElementById("studentRankName");
const weeklyCompletionRate = document.getElementById("weeklyCompletionRate");
const studentCheckinBtn = document.getElementById("studentCheckinBtn");
const checkinHint = document.getElementById("checkinHint");
const sendWhatsAppReportBtn = document.getElementById("sendWhatsAppReportBtn");

// Curriculum Grid & Search
const curriculumCardsContainer = document.getElementById("curriculumCardsContainer");
const searchDhikrInput = document.getElementById("searchDhikrInput");

// Extra Adhkar toggle
const toggleExtraAdhkarBtn = document.getElementById("toggleExtraAdhkarBtn");
const extraAdhkarList = document.getElementById("extraAdhkarList");

// Broadcast Modal Elements
const broadcastModal = document.getElementById("broadcastModal");
const openBroadcastModalBtn = document.getElementById("openBroadcastModalBtn");
const closeBroadcastModalBtn = document.getElementById("closeBroadcastModalBtn");
const modalWeekDisplay = document.getElementById("modalWeekDisplay");
const bcDhikrText = document.getElementById("bcDhikrText");
const bcVirtueText = document.getElementById("bcVirtueText");
const bcCountNum = document.getElementById("bcCountNum");
const bcTargetNum = document.getElementById("bcTargetNum");
const bcIncrementBtn = document.getElementById("bcIncrementBtn");
const bcVoiceBtn = document.getElementById("bcVoiceBtn");
const bcFullscreenBtn = document.getElementById("bcFullscreenBtn");

// Print Elements
const openPrintModalBtn = document.getElementById("openPrintModalBtn");
const printWeekName = document.getElementById("printWeekName");
const printTargetName = document.getElementById("printTargetName");
const printDhikrContent = document.getElementById("printDhikrContent");
const printVirtueContent = document.getElementById("printVirtueContent");
const printStudentPlaceholder = document.getElementById("printStudentPlaceholder");

// Student Report Modal
const studentReportModal = document.getElementById("studentReportModal");
const closeStudentReportBtn = document.getElementById("closeStudentReportBtn");
const printReportDocBtn = document.getElementById("printReportDocBtn");
const shareReportViaWhatsAppBtn = document.getElementById("shareReportViaWhatsAppBtn");
const repStudentName = document.getElementById("repStudentName");
const repStudentGrade = document.getElementById("repStudentGrade");
const repDateNow = document.getElementById("repDateNow");
const repStudentRank = document.getElementById("repStudentRank");
const repDaysStreak = document.getElementById("repDaysStreak");
const repTotalCount = document.getElementById("repTotalCount");
const repAdherencePercent = document.getElementById("repAdherencePercent");
const repWeeksMastered = document.getElementById("repWeeksMastered");
const repDaysHeatmap = document.getElementById("repDaysHeatmap");

// Parent Share Modal
const parentShareModal = document.getElementById("parentShareModal");
const closeParentShareBtn = document.getElementById("closeParentShareBtn");
const parentCustomLinkInput = document.getElementById("parentCustomLinkInput");
const copyParentCustomLinkBtn = document.getElementById("copyParentCustomLinkBtn");
const sendDirectWhatsAppBtn = document.getElementById("sendDirectWhatsAppBtn");

// Student Manager Modal
const studentManagerModal = document.getElementById("studentManagerModal");
const closeStudentManagerBtn = document.getElementById("closeStudentManagerBtn");
const newStudentForm = document.getElementById("newStudentForm");
const newStudentNameInput = document.getElementById("newStudentNameInput");
const newStudentGradeSelect = document.getElementById("newStudentGradeSelect");
const studentsListGrid = document.getElementById("studentsListGrid");

// Admin Dashboard Modal
const adminDashboardModal = document.getElementById("adminDashboardModal");
const openAdminDashboardBtn = document.getElementById("openAdminDashboardBtn");
const closeAdminDashboardBtn = document.getElementById("closeAdminDashboardBtn");
const adminTotalStudents = document.getElementById("adminTotalStudents");
const adminActiveToday = document.getElementById("adminActiveToday");
const adminTotalSchoolRecitations = document.getElementById("adminTotalSchoolRecitations");
const adminAverageAdherence = document.getElementById("adminAverageAdherence");
const adminSearchStudentInput = document.getElementById("adminSearchStudentInput");
const adminFilterGradeSelect = document.getElementById("adminFilterGradeSelect");
const exportExcelBtn = document.getElementById("exportExcelBtn");
const adminStudentsTableBody = document.getElementById("adminStudentsTableBody");

// Footer Links
const fParentLink = document.getElementById("fParentLink");
const fReportLink = document.getElementById("fReportLink");
const fAdminLink = document.getElementById("fAdminLink");

// Toast
const toastNotification = document.getElementById("toastNotification");
const toastMsg = document.getElementById("toastMsg");

/* ==========================================================
   INITIALIZATION
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initDatesAndQuotes();
  loadStudentsData();
  handleUrlParameters();
  calculateAutoWeek();
  renderWeekTabs();
  renderActiveDhikr();
  renderCurriculumGrid();
  updateStudentUI();
  setupEventListeners();
});

// Load & Seed Students
function loadStudentsData() {
  const saved = localStorage.getItem(KEY_STUDENTS);
  if (saved) {
    try {
      studentsList = JSON.parse(saved);
    } catch (e) {
      studentsList = initialSeedStudents;
    }
  } else {
    studentsList = initialSeedStudents;
    saveStudentsData();
  }

  // Active student
  const activeId = localStorage.getItem(KEY_ACTIVE_STUDENT_ID);
  if (activeId) {
    currentActiveStudent = studentsList.find(s => s.id === activeId);
  }
  if (!currentActiveStudent && studentsList.length > 0) {
    currentActiveStudent = studentsList[0];
  }
}

function saveStudentsData() {
  localStorage.setItem(KEY_STUDENTS, JSON.stringify(studentsList));
  if (currentActiveStudent) {
    localStorage.setItem(KEY_ACTIVE_STUDENT_ID, currentActiveStudent.id);
  }
}

// Check URL query parameters for parent link or student selection
function handleUrlParameters() {
  const params = new URLSearchParams(window.location.search);
  const paramStudentId = params.get("studentId");
  const paramName = params.get("student") || params.get("name");
  const paramGrade = params.get("grade");
  const isParentMode = params.get("mode") === "parent" || params.has("parent");

  if (paramStudentId) {
    const found = studentsList.find(s => s.id === paramStudentId);
    if (found) {
      currentActiveStudent = found;
      saveStudentsData();
    }
  } else if (paramName) {
    let found = studentsList.find(s => s.name.trim() === paramName.trim());
    if (!found) {
      // Create new student from URL parameters
      found = {
        id: "STU-" + Math.floor(1000 + Math.random() * 9000),
        name: decodeURIComponent(paramName),
        grade: paramGrade ? decodeURIComponent(paramGrade) : "الصف الخامس الابتدائي",
        streak: 1,
        totalCount: 3,
        lastCheckinDate: new Date().toDateString(),
        dailyHistory: [new Date().toDateString()],
        parentConfirmed: false
      };
      studentsList.push(found);
    }
    currentActiveStudent = found;
    saveStudentsData();
  }

  // If in Parent Mode, show the parent welcome banner
  if (isParentMode && currentActiveStudent) {
    parentWelcomeBanner.style.display = "block";
    pwbStudentName.textContent = currentActiveStudent.name;
    // Scroll smoothly to active dhikr
    setTimeout(() => {
      parentWelcomeBanner.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  }
}

// Calculate Current Academic Week
function calculateAutoWeek() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now - startOfYear) / 86400000;
  const currentWeekOfYear = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  const autoCycle = Math.floor((currentWeekOfYear % 16) / 2);
  currentCycleIndex = (autoCycle >= 0 && autoCycle < adhkarCurriculum.length) ? autoCycle : 0;
}

// Hijri & Gregorian Dates and Rotating Quotes
function initDatesAndQuotes() {
  try {
    const today = new Date();
    const gregorianFormatter = new Intl.DateTimeFormat('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    currentDateHijri.textContent = gregorianFormatter.format(today);
  } catch (e) {
    currentDateHijri.textContent = new Date().toLocaleDateString('ar-EG');
  }

  let qIndex = 0;
  setInterval(() => {
    qIndex = (qIndex + 1) % quotesLibrary.length;
    tickerQuote.style.opacity = '0';
    setTimeout(() => {
      tickerQuote.textContent = quotesLibrary[qIndex];
      tickerQuote.style.opacity = '1';
    }, 400);
  }, 18000);
}

// Render Week Tabs
function renderWeekTabs() {
  weeksSlider.innerHTML = "";
  adhkarCurriculum.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.className = `week-tab-btn ${index === currentCycleIndex ? "active" : ""}`;
    btn.innerHTML = `
      <span class="w-num">${item.cycleName}</span>
      <span class="w-title">${item.title}</span>
    `;
    btn.addEventListener("click", () => {
      selectCycle(index);
    });
    weeksSlider.appendChild(btn);
  });
}

function selectCycle(index) {
  currentCycleIndex = index;
  tasbeehCounter = 0;
  renderWeekTabs();
  renderActiveDhikr();
  updateCurriculumHighlight();
  stopAudio();
}

// Render Active Dhikr Card
function renderActiveDhikr() {
  const currentItem = adhkarCurriculum[currentCycleIndex];
  
  activeWeekLabel.textContent = `${currentItem.weeksLabel} • ${currentItem.title}`;
  activeTargetCount.textContent = `${currentItem.targetCount} ${currentItem.targetCount === 1 ? 'مرة واحدة' : 'مرات'}`;
  activeDhikrText.textContent = currentItem.text;
  activeVirtueText.textContent = currentItem.virtue;

  maxTasbeehCount.textContent = `/${currentItem.targetCount}`;
  updateTasbeehUI();

  // Print Card Data
  printWeekName.textContent = currentItem.weeksLabel;
  printTargetName.textContent = `الترديد اليومي: ${currentItem.targetCount} مرات`;
  printDhikrContent.textContent = currentItem.text;
  printVirtueContent.textContent = currentItem.virtue;
  if (currentActiveStudent) {
    printStudentPlaceholder.textContent = `${currentActiveStudent.name} (${currentActiveStudent.grade})`;
  }
  
  // Modal Data
  modalWeekDisplay.textContent = currentItem.weeksLabel;
  bcDhikrText.textContent = currentItem.text;
  bcVirtueText.textContent = currentItem.virtue;
  bcTargetNum.textContent = currentItem.targetCount;
  bcCountNum.textContent = tasbeehCounter;
}

// Tasbeeh Logic
function updateTasbeehUI() {
  const currentItem = adhkarCurriculum[currentCycleIndex];
  currentTasbeehCount.textContent = tasbeehCounter;
  bcCountNum.textContent = tasbeehCounter;

  const circumference = 264;
  const progressRatio = Math.min(tasbeehCounter / currentItem.targetCount, 1);
  const offset = circumference - (circumference * progressRatio);
  tasbeehProgCircle.style.strokeDashoffset = offset;

  if (tasbeehCounter >= currentItem.targetCount) {
    dailyStatusBadge.className = "status-badge completed";
    dailyStatusBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> تم الترديد اليوم بنجاح!`;
  } else {
    dailyStatusBadge.className = "status-badge";
    dailyStatusBadge.innerHTML = `<i class="fa-solid fa-circle"></i> متبقي ${currentItem.targetCount - tasbeehCounter} مرات`;
  }
}

function incrementTasbeeh() {
  const currentItem = adhkarCurriculum[currentCycleIndex];
  tasbeehCounter++;
  
  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(40);
  }

  if (currentActiveStudent) {
    currentActiveStudent.totalCount = (currentActiveStudent.totalCount || 0) + 1;
    saveStudentsData();
    updateStudentUI();
  }

  updateTasbeehUI();

  if (tasbeehCounter === currentItem.targetCount) {
    celebrateCompletion();
  }
}

function celebrateCompletion() {
  showToast("مبارك! أتممت عدد الترديد المطلوب لهذا الذكر المبارك 🎉");
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#f59e0b', '#064e3b', '#7e22ce', '#10b981']
    });
  }
}

function resetTasbeeh() {
  tasbeehCounter = 0;
  updateTasbeehUI();
  showToast("تم إعادة ضبط العداد");
}

// Audio Player
function togglePlayAudio() {
  if (isAudioPlaying) {
    stopAudio();
    return;
  }

  if (!('speechSynthesis' in window)) {
    showToast("عذراً، متصفحك لا يدعم القراءة الصوتية التلقائية.");
    return;
  }

  window.speechSynthesis.cancel();
  const currentItem = adhkarCurriculum[currentCycleIndex];
  speechInstance = new SpeechSynthesisUtterance(currentItem.text);
  speechInstance.lang = 'ar-SA';
  speechInstance.rate = 0.85;
  speechInstance.pitch = 1.0;

  speechInstance.onstart = () => {
    isAudioPlaying = true;
    playAudioBtn.classList.add("playing");
    audioBtnText.textContent = "جاري الاستماع... (إيقاف)";
    bcVoiceBtn.innerHTML = `<i class="fa-solid fa-stop"></i> إيقاف النطق`;
  };

  speechInstance.onend = stopAudio;
  speechInstance.onerror = stopAudio;

  window.speechSynthesis.speak(speechInstance);
}

function stopAudio() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isAudioPlaying = false;
  playAudioBtn.classList.remove("playing");
  audioBtnText.textContent = "استمع للذكر";
  bcVoiceBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> نطق الذكر`;
}

// ==========================================================
// STUDENT PROFILE & TRACKER LOGIC
// ==========================================================
function updateStudentUI() {
  if (!currentActiveStudent) return;

  activeStudentNameHeader.textContent = currentActiveStudent.name;
  activeStudentGradeHeader.textContent = `(${currentActiveStudent.grade})`;
  badgeBannerText.textContent = `ملف الطالب: ${currentActiveStudent.name} • ${getRankName(currentActiveStudent.streak)}`;
  
  streakDaysCount.textContent = currentActiveStudent.streak || 0;
  totalRecitationsCount.textContent = currentActiveStudent.totalCount || 0;
  studentRankName.textContent = getRankName(currentActiveStudent.streak);

  // Weekly Completion (last 7 days)
  const past7Days = generateRecentDates(7);
  const checkedInPast7 = past7Days.filter(d => (currentActiveStudent.dailyHistory || []).includes(d)).length;
  const rate = Math.round((checkedInPast7 / 7) * 100);
  weeklyCompletionRate.textContent = `${rate}%`;

  // Daily Checkin Button Status
  const todayStr = new Date().toDateString();
  const alreadyCheckedToday = currentActiveStudent.lastCheckinDate === todayStr;

  if (alreadyCheckedToday) {
    studentCheckinBtn.classList.add("checked-today");
    studentCheckinBtn.innerHTML = `<i class="fa-solid fa-award"></i> <span>تم إنجاز وردك لليوم بنجاح!</span>`;
    studentCheckinBtn.disabled = true;
    checkinHint.textContent = currentActiveStudent.parentConfirmed 
      ? "⭐ صادق ولي أمرك على قراءتك اليوم في البيت! جزاكم الله خيراً." 
      : "تقبل الله طاعتك! يمكنك الآن إرسال الرابط لولي أمرك للمصادقة.";
  } else {
    studentCheckinBtn.classList.remove("checked-today");
    studentCheckinBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>أتممت قراءة وردي اليوم!</span>`;
    studentCheckinBtn.disabled = false;
    checkinHint.textContent = "اضغط لتسجيل قراءتك اليوم في سجلك الدائم";
  }

  // Generate Custom Parent Link
  generateParentShareLink();
}

function getRankName(streak) {
  if (streak >= 30) return "من الذاكرين كثيراً 🌟";
  if (streak >= 14) return "قدوة مباركة 🏅";
  if (streak >= 7) return "حافظ العهد 🌿";
  if (streak >= 3) return "طالب متميز 💫";
  return "طالب مبادر 🌱";
}

function handleStudentCheckin() {
  if (!currentActiveStudent) return;
  const todayStr = new Date().toDateString();

  if (currentActiveStudent.lastCheckinDate === todayStr) {
    showToast("لقد سجلت وردك اليوم بالفعل! بارك الله فيك");
    return;
  }

  // Calculate Streak
  let streak = currentActiveStudent.streak || 0;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (currentActiveStudent.lastCheckinDate === yesterday.toDateString()) {
    streak++;
  } else {
    streak = 1;
  }

  currentActiveStudent.streak = streak;
  currentActiveStudent.lastCheckinDate = todayStr;
  if (!currentActiveStudent.dailyHistory) currentActiveStudent.dailyHistory = [];
  if (!currentActiveStudent.dailyHistory.includes(todayStr)) {
    currentActiveStudent.dailyHistory.push(todayStr);
  }

  saveStudentsData();
  updateStudentUI();
  celebrateCompletion();
  showToast("أحسنت صنعاً! تم توثيق قراءتك اليوم بنجاح ورفع رصيدك الإيماني");
}

function handleParentConfirmation() {
  if (!currentActiveStudent) return;
  currentActiveStudent.parentConfirmed = true;
  saveStudentsData();
  updateStudentUI();
  celebrateCompletion();
  showToast("شكراً لكم يا ولي أمر الطالب! تم تأكيد ومصادقة الورد بنجاح.");
}

// Generate Parent Link (works for online hosting and local files)
function generateParentShareLink() {
  if (!currentActiveStudent) return;
  let base = window.location.href.split("?")[0];
  const parentUrl = `${base}?studentId=${encodeURIComponent(currentActiveStudent.id)}&mode=parent`;
  parentCustomLinkInput.value = parentUrl;
}

// WhatsApp Parent Share
function shareParentLinkWhatsApp() {
  if (!currentActiveStudent) return;
  const link = parentCustomLinkInput.value;
  const currentItem = adhkarCurriculum[currentCycleIndex];

  const msg = encodeURIComponent(
    `السلام عليكم ورحمة الله وبركاته 🌿\n` +
    `ولي أمر الطالب المبارك: *${currentActiveStudent.name}*\n\n` +
    `ضمن برنامج *«أذكاري زادي وعتادي»* بإشراف المعلم المربي: *أ. محمد الدقن* (الملهم التربوي) بالتعاون مع *مدارس إتقان التربية*.\n\n` +
    `✨ ذكر الأسبوع المعتمد:\n«${currentItem.text}»\n\n` +
    `📲 يسعدنا متابعتكم لورد ابنكم ومصادقة قراءته اليومية مباشرة عبر هذا الرابط المخصص:\n${link}\n\n` +
    `جزاكم الله خيراً وبارك في ذريتكم وجعلهم قرة عين لكم.`
  );

  window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
}

// WhatsApp Report Share
function shareStudentReportWhatsApp() {
  if (!currentActiveStudent) return;
  const link = parentCustomLinkInput.value;
  const streak = currentActiveStudent.streak || 0;
  const total = currentActiveStudent.totalCount || 0;
  const rank = getRankName(streak);

  const msg = encodeURIComponent(
    `📊 *تقرير أداء الطالب في برنامج «أذكاري زادي وعتادي»* 📊\n\n` +
    `👤 الطالب: *${currentActiveStudent.name}*\n` +
    `🏫 الصف: *${currentActiveStudent.grade}*\n` +
    `⭐ المرتبة الإيمانية: *${rank}*\n` +
    `🔥 أيام الالتزام المتتالية: *${streak} أيام*\n` +
    `🔁 إجمالي مرات الترديد: *${total} مرة*\n\n` +
    `🌟 إشراف الملهم التربوي: *أ. محمد الدقن* | مدارس *إتقان التربية*\n\n` +
    `🔗 لمتابعة لوحة الطالب والشهادة التقديرية:\n${link}`
  );

  window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
}

// ==========================================================
// STUDENT REPORT MODAL & HEATMAP
// ==========================================================
function openStudentReport() {
  if (!currentActiveStudent) return;

  repStudentName.textContent = currentActiveStudent.name;
  repStudentGrade.textContent = currentActiveStudent.grade;
  repDateNow.textContent = new Date().toLocaleDateString('ar-SA');
  repStudentRank.textContent = getRankName(currentActiveStudent.streak);
  repDaysStreak.textContent = currentActiveStudent.streak || 0;
  repTotalCount.textContent = currentActiveStudent.totalCount || 0;

  // Calculate 30-day adherence
  const past30Days = generateRecentDates(30);
  const checkedCount = past30Days.filter(d => (currentActiveStudent.dailyHistory || []).includes(d)).length;
  const adherenceRate = Math.round((checkedCount / 30) * 100);
  repAdherencePercent.textContent = `${adherenceRate}%`;
  repWeeksMastered.textContent = `${Math.min(Math.ceil((currentActiveStudent.streak || 1) / 2), 8)}/8`;

  // Render 30 Days Heatmap Grid
  repDaysHeatmap.innerHTML = "";
  past30Days.reverse().forEach((dateStr, idx) => {
    const isCompleted = (currentActiveStudent.dailyHistory || []).includes(dateStr);
    const dayBox = document.createElement("div");
    dayBox.className = `heat-day ${isCompleted ? "completed" : ""}`;
    dayBox.title = `${dateStr}: ${isCompleted ? "تم الترديد بنجاح" : "لم يتم التسجيل"}`;
    dayBox.textContent = idx + 1;
    repDaysHeatmap.appendChild(dayBox);
  });

  studentReportModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeStudentReport() {
  studentReportModal.classList.remove("active");
  document.body.style.overflow = "";
}

function printStudentReport() {
  document.body.classList.add("printing-report");
  window.print();
  document.body.classList.remove("printing-report");
}

// ==========================================================
// STUDENT MANAGER MODAL
// ==========================================================
function openStudentManager() {
  renderStudentManagerList();
  studentManagerModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeStudentManager() {
  studentManagerModal.classList.remove("active");
  document.body.style.overflow = "";
}

function renderStudentManagerList() {
  studentsListGrid.innerHTML = "";
  studentsList.forEach(student => {
    const isActive = currentActiveStudent && currentActiveStudent.id === student.id;
    const card = document.createElement("div");
    card.className = `stu-card-item ${isActive ? "active-stu" : ""}`;
    card.innerHTML = `
      <div class="sci-info">
        <strong>${student.name} ${isActive ? "⭐ (النشط حالياً)" : ""}</strong>
        <span>${student.grade} • ${student.streak || 0} أيام • ${student.totalCount || 0} ترديد</span>
      </div>
      <div class="sci-actions">
        ${!isActive ? `<button class="sci-btn-select" onclick="selectActiveStudent('${student.id}')">تفعيل</button>` : ""}
        <button class="sci-btn-del" onclick="deleteStudent('${student.id}')" title="حذف الطالب"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;
    studentsListGrid.appendChild(card);
  });
}

window.selectActiveStudent = function(studentId) {
  const found = studentsList.find(s => s.id === studentId);
  if (found) {
    currentActiveStudent = found;
    saveStudentsData();
    updateStudentUI();
    renderStudentManagerList();
    showToast(`تم تفعيل ملف الطالب: ${found.name}`);
    closeStudentManager();
  }
};

window.deleteStudent = function(studentId) {
  if (studentsList.length <= 1) {
    showToast("لا يمكن حذف الطالب الوحيد في القائمة.");
    return;
  }
  if (!confirm("هل أنت متأكد من حذف هذا الطالب وسجلاته؟")) return;

  studentsList = studentsList.filter(s => s.id !== studentId);
  if (currentActiveStudent.id === studentId) {
    currentActiveStudent = studentsList[0];
  }
  saveStudentsData();
  updateStudentUI();
  renderStudentManagerList();
  showToast("تم حذف الطالب من القائمة بنجاح.");
};

function handleAddStudent(e) {
  e.preventDefault();
  const name = newStudentNameInput.value.trim();
  const grade = newStudentGradeSelect.value;

  if (!name) return;

  const newStudent = {
    id: "STU-" + Math.floor(1000 + Math.random() * 9000),
    name: name,
    grade: grade,
    streak: 0,
    totalCount: 0,
    lastCheckinDate: "",
    dailyHistory: [],
    parentConfirmed: false
  };

  studentsList.unshift(newStudent);
  currentActiveStudent = newStudent;
  saveStudentsData();
  updateStudentUI();

  newStudentNameInput.value = "";
  renderStudentManagerList();
  showToast(`تم إضافة الطالب «${name}» وتفعيله بنجاح!`);
}

// ==========================================================
// ADMIN & SCHOOL REPORTS DASHBOARD
// ==========================================================
function openAdminDashboard() {
  updateAdminKPIs();
  renderAdminTable();
  adminDashboardModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAdminDashboard() {
  adminDashboardModal.classList.remove("active");
  document.body.style.overflow = "";
}

function updateAdminKPIs() {
  const total = studentsList.length;
  adminTotalStudents.textContent = total;

  const todayStr = new Date().toDateString();
  const activeToday = studentsList.filter(s => s.lastCheckinDate === todayStr).length;
  adminActiveToday.textContent = activeToday;

  const totalSchool = studentsList.reduce((acc, curr) => acc + (curr.totalCount || 0), 0);
  adminTotalSchoolRecitations.textContent = totalSchool;

  const avgStreak = total > 0 ? (studentsList.reduce((acc, curr) => acc + (curr.streak || 0), 0) / total) : 0;
  const avgPercent = Math.min(Math.round((avgStreak / 14) * 100), 100);
  adminAverageAdherence.textContent = `${avgPercent}%`;
}

function renderAdminTable() {
  adminStudentsTableBody.innerHTML = "";
  const query = (adminSearchStudentInput.value || "").trim().toLowerCase();
  const gradeFilter = adminFilterGradeSelect.value;
  const todayStr = new Date().toDateString();

  const filtered = studentsList.filter(s => {
    const matchesName = s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query);
    const matchesGrade = gradeFilter === "ALL" || s.grade.includes(gradeFilter);
    return matchesName && matchesGrade;
  });

  if (filtered.length === 0) {
    adminStudentsTableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 2rem; color: var(--text-dim);">
          لا يوجد طلاب مطابقين لمعايير البحث
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach(student => {
    const isDoneToday = student.lastCheckinDate === todayStr;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><code>${student.id}</code></td>
      <td><strong>${student.name}</strong></td>
      <td>${student.grade}</td>
      <td><span class="text-gold font-bold">${student.streak || 0}</span> أيام</td>
      <td>${student.totalCount || 0} مرة</td>
      <td>
        <span class="${isDoneToday ? 'tbl-badge-done' : 'tbl-badge-pending'}">
          ${isDoneToday ? 'أتم الورد اليوم ✓' : 'لم يسجل اليوم'}
        </span>
      </td>
      <td>${getRankName(student.streak)}</td>
      <td>
        <button class="tbl-btn-action" onclick="viewStudentReportAdmin('${student.id}')" title="عرض التقرير">
          <i class="fa-solid fa-file-lines"></i> التقرير
        </button>
        <button class="tbl-btn-action" onclick="selectActiveStudent('${student.id}')" title="تفعيل كطالب نشط">
          <i class="fa-solid fa-arrow-pointer"></i> اختيار
        </button>
      </td>
    `;
    adminStudentsTableBody.appendChild(tr);
  });
}

window.viewStudentReportAdmin = function(studentId) {
  selectActiveStudent(studentId);
  closeAdminDashboard();
  openStudentReport();
};

// Export to Excel / CSV with UTF-8 BOM
function exportStudentsToExcel() {
  const headers = ["كود الطالب", "اسم الطالب", "الصف الدراسي", "أيام الالتزام", "إجمالي الترديد", "حالة اليوم", "تأكيد ولي الأمر", "المرتبة"];
  const todayStr = new Date().toDateString();

  const rows = studentsList.map(s => [
    s.id,
    `"${s.name}"`,
    `"${s.grade}"`,
    s.streak || 0,
    s.totalCount || 0,
    s.lastCheckinDate === todayStr ? "أتم الورد" : "لم يكتمل",
    s.parentConfirmed ? "تم التأكيد" : "بانتظار التأكيد",
    `"${getRankName(s.streak)}"`
  ]);

  let csvContent = "\uFEFF" + headers.join(",") + "\n";
  rows.forEach(row => {
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `تقرير_برنامج_أذكاري_زادي_وعتادي_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("تم تصدير كشف إكسل بنجاح!");
}

// ==========================================================
// CURRICULUM GRID & SEARCH
// ==========================================================
function renderCurriculumGrid(filterQuery = "") {
  curriculumCardsContainer.innerHTML = "";
  const filtered = adhkarCurriculum.filter(item => {
    const q = filterQuery.trim().toLowerCase();
    return item.text.toLowerCase().includes(q) ||
           item.virtue.toLowerCase().includes(q) ||
           item.title.toLowerCase().includes(q) ||
           item.weeksLabel.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    curriculumCardsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 1rem; color: var(--accent-gold);"></i>
        <p>لم يتم العثور على أذكار تطابق بحثك. جرّب كلمات أخرى.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const isCurrent = (item.id - 1) === currentCycleIndex;
    const card = document.createElement("div");
    card.className = `curriculum-card ${isCurrent ? "is-current" : ""}`;
    card.innerHTML = `
      <div>
        <div class="card-top-meta">
          <span class="c-week-badge">${item.weeksLabel}</span>
          <span class="c-repeat"><i class="fa-solid fa-repeat"></i> ${item.targetCount} ${item.targetCount === 1 ? 'مرة' : 'مرات'}</span>
        </div>
        <p class="c-dhikr-snippet">«${item.text}»</p>
        <p class="c-virtue-snippet">${item.virtue}</p>
      </div>
      <button class="c-card-btn" onclick="selectCycle(${item.id - 1}); window.scrollTo({top: document.getElementById('activeDhikrSection').offsetTop - 90, behavior: 'smooth'});">
        <i class="fa-solid fa-hand-pointer"></i>
        <span>عرض هذا الذكر وترديده</span>
      </button>
    `;
    curriculumCardsContainer.appendChild(card);
  });
}

function updateCurriculumHighlight() {
  const cards = curriculumCardsContainer.querySelectorAll(".curriculum-card");
  cards.forEach((card, idx) => {
    if (idx === currentCycleIndex) {
      card.classList.add("is-current");
    } else {
      card.classList.remove("is-current");
    }
  });
}

// Copy & Share
function copyDhikr() {
  const currentItem = adhkarCurriculum[currentCycleIndex];
  const fullContent = `«${currentItem.text}»\n\nفضل الذكر: ${currentItem.virtue}\n\n- من برنامج "أذكاري زادي وعتادي" (الملهم التربوي - أ. محمد الدقن & إتقان التربية)`;
  navigator.clipboard.writeText(fullContent).then(() => {
    showToast("تم نسخ الذكر وفضله بنجاح!");
  }).catch(() => {
    showToast("تعذر النسخ تلقائياً");
  });
}

function shareOnWhatsApp() {
  const currentItem = adhkarCurriculum[currentCycleIndex];
  const msg = encodeURIComponent(
    `🌟 *أذكاري زادي وعتادي* 🌟\n` +
    `📅 *${currentItem.weeksLabel}*\n\n` +
    `«${currentItem.text}»\n\n` +
    `✨ *فضله:* ${currentItem.virtue}\n` +
    `🔁 *الترديد اليومي:* ${currentItem.targetCount} مرات.\n\n` +
    `📚 من برامج *الملهم التربوي* — إشراف: أ. محمد الدقن | مدارس *إتقان التربية*`
  );
  window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
}

// Font Size Scaling
function changeFontSize(delta) {
  currentFontSizeLevel += delta;
  if (currentFontSizeLevel > 3) currentFontSizeLevel = 3;
  if (currentFontSizeLevel < -1) currentFontSizeLevel = -1;

  const baseRem = 2.15;
  const newSize = baseRem + (currentFontSizeLevel * 0.35);
  activeDhikrText.style.fontSize = `${newSize}rem`;
}

// Toast
function showToast(message) {
  toastMsg.textContent = message;
  toastNotification.classList.add("show");
  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 3500);
}

// Theme
function initTheme() {
  const savedTheme = localStorage.getItem(KEY_THEME);
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem(KEY_THEME, isDark ? "dark" : "light");
  themeToggleBtn.innerHTML = isDark ? `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
}

// Broadcast Modal
function openBroadcastModal() {
  renderActiveDhikr();
  broadcastModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBroadcastModal() {
  broadcastModal.classList.remove("active");
  document.body.style.overflow = "";
  stopAudio();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(console.log);
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Tasbeeh
  tasbeehClickBtn.addEventListener("click", incrementTasbeeh);
  resetTasbeehBtn.addEventListener("click", resetTasbeeh);

  // Audio
  playAudioBtn.addEventListener("click", togglePlayAudio);
  bcVoiceBtn.addEventListener("click", togglePlayAudio);

  // Toolbar
  copyDhikrBtn.addEventListener("click", copyDhikr);
  shareDhikrBtn.addEventListener("click", shareOnWhatsApp);
  increaseFontBtn.addEventListener("click", () => changeFontSize(1));
  decreaseFontBtn.addEventListener("click", () => changeFontSize(-1));

  // Student Checkin & Parent Actions
  studentCheckinBtn.addEventListener("click", handleStudentCheckin);
  parentConfirmRecitationBtn.addEventListener("click", handleParentConfirmation);
  sendWhatsAppReportBtn.addEventListener("click", shareStudentReportWhatsApp);

  // Parent Share Modal
  openParentShareBtn.addEventListener("click", () => {
    generateParentShareLink();
    parentShareModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
  closeParentShareBtn.addEventListener("click", () => {
    parentShareModal.classList.remove("active");
    document.body.style.overflow = "";
  });
  copyParentCustomLinkBtn.addEventListener("click", () => {
    parentCustomLinkInput.select();
    navigator.clipboard.writeText(parentCustomLinkInput.value).then(() => {
      showToast("تم نسخ رابط ولي الأمر بنجاح!");
    });
  });
  sendDirectWhatsAppBtn.addEventListener("click", shareParentLinkWhatsApp);

  // Student Report Modal
  openStudentReportBtn.addEventListener("click", openStudentReport);
  closeStudentReportBtn.addEventListener("click", closeStudentReport);
  printReportDocBtn.addEventListener("click", printStudentReport);
  shareReportViaWhatsAppBtn.addEventListener("click", shareStudentReportWhatsApp);

  // Student Switcher Modal
  openSwitchStudentBtn.addEventListener("click", openStudentManager);
  closeStudentManagerBtn.addEventListener("click", closeStudentManager);
  newStudentForm.addEventListener("submit", handleAddStudent);

  // Admin Dashboard Modal
  openAdminDashboardBtn.addEventListener("click", openAdminDashboard);
  closeAdminDashboardBtn.addEventListener("click", closeAdminDashboard);
  exportExcelBtn.addEventListener("click", exportStudentsToExcel);
  adminSearchStudentInput.addEventListener("input", renderAdminTable);
  adminFilterGradeSelect.addEventListener("change", renderAdminTable);

  // Search
  searchDhikrInput.addEventListener("input", (e) => {
    renderCurriculumGrid(e.target.value);
  });

  // Extra Library Toggle
  toggleExtraAdhkarBtn.addEventListener("click", () => {
    const isHidden = extraAdhkarList.style.display === "none";
    extraAdhkarList.style.display = isHidden ? "grid" : "none";
    toggleExtraAdhkarBtn.innerHTML = isHidden 
      ? `<i class="fa-solid fa-chevron-up"></i> <span>إخفاء الباقة</span>`
      : `<i class="fa-solid fa-chevron-down"></i> <span>عرض الباقة المصاحبة</span>`;
  });

  // Theme
  themeToggleBtn.addEventListener("click", toggleTheme);

  // Broadcast Modal
  openBroadcastModalBtn.addEventListener("click", openBroadcastModal);
  closeBroadcastModalBtn.addEventListener("click", closeBroadcastModal);
  bcIncrementBtn.addEventListener("click", incrementTasbeeh);
  bcFullscreenBtn.addEventListener("click", toggleFullscreen);

  // Print Weekly Dhikr Card
  openPrintModalBtn.addEventListener("click", () => window.print());

  // Footer Links
  fParentLink.addEventListener("click", (e) => {
    e.preventDefault();
    openParentShareBtn.click();
  });
  fReportLink.addEventListener("click", (e) => {
    e.preventDefault();
    openStudentReport();
  });
  fAdminLink.addEventListener("click", (e) => {
    e.preventDefault();
    openAdminDashboard();
  });

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && e.target === document.body) {
      e.preventDefault();
      incrementTasbeeh();
    }
    if (e.key === "Escape") {
      closeBroadcastModal();
      closeStudentReport();
      closeStudentManager();
      closeAdminDashboard();
      parentShareModal.classList.remove("active");
    }
  });
}
