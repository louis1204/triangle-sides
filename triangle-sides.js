function getTriangleType (s1, s2, s3) {
  if (!isPosNum(s1) || !isPosNum(s2) || !isPosNum(s3)) {
    return '';
  }
  if (s1 === s2 && s1 === s3) {
    return 'equilateral';
  }
  if (s1 === s2 || s1 === s3) {
    return 'isosceles';
  }
  return 'scalene';
}

function isPosNum(n) {
  return n && !isNaN(parseFloat(n)) && isFinite(n) && n > 0;
}
