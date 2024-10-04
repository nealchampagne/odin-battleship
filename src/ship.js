export const Ship = size => {

  const getName = size => {
    if (size === 5) return 'carrier';
    if (size === 4) return 'battleship';
    if (size === 3) return 'cruiser';
    if (size === 2) return 'destroyer';
    if (size === 1) return 'patrol';
  }

  const name = getName(size);

  let hitCount = 0;

  const hit = () => {
    hitCount++;
  }

  const isSunk = () => {
    return hitCount === size ? true : false;
  }

  return { name,
          size,
          hit,
          isSunk }
};