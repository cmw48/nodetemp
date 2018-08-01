var five = require("johnny-five");
var board = new five.Board();

const CYCLE_TIME = 18000000; //5 hours in ms
const STAGE_POSITIONS = [-190, 130, 66, 35, 37, 38, -116]

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

var stepCtrl = new StepperControl(
  new five.Stepper({
    type: five.Stepper.TYPE.DRIVER,
    stepsPerRev: 200,
    pins: {
      step:11,
      dir: 13
    }
  })
);

// Stepper: 0
stepCtrl

// uncomment to see raw args
console.log(argv);