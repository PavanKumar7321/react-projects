import React from 'react';

import '../UI/Cards.css'

const Cards = (props) => {
    const classes = 'cards ' + props.className;
    return <div className={classes}>{props.children}</div>

}


export default Cards;