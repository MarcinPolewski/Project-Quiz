import classes from "./Screen.module.css"

export default function Screen({ children }) {
    return <div className={classes.screen}>{children}</div>
}