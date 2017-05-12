import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import { Checkbox } from 'react-toolbox/lib/checkbox';


import { togglePerson } from '../../../../actions';

class PeopleOptions extends React.Component {
  render() {
    const ListCheckboxes = this.props.people.map((person) =>
      <ListItem
        key={person.person}
        caption={person.esp.join(', ')}
        onClick={() => this.props.onPersonClick(person.person)}
        rightActions={[
          <Checkbox
            key={1}
            style={{ marginTop: 7 }}
            checked={person.inPlay}
            onChange={() => this.props.onPersonClick(person.person)}
          />
        ]}
      />
    );
    return (
      <List selectable >
        <ListSubHeader caption={this.props.language === 'ENG' ? 'People' : 'Personas'} />
        {ListCheckboxes}
      </List>
    );
  }
}

const mapStateToProps = (state) => ({ people: state.people, language: state.language });
const mapDispatchToProps = (dispatch) =>
  ({
    onPersonClick: (value) => {
      dispatch(togglePerson(value));
    },
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleOptions);
