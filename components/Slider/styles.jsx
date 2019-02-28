import styled from 'styled-components';
import { primaryColor, whiteColor, textColor, lightTextColor } from '../../static/styleConstants';

export const TitleContainer = styled.div`
  margin-top: -20%;
  width: 389px;
  height: 56px;
  background-color: ${primaryColor};
`;

export const TitleText = styled.h1`
  margin: 8px 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 1.11;
  letter-spacing: 0.8px;
  color: ${whiteColor};
`;

export const ReviewContainer = styled.div`
  display: flex;
  margin-top: 80px;
  width: calc(100% - 78px);
  background-color: ${whiteColor};
  min-height: 254px;
  height: fit-content;
`;

export const AuthorContainer = styled.div`
  width: 40%;
  padding: 32px;
`;

export const AuthorName = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  color: ${textColor};
  margin: 0;
`;

export const AuthorPosition = styled.h3`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  color: ${lightTextColor};
  margin: 0;
`;

export const CommentContainer = styled.div`
  width: 60%;
  padding: 32px;
  height: fit-content;
`;

export const Comment = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.33;
  color: ${textColor};
  margin: 0;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -28px;
  width: 100%;
  height: fit-content;
`;

export const CounterContainer = styled.div`
  width: 120px;
  height: 56px;
  background-color: ${primaryColor};
  margin-right: 1px;
`;

export const CounterText = styled.h2`
  width: 35px;
  height: 32px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-weight: 600;
  font-style: italic;
  line-height: 1;
  letter-spacing: 0.7px;
  color: ${whiteColor};
  margin: 8px 44px 16px 41px;
`;

export const SwitchersContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
`;

export const SwitchButton = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${primaryColor};
  cursor: pointer;
`;

export const Arrow = styled.img`
  width: 16px;
  height: 18px;
  margin: 20px 20px 19px 20px;
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(180deg);
`;
