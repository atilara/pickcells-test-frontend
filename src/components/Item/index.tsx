import './style.css';

type props = {
  name: string;
  type?: number;
};

const Item = ({ name, type = 3 }: props) => {
  return (
    <div id="item">
      <h3>{name}</h3>
      <p>
        {type === 0
          ? 'Graduação'
          : type === 1
          ? 'Mestrado'
          : type === 2
          ? 'Doutorado'
          : ''}
      </p>
    </div>
  );
};

export default Item;
