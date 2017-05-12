import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import Switch from 'react-toolbox/lib/switch';

import { toggleEngInf } from '../../../../actions';

class ShowEngInf extends React.Component {
  render() {
    return (
      <List selectable >
        <ListSubHeader caption={this.props.language === 'ENG' ? 'Options' : 'Opciónes'} />
        <ListItem
          caption={this.props.language === 'ENG' ? 'Show english infinitive' : 'Muestre el infinitivo inglés'}
          onClick={() => this.props.handleChange()}
          rightActions={[
            <div key={1} style={{ marginBottom: '-14px', marginLeft: '-15px' }}>
            <Switch
              key={3}
              checked={this.props.showEngInf}
              onChange={() => this.props.handleChange()}
            />
            </div>
          ]}
        />
      </List>
    );
  }
}

const mapStateToProps = (state) => ({ showEngInf: state.showEngInf, language: state.language });
const mapDispatchToProps = (dispatch) =>
  ({
    handleChange: () => {
      dispatch(toggleEngInf());
    },
  });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowEngInf);
