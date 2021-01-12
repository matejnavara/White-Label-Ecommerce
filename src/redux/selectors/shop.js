import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

export const selectCollection = memoize((urlParam) =>
  createSelector([selectCollections], (collections) => collections[urlParam])
);

export const selectIsCollectionLoading = createSelector(
  [selectShop],
  (shop) => shop.isFetching || !shop.collections
);
