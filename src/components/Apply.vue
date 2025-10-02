<script setup lang="ts"></script>

<template>
<div class="apply" id="apply">
  <h1 class="title">FULFILL YOUR DESTINY.</h1>
  <div class="apply-button"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfZeOdXqUlcXslkzQ7fVe20Lw97lpJPxTGk-1KqCPON2yQGmA/viewform" style="text-decoration: none;">APPLY NOW!!</a></div>
  <p>(PRESS TO START)</p>
</div>
</template>
 
<style scoped>
.apply {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 52vh;
  padding-top: 25vh;
}

.apply-button {
  background-color: #64D3F5;
  border: 0.2vw solid black;
  padding: 2.1vw 3vw 2.05vw 3vw;
  margin-top: 4vw;
  font-family: 'pf-videotext';
  font-size: 2.75vw;
}

.apply-button:hover {
  background-color: #C5D2CE;
  transition: ease-in 0.5s;
}

.title {
  font-family: 'pf-videotext';
  font-size: 4.25vw;
  color: black;
  font-weight: 400;
}

p {
  padding-top: 1.5vh;
  font-family: 'pf-videotext';
  font-size: 1.5vw;
  color: black;
}

@media (max-width: 700px) {
  .apply {
    background-color: #FFFFFF;
    height: 40vh;
    padding-top: 12vh;
    padding-left: 11.5vw;
    padding-right: 11.5vw;
    border-bottom: solid 0.7vw black;
  }

  .apply-button {
    margin-top: 6.2vh;
    padding: 4vw 6vw 4vw 6vw;
    font-size: 8.2vw;
    width: 53vw;
    height: 19.2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1.3vw black;
  }

  .title {
    text-align: center;
    font-size: 8.2vw;
  }

  p {
    margin-top: 1.5vh;
    font-size: 5vw;
  }
}
</style>
