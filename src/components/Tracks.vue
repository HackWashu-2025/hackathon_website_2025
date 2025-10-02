<script setup lang="ts"></script>

<template>
<div class="tracks" id="tracks">
  <div class="left-body">
    <div class="select-text">
      <h1>CHOOSE YOUR CHARACTER</h1>
      <p>Discover your preferred difficulty level + class.</p>
    </div>
    <div class="difficulty">
      <div class="emerging">
        <div class="d">
          <div class="icon-div">
            <img class="difficulty-icon" src="../assets/icon1.png" alt="level1" />
          </div>
          <div class="words">
            <p class="star">*</p>
            <p class="level">(level 1)</p>
        </div>
        </div>
        <div>
          <h1>EMERGING</h1>
          <p >Gather 0-2 years of experience or hackathons.</p>
        </div>
      </div>
      <div class="master">
        <div class="d">
          <div class="icon-div">
            <img class="difficulty-icon" src="../assets/icon2.png" alt="level2" />
          </div>
          <div class="words">
            <p class="star">***</p>
            <p class="level">(level 3)</p>
          </div>
        </div>
        <div>
          <h1>MASTER</h1>
          <p>Unlock 3+ years of experience or hackathons.</p>
        </div>
      </div>
    </div>
    <div class="class">
      <div class="ai center">
        <div class="c">
          <img class="tracks-icon" src="../assets/frogwizard.png" alt="ai" />
        </div>
        <p>ARTIFICIAL INTELLIGENCE</p>
      </div>
      <div class="visuals center">
        <div class="c">
          <img class="tracks-icon" src="../assets/catwizard.png" alt="visuals" />
        </div>
        <p>VISUALLY STUNNING</p>
      </div>
      <div class="health center">
        <div class="c">
          <img class="tracks-icon" src="../assets/bearwizard.png" alt="health" />
        </div>
        <p>HEALTH & FITNESS</p>
      </div>
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
  height:150vh;
  border-bottom: 0.25vw solid black;
  min-height: 75vh;
}

.left-body {
  padding-left: 12.75vw;
  padding-top: 15vh;
  width: 82.5%;
  height: auto;   
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

.difficulty {
  display: flex;
  justify-content: space-between;
  padding-top: 10vh;
  padding-right: 19vw;
}

.d{
  height: 33vh;
  width: 23.75vw;
  background-color: rgba(185, 163, 213, 0.5);
  text-align: right;
  display: flex;
  align-items: center;
}

.difficulty-icon{
  height: 10vw;
  width: 10vw;
}

.icon-div{
  width: 70%;
}

.words{
  width: 30%;
}

.emerging .star{
  padding-right: 0.25vw;
  font-family: 'Helvetica';
  font-size: 6vw;
  font-weight: 400;
}

.emerging .level{
  padding-top: 17.5vh;
  padding-right: 0.5vw;
  font-family: 'pf-videotext';
  font-size: 1.3vw;
  font-weight: 400;
}

.master .star{
  padding-right: 0.25vw;
  font-family: 'Helvetica';
  font-size: 6vw;
  font-weight: 400;
}

.master .level{
  padding-top: 17.5vh;
  padding-right: 0.5vw;
  font-family: 'pf-videotext';
  font-size: 1.3vw;
  font-weight: 400;
}

.d:hover {
  transition: ease-in-out 0.5s;
  background-color: #64D3F5;
}

.difficulty h1 {
  padding-top: 3vh;
  font-family: 'pf-videotext';
  font-size: 1.75vw;
  font-weight: 400;
}

.difficulty p {
  padding-top: 0.5vh;
  font-family: 'open-sans';
  font-size: 1vw;
  font-weight: 400;
}

.class {
  display: flex;
  justify-content: space-evenly;
  padding-top: 9vh;
  padding-right: 13vw;
  align-items: center;
}

.c {
  height: 37vh;
  width: 17.25vw;
  background-color: rgba(185, 163, 213, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  justify-content: center;
}

.c:hover {
  transition: ease-in-out 0.5s;
  background-color: #64D3F5;
}

.tracks-icon {
  height: 24vw;
  width: 20vw;
}

.class p {
  padding-top: 3vh;
  font-family: 'pf-videotext';
  font-size: 1.25vw;
  font-weight: 400;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-body {
  width: 17.5%;
  height: auto;
  border-left: 0.25vw solid black;
  overflow: hidden;
} 

.right-body h1 {
  font-family: 'pf-videotext';
  font-size: 6vw;
  color: rgba(0, 0, 0, 0.5);
  transform: rotate(90deg);
  transform-origin: 0 0;
  display: inline-block;
  margin-top :2vh;
  margin-left: 4.5vw;
  font-weight:400;
}

@media (max-width: 700px){
  .tracks {
    background-color: #FFFFFF;
    height: calc(75vh + 40vw);
    border-bottom: solid 0.7vw black;
  }
  .left-body{
    padding-left: 5vw;
    padding-top: 8vh;
    width: 86vw;
    box-sizing: border-box;
  }
  .select-text h1{
    font-size: 8vw;
  }
  .select-text p{
    padding-top: 1.5vh;
    font-size: 3vw;
  }
  .difficulty{
    padding-top: 5vh;
  }
  .master{
    margin-left: 4vw;
  }
  .difficulty h1{
    font-size: 3.8vw;
  }
  .difficulty p{
    font-size: 2.5vw;
  }
  .d{
    height: 26vw;
    width: 31vw;
  }
  .icon-div{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .difficulty-icon{
    height: 20vw;
    width: 20vw;
  }
  .words{
    display: none;
  }
  .class{
    padding-top: 4.4vh;
    padding-right: 5.1vw;
  }
  .c{
    height: 30.5vw;
    width: 24vw;
  }
  .class p{
    font-size: 3.3vw;
  }
  .right-body{
    width: 14vw;
    border-left: 0.7vw solid black;
  }
  .right-body h1{
    font-size: 11.5vw;
    margin-left: 11vw;
  }

}

</style>
