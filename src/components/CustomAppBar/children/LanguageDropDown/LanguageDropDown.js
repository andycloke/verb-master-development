import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'react-toolbox/lib/dropdown';
import MediaQuery from 'react-responsive';

import { setLanguage, Languages } from '../../../../actions';

import theme from './LanguageDropDown.css';


const labels = [];
const langs = Object.keys(Languages);
for (let i = 0; i < langs.length; i += 1) {
  labels.push({
    value: langs[i],
    label: langs[i],
  });
}


class LanguageDropDown extends React.Component {
  render() {
    if (!this.props.playing) {
      return (
        <Dropdown
          theme={theme}
          source={labels}
          value={this.props.value}
          onChange={this.props.handleLanguageChange} />
      );
    }
    return (
      <MediaQuery query="(min-device-width: 550px)">
        <Dropdown
          theme={theme}
          source={labels}
          value={this.props.value}
          onChange={this.props.handleLanguageChange} />
      </MediaQuery>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.language, playing: state.playing });
const mapDispatchToProps = (dispatch) =>
  ({
    handleLanguageChange: (value) => {
      dispatch(setLanguage(value));
    },
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageDropDown);