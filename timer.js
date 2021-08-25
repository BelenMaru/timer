// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments

const timer = process.argv.slice(2);

const clock = function(timer) {
  if (timer.length === 0) {
  return console.log("wake me up now :)!" );
  } else {
    for ( let i = 0; i < timer.length; i++) {
      if (timer[i] >= 0 && !isNaN(timer[i])) {
        let delay = Number(timer[i] * 1000);
        setTimeout(() => process.stout.write("\x07"), delay);
       
      }
    }
  }
}; 
clock(timer);

