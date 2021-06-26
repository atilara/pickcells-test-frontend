import { useEffect, useState } from 'react';
import Item from '../../components/Item';

import api from '../../services/api';

import './style.css';

type Class = {
  id: number;
  name: string;
  type: number;
};

const Classes = () => {
  const [classes, setClasses] = useState<Class[]>([]);

  async function loadClasses() {
    const courses = await api.get('classes');
    setClasses(courses.data);
  }
  useEffect(() => {
    loadClasses();
  });

  return (
    <div id="container">
      <h1>Listagem de Classes</h1>
      <div id="classes">
        {classes.map((classes) => {
          return <Item key={classes.id} name={classes.name} />;
        })}
      </div>
    </div>
  );
};

export default Classes;
