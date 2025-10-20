<script setup lang="ts"></script>

<template>
  <div class="workshops" id="workshops">
    <div class="header">
      <h1>JOIN OUR WORKSHOPS</h1>
    </div>

    <div class="workshops-grid">
      <button class="workshop-button">
        <a href="https://github.com/Heyunlee/HackWashu_Workshop" style="text-decoration: none; color: inherit;">
          <div class="button-content">
            <span class="title">WORKSHOP 1 — Git & Terminal Basics</span>
            <span class="description">Learn how to manage projects and collaborate using Git and the command line</span>
          </div>
          <span class="description">Office hour: 6:40 pm - 8:40 pm on Oct 22nd</span>
        </a>
      </button>

      <button class="workshop-button">
        <a href="https://github.com/Hack-WashU/Web-Basics-Workshop" style="text-decoration: none; color: inherit;">
        <div class="button-content">
          <span class="title">WORKSHOP 2 — Web Basics (HTML / CSS / JavaScript)</span>
          <span class="description">Build and style your first web page from scratch.</span>
        </div>
        <span class="description">Office hour: Coming soon</span>
        </a>
      </button>

      <button class="workshop-button">
        <a href="https://github.com/ngethan/hackwashu-fullstack-workshop-template" style="text-decoration: none; color: inherit;">
        <div class="button-content">
          <span class="title">WORKSHOP 3 — Full-stack</span>
          <span class="description">Learn how to build and integrate front-end and back-end of web application.</span>
        </div>
        <span class="description">Office hour: 6:00 pm - 8:00 pm on Oct 22nd</span>
        </a>
      </button>

      <button class="workshop-button">
        <a href="https://github.com/agopalareddy/HackWashU-Databases-Workshop" style="text-decoration: none; color: inherit;">
          <div class="button-content">
            <span class="title">WORKSHOP 4 — Data Management</span>
            <span class="description">Understand how to store, process, and visualize data effectively.</span>
          </div>
          <span class="description">Office hour: 1:00 pm - 3:00 pm on Oct 24th</span>
        </a>
      </button>
    </div>
  </div>
</template>

<style scoped>
.workshops {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 5vw;
  min-height: 80vh;
}

.header h1 {
  font-family: 'pf-videotext';
  font-size: 3.5vw;
  text-align: center;
  font-weight: 400;
}

.workshops-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2.5vw;
  margin-top: 5vh;
  justify-items: center;
  width: 100%;
}

.workshop-button {
  background-color: #64D3F5;
  border: 0.2vw solid black;
  padding: 2.5vw 1.5vw;
  font-family: 'pf-videotext';
  font-size: 1.5vw;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
  width: 100%;
  max-width: 18vw;
}

.workshop-button:hover {
  background-color: #C5D2CE;
  transform: translateY(-2px);
}

/* Button content styling */
.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-weight: 600;
  margin-bottom: 0.5vh;
}

.description {
  font-family: 'open-sans';
  font-size: 0.9vw;
  font-weight: 400;
  text-align: center;
}

/* Mobile */
@media (max-width: 700px) {
  .workshops-grid {
    grid-template-columns: 1fr;
    gap: 5vh;
  }

  .workshop-button {
    max-width: 90vw;
    font-size: 4vw;
    padding: 4vw 2vw;
  }

  .title {
    font-size: 4vw;
  }

  .description {
    font-size: 3vw;
  }

  .header h1 {
    font-size: 8vw;
  }
}
</style>
