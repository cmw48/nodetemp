const StepperControl = require('./StepperControl');

var five = require("johnny-five");
var board = new five.Board();


const CYCLE_TIME = 12000; //18000000; //5 hours in ms
const STAGE_POSITIONS = [-190, 130, 66, 35, 37, 38, -116];    //Cycle positions to move
var stepper = this.stepper = new five.Stepper({
  type: five.Stepper.TYPE.DRIVER,
  stepsPerRev: 200,
  pins: {
    step:11,
    dir: 13
  }});

board.on('ready', () => {
  //May try to get this in a for loop later, this will do for now
new Promise((resolve, reject) => {
  try {
      //Move the stepper
      stepper.rpm(STEPPER_RPM).ccw().step(STAGE_POSITIONS[0], () => {
        console.log(`moved ${steps}`);
        resolve(steps);
      });
  } catch (e) {
    reject(e);
 }
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  });
})
.then((res) => {
  return new Promise((resolve, reject) => {
    try {
        stepper.rpm(STEPPER_RPM).ccw().step(STAGE_POSITIONS[1], () => {
          console.log(`moved ${steps}`);
          resolve(steps);
        });
    } catch (e) {
      reject(e);
   }
  })
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  });
})
.then((res) => {
  return new Promise((resolve, reject) => {
    try {
        //Move the stepper
        stepper.rpm(STEPPER_RPM).ccw().step(STAGE_POSITIONS[2], () => {
          console.log(`moved ${steps}`);
          resolve(steps);
      });
    } catch (e) {
      reject(e);
   }
  })
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  });
})
.then((res) => {
  return new Promise((resolve, reject) => {
    try {
        //Move the stepper
        stepper.rpm(STEPPER_RPM).ccw().step(STAGE_POSITIONS[3], () => {
          console.log(`moved ${steps}`);
          resolve(steps);
      });
    } catch (e) {
      reject(e);
   }
  })
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  });
})
.then((res) => {
  return new Promise((resolve, reject) => {
    try {
        //Move the stepper
        stepper.rpm(STEPPER_RPM).ccw().step(STAGE_POSITIONS[4], () => {
          console.log(`moved ${steps}`);
          resolve(steps);
      });
    } catch (e) {
      reject(e);
   }
  })
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  });
})
.then((res) => {
  return new Promise((resolve, reject) => {
    try {
        //Move the stepper
        stepper.rpm(STEPPER_RPM).ccw().step(STAGE_POSITIONS[5], () => {
          console.log(`moved ${steps}`);
          resolve(steps);
        });
    } catch (e) {
      reject(e);
   }
  })
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  });
})
.then((res) => {
  return new Promise((resolve, reject) => {
    try {
        //Move the stepper
        stepper.rpm(STEPPER_RPM).ccw().step(STAGE_POSITIONS[6], () => {
          console.log(`moved ${steps}`);
          resolve(steps);
      });
    } catch (e) {
      reject(e);
   }
  })
})
.catch((err) => {
  console.log(err);
});
});
