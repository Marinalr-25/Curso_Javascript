export const turboLooger = (message, textColor = 'Blue') => {
  const textStyle = `color: ${textColor} `;
  console.log(`%c${message}`, textStyle);
};

console.log('teste');
