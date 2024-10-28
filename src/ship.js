export const Ship = name => {

  // Determine ship size based on the provided ship name
  const getSize = name => {
    if (name === 'carrier') return 5;
    if (name === 'battleship') return 4;
    if (name === 'cruiser') return 3;
    if (name === 'submarine') return 3;
    if (name === 'destroyer') return 2;
  }

  const size = getSize(name);

  // Counter for number of hits the ship has taken
  let hitCount = 0;

  // Increment the ship's hit count on hit
  const hit = () => {
    hitCount++;
  }

  // Check if the ship is sunk based on number of hits taken
  const isSunk = () => {
    return hitCount === size ? [name, size] : false;
  }

  return { name,
          size,
          hit,
          isSunk }
};