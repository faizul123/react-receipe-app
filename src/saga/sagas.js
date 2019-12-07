import { WISHLIST_ADD, wishListSuccess } from '../actions/actions';
import { put, takeLatest } from 'redux-saga/effects';


function* updateWishList() {
   yield put(wishListSuccess({ success: 'ok' }))
}

function* mySaga() {
   yield takeLatest(WISHLIST_ADD, updateWishList);
}


export default mySaga;