import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import { Snackbar } from 'react-toolbox/lib/snackbar';
import Tooltip from 'react-toolbox/lib/tooltip';

import { newQuestion, submitAnswer } from '../../../../../../actions';

import style from './GameInput.css';

const TooltipDiv = Tooltip('div');

const letterMap = {
  'A': 'á',
  'E': 'é',
  'I': 'í',
  'N': 'ñ',
  'O': 'ó',
  'U': 'ú',
};

class GameInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: '',
      keysPressed: {},
      showSnackbar: false,
      personTooltipOpener: {},
      personTooltipCloser: {},
      submitbtnOpener: {},
      submitbtnCloser: {},
      thumbsUpStyle: style.feedbackIconGreen + ' ' + style.hidden,
      icon: 'thumb_up',
    };
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if ((this.props !== nextProps && nextProps.questionComplete) && (nextProps.score !== nextProps.targetScore)) {
      // answer was correct and not the end of round, so create new question
      this.props.createNewQuestion(this.props.people, this.props.tenses, this.props.score, this.props.targetScore, this.props.verbSettings);
      this.setState({
        userAnswer: this.refs.input.value = '',
      });
      window.setTimeout(() => this.checkGameStillOpenAndFocusInput(), 700);
    }
    if (this.props.gameOpen !== nextProps.gameOpen && nextProps.gameOpen) {
      // game starts
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
      this.setState({
        userAnswer: this.refs.input.value = '',
      });
      window.setTimeout(() => this.checkGameStillOpenAndFocusInput(), 700);
      if (this.props.firstEverGame) {
        this.setState({
          personTooltipOpener: window.setTimeout(() => this.refs.personTooltip.click(), 6000),
          personTooltipCloser: window.setTimeout(() => this.refs.personTooltip.click(), 8500),
          submitbtnOpener: window.setTimeout(() => this.refs.submitbtn.click(), 8500),
          submitbtnCloser: window.setTimeout(() => this.refs.submitbtn.click(), 11000),
        });
      }
    } else if (this.props.gameOpen !== nextProps.gameOpen && !nextProps.gameOpen) {
      // game ends
      this.setState({ keysPressed: { ...this.state.keysPressed, Enter: false } });
      window.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('keyup', this.handleKeyUp);
      this.refs.input.blur();
      // clear timeouts
      window.clearTimeout(this.state.personTooltipOpener);
      window.clearTimeout(this.state.personTooltipCloser);
      window.clearTimeout(this.state.submitbtnOpener);
      window.clearTimeout(this.state.submitbtnCloser);
    }
  }

  checkGameStillOpenAndFocusInput() {
    if (this.props.gameOpen) {
      this.refs.input.focus();
    }
  }

  handleChange(e) {
    this.setState({ userAnswer: e.target.value });
  }
  handleKeyDown(e) {
    this.setState({ keysPressed: { ...this.state.keysPressed, [e.key]: true } });
    if (this.state.keysPressed.Shift && e.key in letterMap && !this.props.displayConjugations) {
      e.preventDefault();
      this.addLetter(letterMap[e.key]);
    } else if (this.state.keysPressed.Enter) {
      this.handleSubmitButtonClick();
      window.setTimeout(() => this.refs.input.blur());
    }
  }
  handleKeyUp(e) {
    this.setState({ keysPressed: { ...this.state.keysPressed, [e.key]: false } });   // set property for key that was pressed to false
  }

  addLetter(letter) {
    const startSelection = this.refs.input.selectionStart;
    const endSelection = this.refs.input.selectionEnd;
    // Hacky way of getting around the cursor jumping to the end of input bug.
    this.setState({
      userAnswer: this.refs.input.value = this.state.userAnswer.slice(0, startSelection) + letter + this.state.userAnswer.slice(endSelection),
    });
    this.refs.input.focus();
    this.refs.input.setSelectionRange(endSelection + 1, endSelection + 1);
  }

  handleSubmitButtonClick() {
    const { displayConjugations, people, tenses, currentQuestion, score, targetScore, verbSettings } = this.props;
    if (!displayConjugations) {
      if (currentQuestion.answers.includes(this.state.userAnswer.toLowerCase())) {
        // answer correct - show thumbs up
        this.setState({ icon: 'thumb_up', thumbsUpStyle: style.feedbackIconGreen + ' ' + style.inline });
        window.setTimeout(() => this.setState({ thumbsUpStyle: style.feedbackIconGreen + ' ' + style.hidden }), 1000);
      } else {
        // answer correct - show thumbs up
        this.setState({ icon: 'thumb_down', thumbsUpStyle: style.feedbackIconRed + ' ' + style.inline });
        window.setTimeout(() => this.setState({ thumbsUpStyle: style.feedbackIconRed + ' ' + style.hidden }), 1000);
      }
      // submit answer
      this.props.submitAns(currentQuestion, this.state.userAnswer, people, tenses);
      window.setTimeout(() => this.checkGameStillOpenAndFocusInput(), 100);
    } else {
      // close conugations and fire new question
      this.props.createNewQuestion(people, tenses, score, targetScore, verbSettings);
      this.setState({
        userAnswer: this.refs.input.value = '',
      });
      window.setTimeout(() => this.checkGameStillOpenAndFocusInput(), 100);
    }
  }

  closeSnackBar() {
    this.setState({ showSnackbar: false });
  }

  render() {
    const { displayConjugations, gameOpen, language } = this.props;
    const { personLonghand } = this.props.currentQuestion;
    const rightButtonIcon = displayConjugations ? 'arrow_forward' : 'send';
    // accented letter buttons
    const letterButtons = Object.values(letterMap).map((letter) =>
      (<Button
        floating
        primary
        mini
        disabled={displayConjugations}
        key={letter} label={letter}
        className={style.letterButtons}
        onClick={!displayConjugations ? () => this.addLetter(letter) : () => { }}
      />)
    );
    return (
      <div>
        <div className={style.row}>
          <div className={style.left}>
            {gameOpen &&
              <TooltipDiv
                theme={style}
                tooltip={language === 'ENG' ? '3. For this person' : '3. Para esta persona'}
                tooltipShowOnClick
                tooltipHideOnClick
                tooltipPosition="right"
              >
                <p ref="personTooltip">{personLonghand}</p>
              </TooltipDiv>}
          </div>
          <div className={style.center}>
            <input
              ref="input"
              className={style.input}
              type="text"
              defaultValue={this.state.userAnswer}
              onChange={e => this.handleChange(e)}
              disabled={displayConjugations}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <div className={style.iconWrapper}>
              <FontIcon className={this.state.thumbsUpStyle} value={this.state.icon} />
            </div>
          </div>
          <div className={style.right}>
            {gameOpen &&
              <TooltipDiv
                theme={style}
                tooltip={language === 'ENG' ? '4. Then click here' : '4. Luego haz clic aqui'}
                tooltipShowOnClick
                tooltipHideOnClick
                tooltipPosition="left"
              >
                <span ref="submitbtn"></span>
              </TooltipDiv>}
            <Button
              floating
              primary={displayConjugations}
              accent={!displayConjugations}
              mini
              icon={rightButtonIcon}
              className={style.letterButtons}
              onClick={() => this.handleSubmitButtonClick()}
            />
          </div>
        </div>
        {!displayConjugations &&
          <div className={style.bottomrow}>
            {letterButtons}
          </div>
        }
        <Snackbar
          action="Dismiss"
          active={this.state.showSnackbar}
          label="Select some people"
          timeout={1500}
          onClick={this.closeSnackBar}
          onTimeout={this.closeSnackBar}
          type="warning"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
  questionComplete: state.questionComplete,
  currentQuestion: state.currentQuestion,
  displayConjugations: state.displayConjugations,
  gameOpen: state.playing,
  people: state.people,
  tenses: state.tenses,
  score: state.score,
  targetScore: state.targetScore,
  firstEverGame: state.firstEverGame,
  verbSettings: state.verbSettings,
});
const mapDispatchToProps = (dispatch) =>
  ({
    submitAns: (currentQuestion, userAnswer, people, tenses) => {
      dispatch(submitAnswer(currentQuestion, userAnswer, people, tenses));
    },
    createNewQuestion: (people, tenses, score, targetScore, verbSettings) => {
      dispatch(newQuestion(people, tenses, score, targetScore, verbSettings));
    }
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInput);