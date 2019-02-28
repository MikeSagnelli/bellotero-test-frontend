import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from './Title';
import Review from './Review';
import Counter from './Counter';
import Controls from './Controls';
import { ControlsContainer } from './styles';

class Slider extends React.PureComponent {
  state = {
    currentReview: 0,
    totalReviews: 0
  };

  componentDidMount() {
    const { testimonialData } = this.props;

    this.setState({ totalReviews: testimonialData.slider.reviews.length });
  }

  nextReview = () => {
    const { currentReview, totalReviews } = this.state;

    if (currentReview < totalReviews - 1) {
      this.setState({ currentReview: currentReview + 1 });
    }
  };

  previousReview = () => {
    const { currentReview } = this.state;

    if (currentReview > 0) {
      this.setState({ currentReview: currentReview - 1 });
    }
  };

  render() {
    const { testimonialData } = this.props;
    const { currentReview } = this.state;

    return (
      <React.Fragment>
        <Title title={testimonialData.slider.title} />
        <Review review={testimonialData.slider.reviews[currentReview]} />
        <ControlsContainer>
          <Counter
            currentReview={currentReview + 1}
            totalReviews={testimonialData.slider.reviews.length}
          />
          <Controls previousReview={this.previousReview} nextReview={this.nextReview} />
        </ControlsContainer>
      </React.Fragment>
    );
  }
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  testimonialData: PropTypes.shape({
    slider: PropTypes.shape({
      title: PropTypes.string,
      reviews: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          position: PropTypes.string,
          comment: PropTypes.string
        })
      )
    })
  })
};

Slider.defaultProps = {
  testimonialData: null
};

export default connect(state => state)(Slider);
