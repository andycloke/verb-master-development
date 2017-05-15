import VERB_DATA from '../data';

// Action types

export const ActionTypes = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_REFLEXIVE: 'SET_REFLEXIVE',
  SET_IRREGULAR: 'SET_IRREGULAR',
  SET_WHICH_VERBS: 'SET_WHICH_VERBS',
  SET_USER_DEFINED_VERBS: 'SET_USER_DEFINED_VERBS',
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

export const WhichVerbsOptions = {
  ALL: 'ALL',
  COMMON: 'COMMON',
  USER_DEFINED: 'USER_DEFINED',
};

export const VerbInclusionOptions = {
  INCLUDE: 'INCLUDE',
  EXCLUDE: 'EXCLUDE',
  ONLY: 'ONLY',
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

// Get a random verb from those available (as defined by the user)
function randomValidVerb(array = [], verbSettings) {
  let availableVerbs = [];
  if (array.length) {
    if (verbSettings.whichVerbs !== WhichVerbsOptions.USER_DEFINED) {
      availableVerbs = array.filter((verbObj) =>
        // filter for irregular verbs
        ((((verbSettings.irregularVerbs === VerbInclusionOptions.INCLUDE
          || (verbSettings.irregularVerbs === VerbInclusionOptions.EXCLUDE && !verbObj.irregular))
          || (verbSettings.irregularVerbs === VerbInclusionOptions.ONLY && verbObj.irregular))
          &&
          // filter reflexive
          ((verbSettings.reflexiveVerbs === VerbInclusionOptions.INCLUDE
            || (verbSettings.reflexiveVerbs === VerbInclusionOptions.EXCLUDE && !verbObj.reflexivo))
            || (verbSettings.reflexiveVerbs === VerbInclusionOptions.ONLY && verbObj.reflexivo))
        )
          &&
          // filter common
          (verbSettings.whichVerbs === WhichVerbsOptions.ALL
            || (verbSettings.whichVerbs === WhichVerbsOptions.COMMON && verbObj.comun))
        )
      );
    } else {
      availableVerbs = verbSettings.validUserVerbs;
    }
    if (availableVerbs.length) {
      return availableVerbs[Math.floor(Math.random() * availableVerbs.length)];
    }
  }
  return '';
}

// Action creators

export function setLanguage(language) {
  return { type: ActionTypes.SET_LANGUAGE, language };
}

export function setReflexive(option) {
  return { type: ActionTypes.SET_REFLEXIVE, option };
}

export function setIrregular(option) {
  return { type: ActionTypes.SET_IRREGULAR, option };
}

export function setWhichVerbs(option) {
  return { type: ActionTypes.SET_WHICH_VERBS, option };
}

export function setUserDefinedVerbs(verbsString) {
  const validverbs = VERB_DATA.filter((verbObj) => verbsString.replace(/ /g, '').split(',').includes(verbObj.inf));
  console.log(validverbs);
  return {
    type: ActionTypes.SET_USER_DEFINED_VERBS,
    verbsString,
    validUserVerbs: VERB_DATA.filter((verbObj) => verbsString.replace(/ /g, '').split(',').includes(verbObj.inf)),
  };
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

export function newQuestion(people, tenses, score, targetScore, verbSettings) {
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

  // choose a random person
  let person = '';
  if (tense.slice(0, 3) === 'Imp') {
    // imperative tense selected so avoid first person
    do {
      person = randomInPlayValue('person', people);
    } while (person === 'yo' || person === 'ns');
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
      // select random verb with those available due to on filters (flag was set above to signal no previously-wrong tense-verb 
      // combos that would need to be reviewed instead)
      verbDataObj = randomValidVerb(VERB_DATA, verbSettings);
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