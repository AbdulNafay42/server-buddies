// Entry for the <script> / CDN bundle: exposes `window.ServerBuddies` and registers <server-buddy>.
import { defineServerBuddyElement } from "./element.js";

export * from "./index.js";
defineServerBuddyElement();
