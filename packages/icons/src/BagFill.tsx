import React from 'react';
import IconBase, { type IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
  </svg>
);

const BagFill = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="BagFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default BagFill;
