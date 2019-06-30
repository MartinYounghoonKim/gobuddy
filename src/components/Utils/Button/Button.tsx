import * as React from "react";

type IProps = {
  className?: string;
  element: string;
  children?: React.ReactNode;
  to: string;
  type?: 'submit' | 'reset' | 'button'; // element가 button 일 경우
};

const Button: React.FunctionComponent<IProps> & { defaultProps: Partial<IProps> } = (
  {
    to,
    element,
    children,
    className,
  }
) => {

  return (
    React.createElement(element, {
      className,
      children,
    })
  )
};

Button.defaultProps = {
  element: "button",
  type: "submit"
};

export default Button;
