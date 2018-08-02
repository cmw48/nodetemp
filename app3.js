var five = require("johnny-five");
var board = new five.Board();
"use strict";

class MoveStepper(steps) {

  try {

    board.on("ready", function() {
    console.log("Ready.");
    board.info("Board", `we are ready to initiate a blv run.`);

    var stepper = new five.Stepper({
      type: five.Stepper.TYPE.DRIVER,
      stepsPerRev: 200,
      pins: {
        step:11,
        dir: 13
      }
    });
 
    stepper.rpm(5).ccw().step(steps,function() {
        board.info("Board", `we are ready to move ${steps} steps!`);
      });
 
   });
  } catch (e) {
  console.log('Something went wrong-- could not move stepper.');
  console.log(e.message);
 }

  try {
     board.on("info", function(event) {
        /*
          Event {
            type: "info"|"warn"|"fail",
            timestamp: Time of event in milliseconds,
            class: name of relevant component class,
            message: message [+ ...detail]
          }
        */
       if (typeof event.data !== 'undefined' && event.data) {
         console.log("%s sent an 'info' message: %s - complete %s", event.class, event.message, event.data[0]);
         resolve(event.data[0]);
       } else {
        console.log("%s sent an 'info' message: %s - no data", event.class, event.message);
       };
     });

   } catch (e) {
     console.log('event error $(e)');
     reject(e);
   }

};

module.exports = MoveStepper;
