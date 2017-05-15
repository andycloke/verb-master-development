import React from 'react';
import { connect } from 'react-redux';

import Tooltip from 'react-toolbox/lib/tooltip';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';

import style from './GameTable.css';

const TooltipDiv = Tooltip('div');

class GameTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verbTooltipOpener: {},
      verbTooltipCloser: {},
      tenseTooltipOpener: {},
      tenseTooltipCloser: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.gameOpen !== nextProps.gameOpen && nextProps.gameOpen) {
      this.refs.message.innerHTML = '';
      // game starts
      if (this.props.firstEverGame) {
        // first ever attempt
        // set 2 timeouts, each of which clicks on the div to show tooltip and updates state, 
        // also set 2 to click again to hide tooltip
        this.setState({
          verbTooltipOpener: window.setTimeout(() => this.props.gameOpen && this.refs.verbTooltip.click(), 1000),
          verbTooltipCloser: window.setTimeout(() => this.props.gameOpen && this.refs.verbTooltip.click(), 3500),
          tenseTooltipOpener: window.setTimeout(() => this.props.gameOpen && this.refs.tenseTooltip.click(), 3500),
          tenseTooltipCloser: window.setTimeout(() => this.props.gameOpen && this.refs.tenseTooltip.click(), 6000),
        });
      }
    } else if (this.props.gameOpen !== nextProps.gameOpen && !nextProps.gameOpen) {
      // game closing
      // clear timeouts
      window.clearTimeout(this.state.verbTooltipOpener);
      window.clearTimeout(this.state.verbTooltipCloser);
      window.clearTimeout(this.state.tenseTooltipOpener);
      window.clearTimeout(this.state.tenseTooltipCloser);
      if (nextProps.score === nextProps.targetScore) {
        // game complete, show well done message
        this.refs.message.innerHTML = nextProps.language === 'ENG' ? 'Well Done!' : '¡Bien Hecho!';
      }
    }
  }
  render() {
    const { showEngInf, language, gameOpen, score, incorrect } = this.props;
    const { verbEng, verbEsp, tenseLonghandEng, tenseLonghandEsp } = this.props.currentQuestion;
    return (
      <div>
        <div className={style.row + ' ' + style.toprow}>
          <div className={style.left}>
            <p className={style.infoText}>{language === 'ENG' ? 'Tense' : 'Tiempo'}</p>
          </div>
          <div className={style.center}>
            {gameOpen &&
              <TooltipDiv
                theme={style}
                tooltip={language === 'ENG' ? '2. In this tense' : '2. En este tiempo'}
                tooltipShowOnClick
                tooltipHideOnClick
                tooltipPosition="right"
              >
                <p ref="tenseTooltip">{language === 'ENG' ? tenseLonghandEng : tenseLonghandEsp}</p>
              </TooltipDiv>
            }
          </div>
            <div className={style.right}>
              <Chip>
                <Avatar className={style.icon + ' ' + style.correctIcon} icon="done" />
                <span>{score}</span>
              </Chip>
            </div>
        </div>
        <div className={style.row}>
          <div className={style.left}>
            <p className={style.infoText}>{language === 'ENG' ? 'Verb' : 'Verbo'}</p>
          </div>
          <div className={style.center}>
            <div ref="message"></div>
            {gameOpen &&
              <TooltipDiv
                theme={style}
                tooltip={language === 'ENG' ? '1. Conjugate this verb' : '1. Conjuga este verbo'}
                tooltipShowOnClick
                tooltipHideOnClick
                tooltipPosition="right"
              >
                <p ref="verbTooltip">{showEngInf ? `${verbEsp} - ${verbEng}` : verbEsp}</p>
              </TooltipDiv>
            }
          </div>
            <div className={style.right}>
              <Chip>
                <Avatar className={style.icon + ' ' + style.inCorrectIcon} icon="close" />
                <span>{incorrect}</span>
              </Chip>
            </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentQuestion: state.currentQuestion,
  language: state.language,
  showEngInf: state.showEngInf,
  firstEverGame: state.firstEverGame,
  gameOpen: state.playing,
  score: state.score,
  incorrect: state.incorrect,
});
export default connect(
  mapStateToProps
)(GameTable);

