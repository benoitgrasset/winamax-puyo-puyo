import { FC } from 'react';
import { GridType } from '../App';
import '../App.css';
import { colors } from '../utils';

type Props = {
  grid: GridType;
};

const Grid: FC<Props> = ({ grid }) => {
  return (
    <div className="column">
      {grid.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="row">
          {row.map((col, colIndex) => {
            const { value, active } = col;
            return (
              <div
                key={`col-${colIndex}`}
                className="cell"
                style={{ background: value && colors[value] }}
                data-active={active}
              >{`${rowIndex}-${colIndex}`}</div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
