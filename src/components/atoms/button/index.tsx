import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { StyledButton } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: PropsWithChildren<IButton>): React.ReactElement => (
  <StyledButton {...props}>{children}</StyledButton>
)