import { FC } from 'react';
import '../App.css';
import Puyo from './Puyo';

const Piece: FC = () => {
  const val = Math.round(Math.random());
  const flexDirection = val === 0 ? 'row' : 'column';
  return (
    <div className={`piece ${flexDirection}`}>
      <Puyo />
      <Puyo />
    </div>
  );
};

export default Piece;
