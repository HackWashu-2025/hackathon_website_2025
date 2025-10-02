<script setup lang="ts">
</script>

<template>
  <div class="contact" id="contact">
    <div class="left-body">
      <h1>CONTACT</h1>
    </div>
    <div class="right-body">
      <div class="right-body-content">
        <h1>SEND A CARRIER PIGEON</h1>
        <div class="contact-item">
          <a href="https://www.instagram.com/hackwashu/?hl=en"><img id="contact-insta" src="/src/assets/instagram-icon.png"></a>
          <a href="https://www.instagram.com/hackwashu/?hl=en"><p class="contact-text-2">@hackwashu</p></a>
        </div>
        <div class="contact-item">
          <a href="https://www.linkedin.com/company/hack-washu"><img id="contact-linkedin" src="/src/assets/linkedin-icon.png"></a>
          <a href="https://www.linkedin.com/company/hack-washu"><p class="contact-text-3">linkedin.com/company/hack-washu</p></a>
        </div>
        <div class="contact-item">
          <a href="mailto:hackwashu@gmail.com"><img id="contact-gmail" src="/src/assets/gmail-icon.png"></a>
          <a href="mailto:organizers@hackwashu.com"><p class="contact-text-4">hackwashu at gmail.com</p></a>
        </div>
      </div>
      <div class="p asset1"></div>
      <div class="p asset2"></div>
    </div>
  </div>
</template>

<style scoped>

.p{
  background-color: rgba(185, 163, 213, 0.5);
  z-index: 1;
  position: absolute;
}

.contact{
  display: flex;
  justify-content: space-between;
  height: 65vh;
  border-bottom: 0.25vw solid black;
}

.left-body{
  z-index: 2;
  position: relative;
  width: 24%;
  height: 100%;
  border-right: 0.25vw solid black;
}

.left-body h1{
  z-index: 2;
  font-family: 'pf-videotext';
  font-size: 6vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  transform: rotate(-90deg);
  transform-origin: 0 0;
  display: inline-block;
  margin-top: 52vh;
  margin-left: 19.5vw;
}

.right-body h1 {
  margin-left: 4.5vw;
  font-weight:400;
}


.right-body{
  display: flex;
  width: 76%;
  height: auto;
}

.right-body-content{
  height: auto;
  margin-top: 16vh;
  margin-left: 3vw;
  padding-right: 0.5vw;
}

.right-body-content h1{
  font-family: 'pf-videotext';
  font-size: 3.5vw;
  color: black;
  padding-bottom: 4vh;
  margin-left: 0;
}

.right-body-content p{
  font-family: 'open-sans';
  font-size: 1.05vw;
  padding-left: 0.25vw;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 2vh;
  margin-left: 0;
}

.contact-item img {
  width: 64px;
  height: auto;
  margin-right: 1vw;
}

.contact-item a {
  text-decoration: none;
}

.contact-item p {
  font-family: 'open-sans';
  font-size: 24px;
  font-weight: 400;
  padding-left: 1vw;
  line-height: 1.5;
  margin: 0;
  color: black;
}

.asset1{
  margin-left: 44vw;
  margin-top: 30vh;
  height: 35vh;
  width: 15vw;
}

.asset2{
  margin-left: 60vw;
  margin-top: 53vh;
  height: 12vh;
  width: 8vw;
}

@media (max-width: 768px) {
  .contact {
    background-color: #ffffff;
  }
  .contact-item img {
    width: 48px;
    height: 48px;
  }

  .contact-item p {
    font-size: 18px;
  }

  .right-body-content h1{
    font-size: 28px;
  }

  .contact-item p {
    font-size: 12px;
  }

  .asset1 {
    display: none;
  }

  .asset2 {
    display: none;
  }
}

@media (max-width: 480px) {
  .left-body h1{
    margin-top: 25vh;
    margin-left: 14vw;
    font-size: 11.5vw;
  }
  .contact{
    background-color: #ffffff;
    height: 41vh;
    border-bottom: solid 0.7vw black;
  }
  .right-body{
    border-left: solid 0.7vw black;
  }
  .right-body-content{
    margin-top: 0;
    padding-top: 6vh;
    padding-left: 8.7vw; 
    margin-left: 0;
  }
  .contact-item img {
    width: 40px;
    height: 40px;
  }

  .right-body-content h1{
    font-size: 7.1vw;
  }

  .contact-item p {
    font-size: 12px;
  }

  .asset1 {
    display: none;
  }

  .asset2 {
    display: none;
  }
}
</style>
