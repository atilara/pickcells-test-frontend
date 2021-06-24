import './style.css';

type props = {
  children: React.ReactNode;
};

const Button = ({ children }: props) => <button>{children}</button>;

export default Button;
