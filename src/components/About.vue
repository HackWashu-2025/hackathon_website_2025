<script setup lang="ts"></script>

<template>
  <div class="about" id="about">
    <div class="p asset1"></div>
    <div class="p asset2"></div>
    <div class="p asset3"></div>
    <div class="p asset4"></div>
    <div class="p asset5"></div>
    <div class="left-body">
      <h1>ABOUT</h1>
    </div>
    <div class="right-body">
      <div class="setting">
        <h1>SETTING</h1>
        <p>
          At Hack WashU, you'll meet fellow hackers from around the country, learn new skills, and work alongside seasoned mentors. We'll have free workshops, lecture series, mentorship, prizes, games, and more. 
        </p>
        <p>
          Don't have a team, or even an idea? don't worry, we'll give you the tools to build something incredible.
        </p>
      </div>
    </div>
  </div>
</template>
 
<style scoped>

.p{
  background-color: rgba(185, 163, 213, 0.5);
  z-index: 1;
  position: absolute;
}

.asset1{
  margin-left: 3vw;
  margin-top: 8vh;
  height: 77vh;
  width: 35vw;
}

.asset2{
  margin-left: 38vw;
  margin-top: 55vh;
  height: 30vh;
  width: 9vw;
}

.asset3{
  margin-left: 57.5vw;
  margin-top: 72vh;
  height: 13vh;
  width: 18vw;
}

.asset4{
  margin-left: 77.5vw;
  margin-top: 57vh;
  height: 13vh;
  width: 7vw;
}

.asset5{
  margin-left: 86.25vw;
  margin-top: 65vh;
  height: 10vh;
  width: 5vw;
}

.about{
  display: flex;
  justify-content: space-between;
  height: 85vh;
  border-bottom: 0.25vw solid black;
}

.left-body{
  z-index: 2;
  position: relative;
  width: 24%;
  height: auto;
  border-right: 0.25vw solid black;
}

.left-body h1{
  z-index: 2;
  position: absolute;
  font-family: 'pf-videotext';
  font-size: 6vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  transform: rotate(-90deg);
  transform-origin: 0 0;
  display: inline-block;
  margin-top: 38vh;
  margin-left: 19.25vw;
}

.right-body{
  display: flex;
  width: 76%;
  height: auto;
}

.setting{
  width: 60%;
  height: auto;
  margin-top: 16vh;
  margin-left: 20.5vw; 
}

.setting h1{
  font-family: 'pf-videotext';
  font-size: 3.5vw;
  font-weight: 400;
  color: black;
  padding-bottom: 2vh;
}

.setting p{
  font-family: 'open-sans';
  font-size: 1.05vw;
  font-weight: 400;
  padding-left: 0.25vw;
  line-height: 1.5;
  margin-bottom: 2vh;
}

@media (max-width: 700px){
  .about{
    background-color: #FFFFFF;
    height: 57.9vh;
    border-bottom: solid 0.7vw black;
  }
  .left-body{
    width: 23.8%;
    height: 100%;
    border: none;
  }
  .right-body{
    width: 76.2%;
    height: 100%;
    border-left: solid 0.7vw black;
  }
  .left-body h1{
    position: relative;
    font-size: 11.5vw;
    right: 6vw;
    bottom: 19vh;
  }
  .asset1, .asset2, .asset3, .asset4, .asset5{
    display: none;
  }
  .setting{
    margin-top: 8vh;
    margin-left: 15vw;
  }
  .setting h1{
    font-size: 6vw;
  }
  .setting p{
    font-size: 3vw;
  }
}

</style>
