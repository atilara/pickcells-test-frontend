import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Item from '../../components/Item';

import './style.css';
import Button from '../../components/Button';

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
      <div id="courses">
        {courses.map(({ id, name, type, mandatory_workload }) => {
          return (
            <Item key={id}>
              <h4>{name}</h4>
              <p>
                {type === 0
                  ? 'Graduação'
                  : type === 1
                  ? 'Mestrado'
                  : 'Doutorado'}
              </p>
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
