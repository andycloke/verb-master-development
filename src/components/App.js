import React from 'react';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';

import CustomAppBar from './CustomAppBar/CustomAppBar';
import SideMenu from './SideMenu/SideMenu';
import GameContainer from './GameContainer/GameContainer';
import QuitButton from './QuitButton/QuitButton';
import StartButton from './StartButton/StartButton';
import ProgressBar from './CustomAppBar/children/ProgressBar/ProgressBar';

import style from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerActive: false,
      drawerPinned: false,
    };

    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
  }

  toggleDrawerActive() {
    this.setState({ drawerActive: !this.state.drawerActive });
  }

  render() {
    return (
      <div className={style.cont}>
        <ProgressBar />
        <Layout>
          <NavDrawer active={this.state.drawerActive}
            pinned={this.state.drawerPinned} permanentAt="md"
            onOverlayClick={this.toggleDrawerActive}>
            <div className={style.fillerSideMenu}></div>
            <SideMenu />
          </NavDrawer>
          <Panel className={style.panel}>
            <StartButton />
            <QuitButton />
            <CustomAppBar title="Verb Master" leftIcon="menu"
              onLeftIconClick={this.toggleDrawerActive} />
            <div className={style.filler}></div>
            <GameContainer />
          </Panel>
        </Layout>
      </div>
    );
  }
}

export default App;
