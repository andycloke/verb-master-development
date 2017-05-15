import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import { RadioButton } from 'react-toolbox/lib/radio';
import Input from 'react-toolbox/lib/input';


import {
  WhichVerbsOptions,
  setWhichVerbs,
  setUserDefinedVerbs,
  VerbInclusionOptions,
  setReflexive,
  setIrregular
} from '../../actions';

import radioStyles from './RadioStyles.css';
import inputStyles from './InputStyles.css';
import styles from './VerbOptions.css';

class VerbOptions extends React.Component {
  render() {
    const { language, setWhichVerbsClick, changeUserDefinedVerbs, setReflexiveVerbs, setIrregularVerbs } = this.props;
    const { userVerbsString, irregularVerbs, reflexiveVerbs, whichVerbs } = this.props.verbSettings;
    const { ALL, COMMON, USER_DEFINED } = WhichVerbsOptions;
    const { INCLUDE, EXCLUDE, ONLY } = VerbInclusionOptions;
    return (
      <div>
        <ListSubHeader caption={language === 'ENG' ? 'Verbs' : 'Verbos'} />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className={styles.optionsCont}>
            <List selectable >
              <ListSubHeader caption={language === 'ENG' ? 'Reflexive' : 'Reflexivos'} />
              <ListItem
                key={4}
                caption={language === 'ENG' ? 'Include' : 'Incluidos'}
                onClick={() => setReflexiveVerbs(INCLUDE)}
                rightActions={[<RadioButton key={1} theme={radioStyles} checked={reflexiveVerbs === INCLUDE} value={INCLUDE} />]}
              />
              <ListItem
                key={5}
                caption={language === 'ENG' ? 'Exclude' : 'Excluidos'}
                onClick={() => setReflexiveVerbs(EXCLUDE)}
                rightActions={[<RadioButton key={1} theme={radioStyles} checked={reflexiveVerbs === EXCLUDE} value={EXCLUDE} />]}
              />
              <ListItem
                key={6}
                caption={language === 'ENG' ? 'Only reflexive verbs' : 'Solamente reflexivos'}
                onClick={() => setReflexiveVerbs(ONLY)}
                rightActions={[<RadioButton key={1} theme={radioStyles} checked={reflexiveVerbs === ONLY} value={ONLY} />]}
              />
            </List>
          </div>
          <div className={styles.optionsCont}>
            <List selectable >
              <ListSubHeader caption={language === 'ENG' ? 'Irregular' : 'Irregulares'} />
              <ListItem
                key={7}
                caption={language === 'ENG' ? 'Include' : 'Incluidos'}
                onClick={() => setIrregularVerbs(INCLUDE)}
                rightActions={[<RadioButton key={1} theme={radioStyles} checked={irregularVerbs === INCLUDE} value={INCLUDE} />]}
              />
              <ListItem
                key={8}
                caption={language === 'ENG' ? 'Exclude' : 'Excluidos'}
                onClick={() => setIrregularVerbs(EXCLUDE)}
                rightActions={[<RadioButton key={1} theme={radioStyles} checked={irregularVerbs === EXCLUDE} value={EXCLUDE} />]}
              />
              <ListItem
                key={9}
                caption={language === 'ENG' ? 'Only irregular verbs' : 'Solamente irregulares'}
                onClick={() => setIrregularVerbs(ONLY)}
                rightActions={[<RadioButton key={1} theme={radioStyles} checked={irregularVerbs === ONLY} value={ONLY} />]}
              />
            </List>
          </div>
          <div className={styles.optionsCont}>
            <List selectable >
              <ListSubHeader caption={language === 'ENG' ? 'Which Verbs' : 'Que Verbos'} />
              <ListItem
                key={1}
                caption={language === 'ENG' ? 'All' : 'Todos'}
                onClick={() => setWhichVerbsClick(ALL)}
                rightActions={[<RadioButton key={1} theme={radioStyles} checked={whichVerbs === ALL} value={ALL} />]}
              />
              <ListItem
                key={2}
                caption={language === 'ENG' ? 'Most Common' : 'Los más communes'}
                onClick={() => setWhichVerbsClick(COMMON)}
                rightActions={[<RadioButton key={1} theme={radioStyles} checked={whichVerbs === COMMON} value={COMMON} />]}
              />
              <ListItem
                key={3}
                onClick={() => setWhichVerbsClick(USER_DEFINED)}
                leftActions={[
                  <Input
                    theme={inputStyles}
                    key={1}
                    label={language === 'ENG' ? 'Choose:' : 'Elige:'}
                    type="text"
                    value={userVerbsString}
                    placeholder="tener, estar,"
                    onChange={(verbsString) => changeUserDefinedVerbs(verbsString)}
                  />
                ]}
                rightActions={[<RadioButton key={2} theme={radioStyles} checked={whichVerbs === USER_DEFINED} value={USER_DEFINED} />]}
              />
            </List>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
  verbSettings: state.verbSettings,
});
const mapDispatchToProps = (dispatch) =>
  ({
    setWhichVerbsClick: (option) => {
      dispatch(setWhichVerbs(option));
    },
    setReflexiveVerbs: (option) => {
      dispatch(setReflexive(option));
    },
    setIrregularVerbs: (option) => {
      dispatch(setIrregular(option));
    },
    changeUserDefinedVerbs: (verbsString) => {
      dispatch(setUserDefinedVerbs(verbsString));
    }
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerbOptions);
