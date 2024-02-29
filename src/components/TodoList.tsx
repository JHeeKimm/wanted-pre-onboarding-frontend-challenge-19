import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <>
      <div>
        {props.items.map((item) => (
          <div key={item.id}>
            {item.text}
            <button>dd</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
