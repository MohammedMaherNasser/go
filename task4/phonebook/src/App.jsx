import { useState, useEffect } from "react";
import Filter from "./Filter.jsx";
import PersonForm from "./PersonForm.jsx";
import Persons from "./Persons.jsx";
import personService from "./personService.js";
import "./style.css";

export default function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then(data => setPersons(data));
  }, []);

  const addPerson = (e) => {
    e.preventDefault();

    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObj = { name: newName, number: newNumber };

    personService.create(personObj).then(returned => {
      setPersons(persons.concat(returned));
      setNewName("");
      setNewNumber("");
    });
  };

  const personsToShow = persons.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>

      <Filter filter={filter} setFilter={setFilter} />

      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
}
