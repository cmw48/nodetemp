var Promise = require("bluebird");
const MoveStepper = require('./app3');

"use strict";

function blvPlease() {
  
  var MoveTheDamnStepper = new MoveStepper();
   
  const CYCLE_TIME = 12000; //18000000; //5 hours in ms
  //const STAGE_POSITIONS = [-190, 130, 66, 35, 37, 38, -116];  //temp stops

  Promise.delay(12000).then(function() {
    MoveTheDamnStepper.moveStepper(-190);
    return "completed move to ~0 degrees...";
  }).delay(15000).then(function() {
    MoveTheDamnStepper.moveStepper(130);
    return "completed move to ~15 degrees...";
  }).delay(15000).then(function() {
    MoveTheDamnStepper.moveStepper(66);
    return "completed move to ~25 degrees...";
  }).delay(15000).then(function() {
    MoveTheDamnStepper.moveStepper(35);
    return "completed move to ~30 degrees...";
  }).delay(15000).then(function() {
    MoveTheDamnStepper.moveStepper(37);
    return "completed move to ~35 degrees...";
  }).delay(15000).then(function() {
    MoveTheDamnStepper.moveStepper(38);
    return "completed move to ~40 degrees...";
  }).delay(15000).then(function() {
    MoveTheDamnStepper.moveStepper(-116);
    return "completed move to ~25 degrees...";
  }).delay(15000).then(function() {
    MoveTheDamnStepper.moveStepper(130);
    return "completed move to ~15 degrees...";
  });
};




