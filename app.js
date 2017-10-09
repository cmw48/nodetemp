var five = require("johnny-five");
var board = new five.Board();

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
    .help('help')
    .argv;

var command = (argv._[0]);

// uncomment to see raw args
console.log(argv);


function moveStepper (steps){
  console.log("about to move " + steps + " steps.");
  try {
    board.on("ready", function() {
    console.log("Ready.");

    var stepper = new five.Stepper({
      type: five.Stepper.TYPE.DRIVER,
      stepsPerRev: 200,
      pins: {
        step:11,
        dir: 13
      }
    });
    stepper.rpm(5).ccw().step(steps, function() {
      console.log("Done moving " + steps + " steps.");
    });
    });
  } catch (e) {
  console.log('Something went wrong-- could not move stepper.');
  console.log(e.message);
 }
}

if (command === 'tempup' || command === 'tempdown') {
  try {
    var steps = argv.steps;
    if (!steps) {
      console.log("Please provide number of steps.");
    } else {
      if (command === 'tempdown') {
        steps = steps*-1;
      }
      moveStepper(steps);
    }
  } catch (e) {
    console.log('Something went wrong-- could not move stepper.');
    console.log(e.message);
  }

} else {
  console.log('no command.');
}
