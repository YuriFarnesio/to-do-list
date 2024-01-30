import { PlusCircle } from "phosphor-react";
import { useState } from "react";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Empty } from "./components/List/Empty";
import { Header as ListHeader } from "./components/List/Header";
import { Item } from "./components/List/Item";

import styles from "./App.module.css";

export interface TaskProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.filter((task) => task.isChecked).length;

  const handleAddTask = () => {
    if (!inputValue) return

    const newTask: TaskProps = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  const handleRemoveTask = (id: number) => {
    if (!confirm('Deseja mesmo apagar essa tarefa?')) return

    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  const handleToggleTask = ({ id, value }: { id: number; value: boolean }) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id)
        return { ...task, isChecked: value }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.formContainer}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </main>
    </>
  );
}
