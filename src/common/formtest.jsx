// import React, { useState } from "react";

// export default function Form({ renderButton, renderInput, handleSubmit }) {
//   const [state, setState] = useState({
//     data: { username: "", password: "" },
//     errors: "",
//   });

//   const validate = () => {
//     const options = { abortEarly: false };
//     const { error } = Joi.validate(state.data, schema, options);
//     if (!error) return null;

//     const errors = {};
//     for (let item of error.details) errors[item.path[0]] = item.message;
//     return errors;
//   };

//   const validateProperty = ({ name, value }) => {
//     const obj = { [name]: value };
//     const schema = { [name]: schema[name] };
//     const { error } = Joi.validate(obj, schema);
//     return error ? error.details[0].message : null;
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = validate();
//     setState({ errors: errors || {} });
//     if (errors) return;

//     doSubmit();
//   };

//   const handleChange = ({ currentTarget: input }) => {
//     const errors = { ...state.errors };
//     const errorMessage = validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...state.data };
//     data[input.name] = input.value;

//     setState({ data, errors });
//   };

//   function renderButton(label) {
//     return (
//       <button disabled={validate()} className="btn btn-primary">
//         {label}
//       </button>
//     );
//   }

//   function renderSelect(name, placeholder, defaultValue, options) {
//     const { data, errors } = state;

//     return (
//       <Select
//         name={name}
//         value={data[name]}
//         placeholder={placeholder}
//         defaultValue={defaultValue}
//         options={options}
//         onChange={handleChange}
//         error={errors[name]}
//       />
//     );
//   }

//   function renderInput(name, placeholder, type) {
//     const { data, errors } = state;

//     return (
//       <Input
//         type={type}
//         name={name}
//         value={data[name]}
//         placeholder={placeholder}
//         onChange={handleChange}
//         error={errors[name]}
//       />
//     );
//   }
// }
