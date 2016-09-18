// (function() {
  var previous = d3.select("#previous"),
      current = d3.select("#current"),
      next = d3.select("#next"),
      query = "?" + Date.now(),
      previousIndex,
      currentIndex = +location.hash.substring(1) || 0,
      nextIndex,
	  twoDim = 0;

  resize();
  step(0);

  d3.selectAll("iframe").on("load", function() {
    this.contentWindow.focus();
    d3.select(this.contentWindow).on("keydown", function() {
      switch (d3.event.keyCode) {
        case 39: // right arrow
        case 32: // space
        case 34: { // page down
          sendSubstep();
          // step(+1);
          break;
        }
        case 8: { // delete
          step(d3.event.shiftKey ? +1 : -1);
          break;
        }
        case 37: // left arrow
        case 33: { // page up
          step(-1);
          break;
        }
        case 78: { // n
          step(+1);
          break;
        }
		case 72:
        case 36: { // home
          currentIndex = 0;
          step(0);
          break;
        }
		case 38: { // up arrow
//		  next = next.attr("id", "twoDim");// twoDim;
		  currentIndex = twoDim;
          step(0);
          break;
        }
		case 40: { // down arrow
		  twoDim = currentIndex; // current;
          currentIndex = 3;
          step(0);
          break;
        }
        case 83: { // s
          sendSubstep();
          break;
        }
        case 84: { // t
          currentIndex = slides.length - 1;
          step(0);
          break;
        }
        case 67: { // c
          toggleCode();
          break;
        }
        case 35: { // end
          currentIndex = slides.length - 1;
          step(0);
          break;
        }
        default: return;
      }
      d3.event.preventDefault();
    });
  });

  d3.select(window).on("resize", resize).on("hashchange", function hashchange() {
    var that = d3.select(this).on("hashchange", null);
    currentIndex = +location.hash.substring(1);
    step(0);
    that.on("hashchange", hashchange);
  });

  function resize() {
    d3.select("body").style("margin-top", (window.innerHeight - 800) / 3 + "px");
  }


  function sendSubstep() {
    var message = {'type':'substep'}
    document.getElementById('current').contentWindow.postMessage(message,'*')
  }

  function receiveMessage(e) {
    // console.log(e);
      switch (e.type) {
        case 'next': { 
          step(+1);
          break;
        }
        default: return;
      }
  }

  // window.onmessage = receiveMessage;

  function toggleCode() {
    var message = {'type':'code'}
    document.getElementById('current').contentWindow.postMessage(message,'*')
  }

  function updateSubSteps(iframe) {
    var message = {'type':'substep'}
    // iframe[0][0].contentWindow.postMessage(message, '*');
  }

  function step(delta) {
    var curr = document.getElementById('current').substeps;
    console.log(curr);
    // console.log('step');
    // var done = substep();
    // if (!done) {
    //   return;
    // }
    if (delta > 0) {
      var temp = previous;
      previousIndex = currentIndex;
      previous = current.attr("id", "previous");
      currentIndex = nextIndex;
      current = next.attr("id", "current");
      nextIndex = nextIndex >= slides.length - 1 ? 0 : nextIndex + 1;
      next = temp.attr("id", "next");
      // updateSubSteps(current);
    } else if (delta < 0) {
      var temp = next;
      nextIndex = currentIndex;
      next = current.attr("id", "next");
      currentIndex = previousIndex;
      current = previous.attr("id", "current");
      // updateSubSteps();
      previousIndex = previousIndex <= 0 ? slides.length - 1 : previousIndex - 1;
      previous = temp.attr("id", "previous");
    } else {
      nextIndex = currentIndex >= slides.length - 1 ? 0 : currentIndex + 1;
      previousIndex = currentIndex <= 0 ? slides.length - 1 : currentIndex - 1;
    }
    location.hash = currentIndex;
    previous.transition().delay(750).duration(0).attr("src", slides[previousIndex] + query);
    current.transition().delay(250).duration(0).attr("src", slides[currentIndex] + query);
    next.transition().delay(750).duration(0).attr("src", slides[nextIndex] + query);
  }
// })();
