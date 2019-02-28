import React from 'react';
import PropTypes from 'prop-types';
import {
  ReviewContainer,
  AuthorContainer,
  CommentContainer,
  AuthorName,
  AuthorPosition,
  Comment
} from './styles';

const Review = ({ review }) => (
  <ReviewContainer>
    <AuthorContainer>
      <AuthorName id="author-name">{review.name}</AuthorName>
      <AuthorPosition id="author-position">{review.position}</AuthorPosition>
    </AuthorContainer>
    <CommentContainer>
      <Comment id="author-comment">{review.comment}</Comment>
    </CommentContainer>
  </ReviewContainer>
);

Review.displayName = 'Review';

Review.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    comment: PropTypes.string
  }).isRequired
};

export default Review;
