import React from "react";
import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    key: number; // This is a unique identifier for the TodoList
    todos: Todo[];
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
    toggleUrgent: (id: number) => void;
}

/*
 * TodoList: Create a ul element and render a TodoItem element for each todo supplied
 */
function TodoList({ todos, deleteTodo, toggleComplete, toggleUrgent }: TodoListProps) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}  /* the key prop is required for React to keep track of the list items */
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    toggleUrgent={toggleUrgent}
                />
            ))}
        </ul>
    );
}

export default TodoList;