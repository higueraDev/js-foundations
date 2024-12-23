console.log(process.env.SHELL); // /bin/bash

const { SHELL, HOMEBREW_PREFIX } = process.env;

console.table({ SHELL, HOMEBREW_PREFIX });
/*
┌─────────────────┬─────────────────┐
│ (index)         │ Values          │
├─────────────────┼─────────────────┤
│ SHELL           │ '/bin/bash'     │
│ HOMEBREW_PREFIX │ '/opt/homebrew' │
└─────────────────┴─────────────────┘
 */

const characters = ["Flash", "Superman", "Green Lantern", "Batman"];

const [_, __, , batman] = characters;

console.log(batman); // Batman
