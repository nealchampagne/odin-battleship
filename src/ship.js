export const Ship = size => {

  const name = size => {
    if (size === 5) return 'carrier';
    if (size === 4) return 'battleship';
    if (size === 3) return 'cruiser';
    if (size === 2) return 'submarine';
    if (size === 1) return 'patrol';
  }

  let hitCount = 0;

  const hit = () => {
    hitCount++;
  }

  const isSunk = () => {
    return hitCount === size ? true : false;
  }

  return { name, hit, hitCount, isSunk }
};