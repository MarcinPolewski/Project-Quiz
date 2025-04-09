import classes from "./Screen.module.css"

export default function Screen({ children, className }) {
    return <div className={classes.screen + " " + className}>{children}</div>
}