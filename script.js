function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    // Replace with a real API endpoint for currency conversion
    const apiUrl = `https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = amount * exchangeRate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => console.error('Error:', error));
  }
  