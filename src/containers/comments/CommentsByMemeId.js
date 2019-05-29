import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/commentsSelectors';

const mapStateToProps = (state, { memeId }) => ({
  comment: getComments(state, memeId)
});

export default connect(
  mapStateToProps
)(Comments);
