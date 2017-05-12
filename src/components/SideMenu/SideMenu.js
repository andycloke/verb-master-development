import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import PeopleOptions from './children/PeopleOptions/PeopleOptions';
import ShowEngInf from './children/ShowEngInf/ShowEngInf';
import KeyboardShortcutsTable from './children/KeyboardShortcutsTable/KeyboardShortcutsTable';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playingDelayed: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.playing !== nextProps.playing && nextProps.playing) {
      // game starts
      setTimeout(() => this.setState({ playingDelayed: true }), 0);
    } else if (this.props.playing !== nextProps.playing && !nextProps.playing) {
      // game closing
      if (nextProps.score && nextProps.score === nextProps.targetScore) {
        setTimeout(() => this.setState({ playingDelayed: false }), 1200);
      } else {
        setTimeout(() => this.setState({ playingDelayed: false }), 350);
      }
    }
  }
  render() {
    if (this.state.playingDelayed) {
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

const mapStateToProps = (state) => ({
  score: state.score,
  targetScore: state.targetScore,
  playing: state.playing
});
export default connect(
  mapStateToProps
)(SideMenu);