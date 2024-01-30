import { Check, Trash } from "phosphor-react";

import { TaskProps } from "../../App";

import styles from "./Item.module.css";

interface ItemProps {
  data: TaskProps;
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: ItemProps) {
  const handleTaskToggle = () => {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const paragraphCheckedClassname = data.isChecked
    ? styles["paragraph-checked"]
    : "";

  return (
    <div className={styles.container}>
      <div>
        <input readOnly type="checkbox" checked={data.isChecked} />
        <div
          className={`${styles.checkbox} ${checkboxCheckedClassname}`}
          onClick={handleTaskToggle}
        >
          {data.isChecked && <Check size={12} />}
        </div>
      </div>

      <label
        htmlFor="checkbox"
        className={`${styles.paragraph} ${paragraphCheckedClassname}`}
      >
        {data.text}
      </label>

      <button onClick={() => removeTask(data.id)}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
