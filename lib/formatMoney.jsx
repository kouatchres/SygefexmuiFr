export default function(amount) {
  // const optionsDollar = {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: 2,
  // };
  // if (amount % 100 === 0) options.minimumFractionDigits = 0;
  // const formatter = new Intl.NumberFormat('en-US', options);
  // return formatter.format(amount / 100);

  const options = {
    style: 'currency',
    currency: 'XAF',
    // minimumFractionDigits: 2,
  };

  // if its a whole, dollar amount, leave off the .00
  // if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat('fr-CM', options);
  return formatter.format(amount);
}


