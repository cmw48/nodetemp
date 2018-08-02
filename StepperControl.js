const five = require('johnny-five');
const board = new five.Board(); 

const STEPPER_RPM = 5;

class StepperControl {

  /**
   * Move stepper a specified number of steps
   * @param steps the number of steps to move
   * @return a promise that resolves if successfully moved, and rejcts if fails
   */
  moveStepper (steps) {

    console.log(`moving ${steps}`);
    return new Promise((resolve, reject) => {
      try {
        board.on('ready', () => { 
            board.info("Board", `we are ready to move ${steps} steps!`); 
            /**
            //Move the stepper

            this.stepper.rpm(STEPPER_RPM).ccw().step(steps, () => {
              board.info("Board", `just moved ${steps} steps.`, { complete: 2 });               
              console.log(`we moved ${steps}`);
              resolve(steps);
            });
            **/ 
      });
      } catch (e) {
        console.log(`error ${e}`);
        reject(e);
     }

     try {
         board.info("Board", `about to move ${steps} steps!`);

         //Move the stepper
         this.stepper.rpm(STEPPER_RPM).ccw().step(steps, () => {
           board.info("Board", `just moved ${steps} steps.`, { complete: 2 });
           console.log(`we moved ${steps}`);
           resolve(steps);
         });
     } catch (e) {
       console.log('event error $(e)');
       reject(e);
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

    })
    
  }


  constructor() {
    board.on('ready', () => {
      this.stepper = new five.Stepper({
        type: five.Stepper.TYPE.DRIVER,
        stepsPerRev: 200,
        pins: {
          step:11,
          dir: 13
        }}); 
    })
  }

  
}

module.exports = StepperControl;
