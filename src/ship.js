export const Ship = name => {

  const getSize = name => {
    if (name === 'carrier') return 5;
    if (name === 'battleship') return 4;
    if (name === 'cruiser') return 3;
    if (name === 'submarine') return 3;
    if (name === 'destroyer') return 2;
  }

  const size = getSize(name);

  let hitCount = 0;

  const hit = () => {
    hitCount++;
  }

  const isSunk = () => {
    return hitCount === size ? [name, size] : false;
  }

  return { name,
          size,
          hit,
          isSunk }
};