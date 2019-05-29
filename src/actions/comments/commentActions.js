export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (memeId, comment) => ({
  type: CREATE_COMMENT,
  payload: { comment, memeId }
});
