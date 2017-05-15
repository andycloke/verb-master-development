import React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import PeopleOptions from './children/PeopleOptions/PeopleOptions';
import ShowEngInf from './children/ShowEngInf/ShowEngInf';
import KeyboardShortcutsTable from './children/KeyboardShortcutsTable/KeyboardShortcutsTable';
import VerbOptions from '../VerbOptions/VerbOptions';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // playingDelayed: false,
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
    return (
      <div>
        <PeopleOptions />
        <MediaQuery query="(max-device-width: 550px)">
          <VerbOptions />
        </MediaQuery>
        <div id="mc_embed_signup">
          <form
            action="//github.us15.list-manage.com/subscribe/post?u=9aea0e2bc4fdecfc0af9c9b3b&amp;id=4d43310977"
            method="post" id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div style={{ padding: '5px 10px 0' }}>
              <p style={{ fontSize: '15px', lineHeight: '20px' }}>
                Hear about major features when they're added (e.g. audio coming soon!). Never any spam.</p>
              <div style={{ padding: '0 0 10px' }}
              >
                <p style={{ fontSize: '14px' }}>Your email:</p>
                <input style={{ outline: 'none', padding: '7px 3px', width: '100%', fontSize: '15px' }}
                  type="email"
                  ref="emailInput"
                  defaultValue=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL" />
              </div>
              <div><input style={{
                outline: 'none',
                border: 'none',
                padding: '12px 5px',
                width: '100%',
                fontSize: '14px',
                color: 'white',
                backgroundColor: 'rgb(63, 81, 181)',
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)',
                fontWeight: 'bold'
              }}
                type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="button" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
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