import { getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../firebase";
import { useUser } from "../../Context/UserContext";
import { useState } from "react";

export const Login = () => {
//   const { login } = useUser();
//   const auth = getAuth();

//   const loginWithPopup = async () => {
//     const response = await signInWithPopup(auth, googleProvider);
//     login(response.user);
//   };

  const [registerValues, setRegisterValues] = useState({
    email: "",
    fullName: "",
    password: "",
    repPassword: "",
  });

  const handleChangeRegisterValues = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={registerValues.email}
          name="email"
          onChange={handleChangeRegisterValues}
        />
        <input
          type="text"
          placeholder="Fullname"
          value={registerValues.fullName}
          name="fullName"
          onChange={handleChangeRegisterValues}
        />
        <input
          type="password"
          placeholder="Password"
          value={registerValues.password}
          name="password"
          onChange={handleChangeRegisterValues}
        />
        <input
          type="password"
          placeholder="Repeat password"
          value={registerValues.repPassword}
          name="repPassword"
          onChange={handleChangeRegisterValues}
        />
        <button>Register</button>
      </form>
      {/* <button onClick={loginWithPopup} className="bg-cyan-500 px-2 py-1">
        Register with Google
      </button> */}
    </div>
  );
};
