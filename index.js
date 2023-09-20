// Define a const variable
const initialValue = 0;
const NationalValue = 0;

// Get references to the input field and the button
const inputField = document.getElementById('text1');
const inputNtional = document.getElementById('text2');
const addButton = document.getElementById('btn1');

const idEfk = document.getElementById('efk');

function clearResults() {
  // Clear the contents of the result container
  idEfk.innerHTML = '';
}

// Event listener for the button click
addButton.addEventListener('click', function () {
  clearResults();

  // Get the value from the input field
  const inputValue = inputField.value;
  const inputValueNational = inputNtional.value;

  // Convert the input value to a number (if needed)
  const numericValue = parseFloat(inputValue);
  const numericValueNational = parseInt(inputValueNational);

  // Check if the conversion was successful
  if (!isNaN(numericValue) && !isNaN(numericValueNational)) {
    // Add the numeric value to the const variable
    const result = initialValue + numericValue;
    const national = NationalValue + numericValueNational;

    // Update the const variable (this is not typically done with const, but for demonstration purposes)
    // In reality, you might want to use let or var instead of const to allow variable reassignment.
    // const initialValue = result;

    // Display the result

    let efk = 0;

    if (national === 1300) {
      efk = result * 0;
    } else if (national === 1312) {
      efk = result * 24.5;
    } else if (national === 1314) {
      efk = result * 12.25;
    } else if (national === 1316) {
      efk = result * 1.02;
    } else if (national === 1320) {
      efk = result * 0.51;
    } else if (national === 1360) {
      efk = result * 0.2;
    }

    const eteppaa = efk * 0.04;
    const tx = eteppaa * 0.02;
    const oga = tx * 0.2;
    const synoloEfk = efk + tx + oga;
    // const roundedNumber = (number) => {
    //     const x = Math.round(number * 100) / 100;
    //     return x.toFixed(3);
    // }

    function adElement(item, text, dutyItem) {
      item = document.createElement(item);
      item.innerText = text + ' = ' + dutyItem;
      item.style.color = 'blue';
      item.style.padding = 'none';
      idEfk.appendChild(item);
    }

    const textLa = adElement('p', 'ΜΕΦΚ', result.toFixed(3));
    const textEfk = adElement('p', 'ΕΦΚ', efk.toFixed(2));
    const textEteppaa = adElement('p', 'ΕΤΕΠΠΑΑ', eteppaa.toFixed(2));
    const textTx = adElement('p', 'ΤΧ', tx.toFixed(2));
    const textOga = adElement('p', 'ΟΓΑ', oga.toFixed(2));
    const textSynoloEfk = adElement('h2', 'ΣΥΝΟΛΟ ΕΦΚ', synoloEfk.toFixed(2));

    // console.log('Updated const variable:', result);
  } else {
    alert('Invalid input. Please enter a numeric value.');
  }
});

const refreshButton = document.getElementById('btn2');

refreshButton.addEventListener('click', function () {
  location.reload(); // Reloads the current page
});
