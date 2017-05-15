import { ActionTypes, Languages, VerbInclusionOptions, WhichVerbsOptions } from '../actions';
import VERB_DATA from '../data';

const initialState = {
  language: Languages.ENG,                              // language used in titles/ menu etc
  showEngInf: true,                                     // whether or not to show english infinitive
  verbSettings: {
    whichVerbs: WhichVerbsOptions.COMMON,                 // which verbs to play with
    irregularVerbs: VerbInclusionOptions.INCLUDE, // play with irregular verbs
    reflexiveVerbs: VerbInclusionOptions.INCLUDE, // play with reflexive verbs
    userVerbsString: '',            // user chosen verbs to practise with
    validUserVerbs: [],        // verbs from the string input that are actual verbs and there is data for
  },
  playing: false,                                       // whether or not game is currently open
  questionComplete: false,                              // has current question been answered correctly? 
  targetScore: 15,                                      // the target no. of questions that need to be answered correctly
  score: 0,                                             // the no. of questions the user has answered correctly (in current game)
  totalQuestionsAnswered: 0,                            // used for stats some time in the future
  firstEverGame: true,                                  // used to show help on first every game
  displayConjugations: false,                           // whether or not conjugation table is displayed
  currentQuestion: {
    verbEng: '',                                        // verb in english
    verbEsp: '',                                        // verb in spanish
    person: '',                                         // shorthand person e.g. p1 for plural 1st person (we / nosotros)
    personLonghand: '',                                 // e.g. one of el/ ella/ usted
    tense: '',                                          // shorthand tenses, e.g. In Pres for indicative present (also known as simply present)
    tenseLonghandEng: '',                               // English name for tense, e.g. Future
    tenseLonghandEsp: '',                               // Spanish name for tense, e.g. Futuro   
    answers: [],                                        // array of possible answers (needed because there occasionally are multiple possible answers)
    conjugations: {},                                   // object showing conjugation of current verb in current tense
  },
  people: [
    {
      person: 'yo',
      eng: ['I'],
      esp: ['Yo'],
      inPlay: true,
    },
    {
      person: 'tu',
      eng: ['You'],
      esp: ['Tú'],
      inPlay: true,
    },
    {
      person: 'el',
      eng: ['He', 'She', 'You (formal)'],
      esp: ['Él', 'Ella', 'Usted'],
      inPlay: true,
    },
    {
      person: 'ns',
      eng: ['We'],
      esp: ['Nosotros', 'Nosotras'],
      inPlay: true,
    },
    {
      person: 'vs',
      eng: ['You (plural, informal)'],
      esp: ['Vosotros', 'Vosotras'],
      inPlay: false,
    },
    {
      person: 'ellos',
      eng: ['They', 'You (plural, formal)'],
      esp: ['Ellos', 'Ellas'],
      inPlay: true,
    },
  ],
  tenses: [
    {
      tense: 'In Pres',
      eng: 'Present',
      esp: 'Presente',
      inPlay: true,
      examples: 'Yo hablo...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'In Pres Pro',
      eng: 'Present Progressive',
      esp: 'Presente Progresivo',
      inPlay: false,
      examples: 'Yo estoy hablando...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'In Fut',
      eng: 'Future',
      esp: 'Futuro',
      inPlay: false,
      examples: 'Yo hablaré...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'Cond Cond Pres',
      eng: 'Conditional',
      esp: 'Conditional',
      inPlay: false,
      examples: 'Yo hablaría...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'In Imp',
      eng: 'Imperfect',
      esp: 'Imperfecto',
      inPlay: false,
      examples: 'Yo hablaba...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'In Pret',
      eng: 'Preterite',
      esp: 'Pretérito',
      inPlay: false,
      examples: 'Yo hablé...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'In Pres Per',
      eng: 'Present Perfect',
      esp: 'Pretérito Perfecto',
      inPlay: false,
      examples: 'Yo he hablado...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'In Fut Per',
      eng: 'Future Perfect',
      esp: 'Futuro Perfecto',
      inPlay: false,
      examples: 'Yo habré hablado...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'In Pas Per',
      eng: 'Past Perfect',
      esp: 'Pluscuamperfecto',
      inPlay: false,
      examples: 'Yo había hablado...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'Cond Cond Per',
      eng: 'Conditional Perfect',
      esp: 'Conditional Perfecto',
      inPlay: false,
      examples: 'Yo habría hablado...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'Sub Pres',
      eng: 'Subjunctive',
      esp: 'Subjuntivo',
      inPlay: false,
      examples: 'Yo hable...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'Imp Aff Pres',
      eng: 'Imperative (Affirmative)',
      esp: 'Imperativo Afirmativo',
      inPlay: false,
      examples: 'Habla!...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },
    {
      tense: 'Imp Neg Pres',
      eng: 'Imperative (Negative)',
      esp: 'Imperativo Negativo',
      inPlay: false,
      examples: 'No hables!...',
      toReviewCount: 0,
      toReviewVerbs: [],
    },

  ]
};

export default function spanishApp(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SET_LANGUAGE:
    return { ...state, language: action.language };
  case ActionTypes.TOGGLE_PLAYING:
    return { ...state, playing: !state.playing };  
  case ActionTypes.RESET_SCORE_IF_NEC:
    return { ...state, score: state.score === state.targetScore ? 0 : state.score, };
  case ActionTypes.TOGGLE_ENG_INF:
    return { ...state, showEngInf: !state.showEngInf };
  case ActionTypes.SET_WHICH_VERBS:
    return { ...state, verbSettings: { ...state.verbSettings, whichVerbs: action.option }};
  case ActionTypes.SET_USER_DEFINED_VERBS:
    return { 
      ...state, 
      verbSettings: 
      { 
        ...state.verbSettings, 
        userVerbsString: action.verbsString,
        validUserVerbs: action.validUserVerbs,
      }
    };
  case ActionTypes.SET_REFLEXIVE:
    return { ...state, verbSettings: { ...state.verbSettings, reflexiveVerbs: action.option }};
  case ActionTypes.SET_IRREGULAR:
    return { ...state, verbSettings: { ...state.verbSettings, irregularVerbs: action.option }};
  case ActionTypes.TOGGLE_PERSON:
    return {
      ...state,
      people: state.people.map((person) => {
        if (person.person === action.person) {
          return { ...person, inPlay: !person.inPlay };
        }
        return person;
      }),
    };
  case ActionTypes.TOGGLE_TENSE:
    return {
      ...state,
      tenses: state.tenses.map((tense) => {
        if (tense.tense === action.tense) {
          return { ...tense, inPlay: !tense.inPlay, };
        }
        return tense;
      }),
    };
  case ActionTypes.NEW_QUESTION: {
    const { person, personLonghand, tense, tenseLonghandEng, tenseLonghandEsp, verbDataObj } = action;
    return {
      ...state,
      questionComplete: false,
      displayConjugations: false,
      currentQuestion: {
        ...state.currentQuestion,  
        verbEng: verbDataObj.inf_eng,
        verbEsp: verbDataObj.inf,
        person,
        personLonghand,
        tense,
        tenseLonghandEng,
        tenseLonghandEsp,
        answers: tense && person ? verbDataObj[tense][person] : '',
        conjugations: tense && person ? verbDataObj[tense] : '',
      },
    };
  }
  case ActionTypes.SUBMIT_ANSWER: {
    const { userAnswer, currentQuestion, tenses } = action;
    const tensesObj = tenses.filter((tenseObj) => tenseObj.tense === currentQuestion.tense)[0];
    if (currentQuestion.answers.includes(userAnswer.toLowerCase())) {
      // answer was correct
      if (tensesObj.toReviewVerbs.includes(currentQuestion.verbEsp)) {
        // verb needed to be reviewed
        return {
          ...state,
          firstEverGame: false,
          score: state.score + 1,
          totalQuestionsAnswered: state.totalQuestionsAnswered + 1,
          playing: (state.score + 1) !== state.targetScore,         // quit game     
          questionComplete: true,
          tenses: state.tenses.map((tense) => {
            if (tense.tense === currentQuestion.tense) {
              return {
                ...tense,
                // remove from the list of verbs to be reviewed
                toReviewVerbs: tense.toReviewVerbs.filter((verb) => verb !== currentQuestion.verbEsp),     
                toReviewCount: tense.toReviewCount - 1,
              };
            }
            return tense;
          }),
        };
      }
      // verb didn't need to be reviewed (i.e. it was the first time it had been shown)
      return {
        ...state,
        firstEverGame: false,        
        score: state.score + 1,
        totalQuestionsAnswered: state.totalQuestionsAnswered + 1,
        playing: (state.score + 1) !== state.targetScore,         // quit game     
        questionComplete: true,
      };
    }
    // answer was incorrect
    if (tensesObj.toReviewVerbs.includes(currentQuestion.verbEsp)) {
      // verb already needed to be reviewed - do nothing
      return { ...state, firstEverGame: false, displayConjugations: true };
    }
    // verb didn't need to be reviewed (i.e. it was the first time it had been shown)
    return {
      ...state,
      firstEverGame: false,
      displayConjugations: true,
      currentQuestion: { ...state.currentQuestion },
      tenses: state.tenses.map((tense) => {
        if (tense.tense === currentQuestion.tense) {
          return {
            ...tense,
            toReviewVerbs: [...tense.toReviewVerbs, currentQuestion.verbEsp],                // add to list of verbs to be reviewed
            toReviewCount: tense.toReviewCount + 1,
          };
        }
        return tense;
      }),
    };
  }

  default:
    return state;
  }
}