// ==UserScript==
// @name         NLZIET Player Overlay Fix
// @namespace    http://tampermonkey.net/
// @version      1.01
// @icon         https://www.nlziet.nl/Content/images/logo.svg
// @description  Removes the fullscreen grey background on video controls.
// @author       Taavirocious
// @match        https://*.nlziet.nl/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle('.ua0vq {background: none !important;}');
