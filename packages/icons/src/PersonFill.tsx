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
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

const PersonFill = React.forwardRef<SVGSVGElement, Omit<IconBaseProps, 'name'>>(
  (props, ref) => {
    return (
      <IconBase name="PersonFill" {...props} ref={ref}>
        <SvgIcon />
      </IconBase>
    );
  },
);

export default PersonFill;
