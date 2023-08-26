const repeatString = function (word, times) {
  let i = 0;
  let message = "";

  if (times < 0) {
    message = "ERROR";
  } else {
    for (i = 0; i < times; i++) {
      message += word;
    }
  }

  return message;
};

// Do not edit below this line
module.exports = repeatString;
