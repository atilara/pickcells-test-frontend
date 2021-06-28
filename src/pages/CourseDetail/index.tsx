import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';
import getCourseType from '../../utils/getCourseType';

import Item from '../../components/Item';

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

  async function loadCourse() {
    const courses = await api.get(`courses/${Number(match.params.id)}`);
    setCourse(courses.data);
  }
  useEffect(() => {
    loadCourse();
  }, []);

  return (
    <div id="container">
      <h2>{course?.course.name}</h2>
      <h3>Tipo de Curso: {getCourseType(course?.course.type)}</h3>
      <h3>
        Total de Carga Horária Obrigatória: {course?.mandatory_workload.sum}
      </h3>
      <div id="item-grid">
        {course?.classes.map(({ name, workload, mandatory }) => {
          return (
            <Item>
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
