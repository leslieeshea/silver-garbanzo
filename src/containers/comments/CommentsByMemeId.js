import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/commentsSelectors';

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.match.params.memeId)
});

export default withRouter(connect(
  mapStateToProps
)(Comments));
