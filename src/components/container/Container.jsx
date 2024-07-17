import { cn } from "../../utils";
import styles from './styles.module.css'

export function Container({className, children}) {
  return (
    <div className={cn(styles.container, className)}>
      {children}
    </div>
  )
}