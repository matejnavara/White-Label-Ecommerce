import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionLoading } from "../../redux/selectors/shop";
import WithSpinner from "../with-spinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading,
});

const WithCollectionsLoadingContainer = (WrappedComponent) =>
  compose(connect(mapStateToProps), WithSpinner)(WrappedComponent);

export default WithCollectionsLoadingContainer;
