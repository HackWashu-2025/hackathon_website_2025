<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const timeRemaining = ref<TimeRemaining | null>(null);
let intervalId: number | null = null;

const calculateTimeRemaining = () => {
  const targetDate = new Date('2025-10-14T23:59:00-05:00'); // Central Time (CT)
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timeRemaining.value = { days, hours, minutes, seconds };
  } else {
    timeRemaining.value = null;
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  }
};

onMounted(() => {
  calculateTimeRemaining();
  intervalId = window.setInterval(calculateTimeRemaining, 1000);
});

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <div class="title">
    <div class="left-body">
      <div class="left-body-text">
        <h1>HACK <br> WASHU‘25</h1>
        <p>OCT 18-20</p>
        <p> Hosted by HackWashU x NRT AI-Access</p>
      </div>
      <div class="timer-text">
        <h2>SIGN UP FOR <span class="big"> ADVENTURE </span> IN </h2>
      </div>
      <div class="time" v-if="timeRemaining">
        <div class="days">
          <div class="time-value">{{ timeRemaining.days }}</div>
          <div class="time-label">days</div>
        </div>
        <div class="hours">
          <div class="time-value">{{ timeRemaining.hours }}</div>
          <div class="time-label">hours</div>
        </div>
        <div class="minutes">
          <div class="time-value">{{ timeRemaining.minutes }}</div>
          <div class="time-label">minutes</div>
        </div>
        <div class="seconds">
          <div class="time-value">{{ timeRemaining.seconds }}</div>
          <div class="time-label">seconds</div>
        </div>
      </div>
      <div class="left-scroll">
        <img src="/src/assets/arrow.png" alt="Image">
        <p> (SCROLL FOR INFO)</p>
      </div>
    </div>
    <div class="right-body">
      <div class="right-scroll">
        <p> (SCROLL FOR INFO)</p>
        <img src="/src/assets/arrow.png" alt="Image">
      </div>
    </div>
  </div>
</template>

<style scoped>

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 12vw;
    height: 97.5vh;
    border-bottom: solid 0.25vw black;
    background-color: #FFFFFF;
}

.left-body {
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    margin-top: 20vh;
}

.left-body-text h1 {
    font-size: 8.5vw;
    font-family: 'pf-videotext';
    color: black;
    font-weight: 400;
    line-height: 0.9;
}

.left-body-text p {
    font-size: 2vw;
    font-family: 'open-sans';
    color: black;
    font-weight: 400;
    padding-left: 0.75vw;
}

.timer-text {
    margin-left: 0.75vw;
    margin-right: 15vw;
    border-bottom: solid 0.3vw black;
}

.timer-text h2 {
    font-size: 2.25vw;
    font-family: 'pf-videotext';
    color: black;
    font-weight: 400;
    padding-top: 7vw;
}

.big {
    font-size: 3.5vw;
    color: black;
}

.left-scroll{
    display: none;
}

.right-body {
    width: 35%;
    height: 97.5vh;
    border-left: solid 0.25vw black;
}

.right-scroll{
    display: flex;
    align-items: center;
    flex-direction: column;
}

.right-scroll p{
    font-size: 1.75vw;
    font-family: 'pf-videotext';
    color: black;
    font-weight: 400;
    padding-top: 40vw;
    padding-left: 1vw;
}

.right-scroll img{
    height: 4vw;
    width: 3vw;
    padding-top: 1vw;
    padding-left: 1vw;
}

.time {
    display: flex;
    justify-content: space-between;
    margin-left: 0.75vw;
    margin-right: 15vw;
    font-size: xx-large;
}

.time div {
    height: 10vw; 
    width: 9vw;
    background-color: #E0DDB7;
    border: 1px solid black;
}

.days{
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
}

.hours{
    margin-top: 3vw;
    display: flex;
    flex-direction: column;
}

.minutes{
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
}

.seconds{
    margin-top: 4vw;
    display: flex;
    flex-direction: column;
}

.time .time-value {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 3.5vw;
    font-family: 'pf-videotext';
    
}

.time .time-label {
    flex: 1;
    font-size: 1.5vw;
    text-align: right;
    padding-right: 0.5vw;
    box-sizing: border-box;
    border: none;
    font-family: 'open-sans';
}

@media(max-width: 700px){
  .title{
    height: 76vh;
    padding: 0 0 0 8vw;
    border-bottom: solid 0.7vw black;
  }
  .left-body{
    width: 90%;
    padding: 0 6vw 0 0;
  }
  .left-body-text h1{
    font-size: 16vw;
  }
  .left-body-text p{
    font-size: 6vw;
    margin-top: 1vh;
  }
  .timer-text{
    margin-right: 0vw;
    padding: 0 0 0.8vw 0;
    border-bottom: solid 0.7vw black;
  }
  .timer-text h2{
    font-size: 4vw;
    margin-top: 10vh;
  }
  .big{
    font-size: 7vw;
  }
  .time{
    margin-left: 0;
    margin-right: 0;
  }
  .time div{
    width: 18vw;
    height: 20vw;
    border: none;
    background-color: #D9D9D9;
  }
  .time .time-value{
    margin-top: 2vw;
    font-size: 10vw;
  }
  .time .time-label{
    font-size: 3vw;
    padding: 0 1.5vw 0.8vw 0;
  }

  .left-scroll{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 35vw;
    margin-top: 7vh;
}

.left-scroll p{
    font-size: 3.5vw;
    font-family: 'pf-videotext';
    color: black;
    font-weight: 400;
    margin-top: 2vh;
}

.left-scroll img{
    height: 8vw;
    width: 5vw;
    margin-left: 21vw;
}

  .right-body{
    width: 10%;
    height: 100%;
    border-left: solid 0.7vw black;
  }
  .right-scroll{
    display: none;
  }

}


</style>
 