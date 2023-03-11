import './styles/index.less';

import _Grid from './Grid';
import GridItem from './GridItem';

const Grid = Object.assign(_Grid, { Item: GridItem });

export type { GridItemProps, GridProps } from './PropsType';
export { Grid };
