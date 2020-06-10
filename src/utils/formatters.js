export const formatCurrency = amount => {
    const formatter = new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 2
    });
  
    return formatter.format(amount);
  };