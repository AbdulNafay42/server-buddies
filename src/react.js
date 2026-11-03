"use client";
import { createElement, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createBuddy } from "./core.js";

/**
 * <ServerBuddy character="robot" hang="chain" mood="happy" outcome="celebrate" />
 *
 * Takes every createBuddy() option as a prop, plus:
 *  - mood:    "happy" | "curious" | "down" (live)
 *  - outcome: "celebrate" | "panic" | null (fires whenever it changes to a value)
 *  - inline:  render inside this component's own <div> instead of fixed to the viewport
 *  - className / style: applied to the inline container
 * A ref exposes the imperative API: say, flinch, pass, nod, nervous, celebrate, panic, boop, ...
 */
export const ServerBuddy = forwardRef(function ServerBuddy(props, ref) {
  const { mood = "happy", outcome = null, inline = false, className, style, ...options } = props;
  const hostRef = useRef(null);
  const buddyRef = useRef(null);
  const moodRef = useRef(mood);
  moodRef.current = mood;
  const optionsRef = useRef(options);
  optionsRef.current = options;
  const key = JSON.stringify(options);

  useEffect(() => {
    const buddy = createBuddy({ ...optionsRef.current, mood: moodRef.current, mount: inline ? hostRef.current : optionsRef.current.mount });
    buddyRef.current = buddy;
    return () => {
      buddy.destroy();
      buddyRef.current = null;
    };
  }, [key, inline]);

  useEffect(() => {
    buddyRef.current && buddyRef.current.setMood(mood);
  }, [mood]);

  useEffect(() => {
    const buddy = buddyRef.current;
    if (!buddy || !outcome) return;
    if (outcome === "celebrate") buddy.celebrate();
    else if (outcome === "panic") buddy.panic();
  }, [outcome]);

  useImperativeHandle(
    ref,
    () => {
      const call = (name) => (...args) => buddyRef.current && buddyRef.current[name](...args);
      return {
        say: call("say"), setMood: call("setMood"), celebrate: call("celebrate"), panic: call("panic"),
        flinch: call("flinch"), pass: call("pass"), nod: call("nod"), nervous: call("nervous"),
        boop: call("boop"), sleep: call("sleep"), wake: call("wake"), show: call("show"), hide: call("hide")
      };
    },
    []
  );

  return inline ? createElement("div", { ref: hostRef, className, style: { position: "relative", ...style } }) : null;
});

export default ServerBuddy;
