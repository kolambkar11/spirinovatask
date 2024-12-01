// Test.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  // Fetch items
  const fetchItems = async () => {
    const response = await axios.get("http://127.0.0.1:5000/items");
    setItems(response.data);
  };

  // Add item
  const addItem = async () => {
    const newItem = { name, description };
    await axios.post("http://127.0.0.1:5000/items", newItem);
    fetchItems();
    setName("");
    setDescription("");
  };

  // Update item
  const updateItem = async (id) => {
    const updatedItem = { name, description };
    await axios.put(`http://127.0.0.1:5000/items/${id}`, updatedItem);
    fetchItems();
    setName("");
    setDescription("");
  };

  // Delete item
  const deleteItem = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/items/${id}`);
    fetchItems();
  };

  return (
    <div className="Test">
      <h1>CRUD with Flask and React</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => updateItem(item.id)}>Update</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
