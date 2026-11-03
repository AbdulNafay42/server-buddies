import * as React from "react";
import type { BuddyHandle, BuddyOptions, Mood } from "./index";

export interface ServerBuddyProps extends Omit<BuddyOptions, "mood"> {
  mood?: Mood;
  /** Fires `celebrate()` / `panic()` whenever it changes to that value. */
  outcome?: "celebrate" | "panic" | null;
  /** Render inside this component's own <div> instead of fixed to the viewport. */
  inline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export type ServerBuddyRef = Omit<BuddyHandle, "el" | "update" | "destroy">;

export const ServerBuddy: React.ForwardRefExoticComponent<ServerBuddyProps & React.RefAttributes<ServerBuddyRef>>;
export default ServerBuddy;
