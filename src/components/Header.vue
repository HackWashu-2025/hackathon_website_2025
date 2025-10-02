<script setup lang="ts"></script>

<template>
<div class="header">
  <div class="logo"></div>
  <div class="header-right">
    <a href="#about">ABOUT</a>
    <a href="#tracks">TRACKS</a>
    <a href="#sponsor">SPONSORS</a>
    <a href="#faq">FAQ</a>
    <a href="#contact">CONTACT</a>
    <a href="#apply" class="apply">APPLY</a>
  </div>
</div>
</template>

<style scoped>
.header {
  overflow: hidden;
  background-color: #C5D2CE;
  padding: 1.25vw;
  border-bottom: solid 0.25vw black;
  display: flex;
  align-items:center;
}

.header a {
  font-size: 1.5vw;
  font-family: 'pf-videotext';
  color: black;
  text-align: center;
  padding: 1.5vw 2.5vw;
  text-decoration: none;
}

.header div.logo{
  float: left;
  height: 4.5vw;
  width: 4.5vw;
  margin-left:10vw;
  margin-right:15vw;
  background-color: gray;
}

.header a:hover {
  text-decoration: underline;
  transition: ease-in 0.5s;
}

.header a.apply {
  background-color: #64D3F5;
  border: 0.2em solid black;
  margin-left: 1.5vw;
  padding: 1vw 2vw;
}

.header-right {
  float: right;
  display: flex;
  align-items: center;
}

</style>