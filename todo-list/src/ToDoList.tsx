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
  const { register, watch, handleSubmit, formState } = useForm();
  //   console.log(register("ToDo")); // register() returns input's value as Obj { onBlur, onChange ... }
  //   console.log(watch()); // track form value
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input {...register("email", { required: true })} placeholder="email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="firstName"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="lastName"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="username"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="password"
        />
        <input
          {...register("passwordCheck", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="passwordCheck"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
