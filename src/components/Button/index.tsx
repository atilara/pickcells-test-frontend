import './style.css';

type AppProps = {
  content: string;
};

const Button = ({ content }: AppProps) => <button>{content}</button>;

export default Button;
