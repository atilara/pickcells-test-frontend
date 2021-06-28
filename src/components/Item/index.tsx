import './style.css';

type props = {
  children: React.ReactNode;
};

const Item = ({ children }: props) => {
  return <div id="item">{children}</div>;
};

export default Item;
