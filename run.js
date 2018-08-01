const StepperControl = require('./StepperControl');

//var five = require("johnny-five");
//var board = new five.Board();


const CYCLE_TIME = 12000; //18000000; //5 hours in ms
const STAGE_POSITIONS = [-190, 130, 66, 35, 37, 38, -116];    //Cycle positions to move

var argv = require('yargs')
    .command('tempup', 'moves up a number of steps', function(yargs) {
      yargs.options({
        steps:  {
          demand: false,
          alias: 's',
          description: 'number of steps'
        }
      })
    })
    .command('tempdown', 'move down a number of steps', function(yargs) {
      yargs.options({
        steps:  {
          demand: false,
          alias: 's',
          description: 'number of steps -/+'
        }
      })
    })
    .command('gettemp', 'fetch current temp from ref egg', function(yargs) {
      yargs.options({
        steps:  {
          demand: false,
          alias: 'd',
          description: 'number of steps -/+'
        }
      })
    })
    .command('runbase', (yargs) => {
      yargs.options({
      });
    })
    .help('help')
    .argv;

var command = (argv._[0]);

var stepCtrl = new StepperControl();

//May try to get this in a for loop later, this will do for now
stepCtrl.moveStepper(STAGE_POSITIONS[0])
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  })
})
.then((res) => {
  return stepCtrl.moveStepper(STAGE_POSITIONS[1]);
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  })
})
.then((res) => {
  return stepCtrl.moveStepper(STAGE_POSITIONS[2]);
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  })
})
.then((res) => {
  return stepCtrl.moveStepper(STAGE_POSITIONS[3]);
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  })
})
.then((res) => {
  return stepCtrl.moveStepper(STAGE_POSITIONS[4])
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  })
})
.then((res) => {
  return stepCtrl.moveStepper(STAGE_POSITIONS[5]);
})
.then((res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, CYCLE_TIME);
  })
})
.then((res) => {
  return stepCtrl.moveStepper(STAGE_POSITIONS[6]);
})
.catch((err) => {
  console.log(err);
})