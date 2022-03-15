import React from "react";

const CustomToggle = React.forwardRef(
  (props: any, ref: React.Ref<HTMLAnchorElement>) => (
    <span
      tabIndex={1}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </span>
  )
);

export default CustomToggle;
