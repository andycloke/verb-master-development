// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import TestButton from './common/button/TestButton';

// import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <TestButton label="This is Test" primary/>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  // loading: PropTypes.bool.isRequired
};

// function mapStateToProps(state, ownProps) {
//     return {
//         loading: state.ajaxCallsInProgress > 0
//     };
// }

export default App;
