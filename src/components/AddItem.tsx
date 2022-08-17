import React, { ChangeEvent } from 'react';
import { ITask } from './Interfaces';

interface Props {
  newItem: string;
  setNewItem(newItem: string): void;
  handleSubmit(e: ChangeEvent<HTMLFormElement>): void;
}

const AddItem = ({ newItem, setNewItem, handleSubmit }: Props) => {
  return (
    <form className="text-center px-2" onSubmit={handleSubmit}>
      <label className="px-2 text-2xl" htmlFor="addItem">
        Add Item
      </label>
      <input
        className="rounded px-2"
        autoFocus
        type="text"
        id="addItem"
        placeholder="add Item"
        required
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
        className="rounded bg-sky-500 hover:bg-cyan-600 py-2 px-2 m-2"
        type="submit"
        aria-label="Add Item"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddItem;
