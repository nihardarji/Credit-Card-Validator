export const maskcardNumber = (cardNumber) => {
  return cardNumber.replace(/\d{12}(\d{4})/, "************$1");
};
