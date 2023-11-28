import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [allContacts, setAllContacts] = useState(contacts.slice(5, 10));
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {allContacts.map((contact) => {
          return (
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
          );
        })}
      </table>
    </div>
  );
}

export default App;
