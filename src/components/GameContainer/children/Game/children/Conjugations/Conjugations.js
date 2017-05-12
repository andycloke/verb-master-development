import React from 'react';
import { connect } from 'react-redux';

import style from './Conjugations.css';

class Conjugations extends React.Component {
  
  renderConjugations() {
    const { people, displayConjugations } = this.props;
    const { person, personLonghand, conjugations } = this.props.currentQuestion;
    // map of shorthand people to full length e.g. 's1' -> 'Yo'
    const peopleMap = {};
    for (let i = 0; i < people.length; i += 1) {
      // for person used in current question, keep the longhand person name consistent with that used in the question. otherwise use a random one.
      peopleMap[people[i].person] = people[i].person === person ? personLonghand : people[i].esp[Math.floor(Math.random() * people[i].esp.length)];
    }
    if (displayConjugations) {
      return Object.keys(conjugations).map((prsn) =>
        <div className={prsn === person ? style.conjRow + ' ' + style.conjRowHighlight : style.conjRow} key={prsn}><div className={style.personCell}>{peopleMap[prsn]}</div><div className={style.conjugationCell}>{conjugations[prsn][0]}</div></div>
      );
    }
    return <div />;
  }

  render() {
    return (
        <div className={style.conjugationsContainer}>
          {this.renderConjugations()}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentQuestion: state.currentQuestion,
  displayConjugations: state.displayConjugations,
  people: state.people,
});

export default connect(
  mapStateToProps
)(Conjugations);