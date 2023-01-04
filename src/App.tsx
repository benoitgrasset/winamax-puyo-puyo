import { produce } from 'immer';
import { FC, useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import { Value } from './components/Puyo';

const INTERVAL = 50;
const NB_ROWS = 12;
const NB_COLS = 6;

const keys = {
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  space: ' ',
};

export type GridType = { active: boolean; value: Value | undefined }[][];

let grid_init: GridType = [];
for (let i = 0; i < NB_ROWS; i++) {
  grid_init[i] = [];
  for (let j = 0; j < NB_COLS; j++) {
    grid_init[i][j] = { active: false, value: undefined };
  }
}

grid_init[0][1].value = 'A';
grid_init[0][1].active = true;

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState(grid_init);

  const score = 0;

  const handleNext = () => {};

  const handleMoveDown = () => {
    const newGrid = produce(grid, (gridCopy) => {
      for (let i = 0; i < NB_ROWS; i++) {
        for (let j = 0; j < NB_COLS; j++) {
          if (gridCopy[i][j].active) {
            const value = gridCopy[i][j].value;
            gridCopy[i][j] = { active: false, value: undefined };
            gridCopy[i + 1][j] = { active: true, value };
            break;
          }
        }
      }
    });
    setGrid(newGrid);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case keys.down:
        handleMoveDown();
        break;
      case keys.left:
        console.log('left');
        break;
      case keys.right:
        console.log('right');
        break;
      case keys.space:
        console.log('space');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClockwise = () => {};

  const handleCouterClockwise = () => {};

  useEffect(() => {
    const timeoutHandler = () => {
      handleNext();
    };
    const interval = setInterval(timeoutHandler, INTERVAL);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="App">
      <h1>Puyo Puyo</h1>
      <div>Score {score}</div>
      <button onClick={handleClockwise}>horaire</button>
      <button onClick={handleCouterClockwise}>anti horaire</button>

      <div className="container">
        <Grid grid={grid} />
      </div>
    </div>
  );
};

export default App;
