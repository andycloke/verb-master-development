// This component handles the App template used on every page.
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import MediaQuery from 'react-responsive';

import { togglePlaying } from '../../actions';

class QuitButton extends React.Component {
  handleButtonClick() {
    this.props.toggleGameOpen();
  }

  render() {
    if (this.props.gameOpen) {
      const btnText = this.props.language === 'ENG' ? 'Quit' : 'Deja';

      return (
        <div>
          <MediaQuery query="(max-device-width: 550px)">
            <div style={{ position: 'fixed', top: '12px', right: '-4px', zIndex: 400 }}>
              <Button
                primary
                onClick={() => this.handleButtonClick()}
              >
                <FontIcon style={{ fontSize: 32, color: 'white' }} value="close" />
              </Button>
            </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 550px)">
            <div style={{ position: 'fixed', top: '78px', right: '6px', zIndex: 20 }}>
              <Button
                primary
                raised
                onClick={() => this.handleButtonClick()}
                label={btnText}
              >
                <FontIcon style={{ fontSize: 24, color: 'white' }} value="close" />
              </Button>
            </div>
          </MediaQuery>
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = (state) =>
  ({
    gameOpen: state.playing,
    tenses: state.tenses,
    people: state.people,
    language: state.language,
    score: state.score,
    targetScore: state.targetScore,
  });
const mapDispatchToProps = (dispatch) =>
  ({
    toggleGameOpen: () => {
      dispatch(togglePlaying());
    },
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuitButton);