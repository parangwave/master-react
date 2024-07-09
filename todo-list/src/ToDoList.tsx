import { useState } from "react";
import { useForm } from "react-hook-form";

/*
export default function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write a to do"
        />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}
*/

export default function ToDoList() {
  const { register, watch } = useForm();
  //   console.log(register("ToDo")); // register() returns input's value as Obj { onBlur, onChange ... }
  //   console.log(watch()); // track form value
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="email" />
        <button>Add</button>
        <input {...register("firstName")} placeholder="firstName" />
        <button>Add</button>
        <input {...register("lastName")} placeholder="lastName" />
        <button>Add</button>
        <input {...register("username")} placeholder="username" />
        <button>Add</button>
        <input {...register("password")} placeholder="password" />
        <button>Add</button>
        <input {...register("passwordCheck")} placeholder="passwordCheck" />
        <button>Add</button>
      </form>
    </div>
  );
}
