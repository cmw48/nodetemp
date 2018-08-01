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
          //Move the stepper
          this.stepper.rpm(STEPPER_RPM).ccw().step(steps, () => {
            console.log(`moved ${steps}`);
            resolve(steps);
          });
        });
      } catch (e) {
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