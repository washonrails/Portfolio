let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('texto');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  console.log(value);
  stars.style.left = value * 0.25 +'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 2 + 'px';
  text.style.marginTop = value + 4 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';

});
console.log(window.scrollY);

consoleText(['I\'M A WEB DEVELOPER','Visit my Github',], 'text',['lightsalmon']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

/*Animations */


// window.addEventListener('beforeunload', (e) => {
//     let confirmation = prompt('');

//     e.returnValue = confirmation;
//     return confirmation;
// });

// function([string1, string2],target id,[color1,color2])