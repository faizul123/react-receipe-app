import React from 'react'
import { Paper } from '@material-ui/core'
const styles={
    rightPane:{
        marginLeft:"8px",
        paddingLeft:"8px",
        backgroundColor:"#e8eaf6",
        minHeight:"100vh"
    }
}

export  const RightPane = (props) => {
    return(
        <Paper style={styles.rightPane}>
           {props.children}
        </Paper>
        );
}