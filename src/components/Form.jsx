import React, { useState }  from "react";
import FormInput from "./FormInput";
import './Form.css'
const Form = () => {
  const [value, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const input = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMsg:
        "username should be 3-16 characters long and should not include any special characters.",
      lable: "username",
      pattern: "^[a-zA-Z0-9]$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMsg: "it should be valid email address.",
      lable: "email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",

      lable: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMsg:
        "password should be 8-15 characters and should include special characters.",
      lable: "Password",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMsg: "should be same as above.",
      lable: "Confirm Password",
      pattern: value.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {input.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={value[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
