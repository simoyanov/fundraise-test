$( document ).ready(function() {
    console.log( "ready!" );

const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}  

rangeInputs.forEach(input => {
    
  let min = input.min
  let max = input.max
  let val = input.value
  input.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'    
  input.addEventListener('input', handleInputChange)
})

    
});

function copy(e) {
    navigator.clipboard.writeText(e);
  }