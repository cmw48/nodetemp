// pseudocode for automated blv run

// monitor temp for outer and inner refs via mqtt
// TODO: consider monitoring all egg temps
 function gettemp(serial) {

}
//  Set initial temp (0C?) manually using dial wheel
// Let temp stabilize at that level
// we are looking at two reference temps:
// one inside the chamber but not in the zero air box - "outer" temp
// one inside the zero air box with the eggs under test - "inner" temp
// it can take ~2.5 hours for "outer" to stabilize
// once "outer" temp is stable, we see ~1 hour for "inner" temp to stabilize
// example 02:47-05:07 fpr inner stability after 10 degree move

// monitor temp for outer and inner refs via mqtt
// TODO: consider monitoring all egg temps

// all stability conditions met
// start a timer (step duration variable, default 1.5 hours)
//    if stability breaks, reset timer when stable
//    if ref eggs/eggs under test stop reporting, suspend timer until they report again
//
// once stable temp timer elapses, move to the next temp step
// dwell until all stability criteria met

//
