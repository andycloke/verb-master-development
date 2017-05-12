import VERB_DATA from '../data';

// Action types

export const ActionTypes = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  TOGGLE_PLAYING: 'TOGGLE_PLAYING',
  RESET_SCORE_IF_NEC: 'RESET_SCORE_IF_NEC',
  TOGGLE_ENG_INF: 'TOGGLE_ENG_INF',
  TOGGLE_PERSON: 'TOGGLE_PERSON',
  TOGGLE_TENSE: 'TOGGLE_TENSE',
  NEW_QUESTION: 'NEW_QUESTION',
  SUBMIT_ANSWER: 'SUBMIT_ANSWER',
};

// Other constants

export const Languages = {
  ENG: 'ENG',
  ESP: 'ESP'
};

// Helper - return a random value for a particular object key.
// from all objects that are 'inplay'
function randomInPlayValue(key, array) {
  const options = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].inPlay) {
      options.push(array[i][key]);
    }
  }
  if (options.length) {
    return options[Math.floor(Math.random() * options.length)];
  }
  return '';
}

// Helper - Get random element of array
function randomElement(array = []) {
  if (array.length) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return '';
}

// Action creators

export function setLanguage(language) {
  return { type: ActionTypes.SET_LANGUAGE, language };
}

export function togglePerson(person) {
  return { type: ActionTypes.TOGGLE_PERSON, person };
}

export function togglePlaying() {
  return { type: ActionTypes.TOGGLE_PLAYING };
}

export function resetScoreIfNec() {
  return { type: ActionTypes.RESET_SCORE_IF_NEC };
}

export function toggleEngInf() {
  return { type: ActionTypes.TOGGLE_ENG_INF };
}

export function toggleTense(tense) {
  return { type: ActionTypes.TOGGLE_TENSE, tense };
}

export function newQuestion(people, tenses, score, targetScore) {
  // calculate how many verb-tense combos were wrong previously and store all the tenses
  let totalToReview = 0;
  const tensesWithVerbsToReview = [];
  for (let i = 0; i < tenses.length; i += 1) {
    if (tenses[i].inPlay && tenses[i].toReviewCount) {
      tensesWithVerbsToReview.push(tenses[i].tense);
      totalToReview += tenses[i].toReviewCount;
    }
  }

  // the verbs in each tense's 'to review' array will need to be shown before the game is complete 
  let tense = '';
  let randomVerbTenseCombo = false;
  if (totalToReview >= (targetScore - score)) {
    // we must show the tense-verb combos that were previously wrong whilst there is still room
    // in the current game progress
    tense = randomElement(tensesWithVerbsToReview);
  } else {
    // if there is more than enough room, choose random tense
    tense = randomInPlayValue('tense', tenses);
    randomVerbTenseCombo = true;
  }

  // start by choosing a random person
  let person = '';
  if (tense.slice(0, 3) === 'Imp') {
    // imperative tense selected so avoid first person
    do {
      person = randomInPlayValue('person', people);
    } while (person === 'p1' || person === 's1');
  } else {
    // random
    person = randomInPlayValue('person', people);
  }

  // from people state find a random way of displaying a certain person 
  // e.g. 'Usted' is a random way of displaying ['El', 'Ella', 'Usted']
  const personLonghand = person ? randomElement(people.filter((personObj) => personObj.person === person)[0].esp) : '';

  // get tense object from array
  const tenseObj = tenses.filter((tns) => tns.tense === tense)[0];
  // set eng and spanish long hand tense names
  const tenseLonghandEng = tense ? tenseObj.eng : '';
  const tenseLonghandEsp = tense ? tenseObj.esp : '';

  // find verb data objects
  let verbDataObj = {};
  if (tense) {
    if (randomVerbTenseCombo) {
      // select random verbs (flat was set above to signal no previously-wrong tense-verb combos)
      verbDataObj = randomElement(VERB_DATA);
    } else {
      // select random one from the tense's verbs that need to be reviewed
      const verb = randomElement(tenseObj.toReviewVerbs);
      verbDataObj = VERB_DATA.filter((obj) => obj.inf === verb)[0];
    }
  }
  return {
    type: ActionTypes.NEW_QUESTION,
    person,
    personLonghand,
    tense,
    tenseLonghandEng,
    tenseLonghandEsp,
    verbDataObj,
  };
}

export function submitAnswer(currentQuestion, userAnswer, people, tenses) {
  return { type: ActionTypes.SUBMIT_ANSWER, currentQuestion, userAnswer, people, tenses };
}

// TODO: show answer