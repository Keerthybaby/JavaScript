let calculation = localStorage.getItem('calculation') || '';

      function updateCalculation(value) {
        calculation += value;
       // console.log(calculation);
       displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      // Optional: you can also create a function in order
      // to reuse this code.
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation()
      {
        document.querySelector('.js-calculation').innerHTML=calculation;
      }