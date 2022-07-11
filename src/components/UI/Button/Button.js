import "./Button.css"

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={"btn "+props.className} disabled={props.disabled}>{props.title}</button>
  );
}

export default Button;
