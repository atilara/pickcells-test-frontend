import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';

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

  return <h1>{course?.course.name}</h1>;
};

export default CourseDetail;
