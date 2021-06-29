import { useEffect, useState } from 'react';
import Item from '../../components/Item';

import api from '../../services/api';

import classesImg from '../../assets/images/classes.png';

type Class = {
  id: number;
  name: string;
  type: number;
};

const Classes = () => {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    async function loadClasses() {
      const courses = await api.get('classes');
      setClasses(courses.data);
    }
    loadClasses();
  });

  return (
    <div id="container">
      <h1>Listagem de Classes</h1>
      <div id="wrapper">
        <img src={classesImg} alt="Caderneta" />
        <div>
          <p>
            Tela para listagem de classes, segue o mesmo princípio explicado na
            listagem de cursos. Porém, essa é uma listagem mais simples, já que
            não possui ordenação dos elementos nem nenhum tipo de verificação
            mais robusta.
          </p>
        </div>
      </div>
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
