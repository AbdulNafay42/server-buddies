export type CharacterId = "server" | "robot" | "cat" | "ghost" | "cloud" | "database" | "router" | "shield" | "bug" | "container";
export type HangStyle = "rope" | "chain" | "spring" | "thread" | "balloon" | "none";
export type Position = "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";
export type Accessory = "auto" | "none" | "nightcap" | "partyhat" | "crown" | "glasses" | "shades" | "headphones" | "santahat" | "witchhat" | "pumpkin";
export type Mood = "happy" | "curious" | "down";
export type ActionName = "eyes" | "swing" | "drag" | "boop" | "combos" | "idle" | "sleep" | "hover" | "timeOfDay" | "effects";

export interface BuddyColors {
  main?: string;
  dark?: string;
  light?: string;
  shell?: string;
  screen?: string;
  balloon?: string;
}

export interface BuddyMessages {
  boop?: string[];
  hello?: string;
  ouch?: string;
  celebrate?: string;
  panic?: string;
  paste?: string;
  throw?: string;
  spin?: string;
  fall?: string;
  recover?: string;
  /** Use `{time}` for the current time. */
  watch?: string;
}

export interface BuddyOptions {
  character?: CharacterId;
  hang?: HangStyle;
  position?: Position;
  accessory?: Accessory;
  /** Seasonal hat used when `accessory` is `auto`: Santa hat in December, witch hat or pumpkin (alternating by day) Oct 20-31. Default `auto` follows the date (needs the `timeOfDay` action). */
  season?: "auto" | "none" | "christmas" | "halloween";
  color?: string;
  colors?: BuddyColors;
  size?: number;
  length?: number;
  offset?: number | { x?: number; y?: number };
  /** Array of enabled actions, or an object of overrides such as `{ drag: false }`. Default: all on. */
  actions?: ActionName[] | Partial<Record<ActionName, boolean>>;
  messages?: BuddyMessages;
  mood?: Mood;
  watchInput?: string;
  lookAt?: string;
  mount?: string | HTMLElement;
  hideBelow?: number;
  sleepAfter?: number;
  idleAfter?: number;
  label?: string;
  zIndex?: number;
  injectStyles?: boolean;
}

export interface BuddyHandle {
  readonly el: HTMLElement | null;
  update(options: BuddyOptions): void;
  say(text: string): void;
  setMood(mood: Mood): void;
  celebrate(): void;
  panic(): void;
  flinch(): void;
  pass(): void;
  nod(): void;
  nervous(on?: boolean): void;
  boop(): void;
  sleep(): void;
  wake(): void;
  show(): void;
  hide(): void;
  destroy(): void;
}

export function createBuddy(options?: BuddyOptions): BuddyHandle;
export function renderPreview(
  character: CharacterId,
  options?: Pick<BuddyOptions, "color" | "colors" | "accessory"> & { state?: Mood }
): string;
export function ensureStyles(): void;
export function defineServerBuddyElement(tag?: string): void;

export const characters: ReadonlyArray<{ id: CharacterId; name: string; blurb: string }>;
export const ACTIONS: ActionName[];
export const HANG_STYLES: HangStyle[];
export const POSITIONS: Position[];
export const MOODS: Mood[];
export const ACCESSORIES: Accessory[];
