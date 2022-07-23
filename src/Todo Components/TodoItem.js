import React from "react";

const styles = {
    li : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem',
    }
}

function TodoItem({todo, index}) {
    return(
        <li style={styles.li}>
            <span>
                <input style={styles.input} type="checkbox"/>
                <strong>{index +1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className="btnX">X</button>
        </li>
    )
}

export default TodoItem;