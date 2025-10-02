<script setup lang="ts"></script>

<template>
    <div class="sponsor-parent" id="sponsor">
        <div class="left-sponsor">
            <div class="star-sponsor-img"></div>
            <div class="star-title">STAR</div>
            <img src="/src/assets/mastercard.png" class="rga-logo" alt="rga-logo" />

        </div>
        <div class="right-sponsor">
            <div class="sponsor-title">SPONSORS</div>
            <div class="celestial-title">CELESTIAL</div>
            <img src="/src/assets/ab-tech-smaller.png" class="ab-tech-logo" alt="ab-tech-logo" />
            <img src="/src/assets/rga.png" class="mastercard-logo" alt="mastercard-logo" />
        </div>
    </div>
    
</template>

<style scoped>
.sponsor-parent{
    display: flex;
    height: 100vh;
    border-bottom: 0.5vh solid black;
}
.left-sponsor{
    flex: 38%;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 20vh
}

.right-sponsor{
    border-left: 0.25vw solid black;
    flex: 62%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.star-sponsor-img{
    height: 22vh;
    width: 15vw;
    margin-left: 1.5vw;
    margin-top: 4.4vh;
    background-color: rgb(195, 163, 226);
    display: none;
}

.star-title{
    font-size: 3.5vw;
    margin-top: 4vh;
    margin-bottom: 1vw;
    font-family: pf-videotext;
    justify-content: center;
    text-align: center;
}

.star-sponsor-list{
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    text-align: left;
    margin-left: 1.5vw;
    margin-top: 5.8vh;


}

.rga-logo{
    width: 15vw;
    height: 15vw;
    display: flex;
    align-self: center;
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

.celestial-sponsors{
    display: flex;
    flex-direction: column;
}

.celestial-title{
    font-size: 3.5vw;
    margin-top: 4vh;
    font-family: pf-videotext;
    text-align: center;
    width: 100%;
}

.ab-tech-logo{
    position: relative;
    left: 7vw;
    width: 50vw;
    height: 28vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mastercard-logo{
    position: relative;
    left: 7vw;
    bottom: 10vh;
    width:25vw;
    height: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
}

.sponsor-list{
    display: grid;
    grid-template-columns: auto;
    width: 100%;
    height: 90%;
    text-align: left;
    align-items: center;
    justify-content: center;
    margin-top: 3vh;
    font-family: open-sans;
    font-size: 1vw;
}

@media (max-width: 700px) {
    .sponsor-parent{
        border-bottom: solid 0.7vw black;
        height: 65vh;
        background-color: #FFFFFF;
    }
    .star-sponsor-img{
        display: none;
    }
    .star-title{
        font-size: 7vw;
    }
    .rga-logo{
        width: 30vw;
        height: 30vw;
    }
    .right-sponsor{
        border-left: solid 0.7vw black;
        padding-right: 0.1vw;
    }
    .sponsor-title{
        left: 38%;
        font-size: 11.5vw;
    }
    .celestial-title{
        font-size: 7vw;
        margin-top: 8vh;
    }
    .ab-tech-logo{
        width: 55vw;
        height: 34vw;
        left: 6vw;
        top: 7vh;
    }
    .mastercard-logo{
        width: 45vw;
        height: 45vw;
        top: 10vh;
        left: 0vh;
    }
}


</style>
