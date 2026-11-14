/**
 * Web Audio API synthesizer for the Laptop Startup Intro.
 * Completely self-contained: zero external MP3/WAV dependencies, zero CORS errors,
 * zero network latency. Creates an ethereal, modern workstation boot chime and UI clicks.
 */

const STORAGE_KEY = 'portfolio_intro_muted';

export function getStoredMuteState(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    return val === 'true';
  } catch {
    return false;
  }
}

export function setStoredMuteState(muted: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, muted ? 'true' : 'false');
  } catch {
    // Ignore storage errors in private browsing
  }
}

let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!sharedAudioCtx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        sharedAudioCtx = new AudioCtx();
      }
    }
    if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume();
    }
    return sharedAudioCtx;
  } catch (e) {
    console.warn('AudioContext initialization note:', e);
    return null;
  }
}

/**
 * Plays a rich, cinematic, polyphonic workstation power-on chime.
 * Layered with warm triangle fundamentals, crystalline sine harmonics,
 * and a resonant low-pass filter sweep for high-end luxury feel.
 */
export function playStartupChime(muted: boolean = false): void {
  if (muted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    // Master bus
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.22, now);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 3.4);
    master.connect(ctx.destination);

    // Warm resonant filter sweep
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(3600, now + 0.4);
    filter.frequency.exponentialRampToValueAtTime(900, now + 3.2);
    filter.Q.setValueAtTime(1.8, now);
    filter.connect(master);

    // Subtle stereo spread / delay simulation
    const delay = ctx.createDelay();
    delay.delayTime.value = 0.08;
    const delayFeedback = ctx.createGain();
    delayFeedback.gain.value = 0.25;
    delay.connect(delayFeedback);
    delayFeedback.connect(delay);
    delay.connect(master);

    // Harmonic chord frequencies: D3 (146.83), A3 (220.00), D4 (293.66), F#4 (369.99), A4 (440.00), E5 (659.25)
    // Rich Dadd9 chord for expansive, optimistic, futuristic workstation feel
    const chordFrequencies = [146.83, 220.00, 293.66, 369.99, 440.00, 659.25];

    chordFrequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Lower frequencies use triangle for warm body; high frequencies use pure sine
      osc.type = idx < 2 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Micro pitch bend for analog drift
      osc.frequency.exponentialRampToValueAtTime(freq * 1.003, now + 2.8);

      const peakVolume = (0.16 / chordFrequencies.length) * (idx === 0 ? 1.4 : 1.0);
      gain.gain.setValueAtTime(0.0001, now);
      // Gentle staggered attack
      gain.gain.exponentialRampToValueAtTime(peakVolume, now + 0.06 + idx * 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.6 + idx * 0.12);

      osc.connect(gain);
      gain.connect(filter);
      gain.connect(delay);

      osc.start(now + idx * 0.01);
      osc.stop(now + 3.4);
    });
  } catch (err) {
    console.warn('Startup chime error:', err);
  }
}

/**
 * Subtle high-tech terminal tick for boot logs and progress steps
 */
export function playBootTick(muted: boolean = false, frequency: number = 880): void {
  if (muted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.7, now + 0.04);

    gain.gain.setValueAtTime(0.025, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.045);
  } catch {
    // Ignore audio ticks if muted or blocked
  }
}

/**
 * Low cinematic sub-rumble for the camera zoom transition into the workspace
 */
export function playZoomWhoosh(muted: boolean = false): void {
  if (muted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.7);
    osc.frequency.exponentialRampToValueAtTime(40, now + 1.2);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);
    filter.frequency.exponentialRampToValueAtTime(800, now + 0.5);
    filter.frequency.exponentialRampToValueAtTime(100, now + 1.2);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 1.25);
  } catch {
    // Ignore
  }
}

/**
 * Tactile micro-click for the START button and control toggles
 */
export function playButtonClick(muted: boolean = false): void {
  if (muted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.035);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  } catch {
    // Ignore
  }
}

/**
 * Soft, low-latency mechanical keystroke sound for code editor typing
 */
export function playTypingSound(muted: boolean = false): void {
  if (muted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Subtle random pitch variation for organic mechanical feel
    const randomFreq = 500 + Math.random() * 250;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(randomFreq, now);
    osc.frequency.exponentialRampToValueAtTime(randomFreq * 0.5, now + 0.018);

    gain.gain.setValueAtTime(0.015, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.022);
  } catch {
    // Ignore
  }
}

/**
 * High-tech chime when terminal command or compilation finishes
 */
export function playCommandSuccess(muted: boolean = false): void {
  if (muted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.08);

    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  } catch {
    // Ignore
  }
}



