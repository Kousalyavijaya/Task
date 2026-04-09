import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useMemo,
  useCallback,
  createContext
} from "react";

const UserContext = createContext();

function StudentManager() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    const data = [
      { id: 1, name: "Kousalya" },
      { id: 2, name: "Dinesh" },
      { id: 3, name: "Arun" }
    ];
    setStudents(data);
    inputRef.current.focus();
  }, []);

  const addStudent = useCallback(() => {
    if (!name) return;

    const newStudent = {
      id: Date.now(),
      name
    };

    setStudents((prev) => [...prev, newStudent]);
    setName("");
    inputRef.current.focus();
  }, [name]);

  const deleteStudent = useCallback((id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, students]);

  return (
    <UserContext.Provider value={{ role: "Admin" }}>
      <div style={{ padding: "20px" }}>
        <h2>🎓 Student Manager (Advanced Hooks)</h2>

        <input
          ref={inputRef}
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={addStudent}>Add</button>

        <br /><br />

        <input
          type="text"
          placeholder="Search student"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <hr />

        {filteredStudents.map((s) => (
          <StudentItem key={s.id} student={s} deleteStudent={deleteStudent} />
        ))}
      </div>
    </UserContext.Provider>
  );
}

const StudentItem = React.memo(({ student, deleteStudent }) => {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{student.name}</h3>
      <p>Role: {user.role}</p>
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
    </div>
  );
});

export default StudentManager;