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
          {globalData.menu.items.map(route => (
            <RouteContainer
              className={activeRoute === route.route ? 'active' : ''}
              key={route.text}
            >
              {route.route !== '#' ? (
                <Link as={route.text} href={route.route}>
                  <Route id="no-route">{route.text}</Route>
                </Link>
              ) : (
                <Link href={route.route}>
                  <Route id="route">{route.text}</Route>
                </Link>
              )}
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
  activeRoute: PropTypes.string
};

Layout.defaultProps = {
  children: null,
  globalData: null,
  activeRoute: ''
};

export default connect(state => state)(Layout);
