import React, { Component, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecipeCategoryContainer from "./RecipeCategoryContainer";
import { cuisines, items } from '../../store/store';
import { connect } from 'react-redux';
import WishListContainer from './WishListContainer'
import { Switch, Route,Link } from 'react-router-dom';


class MainContainer extends Component {

    state = {
        app: {}
    }

    render() {
        //console.log("from main container ",this.state, " props " , this.props);
        
        return (
            <Fragment>
                <AppBar>
                    <Toolbar>
                    <Link to="/">
                        <Typography variant="h6">
                            Reciepe App
                         </Typography>
                    </Link>
                        <div style={{ margin: "0 0 0 auto" }}>
                        <Link to="/wishlists">
                            <IconButton>
                                <Badge badgeContent={this.props.app.wishListCount || 0} color="secondary">                                   
                                        <FavoriteIcon color="action" />
                                        
                                </Badge>
                            </IconButton>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path='/' render={
                        (props) => <RecipeCategoryContainer 
                                        {...props} 
                                        notifyUser={this.props.notifyUser}
                                        category={cuisines}
                                         foodItems={this.props.foodItems}
                                        />
                        } 
                        />
                    <Route exact path='/wishlists' render={
                        (props) => 
                            <WishListContainer {...props} notifyUser={this.props.notifyUser} />
                        }
                        />
                </Switch>

            </Fragment>
        );
    }

}

function select(state) {
    return state;
}

export default connect(select)(MainContainer);