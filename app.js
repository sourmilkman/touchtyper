const STORAGE_KEY = 'touchtyper-progress-v1';

const LESSONS = [
  { title: 'Finding F & J', keys: 'fj', finger: 'Index fingers', target: [90, 5], instruction: 'Place your index fingers on the raised bumps. Keep the other fingers gently curved over the home row.', exercise: 'fff jjj fjf jfj ff jj fj jf fff jjj fjfj jfjf' },
  { title: 'Add D & K', keys: 'dk', finger: 'Middle fingers', target: [90, 7], instruction: 'Keep F and J anchored. Reach one key outward with each middle finger, then return home.', exercise: 'ddd kkk dkd kdk fd jk df kj fdf jkj ddd fff jjj kkk dkdk' },
  { title: 'Add S & L', keys: 'sl', finger: 'Ring fingers', target: [90, 8], instruction: 'Your ring fingers rest on S and L. Move only the finger you need; let the others stay quiet.', exercise: 'sss lll sls lsl asdf jkl; sad lad fall flask salsa dads lads' },
  { title: 'Complete the home row', keys: 'a;', finger: 'Little fingers', target: [90, 9], instruction: 'Little fingers cover A and semicolon. Your eight fingers now have a home.', exercise: 'aaa ;;; a;a ;a; asdf jkl; all fall dad; ask; salad; flask; sad lads' },
  { title: 'Home-row words', keys: 'asdfjkl;', finger: 'Home row', target: [92, 10], instruction: 'Keep every finger over its home key. Read ahead by one or two letters and type evenly.', exercise: 'a sad lad asks a lass; all fall; dads ask; flask salad; fall as a fad; add a dash' },
  { title: 'Reach E & I', keys: 'ei', finger: 'Middle fingers', target: [92, 11], instruction: 'Reach upward with each middle finger: left to E, right to I. Return immediately to D and K.', exercise: 'eee iii eie iei did kid lie idea side field; a skilled kid is idle; a field is ideal' },
  { title: 'Reach R & U', keys: 'ru', finger: 'Index fingers', target: [92, 12], instruction: 'Your index fingers travel upward to R and U. Keep wrists still and make a small reach.', exercise: 'rrr uuu rur uru rude rule sure fire; a rider is sure; red rules; a full jar is rare' },
  { title: 'Reach W & O', keys: 'wo', finger: 'Ring fingers', target: [92, 13], instruction: 'Ring fingers reach to W and O. Relax after each stroke instead of holding tension.', exercise: 'www ooo wow owo wood wool word door; a slow road; good food; old doors; flowers grow' },
  { title: 'Reach Q & P', keys: 'qp', finger: 'Little fingers', target: [92, 14], instruction: 'Little fingers reach diagonally to Q and P. Accuracy matters more than force or speed.', exercise: 'qqq ppp pqp qpq proper paper equal; a purple square; quiet people; equip a pupil' },
  { title: 'Complete the top row', keys: 'ty', finger: 'Index fingers', target: [93, 16], instruction: 'Index fingers also cover T and Y. Use the nearer finger and always return to F or J.', exercise: 'ttt yyy tyt yty type reply today; try to write quietly; your first full row is ready' },
  { title: 'Top-row flow', keys: 'qwertyuiop', finger: 'Top row', target: [93, 18], instruction: 'Blend the top and home rows. Keep a steady rhythm and avoid rushing familiar words.', exercise: 'write with quiet purpose; steady fingers type freely; quality grows through slow repetition' },
  { title: 'Reach V & M', keys: 'vm', finger: 'Index fingers', target: [94, 19], instruction: 'Reach down to V with the left index and M with the right index. Let the fingers spring home.', exercise: 'vvv mmm vmv mvm move vivid movie; warm summer; time moves; every moment matters' },
  { title: 'Reach C & comma', keys: 'c,', finger: 'Middle fingers', target: [94, 20], instruction: 'Middle fingers reach down to C and comma. Keep the movement compact and controlled.', exercise: 'ccc ,,, c,c ,c, comic, music, calm; come, write, create; accuracy, rhythm, control' },
  { title: 'Reach X & full stop', keys: 'x.', finger: 'Ring fingers', target: [94, 21], instruction: 'Ring fingers reach down to X and full stop. Finish sentences without looking down.', exercise: 'xxx ... x.x .x. exact. extra. relax. Mix wax. Type six. Exercise makes control.' },
  { title: 'Reach Z & slash', keys: 'z/', finger: 'Little fingers', target: [94, 22], instruction: 'Little fingers make the longest lower-row reach. Stay relaxed and return home deliberately.', exercise: 'zzz /// z/z /z/ lazy jazz quiz. size/shape. zoom in/out. a dozen lazy zebras.' },
  { title: 'Complete the alphabet', keys: 'bn', finger: 'Index fingers', target: [95, 24], instruction: 'Use the left index for B and right index for N. You can now type every letter.', exercise: 'bbb nnn bnb nbn bright brown; nimble hands; begin again; the quick brown fox jumps over the lazy dog.' },
  { title: 'Shift & punctuation', keys: 'shift', finger: 'Opposite little finger', target: [95, 26], instruction: 'Hold Shift with the hand opposite the letter. Release it as soon as the capital or symbol is typed.', exercise: 'Tom types: Calm, Clear, Accurate. Is 95% the goal? Yes! Build speed—never chase it.' },
  { title: 'Fluency challenge', keys: 'all', finger: 'All fingers', target: [96, 30], instruction: 'Look ahead, breathe, and let each finger do its own work. This is control, not a race.', exercise: 'The quick brown fox jumps over the lazy dog. Patient practice builds reliable speed, one accurate keystroke at a time.' }
];

const GAMES = [
  { id: 'key-dash', title: 'Key Dash', unlock: 1, symbol: 'FJ', description: 'A fast stream of familiar characters. Build reaction and clean returns to home.' },
  { id: 'word-sprint', title: 'Word Sprint', unlock: 6, symbol: 'GO', description: 'Type useful words against a sixty-second pace clock without sacrificing accuracy.' },
  { id: 'quote-run', title: 'Quote Run', unlock: 12, symbol: '“', description: 'Longer, natural phrases that train rhythm, punctuation, and reading ahead.' }
];

const FINGERS = {
  q: 'Left little finger', a: 'Left little finger', z: 'Left little finger',
  w: 'Left ring finger', s: 'Left ring finger', x: 'Left ring finger',
  e: 'Left middle finger', d: 'Left middle finger', c: 'Left middle finger',
  r: 'Left index finger', f: 'Left index finger', v: 'Left index finger', t: 'Left index finger', g: 'Left index finger', b: 'Left index finger',
  y: 'Right index finger', h: 'Right index finger', n: 'Right index finger', u: 'Right index finger', j: 'Right index finger', m: 'Right index finger',
  i: 'Right middle finger', k: 'Right middle finger', ',': 'Right middle finger',
  o: 'Right ring finger', l: 'Right ring finger', '.': 'Right ring finger',
  p: 'Right little finger', ';': 'Right little finger', '/': 'Right little finger',
  '1': 'Left little finger', '2': 'Left ring finger', '3': 'Left middle finger', '4': 'Left index finger', '5': 'Left index finger',
  '6': 'Right index finger', '7': 'Right index finger', '8': 'Right middle finger', '9': 'Right ring finger', '0': 'Right little finger',
  ' ': 'Right thumb', ':': 'Right little finger', '?': 'Right little finger', '!': 'Left little finger', '%': 'Left index finger', '—': 'Right little finger'
};

const KEY_ROWS = [
  ['1','2','3','4','5','6','7','8','9','0'],
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l',';'],
  ['z','x','c','v','b','n','m',',','.','/'],
  [' ']
];

const DEFAULT_STATE = {
  version: 1,
  onboarded: false,
  lessons: {},
  sessions: [],
  keyStats: {},
  settings: { sound: false, haptic: true, contrast: false }
};

let state = loadState();
let session = null;
let currentView = 'home';
let timerId = null;
let toastTimer = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || saved.version !== 1) return structuredClone(DEFAULT_STATE);
    return {
      ...structuredClone(DEFAULT_STATE),
      ...saved,
      settings: { ...DEFAULT_STATE.settings, ...(saved.settings || {}) }
    };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function masteredCount() {
  return LESSONS.filter((_, index) => state.lessons[index]?.mastered).length;
}

function unlockedCount() {
  return Math.min(LESSONS.length, masteredCount() + 1);
}

function currentLessonIndex() {
  const index = LESSONS.findIndex((_, i) => !state.lessons[i]?.mastered);
  return index === -1 ? LESSONS.length - 1 : index;
}

function knownKeys() {
  const count = Math.max(1, unlockedCount());
  const keys = LESSONS.slice(0, count).map(l => l.keys).join('').replace(/shift|all/g, '');
  return [...new Set(keys + ' ')];
}

function showView(name) {
  currentView = name;
  $$('.view').forEach(view => view.classList.toggle('active', view.dataset.view === name));
  $$('.bottom-nav button').forEach(button => button.classList.toggle('active', button.dataset.viewLink === name));
  $('.bottom-nav').classList.toggle('is-hidden', name === 'trainer');
  $('.topbar').classList.toggle('is-hidden', name === 'trainer');
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (name !== 'trainer') renderAll();
}

function getTodayMinutes() {
  const today = new Date().toDateString();
  return state.sessions.filter(s => new Date(s.date).toDateString() === today).reduce((sum, s) => sum + s.duration, 0) / 60;
}

function getStreak() {
  const days = [...new Set(state.sessions.map(s => new Date(s.date).toDateString()))]
    .map(d => new Date(d)).sort((a, b) => b - a);
  if (!days.length) return 0;
  const cursor = new Date(); cursor.setHours(0, 0, 0, 0);
  const first = new Date(days[0]); first.setHours(0, 0, 0, 0);
  if ((cursor - first) / 86400000 > 1) return 0;
  if ((cursor - first) / 86400000 === 1) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  for (const day of days) {
    const d = new Date(day); d.setHours(0, 0, 0, 0);
    if (d.getTime() === cursor.getTime()) { streak++; cursor.setDate(cursor.getDate() - 1); }
    else if (d < cursor) break;
  }
  return streak;
}

function overallStats() {
  if (!state.sessions.length) return { best: 0, accuracy: null, minutes: 0 };
  return {
    best: Math.max(...state.sessions.map(s => s.wpm)),
    accuracy: Math.round(state.sessions.reduce((sum, s) => sum + s.accuracy, 0) / state.sessions.length),
    minutes: Math.round(state.sessions.reduce((sum, s) => sum + s.duration, 0) / 60)
  };
}

function renderHome() {
  const stats = overallStats();
  const index = currentLessonIndex();
  const lesson = LESSONS[index];
  const minutes = getTodayMinutes();
  $('#streakBadge b').textContent = getStreak();
  $('#heroLevel').textContent = index + 1;
  $('#heroAccuracy').textContent = stats.accuracy == null ? '—' : `${stats.accuracy}%`;
  $('#heroWpm').textContent = stats.best || '—';
  $('#heroMessage').textContent = masteredCount() === LESSONS.length ? 'You have mastered the course. Keep your rhythm sharp with a fluency run.' : lesson.instruction;
  $('#continueButton').innerHTML = `${state.lessons[index] ? 'Continue' : 'Begin'} lesson ${index + 1} <span aria-hidden="true">→</span>`;
  $('#continueButton').onclick = () => startLesson(index);
  $('#goalMinutes').textContent = `${Math.min(10, Math.floor(minutes))} / 10 min`;
  $('#goalBar').style.width = `${Math.min(100, minutes * 10)}%`;
  $('.progress-track').setAttribute('aria-valuenow', Math.min(10, Math.round(minutes)));
  const preview = LESSONS.slice(index, index + 3);
  $('#nextLessons').innerHTML = preview.map((item, offset) => lessonCard(item, index + offset, true)).join('');
  bindLessonCards();
}

function lessonStatus(index) {
  if (state.lessons[index]?.mastered) return 'complete';
  if (index < unlockedCount()) return 'ready';
  return 'locked';
}

function lessonCard(lesson, index, compact = false) {
  const status = lessonStatus(index);
  const data = state.lessons[index] || {};
  const stars = data.stars || 0;
  const details = compact ? `${lesson.keys === 'all' ? 'All keys' : lesson.keys.toUpperCase()} · ${lesson.finger}` : `${lesson.keys === 'all' ? 'All keys' : lesson.keys.toUpperCase()} · ${lesson.finger}`;
  return `<button class="${compact ? 'preview-card' : 'lesson-card'} ${status}" type="button" data-lesson="${index}" ${status === 'locked' ? 'disabled' : ''}>
    <span class="lesson-number">${status === 'complete' ? '✓' : status === 'locked' ? '⌁' : index + 1}</span>
    <span><b>${lesson.title}</b><small>${details}</small>${compact ? '' : `<span class="target">TARGET ${lesson.target[0]}% · ${lesson.target[1]} WPM</span>`}</span>
    ${compact ? '<span class="card-arrow">›</span>' : `<span class="stars" aria-label="${stars} of 3 stars"><i class="${stars > 0 ? 'earned' : ''}">★</i><i class="${stars > 1 ? 'earned' : ''}">★</i><i class="${stars > 2 ? 'earned' : ''}">★</i></span>`}
  </button>`;
}

function renderLessons() {
  $('#lessonList').innerHTML = LESSONS.map((lesson, i) => lessonCard(lesson, i)).join('');
  bindLessonCards();
}

function bindLessonCards() {
  $$('[data-lesson]').forEach(button => button.onclick = () => startLesson(Number(button.dataset.lesson)));
}

function renderGames() {
  const unlocked = unlockedCount();
  $('#gameList').innerHTML = GAMES.map(game => {
    const locked = unlocked < game.unlock;
    return `<article class="game-card ${locked ? 'locked' : ''}">
      <span class="eyebrow">${locked ? `UNLOCKS AFTER LESSON ${game.unlock - 1}` : 'READY TO PLAY'}</span>
      <h2>${game.title}</h2><p>${game.description}</p>
      ${locked ? '<span class="lock-note">⌁ Keep learning to unlock</span>' : `<button class="small-button" type="button" data-game="${game.id}">Play now →</button>`}
      <span class="game-symbol" aria-hidden="true">${game.symbol}</span>
    </article>`;
  }).join('');
  $$('[data-game]').forEach(button => button.onclick = () => startGame(button.dataset.game));
}

function renderProgress() {
  const stats = overallStats();
  $('#progressWpm').textContent = stats.best;
  $('#progressAccuracy').textContent = stats.accuracy == null ? '—' : `${stats.accuracy}%`;
  $('#progressMinutes').textContent = stats.minutes;
  $('#progressLessons').textContent = masteredCount();
  $('#progressLessonTotal').textContent = `of ${LESSONS.length}`;
  const weak = Object.entries(state.keyStats).filter(([, v]) => v.attempts >= 2)
    .map(([key, v]) => ({ key, accuracy: Math.round(v.correct / v.attempts * 100), attempts: v.attempts }))
    .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts).slice(0, 6);
  $('#weakKeys').innerHTML = weak.length
    ? weak.map(item => `<span class="weak-key"><b>${item.key === ' ' ? '␣' : item.key}</b><small>${item.accuracy}% accurate</small></span>`).join('')
    : '<span class="empty-state">Complete a lesson and your adaptive key practice will appear here.</span>';
  const recent = state.sessions.slice(-6).reverse();
  $('#historyList').innerHTML = recent.length ? recent.map(item => `<div class="history-row">
    <span><b>${item.title}</b><small>${new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} · ${formatTime(item.duration)}</small></span>
    <span class="history-score">${item.wpm} WPM<br>${item.accuracy}%</span></div>`).join('') : '<span class="empty-state">Your completed sessions will appear here.</span>';
}

function renderAll() {
  renderHome(); renderLessons(); renderGames(); renderProgress(); applySettings();
}

function startLesson(index) {
  if (index >= unlockedCount()) return;
  const lesson = LESSONS[index];
  session = createSession({ mode: 'lesson', lessonIndex: index, title: lesson.title, prompt: lesson.exercise, target: lesson.target });
  $('#trainerKicker').textContent = `LESSON ${index + 1} · ${lesson.keys.toUpperCase()}`;
  $('#trainerTitle').textContent = lesson.title;
  $('#instructionText').textContent = lesson.instruction;
  $('#instructionCard').classList.remove('is-hidden');
  $('#typingStage').classList.add('is-hidden');
  resetMetrics();
  showView('trainer');
}

function startGame(id) {
  const game = GAMES.find(g => g.id === id);
  if (!game || unlockedCount() < game.unlock) return;
  const prompt = gamePrompt(id);
  const target = id === 'key-dash' ? [90, 8] : id === 'word-sprint' ? [92, 15] : [94, 20];
  session = createSession({ mode: 'game', gameId: id, title: game.title, prompt, target });
  $('#trainerKicker').textContent = 'TRAINING GAME';
  $('#trainerTitle').textContent = game.title;
  $('#instructionText').textContent = id === 'key-dash' ? 'Type the stream cleanly. Wrong keys do not move you forward.' : 'Find a smooth pace. Read ahead, but keep your eyes off the keyboard.';
  $('#instructionCard').classList.remove('is-hidden');
  $('#typingStage').classList.add('is-hidden');
  resetMetrics();
  showView('trainer');
}

function gamePrompt(id) {
  const keys = knownKeys().filter(k => k !== ' ');
  if (id === 'key-dash') {
    return Array.from({ length: 12 }, () => Array.from({ length: 4 }, () => keys[Math.floor(Math.random() * keys.length)]).join('')).join(' ');
  }
  const words = ['a','add','all','ask','calm','clear','come','create','daily','field','first','flow','focus','food','good','hands','ideal','learn','move','quiet','ready','relax','road','skill','slow','steady','sure','time','type','warm','word','write'];
  const allowed = new Set([...keys, ' ']);
  const usable = words.filter(word => [...word].every(char => allowed.has(char)));
  if (id === 'word-sprint') return Array.from({ length: 30 }, () => usable[Math.floor(Math.random() * usable.length)] || 'fall').join(' ');
  return 'Patient hands build dependable speed. Read ahead, stay relaxed, and let each finger return home after every careful reach.';
}

function createSession(config) {
  return { ...config, position: 0, attempts: 0, correct: 0, errors: 0, started: null, duration: 0, finished: false };
}

function beginTyping() {
  if (!session) return;
  $('#instructionCard').classList.add('is-hidden');
  $('#typingStage').classList.remove('is-hidden');
  renderPrompt(); renderKeyboard();
  $('#keyboardStatus').textContent = 'Press the highlighted key on your physical keyboard.';
}

function resetMetrics() {
  $('#liveWpm').textContent = '0'; $('#liveAccuracy').textContent = '100%'; $('#liveTime').textContent = '0:00';
}

function restartSession() {
  if (!session) return;
  const config = { mode: session.mode, lessonIndex: session.lessonIndex, gameId: session.gameId, title: session.title, prompt: session.prompt, target: session.target };
  session = createSession(config);
  clearInterval(timerId); resetMetrics(); beginTyping();
}

function renderPrompt(error = false) {
  if (!session) return;
  const before = escapeHtml(session.prompt.slice(0, session.position));
  const current = escapeHtml(session.prompt[session.position] || '');
  const after = escapeHtml(session.prompt.slice(session.position + 1));
  $('#typingPrompt').innerHTML = `<span class="done">${before}</span><span class="current ${error ? 'error-flash' : ''}">${current === ' ' ? '&nbsp;' : current}</span><span class="pending">${after}</span>`;
  const expected = session.prompt[session.position] || '';
  const key = expected.toLowerCase();
  const capital = expected !== key && /[A-Z]/.test(expected);
  const finger = FINGERS[key] || 'Use the highlighted key';
  const oppositeShift = finger.startsWith('Left') ? 'Right little finger holds Shift' : 'Left little finger holds Shift';
  $('#fingerCue').innerHTML = `<span>${key === ' ' ? '␣' : capital ? `⇧ ${escapeHtml(expected)}` : escapeHtml(expected.toUpperCase())}</span> ${capital ? `${oppositeShift}; ${finger.toLowerCase()} types` : finger}`;
}

function learnedKeySet() {
  return new Set(knownKeys().map(k => k.toLowerCase()));
}

function renderKeyboard() {
  const expected = session?.prompt[session.position] || '';
  const shiftedKeys = { ':': ';', '?': '/', '!': '1', '%': '5' };
  const target = shiftedKeys[expected] || expected.toLowerCase();
  const learned = learnedKeySet();
  $('#keyboard').innerHTML = KEY_ROWS.map(row => `<div class="key-row">${row.map(key => {
    const label = key === ' ' ? 'SPACE' : key.toUpperCase();
    return `<span class="key ${key === ' ' ? 'wide' : ''} ${'fj'.includes(key) ? 'home' : ''} ${learned.has(key) ? 'learned' : ''} ${key === target ? 'target' : ''}">${label}</span>`;
  }).join('')}</div>`).join('');
}

function handleKeydown(event) {
  if (currentView !== 'trainer' || !session || session.finished || $('#typingStage').classList.contains('is-hidden')) return;
  if (event.ctrlKey || event.metaKey || event.altKey || event.key.length > 1) return;
  event.preventDefault();
  if (!session.started) {
    session.started = performance.now();
    timerId = setInterval(updateMetrics, 250);
  }
  const expected = session.prompt[session.position];
  const typed = event.key;
  session.attempts++;
  const statKey = expected.toLowerCase();
  const stat = state.keyStats[statKey] ||= { attempts: 0, correct: 0 };
  stat.attempts++;
  if (typed === expected) {
    session.correct++; stat.correct++; session.position++;
    playTone(540, .025);
    $('#keyboardStatus').textContent = 'Correct — keep the rhythm.';
    if (session.position >= session.prompt.length) finishSession();
    else { renderPrompt(); renderKeyboard(); updateMetrics(); }
  } else {
    session.errors++;
    playTone(160, .06);
    if (state.settings.haptic && navigator.vibrate) navigator.vibrate(35);
    $('#keyboardStatus').textContent = `Try again: ${expected === ' ' ? 'space' : expected.toUpperCase()} · ${FINGERS[statKey] || 'check the highlighted key'}`;
    renderPrompt(true);
    setTimeout(() => session && !session.finished && renderPrompt(), 220);
  }
  saveState();
}

function liveResults() {
  if (!session?.started) return { duration: 0, wpm: 0, accuracy: 100 };
  const duration = Math.max(1, (performance.now() - session.started) / 1000);
  const wpm = Math.max(0, Math.round((session.correct / 5) / (duration / 60)));
  const accuracy = session.attempts ? Math.round(session.correct / session.attempts * 100) : 100;
  return { duration, wpm, accuracy };
}

function updateMetrics() {
  const result = liveResults();
  $('#liveWpm').textContent = result.wpm;
  $('#liveAccuracy').textContent = `${result.accuracy}%`;
  $('#liveTime').textContent = formatTime(result.duration);
}

function finishSession() {
  clearInterval(timerId);
  const result = liveResults();
  session.finished = true;
  const passedAccuracy = result.accuracy >= session.target[0];
  const passedSpeed = result.wpm >= session.target[1];
  const passed = passedAccuracy && passedSpeed;
  const record = { date: new Date().toISOString(), title: session.title, mode: session.mode, lessonIndex: session.lessonIndex, duration: Math.round(result.duration), wpm: result.wpm, accuracy: result.accuracy, errors: session.errors };
  state.sessions.push(record);
  if (state.sessions.length > 200) state.sessions = state.sessions.slice(-200);
  if (session.mode === 'lesson') {
    const old = state.lessons[session.lessonIndex] || { attempts: 0, bestWpm: 0, bestAccuracy: 0, stars: 0, mastered: false };
    old.attempts++;
    old.bestWpm = Math.max(old.bestWpm, result.wpm);
    old.bestAccuracy = Math.max(old.bestAccuracy, result.accuracy);
    old.stars = Math.max(old.stars, 1 + Number(passedAccuracy || passedSpeed) + Number(passed));
    old.mastered ||= passed;
    state.lessons[session.lessonIndex] = old;
  }
  saveState();
  $('#resultBurst').textContent = passed ? '★' : '↻';
  $('#resultKicker').textContent = passed ? (session.mode === 'lesson' ? 'LESSON MASTERED' : 'GAME COMPLETE') : 'ONE MORE RUN';
  $('#resultTitle').textContent = passed ? ['Strong foundations.', 'Clean work.', 'Your hands are learning.'][Math.floor(Math.random() * 3)] : 'Accuracy before speed.';
  $('#resultMessage').textContent = passed ? (session.mode === 'lesson' && session.lessonIndex < LESSONS.length - 1 ? 'You met both targets and unlocked the next lesson.' : 'You met both targets. Keep building this dependable rhythm.') : `Target: ${session.target[0]}% accuracy and ${session.target[1]} WPM. Slow down slightly and repeat.`;
  $('#resultWpm').textContent = result.wpm;
  $('#resultAccuracy').textContent = `${result.accuracy}%`;
  $('#resultErrors').textContent = session.errors;
  $('#resultContinue').textContent = passed && session.mode === 'lesson' && session.lessonIndex < LESSONS.length - 1 ? 'Next lesson' : 'Finish';
  $('#resultContinue').onclick = () => {
    $('#resultDialog').close();
    if (passed && session.mode === 'lesson' && session.lessonIndex < LESSONS.length - 1) startLesson(session.lessonIndex + 1);
    else showView(session.mode === 'game' ? 'games' : 'home');
  };
  $('#retryButton').onclick = () => { $('#resultDialog').close(); restartSession(); };
  $('#resultDialog').showModal();
}

function playTone(frequency, duration) {
  if (!state.settings.sound) return;
  try {
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = frequency; gain.gain.value = .035;
    oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + duration);
  } catch { /* Audio feedback is optional. */ }
}

function formatTime(seconds) {
  const value = Math.max(0, Math.round(seconds));
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function applySettings() {
  document.body.classList.toggle('high-contrast', state.settings.contrast);
  $('#soundToggle').checked = state.settings.sound;
  $('#hapticToggle').checked = state.settings.haptic;
  $('#contrastToggle').checked = state.settings.contrast;
}

function showToast(message) {
  clearTimeout(toastTimer); const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const link = document.createElement('a');
  link.href = url; link.download = `touchtyper-progress-${new Date().toISOString().slice(0, 10)}.json`; link.click();
  URL.revokeObjectURL(url); showToast('Progress exported');
}

async function importProgress(file) {
  try {
    const imported = JSON.parse(await file.text());
    if (!imported || imported.version !== 1 || !Array.isArray(imported.sessions)) throw new Error('Invalid progress file');
    state = { ...structuredClone(DEFAULT_STATE), ...imported, settings: { ...DEFAULT_STATE.settings, ...(imported.settings || {}) } };
    saveState(); renderAll(); $('#settingsDialog').close(); showToast('Progress restored');
  } catch { showToast('That progress file could not be read'); }
}

$$('[data-view-link]').forEach(button => button.addEventListener('click', () => showView(button.dataset.viewLink)));
$('#readyButton').addEventListener('click', beginTyping);
$('#restartButton').addEventListener('click', restartSession);
$('#trainerBack').addEventListener('click', () => { clearInterval(timerId); showView(session?.mode === 'game' ? 'games' : 'learn'); });
$('#settingsButton').addEventListener('click', () => $('#settingsDialog').showModal());
$('#closeSettings').addEventListener('click', () => $('#settingsDialog').close());
$('#soundToggle').addEventListener('change', event => { state.settings.sound = event.target.checked; saveState(); });
$('#hapticToggle').addEventListener('change', event => { state.settings.haptic = event.target.checked; saveState(); });
$('#contrastToggle').addEventListener('change', event => { state.settings.contrast = event.target.checked; saveState(); applySettings(); });
$('#exportButton').addEventListener('click', exportProgress);
$('#importInput').addEventListener('change', event => event.target.files[0] && importProgress(event.target.files[0]));
$('#resetButton').addEventListener('click', () => {
  if (!confirm('Reset every lesson, statistic and setting? This cannot be undone.')) return;
  state = structuredClone(DEFAULT_STATE); state.onboarded = true; saveState(); renderAll(); $('#settingsDialog').close(); showToast('Progress reset');
});
$('#startOnboarding').addEventListener('click', () => { state.onboarded = true; saveState(); $('#onboardingDialog').close(); startLesson(0); });
document.addEventListener('keydown', handleKeydown);

renderAll();
if (!state.onboarded) $('#onboardingDialog').showModal();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
