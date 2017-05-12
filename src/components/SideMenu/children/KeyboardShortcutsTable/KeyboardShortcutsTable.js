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
    const KeyboardShortcuts = Object.keys(letterMap).map((letter) =>
      <ListItem
        key={letter}
        caption={`Shift - ${letter}`}
        rightActions={[
          <span key={letter}>{letterMap[letter]} </span>,
        ]}
      />
    );
    return (
      <List >
        <ListSubHeader caption={this.props.language === 'ENG' ? 'Keyboard Shortcuts' : 'Atajos de Teclado'} />
        {KeyboardShortcuts}
        <ListItem
          key={4353452}
          caption="⏎"
          rightActions={[
            <span key={1}>{this.props.language === 'ENG' ? 'Submit Answer' : 'Entrega respuesta'} </span>,
          ]}
        />
        <ListItem
          key={4320853405}
          caption="Esc"
          rightActions={[
            <span key={1}>{this.props.language === 'ENG' ? 'Quit' : 'Deja'} </span>,
          ]}
        />
      </List>
    );
  }
}
const mapStateToProps = (state) => ({ language: state.language });
export default connect(
  mapStateToProps
)(KeyboardShortcutsTable);