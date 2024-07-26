import clsx from "@utils/clsx";
import styles from "./Button.module.css";

const Button = ({ type = "filled", size = "lg", className, onClick, disabled, children }) => {
  return (
    <button
      type="button"
      className={clsx(
        "btn",
        styles.btn,
        type === "outlined" && styles.outlined,
        type === "text" && styles.text,
        size === "sm" && styles.sm,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;