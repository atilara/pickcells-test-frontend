import { useEffect, useState } from 'react';
import api from '../../services/api';

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
    <div id="courses">
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <h3>
              {course.name}:{' '}
              {course.type === 0
                ? 'Graduação'
                : course.type === 1
                ? 'Mestrado'
                : 'Doutorado'}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
