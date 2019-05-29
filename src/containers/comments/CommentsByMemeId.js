import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';

const mapStateToProps = (state, { memeId }) => ({
  memes: getComments(state, memeId)
});

export default connect(
  mapStateToProps
)(Comments);
