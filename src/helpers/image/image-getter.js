import imageData from "./image-data";

const getImage = (code) => {
  const stringCode = `${code}`;
  const stringArray = stringCode.split('');
  let weatherName = '';

  if (stringArray[0] === '2') {
    weatherName = 'thunderstorm';
  } else if (stringArray[0] === '3') {
    weatherName = 'drizzle';  
  } else if (stringArray[0] === '5') {
    weatherName = 'rain';  
  } else if (stringArray[0] === '6') {
    weatherName = 'snow';
  } else if (stringArray[0] === '7') {
    weatherName = 'clouds';
  } else if (stringArray[0] === '8') {
    if (stringArray[2] === '0') {
      weatherName = 'clear';
    } else {
      weatherName = 'clouds';
    }
  } else {
    weatherName = 'clear';
  }

  const selectedImageData = imageData.find(image => image.name === weatherName);
  
  return selectedImageData.image;
};

export default getImage;