
// create a variable called circle and set it equal to the circle element we find in our html
var circle = document.querySelector('circle');
/* create a variable called radius and set it equal to the defined circle variable above with the radius (r) 
pointing at the baseVal */
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

/* we create a const named input equal to the document's input */
const input = document.querySelector('input');
// we pass in our function the value we've gathered from the input value
setProgress(input.value);

input.addEventListener('change', function(e) {
  if (input.value < 101 && input.value > -1) {
    setProgress(input.value);
  }  
})


