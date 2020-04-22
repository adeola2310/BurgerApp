import React from "react";
import Aux from "../../hoc/aux";
import classes from './Layout.css';

const layout = (props) => (

    <Aux>
        <div >
            TOOLBAR
            SIDEBAR
            BACKDROP
        </div>

        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>


)

export default layout;
