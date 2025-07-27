import { useEffect, useState } from 'react';
import axios from 'axios';

type Item = {
  id: number;
  name: string;
  createdAt: string;
};

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error('GET error:', err));
  }, []);

  const addItem = () => {
    if (!name.trim()) return;

    axios.post('http://localhost:5000/api/items', { name })
      .then(res => {
        setItems([...items, res.data]);
        setName('');
      })
      .catch(err => console.error('POST error:', err));
  };

  return (
    <div>
      <h2>📝 Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} — {new Date(item.createdAt).toLocaleString()}</li>
        ))}
      </ul>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

