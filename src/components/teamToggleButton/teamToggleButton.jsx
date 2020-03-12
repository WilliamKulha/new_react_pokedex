import React from 'react'
import classes from ''

const teamToggleButton = (props) => {
    const stylesForProp = {
        'add' : classes['Add'],
        'remove' : classes['Remove'],
        'disabled' : classes['Disabled']
    }

    const style = stylesForProp[props.style];
    return <button className={style} disabled={props.disabled}>{props.children}</button>;

}

export default teamToggleButton