import * as React from "react";
import { IHTMLElementChangeEvent } from "../../../@types/utils/events";

interface IProps {
  value: string;
  name: string;
  label?: string;
  type?: "text" | "password";
  onChange: (e: IHTMLElementChangeEvent) => void;
}

const FormField: React.FunctionComponent<IProps> = (
  {
    name,
    value,
    type,
    label,
    onChange
  }
) => (
  <label>
    {label && <p>{label}</p>}
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  </label>
);

FormField.defaultProps = {
  type: "text"
};

export default FormField;
