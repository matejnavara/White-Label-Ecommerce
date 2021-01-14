import { ShopActionTypes } from "../actionTypes";

export const fetchCollections = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_REQUEST,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
