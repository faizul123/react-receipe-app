import React, { Component, Fragment } from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import RecipeCategoryContainer from "./RecipeCategoryContainer";
import {cuisines,items} from '../../store/store';

export default class MainContainer extends Component {

    render() {
        
        return (
            <Fragment>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">
                            Reciepe App
                         </Typography>
                    </Toolbar>
                </AppBar>
                <RecipeCategoryContainer category={cuisines} foodItems={items} />
            </Fragment>
        );
    }

}