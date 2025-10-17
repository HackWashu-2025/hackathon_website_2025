<template>
  <div class="faq" id="faq">
      <h1 class="title">FREQUENTLY ASKED QUESTIONS</h1>
      <div class="faq-wrapper">
        <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
          <h2 class="question">{{ item.question }}</h2>
          <p class="answer">{{ item.answer }}</p>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      faqItems: [
        {
          question: "WHAT IS A HACK-A-THON?",
          answer: "A hackathon is an invention marathon where students build software that fits in to event chosen categories. At Hack WashU, you can look forward to amazing prizes, engaging speakers, and tons of skilled mentors!"
        },
        // {
        //   question: "WHO CAN ATTEND?",
        //   answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        // },
        {
          question: "IS WASHU HACKATHON IN-PERSON?",
          answer: "Hack WashU will be in person. Please plan to be in St. Louis, MO for the whole weekend."
        },
        {
          question: "IS WASHU HACKATHON FREE?",
          answer: "YES!!! It's not just free, it rewards you! You will be able to collect swag, partake in workshops and speaker sessions, work with mentors, network with our sponsors, and more!"
        },
        {
          question: "I CAN'T CODE, SHOULD I STILL COME?",
          answer: "YES!!! Hack WashU will be an inclusive event for all. There will be plenty of other introductory hackers just like you and it's a great opportunity to learn."
        },
        {
          question: "I HAVE MORE QUESTIONS!!",
          answer: "Feel free to reach out to us at organizer@hackwashu.com!"
        }
      ]
    };
  }
};
</script>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  border-bottom: 0.25vw solid black;
  width: 100vw;
}

.title {
  font-size: 3.175vw;
  font-weight: 400;
  font-family: 'pf-videotext';
  text-align: center;
  margin: 4rem 0;
}

.faq-wrapper {
  max-width: 600px;
  width: 100%;
  margin-bottom: 1.5rem;
}

.faq-item {
  margin-bottom: 1.5rem;
  text-align: left;
}

.question {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'pf-videotext';
  text-align: left;
  line-height: 1.5;
  font-weight: 400;

}

.answer {
  font-size: 1rem;
  text-align: left;
  line-height: 1.5;
}

@media (max-width: 700px) {
  .faq{
    background-color: #FFFFFF;
    padding: 0;
    border-bottom: solid 0.7vw black;
  }
  .title {
    font-size: 1.5rem;
    margin-left: 0;
    width: 77vw;
    max-width: 400px;
    font-size:  8vw;
  }

  .faq-wrapper {
    max-width: 400px;
    width: 77vw;
  }

  .question {
    font-size: 5vw;
  }

  .answer {
    font-size: 0.875rem;
  }
}
</style>

