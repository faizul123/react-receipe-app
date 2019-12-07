import React from 'react'
import { Paper } from '@material-ui/core'

const LeftPane = (props) => {
    return(<Paper>
            {props.children}
    </Paper>);
}

export default LeftPane; 