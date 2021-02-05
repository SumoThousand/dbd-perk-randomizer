#!/usr/bin/env node

var perksObject = require("./perks.json");

var perks;
var myArgs = process.argv.slice(2);
var perkSlots = 4;

switch (myArgs[0]) {
  case 'survivor':
    perks = perksObject["survivor"];
    break;
  case 'killer':
    perks = perksObject["killer"];
    break;
  default:
    console.log("please add either survivor or killer as the argument");
    process.exit(1);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomPerk() {
  var perkCount = perks.length - 1;
  return perks[getRandomInt(perkCount)];
}

function getRandomPerks() {
  var perks = [];
  if (new Set(perks).length != perkSlots);
    while (perks.length != perkSlots) {
      perks.push(getRandomPerk());
    };
  return perks;
}

function noDuplicatePerks(perks) {
  noDuplicatePerksInObject = new Set(perks);
  perksInArray = Array.from(noDuplicatePerksInObject);
  if (perksInArray.length !== perkSlots) {
    return false
  } else {
    return perksInArray;
  }
}

function getPerks() {
  randomPerks = getRandomPerks()
  while (noDuplicatePerks(randomPerks) == false) {
    randomPerks = getRandomPerks();
  }
  console.log(randomPerks.sort());
  return randomPerks;
}

getPerks();