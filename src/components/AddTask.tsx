import input from 'postcss/lib/input';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { ITask } from './Interfaces';

interface Props {
  newTask: ITask;
  task: ITask;
  setNewTask(newTask: string): void;
  handleSubmit(e: ChangeEvent<HTMLFormElement>): void;
  // onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
  initialValues: object;
}
const defaultFormValues = {
  checked: false,
  task: '',
};

const AddTask = ({ onSubmit, initialValues = defaultFormValues }: Props) => {
  const [values, setValues] = useState<object>(initialValues);

  const setValue = (field: string, value: string) =>
    setValues((old: any) => ({ ...old, [field]: value }));

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(defaultFormValues);
    e.preventDefault();
    onSubmit(values);
  };
  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return (
    <form className=" text-center py-4" onSubmit={handleSubmit}>
      <label className="px-4 text-2xl" htmlFor="task">
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
        className="rounded bg-sky-500 hover:bg-cyan-600 py-2 px-4 mx-4"
        type="submit"
        aria-label="Add Item"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
