import  { connect } from 'react-redux';
import { createComment } from '../../actions/comments/commentActions';
import CommentForm from '../../components/comments/CommentForm';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment(props.match.params.memeId, comment));
  }
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CommentForm));
