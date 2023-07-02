window.onload = function() {
    const form = document.getElementById('input-form');
    const resultContainer = document.getElementById('result-container');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const userNumber = parseInt(document.getElementById('number').value);
      const resultArray = beepBoop(userNumber);
      displayResult(resultArray);
   
    });

function beepBoop(number) {
    const result = [];
    for (let num = 0; num <= number; num++) {
      if (num.toString().includes('1')) {
        result.push('Beep!');
      } else if (num.toString().includes('2')) {
        result.push('Boop!');
      } else if (num.toString().includes('3')) {
        result.push("Won't you be my neighbor?");
      } else {
        result.push(num.toString());
      }
    }
    return result;
  }

  function displayResult(resultArray) {
    resultContainer.innerHTML = '';
    const ul = document.createElement('ul');
    resultArray.forEach(function(item) {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    resultContainer.appendChild(ul);
  }
};
