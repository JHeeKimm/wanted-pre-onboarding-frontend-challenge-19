import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo?.(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo-input"></label>
          <input id="todo-input" type="text" ref={textInputRef} />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default NewTodo;
