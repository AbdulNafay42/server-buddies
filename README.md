# Server Buddies

[![npm](https://img.shields.io/npm/v/server-buddies)](https://www.npmjs.com/package/server-buddies)
[![license](https://img.shields.io/npm/l/server-buddies)](./LICENSE)
[**Live demo & configurator**](https://mahmed74.github.io/server-buddies/) · [npm](https://www.npmjs.com/package/server-buddies)

![Server Buddies hanging around](https://raw.githubusercontent.com/mahmed74/server-buddies/master/docs/assets/demo.gif)

**Interactive animated mascots for your website** — 10 SVG characters that hang, swing, follow the cursor and react to your app. Works with plain HTML, React / Next.js and as a web component. Pick a character, choose how it hangs, switch behaviours on or off, and drop it in. Zero dependencies, framework-agnostic, ~12 kB gzipped.

**Characters:** `server` · `robot` · `cat` · `ghost` · `cloud` · `database` · `router` · `shield` · `bug` · `container`
**Tethers:** `rope` · `chain` · `spring` · `thread` · `balloon` · `none` (perch)

> Build yours visually with the configurator: run `npm run docs` in this repo (or deploy the `docs/` folder to GitHub Pages) and copy the generated snippet.

## Install

```bash
npm i server-buddies
```

### Plain HTML (no build step)

```html
<script src="https://unpkg.com/server-buddies"></script>
<script>
  ServerBuddies.createBuddy({ character: "robot", hang: "chain", color: "#7c3aed" });
</script>
```

or declaratively:

```html
<server-buddy character="cat" hang="spring" actions="eyes,swing,boop"></server-buddy>
```

### React / Next.js

```jsx
import { ServerBuddy } from "server-buddies/react";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ServerBuddy character="ghost" hang="balloon" accessory="crown" />
    </>
  );
}
```

`server-buddies/react` ships with `"use client"`, so it works in the Next.js App Router. `react` is an optional peer dependency.

Drive it from your app state:

```jsx
<ServerBuddy mood={error ? "down" : "happy"} outcome={done ? "celebrate" : null} />
```

### Vanilla JS / any framework

```js
import { createBuddy } from "server-buddies";

const buddy = createBuddy({ character: "database", position: "bottom-left" });
buddy.say("Hello!");
// later: buddy.destroy();
```

Importing is SSR-safe; `createBuddy()` is a no-op on the server.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `character` | `"server"` | `server`, `robot`, `cat`, `ghost`, `cloud`, `database`, `router`, `shield`, `bug`, `container` |
| `hang` | `"rope"` | `rope`, `chain`, `spring`, `thread`, `balloon`, `none`. Each has its own physics |
| `position` | `"top-right"` | `top-`/`bottom-` + `left`/`center`/`right`. Bottom positions perch (no tether) |
| `season` | `"auto"` | `auto` (Santa hat in December, witch hat or pumpkin on alternate days Oct 20-31, needs `timeOfDay`), `none`, `christmas`, `halloween` |
| `accessory` | `"auto"` | `auto`, `none`, `nightcap`, `partyhat`, `crown`, `glasses`, `shades`, `headphones`, `santahat`, `witchhat`, `pumpkin` |
| `color` | per character | Main body colour (hex); shades are derived |
| `colors` | | Override `main`, `dark`, `light`, `shell`, `screen`, `balloon` individually |
| `size` | `104` | Width in px (40-400) |
| `length` | per tether | Tether length in px |
| `offset` | `{ x: 28, y: 0 }` | Distance from the edge |
| `actions` | all on | Array of enabled names, or `{ drag: false }`-style overrides |
| `messages` | built-in | Override speech: `boop[]`, `hello`, `ouch`, `celebrate`, `panic`, `paste`, `throw`, `spin`, `fall`, `recover`, `watch` (`{time}`) |
| `mood` | `"happy"` | `happy`, `curious`, `down` |
| `watchInput` | | Selector of a text field: eyes follow the caret, nods on paste |
| `lookAt` | | Selector: eyes lock onto matching elements under the cursor |
| `mount` | page | Element/selector to position inside instead of the viewport |
| `hideBelow` | `0` | Hide on viewports narrower than N px |
| `sleepAfter` / `idleAfter` | `15000` / `7000` | ms of inactivity before sleep / idle antics |
| `label` | | Accessible button label |
| `zIndex` | `40` | Stacking order |
| `injectStyles` | `true` | Set `false` and import `server-buddies/style.css` (for strict CSPs) |

### Actions

`eyes` (pupils follow cursor/caret) · `swing` (pendulum physics from cursor and scroll) · `drag` (grab and throw, needs a tether) · `boop` (click for speech) · `combos` (5 clicks spin, 10 fall) · `idle` (yawn, check the time, dance) · `sleep` · `hover` (happy squint) · `timeOfDay` (nightcap at night, glow in the morning, Santa hat in December and a witch hat or pumpkin Oct 20-31) · `effects` (confetti and alarm)

## Methods

`createBuddy()` returns a handle (in React, use a `ref`):

| Method | |
| --- | --- |
| `say(text)` | Speech bubble |
| `setMood(mood)` | `happy` / `curious` / `down` |
| `celebrate()` / `panic()` | Confetti / red alarm |
| `flinch()` / `pass()` / `nod()` | Small reactions |
| `nervous(on)` | Jitter and sweat |
| `boop()` | Same as a click |
| `sleep()` / `wake()` | Force sleep / wake |
| `show()` / `hide()` | Toggle visibility |
| `update(options)` | Apply new options (keeps mood) |
| `destroy()` | Remove it, all listeners and timers |

## Accessibility

The buddy is a real `<button>` with an `aria-label`, respects `prefers-reduced-motion`, and is hidden when printing.

## License

MIT
