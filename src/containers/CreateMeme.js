import { connect } from 'react-redux';
import MemeForm from '../components/memes/MemeForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(url) {
    dispatch(createMeme());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MemeForm);
