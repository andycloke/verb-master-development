import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import { toggleTense } from '../../../../actions';

import TenseCard from './children/TenseCard/TenseCard';

import styles from './TensesMenu.css';

class TensesMenu extends React.Component {
  render() {
    const TenseCards = this.props.tenses.map((tense) =>
      <div key={tense.tense} className={styles.tenseCardCont}>
        <TenseCard
          caption={this.props.language === 'ENG' ? tense.eng : tense.esp}
          checked={tense.inPlay}
          examples={tense.examples}
          toReviewCount={tense.toReviewCount}
          toReviewVerbs={tense.toReviewVerbs}
          onClick={() => { this.props.onTenseCardClick(tense.tense); }}
        />
      </div >
    );
    return (
      <div>
        <List selectable>
          <ListSubHeader caption={this.props.language === 'ENG' ? 'Tenses' : 'Tiempos'} />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {TenseCards}
            <div className={styles.tenseCardCont}>
              <ListItem
                caption={<span key={1} className={styles.cardLink}>
                  {this.props.language === 'ENG' ? 'Verb Master is created by ' : 'Verb Master es creado por '}
                  <a
                    className={styles.cardLink}
                    target="_blank"
                    href="https://andycloke.github.io/">
                    Andy Cloke
                  </a>
                </span>}
                legend={<span key={1} className={styles.cardLink}>
                  {this.props.language === 'ENG' ? 'Check it out on ' : 'Miralo en '}
                  <a
                    className={styles.cardLink}
                    target="_blank"
                    href="https://github.com/andycloke/verb-master-development">
                    Github
                  </a>
                </span>}
              
              />

            </div>
          </div>
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ tenses: state.tenses, language: state.language });
const mapDispatchToProps = (dispatch) =>
  ({
    onTenseCardClick: (value) => {
      dispatch(toggleTense(value));
    },
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TensesMenu);
