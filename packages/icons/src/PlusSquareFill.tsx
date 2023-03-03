import React from 'react';
import IconBase, { type IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16px"
    height="16px"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
  </svg>
);

const PlusSquareFill = React.forwardRef<
  SVGSVGElement,
  Omit<IconBaseProps, 'name'>
>((props, ref) => {
  return (
    <IconBase name="PlusSquareFill" {...props} ref={ref}>
      <SvgIcon />
    </IconBase>
  );
});

export default PlusSquareFill;
