import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';
import { MainContainer, Header, Content, RoutesContainer, RouteContainer, Route } from './styles';
import Logo from './Logo';
import { changeRoute } from '../../store/actions';

const Layout = ({ children, globalData, activeRoute, dispatch }) => (
  <MainContainer>
    <Header>
      <Content>
        <Logo />
        <RoutesContainer>
          {globalData.menu.items.map((route, i) => (
            <RouteContainer className={activeRoute === i ? 'active' : ''} key={route.text}>
              <Link href={route.route}>
                <Route onClick={() => dispatch(changeRoute(i))}>{route.text}</Route>
              </Link>
            </RouteContainer>
          ))}
        </RoutesContainer>
      </Content>
    </Header>
    {children}
  </MainContainer>
);

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: PropTypes.node,
  globalData: PropTypes.shape({
    menu: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          route: PropTypes.string
        })
      )
    })
  }),
  activeRoute: PropTypes.number.isRequired,
  dispatch: PropTypes.func
};

Layout.defaultProps = {
  children: null,
  globalData: null,
  dispatch: () => {}
};

export default connect(state => state)(Layout);
