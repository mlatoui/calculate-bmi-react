export const verifyInput = (height, weight) => {
  const parsedHeight = parseInt(height);
  const parsedWeight = parseInt(weight);

  if (height.trim() === '' || weight.trim() === '') {
    alert('Please fill all inputs!');
    return false;
  }

  if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
    alert('Height and Weight should be a number');
    return false;
  }

  if (parsedHeight <= 0 || parsedWeight <= 0) {
    alert('Height and Weight should be grater than 0');
    return false;
  }
  return true;
};

export const calculateBmi = (height, weight) => {
  const heightInMeters = height / 100;
  return (weight / (heightInMeters * heightInMeters)).toFixed(2);
};
