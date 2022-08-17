// import React from 'react';

// import { useState } from 'react';

// import Header from '~/layout/header.component';
// import Footer from '~/layout/footer.component';

// const App = () => (
//   <div className="flex flex-col min-h-screen">
//     <Header />

//     <main className="flex-grow">
//       <h2>Main Content</h2>
//     </main>

//     <Footer />
//   </div>
// );

// export default App;
import React, { FC, ChangeEvent, useState } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import Content from './components/Content';
import { ITask } from './components/Interfaces';

const App: FC = () => {
  const [items, setItems] = useState<ITask[]>([
    {
      id: 1,
      checked: false,
      item: 'Car',
    },
    {
      id: 2,
      checked: false,
      item: 'Bike',
    },
    {
      id: 3,
      checked: true,
      item: 'Tank',
    },
    {
      id: 4,
      checked: false,
      item: 'Car',
    },
  ]);

  const [newItem, setNewItem] = useState<string>('');

  const handleChecked = (id: number): void => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(listItems);
  };

  const handleDelete = (id: number): void => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
    console.log(e);
  };

  const addItem = (item: string) => {
    const id = item.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  return (
    <div className="container mx-auto px-20 bg-blue-400 pb-8">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items.filter(item => item.item.toLowerCase())}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
