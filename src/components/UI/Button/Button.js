import "./Button.css"

const Button = (props) => {
  return (
    <button className={"btn "+props.className}>{props.title}</button>
  );
}

export default Button;
