import StudentCard from "./StudentCard";

function Students() {
  let students = [
    {
      name: "chandan",
    },
    {
      name: "akash",
    },
    {
      name: "bijaya",
    },
    {
      name: "bikash",
    },
  ];
  return (
    <>
      {students.map((student) => {
        return <StudentCard student={student} />;
      })}
    </>
  );
}

export default Students;
