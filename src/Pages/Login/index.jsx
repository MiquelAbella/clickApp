import { getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../firebase";
import { useUser } from "../../Context/UserContext";
import { useState } from "react";

export const Login = () => {
  const auth = getAuth();
  const { createUser, loginUser } = useUser();

  const registerWithPopup = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    const { email, displayName, uid } = response.user;

    createUser({
      email,
      fullName: displayName,
      password: uid,
      repPassword: uid,
    });
  };

  const loginWithPopup = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    const { email, uid } = response.user;

    loginUser({
      email,
      password: uid,
    });
  };

  const [registerValues, setRegisterValues] = useState({
    email: "",
    fullName: "",
    password: "",
    repPassword: "",
  });

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const handleChangeRegisterValues = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const handleChangeLoginValues = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(registerValues);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginUser(loginValues);
  };

  return (
    <div>
      <p>Register</p>
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
      <p>Login</p>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="email"
          value={loginValues.email}
          name="email"
          onChange={handleChangeLoginValues}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginValues.password}
          name="password"
          onChange={handleChangeLoginValues}
        />

        <button>Login</button>
      </form>
      <button onClick={registerWithPopup} className="bg-cyan-500 px-2 py-1">
        Register with Google
      </button>
      <button onClick={loginWithPopup} className="bg-green-500 px-2 py-1">
        Login with Google
      </button>
    </div>
  );
};
