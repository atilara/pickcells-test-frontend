import { useEffect, useState } from 'react';
import api from '../../services/api';

import Course from '../../components/Course';

import './style.css';

type Course = {
  id: number;
  name: string;
  type: number;
};

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  async function loadCourses() {
    const courses = await api.get('courses');
    setCourses(courses.data);
  }
  useEffect(() => {
    loadCourses();
  });

  return (
    <div id="container">
      <h1>Listagem de Cursos</h1>
      <div id="courses">
        {courses.map((course) => {
          return (
            <Course key={course.id} name={course.name} type={course.type} />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
