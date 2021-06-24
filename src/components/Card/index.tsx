import { Link } from 'react-router-dom';

import Button from '../Button';

import './style.css';

type props = {
  title: string;
  description: string;
  link: string;
};

const Card = ({ title, description, link }: props) => {
  return (
    <div id="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>
        <Button>Acessar aqui</Button>
      </Link>
    </div>
  );
};

export default Card;
