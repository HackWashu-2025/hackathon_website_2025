<script setup lang="ts"></script>

<template>
  <div class="tracks" id="tracks">
    <div class="left-body">
      <div class="select-text">
        <h1>CHOOSE YOUR CHARACTER</h1>
        <p>Pick your track for this year’s hackathon.</p>
      </div>

      <!-- NEW Tracks only -->
      <div class="tracks-grid" aria-label="tracks">
        <!-- Track 1 -->
        <article class="track-card center" tabindex="0" aria-labelledby="t1title">
          <div class="c">
            <span class="badge-new">NEW</span>
            <img class="tracks-icon" src="../assets/frogwizard.png" alt="" aria-hidden="true" />
          </div>
          <h2 id="t1title">TRACK 1 — CALM EXPERIENCE</h2>
          <p class="tagline">Non-Coder Track</p>
          <ul class="bullets">
            <li>No coding required — focus on creativity.</li>
            <li>Build an app, website, or VR experience.</li>
            <li>Theme: promote calmness & peace of mind.</li>
            <li>Emphasis on design, UX, and storytelling.</li>
          </ul>
        </article>

        <!-- Track 2 -->
        <article class="track-card center" tabindex="0" aria-labelledby="t2title">
          <div class="c">
            <img class="tracks-icon" src="../assets/catwizard.png" alt="" aria-hidden="true" />
          </div>
          <h2 id="t2title">TRACK 2 — TRANSIT BUILDER</h2>
          <p class="tagline">Code Track: Transit & Data</p>
          <ul class="bullets">
            <li>Fetch simulated WashU shuttle location data from an API</li>
            <li>Build a web/mobile app that plans transportation</li>
            <li>Combine shuttle data with Google/Apple/etc. transit schedules</li>
            <li>Focus on coding, problem-solving, and integration.</li>
          </ul>
        </article>

        <!-- Track 3 -->
        <article class="track-card center" tabindex="0" aria-labelledby="t3title">
          <div class="c">
            <img class="tracks-icon" src="../assets/bearwizard.png" alt="" aria-hidden="true" />
          </div>
          <h2 id="t3title">TRACK 3 — FREE FOR <br> ALL</h2>
          <p class="tagline">Code Track: Open Innovation</p>
          <ul class="bullets">
            <li>No format limits — any tech stack or medium.</li>
            <li>Create something impactful in Finance, AI, Art, Health, Education, etc.</li>
            <li>Showcase originality and technical creativity.</li>
            <li>Build ambitious, bold ideas.</li>
          </ul>
        </article>
      </div>
    </div>

    <div class="right-body">
      <h1>TRACKS</h1>
    </div>
  </div>
</template>

<style scoped>
.tracks {
  display: flex;
  height: auto;
  border-bottom: 0.25vw solid black;
  min-height: 75vh;
  padding-bottom: 12vh;
}

.left-body {
  padding-left: 12.75vw;
  padding-top: 15vh;
  width: 82.5%;
}

.select-text h1{
  font-family: 'pf-videotext';
  font-size: 3.175vw;
  font-weight: 400;
}
.select-text p{
  padding-top: 4vh;
  padding-left: 0.25vw;
  font-family: 'open-sans';
  font-size: 1vw;
  font-weight: 400;
}

/* Tracks grid */
.tracks-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5vw;
  padding-top: 9vh;
  padding-right: 13vw;
}
.track-card{
  text-align: center;
}
.c {
  height: 37vh;
  width: 100%;
  background-color: rgba(185, 163, 213, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.15vw solid transparent;
  transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
}
.track-card:focus .c,
.c:hover {
  background-color: #64D3F5;
  border-color: black;
  transform: translateY(-2px);
}
.tracks-icon {
  height: 20vw;
  width: 16vw;
  object-fit: contain;
}
.track-card h2{
  padding-top: 2.5vh;
  font-family: 'pf-videotext';
  font-size: 1.35vw;
  font-weight: 400;
  line-height: 1.15;
}
.tagline{
  padding-top: 0.5vh;
  font-family: 'open-sans';
  font-size: 1vw;
  font-weight: 600;
}
.bullets {
  margin-top: 1.2vh;
  padding: 0;
  list-style: none;
  text-align: center;
  font-family: 'open-sans';
  font-size: 0.95vw;
  line-height: 1.6;
}

.bullets li {
  position: relative;
  margin-bottom: 0.8vh;
  padding-left: 0;
}

/* Custom arrow marker */
.bullets li::before {
  content: "➤";
  margin-right: 0.5em;
  color: #64D3F5;
  font-size: 1.1em;
  font-weight: bold;
}

.center { display: flex; flex-direction: column; align-items: center; }

.right-body {
  width: 17.5%;
  border-left: 0.25vw solid black;
  overflow: hidden;
}
.right-body h1 {
  font-family: 'pf-videotext';
  font-size: 6vw;
  color: rgba(0, 0, 0, 0.5);
  transform: rotate(90deg);
  transform-origin: 0 0;
  margin-top: 2vh;
  margin-left: 4.5vw;
  font-weight: 400;
}

/* Badge "NEW" on Track 1 */
.c {
  position: relative;
  overflow: visible;
}

.c img {
  position: relative;
  z-index: 1;
}

.badge-new {
  position: absolute;
  top: 0.3em;
  right: 0.3em;
  background: #ff3b3b;
  color: #fff;
  font-family: 'pf-videotext';
  font-size: 1.5vw;
  font-weight: 400;
  padding: 0.2em 0.6em;
  border-radius: 0.4em;
  text-transform: uppercase;
  z-index: 2;
  pointer-events: none;
}

/* Mobile */
@media (max-width: 700px){
  .tracks { flex-direction: column; }
  .left-body{
    padding-left: 5vw;
    padding-top: 8vh;
    width: 86vw;
  }
  .select-text h1{ font-size: 8vw; }
  .select-text p{ padding-top: 1.5vh; font-size: 3vw; }

  .tracks-grid{
    grid-template-columns: 1fr;
    gap: 5vw;
    padding-top: 5vh;
    padding-right: 0;
  }
  .c{
    height: 46vw;
  }
  .tracks-icon{ height: 32vw; width: 48vw; }
  .track-card h2{ font-size: 5.2vw; }
  .tagline{ font-size: 3.3vw; }
  .bullets{ font-size: 3.2vw; padding: 0 2vw; }

  .right-body{
    width: 14vw;
    border-left: 0.7vw solid black;
  }
  .right-body h1{
    font-size: 11.5vw;
    margin-left: 11vw;
  }
  .badge-new {
    font-size: 4vw;
    top: 0.6em;
    right: 0.6em;
    padding: 0.2em 0.5em;
  }
}


</style>
