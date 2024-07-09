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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordCheck: string;
  extraError?: string; // error for whole form
}

export default function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  //   console.log(register("ToDo")); // register() returns input's value as Obj { onBlur, onChange ... }
  //   console.log(watch()); // track form value
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "Password are not the same" },
        { shouldFocus: true } // force the form to foucs on selected
      );
    }
    setError("extraError", { message: "Server offline." });
  };
  //   console.log(formState.errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
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
        <span>{errors?.passwordCheck?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
