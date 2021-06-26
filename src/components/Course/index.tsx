import './style.css';

type props = {
  name: string;
  type: number;
};

const Course = ({ name, type }: props) => {
  return (
    <div id="course">
      <h3>{name}</h3>
      <p>{type === 0 ? 'Graduação' : type === 1 ? 'Mestrado' : 'Doutorado'}</p>
    </div>
  );
};

export default Course;
