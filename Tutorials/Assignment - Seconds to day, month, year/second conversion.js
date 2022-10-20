`use strict`;

function secConvert(inputSeconds) {

  if (inputSeconds > 0) {
    var seconds = inputSeconds;
    var second;
    var minute = 0;
    var hour = 0;
    var day = 0;
    var year = 0;

    do {
      if (seconds >= 31536000) {
        year++;
        seconds = seconds - 31536000;
      } else if (seconds >= 86400) {
        day++;
        seconds = seconds - 86400;
      } else if (seconds >= 3600) {
        hour++;
        seconds = seconds - 3600;
      } else if (seconds >= 60) {
        minute++;
        seconds = seconds - 60;
      } else if (seconds < 60) {
        second = seconds;
        seconds = 0;
      }
    } while (seconds > 0);
    console.log(year + " Years," + day + " Days," + hour + " Hours," + minute + " Minutes," + second + " Seconds.");
  } else if (inputSeconds == 0) {
    console.log("Now!");
  } else {
    console.log("Seconds cannot be a negative number!");
  }
}

secConvert(65498415);