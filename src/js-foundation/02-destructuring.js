// console.log(process.env);

const { SHELL, HOMEBREW_PREFIX } = process.env;

// console.table({ SHELL, HOMEBREW_PREFIX });

const characters = ["Flash", "Superman", "Green Lantern", "Batman"];

const [_, __, , batman] = characters;

// console.log(batman);
