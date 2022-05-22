import Logo from "./logo";
import "./header.css";
import Button from "../button";
import Navbar from "../navbar";

export default function Header() {
  const handlerClickRegister = () => alert("Register");
  const handlerClickLogin = () => alert("Login");
  return (
    <header>
      <Logo />
      <Navbar />
      <Button text="Register" clickText={handlerClickRegister} />
      <Button text="Login" clickText={handlerClickLogin} />
    </header>
  );
}
