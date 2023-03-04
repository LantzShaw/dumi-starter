import { Context, createContext } from 'react';

type GridContextState = {
  gutter?: [number, number];
};

const GridContext: Context<GridContextState> = createContext({});

export default GridContext;
