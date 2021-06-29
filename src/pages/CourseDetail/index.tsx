import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';
import getCourseType from '../../utils/getCourseType';

import Item from '../../components/Item';

import filesImg from '../../assets/images/files.png';

import './style.css';

type ComposedProps = RouteComponentProps<{
  id: string;
}>;

type Course = {
  course: {
    name: string;
    type: number;
  };
  classes: [
    {
      id: number;
      name: string;
      workload: number;
      mandatory: number;
    },
  ];
  mandatory_workload: {
    sum: string;
  };
};

const CourseDetail = ({ match }: ComposedProps) => {
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    async function loadCourse() {
      const courses = await api.get(`courses/${Number(match.params.id)}`);
      setCourse(courses.data);
    }
    loadCourse();
  }, []);

  return (
    <div id="container">
      <h1>Descrição de Curso</h1>
      <div id="wrapper">
        <img src={filesImg} alt="Arquivos" />
        <div>
          <h2>{course?.course.name}</h2>
          <h3>Tipo de Curso: {getCourseType(course?.course.type)}</h3>
          <h3>
            Total de Carga Horária Obrigatória: {course?.mandatory_workload.sum}
          </h3>
          <p>
            Esta é a tela específica de curso, foi feita utilizando os
            paramêtros de rota, que são passados através da URL. Utilizando esse
            ID, a API é consumida para retorno dos detalhes desse curso.
          </p>
        </div>
      </div>
      <h2>Listagem de Classes</h2>
      <div id="item-grid">
        {course?.classes.map(({ id, name, workload, mandatory }) => {
          return (
            <Item key={id}>
              <h4>{name}</h4>
              <p>Carga Horária: {workload}</p>
              <p>Cadeira {mandatory ? 'Obrigatória' : 'Opcional'}</p>
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetail;
