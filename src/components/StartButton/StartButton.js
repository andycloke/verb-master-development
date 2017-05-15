// This component handles the App template used on every page.
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
import { Snackbar } from 'react-toolbox/lib/snackbar';
import FontIcon from 'react-toolbox/lib/font_icon';
import MediaQuery from 'react-responsive';

import { togglePlaying, newQuestion, resetScoreIfNec } from '../../actions';

class StartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackbar: false,
      label: '',
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }
  closeSnackBar() {
    this.setState({ showSnackbar: false });
  }
  handleStartButtonClick() {
    if (this.props.tenses.every((tenseObj) => !tenseObj.inPlay) && this.props.people.every((obj) => !obj.inPlay)) {
      // no tenses or people selected selected, so show snackbar warning
      this.setState({ label: this.props.language === 'ENG' ? 'Select some people and tenses' : 'Selecciona unas personas y unos tiempos', showSnackbar: true });
    } else if (this.props.tenses.every((tenseObj) => !tenseObj.inPlay)) {
      // no tenses selected
      this.setState({ label: this.props.language === 'ENG' ? 'Select some tenses' : 'Selecciona unos tiempos', showSnackbar: true });
    } else if (this.props.people.every((obj) => !obj.inPlay)) {
      // no people selected
      this.setState({ label: this.props.language === 'ENG' ? 'Select some people' : 'Selecciona unas personas', showSnackbar: true });
    } else if (this.props.tenses.every((obj) => !obj.inPlay || obj.tense.slice(0, 3) === 'Imp')
      && this.props.people.every((obj) => !obj.inPlay || (obj.person === 'yo' || obj.person === 'ns'))) {
      // no people suitable for imperative tenses
      this.setState({ label: this.props.language === 'ENG' ? 'Select more people or tenses' : 'Selecciona mas personas o tiempos', showSnackbar: true });
    } else {
      this.props.resetScoreIfNec();
      this.props.createNewQuestion(this.props.people, this.props.tenses, this.props.score, this.props.targetScore, this.props.verbSettings);
      this.props.toggleGameOpen();
    }
  }

  render() {
    if (!this.props.gameOpen) {
      const btnText = this.props.language === 'ENG' ? 'Play' : 'Juega';
      return (
        <div>
          <MediaQuery query="(max-device-width: 550px)">
            <div style={{ position: 'fixed', bottom: '15px', right: '20px', zIndex: 20 }}>
              <Button
                primary
                floating
                onClick={() => this.handleStartButtonClick()}
              >
                <FontIcon style={{ fontSize: 30, }} value="arrow_forward" />
              </Button>
            </div>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 550px)">
            <div style={{ position: 'fixed', top: '78px', right: '6px', zIndex: 20 }}>
              <Button
                primary
                raised
                onClick={() => this.handleStartButtonClick()}
                label={btnText}
              >
                <FontIcon style={{ fontSize: 22, }} value="arrow_forward" />
              </Button>
            </div>
          </MediaQuery>
          <Snackbar
            action="Dismiss"
            active={this.state.showSnackbar}
            label={this.state.label}
            timeout={1500}
            onClick={this.closeSnackBar}
            onTimeout={this.closeSnackBar}
            type="warning"
          />
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
    verbSettings: state.verbSettings,
  });
const mapDispatchToProps = (dispatch) =>
  ({
    toggleGameOpen: () => {
      dispatch(togglePlaying());
    },
    createNewQuestion: (people, tenses, score, targetScore, verbSettings) => {
      dispatch(newQuestion(people, tenses, score, targetScore, verbSettings));
    },
    resetScoreIfNec: () => {
      dispatch(resetScoreIfNec());
    }
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartButton);