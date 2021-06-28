import { useEffect, useState } from 'react';
import Item from '../../components/Item';

import api from '../../services/api';

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
      <div id="item-grid">
        {classes.map(({ id, name }) => {
          return (
            <Item key={id}>
              <h3>{name}</h3>
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
