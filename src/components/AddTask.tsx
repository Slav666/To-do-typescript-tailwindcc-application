import React, { ChangeEvent, useState, useEffect } from 'react';
import { ITask } from './Interfaces';

interface Props {
  newTask: string;
  setNewTask(newTask: string): void;
  handleSubmit(e: ChangeEvent<HTMLFormElement>): void;
}
const defaultFormValues = {
  checked: false,
  task: '',
};

const AddTask = ({onSubmit, initialValues = defaultFormValues }) => {
  const [values, setValues] = useState(initialValues);

  const setValue = (field, value) =>
    setValues(old => ({ ...old, [field]: value }));

  const handleSubmit = e => {
    setValues(defaultFormValues);
    e.preventDefault();
    onSubmit(values);
  };
  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return (
    <form className="text-center px-2" onSubmit={handleSubmit}>
      <label className="px-2 text-2xl" htmlFor="task">
        Add Task
      </label>
      <input
        className="rounded px-2"
        autoFocus
        type="text"
        id="addItem"
        placeholder="add Item"
        required
        name="task"
        value={values.task}
        onChange={e => setValue('task', e.target.value)}
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

export default AddTask;
