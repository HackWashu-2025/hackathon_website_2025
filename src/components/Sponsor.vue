<script setup lang="ts"></script>

<template>
    <div class="sponsor-parent" id="sponsor">
        <div class="left-sponsor">
            <h1>SPONSORS</h1>
        </div>
        <div class="right-sponsor">
            <img src="/src/assets/rga.png" class="rga-logo" alt="rga-logo" />
            <img src="/src/assets/roblox_logo.png" class="roblox-logo" alt="roblox-logo" />
        </div>
        <p class="sponsor-comment">These cool companies/orgs might also show up…
            - Mastercard, Anheuser-Busch, DI2, and more!
        </p>
    </div>
  
</template>

<style scoped>
.sponsor-parent{
    display: flex;
    height: 100vh;
    border-bottom: 0.5vh solid black;
    position: relative;
}
.left-sponsor{
    z-index: 2;
    position: relative;
    width: 20%;
    height: auto;
    border-right: 0.25vw solid black;
}
.left-sponsor h1{
    z-index: 2;
    position: absolute;
    font-family: 'pf-videotext';
    font-size: 6vw;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    transform: rotate(-90deg);
    transform-origin: 0 0;
    display: inline-block;
    margin-top: 60vh;
    margin-left: 15vw;
}


.right-sponsor{
    display: flex;
    width: 80%;
    height: auto;
}


.rga-logo{
    position: relative;
    left: 10vw;
    top: 10vh;
    width:18vw;
    height: 18vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.roblox-logo{
    position: relative;        
    top: 55vh;  
    left: 37vw;  
    width: 18vw;
    height: 18vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sponsor-title{
    position: absolute;
    width: 8.9vw;
    font-size: 6.3vw;
    writing-mode: vertical-lr;
    height: 100%;
    text-align: left;
    margin-top: 3.8vh;
    font-family: pf-videotext;
    opacity: 0.5;
    left: 36.5%;

}
.sponsor-comment {
    position: absolute;
    top: 90vh;  
    left: 50vw;  
    font-size: 2vw;
    font-family: 'pf-videotext', sans-serif;
    opacity: 0.6;
    color: #000;
}




@media (max-width: 700px) {
    .sponsor-parent {
        border-bottom: solid 0.7vw black;
        height: 65vh;
        background-color: #FFFFFF;
        flex-direction: column;
        align-items: center;
    }

    .left-sponsor {
        width: 100%;
        border-right: none;
        border-bottom: 0.5vw solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left-sponsor h1 {
        position: relative;
        transform: none;
        margin: 0;
        font-size: 11vw;
    }

    .right-sponsor {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-top: 4vh;
        gap: 5vh;
    }

    .rga-logo {
        width: 35vw;
        height: 35vw;
        position: relative;
        left: 0;
        top: 0;
    }

    .roblox-logo {
        width: 35vw;
        height: 35vw;
        position: relative;
        left: 0;
        top: 0;
    }
    .sponsor-comment {
    font-size: 3vw;
    bottom: 1vh;
    right: 3vw;
    }

}



</style>
