import React from 'react';
import { ListItem } from 'react-toolbox/lib/list';
import Checkbox from 'react-toolbox/lib/checkbox';

class TenseCard extends React.Component {

  render() {
    const { caption, checked, examples, onClick } = this.props;
    return (
      <ListItem
        selectable
        caption={caption}
        legend={examples}
        onClick={onClick}
        rightActions={[
          <p key={1}>{}</p>,
          <p key={2}>{}</p>,
          <Checkbox
            key={4}
            style={{ marginTop: 7 }}
            checked={checked}
            onChange={onClick}
          />
        ]}
      />
    );
  }
}
export default TenseCard;