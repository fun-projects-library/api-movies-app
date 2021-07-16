import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import {Container,Image,Menu,Visibility} from "semantic-ui-react";
import { menuStyle, fixedMenuStyle} from '../helpers/styleHelpers'

export default class Header extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    };
    
    stickOverlay = () => this.setState({ overlayFixed: true });

    stickTopMenu = () => this.setState({ menuFixed: true });

    unStickOverlay = () => this.setState({ overlayFixed: false });

    unStickTopMenu = () => this.setState({ menuFixed: false });

    render() {
        const { menuFixed } = this.state;
        return (
            <div>
                <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item as={NavLink} exact to="/">
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"
                />
              </Menu.Item>
              <Menu.Item header as={NavLink} exact to="/">Movie App</Menu.Item>
              <Menu.Item as={NavLink} exact to="/movies">
                Movies
              </Menu.Item>
              <Menu.Item as={NavLink} exact to="/movies/new">
                Add New
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
            </div>
        )
    }
}
