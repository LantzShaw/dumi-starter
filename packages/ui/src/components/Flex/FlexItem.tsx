import classNames from 'classnames';
import React, {
  useContext,
  type CSSProperties,
  type FC,
  type ReactElement,
} from 'react';

import FlexContext from './FlexContext';

import { FlexItemProps } from './Flex.d';

const FlexItem: FC<FlexItemProps> = (props): ReactElement => {
  const { style, className, children } = props;

  const { gutter } = useContext(FlexContext);

  const styles: CSSProperties = gutter
    ? {
        ...(gutter[0]! > 0
          ? {
              paddingLeft: gutter[0]! / 2,
              paddingRight: gutter[0]! / 2,
            }
          : {}),
        ...(gutter[1]! > 0
          ? {
              paddingTop: gutter[1]! / 2,
              paddingBottom: gutter[1]! / 2,
            }
          : {}),
        ...style,
      }
    : { ...style };

  const classes = classNames(className);

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );

  // NOTE: FlexContext.Consumer 写法
  // return (
  //   <FlexContext.Consumer>
  //     {({ gutter }) => {
  //       return (
  //         <>
  //           <div>gutter</div>
  //         </>
  //       );
  //     }}
  //   </FlexContext.Consumer>
  // );
};

export default FlexItem;
