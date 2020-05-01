var newFixed = function (value, precision) {
  var length = value.length - 1;
  var decimal = value.indexOf(".");
  var finalPos = decimal + precision;
  var result = value.replace(".", "");
  var power = 1 + "0".repeat(precision);

  //.CASE 1: finalPos > length
  if (finalPos > length) {
    // add 0s based on the difference between final position and length
    result += "0".repeat(finalPos - length);
  }
  //.CASE 2: finalPos < length
  if (finalPos < length) {
    var firstHalf = result.slice(0, finalPos);
    firstHalf += ".";
    var secondHalf = result.slice(finalPos);
    var result = firstHalf.concat(secondHalf);
  }

  var final = (Math.round(result) / power).toString();
  console.log(final);
  return final;

  // Multiply up by precision, round accurately, then divide and use native toFixed():
  // return (Math.round(lib.unformat(value) * power) / power).toFixed(precision);

  //if position + multi > length -1 then p + multi - length = number of 0s to add
  // if pos + multi < length - 1 {
  // var decPos = value.indexOf('.')
  // value.replace(decPos, "")
  // var secondhalf = value.slice(multi)
  // var first half = value.slice(0,multi)
  // first half += "."
  // var result = first half.concat(secondhalf)
  //}
};
