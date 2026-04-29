import StudentCard from "./StudentCard"

const Students = () => {

  const students = [
    { id: 1, name: "أحمد", major: "CS", gpa: 3.5 },
    { id: 2, name: "سارة", major: "SE", gpa: 3.8 },
    { id: 3, name: "محمد", major: "AI", gpa: 3.2 }
  ]

  return (
    <div>
      <h1>قائمة الطلاب</h1>

      {students.map(s => (
        <StudentCard
          key={s.id}
          name={s.name}
          major={s.major}
          gpa={s.gpa}
        />
      ))}

    </div>
  )
}

export default Students