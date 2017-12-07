function getSquareForPosition(pos) {
  let square = Math.ceil(Math.sqrt(pos))

  if (square < 3) {
    return 3
  }

  if (square % 2 === 0) {
    return square + 1
  }

  return square
}

module.exports = (pos) => {
  if (pos === 1) return 0

  const square = getSquareForPosition(pos),
    bottomRight = square * square,
    sideLength = square - 1,
    distanceFromCornerToMiddle = Math.floor(sideLength / 2)

  const distanceToBottomRight = Math.abs(bottomRight - pos),
    positionQuadrant = Math.floor(distanceToBottomRight / sideLength),
    closestMiddle = bottomRight - (positionQuadrant * sideLength) - distanceFromCornerToMiddle

  return Math.abs(closestMiddle - pos) + distanceFromCornerToMiddle
}