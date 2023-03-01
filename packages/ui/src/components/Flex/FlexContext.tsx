import { Context, createContext } from 'react';

export type FlexContextState = {
  gutter?: [number, number];
};

const FlexContext: Context<FlexContextState> = createContext({});

export default FlexContext;
