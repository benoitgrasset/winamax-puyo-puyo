import { FC } from 'react';
import '../App.css';
import { colors } from '../utils';

const nbColors = Object.values(colors).length;

export type Value = keyof typeof colors;

const Puyo: FC = () => {
  const index = Math.floor(Math.random() * nbColors);
  const values = Object.keys(colors) as Value[];
  const value = values[index];
  const color = colors[value];

  return (
    <div className="puyo" style={{ background: color }} id={index.toString()}>
      {value}
    </div>
  );
};

export default Puyo;
