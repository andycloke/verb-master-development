import React from 'react';
import { connect } from 'react-redux';
import styles from './ProgressBar.css';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentageWidth: 0,
      progressBarStyles: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if ((this.props.playing !== nextProps.playing) && (nextProps.playing && nextProps.score === 0)) {
      // starting new game - add an offset to show progress for starting (before any questions answered)
      this.setState({ percentageWidth: ((1 / (nextProps.targetScore + 1)) * 100).toFixed(0), progressBarStyles: {}, });
    } else {
      // increase progress bar width
      this.setState({ percentageWidth: (((nextProps.score + 1) / (nextProps.targetScore + 1)) * 100).toFixed(0), progressBarStyles: {}, });
    }
    if (((this.props.playing !== nextProps.playing) && (nextProps.score === nextProps.targetScore)) && nextProps.score !== 0) {
      // finished game, slow down transition and make progress bar 0
      setTimeout(() => this.setState({ percentageWidth: 0, progressBarStyles: { transitionDuration: '1500ms' }, }), 500);
    }
  }
  render() {
    return (
      <div className={styles.cont}>
        <div className={styles.barWrapper}>
          <div className={styles.bar} style={{ ...this.state.progressBarStyles, width: `${this.state.percentageWidth}%` }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  targetScore: state.targetScore,
  score: state.score,
  playing: state.playing,
});
export default connect(
  mapStateToProps
)(ProgressBar);