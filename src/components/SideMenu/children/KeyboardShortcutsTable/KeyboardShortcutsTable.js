import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';

const letterMap = {
  'A': 'á',
  'E': 'é',
  'I': 'í',
  'N': 'ñ',
  'O': 'ó',
  'U': 'ú',
};

class KeyboardShortcutsTable extends React.Component {
  render() {
    const ShortcutsTable = Object.keys(letterMap).map((letter) =>
      <ListItem
        key={letter}
        caption={`Shift - ${letter}`}
        rightActions={[
          <span key={1}>{letterMap[letter]} </span>,
        ]}
      />
    );
    return (
      <List >
        <ListSubHeader caption={this.props.language === 'ENG' ? 'Keyboard Shortcuts' : 'Atajos de Teclado'} />
        {ShortcutsTable}
      </List>
    );
  }
}
const mapStateToProps = (state) => ({ language: state.language });
export default connect(
  mapStateToProps
)(KeyboardShortcutsTable);