import { InputHTMLAttributes, PropsWithChildren } from "react";
import { InputLabel, StyledInput } from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  label: string
}

export const Input = ({ children, label, ...props }: PropsWithChildren<IInput>): React.ReactElement => (
 <InputLabel>
    <label htmlFor={label}>{label}</label>
    <StyledInput id={label} {...props} />
 </InputLabel>
)