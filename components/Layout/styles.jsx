import styled from 'styled-components';
import { whiteColor, primaryColor, containerSize } from '../../static/styleConstants';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${whiteColor};
  height: 64px;
  width: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 64px);
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  max-width: ${containerSize};
  display: flex;
`;

export const HeaderContent = styled(Content)`
  justify-content: space-between;
`;

export const InnerContent = styled(Content)`
  flex-direction: column;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainLogo = styled.img`
  width: 133px;
  height: 26px;
  object-fit: contain;
`;

export const RoutesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RouteContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active {
    border-top: 4px solid ${primaryColor};
  }

  &.active > a {
    margin-top: -8px;
  }
`;

export const Route = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.3px;
  color: ${primaryColor};
  cursor: pointer;
`;
