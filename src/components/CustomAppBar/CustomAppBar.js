import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';

import theme from './CustomAppBar.css';

import LanguageDropDown from './children/LanguageDropDown/LanguageDropDown';

export default class CustomAppBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar fixed {...this.props} theme={theme}>
          <LanguageDropDown />
        </AppBar>
      </div>
    );
  }
}

