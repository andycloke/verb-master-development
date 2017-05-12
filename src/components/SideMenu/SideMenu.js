import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import PeopleOptions from './children/PeopleOptions/PeopleOptions';
import ShowEngInf from './children/ShowEngInf/ShowEngInf';
import KeyboardShortcutsTable from './children/KeyboardShortcutsTable/KeyboardShortcutsTable';

class SideMenu extends React.Component {
  render() {
    if (this.props.playing) {
      return (
        <div>
          <ShowEngInf />
          <MediaQuery query="(min-device-width: 550px)">
            <KeyboardShortcutsTable />
          </MediaQuery>
        </div>
      );
    }
    return <PeopleOptions />;
  }
}

const mapStateToProps = (state) => ({ playing: state.playing });
export default connect(
  mapStateToProps
)(SideMenu);