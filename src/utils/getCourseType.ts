export default function getCourseType(type: number) {
  return type === 0 ? 'Graduação' : type === 1 ? 'Mestrado' : 'Doutorado';
}
