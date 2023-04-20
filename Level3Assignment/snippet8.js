for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }

  //prints 5 in every 1000ms

//setTimeout function in JavaScript usually takes a callback function as an argument. A callback function is a function that is executed after another function finishes running.