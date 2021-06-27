import { useEffect, useState } from 'react';
import api from '../../services/api';

import Item from '../../components/Item';

import './style.css';

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
  });

  return (
    <div id="container">
      <h1>Listagem de Cursos</h1>
      <div id="courses">
        {courses.map((course) => {
          return (
            <Item
              key={course.id}
              name={course.name}
              type={course.type}
              workload={course.mandatory_workload}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
