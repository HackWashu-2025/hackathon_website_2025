<script setup lang="ts"></script>

<template>
  <div class="workshops" id="workshops">
    <div class="header">
      <h1>JOIN OUR WORKSHOPS</h1>
    </div>

    <div class="workshops-grid">
      <!-- Workshop 1 -->
      <div class="workshop-item">
        <button class="workshop-button">
          <a href="https://github.com/Heyunlee/HackWashu_Workshop" style="text-decoration: none; color: inherit;">
            <div class="button-content">
              <span class="title">WORKSHOP 1 — Git & Terminal Basics</span>
              <span class="description">Learn how to manage projects and collaborate using Git and the command line</span>
            </div>
          </a>
        </button>
        <span class="office-hour">Office hour: 6:30 pm - 8:30 pm on Oct 22nd</span>
          <a href="https://wustl.zoom.us/j/96329864881?pwd=KZObA9U8Qi6OjG0Qikh6VCoZIDH5uQ.1" style="text-decoration: none; color: inherit;"> 
            <span class="office-hour-link">OH Zoom link</span>
        </a>
      </div>

      <!-- Workshop 2 -->
      <div class="workshop-item">
        <button class="workshop-button">
          <a href="https://github.com/Hack-WashU/Web-Basics-Workshop" style="text-decoration: none; color: inherit;">
            <div class="button-content">
              <span class="title">WORKSHOP 2 — Web Basics (HTML / CSS / JavaScript)</span>
              <span class="description">Build and style your first web page from scratch.</span>
            </div>
          </a>
        </button>
        <span class="office-hour">Office hour: Coming soon</span>
      </div>

      <!-- Workshop 3 -->
      <div class="workshop-item">
        <button class="workshop-button">
          <a href="https://github.com/ngethan/hackwashu-fullstack-workshop-template" style="text-decoration: none; color: inherit;">
            <div class="button-content">
              <span class="title">WORKSHOP 3 — Full-stack</span>
              <span class="description">Learn how to build and integrate front-end and back-end of web application.</span>
            </div>
          </a>
        </button>
        <span class="office-hour">Office hour: 6:00 pm - 8:00 pm on Oct 22nd</span>
      </div>

      <!-- Workshop 4 -->
      <div class="workshop-item">
        <button class="workshop-button">
          <a href="https://github.com/agopalareddy/HackWashU-Databases-Workshop" style="text-decoration: none; color: inherit;">
            <div class="button-content">
              <span class="title">WORKSHOP 4 — Data Management</span>
              <span class="description">Understand how to store, process, and visualize data effectively.</span>
            </div>
          </a>
        </button>
        <span class="office-hour">Office hour: 1:00 pm - 3:00 pm on Oct 24th</span>
      </div>
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

/* Each workshop item */
.workshop-item {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.office-hour {
  font-family: 'open-sans';
  font-size: 0.9vw;
  font-weight: 700;
  margin-top: 0.8vh;
  text-align: center;
  color: #333;
}
.office-hour-link {
  font-family: 'open-sans';
  text-decoration: underline;
  font-size: 0.9vw;
  font-weight: 700;
  margin-top: 0.8vh;
  text-align: center;
  color: #0800ff;
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

  .description,
  .office-hour {
    font-size: 3vw;
  }

  .header h1 {
    font-size: 8vw;
  }
}
</style>
