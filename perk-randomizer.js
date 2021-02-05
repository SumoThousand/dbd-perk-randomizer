#!/usr/bin/env node

var obj = require("./perks/survivor-perks.json");

var survivorPerks = obj.perks;
var survivorPerkCount = survivorPerks.length - 1;
var survivorPerkSlots = 4;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomSurvivorPerk() {
  // test that this returns only one perk.
  return survivorPerks[getRandomInt(survivorPerkCount)];
}

function getRandomSurvivorPerks() {
  // test that this returns an array of 4 (survivorPerkSlots) suvivor perks.
  var perks = [];
  if (new Set(perks).length != survivorPerkSlots);
    while (perks.length != survivorPerkSlots) {
      perks.push(getRandomSurvivorPerk());
    };
  return perks;
}

function noDuplicateSurvivorPerks(perks) {
  // test no duplicates are returned in the array.
  noDuplicatePerksInObject = new Set(perks);
  perksInArray = Array.from(noDuplicatePerksInObject);
  if (perksInArray.length !== survivorPerkSlots) {
    return false
  } else {
    return perksInArray;
  }
}

function getPerks() {
  // test that 4 (survivorPerkSlots) unique perks return
  randomSurvivorPerks = getRandomSurvivorPerks()
  while (noDuplicateSurvivorPerks(randomSurvivorPerks) == false) {
    randomSurvivorPerks = getRandomSurvivorPerks();
  }
  console.log(randomSurvivorPerks.sort());
  return randomSurvivorPerks;
}

getPerks();