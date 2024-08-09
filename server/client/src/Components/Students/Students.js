import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Students.css';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [course, setCourse] = useState('');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch students from the server
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${window.location.origin}/api/v1/students`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Add a new student
  const addStudent = async () => {
    try {
      const response = await axios.post(`${window.location.origin}/api/v1/students`, { name, rollNo, course });
      setStudents([...students, response.data]);
      setName('');
      setRollNo('');
      setCourse('');
      alert('Student added successfully!');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  // Update an existing student
  const updateStudent = async () => {
    try {
      const response = await axios.put(`${window.location.origin}/api/v1/students/${editing._id}`, { name, rollNo, course });
      setStudents(students.map(student => (student._id === editing._id ? response.data : student)));
      setEditing(null);
      setName('');
      setRollNo('');
      setCourse('');
      alert('Student updated successfully!');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  // Delete a student
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${window.location.origin}/api/v1/students/${id}`);
      setStudents(students.filter(student => student._id !== id));
      alert('Student deleted successfully!');
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="App">
      <h1>Student Management</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        {editing ? (
          <button onClick={updateStudent}>Update</button>
        ) : (
          <button onClick={addStudent}>Add Student</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.course}</td>
              <td className="actions">
                <button className="update-btn" onClick={() => { setEditing(student); setName(student.name); setRollNo(student.rollNo); setCourse(student.course); }}>Update</button>
                <button className="delete-btn" onClick={() => deleteStudent(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;



