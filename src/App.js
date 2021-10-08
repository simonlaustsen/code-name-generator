import './App.css';
import React, { useState } from 'react';
import * as confetti from 'canvas-confetti';

function App() {
  const codeNamesAdjective = [
    "loud",
    "red",
    "blue",
    "green",
    "yellow",
    "irate",
    "angry",
    "peeved",
    "happy",
    "slimy",
    "sleepy",
    "junior",
    "slicker",
    "united",
    "somber",
    "bizarre",
    "odd",
    "weird",
    "wrong",
    "latent",
    "chilly",
    "strange",
    "loud",
    "silent",
    "hopping",
    "orange",
    "violet",
    "violent"
  ];
  const codeNamesNoun = [
    "whisper",
    "felony",
    "moon",
    "sucker",
    "penguin",
    "waffle",
    "maestro",
    "night",
    "trinity",
    "deity",
    "monkey",
    "ark",
    "squirrel",
    "iron",
    "bounce",
    "farm",
    "chef",
    "trough",
    "net",
    "trawl",
    "glee",
    "water",
    "spork",
    "plow",
    "feed",
    "souffle",
    "route",
    "bagel",
    "montana",
    "analyst",
    "auto",
    "watch",
    "photo",
    "yard",
    "source",
    "monkey",
    "seagull",
    "toll",
    "spawn",
    "gopher",
    "chipmunk",
    "set",
    "calendar",
    "artist",
    "chaser",
    "scan",
    "tote",
    "beam",
    "entourage",
    "genesis",
    "walk",
    "spatula",
    "rage",
    "fire",
    "master"
  ];
  const [codeName, setCodeName] = useState(`${getRandomEntry(codeNamesAdjective)} ${getRandomEntry(codeNamesNoun)}`);

  /**
   * Get a random number within a range.
   */
  function getRandomNumberInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Get random entry in array.
   */
  function getRandomEntry(entries) {
    return entries[Math.floor(Math.random() * entries.length)];
  }

  /**
   * Generate a new random code name.
   */
  function generateCodeName() {
    setCodeName(`${getRandomEntry(codeNamesAdjective)} ${getRandomEntry(codeNamesNoun)}`);
    drawConfetti();
  }

  /**
   * Draw confetti canvas within the center of the screen.
   */
  function drawConfetti() {
    confetti.create(undefined, { resize: true, useWorker: false })({
      angle: getRandomNumberInRange(20, 100),
      spread: getRandomNumberInRange(50, 60),
    });
  }

  return (
    <div className="background">
      <section>
        <header>
          <p>Your secret code name</p>
        </header>
        <main>
          <span className="code-name">{codeName}</span>
        </main>
        <footer>
          <button type="button" onClick={generateCodeName}>Regenerate</button>
        </footer>
      </section>
    </div>
  );
}

export default App;
