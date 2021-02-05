#!/usr/bin/env node

var survivorPerksObject = require("./perks/survivor-perks.json");
var killerPerksObject = require("./perks/killer-perks.json")

var perks;
var myArgs = process.argv.slice(2);
var perkSlots = 4;

switch (myArgs[0]) {
  case 'survivor':
    perks = survivorPerksObject.perks;
    break;
  case 'killer':
    perks = killerPerksObject.perks;
    break;
  default:
    console.log("please add either survivor or killer as the argument");
    process.exit(1);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomPerk() {
  // test that this returns only one perk.
  var perkCount = perks.length - 1;
  return perks[getRandomInt(perkCount)];
}

function getRandomPerks() {
  // test that this returns an array of 4 (perkSlots) perks.
  var perks = [];
  if (new Set(perks).length != perkSlots);
    while (perks.length != perkSlots) {
      perks.push(getRandomPerk());
    };
  return perks;
}

function noDuplicatePerks(perks) {
  // test no duplicates are returned in the array.
  noDuplicatePerksInObject = new Set(perks);
  perksInArray = Array.from(noDuplicatePerksInObject);
  if (perksInArray.length !== perkSlots) {
    return false
  } else {
    return perksInArray;
  }
}

function getPerks() {
  // test that 4 (perkSlots) unique perks return
  randomPerks = getRandomPerks()
  while (noDuplicatePerks(randomPerks) == false) {
    randomPerks = getRandomPerks();
  }
  console.log(randomPerks.sort());
  return randomPerks;
}

getPerks();