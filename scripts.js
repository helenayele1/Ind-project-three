window.onload = function() {
    const form = document.getElementById('input-form');
    const resultContainer = document.getElementById('result-container');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const userNumber = parseInt(document.getElementById('number').value);
      const resultArray = beepBoop(userNumber);
      displayResult(resultArray);
    });
  
  
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
  

    function beepBoop(number) {
      const result = [];
      for (let num = 0; num <= number; num++) {
        let substitution = num.toString();
  
        if (num.toString().includes('3')) {
          substitution = "Won't you be my neighbor?";
        } else if (num.toString().includes('2')) {
          substitution = 'Boop!';
        } else if (num.toString().includes('1')) {
          substitution = 'Beep!';
        }
  
        result.push(substitution);
      }
      return result;
    }
