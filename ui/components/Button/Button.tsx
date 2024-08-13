
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes, FC } from 'react';
import { AuthButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
};

const Button: FC<ButtonProps> = ({
  className,
  children,
  isLoading,
  ...props
}) => {
  return (
    <AuthButton
      className={className}
      disabled={isLoading}
      {...props}>
      {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}
    </AuthButton>
  )
};

export default Button;


interface PersonInterface {
  age: number
  name: string
  job?: boolean
}

const Person: PersonInterface = {
  age: 14,
  name: 'John'
}