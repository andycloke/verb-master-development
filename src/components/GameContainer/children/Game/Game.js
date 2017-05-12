import React from 'react';

import GameTable from './children/GameTable/GameTable';
import GameInput from './children/GameInput/GameInput';
import Conjugations from './children/Conjugations/Conjugations';

import style from './Game.css';

export default class Game extends React.Component {
  render() {
    return (
     <div className={style.container}>
        <GameTable />
        <GameInput />
        <Conjugations />
      </div>
    );
  }
}

