
const Total = ({course}) => {
    console.log("GELLO", course);

 const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <h4>
        Total of {totalExercises}
    </h4>
  )
}

export default Total