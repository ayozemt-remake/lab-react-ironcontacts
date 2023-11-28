import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [allContacts, setAllContacts] = useState(contactsData.slice(5, 10));

  const addRandomContact = () => {
    const randomContact =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    if (!allContacts.includes(randomContact)) {
      setAllContacts([randomContact, ...allContacts]);
    }
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact} style={{ cursor: "pointer" }}>
        Add Random Contact
      </button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {allContacts.map((contact) => {
          return (
            <tbody>
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    style={{ width: "150px" }}
                  />
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{contact.popularity.toFixed(2)}</p>
                </td>
                <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
                <td>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
