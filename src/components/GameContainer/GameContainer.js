// This component handles the App template used on every page.
import React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'react-toolbox/lib/snackbar';
import MediaQuery from 'react-responsive';

import { togglePlaying, newQuestion, resetScoreIfNec, WhichVerbsOptions } from '../../actions';

import TensesMenu from './children/TensesMenu/TensesMenu';
import Game from './children/Game/Game';
import VerbOptions from '../VerbOptions/VerbOptions';

import style from './GameContainer.css';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackbar: false,
      label: '',
      transition: 'transform 350ms ease-out',
    };
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props !== nextProps && !nextProps.gameOpen) && (nextProps.score === nextProps.targetScore && nextProps.score)) {
      // game complete, delay before closing
      this.setState({ transition: 'transform 350ms ease-out 1200ms' });
    } else {
      this.setState({ transition: 'transform 350ms ease-out' });
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.key === 'Enter' && !this.props.gameOpen) {
      if (this.props.tenses.every((tenseObj) => !tenseObj.inPlay) && this.props.people.every((tenseObj) => !tenseObj.inPlay)) {
        // no tenses or people selected selected, so show snackbar warning
        this.setState({ label: this.props.language === 'ENG' ? 'Select some people and tenses' : 'Selecciona unas personas y unos tiempos', showSnackbar: true });
      } else if (this.props.tenses.every((tenseObj) => !tenseObj.inPlay)) {
        // no tenses selected
        this.setState({ label: this.props.language === 'ENG' ? 'Select some tenses' : 'Selecciona unos tiempos', showSnackbar: true });
      } else if (this.props.people.every((tenseObj) => !tenseObj.inPlay)) {
        // no people selected
        this.setState({ label: this.props.language === 'ENG' ? 'Select some people' : 'Selecciona unas personas', showSnackbar: true });
      } else if (this.props.tenses.every((obj) => !obj.inPlay || obj.tense.slice(0, 3) === 'Imp')
        && this.props.people.every((obj) => !obj.inPlay || (obj.person === 'yo' || obj.person === 'ns'))) {
        // no people suitable for imperative tenses
        this.setState({ label: this.props.language === 'ENG' ? 'Select more people or tenses' : 'Selecciona mas personas o tiempos', showSnackbar: true });
      } else if (this.props.verbSettings.whichVerbs === WhichVerbsOptions.USER_DEFINED && !this.props.verbSettings.validUserVerbs.length) {
        // no valid user defined verbs
        this.setState({ label: this.props.language === 'ENG' ? 'Enter more verbs & check your spelling' : 'Introduce mas verbos y comproba la ortografía', showSnackbar: true });
      } else {
        e.preventDefault();
        this.props.resetScoreIfNec();
        this.props.toggleGameOpen();
        this.props.createNewQuestion(this.props.people, this.props.tenses, this.props.score, this.props.targetScore, this.props.verbSettings);
      }
    } else if (e.key === 'Escape' && this.props.gameOpen) {
      e.preventDefault();
      this.props.toggleGameOpen();
    }
  }
  closeSnackBar() {
    this.setState({ showSnackbar: false });
  }

  render() {
    const gameLeftOffset = this.props.gameOpen ? 0 : '100%';
    const tensesLeftOffset = this.props.gameOpen ? '-100%' : 0;
    return (
      <div className={style.cont}>
        <div className={style.tensesCont} style={{ transition: this.state.transition, transform: `translateX(${tensesLeftOffset})` }} >
          <TensesMenu />
          <MediaQuery query="(min-device-width: 550px)">
            <VerbOptions />
          </MediaQuery>
        </div>
        <div className={style.gameCont} style={{ transition: this.state.transition, transform: `translateX(${gameLeftOffset})` }} >
          <Game />
        </div>
        <Snackbar
          action="Dismiss"
          active={this.state.showSnackbar}
          label={this.state.label}
          timeout={2500}
          onClick={this.closeSnackBar}
          onTimeout={this.closeSnackBar}
          type="warning"
        />
      </div >

    );
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
)(GameContainer);