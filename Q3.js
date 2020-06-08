// Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

let rgbToHex = ((a, b, c) => {
  let arr = [a.toString(16), b.toString(16), c.toString(16)];
  let hex = arr.map(v => {
    return v.length === 1 ? '0' + v : v;
  });
  return '#' + hex.join('');
});

let hexToRgb = (hex => {
  let arr = hex.match(/.{2}/g); //.match results in an array with the regex elements
  if (hex.includes('#')) {
    alert('Please insert HEX color without the # sign!')
  } else {
      let rgb = arr.map(e => parseInt(e, 16));
      return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }
});

function finalConverter() {
  if (arguments.length > 1) {
    return rgbToHex(arguments[0], arguments[1], arguments[2]);
  } else {
    return hexToRgb(arguments[0]);
  }
}