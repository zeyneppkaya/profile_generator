const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileQuestions =
{ name: "What's your name? Nicknames are also acceptable :) ",
  hobby: "What's an activity you like doing? ",
  music: "What do you listen to while doing that? ",
  meal: "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  food: "What's your favourite thing to eat for that meal? ",
  sport: "Which sport is your absolute favourite? ",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at! "
};

const profileAnswers = {};

rl.question(`${profileQuestions.name}`, (name) => {
  profileAnswers.name = name;
  rl.question(`${profileQuestions.hobby}`, (hobby) => {
    profileAnswers.hobby = hobby;
    rl.question(`${profileQuestions.music}`, (music) => {
      profileAnswers.music = music;
      rl.question(`${profileQuestions.meal}`, (meal) => {
        profileAnswers.meal = meal;
        rl.question(`${profileQuestions.food}`, (food) => {
          profileAnswers.food = food;
          rl.question(`${profileQuestions.sport}`, (sport) => {
            profileAnswers.sport = sport;
            rl.question(`${profileQuestions.superpower}`, (superpower) => {
              profileAnswers.superpower = superpower;
              rl.close();

              console.log(name + " loves listening to " + music + " while " + hobby + ", devouring " + food + " for " + meal + 
              ", prefers " + sport + " over any other sport, and is amazing at " + superpower + ".");
            });
          });
        });
      });
    });
  });
});

