import React, { Component, Fragment } from 'react'
import RecipeCard from './index'
import {wishListAdd,wishListRemove} from '../../actions/actions';
import {connect} from 'react-redux';

 class ReceipeCardContainer extends Component {
    
    state = {
        receipes:this.props.foodItems
    }

    static getDerivedStateFromProps(props,state){
        console.log("ReceipeCardContainer state ",state, " props ",props)
        return{
            wishlists:state.wishlists ? state.wishlists : props.app.wishlists,
            receipes:props.foodItems ? props.foodItems : []
        }
    }

    toggleWishlist = (receipdId) => {
        console.log(receipdId);
        if(this.state.wishlists.indexOf(receipdId) === -1){                       
                this.props.notifyUser(true,"wishlist added!");
                this.props.dispatch(wishListAdd({item:receipdId}));
            
        }else{    
                this.props.notifyUser(true,"wishlist removed");
                this.props.dispatch(wishListRemove({item:receipdId}));
        
        }
    }
    
    render() {
        console.log("from Receipe container before render",this.state, " props " + this.props);
        return (
            <Fragment>
                 {
                this.state.receipes.map(item => {              
                    return (
                        <RecipeCard 
                            wishlistAdded={this.state.wishlists.indexOf(item.id) !== -1}
                            toggleWishlist={this.toggleWishlist}
                            key={item.id} 
                            receipe={item} />
                    );
                })
            }
            </Fragment>
        )
    }
}

function select(state){
    //console.log("recipecard container ",state)
    return state;
}

export default connect(select)(ReceipeCardContainer);