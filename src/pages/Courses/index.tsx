import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import getCourseType from '../../utils/getCourseType';

import Item from '../../components/Item';
import Button from '../../components/Button';

import dataImg from '../../assets/images/data.png';

type Course = {
  id: number;
  name: string;
  type: number;
  mandatory_workload: string;
};

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  async function loadCourses() {
    const courses = await api.get('courses');
    setCourses(courses.data.course_classes);
  }
  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div id="container">
      <h1>Listagem de Cursos</h1>

      <div id="wrapper">
        <img src={dataImg} alt="Dados" />
        <div>
          <p>
            Esta é a tela de listagem de cursos, consegui desenvolvê-la
            utilizando o axios para consumo da API que foi desenvolvida no outro
            repositório.
          </p>
          <p>
            A ordenação dos cursos está sendo realizada utilizando a carga
            horária obrigatória como base, do maior pro menor, como foi
            solicitado. Isso já foi feito no backend utilizando as queries do
            SQL, portanto não preciso fazer nenhum tratamento aqui na página.
          </p>
          <p>
            Além disso, cada um dos cursos pode ser acessado com maiores
            detalhes apenas com o clique no botão.
          </p>
        </div>
      </div>
      <div id="item-grid">
        {courses.map(({ id, name, type, mandatory_workload }) => {
          return (
            <Item key={id}>
              <h4>{name}</h4>
              <p>{getCourseType(type)}</p>
              <p>{`Carga Horária: ${mandatory_workload}`}</p>
              <Link to={`/courses/${id}`}>
                <Button>Acessar aqui</Button>
              </Link>
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
