import { ref } from 'vue';

export const formattedCashTendered = ref('');

export const handleInput = (event:any) => {
  let inputValue = event.target.value.replace(/[^\d.]/g, ''); // Remove non-numeric, non-dot characters
  const decimalSeparator = (1.1).toLocaleString().substring(1, 2); // Determine the decimal separator based on system locale

  // If decimalSeparator is a comma, replace all dots with empty string
  if (decimalSeparator === ',') {
    inputValue = inputValue.replace(/\./g, '');
  }

  // Add commas for thousand separators
  const parts = inputValue.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const formattedValue = parts.join(decimalSeparator);

  formattedCashTendered.value = formattedValue;
};

export const currencyFormat = (number: any) => {
  return number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const qtyFormat = (number: any) => {
  return number.toLocaleString(undefined);
};
