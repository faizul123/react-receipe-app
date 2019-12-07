import {createAction} from 'redux-actions';

export const WISHLIST_ADD = "WISHLIST_ADD";
export const WISHLIST_REMOVE = "WISHLIST_REMOVE";
export const WISHLIST_SUCCESS = "WISHLIST_SUCCESS";

export const wishListAdd = createAction(WISHLIST_ADD);
export const wishListRemove = createAction(WISHLIST_REMOVE);
export const wishListSuccess = createAction(WISHLIST_SUCCESS);