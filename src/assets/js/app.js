if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

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
        
//       target.closest('.range-group').querySelector('output').textContent = val
    }  

//    rangeInputs.forEach(input => {
//
//      let min = input.min
//      let max = input.max
//      let val = input.value
//      input.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'    
//      input.addEventListener('input', handleInputChange)
//    })
    
//    console.log(rangeInputs);
    for (i = 0; i < rangeInputs.length;i++){
        let input = rangeInputs[i]
        let min = input.min
          let max = input.max
          let val = input.value
          input.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'    
          input.addEventListener('input', handleInputChange)
    }
    
    $('input[type="range"]').each(function(){
        
    })
    
    const currencyInputs = document.querySelectorAll('.currency-input');
    
//    currencyInputs.forEach(input => {
//        let val = input.getAttribute("default-value")
//        Inputmask({'alias':'currency','prefix': '$','rightAlign':false}).mask(input)
//        Inputmask.setValue(input, val);
//    })
    
    for (j = 0; j < currencyInputs.length;j++){
        let val = currencyInputs[j].getAttribute("default-value")
        Inputmask({'alias':'currency','prefix': '$','rightAlign':false}).mask(currencyInputs[j])
        Inputmask.setValue(currencyInputs[j], val);
    }
    
    const currencySelects = document.querySelectorAll('.currency-select');
//    currencySelects.forEach(select => {
//        console.log(select.closest('.currency-group'))
//        console.log(select.closest('.currency-group').querySelector('.currency-input'))
//        select.addEventListener("change", function() {
//            console.log(select.closest('.currency-group'))
//        console.log(select.closest('.currency-group').querySelector('.currency-input'))
//            let parent = select.closest('.currency-group')
//            let input = parent.querySelector('.currency-input')
//            
//            if (select.value == "usd"){
//                Inputmask({'alias':'currency','prefix': '$','rightAlign':false}).mask(input)
//            } else if (select.value == "eur"){
//                Inputmask({'alias':'currency','prefix': '€','rightAlign':false}).mask(input)
//            }
//        })
//    })
    
    for (k = 0; k < currencySelects.length;k++){
        
        currencySelects[k].addEventListener("change", function(e) {
            let parent = e.target.closest('.currency-group')
            let input = parent.querySelector('.currency-input')
            
            if (e.target.value == "usd"){
                Inputmask({'alias':'currency','prefix': '$','rightAlign':false}).mask(input)
            } else if (e.target.value == "eur"){
                Inputmask({'alias':'currency','prefix': '€','rightAlign':false}).mask(input)
            }
        })
    }
});

function copy(e) {
    navigator.clipboard.writeText(e);
  }