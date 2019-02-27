import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';
import { MainContainer, Header, Content, RoutesContainer, RouteContainer, Route } from './styles';
import Logo from './Logo';

const Layout = ({ children, globalData, activeRoute }) => (
  <MainContainer>
    <Header>
      <Content>
        <Logo />
        <RoutesContainer>
          {globalData.menu.items.map((route, i) => (
            <RouteContainer className={activeRoute === i ? 'active' : ''} key={route.text}>
              <Link href={route.route}>
                <Route>{route.text}</Route>
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
  activeRoute: PropTypes.number.isRequired
};

Layout.defaultProps = {
  children: null,
  globalData: null
};

export default connect(state => state)(Layout);
