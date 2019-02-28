import React from 'react';
import PropTypes from 'prop-types';
import { TitleContainer, TitleText } from './styles';

const Title = ({ title }) => (
  <TitleContainer>
    <TitleText id="title">{title}</TitleText>
  </TitleContainer>
);

export default Title;

Title.displayName = 'Title';

Title.propTypes = {
  title: PropTypes.string.isRequired
};
