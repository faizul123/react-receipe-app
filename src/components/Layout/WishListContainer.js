import React, { Fragment, Component } from 'react';
import { Grid } from '@material-ui/core';
import { RightPane } from './RightPane';
import { connect } from 'react-redux';
import ReceipeCardContainer from '../RecipeCard/ReceipeCardContainer';

const styles = {
    container: {
        marginTop: "72px",
        marginLeft: "8px",
    }
}

class WishListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodItems: []
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("from wishlist container")
        console.log("state ", state, " props ", props)
        return { 
            foodItems: state.foodItems || [],
            wishlist: state.wishlists || props.app.wishlists
        }
    }

    updateFoodItems = () => {
        if (this.state.wishlist.length !== 0) {
            fetch("https://api.spoonacular.com/recipes/informationBulk?ids=" + this.state.wishlist.join(',')
                + "&apiKey=cdca194d2c1b44f6ba48a56aa8e8f016")
                .then(response => {
                    console.log("fetch done")
                    return response.json()
                }).then(data => {
                    this.setState((prevState,props) =>{
                       return {foodItems:data}
                    })
                }).catch(err => console.log(err));
        }
    }

    componentDidMount(){
        console.log("from wishlist container  componentDidMount" , this.state);
        this.updateFoodItems();
    }

    render() {
        console.log("before render ",this.state);
        return (<Fragment>
            {
                <Grid container style={styles.container} justify="center" >
                    <Grid item sm={9}>
                        <RightPane>
                            <ReceipeCardContainer
                                notifyUser={this.props.notifyUser}
                                foodItems={this.state.foodItems}
                            />
                        </RightPane>
                    </Grid>
                </Grid>
            }
        </Fragment>);
    }

}

function select(state) {

    return state;
}


export default connect(select)(WishListContainer);