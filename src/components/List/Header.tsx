import styles from "./Header.module.css";

interface HeaderProps {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export function Header({ tasksCounter, checkedTasksCounter }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </div>

      <div>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </div>
    </header>
  );
}
