const StudentCard = ({ name, major, gpa }) => {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      borderRadius: "10px"
    }}>
      <h2>{name}</h2>
      <p>التخصص: {major}</p>
      <p>المعدل: {gpa}</p>
    </div>
  )
}

export default StudentCard