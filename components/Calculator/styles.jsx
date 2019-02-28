import styled from 'styled-components';
import { textColor, primaryColor, whiteColor } from '../../static/styleConstants';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerContainer = styled.div`
  width: 50%;
  margin-top: -30%;
`;

export const Description = styled.p`
  margin-top: 28px;
  font-family: 'Roboto', sans-serif;
  width: 349px;
  font-size: 16px;
  line-height: 1.5;
  color: ${textColor};
`;

export const TitleContainer = styled.div`
  width: fit-content;
  margin-bottom: 4px;
  display: flex;
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

export const Dollar = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  margin-right: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.8px;
  color: ${primaryColor};
`;

export const Number = styled.h1`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 72px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 1px;
  text-align: right;
  color: ${primaryColor};
`;

export const Label = styled.b`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${textColor};
`;

export const LabelContainer = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ValuesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ValueContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RangeContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 46px;
`;

const NumberInput = styled.input`
  text-align: right;
  border-radius: 4px;
  height: 52px;
  max-width: 50%;
  border: solid 1px #d6dcff;
  background-color: ${whiteColor};
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.11;
  letter-spacing: 0.8px;
  color: ${textColor};
  padding-right: 12px;
`;

export const Money = styled(NumberInput)`
  background: url(/static/images/dollar.svg) no-repeat ${whiteColor} 7px 7px;
  padding-left: 30px;
  width: 190px;
`;

export const Unit = styled(NumberInput)`
  width: 67px;
`;

export const SliderLabel = styled.b`
  width: 157px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${textColor};
`;

export const Range = styled.input`
  &[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    margin-top: 22px;
  }

  &[type='range']:focus {
    outline: none;
  }

  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    box-shadow: 0px 0px 1.4px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
    background: #f0f2ff;
    border-radius: 25px;
    border: 0px solid rgba(0, 0, 0, 0);
  }

  &[type='range']::-webkit-slider-thumb {
    box-shadow: 2px 2px 8px rgba(7, 30, 179, 0.24), 0px 0px 2px rgba(8, 34, 204, 0.24);
    border: 5px solid #071eb3;
    height: 16px;
    width: 16px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
`;
