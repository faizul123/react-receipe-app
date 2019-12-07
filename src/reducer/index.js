import {combineReducers} from 'redux';
import {
    WISHLIST_ADD,
    WISHLIST_REMOVE
} from '../actions/actions';

const initial = {
    app:{
        wishListCount:0,
        wishlists:[]
    }
}

const handlers = {
    app:{
    [WISHLIST_ADD]:(state,action) => {
        //console.log(action.payload.item);
        state.wishlists.push(action.payload.item)
        console.log("in reducer ",state)
        return {
            ...state,
            wishListCount:state.wishlists.length,
            wishlists:state.wishlists
        }
    },
    [WISHLIST_REMOVE]:(state,action) => {
        state.wishlists.splice(state.wishlists.indexOf(action.payload.item),1);
        return {
            ...state,
            wishListCount:state.wishlists.length,
            wishlists:state.wishlists
        }
    }
}
}

function app(state = initial.app, action) {
    const handler = handlers.app[action.type];
    if (!handler) { return state; }
    return handler(state, action);
  }

export default combineReducers(
    {app}
);