// All verb conjugation data (will be added to in the future)
const VERB_DATA = [{
  "inf": "aparecer",
  "inf_eng": "to appear",
  "In Pres": {
    "s1": ["aparezco"],
    "s2": ["apareces"],
    "s3": ["aparece"],
    "p1": ["aparecemos"],
    "p2": ["aparecéis"],
    "p3": ["aparecen"]
  },
  "In Fut": {
    "s1": ["apareceré"],
    "s2": ["aparecerás"],
    "s3": ["aparecerá"],
    "p1": ["apareceremos"],
    "p2": ["apareceréis"],
    "p3": ["aparecerán"]
  },
  "In Imp": {
    "s1": ["aparecía"],
    "s2": ["aparecías"],
    "s3": ["aparecía"],
    "p1": ["aparecíamos"],
    "p2": ["aparecíais"],
    "p3": ["aparecían"]
  },
  "In Pret": {
    "s1": ["aparecí"],
    "s2": ["apareciste"],
    "s3": ["apareció"],
    "p1": ["aparecimos"],
    "p2": ["aparecisteis"],
    "p3": ["aparecieron"]
  },
  "In Cond": {
    "s1": ["aparecería"],
    "s2": ["aparecerías"],
    "s3": ["aparecería"],
    "p1": ["apareceríamos"],
    "p2": ["apareceríais"],
    "p3": ["aparecerían"]
  },
  "In Pres Per": {
    "s1": ["he aparecido"],
    "s2": ["has aparecido"],
    "s3": ["ha aparecido"],
    "p1": ["hemos aparecido"],
    "p2": ["habéis aparecido"],
    "p3": ["han aparecido"]
  },
  "In Fut Per": {
    "s1": ["habré aparecido"],
    "s2": ["habrás aparecido"],
    "s3": ["habrá aparecido"],
    "p1": ["habremos aparecido"],
    "p2": ["habréis aparecido"],
    "p3": ["habrán aparecido"]
  },
  "In Pas Per": {
    "s1": ["había aparecido"],
    "s2": ["habías aparecido"],
    "s3": ["había aparecido"],
    "p1": ["habíamos aparecido"],
    "p2": ["habíais aparecido"],
    "p3": ["habían aparecido"]
  },
  "In Cond Per": {
    "s1": ["habría aparecido"],
    "s2": ["habrías aparecido"],
    "s3": ["habría aparecido"],
    "p1": ["habríamos aparecido"],
    "p2": ["habríais aparecido"],
    "p3": ["habrían aparecido"]
  },
  "Sub Pres": {
    "s1": ["aparezca"],
    "s2": ["aparezcas"],
    "s3": ["aparezca"],
    "p1": ["aparezcamos"],
    "p2": ["aparezcáis"],
    "p3": ["aparezcan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["aparece"],
    "s3": ["apareced"],
    "p1": [""],
    "p2": ["aparezca"],
    "p3": ["aparezcan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no aparezcas"],
    "s3": ["no aparezcáis"],
    "p1": [""],
    "p2": ["no aparezca"],
    "p3": ["no aparezcan"]
  },
  "In Pres Pro": {
    "s1": ["estoy apareciendo"],
    "s2": ["estás apareciendo"],
    "s3": ["está apareciendo"],
    "p1": ["estamos apareciendo"],
    "p2": ["estáis apareciendo"],
    "p3": ["están apareciendo"]
  }
}, {
  "inf": "apreciar",
  "inf_eng": "to appreciate",
  "In Pres": {
    "s1": ["aprecio"],
    "s2": ["aprecias"],
    "s3": ["aprecia"],
    "p1": ["apreciamos"],
    "p2": ["apreciáis"],
    "p3": ["aprecian"]
  },
  "In Fut": {
    "s1": ["apreciaré"],
    "s2": ["apreciarás"],
    "s3": ["apreciará"],
    "p1": ["apreciaremos"],
    "p2": ["apreciaréis"],
    "p3": ["apreciarán"]
  },
  "In Imp": {
    "s1": ["apreciaba"],
    "s2": ["apreciabas"],
    "s3": ["apreciaba"],
    "p1": ["apreciábamos"],
    "p2": ["apreciabais"],
    "p3": ["apreciaban"]
  },
  "In Pret": {
    "s1": ["aprecié"],
    "s2": ["apreciaste"],
    "s3": ["apreció"],
    "p1": ["apreciamos"],
    "p2": ["apreciasteis"],
    "p3": ["apreciaron"]
  },
  "In Cond": {
    "s1": ["apreciaría"],
    "s2": ["apreciarías"],
    "s3": ["apreciaría"],
    "p1": ["apreciaríamos"],
    "p2": ["apreciaríais"],
    "p3": ["apreciarían"]
  },
  "In Pres Per": {
    "s1": ["he apreciado"],
    "s2": ["has apreciado"],
    "s3": ["ha apreciado"],
    "p1": ["hemos apreciado"],
    "p2": ["habéis apreciado"],
    "p3": ["han apreciado"]
  },
  "In Fut Per": {
    "s1": ["habré apreciado"],
    "s2": ["habrás apreciado"],
    "s3": ["habrá apreciado"],
    "p1": ["habremos apreciado"],
    "p2": ["habréis apreciado"],
    "p3": ["habrán apreciado"]
  },
  "In Pas Per": {
    "s1": ["había apreciado"],
    "s2": ["habías apreciado"],
    "s3": ["había apreciado"],
    "p1": ["habíamos apreciado"],
    "p2": ["habíais apreciado"],
    "p3": ["habían apreciado"]
  },
  "In Cond Per": {
    "s1": ["habría apreciado"],
    "s2": ["habrías apreciado"],
    "s3": ["habría apreciado"],
    "p1": ["habríamos apreciado"],
    "p2": ["habríais apreciado"],
    "p3": ["habrían apreciado"]
  },
  "Sub Pres": {
    "s1": ["aprecie"],
    "s2": ["aprecies"],
    "s3": ["aprecie"],
    "p1": ["apreciemos"],
    "p2": ["apreciéis"],
    "p3": ["aprecien"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["aprecia"],
    "s3": ["apreciad"],
    "p1": [""],
    "p2": ["aprecie"],
    "p3": ["aprecien"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no aprecies"],
    "s3": ["no apreciéis"],
    "p1": [""],
    "p2": ["no aprecie"],
    "p3": ["no aprecien"]
  },
  "In Pres Pro": {
    "s1": ["estoy apreciando"],
    "s2": ["estás apreciando"],
    "s3": ["está apreciando"],
    "p1": ["estamos apreciando"],
    "p2": ["estáis apreciando"],
    "p3": ["están apreciando"]
  }
}, {
  "inf": "aprender",
  "inf_eng": "to learn",
  "In Pres": {
    "s1": ["aprendo"],
    "s2": ["aprendes"],
    "s3": ["aprende"],
    "p1": ["aprendemos"],
    "p2": ["aprendéis"],
    "p3": ["aprenden"]
  },
  "In Fut": {
    "s1": ["aprenderé"],
    "s2": ["aprenderás"],
    "s3": ["aprenderá"],
    "p1": ["aprenderemos"],
    "p2": ["aprenderéis"],
    "p3": ["aprenderán"]
  },
  "In Imp": {
    "s1": ["aprendía"],
    "s2": ["aprendías"],
    "s3": ["aprendía"],
    "p1": ["aprendíamos"],
    "p2": ["aprendíais"],
    "p3": ["aprendían"]
  },
  "In Pret": {
    "s1": ["aprendí"],
    "s2": ["aprendiste"],
    "s3": ["aprendió"],
    "p1": ["aprendimos"],
    "p2": ["aprendisteis"],
    "p3": ["aprendieron"]
  },
  "In Cond": {
    "s1": ["aprendería"],
    "s2": ["aprenderías"],
    "s3": ["aprendería"],
    "p1": ["aprenderíamos"],
    "p2": ["aprenderíais"],
    "p3": ["aprenderían"]
  },
  "In Pres Per": {
    "s1": ["he aprendido"],
    "s2": ["has aprendido"],
    "s3": ["ha aprendido"],
    "p1": ["hemos aprendido"],
    "p2": ["habéis aprendido"],
    "p3": ["han aprendido"]
  },
  "In Fut Per": {
    "s1": ["habré aprendido"],
    "s2": ["habrás aprendido"],
    "s3": ["habrá aprendido"],
    "p1": ["habremos aprendido"],
    "p2": ["habréis aprendido"],
    "p3": ["habrán aprendido"]
  },
  "In Pas Per": {
    "s1": ["había aprendido"],
    "s2": ["habías aprendido"],
    "s3": ["había aprendido"],
    "p1": ["habíamos aprendido"],
    "p2": ["habíais aprendido"],
    "p3": ["habían aprendido"]
  },
  "In Cond Per": {
    "s1": ["habría aprendido"],
    "s2": ["habrías aprendido"],
    "s3": ["habría aprendido"],
    "p1": ["habríamos aprendido"],
    "p2": ["habríais aprendido"],
    "p3": ["habrían aprendido"]
  },
  "Sub Pres": {
    "s1": ["aprenda"],
    "s2": ["aprendas"],
    "s3": ["aprenda"],
    "p1": ["aprendamos"],
    "p2": ["aprendáis"],
    "p3": ["aprendan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["aprende"],
    "s3": ["aprended"],
    "p1": [""],
    "p2": ["aprenda"],
    "p3": ["aprendan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no aprendas"],
    "s3": ["no aprendáis"],
    "p1": [""],
    "p2": ["no aprenda"],
    "p3": ["no aprendan"]
  },
  "In Pres Pro": {
    "s1": ["estoy aprendiendo"],
    "s2": ["estás aprendiendo"],
    "s3": ["está aprendiendo"],
    "p1": ["estamos aprendiendo"],
    "p2": ["estáis aprendiendo"],
    "p3": ["están aprendiendo"]
  }
}, {
  "inf": "asistir",
  "inf_eng": "to attend",
  "Sub Pres": {
    "s1": ["asista"],
    "s2": ["asistas"],
    "s3": ["asista"],
    "p1": ["asistamos"],
    "p2": ["asistáis"],
    "p3": ["asistan"]
  },
  "In Pres": {
    "s1": ["asisto"],
    "s2": ["asistes"],
    "s3": ["asiste"],
    "p1": ["asistimos"],
    "p2": ["asistís"],
    "p3": ["asisten"]
  },
  "In Fut": {
    "s1": ["asistiré"],
    "s2": ["asistirás"],
    "s3": ["asistirá"],
    "p1": ["asistiremos"],
    "p2": ["asistiréis"],
    "p3": ["asistirán"]
  },
  "In Imp": {
    "s1": ["asistía"],
    "s2": ["asistías"],
    "s3": ["asistía"],
    "p1": ["asistíamos"],
    "p2": ["asistíais"],
    "p3": ["asistían"]
  },
  "In Pret": {
    "s1": ["asistí"],
    "s2": ["asististe"],
    "s3": ["asistió"],
    "p1": ["asistimos"],
    "p2": ["asististeis"],
    "p3": ["asistieron"]
  },
  "In Cond": {
    "s1": ["asistiría"],
    "s2": ["asistirías"],
    "s3": ["asistiría"],
    "p1": ["asistiríamos"],
    "p2": ["asistiríais"],
    "p3": ["asistirían"]
  },
  "In Pres Per": {
    "s1": ["he asistido"],
    "s2": ["has asistido"],
    "s3": ["ha asistido"],
    "p1": ["hemos asistido"],
    "p2": ["habéis asistido"],
    "p3": ["han asistido"]
  },
  "In Fut Per": {
    "s1": ["habré asistido"],
    "s2": ["habrás asistido"],
    "s3": ["habrá asistido"],
    "p1": ["habremos asistido"],
    "p2": ["habréis asistido"],
    "p3": ["habrán asistido"]
  },
  "In Pas Per": {
    "s1": ["había asistido"],
    "s2": ["habías asistido"],
    "s3": ["había asistido"],
    "p1": ["habíamos asistido"],
    "p2": ["habíais asistido"],
    "p3": ["habían asistido"]
  },
  "In Cond Per": {
    "s1": ["habría asistido"],
    "s2": ["habrías asistido"],
    "s3": ["habría asistido"],
    "p1": ["habríamos asistido"],
    "p2": ["habríais asistido"],
    "p3": ["habrían asistido"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["asiste"],
    "s3": ["asistid"],
    "p1": [""],
    "p2": ["asista"],
    "p3": ["asistan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no asistas"],
    "s3": ["no asistáis"],
    "p1": [""],
    "p2": ["no asista"],
    "p3": ["no asistan"]
  },
  "In Pres Pro": {
    "s1": ["estoy asistiendo"],
    "s2": ["estás asistiendo"],
    "s3": ["está asistiendo"],
    "p1": ["estamos asistiendo"],
    "p2": ["estáis asistiendo"],
    "p3": ["están asistiendo"]
  }
}, {
  "inf": "ayudar",
  "inf_eng": "to help",
  "In Pres": {
    "s1": ["ayudo"],
    "s2": ["ayudas"],
    "s3": ["ayuda"],
    "p1": ["ayudamos"],
    "p2": ["ayudáis"],
    "p3": ["ayudan"]
  },
  "In Fut": {
    "s1": ["ayudaré"],
    "s2": ["ayudarás"],
    "s3": ["ayudará"],
    "p1": ["ayudaremos"],
    "p2": ["ayudaréis"],
    "p3": ["ayudarán"]
  },
  "In Imp": {
    "s1": ["ayudaba"],
    "s2": ["ayudabas"],
    "s3": ["ayudaba"],
    "p1": ["ayudábamos"],
    "p2": ["ayudabais"],
    "p3": ["ayudaban"]
  },
  "In Pret": {
    "s1": ["ayudé"],
    "s2": ["ayudaste"],
    "s3": ["ayudó"],
    "p1": ["ayudamos"],
    "p2": ["ayudasteis"],
    "p3": ["ayudaron"]
  },
  "In Cond": {
    "s1": ["ayudaría"],
    "s2": ["ayudarías"],
    "s3": ["ayudaría"],
    "p1": ["ayudaríamos"],
    "p2": ["ayudaríais"],
    "p3": ["ayudarían"]
  },
  "In Pres Per": {
    "s1": ["he ayudado"],
    "s2": ["has ayudado"],
    "s3": ["ha ayudado"],
    "p1": ["hemos ayudado"],
    "p2": ["habéis ayudado"],
    "p3": ["han ayudado"]
  },
  "In Fut Per": {
    "s1": ["habré ayudado"],
    "s2": ["habrás ayudado"],
    "s3": ["habrá ayudado"],
    "p1": ["habremos ayudado"],
    "p2": ["habréis ayudado"],
    "p3": ["habrán ayudado"]
  },
  "In Pas Per": {
    "s1": ["había ayudado"],
    "s2": ["habías ayudado"],
    "s3": ["había ayudado"],
    "p1": ["habíamos ayudado"],
    "p2": ["habíais ayudado"],
    "p3": ["habían ayudado"]
  },
  "In Cond Per": {
    "s1": ["habría ayudado"],
    "s2": ["habrías ayudado"],
    "s3": ["habría ayudado"],
    "p1": ["habríamos ayudado"],
    "p2": ["habríais ayudado"],
    "p3": ["habrían ayudado"]
  },
  "Sub Pres": {
    "s1": ["ayude"],
    "s2": ["ayudes"],
    "s3": ["ayude"],
    "p1": ["ayudemos"],
    "p2": ["ayudéis"],
    "p3": ["ayuden"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["ayuda"],
    "s3": ["ayudad"],
    "p1": [""],
    "p2": ["ayude"],
    "p3": ["ayuden"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no ayudes"],
    "s3": ["no ayudéis"],
    "p1": [""],
    "p2": ["no ayude"],
    "p3": ["no ayuden"]
  },
  "In Pres Pro": {
    "s1": ["estoy ayudando"],
    "s2": ["estás ayudando"],
    "s3": ["está ayudando"],
    "p1": ["estamos ayudando"],
    "p2": ["estáis ayudando"],
    "p3": ["están ayudando"]
  }
}, {
  "inf": "atender",
  "inf_eng": "to attend to",
  "In Pres": {
    "s1": ["atiendo"],
    "s2": ["atiendes"],
    "s3": ["atiende"],
    "p1": ["atendemos"],
    "p2": ["atendéis"],
    "p3": ["atienden"]
  },
  "In Fut": {
    "s1": ["atenderé"],
    "s2": ["atenderás"],
    "s3": ["atenderá"],
    "p1": ["atenderemos"],
    "p2": ["atenderéis"],
    "p3": ["atenderán"]
  },
  "In Imp": {
    "s1": ["atendía"],
    "s2": ["atendías"],
    "s3": ["atendía"],
    "p1": ["atendíamos"],
    "p2": ["atendíais"],
    "p3": ["atendían"]
  },
  "In Pret": {
    "s1": ["atendí"],
    "s2": ["atendiste"],
    "s3": ["atendió"],
    "p1": ["atendimos"],
    "p2": ["atendisteis"],
    "p3": ["atendieron"]
  },
  "In Cond": {
    "s1": ["atendería"],
    "s2": ["atenderías"],
    "s3": ["atendería"],
    "p1": ["atenderíamos"],
    "p2": ["atenderíais"],
    "p3": ["atenderían"]
  },
  "In Pres Per": {
    "s1": ["he atendido"],
    "s2": ["has atendido"],
    "s3": ["ha atendido"],
    "p1": ["hemos atendido"],
    "p2": ["habéis atendido"],
    "p3": ["han atendido"]
  },
  "In Fut Per": {
    "s1": ["habré atendido"],
    "s2": ["habrás atendido"],
    "s3": ["habrá atendido"],
    "p1": ["habremos atendido"],
    "p2": ["habréis atendido"],
    "p3": ["habrán atendido"]
  },
  "In Pas Per": {
    "s1": ["había atendido"],
    "s2": ["habías atendido"],
    "s3": ["había atendido"],
    "p1": ["habíamos atendido"],
    "p2": ["habíais atendido"],
    "p3": ["habían atendido"]
  },
  "In Cond Per": {
    "s1": ["habría atendido"],
    "s2": ["habrías atendido"],
    "s3": ["habría atendido"],
    "p1": ["habríamos atendido"],
    "p2": ["habríais atendido"],
    "p3": ["habrían atendido"]
  },
  "Sub Pres": {
    "s1": ["atienda"],
    "s2": ["atiendas"],
    "s3": ["atienda"],
    "p1": ["atendamos"],
    "p2": ["atendáis"],
    "p3": ["atiendan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["atiende"],
    "s3": ["atended"],
    "p1": [""],
    "p2": ["atienda"],
    "p3": ["atiendan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no atiendas"],
    "s3": ["no atendáis"],
    "p1": [""],
    "p2": ["no atienda"],
    "p3": ["no atiendan"]
  },
  "In Pres Pro": {
    "s1": ["estoy atendiendo"],
    "s2": ["estás atendiendo"],
    "s3": ["está atendiendo"],
    "p1": ["estamos atendiendo"],
    "p2": ["estáis atendiendo"],
    "p3": ["están atendiendo"]
  }
}, {
  "inf": "bajar",
  "inf_eng": "to lower",
  "In Pres": {
    "s1": ["bajo"],
    "s2": ["bajas"],
    "s3": ["baja"],
    "p1": ["bajamos"],
    "p2": ["bajáis"],
    "p3": ["bajan"]
  },
  "In Fut": {
    "s1": ["bajaré"],
    "s2": ["bajarás"],
    "s3": ["bajará"],
    "p1": ["bajaremos"],
    "p2": ["bajaréis"],
    "p3": ["bajarán"]
  },
  "In Imp": {
    "s1": ["bajaba"],
    "s2": ["bajabas"],
    "s3": ["bajaba"],
    "p1": ["bajábamos"],
    "p2": ["bajabais"],
    "p3": ["bajaban"]
  },
  "In Pret": {
    "s1": ["bajé"],
    "s2": ["bajaste"],
    "s3": ["bajó"],
    "p1": ["bajamos"],
    "p2": ["bajasteis"],
    "p3": ["bajaron"]
  },
  "In Cond": {
    "s1": ["bajaría"],
    "s2": ["bajarías"],
    "s3": ["bajaría"],
    "p1": ["bajaríamos"],
    "p2": ["bajaríais"],
    "p3": ["bajarían"]
  },
  "In Pres Per": {
    "s1": ["he bajado"],
    "s2": ["has bajado"],
    "s3": ["ha bajado"],
    "p1": ["hemos bajado"],
    "p2": ["habéis bajado"],
    "p3": ["han bajado"]
  },
  "In Fut Per": {
    "s1": ["habré bajado"],
    "s2": ["habrás bajado"],
    "s3": ["habrá bajado"],
    "p1": ["habremos bajado"],
    "p2": ["habréis bajado"],
    "p3": ["habrán bajado"]
  },
  "In Pas Per": {
    "s1": ["había bajado"],
    "s2": ["habías bajado"],
    "s3": ["había bajado"],
    "p1": ["habíamos bajado"],
    "p2": ["habíais bajado"],
    "p3": ["habían bajado"]
  },
  "In Cond Per": {
    "s1": ["habría bajado"],
    "s2": ["habrías bajado"],
    "s3": ["habría bajado"],
    "p1": ["habríamos bajado"],
    "p2": ["habríais bajado"],
    "p3": ["habrían bajado"]
  },
  "Sub Pres": {
    "s1": ["baje"],
    "s2": ["bajes"],
    "s3": ["baje"],
    "p1": ["bajemos"],
    "p2": ["bajéis"],
    "p3": ["bajen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["baja"],
    "s3": ["bajad"],
    "p1": [""],
    "p2": ["baje"],
    "p3": ["bajen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no bajes"],
    "s3": ["no bajéis"],
    "p1": [""],
    "p2": ["no baje"],
    "p3": ["no bajen"]
  },
  "In Pres Pro": {
    "s1": ["estoy bajando"],
    "s2": ["estás bajando"],
    "s3": ["está bajando"],
    "p1": ["estamos bajando"],
    "p2": ["estáis bajando"],
    "p3": ["están bajando"]
  }
}, {
  "inf": "charlar",
  "inf_eng": "to chat",
  "Sub Pres": {
    "s1": ["charle"],
    "s2": ["charles"],
    "s3": ["charle"],
    "p1": ["charlemos"],
    "p2": ["charléis"],
    "p3": ["charlen"]
  },
  "In Pres": {
    "s1": ["charlo"],
    "s2": ["charlas"],
    "s3": ["charla"],
    "p1": ["charlamos"],
    "p2": ["charláis"],
    "p3": ["charlan"]
  },
  "In Fut": {
    "s1": ["charlaré"],
    "s2": ["charlarás"],
    "s3": ["charlará"],
    "p1": ["charlaremos"],
    "p2": ["charlaréis"],
    "p3": ["charlarán"]
  },
  "In Imp": {
    "s1": ["charlaba"],
    "s2": ["charlabas"],
    "s3": ["charlaba"],
    "p1": ["charlábamos"],
    "p2": ["charlabais"],
    "p3": ["charlaban"]
  },
  "In Pret": {
    "s1": ["charlé"],
    "s2": ["charlaste"],
    "s3": ["charló"],
    "p1": ["charlamos"],
    "p2": ["charlasteis"],
    "p3": ["charlaron"]
  },
  "In Cond": {
    "s1": ["charlaría"],
    "s2": ["charlarías"],
    "s3": ["charlaría"],
    "p1": ["charlaríamos"],
    "p2": ["charlaríais"],
    "p3": ["charlarían"]
  },
  "In Pres Per": {
    "s1": ["he charlado"],
    "s2": ["has charlado"],
    "s3": ["ha charlado"],
    "p1": ["hemos charlado"],
    "p2": ["habéis charlado"],
    "p3": ["han charlado"]
  },
  "In Fut Per": {
    "s1": ["habré charlado"],
    "s2": ["habrás charlado"],
    "s3": ["habrá charlado"],
    "p1": ["habremos charlado"],
    "p2": ["habréis charlado"],
    "p3": ["habrán charlado"]
  },
  "In Pas Per": {
    "s1": ["había charlado"],
    "s2": ["habías charlado"],
    "s3": ["había charlado"],
    "p1": ["habíamos charlado"],
    "p2": ["habíais charlado"],
    "p3": ["habían charlado"]
  },
  "In Cond Per": {
    "s1": ["habría charlado"],
    "s2": ["habrías charlado"],
    "s3": ["habría charlado"],
    "p1": ["habríamos charlado"],
    "p2": ["habríais charlado"],
    "p3": ["habrían charlado"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["charla"],
    "s3": ["charlad"],
    "p1": [""],
    "p2": ["charle"],
    "p3": ["charlen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no charles"],
    "s3": ["no charléis"],
    "p1": [""],
    "p2": ["no charle"],
    "p3": ["no charlen"]
  },
  "In Pres Pro": {
    "s1": ["estoy charlando"],
    "s2": ["estás charlando"],
    "s3": ["está charlando"],
    "p1": ["estamos charlando"],
    "p2": ["estáis charlando"],
    "p3": ["están charlando"]
  }
}, {
  "inf": "buscar",
  "inf_eng": "to search for",
  "In Pres": {
    "s1": ["busco"],
    "s2": ["buscas"],
    "s3": ["busca"],
    "p1": ["buscamos"],
    "p2": ["buscáis"],
    "p3": ["buscan"]
  },
  "In Fut": {
    "s1": ["buscaré"],
    "s2": ["buscarás"],
    "s3": ["buscará"],
    "p1": ["buscaremos"],
    "p2": ["buscaréis"],
    "p3": ["buscarán"]
  },
  "In Imp": {
    "s1": ["buscaba"],
    "s2": ["buscabas"],
    "s3": ["buscaba"],
    "p1": ["buscábamos"],
    "p2": ["buscabais"],
    "p3": ["buscaban"]
  },
  "In Pret": {
    "s1": ["busqué"],
    "s2": ["buscaste"],
    "s3": ["buscó"],
    "p1": ["buscamos"],
    "p2": ["buscasteis"],
    "p3": ["buscaron"]
  },
  "In Cond": {
    "s1": ["buscaría"],
    "s2": ["buscarías"],
    "s3": ["buscaría"],
    "p1": ["buscaríamos"],
    "p2": ["buscaríais"],
    "p3": ["buscarían"]
  },
  "In Pres Per": {
    "s1": ["he buscado"],
    "s2": ["has buscado"],
    "s3": ["ha buscado"],
    "p1": ["hemos buscado"],
    "p2": ["habéis buscado"],
    "p3": ["han buscado"]
  },
  "In Fut Per": {
    "s1": ["habré buscado"],
    "s2": ["habrás buscado"],
    "s3": ["habrá buscado"],
    "p1": ["habremos buscado"],
    "p2": ["habréis buscado"],
    "p3": ["habrán buscado"]
  },
  "In Pas Per": {
    "s1": ["había buscado"],
    "s2": ["habías buscado"],
    "s3": ["había buscado"],
    "p1": ["habíamos buscado"],
    "p2": ["habíais buscado"],
    "p3": ["habían buscado"]
  },
  "In Cond Per": {
    "s1": ["habría buscado"],
    "s2": ["habrías buscado"],
    "s3": ["habría buscado"],
    "p1": ["habríamos buscado"],
    "p2": ["habríais buscado"],
    "p3": ["habrían buscado"]
  },
  "Sub Pres": {
    "s1": ["busque"],
    "s2": ["busques"],
    "s3": ["busque"],
    "p1": ["busquemos"],
    "p2": ["busquéis"],
    "p3": ["busquen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["busca"],
    "s3": ["buscad"],
    "p1": [""],
    "p2": ["busque"],
    "p3": ["busquen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no busques"],
    "s3": ["no busquéis"],
    "p1": [""],
    "p2": ["no busque"],
    "p3": ["no busquen"]
  },
  "In Pres Pro": {
    "s1": ["estoy buscando"],
    "s2": ["estás buscando"],
    "s3": ["está buscando"],
    "p1": ["estamos buscando"],
    "p2": ["estáis buscando"],
    "p3": ["están buscando"]
  }
}, {
  "inf": "caer",
  "inf_eng": "to fall",
  "In Pres": {
    "s1": ["caigo"],
    "s2": ["caes"],
    "s3": ["cae"],
    "p1": ["caemos"],
    "p2": ["caéis"],
    "p3": ["caen"]
  },
  "In Fut": {
    "s1": ["caeré"],
    "s2": ["caerás"],
    "s3": ["caerá"],
    "p1": ["caeremos"],
    "p2": ["caeréis"],
    "p3": ["caerán"]
  },
  "In Imp": {
    "s1": ["caía"],
    "s2": ["caías"],
    "s3": ["caía"],
    "p1": ["caíamos"],
    "p2": ["caíais"],
    "p3": ["caían"]
  },
  "In Pret": {
    "s1": ["caí"],
    "s2": ["caíste"],
    "s3": ["cayó"],
    "p1": ["caímos"],
    "p2": ["caísteis"],
    "p3": ["cayeron"]
  },
  "In Cond": {
    "s1": ["caería"],
    "s2": ["caerías"],
    "s3": ["caería"],
    "p1": ["caeríamos"],
    "p2": ["caeríais"],
    "p3": ["caerían"]
  },
  "In Pres Per": {
    "s1": ["he caído"],
    "s2": ["has caído"],
    "s3": ["ha caído"],
    "p1": ["hemos caído"],
    "p2": ["habéis caído"],
    "p3": ["han caído"]
  },
  "In Fut Per": {
    "s1": ["habré caído"],
    "s2": ["habrás caído"],
    "s3": ["habrá caído"],
    "p1": ["habremos caído"],
    "p2": ["habréis caído"],
    "p3": ["habrán caído"]
  },
  "In Pas Per": {
    "s1": ["había caído"],
    "s2": ["habías caído"],
    "s3": ["había caído"],
    "p1": ["habíamos caído"],
    "p2": ["habíais caído"],
    "p3": ["habían caído"]
  },
  "In Cond Per": {
    "s1": ["habría caído"],
    "s2": ["habrías caído"],
    "s3": ["habría caído"],
    "p1": ["habríamos caído"],
    "p2": ["habríais caído"],
    "p3": ["habrían caído"]
  },
  "Sub Pres": {
    "s1": ["caiga"],
    "s2": ["caigas"],
    "s3": ["caiga"],
    "p1": ["caigamos"],
    "p2": ["caigáis"],
    "p3": ["caigan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cae"],
    "s3": ["caed"],
    "p1": [""],
    "p2": ["caiga"],
    "p3": ["caigan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no caigas"],
    "s3": ["no caigáis"],
    "p1": [""],
    "p2": ["no caiga"],
    "p3": ["no caigan"]
  },
  "In Pres Pro": {
    "s1": ["estoy cayendo"],
    "s2": ["estás cayendo"],
    "s3": ["está cayendo"],
    "p1": ["estamos cayendo"],
    "p2": ["estáis cayendo"],
    "p3": ["están cayendo"]
  }
}, {
  "inf": "calentar",
  "inf_eng": "to heat [up]",
  "In Pres": {
    "s1": ["caliento"],
    "s2": ["calientas"],
    "s3": ["calienta"],
    "p1": ["calentamos"],
    "p2": ["calentáis"],
    "p3": ["calientan"]
  },
  "In Fut": {
    "s1": ["calentaré"],
    "s2": ["calentarás"],
    "s3": ["calentará"],
    "p1": ["calentaremos"],
    "p2": ["calentaréis"],
    "p3": ["calentarán"]
  },
  "In Imp": {
    "s1": ["calentaba"],
    "s2": ["calentabas"],
    "s3": ["calentaba"],
    "p1": ["calentábamos"],
    "p2": ["calentabais"],
    "p3": ["calentaban"]
  },
  "In Pret": {
    "s1": ["calenté"],
    "s2": ["calentaste"],
    "s3": ["calentó"],
    "p1": ["calentamos"],
    "p2": ["calentasteis"],
    "p3": ["calentaron"]
  },
  "In Cond": {
    "s1": ["calentaría"],
    "s2": ["calentarías"],
    "s3": ["calentaría"],
    "p1": ["calentaríamos"],
    "p2": ["calentaríais"],
    "p3": ["calentarían"]
  },
  "In Pres Per": {
    "s1": ["he calentado"],
    "s2": ["has calentado"],
    "s3": ["ha calentado"],
    "p1": ["hemos calentado"],
    "p2": ["habéis calentado"],
    "p3": ["han calentado"]
  },
  "In Fut Per": {
    "s1": ["habré calentado"],
    "s2": ["habrás calentado"],
    "s3": ["habrá calentado"],
    "p1": ["habremos calentado"],
    "p2": ["habréis calentado"],
    "p3": ["habrán calentado"]
  },
  "In Pas Per": {
    "s1": ["había calentado"],
    "s2": ["habías calentado"],
    "s3": ["había calentado"],
    "p1": ["habíamos calentado"],
    "p2": ["habíais calentado"],
    "p3": ["habían calentado"]
  },
  "In Cond Per": {
    "s1": ["habría calentado"],
    "s2": ["habrías calentado"],
    "s3": ["habría calentado"],
    "p1": ["habríamos calentado"],
    "p2": ["habríais calentado"],
    "p3": ["habrían calentado"]
  },
  "Sub Pres": {
    "s1": ["caliente"],
    "s2": ["calientes"],
    "s3": ["caliente"],
    "p1": ["calentemos"],
    "p2": ["calentéis"],
    "p3": ["calienten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["calienta"],
    "s3": ["calentad"],
    "p1": [""],
    "p2": ["caliente"],
    "p3": ["calienten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no calientes"],
    "s3": ["no calentéis"],
    "p1": [""],
    "p2": ["no caliente"],
    "p3": ["no calienten"]
  },
  "In Pres Pro": {
    "s1": ["estoy calentando"],
    "s2": ["estás calentando"],
    "s3": ["está calentando"],
    "p1": ["estamos calentando"],
    "p2": ["estáis calentando"],
    "p3": ["están calentando"]
  }
}, {
  "inf": "caminar",
  "inf_eng": "to walk",
  "In Pres": {
    "s1": ["camino"],
    "s2": ["caminas"],
    "s3": ["camina"],
    "p1": ["caminamos"],
    "p2": ["camináis"],
    "p3": ["caminan"]
  },
  "In Fut": {
    "s1": ["caminaré"],
    "s2": ["caminarás"],
    "s3": ["caminará"],
    "p1": ["caminaremos"],
    "p2": ["caminaréis"],
    "p3": ["caminarán"]
  },
  "In Imp": {
    "s1": ["caminaba"],
    "s2": ["caminabas"],
    "s3": ["caminaba"],
    "p1": ["caminábamos"],
    "p2": ["caminabais"],
    "p3": ["caminaban"]
  },
  "In Pret": {
    "s1": ["caminé"],
    "s2": ["caminaste"],
    "s3": ["caminó"],
    "p1": ["caminamos"],
    "p2": ["caminasteis"],
    "p3": ["caminaron"]
  },
  "In Cond": {
    "s1": ["caminaría"],
    "s2": ["caminarías"],
    "s3": ["caminaría"],
    "p1": ["caminaríamos"],
    "p2": ["caminaríais"],
    "p3": ["caminarían"]
  },
  "In Pres Per": {
    "s1": ["he caminado"],
    "s2": ["has caminado"],
    "s3": ["ha caminado"],
    "p1": ["hemos caminado"],
    "p2": ["habéis caminado"],
    "p3": ["han caminado"]
  },
  "In Fut Per": {
    "s1": ["habré caminado"],
    "s2": ["habrás caminado"],
    "s3": ["habrá caminado"],
    "p1": ["habremos caminado"],
    "p2": ["habréis caminado"],
    "p3": ["habrán caminado"]
  },
  "In Pas Per": {
    "s1": ["había caminado"],
    "s2": ["habías caminado"],
    "s3": ["había caminado"],
    "p1": ["habíamos caminado"],
    "p2": ["habíais caminado"],
    "p3": ["habían caminado"]
  },
  "In Cond Per": {
    "s1": ["habría caminado"],
    "s2": ["habrías caminado"],
    "s3": ["habría caminado"],
    "p1": ["habríamos caminado"],
    "p2": ["habríais caminado"],
    "p3": ["habrían caminado"]
  },
  "Sub Pres": {
    "s1": ["camine"],
    "s2": ["camines"],
    "s3": ["camine"],
    "p1": ["caminemos"],
    "p2": ["caminéis"],
    "p3": ["caminen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["camina"],
    "s3": ["caminad"],
    "p1": [""],
    "p2": ["camine"],
    "p3": ["caminen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no camines"],
    "s3": ["no caminéis"],
    "p1": [""],
    "p2": ["no camine"],
    "p3": ["no caminen"]
  },
  "In Pres Pro": {
    "s1": ["estoy caminando"],
    "s2": ["estás caminando"],
    "s3": ["está caminando"],
    "p1": ["estamos caminando"],
    "p2": ["estáis caminando"],
    "p3": ["están caminando"]
  }
}, {
  "inf": "cancelar",
  "inf_eng": "to cancel",
  "In Pres": {
    "s1": ["cancelo"],
    "s2": ["cancelas"],
    "s3": ["cancela"],
    "p1": ["cancelamos"],
    "p2": ["canceláis"],
    "p3": ["cancelan"]
  },
  "In Fut": {
    "s1": ["cancelaré"],
    "s2": ["cancelarás"],
    "s3": ["cancelará"],
    "p1": ["cancelaremos"],
    "p2": ["cancelaréis"],
    "p3": ["cancelarán"]
  },
  "In Imp": {
    "s1": ["cancelaba"],
    "s2": ["cancelabas"],
    "s3": ["cancelaba"],
    "p1": ["cancelábamos"],
    "p2": ["cancelabais"],
    "p3": ["cancelaban"]
  },
  "In Pret": {
    "s1": ["cancelé"],
    "s2": ["cancelaste"],
    "s3": ["canceló"],
    "p1": ["cancelamos"],
    "p2": ["cancelasteis"],
    "p3": ["cancelaron"]
  },
  "In Cond": {
    "s1": ["cancelaría"],
    "s2": ["cancelarías"],
    "s3": ["cancelaría"],
    "p1": ["cancelaríamos"],
    "p2": ["cancelaríais"],
    "p3": ["cancelarían"]
  },
  "In Pres Per": {
    "s1": ["he cancelado"],
    "s2": ["has cancelado"],
    "s3": ["ha cancelado"],
    "p1": ["hemos cancelado"],
    "p2": ["habéis cancelado"],
    "p3": ["han cancelado"]
  },
  "In Fut Per": {
    "s1": ["habré cancelado"],
    "s2": ["habrás cancelado"],
    "s3": ["habrá cancelado"],
    "p1": ["habremos cancelado"],
    "p2": ["habréis cancelado"],
    "p3": ["habrán cancelado"]
  },
  "In Pas Per": {
    "s1": ["había cancelado"],
    "s2": ["habías cancelado"],
    "s3": ["había cancelado"],
    "p1": ["habíamos cancelado"],
    "p2": ["habíais cancelado"],
    "p3": ["habían cancelado"]
  },
  "In Cond Per": {
    "s1": ["habría cancelado"],
    "s2": ["habrías cancelado"],
    "s3": ["habría cancelado"],
    "p1": ["habríamos cancelado"],
    "p2": ["habríais cancelado"],
    "p3": ["habrían cancelado"]
  },
  "Sub Pres": {
    "s1": ["cancele"],
    "s2": ["canceles"],
    "s3": ["cancele"],
    "p1": ["cancelemos"],
    "p2": ["canceléis"],
    "p3": ["cancelen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cancela"],
    "s3": ["cancelad"],
    "p1": [""],
    "p2": ["cancele"],
    "p3": ["cancelen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no canceles"],
    "s3": ["no canceléis"],
    "p1": [""],
    "p2": ["no cancele"],
    "p3": ["no cancelen"]
  },
  "In Pres Pro": {
    "s1": ["estoy cancelando"],
    "s2": ["estás cancelando"],
    "s3": ["está cancelando"],
    "p1": ["estamos cancelando"],
    "p2": ["estáis cancelando"],
    "p3": ["están cancelando"]
  }
}, {
  "inf": "comer",
  "inf_eng": "to eat",
  "In Cond": {
    "s1": ["comería"],
    "s2": ["comerías"],
    "s3": ["comería"],
    "p1": ["comeríamos"],
    "p2": ["comeríais"],
    "p3": ["comerían"]
  },
  "In Pres Per": {
    "s1": ["he comido"],
    "s2": ["has comido"],
    "s3": ["ha comido"],
    "p1": ["hemos comido"],
    "p2": ["habéis comido"],
    "p3": ["han comido"]
  },
  "In Pres": {
    "s1": ["como"],
    "s2": ["comes"],
    "s3": ["come"],
    "p1": ["comemos"],
    "p2": ["coméis"],
    "p3": ["comen"]
  },
  "In Fut": {
    "s1": ["comeré"],
    "s2": ["comerás"],
    "s3": ["comerá"],
    "p1": ["comeremos"],
    "p2": ["comeréis"],
    "p3": ["comerán"]
  },
  "In Imp": {
    "s1": ["comía"],
    "s2": ["comías"],
    "s3": ["comía"],
    "p1": ["comíamos"],
    "p2": ["comíais"],
    "p3": ["comían"]
  },
  "In Pret": {
    "s1": ["comí"],
    "s2": ["comiste"],
    "s3": ["comió"],
    "p1": ["comimos"],
    "p2": ["comisteis"],
    "p3": ["comieron"]
  },
  "In Fut Per": {
    "s1": ["habré comido"],
    "s2": ["habrás comido"],
    "s3": ["habrá comido"],
    "p1": ["habremos comido"],
    "p2": ["habréis comido"],
    "p3": ["habrán comido"]
  },
  "In Pas Per": {
    "s1": ["había comido"],
    "s2": ["habías comido"],
    "s3": ["había comido"],
    "p1": ["habíamos comido"],
    "p2": ["habíais comido"],
    "p3": ["habían comido"]
  },
  "In Cond Per": {
    "s1": ["habría comido"],
    "s2": ["habrías comido"],
    "s3": ["habría comido"],
    "p1": ["habríamos comido"],
    "p2": ["habríais comido"],
    "p3": ["habrían comido"]
  },
  "Sub Pres": {
    "s1": ["coma"],
    "s2": ["comas"],
    "s3": ["coma"],
    "p1": ["comamos"],
    "p2": ["comáis"],
    "p3": ["coman"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["come"],
    "s3": ["comed"],
    "p1": [""],
    "p2": ["coma"],
    "p3": ["coman"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no comas"],
    "s3": ["no comáis"],
    "p1": [""],
    "p2": ["no coma"],
    "p3": ["no coman"]
  },
  "In Pres Pro": {
    "s1": ["estoy comiendo"],
    "s2": ["estás comiendo"],
    "s3": ["está comiendo"],
    "p1": ["estamos comiendo"],
    "p2": ["estáis comiendo"],
    "p3": ["están comiendo"]
  }
}, {
  "inf": "cerrar",
  "inf_eng": "to close",
  "In Pres": {
    "s1": ["cierro"],
    "s2": ["cierras"],
    "s3": ["cierra"],
    "p1": ["cerramos"],
    "p2": ["cerráis"],
    "p3": ["cierran"]
  },
  "In Fut": {
    "s1": ["cerraré"],
    "s2": ["cerrarás"],
    "s3": ["cerrará"],
    "p1": ["cerraremos"],
    "p2": ["cerraréis"],
    "p3": ["cerrarán"]
  },
  "In Imp": {
    "s1": ["cerraba"],
    "s2": ["cerrabas"],
    "s3": ["cerraba"],
    "p1": ["cerrábamos"],
    "p2": ["cerrabais"],
    "p3": ["cerraban"]
  },
  "In Pret": {
    "s1": ["cerré"],
    "s2": ["cerraste"],
    "s3": ["cerró"],
    "p1": ["cerramos"],
    "p2": ["cerrasteis"],
    "p3": ["cerraron"]
  },
  "In Cond": {
    "s1": ["cerraría"],
    "s2": ["cerrarías"],
    "s3": ["cerraría"],
    "p1": ["cerraríamos"],
    "p2": ["cerraríais"],
    "p3": ["cerrarían"]
  },
  "In Pres Per": {
    "s1": ["he cerrado"],
    "s2": ["has cerrado"],
    "s3": ["ha cerrado"],
    "p1": ["hemos cerrado"],
    "p2": ["habéis cerrado"],
    "p3": ["han cerrado"]
  },
  "In Fut Per": {
    "s1": ["habré cerrado"],
    "s2": ["habrás cerrado"],
    "s3": ["habrá cerrado"],
    "p1": ["habremos cerrado"],
    "p2": ["habréis cerrado"],
    "p3": ["habrán cerrado"]
  },
  "In Pas Per": {
    "s1": ["había cerrado"],
    "s2": ["habías cerrado"],
    "s3": ["había cerrado"],
    "p1": ["habíamos cerrado"],
    "p2": ["habíais cerrado"],
    "p3": ["habían cerrado"]
  },
  "In Cond Per": {
    "s1": ["habría cerrado"],
    "s2": ["habrías cerrado"],
    "s3": ["habría cerrado"],
    "p1": ["habríamos cerrado"],
    "p2": ["habríais cerrado"],
    "p3": ["habrían cerrado"]
  },
  "Sub Pres": {
    "s1": ["cierre"],
    "s2": ["cierres"],
    "s3": ["cierre"],
    "p1": ["cerremos"],
    "p2": ["cerréis"],
    "p3": ["cierren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cierra"],
    "s3": ["cerrad"],
    "p1": [""],
    "p2": ["cierre"],
    "p3": ["cierren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no cierres"],
    "s3": ["no cerréis"],
    "p1": [""],
    "p2": ["no cierre"],
    "p3": ["no cierren"]
  },
  "In Pres Pro": {
    "s1": ["estoy cerrando"],
    "s2": ["estás cerrando"],
    "s3": ["está cerrando"],
    "p1": ["estamos cerrando"],
    "p2": ["estáis cerrando"],
    "p3": ["están cerrando"]
  }
}, {
  "inf": "chocar",
  "inf_eng": "to shock",
  "In Pres": {
    "s1": ["choco"],
    "s2": ["chocas"],
    "s3": ["choca"],
    "p1": ["chocamos"],
    "p2": ["chocáis"],
    "p3": ["chocan"]
  },
  "In Fut": {
    "s1": ["chocaré"],
    "s2": ["chocarás"],
    "s3": ["chocará"],
    "p1": ["chocaremos"],
    "p2": ["chocaréis"],
    "p3": ["chocarán"]
  },
  "In Imp": {
    "s1": ["chocaba"],
    "s2": ["chocabas"],
    "s3": ["chocaba"],
    "p1": ["chocábamos"],
    "p2": ["chocabais"],
    "p3": ["chocaban"]
  },
  "In Pret": {
    "s1": ["choqué"],
    "s2": ["chocaste"],
    "s3": ["chocó"],
    "p1": ["chocamos"],
    "p2": ["chocasteis"],
    "p3": ["chocaron"]
  },
  "In Cond": {
    "s1": ["chocaría"],
    "s2": ["chocarías"],
    "s3": ["chocaría"],
    "p1": ["chocaríamos"],
    "p2": ["chocaríais"],
    "p3": ["chocarían"]
  },
  "In Pres Per": {
    "s1": ["he chocado"],
    "s2": ["has chocado"],
    "s3": ["ha chocado"],
    "p1": ["hemos chocado"],
    "p2": ["habéis chocado"],
    "p3": ["han chocado"]
  },
  "In Fut Per": {
    "s1": ["habré chocado"],
    "s2": ["habrás chocado"],
    "s3": ["habrá chocado"],
    "p1": ["habremos chocado"],
    "p2": ["habréis chocado"],
    "p3": ["habrán chocado"]
  },
  "In Pas Per": {
    "s1": ["había chocado"],
    "s2": ["habías chocado"],
    "s3": ["había chocado"],
    "p1": ["habíamos chocado"],
    "p2": ["habíais chocado"],
    "p3": ["habían chocado"]
  },
  "In Cond Per": {
    "s1": ["habría chocado"],
    "s2": ["habrías chocado"],
    "s3": ["habría chocado"],
    "p1": ["habríamos chocado"],
    "p2": ["habríais chocado"],
    "p3": ["habrían chocado"]
  },
  "Sub Pres": {
    "s1": ["choque"],
    "s2": ["choques"],
    "s3": ["choque"],
    "p1": ["choquemos"],
    "p2": ["choquéis"],
    "p3": ["choquen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["choca"],
    "s3": ["chocad"],
    "p1": [""],
    "p2": ["choque"],
    "p3": ["choquen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no choques"],
    "s3": ["no choquéis"],
    "p1": [""],
    "p2": ["no choque"],
    "p3": ["no choquen"]
  },
  "In Pres Pro": {
    "s1": ["estoy chocando"],
    "s2": ["estás chocando"],
    "s3": ["está chocando"],
    "p1": ["estamos chocando"],
    "p2": ["estáis chocando"],
    "p3": ["están chocando"]
  }
}, {
  "inf": "cocinar",
  "inf_eng": "to cook",
  "In Pres": {
    "s1": ["cocino"],
    "s2": ["cocinas"],
    "s3": ["cocina"],
    "p1": ["cocinamos"],
    "p2": ["cocináis"],
    "p3": ["cocinan"]
  },
  "In Fut": {
    "s1": ["cocinaré"],
    "s2": ["cocinarás"],
    "s3": ["cocinará"],
    "p1": ["cocinaremos"],
    "p2": ["cocinaréis"],
    "p3": ["cocinarán"]
  },
  "In Imp": {
    "s1": ["cocinaba"],
    "s2": ["cocinabas"],
    "s3": ["cocinaba"],
    "p1": ["cocinábamos"],
    "p2": ["cocinabais"],
    "p3": ["cocinaban"]
  },
  "In Pret": {
    "s1": ["cociné"],
    "s2": ["cocinaste"],
    "s3": ["cocinó"],
    "p1": ["cocinamos"],
    "p2": ["cocinasteis"],
    "p3": ["cocinaron"]
  },
  "In Cond": {
    "s1": ["cocinaría"],
    "s2": ["cocinarías"],
    "s3": ["cocinaría"],
    "p1": ["cocinaríamos"],
    "p2": ["cocinaríais"],
    "p3": ["cocinarían"]
  },
  "In Pres Per": {
    "s1": ["he cocinado"],
    "s2": ["has cocinado"],
    "s3": ["ha cocinado"],
    "p1": ["hemos cocinado"],
    "p2": ["habéis cocinado"],
    "p3": ["han cocinado"]
  },
  "In Fut Per": {
    "s1": ["habré cocinado"],
    "s2": ["habrás cocinado"],
    "s3": ["habrá cocinado"],
    "p1": ["habremos cocinado"],
    "p2": ["habréis cocinado"],
    "p3": ["habrán cocinado"]
  },
  "In Pas Per": {
    "s1": ["había cocinado"],
    "s2": ["habías cocinado"],
    "s3": ["había cocinado"],
    "p1": ["habíamos cocinado"],
    "p2": ["habíais cocinado"],
    "p3": ["habían cocinado"]
  },
  "In Cond Per": {
    "s1": ["habría cocinado"],
    "s2": ["habrías cocinado"],
    "s3": ["habría cocinado"],
    "p1": ["habríamos cocinado"],
    "p2": ["habríais cocinado"],
    "p3": ["habrían cocinado"]
  },
  "Sub Pres": {
    "s1": ["cocine"],
    "s2": ["cocines"],
    "s3": ["cocine"],
    "p1": ["cocinemos"],
    "p2": ["cocinéis"],
    "p3": ["cocinen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cocina"],
    "s3": ["cocinad"],
    "p1": [""],
    "p2": ["cocine"],
    "p3": ["cocinen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no cocines"],
    "s3": ["no cocinéis"],
    "p1": [""],
    "p2": ["no cocine"],
    "p3": ["no cocinen"]
  },
  "In Pres Pro": {
    "s1": ["estoy cocinando"],
    "s2": ["estás cocinando"],
    "s3": ["está cocinando"],
    "p1": ["estamos cocinando"],
    "p2": ["estáis cocinando"],
    "p3": ["están cocinando"]
  }
}, {
  "inf": "coger",
  "inf_eng": "to catch",
  "In Pres": {
    "s1": ["cojo"],
    "s2": ["coges"],
    "s3": ["coge"],
    "p1": ["cogemos"],
    "p2": ["cogéis"],
    "p3": ["cogen"]
  },
  "In Fut": {
    "s1": ["cogeré"],
    "s2": ["cogerás"],
    "s3": ["cogerá"],
    "p1": ["cogeremos"],
    "p2": ["cogeréis"],
    "p3": ["cogerán"]
  },
  "In Imp": {
    "s1": ["cogía"],
    "s2": ["cogías"],
    "s3": ["cogía"],
    "p1": ["cogíamos"],
    "p2": ["cogíais"],
    "p3": ["cogían"]
  },
  "In Pret": {
    "s1": ["cogí"],
    "s2": ["cogiste"],
    "s3": ["cogió"],
    "p1": ["cogimos"],
    "p2": ["cogisteis"],
    "p3": ["cogieron"]
  },
  "In Cond": {
    "s1": ["cogería"],
    "s2": ["cogerías"],
    "s3": ["cogería"],
    "p1": ["cogeríamos"],
    "p2": ["cogeríais"],
    "p3": ["cogerían"]
  },
  "In Pres Per": {
    "s1": ["he cogido"],
    "s2": ["has cogido"],
    "s3": ["ha cogido"],
    "p1": ["hemos cogido"],
    "p2": ["habéis cogido"],
    "p3": ["han cogido"]
  },
  "In Fut Per": {
    "s1": ["habré cogido"],
    "s2": ["habrás cogido"],
    "s3": ["habrá cogido"],
    "p1": ["habremos cogido"],
    "p2": ["habréis cogido"],
    "p3": ["habrán cogido"]
  },
  "In Pas Per": {
    "s1": ["había cogido"],
    "s2": ["habías cogido"],
    "s3": ["había cogido"],
    "p1": ["habíamos cogido"],
    "p2": ["habíais cogido"],
    "p3": ["habían cogido"]
  },
  "In Cond Per": {
    "s1": ["habría cogido"],
    "s2": ["habrías cogido"],
    "s3": ["habría cogido"],
    "p1": ["habríamos cogido"],
    "p2": ["habríais cogido"],
    "p3": ["habrían cogido"]
  },
  "Sub Pres": {
    "s1": ["coja"],
    "s2": ["cojas"],
    "s3": ["coja"],
    "p1": ["cojamos"],
    "p2": ["cojáis"],
    "p3": ["cojan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["coge"],
    "s3": ["coged"],
    "p1": [""],
    "p2": ["coja"],
    "p3": ["cojan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no cojas"],
    "s3": ["no cojáis"],
    "p1": [""],
    "p2": ["no coja"],
    "p3": ["no cojan"]
  },
  "In Pres Pro": {
    "s1": ["estoy cogiendo"],
    "s2": ["estás cogiendo"],
    "s3": ["está cogiendo"],
    "p1": ["estamos cogiendo"],
    "p2": ["estáis cogiendo"],
    "p3": ["están cogiendo"]
  }
}, {
  "inf": "comprar",
  "inf_eng": "to buy",
  "In Fut": {
    "s1": ["compraré"],
    "s2": ["comprarás"],
    "s3": ["comprará"],
    "p1": ["compraremos"],
    "p2": ["compraréis"],
    "p3": ["comprarán"]
  },
  "In Pres": {
    "s1": ["compro"],
    "s2": ["compras"],
    "s3": ["compra"],
    "p1": ["compramos"],
    "p2": ["compráis"],
    "p3": ["compran"]
  },
  "In Imp": {
    "s1": ["compraba"],
    "s2": ["comprabas"],
    "s3": ["compraba"],
    "p1": ["comprábamos"],
    "p2": ["comprabais"],
    "p3": ["compraban"]
  },
  "In Pret": {
    "s1": ["compré"],
    "s2": ["compraste"],
    "s3": ["compró"],
    "p1": ["compramos"],
    "p2": ["comprasteis"],
    "p3": ["compraron"]
  },
  "In Cond": {
    "s1": ["compraría"],
    "s2": ["comprarías"],
    "s3": ["compraría"],
    "p1": ["compraríamos"],
    "p2": ["compraríais"],
    "p3": ["comprarían"]
  },
  "In Pres Per": {
    "s1": ["he comprado"],
    "s2": ["has comprado"],
    "s3": ["ha comprado"],
    "p1": ["hemos comprado"],
    "p2": ["habéis comprado"],
    "p3": ["han comprado"]
  },
  "In Fut Per": {
    "s1": ["habré comprado"],
    "s2": ["habrás comprado"],
    "s3": ["habrá comprado"],
    "p1": ["habremos comprado"],
    "p2": ["habréis comprado"],
    "p3": ["habrán comprado"]
  },
  "In Pas Per": {
    "s1": ["había comprado"],
    "s2": ["habías comprado"],
    "s3": ["había comprado"],
    "p1": ["habíamos comprado"],
    "p2": ["habíais comprado"],
    "p3": ["habían comprado"]
  },
  "In Cond Per": {
    "s1": ["habría comprado"],
    "s2": ["habrías comprado"],
    "s3": ["habría comprado"],
    "p1": ["habríamos comprado"],
    "p2": ["habríais comprado"],
    "p3": ["habrían comprado"]
  },
  "Sub Pres": {
    "s1": ["compre"],
    "s2": ["compres"],
    "s3": ["compre"],
    "p1": ["compremos"],
    "p2": ["compréis"],
    "p3": ["compren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["compra"],
    "s3": ["comprad"],
    "p1": [""],
    "p2": ["compre"],
    "p3": ["compren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no compres"],
    "s3": ["no compréis"],
    "p1": [""],
    "p2": ["no compre"],
    "p3": ["no compren"]
  },
  "In Pres Pro": {
    "s1": ["estoy comprando"],
    "s2": ["estás comprando"],
    "s3": ["está comprando"],
    "p1": ["estamos comprando"],
    "p2": ["estáis comprando"],
    "p3": ["están comprando"]
  }
}, {
  "inf": "comprender",
  "inf_eng": "to understand",
  "In Pres": {
    "s1": ["comprendo"],
    "s2": ["comprendes"],
    "s3": ["comprende"],
    "p1": ["comprendemos"],
    "p2": ["comprendéis"],
    "p3": ["comprenden"]
  },
  "In Fut": {
    "s1": ["comprenderé"],
    "s2": ["comprenderás"],
    "s3": ["comprenderá"],
    "p1": ["comprenderemos"],
    "p2": ["comprenderéis"],
    "p3": ["comprenderán"]
  },
  "In Imp": {
    "s1": ["comprendía"],
    "s2": ["comprendías"],
    "s3": ["comprendía"],
    "p1": ["comprendíamos"],
    "p2": ["comprendíais"],
    "p3": ["comprendían"]
  },
  "In Pret": {
    "s1": ["comprendí"],
    "s2": ["comprendiste"],
    "s3": ["comprendió"],
    "p1": ["comprendimos"],
    "p2": ["comprendisteis"],
    "p3": ["comprendieron"]
  },
  "In Cond": {
    "s1": ["comprendería"],
    "s2": ["comprenderías"],
    "s3": ["comprendería"],
    "p1": ["comprenderíamos"],
    "p2": ["comprenderíais"],
    "p3": ["comprenderían"]
  },
  "In Pres Per": {
    "s1": ["he comprendido"],
    "s2": ["has comprendido"],
    "s3": ["ha comprendido"],
    "p1": ["hemos comprendido"],
    "p2": ["habéis comprendido"],
    "p3": ["han comprendido"]
  },
  "In Fut Per": {
    "s1": ["habré comprendido"],
    "s2": ["habrás comprendido"],
    "s3": ["habrá comprendido"],
    "p1": ["habremos comprendido"],
    "p2": ["habréis comprendido"],
    "p3": ["habrán comprendido"]
  },
  "In Pas Per": {
    "s1": ["había comprendido"],
    "s2": ["habías comprendido"],
    "s3": ["había comprendido"],
    "p1": ["habíamos comprendido"],
    "p2": ["habíais comprendido"],
    "p3": ["habían comprendido"]
  },
  "In Cond Per": {
    "s1": ["habría comprendido"],
    "s2": ["habrías comprendido"],
    "s3": ["habría comprendido"],
    "p1": ["habríamos comprendido"],
    "p2": ["habríais comprendido"],
    "p3": ["habrían comprendido"]
  },
  "Sub Pres": {
    "s1": ["comprenda"],
    "s2": ["comprendas"],
    "s3": ["comprenda"],
    "p1": ["comprendamos"],
    "p2": ["comprendáis"],
    "p3": ["comprendan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["comprende"],
    "s3": ["comprended"],
    "p1": [""],
    "p2": ["comprenda"],
    "p3": ["comprendan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no comprendas"],
    "s3": ["no comprendáis"],
    "p1": [""],
    "p2": ["no comprenda"],
    "p3": ["no comprendan"]
  },
  "In Pres Pro": {
    "s1": ["estoy comprendiendo"],
    "s2": ["estás comprendiendo"],
    "s3": ["está comprendiendo"],
    "p1": ["estamos comprendiendo"],
    "p2": ["estáis comprendiendo"],
    "p3": ["están comprendiendo"]
  }
}, {
  "inf": "conseguir",
  "inf_eng": "to get",
  "In Pres": {
    "s1": ["consigo"],
    "s2": ["consigues"],
    "s3": ["consigue"],
    "p1": ["conseguimos"],
    "p2": ["conseguís"],
    "p3": ["consiguen"]
  },
  "In Fut": {
    "s1": ["conseguiré"],
    "s2": ["conseguirás"],
    "s3": ["conseguirá"],
    "p1": ["conseguiremos"],
    "p2": ["conseguiréis"],
    "p3": ["conseguirán"]
  },
  "In Imp": {
    "s1": ["conseguía"],
    "s2": ["conseguías"],
    "s3": ["conseguía"],
    "p1": ["conseguíamos"],
    "p2": ["conseguíais"],
    "p3": ["conseguían"]
  },
  "In Pret": {
    "s1": ["conseguí"],
    "s2": ["conseguiste"],
    "s3": ["consiguió"],
    "p1": ["conseguimos"],
    "p2": ["conseguisteis"],
    "p3": ["consiguieron"]
  },
  "In Cond": {
    "s1": ["conseguiría"],
    "s2": ["conseguirías"],
    "s3": ["conseguiría"],
    "p1": ["conseguiríamos"],
    "p2": ["conseguiríais"],
    "p3": ["conseguirían"]
  },
  "In Pres Per": {
    "s1": ["he conseguido"],
    "s2": ["has conseguido"],
    "s3": ["ha conseguido"],
    "p1": ["hemos conseguido"],
    "p2": ["habéis conseguido"],
    "p3": ["han conseguido"]
  },
  "In Fut Per": {
    "s1": ["habré conseguido"],
    "s2": ["habrás conseguido"],
    "s3": ["habrá conseguido"],
    "p1": ["habremos conseguido"],
    "p2": ["habréis conseguido"],
    "p3": ["habrán conseguido"]
  },
  "In Pas Per": {
    "s1": ["había conseguido"],
    "s2": ["habías conseguido"],
    "s3": ["había conseguido"],
    "p1": ["habíamos conseguido"],
    "p2": ["habíais conseguido"],
    "p3": ["habían conseguido"]
  },
  "In Cond Per": {
    "s1": ["habría conseguido"],
    "s2": ["habrías conseguido"],
    "s3": ["habría conseguido"],
    "p1": ["habríamos conseguido"],
    "p2": ["habríais conseguido"],
    "p3": ["habrían conseguido"]
  },
  "Sub Pres": {
    "s1": ["consiga"],
    "s2": ["consigas"],
    "s3": ["consiga"],
    "p1": ["consigamos"],
    "p2": ["consigáis"],
    "p3": ["consigan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["consigue"],
    "s3": ["conseguid"],
    "p1": [""],
    "p2": ["consiga"],
    "p3": ["consigan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no consigas"],
    "s3": ["no consigáis"],
    "p1": [""],
    "p2": ["no consiga"],
    "p3": ["no consigan"]
  },
  "In Pres Pro": {
    "s1": ["estoy consiguiendo"],
    "s2": ["estás consiguiendo"],
    "s3": ["está consiguiendo"],
    "p1": ["estamos consiguiendo"],
    "p2": ["estáis consiguiendo"],
    "p3": ["están consiguiendo"]
  }
}, {
  "inf": "contar",
  "inf_eng": "to count",
  "In Pres": {
    "s1": ["cuento"],
    "s2": ["cuentas"],
    "s3": ["cuenta"],
    "p1": ["contamos"],
    "p2": ["contáis"],
    "p3": ["cuentan"]
  },
  "In Fut": {
    "s1": ["contaré"],
    "s2": ["contarás"],
    "s3": ["contará"],
    "p1": ["contaremos"],
    "p2": ["contaréis"],
    "p3": ["contarán"]
  },
  "In Imp": {
    "s1": ["contaba"],
    "s2": ["contabas"],
    "s3": ["contaba"],
    "p1": ["contábamos"],
    "p2": ["contabais"],
    "p3": ["contaban"]
  },
  "In Pret": {
    "s1": ["conté"],
    "s2": ["contaste"],
    "s3": ["contó"],
    "p1": ["contamos"],
    "p2": ["contasteis"],
    "p3": ["contaron"]
  },
  "In Cond": {
    "s1": ["contaría"],
    "s2": ["contarías"],
    "s3": ["contaría"],
    "p1": ["contaríamos"],
    "p2": ["contaríais"],
    "p3": ["contarían"]
  },
  "In Pres Per": {
    "s1": ["he contado"],
    "s2": ["has contado"],
    "s3": ["ha contado"],
    "p1": ["hemos contado"],
    "p2": ["habéis contado"],
    "p3": ["han contado"]
  },
  "In Fut Per": {
    "s1": ["habré contado"],
    "s2": ["habrás contado"],
    "s3": ["habrá contado"],
    "p1": ["habremos contado"],
    "p2": ["habréis contado"],
    "p3": ["habrán contado"]
  },
  "In Pas Per": {
    "s1": ["había contado"],
    "s2": ["habías contado"],
    "s3": ["había contado"],
    "p1": ["habíamos contado"],
    "p2": ["habíais contado"],
    "p3": ["habían contado"]
  },
  "In Cond Per": {
    "s1": ["habría contado"],
    "s2": ["habrías contado"],
    "s3": ["habría contado"],
    "p1": ["habríamos contado"],
    "p2": ["habríais contado"],
    "p3": ["habrían contado"]
  },
  "Sub Pres": {
    "s1": ["cuente"],
    "s2": ["cuentes"],
    "s3": ["cuente"],
    "p1": ["contemos"],
    "p2": ["contéis"],
    "p3": ["cuenten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cuenta"],
    "s3": ["contad"],
    "p1": [""],
    "p2": ["cuente"],
    "p3": ["cuenten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no cuentes"],
    "s3": ["no contéis"],
    "p1": [""],
    "p2": ["no cuente"],
    "p3": ["no cuenten"]
  },
  "In Pres Pro": {
    "s1": ["estoy contando"],
    "s2": ["estás contando"],
    "s3": ["está contando"],
    "p1": ["estamos contando"],
    "p2": ["estáis contando"],
    "p3": ["están contando"]
  }
}, {
  "inf": "correr",
  "inf_eng": "to run",
  "In Pres": {
    "s1": ["corro"],
    "s2": ["corres"],
    "s3": ["corre"],
    "p1": ["corremos"],
    "p2": ["corréis"],
    "p3": ["corren"]
  },
  "In Fut": {
    "s1": ["correré"],
    "s2": ["correrás"],
    "s3": ["correrá"],
    "p1": ["correremos"],
    "p2": ["correréis"],
    "p3": ["correrán"]
  },
  "In Imp": {
    "s1": ["corría"],
    "s2": ["corrías"],
    "s3": ["corría"],
    "p1": ["corríamos"],
    "p2": ["corríais"],
    "p3": ["corrían"]
  },
  "In Pret": {
    "s1": ["corrí"],
    "s2": ["corriste"],
    "s3": ["corrió"],
    "p1": ["corrimos"],
    "p2": ["corristeis"],
    "p3": ["corrieron"]
  },
  "In Cond": {
    "s1": ["correría"],
    "s2": ["correrías"],
    "s3": ["correría"],
    "p1": ["correríamos"],
    "p2": ["correríais"],
    "p3": ["correrían"]
  },
  "In Pres Per": {
    "s1": ["he corrido"],
    "s2": ["has corrido"],
    "s3": ["ha corrido"],
    "p1": ["hemos corrido"],
    "p2": ["habéis corrido"],
    "p3": ["han corrido"]
  },
  "In Fut Per": {
    "s1": ["habré corrido"],
    "s2": ["habrás corrido"],
    "s3": ["habrá corrido"],
    "p1": ["habremos corrido"],
    "p2": ["habréis corrido"],
    "p3": ["habrán corrido"]
  },
  "In Pas Per": {
    "s1": ["había corrido"],
    "s2": ["habías corrido"],
    "s3": ["había corrido"],
    "p1": ["habíamos corrido"],
    "p2": ["habíais corrido"],
    "p3": ["habían corrido"]
  },
  "In Cond Per": {
    "s1": ["habría corrido"],
    "s2": ["habrías corrido"],
    "s3": ["habría corrido"],
    "p1": ["habríamos corrido"],
    "p2": ["habríais corrido"],
    "p3": ["habrían corrido"]
  },
  "Sub Pres": {
    "s1": ["corra"],
    "s2": ["corras"],
    "s3": ["corra"],
    "p1": ["corramos"],
    "p2": ["corráis"],
    "p3": ["corran"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["corre"],
    "s3": ["corred"],
    "p1": [""],
    "p2": ["corra"],
    "p3": ["corran"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no corras"],
    "s3": ["no corráis"],
    "p1": [""],
    "p2": ["no corra"],
    "p3": ["no corran"]
  },
  "In Pres Pro": {
    "s1": ["estoy corriendo"],
    "s2": ["estás corriendo"],
    "s3": ["está corriendo"],
    "p1": ["estamos corriendo"],
    "p2": ["estáis corriendo"],
    "p3": ["están corriendo"]
  }
}, {
  "inf": "coser",
  "inf_eng": "to sew",
  "In Pres": {
    "s1": ["coso"],
    "s2": ["coses"],
    "s3": ["cose"],
    "p1": ["cosemos"],
    "p2": ["coséis"],
    "p3": ["cosen"]
  },
  "In Fut": {
    "s1": ["coseré"],
    "s2": ["coserás"],
    "s3": ["coserá"],
    "p1": ["coseremos"],
    "p2": ["coseréis"],
    "p3": ["coserán"]
  },
  "In Imp": {
    "s1": ["cosía"],
    "s2": ["cosías"],
    "s3": ["cosía"],
    "p1": ["cosíamos"],
    "p2": ["cosíais"],
    "p3": ["cosían"]
  },
  "In Pret": {
    "s1": ["cosí"],
    "s2": ["cosiste"],
    "s3": ["cosió"],
    "p1": ["cosimos"],
    "p2": ["cosisteis"],
    "p3": ["cosieron"]
  },
  "In Cond": {
    "s1": ["cosería"],
    "s2": ["coserías"],
    "s3": ["cosería"],
    "p1": ["coseríamos"],
    "p2": ["coseríais"],
    "p3": ["coserían"]
  },
  "In Pres Per": {
    "s1": ["he cosido"],
    "s2": ["has cosido"],
    "s3": ["ha cosido"],
    "p1": ["hemos cosido"],
    "p2": ["habéis cosido"],
    "p3": ["han cosido"]
  },
  "In Fut Per": {
    "s1": ["habré cosido"],
    "s2": ["habrás cosido"],
    "s3": ["habrá cosido"],
    "p1": ["habremos cosido"],
    "p2": ["habréis cosido"],
    "p3": ["habrán cosido"]
  },
  "In Pas Per": {
    "s1": ["había cosido"],
    "s2": ["habías cosido"],
    "s3": ["había cosido"],
    "p1": ["habíamos cosido"],
    "p2": ["habíais cosido"],
    "p3": ["habían cosido"]
  },
  "In Cond Per": {
    "s1": ["habría cosido"],
    "s2": ["habrías cosido"],
    "s3": ["habría cosido"],
    "p1": ["habríamos cosido"],
    "p2": ["habríais cosido"],
    "p3": ["habrían cosido"]
  },
  "Sub Pres": {
    "s1": ["cosa"],
    "s2": ["cosas"],
    "s3": ["cosa"],
    "p1": ["cosamos"],
    "p2": ["cosáis"],
    "p3": ["cosan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cose"],
    "s3": ["cosed"],
    "p1": [""],
    "p2": ["cosa"],
    "p3": ["cosan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no cosas"],
    "s3": ["no cosáis"],
    "p1": [""],
    "p2": ["no cosa"],
    "p3": ["no cosan"]
  },
  "In Pres Pro": {
    "s1": ["estoy cosiendo"],
    "s2": ["estás cosiendo"],
    "s3": ["está cosiendo"],
    "p1": ["estamos cosiendo"],
    "p2": ["estáis cosiendo"],
    "p3": ["están cosiendo"]
  }
}, {
  "inf": "costar",
  "inf_eng": "to cost",
  "In Pres": {
    "s1": ["cuesto"],
    "s2": ["cuestas"],
    "s3": ["cuesta"],
    "p1": ["costamos"],
    "p2": ["costáis"],
    "p3": ["cuestan"]
  },
  "In Fut": {
    "s1": ["costaré"],
    "s2": ["costarás"],
    "s3": ["costará"],
    "p1": ["costaremos"],
    "p2": ["costaréis"],
    "p3": ["costarán"]
  },
  "In Imp": {
    "s1": ["costaba"],
    "s2": ["costabas"],
    "s3": ["costaba"],
    "p1": ["costábamos"],
    "p2": ["costabais"],
    "p3": ["costaban"]
  },
  "In Pret": {
    "s1": ["costé"],
    "s2": ["costaste"],
    "s3": ["costó"],
    "p1": ["costamos"],
    "p2": ["costasteis"],
    "p3": ["costaron"]
  },
  "In Cond": {
    "s1": ["costaría"],
    "s2": ["costarías"],
    "s3": ["costaría"],
    "p1": ["costaríamos"],
    "p2": ["costaríais"],
    "p3": ["costarían"]
  },
  "In Pres Per": {
    "s1": ["he costado"],
    "s2": ["has costado"],
    "s3": ["ha costado"],
    "p1": ["hemos costado"],
    "p2": ["habéis costado"],
    "p3": ["han costado"]
  },
  "In Fut Per": {
    "s1": ["habré costado"],
    "s2": ["habrás costado"],
    "s3": ["habrá costado"],
    "p1": ["habremos costado"],
    "p2": ["habréis costado"],
    "p3": ["habrán costado"]
  },
  "In Pas Per": {
    "s1": ["había costado"],
    "s2": ["habías costado"],
    "s3": ["había costado"],
    "p1": ["habíamos costado"],
    "p2": ["habíais costado"],
    "p3": ["habían costado"]
  },
  "In Cond Per": {
    "s1": ["habría costado"],
    "s2": ["habrías costado"],
    "s3": ["habría costado"],
    "p1": ["habríamos costado"],
    "p2": ["habríais costado"],
    "p3": ["habrían costado"]
  },
  "Sub Pres": {
    "s1": ["cueste"],
    "s2": ["cuestes"],
    "s3": ["cueste"],
    "p1": ["costemos"],
    "p2": ["costéis"],
    "p3": ["cuesten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cuesta"],
    "s3": ["costad"],
    "p1": [""],
    "p2": ["cueste"],
    "p3": ["cuesten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no cuestes"],
    "s3": ["no costéis"],
    "p1": [""],
    "p2": ["no cueste"],
    "p3": ["no cuesten"]
  },
  "In Pres Pro": {
    "s1": ["estoy costando"],
    "s2": ["estás costando"],
    "s3": ["está costando"],
    "p1": ["estamos costando"],
    "p2": ["estáis costando"],
    "p3": ["están costando"]
  }
}, {
  "inf": "crear",
  "inf_eng": "to create",
  "In Pres": {
    "s1": ["creo"],
    "s2": ["creas"],
    "s3": ["crea"],
    "p1": ["creamos"],
    "p2": ["creáis"],
    "p3": ["crean"]
  },
  "In Fut": {
    "s1": ["crearé"],
    "s2": ["crearás"],
    "s3": ["creará"],
    "p1": ["crearemos"],
    "p2": ["crearéis"],
    "p3": ["crearán"]
  },
  "In Imp": {
    "s1": ["creaba"],
    "s2": ["creabas"],
    "s3": ["creaba"],
    "p1": ["creábamos"],
    "p2": ["creabais"],
    "p3": ["creaban"]
  },
  "In Pret": {
    "s1": ["creé"],
    "s2": ["creaste"],
    "s3": ["creó"],
    "p1": ["creamos"],
    "p2": ["creasteis"],
    "p3": ["crearon"]
  },
  "In Cond": {
    "s1": ["crearía"],
    "s2": ["crearías"],
    "s3": ["crearía"],
    "p1": ["crearíamos"],
    "p2": ["crearíais"],
    "p3": ["crearían"]
  },
  "In Pres Per": {
    "s1": ["he creado"],
    "s2": ["has creado"],
    "s3": ["ha creado"],
    "p1": ["hemos creado"],
    "p2": ["habéis creado"],
    "p3": ["han creado"]
  },
  "In Fut Per": {
    "s1": ["habré creado"],
    "s2": ["habrás creado"],
    "s3": ["habrá creado"],
    "p1": ["habremos creado"],
    "p2": ["habréis creado"],
    "p3": ["habrán creado"]
  },
  "In Pas Per": {
    "s1": ["había creado"],
    "s2": ["habías creado"],
    "s3": ["había creado"],
    "p1": ["habíamos creado"],
    "p2": ["habíais creado"],
    "p3": ["habían creado"]
  },
  "In Cond Per": {
    "s1": ["habría creado"],
    "s2": ["habrías creado"],
    "s3": ["habría creado"],
    "p1": ["habríamos creado"],
    "p2": ["habríais creado"],
    "p3": ["habrían creado"]
  },
  "Sub Pres": {
    "s1": ["cree"],
    "s2": ["crees"],
    "s3": ["cree"],
    "p1": ["creemos"],
    "p2": ["creéis"],
    "p3": ["creen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["crea"],
    "s3": ["cread"],
    "p1": [""],
    "p2": ["cree"],
    "p3": ["creen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no crees"],
    "s3": ["no creéis"],
    "p1": [""],
    "p2": ["no cree"],
    "p3": ["no creen"]
  },
  "In Pres Pro": {
    "s1": ["estoy creando"],
    "s2": ["estás creando"],
    "s3": ["está creando"],
    "p1": ["estamos creando"],
    "p2": ["estáis creando"],
    "p3": ["están creando"]
  }
}, {
  "inf": "creer",
  "inf_eng": "to believe",
  "In Pres": {
    "s1": ["creo"],
    "s2": ["crees"],
    "s3": ["cree"],
    "p1": ["creemos"],
    "p2": ["creéis"],
    "p3": ["creen"]
  },
  "In Fut": {
    "s1": ["creeré"],
    "s2": ["creerás"],
    "s3": ["creerá"],
    "p1": ["creeremos"],
    "p2": ["creeréis"],
    "p3": ["creerán"]
  },
  "In Imp": {
    "s1": ["creía"],
    "s2": ["creías"],
    "s3": ["creía"],
    "p1": ["creíamos"],
    "p2": ["creíais"],
    "p3": ["creían"]
  },
  "In Pret": {
    "s1": ["creí"],
    "s2": ["creíste"],
    "s3": ["creyó"],
    "p1": ["creímos"],
    "p2": ["creísteis"],
    "p3": ["creyeron"]
  },
  "In Cond": {
    "s1": ["creería"],
    "s2": ["creerías"],
    "s3": ["creería"],
    "p1": ["creeríamos"],
    "p2": ["creeríais"],
    "p3": ["creerían"]
  },
  "In Pres Per": {
    "s1": ["he creído"],
    "s2": ["has creído"],
    "s3": ["ha creído"],
    "p1": ["hemos creído"],
    "p2": ["habéis creído"],
    "p3": ["han creído"]
  },
  "In Fut Per": {
    "s1": ["habré creído"],
    "s2": ["habrás creído"],
    "s3": ["habrá creído"],
    "p1": ["habremos creído"],
    "p2": ["habréis creído"],
    "p3": ["habrán creído"]
  },
  "In Pas Per": {
    "s1": ["había creído"],
    "s2": ["habías creído"],
    "s3": ["había creído"],
    "p1": ["habíamos creído"],
    "p2": ["habíais creído"],
    "p3": ["habían creído"]
  },
  "In Cond Per": {
    "s1": ["habría creído"],
    "s2": ["habrías creído"],
    "s3": ["habría creído"],
    "p1": ["habríamos creído"],
    "p2": ["habríais creído"],
    "p3": ["habrían creído"]
  },
  "Sub Pres": {
    "s1": ["crea"],
    "s2": ["creas"],
    "s3": ["crea"],
    "p1": ["creamos"],
    "p2": ["creáis"],
    "p3": ["crean"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cree"],
    "s3": ["creed"],
    "p1": [""],
    "p2": ["crea"],
    "p3": ["crean"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no creas"],
    "s3": ["no creáis"],
    "p1": [""],
    "p2": ["no crea"],
    "p3": ["no crean"]
  },
  "In Pres Pro": {
    "s1": ["estoy creyendo"],
    "s2": ["estás creyendo"],
    "s3": ["está creyendo"],
    "p1": ["estamos creyendo"],
    "p2": ["estáis creyendo"],
    "p3": ["están creyendo"]
  }
}, {
  "inf": "criar",
  "inf_eng": "to raise",
  "In Pres": {
    "s1": ["crío"],
    "s2": ["crías"],
    "s3": ["cría"],
    "p1": ["criamos"],
    "p2": ["criáis"],
    "p3": ["crían"]
  },
  "In Fut": {
    "s1": ["criaré"],
    "s2": ["criarás"],
    "s3": ["criará"],
    "p1": ["criaremos"],
    "p2": ["criaréis"],
    "p3": ["criarán"]
  },
  "In Imp": {
    "s1": ["criaba"],
    "s2": ["criabas"],
    "s3": ["criaba"],
    "p1": ["criábamos"],
    "p2": ["criabais"],
    "p3": ["criaban"]
  },
  "In Pret": {
    "s1": ["crié"],
    "s2": ["criaste"],
    "s3": ["crio"],
    "p1": ["criamos"],
    "p2": ["criasteis"],
    "p3": ["criaron"]
  },
  "In Cond": {
    "s1": ["criaría"],
    "s2": ["criarías"],
    "s3": ["criaría"],
    "p1": ["criaríamos"],
    "p2": ["criaríais"],
    "p3": ["criarían"]
  },
  "In Pres Per": {
    "s1": ["he criado"],
    "s2": ["has criado"],
    "s3": ["ha criado"],
    "p1": ["hemos criado"],
    "p2": ["habéis criado"],
    "p3": ["han criado"]
  },
  "In Fut Per": {
    "s1": ["habré criado"],
    "s2": ["habrás criado"],
    "s3": ["habrá criado"],
    "p1": ["habremos criado"],
    "p2": ["habréis criado"],
    "p3": ["habrán criado"]
  },
  "In Pas Per": {
    "s1": ["había criado"],
    "s2": ["habías criado"],
    "s3": ["había criado"],
    "p1": ["habíamos criado"],
    "p2": ["habíais criado"],
    "p3": ["habían criado"]
  },
  "In Cond Per": {
    "s1": ["habría criado"],
    "s2": ["habrías criado"],
    "s3": ["habría criado"],
    "p1": ["habríamos criado"],
    "p2": ["habríais criado"],
    "p3": ["habrían criado"]
  },
  "Sub Pres": {
    "s1": ["críe"],
    "s2": ["críes"],
    "s3": ["críe"],
    "p1": ["criemos"],
    "p2": ["criéis"],
    "p3": ["críen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cría"],
    "s3": ["criad"],
    "p1": [""],
    "p2": ["críe"],
    "p3": ["críen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no críes"],
    "s3": ["no criéis"],
    "p1": [""],
    "p2": ["no críe"],
    "p3": ["no críen"]
  },
  "In Pres Pro": {
    "s1": ["estoy criando"],
    "s2": ["estás criando"],
    "s3": ["está criando"],
    "p1": ["estamos criando"],
    "p2": ["estáis criando"],
    "p3": ["están criando"]
  }
}, {
  "inf": "cruzar",
  "inf_eng": "to cross",
  "In Pres": {
    "s1": ["cruzo"],
    "s2": ["cruzas"],
    "s3": ["cruza"],
    "p1": ["cruzamos"],
    "p2": ["cruzáis"],
    "p3": ["cruzan"]
  },
  "In Fut": {
    "s1": ["cruzaré"],
    "s2": ["cruzarás"],
    "s3": ["cruzará"],
    "p1": ["cruzaremos"],
    "p2": ["cruzaréis"],
    "p3": ["cruzarán"]
  },
  "In Imp": {
    "s1": ["cruzaba"],
    "s2": ["cruzabas"],
    "s3": ["cruzaba"],
    "p1": ["cruzábamos"],
    "p2": ["cruzabais"],
    "p3": ["cruzaban"]
  },
  "In Pret": {
    "s1": ["crucé"],
    "s2": ["cruzaste"],
    "s3": ["cruzó"],
    "p1": ["cruzamos"],
    "p2": ["cruzasteis"],
    "p3": ["cruzaron"]
  },
  "In Cond": {
    "s1": ["cruzaría"],
    "s2": ["cruzarías"],
    "s3": ["cruzaría"],
    "p1": ["cruzaríamos"],
    "p2": ["cruzaríais"],
    "p3": ["cruzarían"]
  },
  "In Pres Per": {
    "s1": ["he cruzado"],
    "s2": ["has cruzado"],
    "s3": ["ha cruzado"],
    "p1": ["hemos cruzado"],
    "p2": ["habéis cruzado"],
    "p3": ["han cruzado"]
  },
  "In Fut Per": {
    "s1": ["habré cruzado"],
    "s2": ["habrás cruzado"],
    "s3": ["habrá cruzado"],
    "p1": ["habremos cruzado"],
    "p2": ["habréis cruzado"],
    "p3": ["habrán cruzado"]
  },
  "In Pas Per": {
    "s1": ["había cruzado"],
    "s2": ["habías cruzado"],
    "s3": ["había cruzado"],
    "p1": ["habíamos cruzado"],
    "p2": ["habíais cruzado"],
    "p3": ["habían cruzado"]
  },
  "In Cond Per": {
    "s1": ["habría cruzado"],
    "s2": ["habrías cruzado"],
    "s3": ["habría cruzado"],
    "p1": ["habríamos cruzado"],
    "p2": ["habríais cruzado"],
    "p3": ["habrían cruzado"]
  },
  "Sub Pres": {
    "s1": ["cruce"],
    "s2": ["cruces"],
    "s3": ["cruce"],
    "p1": ["crucemos"],
    "p2": ["crucéis"],
    "p3": ["crucen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cruza"],
    "s3": ["cruzad"],
    "p1": [""],
    "p2": ["cruce"],
    "p3": ["crucen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no cruces"],
    "s3": ["no crucéis"],
    "p1": [""],
    "p2": ["no cruce"],
    "p3": ["no crucen"]
  },
  "In Pres Pro": {
    "s1": ["estoy cruzando"],
    "s2": ["estás cruzando"],
    "s3": ["está cruzando"],
    "p1": ["estamos cruzando"],
    "p2": ["estáis cruzando"],
    "p3": ["están cruzando"]
  }
}, {
  "inf": "cumplir",
  "inf_eng": "to fulfil",
  "In Pres": {
    "s1": ["cumplo"],
    "s2": ["cumples"],
    "s3": ["cumple"],
    "p1": ["cumplimos"],
    "p2": ["cumplís"],
    "p3": ["cumplen"]
  },
  "In Fut": {
    "s1": ["cumpliré"],
    "s2": ["cumplirás"],
    "s3": ["cumplirá"],
    "p1": ["cumpliremos"],
    "p2": ["cumpliréis"],
    "p3": ["cumplirán"]
  },
  "In Imp": {
    "s1": ["cumplía"],
    "s2": ["cumplías"],
    "s3": ["cumplía"],
    "p1": ["cumplíamos"],
    "p2": ["cumplíais"],
    "p3": ["cumplían"]
  },
  "In Pret": {
    "s1": ["cumplí"],
    "s2": ["cumpliste"],
    "s3": ["cumplió"],
    "p1": ["cumplimos"],
    "p2": ["cumplisteis"],
    "p3": ["cumplieron"]
  },
  "In Cond": {
    "s1": ["cumpliría"],
    "s2": ["cumplirías"],
    "s3": ["cumpliría"],
    "p1": ["cumpliríamos"],
    "p2": ["cumpliríais"],
    "p3": ["cumplirían"]
  },
  "In Pres Per": {
    "s1": ["he cumplido"],
    "s2": ["has cumplido"],
    "s3": ["ha cumplido"],
    "p1": ["hemos cumplido"],
    "p2": ["habéis cumplido"],
    "p3": ["han cumplido"]
  },
  "In Fut Per": {
    "s1": ["habré cumplido"],
    "s2": ["habrás cumplido"],
    "s3": ["habrá cumplido"],
    "p1": ["habremos cumplido"],
    "p2": ["habréis cumplido"],
    "p3": ["habrán cumplido"]
  },
  "In Pas Per": {
    "s1": ["había cumplido"],
    "s2": ["habías cumplido"],
    "s3": ["había cumplido"],
    "p1": ["habíamos cumplido"],
    "p2": ["habíais cumplido"],
    "p3": ["habían cumplido"]
  },
  "In Cond Per": {
    "s1": ["habría cumplido"],
    "s2": ["habrías cumplido"],
    "s3": ["habría cumplido"],
    "p1": ["habríamos cumplido"],
    "p2": ["habríais cumplido"],
    "p3": ["habrían cumplido"]
  },
  "Sub Pres": {
    "s1": ["cumpla"],
    "s2": ["cumplas"],
    "s3": ["cumpla"],
    "p1": ["cumplamos"],
    "p2": ["cumpláis"],
    "p3": ["cumplan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["cumple"],
    "s3": ["cumplid"],
    "p1": [""],
    "p2": ["cumpla"],
    "p3": ["cumplan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no cumplas"],
    "s3": ["no cumpláis"],
    "p1": [""],
    "p2": ["no cumpla"],
    "p3": ["no cumplan"]
  },
  "In Pres Pro": {
    "s1": ["estoy cumpliendo"],
    "s2": ["estás cumpliendo"],
    "s3": ["está cumpliendo"],
    "p1": ["estamos cumpliendo"],
    "p2": ["estáis cumpliendo"],
    "p3": ["están cumpliendo"]
  }
}, {
  "inf": "dar",
  "inf_eng": "to give",
  "In Pres": {
    "s1": ["doy"],
    "s2": ["das"],
    "s3": ["da"],
    "p1": ["damos"],
    "p2": ["dais"],
    "p3": ["dan"]
  },
  "In Fut": {
    "s1": ["daré"],
    "s2": ["darás"],
    "s3": ["dará"],
    "p1": ["daremos"],
    "p2": ["daréis"],
    "p3": ["darán"]
  },
  "In Imp": {
    "s1": ["daba"],
    "s2": ["dabas"],
    "s3": ["daba"],
    "p1": ["dábamos"],
    "p2": ["dabais"],
    "p3": ["daban"]
  },
  "In Pret": {
    "s1": ["di"],
    "s2": ["diste"],
    "s3": ["dio"],
    "p1": ["dimos"],
    "p2": ["disteis"],
    "p3": ["dieron"]
  },
  "In Cond": {
    "s1": ["daría"],
    "s2": ["darías"],
    "s3": ["daría"],
    "p1": ["daríamos"],
    "p2": ["daríais"],
    "p3": ["darían"]
  },
  "In Pres Per": {
    "s1": ["he dado"],
    "s2": ["has dado"],
    "s3": ["ha dado"],
    "p1": ["hemos dado"],
    "p2": ["habéis dado"],
    "p3": ["han dado"]
  },
  "In Fut Per": {
    "s1": ["habré dado"],
    "s2": ["habrás dado"],
    "s3": ["habrá dado"],
    "p1": ["habremos dado"],
    "p2": ["habréis dado"],
    "p3": ["habrán dado"]
  },
  "In Pas Per": {
    "s1": ["había dado"],
    "s2": ["habías dado"],
    "s3": ["había dado"],
    "p1": ["habíamos dado"],
    "p2": ["habíais dado"],
    "p3": ["habían dado"]
  },
  "In Cond Per": {
    "s1": ["habría dado"],
    "s2": ["habrías dado"],
    "s3": ["habría dado"],
    "p1": ["habríamos dado"],
    "p2": ["habríais dado"],
    "p3": ["habrían dado"]
  },
  "Sub Pres": {
    "s1": ["dé"],
    "s2": ["des"],
    "s3": ["dé"],
    "p1": ["demos"],
    "p2": ["deis"],
    "p3": ["den"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["da"],
    "s3": ["dad"],
    "p1": [""],
    "p2": ["dé"],
    "p3": ["den"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no des"],
    "s3": ["no deis"],
    "p1": [""],
    "p2": ["no dé"],
    "p3": ["no den"]
  },
  "In Pres Pro": {
    "s1": ["estoy dando"],
    "s2": ["estás dando"],
    "s3": ["está dando"],
    "p1": ["estamos dando"],
    "p2": ["estáis dando"],
    "p3": ["están dando"]
  }
}, {
  "inf": "deber",
  "inf_eng": "to owe",
  "In Pres": {
    "s1": ["debo"],
    "s2": ["debes"],
    "s3": ["debe"],
    "p1": ["debemos"],
    "p2": ["debéis"],
    "p3": ["deben"]
  },
  "In Fut": {
    "s1": ["deberé"],
    "s2": ["deberás"],
    "s3": ["deberá"],
    "p1": ["deberemos"],
    "p2": ["deberéis"],
    "p3": ["deberán"]
  },
  "In Imp": {
    "s1": ["debía"],
    "s2": ["debías"],
    "s3": ["debía"],
    "p1": ["debíamos"],
    "p2": ["debíais"],
    "p3": ["debían"]
  },
  "In Pret": {
    "s1": ["debí"],
    "s2": ["debiste"],
    "s3": ["debió"],
    "p1": ["debimos"],
    "p2": ["debisteis"],
    "p3": ["debieron"]
  },
  "In Cond": {
    "s1": ["debería"],
    "s2": ["deberías"],
    "s3": ["debería"],
    "p1": ["deberíamos"],
    "p2": ["deberíais"],
    "p3": ["deberían"]
  },
  "In Pres Per": {
    "s1": ["he debido"],
    "s2": ["has debido"],
    "s3": ["ha debido"],
    "p1": ["hemos debido"],
    "p2": ["habéis debido"],
    "p3": ["han debido"]
  },
  "In Fut Per": {
    "s1": ["habré debido"],
    "s2": ["habrás debido"],
    "s3": ["habrá debido"],
    "p1": ["habremos debido"],
    "p2": ["habréis debido"],
    "p3": ["habrán debido"]
  },
  "In Pas Per": {
    "s1": ["había debido"],
    "s2": ["habías debido"],
    "s3": ["había debido"],
    "p1": ["habíamos debido"],
    "p2": ["habíais debido"],
    "p3": ["habían debido"]
  },
  "In Cond Per": {
    "s1": ["habría debido"],
    "s2": ["habrías debido"],
    "s3": ["habría debido"],
    "p1": ["habríamos debido"],
    "p2": ["habríais debido"],
    "p3": ["habrían debido"]
  },
  "Sub Pres": {
    "s1": ["deba"],
    "s2": ["debas"],
    "s3": ["deba"],
    "p1": ["debamos"],
    "p2": ["debáis"],
    "p3": ["deban"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["debe"],
    "s3": ["debed"],
    "p1": [""],
    "p2": ["deba"],
    "p3": ["deban"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no debas"],
    "s3": ["no debáis"],
    "p1": [""],
    "p2": ["no deba"],
    "p3": ["no deban"]
  },
  "In Pres Pro": {
    "s1": ["estoy debiendo"],
    "s2": ["estás debiendo"],
    "s3": ["está debiendo"],
    "p1": ["estamos debiendo"],
    "p2": ["estáis debiendo"],
    "p3": ["están debiendo"]
  }
}, {
  "inf": "decidir",
  "inf_eng": "to decide",
  "In Pres": {
    "s1": ["decido"],
    "s2": ["decides"],
    "s3": ["decide"],
    "p1": ["decidimos"],
    "p2": ["decidís"],
    "p3": ["deciden"]
  },
  "In Fut": {
    "s1": ["decidiré"],
    "s2": ["decidirás"],
    "s3": ["decidirá"],
    "p1": ["decidiremos"],
    "p2": ["decidiréis"],
    "p3": ["decidirán"]
  },
  "In Imp": {
    "s1": ["decidía"],
    "s2": ["decidías"],
    "s3": ["decidía"],
    "p1": ["decidíamos"],
    "p2": ["decidíais"],
    "p3": ["decidían"]
  },
  "In Pret": {
    "s1": ["decidí"],
    "s2": ["decidiste"],
    "s3": ["decidió"],
    "p1": ["decidimos"],
    "p2": ["decidisteis"],
    "p3": ["decidieron"]
  },
  "In Cond": {
    "s1": ["decidiría"],
    "s2": ["decidirías"],
    "s3": ["decidiría"],
    "p1": ["decidiríamos"],
    "p2": ["decidiríais"],
    "p3": ["decidirían"]
  },
  "In Pres Per": {
    "s1": ["he decidido"],
    "s2": ["has decidido"],
    "s3": ["ha decidido"],
    "p1": ["hemos decidido"],
    "p2": ["habéis decidido"],
    "p3": ["han decidido"]
  },
  "In Fut Per": {
    "s1": ["habré decidido"],
    "s2": ["habrás decidido"],
    "s3": ["habrá decidido"],
    "p1": ["habremos decidido"],
    "p2": ["habréis decidido"],
    "p3": ["habrán decidido"]
  },
  "In Pas Per": {
    "s1": ["había decidido"],
    "s2": ["habías decidido"],
    "s3": ["había decidido"],
    "p1": ["habíamos decidido"],
    "p2": ["habíais decidido"],
    "p3": ["habían decidido"]
  },
  "In Cond Per": {
    "s1": ["habría decidido"],
    "s2": ["habrías decidido"],
    "s3": ["habría decidido"],
    "p1": ["habríamos decidido"],
    "p2": ["habríais decidido"],
    "p3": ["habrían decidido"]
  },
  "Sub Pres": {
    "s1": ["decida"],
    "s2": ["decidas"],
    "s3": ["decida"],
    "p1": ["decidamos"],
    "p2": ["decidáis"],
    "p3": ["decidan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["decide"],
    "s3": ["decidid"],
    "p1": [""],
    "p2": ["decida"],
    "p3": ["decidan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no decidas"],
    "s3": ["no decidáis"],
    "p1": [""],
    "p2": ["no decida"],
    "p3": ["no decidan"]
  },
  "In Pres Pro": {
    "s1": ["estoy decidiendo"],
    "s2": ["estás decidiendo"],
    "s3": ["está decidiendo"],
    "p1": ["estamos decidiendo"],
    "p2": ["estáis decidiendo"],
    "p3": ["están decidiendo"]
  }
}, {
  "inf": "decir",
  "inf_eng": "to say",
  "In Pres": {
    "s1": ["digo"],
    "s2": ["dices"],
    "s3": ["dice"],
    "p1": ["decimos"],
    "p2": ["decís"],
    "p3": ["dicen"]
  },
  "In Fut": {
    "s1": ["diré"],
    "s2": ["dirás"],
    "s3": ["dirá"],
    "p1": ["diremos"],
    "p2": ["diréis"],
    "p3": ["dirán"]
  },
  "In Imp": {
    "s1": ["decía"],
    "s2": ["decías"],
    "s3": ["decía"],
    "p1": ["decíamos"],
    "p2": ["decíais"],
    "p3": ["decían"]
  },
  "In Pret": {
    "s1": ["dije"],
    "s2": ["dijiste"],
    "s3": ["dijo"],
    "p1": ["dijimos"],
    "p2": ["dijisteis"],
    "p3": ["dijeron"]
  },
  "In Cond": {
    "s1": ["diría"],
    "s2": ["dirías"],
    "s3": ["diría"],
    "p1": ["diríamos"],
    "p2": ["diríais"],
    "p3": ["dirían"]
  },
  "In Pres Per": {
    "s1": ["he dicho"],
    "s2": ["has dicho"],
    "s3": ["ha dicho"],
    "p1": ["hemos dicho"],
    "p2": ["habéis dicho"],
    "p3": ["han dicho"]
  },
  "In Fut Per": {
    "s1": ["habré dicho"],
    "s2": ["habrás dicho"],
    "s3": ["habrá dicho"],
    "p1": ["habremos dicho"],
    "p2": ["habréis dicho"],
    "p3": ["habrán dicho"]
  },
  "In Pas Per": {
    "s1": ["había dicho"],
    "s2": ["habías dicho"],
    "s3": ["había dicho"],
    "p1": ["habíamos dicho"],
    "p2": ["habíais dicho"],
    "p3": ["habían dicho"]
  },
  "In Cond Per": {
    "s1": ["habría dicho"],
    "s2": ["habrías dicho"],
    "s3": ["habría dicho"],
    "p1": ["habríamos dicho"],
    "p2": ["habríais dicho"],
    "p3": ["habrían dicho"]
  },
  "Sub Pres": {
    "s1": ["diga"],
    "s2": ["digas"],
    "s3": ["diga"],
    "p1": ["digamos"],
    "p2": ["digáis"],
    "p3": ["digan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["di"],
    "s3": ["decid"],
    "p1": [""],
    "p2": ["diga"],
    "p3": ["digan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no digas"],
    "s3": ["no digáis"],
    "p1": [""],
    "p2": ["no diga"],
    "p3": ["no digan"]
  },
  "In Pres Pro": {
    "s1": ["estoy diciendo"],
    "s2": ["estás diciendo"],
    "s3": ["está diciendo"],
    "p1": ["estamos diciendo"],
    "p2": ["estáis diciendo"],
    "p3": ["están diciendo"]
  }
}, {
  "inf": "defender",
  "inf_eng": "to defend",
  "In Pres": {
    "s1": ["defiendo"],
    "s2": ["defiendes"],
    "s3": ["defiende"],
    "p1": ["defendemos"],
    "p2": ["defendéis"],
    "p3": ["defienden"]
  },
  "In Fut": {
    "s1": ["defenderé"],
    "s2": ["defenderás"],
    "s3": ["defenderá"],
    "p1": ["defenderemos"],
    "p2": ["defenderéis"],
    "p3": ["defenderán"]
  },
  "In Imp": {
    "s1": ["defendía"],
    "s2": ["defendías"],
    "s3": ["defendía"],
    "p1": ["defendíamos"],
    "p2": ["defendíais"],
    "p3": ["defendían"]
  },
  "In Pret": {
    "s1": ["defendí"],
    "s2": ["defendiste"],
    "s3": ["defendió"],
    "p1": ["defendimos"],
    "p2": ["defendisteis"],
    "p3": ["defendieron"]
  },
  "In Cond": {
    "s1": ["defendería"],
    "s2": ["defenderías"],
    "s3": ["defendería"],
    "p1": ["defenderíamos"],
    "p2": ["defenderíais"],
    "p3": ["defenderían"]
  },
  "In Pres Per": {
    "s1": ["he defendido"],
    "s2": ["has defendido"],
    "s3": ["ha defendido"],
    "p1": ["hemos defendido"],
    "p2": ["habéis defendido"],
    "p3": ["han defendido"]
  },
  "In Fut Per": {
    "s1": ["habré defendido"],
    "s2": ["habrás defendido"],
    "s3": ["habrá defendido"],
    "p1": ["habremos defendido"],
    "p2": ["habréis defendido"],
    "p3": ["habrán defendido"]
  },
  "In Pas Per": {
    "s1": ["había defendido"],
    "s2": ["habías defendido"],
    "s3": ["había defendido"],
    "p1": ["habíamos defendido"],
    "p2": ["habíais defendido"],
    "p3": ["habían defendido"]
  },
  "In Cond Per": {
    "s1": ["habría defendido"],
    "s2": ["habrías defendido"],
    "s3": ["habría defendido"],
    "p1": ["habríamos defendido"],
    "p2": ["habríais defendido"],
    "p3": ["habrían defendido"]
  },
  "Sub Pres": {
    "s1": ["defienda"],
    "s2": ["defiendas"],
    "s3": ["defienda"],
    "p1": ["defendamos"],
    "p2": ["defendáis"],
    "p3": ["defiendan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["defiende"],
    "s3": ["defended"],
    "p1": [""],
    "p2": ["defienda"],
    "p3": ["defiendan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no defiendas"],
    "s3": ["no defendáis"],
    "p1": [""],
    "p2": ["no defienda"],
    "p3": ["no defiendan"]
  },
  "In Pres Pro": {
    "s1": ["estoy defendiendo"],
    "s2": ["estás defendiendo"],
    "s3": ["está defendiendo"],
    "p1": ["estamos defendiendo"],
    "p2": ["estáis defendiendo"],
    "p3": ["están defendiendo"]
  }
}, {
  "inf": "dejar",
  "inf_eng": "to leave",
  "In Pres": {
    "s1": ["dejo"],
    "s2": ["dejas"],
    "s3": ["deja"],
    "p1": ["dejamos"],
    "p2": ["dejáis"],
    "p3": ["dejan"]
  },
  "In Fut": {
    "s1": ["dejaré"],
    "s2": ["dejarás"],
    "s3": ["dejará"],
    "p1": ["dejaremos"],
    "p2": ["dejaréis"],
    "p3": ["dejarán"]
  },
  "In Imp": {
    "s1": ["dejaba"],
    "s2": ["dejabas"],
    "s3": ["dejaba"],
    "p1": ["dejábamos"],
    "p2": ["dejabais"],
    "p3": ["dejaban"]
  },
  "In Pret": {
    "s1": ["dejé"],
    "s2": ["dejaste"],
    "s3": ["dejó"],
    "p1": ["dejamos"],
    "p2": ["dejasteis"],
    "p3": ["dejaron"]
  },
  "In Cond": {
    "s1": ["dejaría"],
    "s2": ["dejarías"],
    "s3": ["dejaría"],
    "p1": ["dejaríamos"],
    "p2": ["dejaríais"],
    "p3": ["dejarían"]
  },
  "In Pres Per": {
    "s1": ["he dejado"],
    "s2": ["has dejado"],
    "s3": ["ha dejado"],
    "p1": ["hemos dejado"],
    "p2": ["habéis dejado"],
    "p3": ["han dejado"]
  },
  "In Fut Per": {
    "s1": ["habré dejado"],
    "s2": ["habrás dejado"],
    "s3": ["habrá dejado"],
    "p1": ["habremos dejado"],
    "p2": ["habréis dejado"],
    "p3": ["habrán dejado"]
  },
  "In Pas Per": {
    "s1": ["había dejado"],
    "s2": ["habías dejado"],
    "s3": ["había dejado"],
    "p1": ["habíamos dejado"],
    "p2": ["habíais dejado"],
    "p3": ["habían dejado"]
  },
  "In Cond Per": {
    "s1": ["habría dejado"],
    "s2": ["habrías dejado"],
    "s3": ["habría dejado"],
    "p1": ["habríamos dejado"],
    "p2": ["habríais dejado"],
    "p3": ["habrían dejado"]
  },
  "Sub Pres": {
    "s1": ["deje"],
    "s2": ["dejes"],
    "s3": ["deje"],
    "p1": ["dejemos"],
    "p2": ["dejéis"],
    "p3": ["dejen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["deja"],
    "s3": ["dejad"],
    "p1": [""],
    "p2": ["deje"],
    "p3": ["dejen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no dejes"],
    "s3": ["no dejéis"],
    "p1": [""],
    "p2": ["no deje"],
    "p3": ["no dejen"]
  },
  "In Pres Pro": {
    "s1": ["estoy dejando"],
    "s2": ["estás dejando"],
    "s3": ["está dejando"],
    "p1": ["estamos dejando"],
    "p2": ["estáis dejando"],
    "p3": ["están dejando"]
  }
}, {
  "inf": "demostrar",
  "inf_eng": "to demonstrate",
  "In Pres": {
    "s1": ["demuestro"],
    "s2": ["demuestras"],
    "s3": ["demuestra"],
    "p1": ["demostramos"],
    "p2": ["demostráis"],
    "p3": ["demuestran"]
  },
  "In Fut": {
    "s1": ["demostraré"],
    "s2": ["demostrarás"],
    "s3": ["demostrará"],
    "p1": ["demostraremos"],
    "p2": ["demostraréis"],
    "p3": ["demostrarán"]
  },
  "In Imp": {
    "s1": ["demostraba"],
    "s2": ["demostrabas"],
    "s3": ["demostraba"],
    "p1": ["demostrábamos"],
    "p2": ["demostrabais"],
    "p3": ["demostraban"]
  },
  "In Pret": {
    "s1": ["demostré"],
    "s2": ["demostraste"],
    "s3": ["demostró"],
    "p1": ["demostramos"],
    "p2": ["demostrasteis"],
    "p3": ["demostraron"]
  },
  "In Cond": {
    "s1": ["demostraría"],
    "s2": ["demostrarías"],
    "s3": ["demostraría"],
    "p1": ["demostraríamos"],
    "p2": ["demostraríais"],
    "p3": ["demostrarían"]
  },
  "In Pres Per": {
    "s1": ["he demostrado"],
    "s2": ["has demostrado"],
    "s3": ["ha demostrado"],
    "p1": ["hemos demostrado"],
    "p2": ["habéis demostrado"],
    "p3": ["han demostrado"]
  },
  "In Fut Per": {
    "s1": ["habré demostrado"],
    "s2": ["habrás demostrado"],
    "s3": ["habrá demostrado"],
    "p1": ["habremos demostrado"],
    "p2": ["habréis demostrado"],
    "p3": ["habrán demostrado"]
  },
  "In Pas Per": {
    "s1": ["había demostrado"],
    "s2": ["habías demostrado"],
    "s3": ["había demostrado"],
    "p1": ["habíamos demostrado"],
    "p2": ["habíais demostrado"],
    "p3": ["habían demostrado"]
  },
  "In Cond Per": {
    "s1": ["habría demostrado"],
    "s2": ["habrías demostrado"],
    "s3": ["habría demostrado"],
    "p1": ["habríamos demostrado"],
    "p2": ["habríais demostrado"],
    "p3": ["habrían demostrado"]
  },
  "Sub Pres": {
    "s1": ["demuestre"],
    "s2": ["demuestres"],
    "s3": ["demuestre"],
    "p1": ["demostremos"],
    "p2": ["demostréis"],
    "p3": ["demuestren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["demuestra"],
    "s3": ["demostrad"],
    "p1": [""],
    "p2": ["demuestre"],
    "p3": ["demuestren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no demuestres"],
    "s3": ["no demostréis"],
    "p1": [""],
    "p2": ["no demuestre"],
    "p3": ["no demuestren"]
  },
  "In Pres Pro": {
    "s1": ["estoy demostrando"],
    "s2": ["estás demostrando"],
    "s3": ["está demostrando"],
    "p1": ["estamos demostrando"],
    "p2": ["estáis demostrando"],
    "p3": ["están demostrando"]
  }
}, {
  "inf": "derretir",
  "inf_eng": "to melt",
  "In Pres": {
    "s1": ["derrito"],
    "s2": ["derrites"],
    "s3": ["derrite"],
    "p1": ["derretimos"],
    "p2": ["derretís"],
    "p3": ["derriten"]
  },
  "In Fut": {
    "s1": ["derretiré"],
    "s2": ["derretirás"],
    "s3": ["derretirá"],
    "p1": ["derretiremos"],
    "p2": ["derretiréis"],
    "p3": ["derretirán"]
  },
  "In Imp": {
    "s1": ["derretía"],
    "s2": ["derretías"],
    "s3": ["derretía"],
    "p1": ["derretíamos"],
    "p2": ["derretíais"],
    "p3": ["derretían"]
  },
  "In Pret": {
    "s1": ["derretí"],
    "s2": ["derretiste"],
    "s3": ["derritió"],
    "p1": ["derretimos"],
    "p2": ["derretisteis"],
    "p3": ["derritieron"]
  },
  "In Cond": {
    "s1": ["derretiría"],
    "s2": ["derretirías"],
    "s3": ["derretiría"],
    "p1": ["derretiríamos"],
    "p2": ["derretiríais"],
    "p3": ["derretirían"]
  },
  "In Pres Per": {
    "s1": ["he derretido"],
    "s2": ["has derretido"],
    "s3": ["ha derretido"],
    "p1": ["hemos derretido"],
    "p2": ["habéis derretido"],
    "p3": ["han derretido"]
  },
  "In Fut Per": {
    "s1": ["habré derretido"],
    "s2": ["habrás derretido"],
    "s3": ["habrá derretido"],
    "p1": ["habremos derretido"],
    "p2": ["habréis derretido"],
    "p3": ["habrán derretido"]
  },
  "In Pas Per": {
    "s1": ["había derretido"],
    "s2": ["habías derretido"],
    "s3": ["había derretido"],
    "p1": ["habíamos derretido"],
    "p2": ["habíais derretido"],
    "p3": ["habían derretido"]
  },
  "In Cond Per": {
    "s1": ["habría derretido"],
    "s2": ["habrías derretido"],
    "s3": ["habría derretido"],
    "p1": ["habríamos derretido"],
    "p2": ["habríais derretido"],
    "p3": ["habrían derretido"]
  },
  "Sub Pres": {
    "s1": ["derrita"],
    "s2": ["derritas"],
    "s3": ["derrita"],
    "p1": ["derritamos"],
    "p2": ["derritáis"],
    "p3": ["derritan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["derrite"],
    "s3": ["derretid"],
    "p1": [""],
    "p2": ["derrita"],
    "p3": ["derritan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no derritas"],
    "s3": ["no derritáis"],
    "p1": [""],
    "p2": ["no derrita"],
    "p3": ["no derritan"]
  },
  "In Pres Pro": {
    "s1": ["estoy derritiendo"],
    "s2": ["estás derritiendo"],
    "s3": ["está derritiendo"],
    "p1": ["estamos derritiendo"],
    "p2": ["estáis derritiendo"],
    "p3": ["están derritiendo"]
  }
}, {
  "inf": "descansar",
  "inf_eng": "to rest",
  "In Pres": {
    "s1": ["descanso"],
    "s2": ["descansas"],
    "s3": ["descansa"],
    "p1": ["descansamos"],
    "p2": ["descansáis"],
    "p3": ["descansan"]
  },
  "In Fut": {
    "s1": ["descansaré"],
    "s2": ["descansarás"],
    "s3": ["descansará"],
    "p1": ["descansaremos"],
    "p2": ["descansaréis"],
    "p3": ["descansarán"]
  },
  "In Imp": {
    "s1": ["descansaba"],
    "s2": ["descansabas"],
    "s3": ["descansaba"],
    "p1": ["descansábamos"],
    "p2": ["descansabais"],
    "p3": ["descansaban"]
  },
  "In Pret": {
    "s1": ["descansé"],
    "s2": ["descansaste"],
    "s3": ["descansó"],
    "p1": ["descansamos"],
    "p2": ["descansasteis"],
    "p3": ["descansaron"]
  },
  "In Cond": {
    "s1": ["descansaría"],
    "s2": ["descansarías"],
    "s3": ["descansaría"],
    "p1": ["descansaríamos"],
    "p2": ["descansaríais"],
    "p3": ["descansarían"]
  },
  "In Pres Per": {
    "s1": ["he descansado"],
    "s2": ["has descansado"],
    "s3": ["ha descansado"],
    "p1": ["hemos descansado"],
    "p2": ["habéis descansado"],
    "p3": ["han descansado"]
  },
  "In Fut Per": {
    "s1": ["habré descansado"],
    "s2": ["habrás descansado"],
    "s3": ["habrá descansado"],
    "p1": ["habremos descansado"],
    "p2": ["habréis descansado"],
    "p3": ["habrán descansado"]
  },
  "In Pas Per": {
    "s1": ["había descansado"],
    "s2": ["habías descansado"],
    "s3": ["había descansado"],
    "p1": ["habíamos descansado"],
    "p2": ["habíais descansado"],
    "p3": ["habían descansado"]
  },
  "In Cond Per": {
    "s1": ["habría descansado"],
    "s2": ["habrías descansado"],
    "s3": ["habría descansado"],
    "p1": ["habríamos descansado"],
    "p2": ["habríais descansado"],
    "p3": ["habrían descansado"]
  },
  "Sub Pres": {
    "s1": ["descanse"],
    "s2": ["descanses"],
    "s3": ["descanse"],
    "p1": ["descansemos"],
    "p2": ["descanséis"],
    "p3": ["descansen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["descansa"],
    "s3": ["descansad"],
    "p1": [""],
    "p2": ["descanse"],
    "p3": ["descansen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no descanses"],
    "s3": ["no descanséis"],
    "p1": [""],
    "p2": ["no descanse"],
    "p3": ["no descansen"]
  },
  "In Pres Pro": {
    "s1": ["estoy descansando"],
    "s2": ["estás descansando"],
    "s3": ["está descansando"],
    "p1": ["estamos descansando"],
    "p2": ["estáis descansando"],
    "p3": ["están descansando"]
  }
}, {
  "inf": "doler",
  "inf_eng": "to hurt",
  "Sub Pres": {
    "s1": [""],
    "s2": [""],
    "s3": ["duela"],
    "p1": [""],
    "p2": [""],
    "p3": ["duelan"]
  },
  "In Pres": {
    "s1": [""],
    "s2": [""],
    "s3": ["duele"],
    "p1": [""],
    "p2": [""],
    "p3": ["duelen"]
  },
  "In Fut": {
    "s1": [""],
    "s2": [""],
    "s3": ["dolerá"],
    "p1": [""],
    "p2": [""],
    "p3": ["dolerán"]
  },
  "In Imp": {
    "s1": [""],
    "s2": [""],
    "s3": ["dolía"],
    "p1": [""],
    "p2": [""],
    "p3": ["dolían"]
  },
  "In Pret": {
    "s1": [""],
    "s2": [""],
    "s3": ["dolió"],
    "p1": [""],
    "p2": [""],
    "p3": ["dolieron"]
  },
  "In Cond": {
    "s1": [""],
    "s2": [""],
    "s3": ["dolería"],
    "p1": [""],
    "p2": [""],
    "p3": ["dolerían"]
  },
  "In Pres Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["ha dolido"],
    "p1": [""],
    "p2": [""],
    "p3": ["han dolido"]
  },
  "In Fut Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["habrá dolido"],
    "p1": [""],
    "p2": [""],
    "p3": ["habrán dolido"]
  },
  "In Pas Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["había dolido"],
    "p1": [""],
    "p2": [""],
    "p3": ["habían dolido"]
  },
  "In Cond Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["habría dolido"],
    "p1": [""],
    "p2": [""],
    "p3": ["habrían dolido"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["duele"],
    "s3": ["doled"],
    "p1": [""],
    "p2": ["duela"],
    "p3": ["duelan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no duelas"],
    "s3": ["no doláis"],
    "p1": [""],
    "p2": ["no duela"],
    "p3": ["no duelan"]
  },
  "In Pres Pro": {
    "s1": ["estoy doliendo"],
    "s2": ["estás doliendo"],
    "s3": ["está doliendo"],
    "p1": ["estamos doliendo"],
    "p2": ["estáis doliendo"],
    "p3": ["están doliendo"]
  }
}, {
  "inf": "descubrir",
  "inf_eng": "to discover",
  "In Pres": {
    "s1": ["descubro"],
    "s2": ["descubres"],
    "s3": ["descubre"],
    "p1": ["descubrimos"],
    "p2": ["descubrís"],
    "p3": ["descubren"]
  },
  "In Fut": {
    "s1": ["descubriré"],
    "s2": ["descubrirás"],
    "s3": ["descubrirá"],
    "p1": ["descubriremos"],
    "p2": ["descubriréis"],
    "p3": ["descubrirán"]
  },
  "In Imp": {
    "s1": ["descubría"],
    "s2": ["descubrías"],
    "s3": ["descubría"],
    "p1": ["descubríamos"],
    "p2": ["descubríais"],
    "p3": ["descubrían"]
  },
  "In Pret": {
    "s1": ["descubrí"],
    "s2": ["descubriste"],
    "s3": ["descubrió"],
    "p1": ["descubrimos"],
    "p2": ["descubristeis"],
    "p3": ["descubrieron"]
  },
  "In Cond": {
    "s1": ["descubriría"],
    "s2": ["descubrirías"],
    "s3": ["descubriría"],
    "p1": ["descubriríamos"],
    "p2": ["descubriríais"],
    "p3": ["descubrirían"]
  },
  "In Pres Per": {
    "s1": ["he descubierto"],
    "s2": ["has descubierto"],
    "s3": ["ha descubierto"],
    "p1": ["hemos descubierto"],
    "p2": ["habéis descubierto"],
    "p3": ["han descubierto"]
  },
  "In Fut Per": {
    "s1": ["habré descubierto"],
    "s2": ["habrás descubierto"],
    "s3": ["habrá descubierto"],
    "p1": ["habremos descubierto"],
    "p2": ["habréis descubierto"],
    "p3": ["habrán descubierto"]
  },
  "In Pas Per": {
    "s1": ["había descubierto"],
    "s2": ["habías descubierto"],
    "s3": ["había descubierto"],
    "p1": ["habíamos descubierto"],
    "p2": ["habíais descubierto"],
    "p3": ["habían descubierto"]
  },
  "In Cond Per": {
    "s1": ["habría descubierto"],
    "s2": ["habrías descubierto"],
    "s3": ["habría descubierto"],
    "p1": ["habríamos descubierto"],
    "p2": ["habríais descubierto"],
    "p3": ["habrían descubierto"]
  },
  "Sub Pres": {
    "s1": ["descubra"],
    "s2": ["descubras"],
    "s3": ["descubra"],
    "p1": ["descubramos"],
    "p2": ["descubráis"],
    "p3": ["descubran"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["descubre"],
    "s3": ["descubrid"],
    "p1": [""],
    "p2": ["descubra"],
    "p3": ["descubran"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no descubras"],
    "s3": ["no descubráis"],
    "p1": [""],
    "p2": ["no descubra"],
    "p3": ["no descubran"]
  },
  "In Pres Pro": {
    "s1": ["estoy descubriendo"],
    "s2": ["estás descubriendo"],
    "s3": ["está descubriendo"],
    "p1": ["estamos descubriendo"],
    "p2": ["estáis descubriendo"],
    "p3": ["están descubriendo"]
  }
}, {
  "inf": "desear",
  "inf_eng": "to desire",
  "In Pres": {
    "s1": ["deseo"],
    "s2": ["deseas"],
    "s3": ["desea"],
    "p1": ["deseamos"],
    "p2": ["deseáis"],
    "p3": ["desean"]
  },
  "In Fut": {
    "s1": ["desearé"],
    "s2": ["desearás"],
    "s3": ["deseará"],
    "p1": ["desearemos"],
    "p2": ["desearéis"],
    "p3": ["desearán"]
  },
  "In Imp": {
    "s1": ["deseaba"],
    "s2": ["deseabas"],
    "s3": ["deseaba"],
    "p1": ["deseábamos"],
    "p2": ["deseabais"],
    "p3": ["deseaban"]
  },
  "In Pret": {
    "s1": ["deseé"],
    "s2": ["deseaste"],
    "s3": ["deseó"],
    "p1": ["deseamos"],
    "p2": ["deseasteis"],
    "p3": ["desearon"]
  },
  "In Cond": {
    "s1": ["desearía"],
    "s2": ["desearías"],
    "s3": ["desearía"],
    "p1": ["desearíamos"],
    "p2": ["desearíais"],
    "p3": ["desearían"]
  },
  "In Pres Per": {
    "s1": ["he deseado"],
    "s2": ["has deseado"],
    "s3": ["ha deseado"],
    "p1": ["hemos deseado"],
    "p2": ["habéis deseado"],
    "p3": ["han deseado"]
  },
  "In Fut Per": {
    "s1": ["habré deseado"],
    "s2": ["habrás deseado"],
    "s3": ["habrá deseado"],
    "p1": ["habremos deseado"],
    "p2": ["habréis deseado"],
    "p3": ["habrán deseado"]
  },
  "In Pas Per": {
    "s1": ["había deseado"],
    "s2": ["habías deseado"],
    "s3": ["había deseado"],
    "p1": ["habíamos deseado"],
    "p2": ["habíais deseado"],
    "p3": ["habían deseado"]
  },
  "In Cond Per": {
    "s1": ["habría deseado"],
    "s2": ["habrías deseado"],
    "s3": ["habría deseado"],
    "p1": ["habríamos deseado"],
    "p2": ["habríais deseado"],
    "p3": ["habrían deseado"]
  },
  "Sub Pres": {
    "s1": ["desee"],
    "s2": ["desees"],
    "s3": ["desee"],
    "p1": ["deseemos"],
    "p2": ["deseéis"],
    "p3": ["deseen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["desea"],
    "s3": ["desead"],
    "p1": [""],
    "p2": ["desee"],
    "p3": ["deseen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no desees"],
    "s3": ["no deseéis"],
    "p1": [""],
    "p2": ["no desee"],
    "p3": ["no deseen"]
  },
  "In Pres Pro": {
    "s1": ["estoy deseando"],
    "s2": ["estás deseando"],
    "s3": ["está deseando"],
    "p1": ["estamos deseando"],
    "p2": ["estáis deseando"],
    "p3": ["están deseando"]
  }
}, {
  "inf": "despertarse",
  "inf_eng": "to wake up",
  "In Pres": {
    "s1": ["me despierto"],
    "s2": ["te despiertas"],
    "s3": ["se despierta"],
    "p1": ["nos despertamos"],
    "p2": ["os despertáis"],
    "p3": ["se despiertan"]
  },
  "In Fut": {
    "s1": ["me despertaré"],
    "s2": ["te despertarás"],
    "s3": ["se despertará"],
    "p1": ["nos despertaremos"],
    "p2": ["os despertaréis"],
    "p3": ["se despertarán"]
  },
  "In Imp": {
    "s1": ["me despertaba"],
    "s2": ["te despertabas"],
    "s3": ["se despertaba"],
    "p1": ["nos despertábamos"],
    "p2": ["os despertabais"],
    "p3": ["se despertaban"]
  },
  "In Pret": {
    "s1": ["me desperté"],
    "s2": ["te despertaste"],
    "s3": ["se despertó"],
    "p1": ["nos despertamos"],
    "p2": ["os despertasteis"],
    "p3": ["se despertaron"]
  },
  "In Cond": {
    "s1": ["me despertaría"],
    "s2": ["te despertarías"],
    "s3": ["se despertaría"],
    "p1": ["nos despertaríamos"],
    "p2": ["os despertaríais"],
    "p3": ["se despertarían"]
  },
  "In Pres Per": {
    "s1": ["me he despertado"],
    "s2": ["te has despertado"],
    "s3": ["se ha despertado"],
    "p1": ["nos hemos despertado"],
    "p2": ["os habéis despertado"],
    "p3": ["se han despertado"]
  },
  "In Fut Per": {
    "s1": ["me habré despertado"],
    "s2": ["te habrás despertado"],
    "s3": ["se habrá despertado"],
    "p1": ["nos habremos despertado"],
    "p2": ["os habréis despertado"],
    "p3": ["se habrán despertado"]
  },
  "In Pas Per": {
    "s1": ["me había despertado"],
    "s2": ["te habías despertado"],
    "s3": ["se había despertado"],
    "p1": ["nos habíamos despertado"],
    "p2": ["os habíais despertado"],
    "p3": ["se habían despertado"]
  },
  "In Cond Per": {
    "s1": ["me habría despertado"],
    "s2": ["te habrías despertado"],
    "s3": ["se habría despertado"],
    "p1": ["nos habríamos despertado"],
    "p2": ["os habríais despertado"],
    "p3": ["se habrían despertado"]
  },
  "Sub Pres": {
    "s1": ["me despierte"],
    "s2": ["te despiertes"],
    "s3": ["se despierte"],
    "p1": ["nos despertemos"],
    "p2": ["os despertéis"],
    "p3": ["se despierten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["despiértate"],
    "s3": ["despertaos"],
    "p1": [""],
    "p2": ["despiértese"],
    "p3": ["despiértense"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no te despiertes"],
    "s3": ["no os despertéis"],
    "p1": [""],
    "p2": ["no se despierte"],
    "p3": ["no se despierten"]
  },
  "In Pres Pro": {
    "s1": ["me estoy despertándo", "estoy despertándome"],
    "s2": ["te estás despertándo", "estás despertándote"],
    "s3": ["se está despertándo", "está despertándose"],
    "p1": ["nos estamos despertándo", "estamos despertándonos"],
    "p2": ["os estáis despertándo", "estáis despertándoos"],
    "p3": ["se están despertándo", "están despertándose"]
  }
}, {
  "inf": "detener",
  "inf_eng": "to stop",
  "In Pres": {
    "s1": ["detengo"],
    "s2": ["detienes"],
    "s3": ["detiene"],
    "p1": ["detenemos"],
    "p2": ["detenéis"],
    "p3": ["detienen"]
  },
  "In Fut": {
    "s1": ["detendré"],
    "s2": ["detendrás"],
    "s3": ["detendrá"],
    "p1": ["detendremos"],
    "p2": ["detendréis"],
    "p3": ["detendrán"]
  },
  "In Imp": {
    "s1": ["detenía"],
    "s2": ["detenías"],
    "s3": ["detenía"],
    "p1": ["deteníamos"],
    "p2": ["deteníais"],
    "p3": ["detenían"]
  },
  "In Pret": {
    "s1": ["detuve"],
    "s2": ["detuviste"],
    "s3": ["detuvo"],
    "p1": ["detuvimos"],
    "p2": ["detuvisteis"],
    "p3": ["detuvieron"]
  },
  "In Cond": {
    "s1": ["detendría"],
    "s2": ["detendrías"],
    "s3": ["detendría"],
    "p1": ["detendríamos"],
    "p2": ["detendríais"],
    "p3": ["detendrían"]
  },
  "In Pres Per": {
    "s1": ["he detenido"],
    "s2": ["has detenido"],
    "s3": ["ha detenido"],
    "p1": ["hemos detenido"],
    "p2": ["habéis detenido"],
    "p3": ["han detenido"]
  },
  "In Fut Per": {
    "s1": ["habré detenido"],
    "s2": ["habrás detenido"],
    "s3": ["habrá detenido"],
    "p1": ["habremos detenido"],
    "p2": ["habréis detenido"],
    "p3": ["habrán detenido"]
  },
  "In Pas Per": {
    "s1": ["había detenido"],
    "s2": ["habías detenido"],
    "s3": ["había detenido"],
    "p1": ["habíamos detenido"],
    "p2": ["habíais detenido"],
    "p3": ["habían detenido"]
  },
  "In Cond Per": {
    "s1": ["habría detenido"],
    "s2": ["habrías detenido"],
    "s3": ["habría detenido"],
    "p1": ["habríamos detenido"],
    "p2": ["habríais detenido"],
    "p3": ["habrían detenido"]
  },
  "Sub Pres": {
    "s1": ["detenga"],
    "s2": ["detengas"],
    "s3": ["detenga"],
    "p1": ["detengamos"],
    "p2": ["detengáis"],
    "p3": ["detengan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["detén"],
    "s3": ["detened"],
    "p1": [""],
    "p2": ["detenga"],
    "p3": ["detengan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no detengas"],
    "s3": ["no detengáis"],
    "p1": [""],
    "p2": ["no detenga"],
    "p3": ["no detengan"]
  },
  "In Pres Pro": {
    "s1": ["estoy deteniendo"],
    "s2": ["estás deteniendo"],
    "s3": ["está deteniendo"],
    "p1": ["estamos deteniendo"],
    "p2": ["estáis deteniendo"],
    "p3": ["están deteniendo"]
  }
}, {
  "inf": "dibujar",
  "inf_eng": "to draw",
  "In Pres": {
    "s1": ["dibujo"],
    "s2": ["dibujas"],
    "s3": ["dibuja"],
    "p1": ["dibujamos"],
    "p2": ["dibujáis"],
    "p3": ["dibujan"]
  },
  "In Fut": {
    "s1": ["dibujaré"],
    "s2": ["dibujarás"],
    "s3": ["dibujará"],
    "p1": ["dibujaremos"],
    "p2": ["dibujaréis"],
    "p3": ["dibujarán"]
  },
  "In Imp": {
    "s1": ["dibujaba"],
    "s2": ["dibujabas"],
    "s3": ["dibujaba"],
    "p1": ["dibujábamos"],
    "p2": ["dibujabais"],
    "p3": ["dibujaban"]
  },
  "In Pret": {
    "s1": ["dibujé"],
    "s2": ["dibujaste"],
    "s3": ["dibujó"],
    "p1": ["dibujamos"],
    "p2": ["dibujasteis"],
    "p3": ["dibujaron"]
  },
  "In Cond": {
    "s1": ["dibujaría"],
    "s2": ["dibujarías"],
    "s3": ["dibujaría"],
    "p1": ["dibujaríamos"],
    "p2": ["dibujaríais"],
    "p3": ["dibujarían"]
  },
  "In Pres Per": {
    "s1": ["he dibujado"],
    "s2": ["has dibujado"],
    "s3": ["ha dibujado"],
    "p1": ["hemos dibujado"],
    "p2": ["habéis dibujado"],
    "p3": ["han dibujado"]
  },
  "In Fut Per": {
    "s1": ["habré dibujado"],
    "s2": ["habrás dibujado"],
    "s3": ["habrá dibujado"],
    "p1": ["habremos dibujado"],
    "p2": ["habréis dibujado"],
    "p3": ["habrán dibujado"]
  },
  "In Pas Per": {
    "s1": ["había dibujado"],
    "s2": ["habías dibujado"],
    "s3": ["había dibujado"],
    "p1": ["habíamos dibujado"],
    "p2": ["habíais dibujado"],
    "p3": ["habían dibujado"]
  },
  "In Cond Per": {
    "s1": ["habría dibujado"],
    "s2": ["habrías dibujado"],
    "s3": ["habría dibujado"],
    "p1": ["habríamos dibujado"],
    "p2": ["habríais dibujado"],
    "p3": ["habrían dibujado"]
  },
  "Sub Pres": {
    "s1": ["dibuje"],
    "s2": ["dibujes"],
    "s3": ["dibuje"],
    "p1": ["dibujemos"],
    "p2": ["dibujéis"],
    "p3": ["dibujen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["dibuja"],
    "s3": ["dibujad"],
    "p1": [""],
    "p2": ["dibuje"],
    "p3": ["dibujen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no dibujes"],
    "s3": ["no dibujéis"],
    "p1": [""],
    "p2": ["no dibuje"],
    "p3": ["no dibujen"]
  },
  "In Pres Pro": {
    "s1": ["estoy dibujando"],
    "s2": ["estás dibujando"],
    "s3": ["está dibujando"],
    "p1": ["estamos dibujando"],
    "p2": ["estáis dibujando"],
    "p3": ["están dibujando"]
  }
}, {
  "inf": "dirigir",
  "inf_eng": "to direct",
  "In Pres": {
    "s1": ["dirijo"],
    "s2": ["diriges"],
    "s3": ["dirige"],
    "p1": ["dirigimos"],
    "p2": ["dirigís"],
    "p3": ["dirigen"]
  },
  "In Fut": {
    "s1": ["dirigiré"],
    "s2": ["dirigirás"],
    "s3": ["dirigirá"],
    "p1": ["dirigiremos"],
    "p2": ["dirigiréis"],
    "p3": ["dirigirán"]
  },
  "In Imp": {
    "s1": ["dirigía"],
    "s2": ["dirigías"],
    "s3": ["dirigía"],
    "p1": ["dirigíamos"],
    "p2": ["dirigíais"],
    "p3": ["dirigían"]
  },
  "In Pret": {
    "s1": ["dirigí"],
    "s2": ["dirigiste"],
    "s3": ["dirigió"],
    "p1": ["dirigimos"],
    "p2": ["dirigisteis"],
    "p3": ["dirigieron"]
  },
  "In Cond": {
    "s1": ["dirigiría"],
    "s2": ["dirigirías"],
    "s3": ["dirigiría"],
    "p1": ["dirigiríamos"],
    "p2": ["dirigiríais"],
    "p3": ["dirigirían"]
  },
  "In Pres Per": {
    "s1": ["he dirigido"],
    "s2": ["has dirigido"],
    "s3": ["ha dirigido"],
    "p1": ["hemos dirigido"],
    "p2": ["habéis dirigido"],
    "p3": ["han dirigido"]
  },
  "In Fut Per": {
    "s1": ["habré dirigido"],
    "s2": ["habrás dirigido"],
    "s3": ["habrá dirigido"],
    "p1": ["habremos dirigido"],
    "p2": ["habréis dirigido"],
    "p3": ["habrán dirigido"]
  },
  "In Pas Per": {
    "s1": ["había dirigido"],
    "s2": ["habías dirigido"],
    "s3": ["había dirigido"],
    "p1": ["habíamos dirigido"],
    "p2": ["habíais dirigido"],
    "p3": ["habían dirigido"]
  },
  "In Cond Per": {
    "s1": ["habría dirigido"],
    "s2": ["habrías dirigido"],
    "s3": ["habría dirigido"],
    "p1": ["habríamos dirigido"],
    "p2": ["habríais dirigido"],
    "p3": ["habrían dirigido"]
  },
  "Sub Pres": {
    "s1": ["dirija"],
    "s2": ["dirijas"],
    "s3": ["dirija"],
    "p1": ["dirijamos"],
    "p2": ["dirijáis"],
    "p3": ["dirijan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["dirige"],
    "s3": ["dirigid"],
    "p1": [""],
    "p2": ["dirija"],
    "p3": ["dirijan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no dirijas"],
    "s3": ["no dirijáis"],
    "p1": [""],
    "p2": ["no dirija"],
    "p3": ["no dirijan"]
  },
  "In Pres Pro": {
    "s1": ["estoy dirigiendo"],
    "s2": ["estás dirigiendo"],
    "s3": ["está dirigiendo"],
    "p1": ["estamos dirigiendo"],
    "p2": ["estáis dirigiendo"],
    "p3": ["están dirigiendo"]
  }
}, {
  "inf": "divertirse",
  "inf_eng": "to have fun",
  "In Pres": {
    "s1": ["me divierto"],
    "s2": ["te diviertes"],
    "s3": ["se divierte"],
    "p1": ["nos divertimos"],
    "p2": ["os divertís"],
    "p3": ["se divierten"]
  },
  "In Fut": {
    "s1": ["me divertiré"],
    "s2": ["te divertirás"],
    "s3": ["se divertirá"],
    "p1": ["nos divertiremos"],
    "p2": ["os divertiréis"],
    "p3": ["se divertirán"]
  },
  "In Imp": {
    "s1": ["me divertía"],
    "s2": ["te divertías"],
    "s3": ["se divertía"],
    "p1": ["nos divertíamos"],
    "p2": ["os divertíais"],
    "p3": ["se divertían"]
  },
  "In Pret": {
    "s1": ["me divertí"],
    "s2": ["te divertiste"],
    "s3": ["se divirtió"],
    "p1": ["nos divertimos"],
    "p2": ["os divertisteis"],
    "p3": ["se divirtieron"]
  },
  "In Cond": {
    "s1": ["me divertiría"],
    "s2": ["te divertirías"],
    "s3": ["se divertiría"],
    "p1": ["nos divertiríamos"],
    "p2": ["os divertiríais"],
    "p3": ["se divertirían"]
  },
  "In Pres Per": {
    "s1": ["me he divertido"],
    "s2": ["te has divertido"],
    "s3": ["se ha divertido"],
    "p1": ["nos hemos divertido"],
    "p2": ["os habéis divertido"],
    "p3": ["se han divertido"]
  },
  "In Fut Per": {
    "s1": ["me habré divertido"],
    "s2": ["te habrás divertido"],
    "s3": ["se habrá divertido"],
    "p1": ["nos habremos divertido"],
    "p2": ["os habréis divertido"],
    "p3": ["se habrán divertido"]
  },
  "In Pas Per": {
    "s1": ["me había divertido"],
    "s2": ["te habías divertido"],
    "s3": ["se había divertido"],
    "p1": ["nos habíamos divertido"],
    "p2": ["os habíais divertido"],
    "p3": ["se habían divertido"]
  },
  "In Cond Per": {
    "s1": ["me habría divertido"],
    "s2": ["te habrías divertido"],
    "s3": ["se habría divertido"],
    "p1": ["nos habríamos divertido"],
    "p2": ["os habríais divertido"],
    "p3": ["se habrían divertido"]
  },
  "Sub Pres": {
    "s1": ["me divierta"],
    "s2": ["te diviertas"],
    "s3": ["se divierta"],
    "p1": ["nos divirtamos"],
    "p2": ["os divirtáis"],
    "p3": ["se diviertan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["diviértete"],
    "s3": ["divertíos"],
    "p1": [""],
    "p2": ["diviértase"],
    "p3": ["diviértanse"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no te diviertas"],
    "s3": ["no os divirtáis"],
    "p1": [""],
    "p2": ["no se divierta"],
    "p3": ["no se diviertan"]
  },
  "In Pres Pro": {
    "s1": ["me estoy divirtiéndo", "estoy divirtiéndome"],
    "s2": ["te estás divirtiéndo", "estás divirtiéndote"],
    "s3": ["se está divirtiéndo", "está divirtiéndose"],
    "p1": ["nos estamos divirtiéndo", "estamos divirtiéndonos"],
    "p2": ["os estáis divirtiéndo", "estáis divirtiéndoos"],
    "p3": ["se están divirtiéndo", "están divirtiéndose"]
  }
}, {
  "inf": "dormir",
  "inf_eng": "to sleep",
  "In Pres": {
    "s1": ["duermo"],
    "s2": ["duermes"],
    "s3": ["duerme"],
    "p1": ["dormimos"],
    "p2": ["dormís"],
    "p3": ["duermen"]
  },
  "In Fut": {
    "s1": ["dormiré"],
    "s2": ["dormirás"],
    "s3": ["dormirá"],
    "p1": ["dormiremos"],
    "p2": ["dormiréis"],
    "p3": ["dormirán"]
  },
  "In Imp": {
    "s1": ["dormía"],
    "s2": ["dormías"],
    "s3": ["dormía"],
    "p1": ["dormíamos"],
    "p2": ["dormíais"],
    "p3": ["dormían"]
  },
  "In Pret": {
    "s1": ["dormí"],
    "s2": ["dormiste"],
    "s3": ["durmió"],
    "p1": ["dormimos"],
    "p2": ["dormisteis"],
    "p3": ["durmieron"]
  },
  "In Cond": {
    "s1": ["dormiría"],
    "s2": ["dormirías"],
    "s3": ["dormiría"],
    "p1": ["dormiríamos"],
    "p2": ["dormiríais"],
    "p3": ["dormirían"]
  },
  "In Pres Per": {
    "s1": ["he dormido"],
    "s2": ["has dormido"],
    "s3": ["ha dormido"],
    "p1": ["hemos dormido"],
    "p2": ["habéis dormido"],
    "p3": ["han dormido"]
  },
  "In Fut Per": {
    "s1": ["habré dormido"],
    "s2": ["habrás dormido"],
    "s3": ["habrá dormido"],
    "p1": ["habremos dormido"],
    "p2": ["habréis dormido"],
    "p3": ["habrán dormido"]
  },
  "In Pas Per": {
    "s1": ["había dormido"],
    "s2": ["habías dormido"],
    "s3": ["había dormido"],
    "p1": ["habíamos dormido"],
    "p2": ["habíais dormido"],
    "p3": ["habían dormido"]
  },
  "In Cond Per": {
    "s1": ["habría dormido"],
    "s2": ["habrías dormido"],
    "s3": ["habría dormido"],
    "p1": ["habríamos dormido"],
    "p2": ["habríais dormido"],
    "p3": ["habrían dormido"]
  },
  "Sub Pres": {
    "s1": ["duerma"],
    "s2": ["duermas"],
    "s3": ["duerma"],
    "p1": ["durmamos"],
    "p2": ["durmáis"],
    "p3": ["duerman"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["duerme"],
    "s3": ["dormid"],
    "p1": [""],
    "p2": ["duerma"],
    "p3": ["duerman"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no duermas"],
    "s3": ["no durmáis"],
    "p1": [""],
    "p2": ["no duerma"],
    "p3": ["no duerman"]
  },
  "In Pres Pro": {
    "s1": ["estoy durmiendo"],
    "s2": ["estás durmiendo"],
    "s3": ["está durmiendo"],
    "p1": ["estamos durmiendo"],
    "p2": ["estáis durmiendo"],
    "p3": ["están durmiendo"]
  }
}, {
  "inf": "empezar",
  "inf_eng": "to begin",
  "In Pres": {
    "s1": ["empiezo"],
    "s2": ["empiezas"],
    "s3": ["empieza"],
    "p1": ["empezamos"],
    "p2": ["empezáis"],
    "p3": ["empiezan"]
  },
  "In Fut": {
    "s1": ["empezaré"],
    "s2": ["empezarás"],
    "s3": ["empezará"],
    "p1": ["empezaremos"],
    "p2": ["empezaréis"],
    "p3": ["empezarán"]
  },
  "In Imp": {
    "s1": ["empezaba"],
    "s2": ["empezabas"],
    "s3": ["empezaba"],
    "p1": ["empezábamos"],
    "p2": ["empezabais"],
    "p3": ["empezaban"]
  },
  "In Pret": {
    "s1": ["empecé"],
    "s2": ["empezaste"],
    "s3": ["empezó"],
    "p1": ["empezamos"],
    "p2": ["empezasteis"],
    "p3": ["empezaron"]
  },
  "In Cond": {
    "s1": ["empezaría"],
    "s2": ["empezarías"],
    "s3": ["empezaría"],
    "p1": ["empezaríamos"],
    "p2": ["empezaríais"],
    "p3": ["empezarían"]
  },
  "In Pres Per": {
    "s1": ["he empezado"],
    "s2": ["has empezado"],
    "s3": ["ha empezado"],
    "p1": ["hemos empezado"],
    "p2": ["habéis empezado"],
    "p3": ["han empezado"]
  },
  "In Fut Per": {
    "s1": ["habré empezado"],
    "s2": ["habrás empezado"],
    "s3": ["habrá empezado"],
    "p1": ["habremos empezado"],
    "p2": ["habréis empezado"],
    "p3": ["habrán empezado"]
  },
  "In Pas Per": {
    "s1": ["había empezado"],
    "s2": ["habías empezado"],
    "s3": ["había empezado"],
    "p1": ["habíamos empezado"],
    "p2": ["habíais empezado"],
    "p3": ["habían empezado"]
  },
  "In Cond Per": {
    "s1": ["habría empezado"],
    "s2": ["habrías empezado"],
    "s3": ["habría empezado"],
    "p1": ["habríamos empezado"],
    "p2": ["habríais empezado"],
    "p3": ["habrían empezado"]
  },
  "Sub Pres": {
    "s1": ["empiece"],
    "s2": ["empieces"],
    "s3": ["empiece"],
    "p1": ["empecemos"],
    "p2": ["empecéis"],
    "p3": ["empiecen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["empieza"],
    "s3": ["empezad"],
    "p1": [""],
    "p2": ["empiece"],
    "p3": ["empiecen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no empieces"],
    "s3": ["no empecéis"],
    "p1": [""],
    "p2": ["no empiece"],
    "p3": ["no empiecen"]
  },
  "In Pres Pro": {
    "s1": ["estoy empezando"],
    "s2": ["estás empezando"],
    "s3": ["está empezando"],
    "p1": ["estamos empezando"],
    "p2": ["estáis empezando"],
    "p3": ["están empezando"]
  }
}, {
  "inf": "ducharse",
  "inf_eng": "to take a shower",
  "In Pres": {
    "s1": ["me ducho"],
    "s2": ["te duchas"],
    "s3": ["se ducha"],
    "p1": ["nos duchamos"],
    "p2": ["os ducháis"],
    "p3": ["se duchan"]
  },
  "In Fut": {
    "s1": ["me ducharé"],
    "s2": ["te ducharás"],
    "s3": ["se duchará"],
    "p1": ["nos ducharemos"],
    "p2": ["os ducharéis"],
    "p3": ["se ducharán"]
  },
  "In Imp": {
    "s1": ["me duchaba"],
    "s2": ["te duchabas"],
    "s3": ["se duchaba"],
    "p1": ["nos duchábamos"],
    "p2": ["os duchabais"],
    "p3": ["se duchaban"]
  },
  "In Pret": {
    "s1": ["me duché"],
    "s2": ["te duchaste"],
    "s3": ["se duchó"],
    "p1": ["nos duchamos"],
    "p2": ["os duchasteis"],
    "p3": ["se ducharon"]
  },
  "In Cond": {
    "s1": ["me ducharía"],
    "s2": ["te ducharías"],
    "s3": ["se ducharía"],
    "p1": ["nos ducharíamos"],
    "p2": ["os ducharíais"],
    "p3": ["se ducharían"]
  },
  "In Pres Per": {
    "s1": ["me he duchado"],
    "s2": ["te has duchado"],
    "s3": ["se ha duchado"],
    "p1": ["nos hemos duchado"],
    "p2": ["os habéis duchado"],
    "p3": ["se han duchado"]
  },
  "In Fut Per": {
    "s1": ["me habré duchado"],
    "s2": ["te habrás duchado"],
    "s3": ["se habrá duchado"],
    "p1": ["nos habremos duchado"],
    "p2": ["os habréis duchado"],
    "p3": ["se habrán duchado"]
  },
  "In Pas Per": {
    "s1": ["me había duchado"],
    "s2": ["te habías duchado"],
    "s3": ["se había duchado"],
    "p1": ["nos habíamos duchado"],
    "p2": ["os habíais duchado"],
    "p3": ["se habían duchado"]
  },
  "In Cond Per": {
    "s1": ["me habría duchado"],
    "s2": ["te habrías duchado"],
    "s3": ["se habría duchado"],
    "p1": ["nos habríamos duchado"],
    "p2": ["os habríais duchado"],
    "p3": ["se habrían duchado"]
  },
  "Sub Pres": {
    "s1": ["me duche"],
    "s2": ["te duches"],
    "s3": ["se duche"],
    "p1": ["nos duchemos"],
    "p2": ["os duchéis"],
    "p3": ["se duchen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["dúchate"],
    "s3": ["duchaos"],
    "p1": [""],
    "p2": ["dúchese"],
    "p3": ["dúchense"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no te duches"],
    "s3": ["no os duchéis"],
    "p1": [""],
    "p2": ["no se duche"],
    "p3": ["no se duchen"]
  },
  "In Pres Pro": {
    "s1": ["me estoy duchándo", "estoy duchándome"],
    "s2": ["te estás duchándo", "estás duchándote"],
    "s3": ["se está duchándo", "está duchándose"],
    "p1": ["nos estamos duchándo", "estamos duchándonos"],
    "p2": ["os estáis duchándo", "estáis duchándoos"],
    "p3": ["se están duchándo", "están duchándose"]
  }
}, {
  "inf": "encontrar",
  "inf_eng": "to find",
  "In Pres": {
    "s1": ["encuentro"],
    "s2": ["encuentras"],
    "s3": ["encuentra"],
    "p1": ["encontramos"],
    "p2": ["encontráis"],
    "p3": ["encuentran"]
  },
  "In Fut": {
    "s1": ["encontraré"],
    "s2": ["encontrarás"],
    "s3": ["encontrará"],
    "p1": ["encontraremos"],
    "p2": ["encontraréis"],
    "p3": ["encontrarán"]
  },
  "In Imp": {
    "s1": ["encontraba"],
    "s2": ["encontrabas"],
    "s3": ["encontraba"],
    "p1": ["encontrábamos"],
    "p2": ["encontrabais"],
    "p3": ["encontraban"]
  },
  "In Pret": {
    "s1": ["encontré"],
    "s2": ["encontraste"],
    "s3": ["encontró"],
    "p1": ["encontramos"],
    "p2": ["encontrasteis"],
    "p3": ["encontraron"]
  },
  "In Cond": {
    "s1": ["encontraría"],
    "s2": ["encontrarías"],
    "s3": ["encontraría"],
    "p1": ["encontraríamos"],
    "p2": ["encontraríais"],
    "p3": ["encontrarían"]
  },
  "In Pres Per": {
    "s1": ["he encontrado"],
    "s2": ["has encontrado"],
    "s3": ["ha encontrado"],
    "p1": ["hemos encontrado"],
    "p2": ["habéis encontrado"],
    "p3": ["han encontrado"]
  },
  "In Fut Per": {
    "s1": ["habré encontrado"],
    "s2": ["habrás encontrado"],
    "s3": ["habrá encontrado"],
    "p1": ["habremos encontrado"],
    "p2": ["habréis encontrado"],
    "p3": ["habrán encontrado"]
  },
  "In Pas Per": {
    "s1": ["había encontrado"],
    "s2": ["habías encontrado"],
    "s3": ["había encontrado"],
    "p1": ["habíamos encontrado"],
    "p2": ["habíais encontrado"],
    "p3": ["habían encontrado"]
  },
  "In Cond Per": {
    "s1": ["habría encontrado"],
    "s2": ["habrías encontrado"],
    "s3": ["habría encontrado"],
    "p1": ["habríamos encontrado"],
    "p2": ["habríais encontrado"],
    "p3": ["habrían encontrado"]
  },
  "Sub Pres": {
    "s1": ["encuentre"],
    "s2": ["encuentres"],
    "s3": ["encuentre"],
    "p1": ["encontremos"],
    "p2": ["encontréis"],
    "p3": ["encuentren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["encuentra"],
    "s3": ["encontrad"],
    "p1": [""],
    "p2": ["encuentre"],
    "p3": ["encuentren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no encuentres"],
    "s3": ["no encontréis"],
    "p1": [""],
    "p2": ["no encuentre"],
    "p3": ["no encuentren"]
  },
  "In Pres Pro": {
    "s1": ["estoy encontrando"],
    "s2": ["estás encontrando"],
    "s3": ["está encontrando"],
    "p1": ["estamos encontrando"],
    "p2": ["estáis encontrando"],
    "p3": ["están encontrando"]
  }
}, {
  "inf": "enseñar",
  "inf_eng": "to teach",
  "In Pres": {
    "s1": ["enseño"],
    "s2": ["enseñas"],
    "s3": ["enseña"],
    "p1": ["enseñamos"],
    "p2": ["enseñáis"],
    "p3": ["enseñan"]
  },
  "In Fut": {
    "s1": ["enseñaré"],
    "s2": ["enseñarás"],
    "s3": ["enseñará"],
    "p1": ["enseñaremos"],
    "p2": ["enseñaréis"],
    "p3": ["enseñarán"]
  },
  "In Imp": {
    "s1": ["enseñaba"],
    "s2": ["enseñabas"],
    "s3": ["enseñaba"],
    "p1": ["enseñábamos"],
    "p2": ["enseñabais"],
    "p3": ["enseñaban"]
  },
  "In Pret": {
    "s1": ["enseñé"],
    "s2": ["enseñaste"],
    "s3": ["enseñó"],
    "p1": ["enseñamos"],
    "p2": ["enseñasteis"],
    "p3": ["enseñaron"]
  },
  "In Cond": {
    "s1": ["enseñaría"],
    "s2": ["enseñarías"],
    "s3": ["enseñaría"],
    "p1": ["enseñaríamos"],
    "p2": ["enseñaríais"],
    "p3": ["enseñarían"]
  },
  "In Pres Per": {
    "s1": ["he enseñado"],
    "s2": ["has enseñado"],
    "s3": ["ha enseñado"],
    "p1": ["hemos enseñado"],
    "p2": ["habéis enseñado"],
    "p3": ["han enseñado"]
  },
  "In Fut Per": {
    "s1": ["habré enseñado"],
    "s2": ["habrás enseñado"],
    "s3": ["habrá enseñado"],
    "p1": ["habremos enseñado"],
    "p2": ["habréis enseñado"],
    "p3": ["habrán enseñado"]
  },
  "In Pas Per": {
    "s1": ["había enseñado"],
    "s2": ["habías enseñado"],
    "s3": ["había enseñado"],
    "p1": ["habíamos enseñado"],
    "p2": ["habíais enseñado"],
    "p3": ["habían enseñado"]
  },
  "In Cond Per": {
    "s1": ["habría enseñado"],
    "s2": ["habrías enseñado"],
    "s3": ["habría enseñado"],
    "p1": ["habríamos enseñado"],
    "p2": ["habríais enseñado"],
    "p3": ["habrían enseñado"]
  },
  "Sub Pres": {
    "s1": ["enseñe"],
    "s2": ["enseñes"],
    "s3": ["enseñe"],
    "p1": ["enseñemos"],
    "p2": ["enseñéis"],
    "p3": ["enseñen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["enseña"],
    "s3": ["enseñad"],
    "p1": [""],
    "p2": ["enseñe"],
    "p3": ["enseñen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no enseñes"],
    "s3": ["no enseñéis"],
    "p1": [""],
    "p2": ["no enseñe"],
    "p3": ["no enseñen"]
  },
  "In Pres Pro": {
    "s1": ["estoy enseñando"],
    "s2": ["estás enseñando"],
    "s3": ["está enseñando"],
    "p1": ["estamos enseñando"],
    "p2": ["estáis enseñando"],
    "p3": ["están enseñando"]
  }
}, {
  "inf": "entender",
  "inf_eng": "to understand",
  "In Pres": {
    "s1": ["entiendo"],
    "s2": ["entiendes"],
    "s3": ["entiende"],
    "p1": ["entendemos"],
    "p2": ["entendéis"],
    "p3": ["entienden"]
  },
  "In Fut": {
    "s1": ["entenderé"],
    "s2": ["entenderás"],
    "s3": ["entenderá"],
    "p1": ["entenderemos"],
    "p2": ["entenderéis"],
    "p3": ["entenderán"]
  },
  "In Imp": {
    "s1": ["entendía"],
    "s2": ["entendías"],
    "s3": ["entendía"],
    "p1": ["entendíamos"],
    "p2": ["entendíais"],
    "p3": ["entendían"]
  },
  "In Pret": {
    "s1": ["entendí"],
    "s2": ["entendiste"],
    "s3": ["entendió"],
    "p1": ["entendimos"],
    "p2": ["entendisteis"],
    "p3": ["entendieron"]
  },
  "In Cond": {
    "s1": ["entendería"],
    "s2": ["entenderías"],
    "s3": ["entendería"],
    "p1": ["entenderíamos"],
    "p2": ["entenderíais"],
    "p3": ["entenderían"]
  },
  "In Pres Per": {
    "s1": ["he entendido"],
    "s2": ["has entendido"],
    "s3": ["ha entendido"],
    "p1": ["hemos entendido"],
    "p2": ["habéis entendido"],
    "p3": ["han entendido"]
  },
  "In Fut Per": {
    "s1": ["habré entendido"],
    "s2": ["habrás entendido"],
    "s3": ["habrá entendido"],
    "p1": ["habremos entendido"],
    "p2": ["habréis entendido"],
    "p3": ["habrán entendido"]
  },
  "In Pas Per": {
    "s1": ["había entendido"],
    "s2": ["habías entendido"],
    "s3": ["había entendido"],
    "p1": ["habíamos entendido"],
    "p2": ["habíais entendido"],
    "p3": ["habían entendido"]
  },
  "In Cond Per": {
    "s1": ["habría entendido"],
    "s2": ["habrías entendido"],
    "s3": ["habría entendido"],
    "p1": ["habríamos entendido"],
    "p2": ["habríais entendido"],
    "p3": ["habrían entendido"]
  },
  "Sub Pres": {
    "s1": ["entienda"],
    "s2": ["entiendas"],
    "s3": ["entienda"],
    "p1": ["entendamos"],
    "p2": ["entendáis"],
    "p3": ["entiendan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["entiende"],
    "s3": ["entended"],
    "p1": [""],
    "p2": ["entienda"],
    "p3": ["entiendan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no entiendas"],
    "s3": ["no entendáis"],
    "p1": [""],
    "p2": ["no entienda"],
    "p3": ["no entiendan"]
  },
  "In Pres Pro": {
    "s1": ["estoy entendiendo"],
    "s2": ["estás entendiendo"],
    "s3": ["está entendiendo"],
    "p1": ["estamos entendiendo"],
    "p2": ["estáis entendiendo"],
    "p3": ["están entendiendo"]
  }
}, {
  "inf": "entrar",
  "inf_eng": "to enter",
  "In Pres": {
    "s1": ["entro"],
    "s2": ["entras"],
    "s3": ["entra"],
    "p1": ["entramos"],
    "p2": ["entráis"],
    "p3": ["entran"]
  },
  "In Fut": {
    "s1": ["entraré"],
    "s2": ["entrarás"],
    "s3": ["entrará"],
    "p1": ["entraremos"],
    "p2": ["entraréis"],
    "p3": ["entrarán"]
  },
  "In Imp": {
    "s1": ["entraba"],
    "s2": ["entrabas"],
    "s3": ["entraba"],
    "p1": ["entrábamos"],
    "p2": ["entrabais"],
    "p3": ["entraban"]
  },
  "In Pret": {
    "s1": ["entré"],
    "s2": ["entraste"],
    "s3": ["entró"],
    "p1": ["entramos"],
    "p2": ["entrasteis"],
    "p3": ["entraron"]
  },
  "In Cond": {
    "s1": ["entraría"],
    "s2": ["entrarías"],
    "s3": ["entraría"],
    "p1": ["entraríamos"],
    "p2": ["entraríais"],
    "p3": ["entrarían"]
  },
  "In Pres Per": {
    "s1": ["he entrado"],
    "s2": ["has entrado"],
    "s3": ["ha entrado"],
    "p1": ["hemos entrado"],
    "p2": ["habéis entrado"],
    "p3": ["han entrado"]
  },
  "In Fut Per": {
    "s1": ["habré entrado"],
    "s2": ["habrás entrado"],
    "s3": ["habrá entrado"],
    "p1": ["habremos entrado"],
    "p2": ["habréis entrado"],
    "p3": ["habrán entrado"]
  },
  "In Pas Per": {
    "s1": ["había entrado"],
    "s2": ["habías entrado"],
    "s3": ["había entrado"],
    "p1": ["habíamos entrado"],
    "p2": ["habíais entrado"],
    "p3": ["habían entrado"]
  },
  "In Cond Per": {
    "s1": ["habría entrado"],
    "s2": ["habrías entrado"],
    "s3": ["habría entrado"],
    "p1": ["habríamos entrado"],
    "p2": ["habríais entrado"],
    "p3": ["habrían entrado"]
  },
  "Sub Pres": {
    "s1": ["entre"],
    "s2": ["entres"],
    "s3": ["entre"],
    "p1": ["entremos"],
    "p2": ["entréis"],
    "p3": ["entren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["entra"],
    "s3": ["entrad"],
    "p1": [""],
    "p2": ["entre"],
    "p3": ["entren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no entres"],
    "s3": ["no entréis"],
    "p1": [""],
    "p2": ["no entre"],
    "p3": ["no entren"]
  },
  "In Pres Pro": {
    "s1": ["estoy entrando"],
    "s2": ["estás entrando"],
    "s3": ["está entrando"],
    "p1": ["estamos entrando"],
    "p2": ["estáis entrando"],
    "p3": ["están entrando"]
  }
}, {
  "inf": "enviar",
  "inf_eng": "to send",
  "In Pres": {
    "s1": ["envío"],
    "s2": ["envías"],
    "s3": ["envía"],
    "p1": ["enviamos"],
    "p2": ["enviáis"],
    "p3": ["envían"]
  },
  "In Fut": {
    "s1": ["enviaré"],
    "s2": ["enviarás"],
    "s3": ["enviará"],
    "p1": ["enviaremos"],
    "p2": ["enviaréis"],
    "p3": ["enviarán"]
  },
  "In Imp": {
    "s1": ["enviaba"],
    "s2": ["enviabas"],
    "s3": ["enviaba"],
    "p1": ["enviábamos"],
    "p2": ["enviabais"],
    "p3": ["enviaban"]
  },
  "In Pret": {
    "s1": ["envié"],
    "s2": ["enviaste"],
    "s3": ["envió"],
    "p1": ["enviamos"],
    "p2": ["enviasteis"],
    "p3": ["enviaron"]
  },
  "In Cond": {
    "s1": ["enviaría"],
    "s2": ["enviarías"],
    "s3": ["enviaría"],
    "p1": ["enviaríamos"],
    "p2": ["enviaríais"],
    "p3": ["enviarían"]
  },
  "In Pres Per": {
    "s1": ["he enviado"],
    "s2": ["has enviado"],
    "s3": ["ha enviado"],
    "p1": ["hemos enviado"],
    "p2": ["habéis enviado"],
    "p3": ["han enviado"]
  },
  "In Fut Per": {
    "s1": ["habré enviado"],
    "s2": ["habrás enviado"],
    "s3": ["habrá enviado"],
    "p1": ["habremos enviado"],
    "p2": ["habréis enviado"],
    "p3": ["habrán enviado"]
  },
  "In Pas Per": {
    "s1": ["había enviado"],
    "s2": ["habías enviado"],
    "s3": ["había enviado"],
    "p1": ["habíamos enviado"],
    "p2": ["habíais enviado"],
    "p3": ["habían enviado"]
  },
  "In Cond Per": {
    "s1": ["habría enviado"],
    "s2": ["habrías enviado"],
    "s3": ["habría enviado"],
    "p1": ["habríamos enviado"],
    "p2": ["habríais enviado"],
    "p3": ["habrían enviado"]
  },
  "Sub Pres": {
    "s1": ["envíe"],
    "s2": ["envíes"],
    "s3": ["envíe"],
    "p1": ["enviemos"],
    "p2": ["enviéis"],
    "p3": ["envíen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["envía"],
    "s3": ["enviad"],
    "p1": [""],
    "p2": ["envíe"],
    "p3": ["envíen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no envíes"],
    "s3": ["no enviéis"],
    "p1": [""],
    "p2": ["no envíe"],
    "p3": ["no envíen"]
  },
  "In Pres Pro": {
    "s1": ["estoy enviando"],
    "s2": ["estás enviando"],
    "s3": ["está enviando"],
    "p1": ["estamos enviando"],
    "p2": ["estáis enviando"],
    "p3": ["están enviando"]
  }
}, {
  "inf": "escribir",
  "inf_eng": "to write",
  "In Pres": {
    "s1": ["escribo"],
    "s2": ["escribes"],
    "s3": ["escribe"],
    "p1": ["escribimos"],
    "p2": ["escribís"],
    "p3": ["escriben"]
  },
  "In Fut": {
    "s1": ["escribiré"],
    "s2": ["escribirás"],
    "s3": ["escribirá"],
    "p1": ["escribiremos"],
    "p2": ["escribiréis"],
    "p3": ["escribirán"]
  },
  "In Imp": {
    "s1": ["escribía"],
    "s2": ["escribías"],
    "s3": ["escribía"],
    "p1": ["escribíamos"],
    "p2": ["escribíais"],
    "p3": ["escribían"]
  },
  "In Pret": {
    "s1": ["escribí"],
    "s2": ["escribiste"],
    "s3": ["escribió"],
    "p1": ["escribimos"],
    "p2": ["escribisteis"],
    "p3": ["escribieron"]
  },
  "In Cond": {
    "s1": ["escribiría"],
    "s2": ["escribirías"],
    "s3": ["escribiría"],
    "p1": ["escribiríamos"],
    "p2": ["escribiríais"],
    "p3": ["escribirían"]
  },
  "In Pres Per": {
    "s1": ["he escrito"],
    "s2": ["has escrito"],
    "s3": ["ha escrito"],
    "p1": ["hemos escrito"],
    "p2": ["habéis escrito"],
    "p3": ["han escrito"]
  },
  "In Fut Per": {
    "s1": ["habré escrito"],
    "s2": ["habrás escrito"],
    "s3": ["habrá escrito"],
    "p1": ["habremos escrito"],
    "p2": ["habréis escrito"],
    "p3": ["habrán escrito"]
  },
  "In Pas Per": {
    "s1": ["había escrito"],
    "s2": ["habías escrito"],
    "s3": ["había escrito"],
    "p1": ["habíamos escrito"],
    "p2": ["habíais escrito"],
    "p3": ["habían escrito"]
  },
  "In Cond Per": {
    "s1": ["habría escrito"],
    "s2": ["habrías escrito"],
    "s3": ["habría escrito"],
    "p1": ["habríamos escrito"],
    "p2": ["habríais escrito"],
    "p3": ["habrían escrito"]
  },
  "Sub Pres": {
    "s1": ["escriba"],
    "s2": ["escribas"],
    "s3": ["escriba"],
    "p1": ["escribamos"],
    "p2": ["escribáis"],
    "p3": ["escriban"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["escribe"],
    "s3": ["escribid"],
    "p1": [""],
    "p2": ["escriba"],
    "p3": ["escriban"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no escribas"],
    "s3": ["no escribáis"],
    "p1": [""],
    "p2": ["no escriba"],
    "p3": ["no escriban"]
  },
  "In Pres Pro": {
    "s1": ["estoy escribiendo"],
    "s2": ["estás escribiendo"],
    "s3": ["está escribiendo"],
    "p1": ["estamos escribiendo"],
    "p2": ["estáis escribiendo"],
    "p3": ["están escribiendo"]
  }
}, {
  "inf": "escuchar",
  "inf_eng": "to listen to",
  "In Pres": {
    "s1": ["escucho"],
    "s2": ["escuchas"],
    "s3": ["escucha"],
    "p1": ["escuchamos"],
    "p2": ["escucháis"],
    "p3": ["escuchan"]
  },
  "In Fut": {
    "s1": ["escucharé"],
    "s2": ["escucharás"],
    "s3": ["escuchará"],
    "p1": ["escucharemos"],
    "p2": ["escucharéis"],
    "p3": ["escucharán"]
  },
  "In Imp": {
    "s1": ["escuchaba"],
    "s2": ["escuchabas"],
    "s3": ["escuchaba"],
    "p1": ["escuchábamos"],
    "p2": ["escuchabais"],
    "p3": ["escuchaban"]
  },
  "In Pret": {
    "s1": ["escuché"],
    "s2": ["escuchaste"],
    "s3": ["escuchó"],
    "p1": ["escuchamos"],
    "p2": ["escuchasteis"],
    "p3": ["escucharon"]
  },
  "In Cond": {
    "s1": ["escucharía"],
    "s2": ["escucharías"],
    "s3": ["escucharía"],
    "p1": ["escucharíamos"],
    "p2": ["escucharíais"],
    "p3": ["escucharían"]
  },
  "In Pres Per": {
    "s1": ["he escuchado"],
    "s2": ["has escuchado"],
    "s3": ["ha escuchado"],
    "p1": ["hemos escuchado"],
    "p2": ["habéis escuchado"],
    "p3": ["han escuchado"]
  },
  "In Fut Per": {
    "s1": ["habré escuchado"],
    "s2": ["habrás escuchado"],
    "s3": ["habrá escuchado"],
    "p1": ["habremos escuchado"],
    "p2": ["habréis escuchado"],
    "p3": ["habrán escuchado"]
  },
  "In Pas Per": {
    "s1": ["había escuchado"],
    "s2": ["habías escuchado"],
    "s3": ["había escuchado"],
    "p1": ["habíamos escuchado"],
    "p2": ["habíais escuchado"],
    "p3": ["habían escuchado"]
  },
  "In Cond Per": {
    "s1": ["habría escuchado"],
    "s2": ["habrías escuchado"],
    "s3": ["habría escuchado"],
    "p1": ["habríamos escuchado"],
    "p2": ["habríais escuchado"],
    "p3": ["habrían escuchado"]
  },
  "Sub Pres": {
    "s1": ["escuche"],
    "s2": ["escuches"],
    "s3": ["escuche"],
    "p1": ["escuchemos"],
    "p2": ["escuchéis"],
    "p3": ["escuchen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["escucha"],
    "s3": ["escuchad"],
    "p1": [""],
    "p2": ["escuche"],
    "p3": ["escuchen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no escuches"],
    "s3": ["no escuchéis"],
    "p1": [""],
    "p2": ["no escuche"],
    "p3": ["no escuchen"]
  },
  "In Pres Pro": {
    "s1": ["estoy escuchando"],
    "s2": ["estás escuchando"],
    "s3": ["está escuchando"],
    "p1": ["estamos escuchando"],
    "p2": ["estáis escuchando"],
    "p3": ["están escuchando"]
  }
}, {
  "inf": "estudiar",
  "inf_eng": "to study",
  "In Pres": {
    "s1": ["estudio"],
    "s2": ["estudias"],
    "s3": ["estudia"],
    "p1": ["estudiamos"],
    "p2": ["estudiáis"],
    "p3": ["estudian"]
  },
  "In Fut": {
    "s1": ["estudiaré"],
    "s2": ["estudiarás"],
    "s3": ["estudiará"],
    "p1": ["estudiaremos"],
    "p2": ["estudiaréis"],
    "p3": ["estudiarán"]
  },
  "In Imp": {
    "s1": ["estudiaba"],
    "s2": ["estudiabas"],
    "s3": ["estudiaba"],
    "p1": ["estudiábamos"],
    "p2": ["estudiabais"],
    "p3": ["estudiaban"]
  },
  "In Pret": {
    "s1": ["estudié"],
    "s2": ["estudiaste"],
    "s3": ["estudió"],
    "p1": ["estudiamos"],
    "p2": ["estudiasteis"],
    "p3": ["estudiaron"]
  },
  "In Cond": {
    "s1": ["estudiaría"],
    "s2": ["estudiarías"],
    "s3": ["estudiaría"],
    "p1": ["estudiaríamos"],
    "p2": ["estudiaríais"],
    "p3": ["estudiarían"]
  },
  "In Pres Per": {
    "s1": ["he estudiado"],
    "s2": ["has estudiado"],
    "s3": ["ha estudiado"],
    "p1": ["hemos estudiado"],
    "p2": ["habéis estudiado"],
    "p3": ["han estudiado"]
  },
  "In Fut Per": {
    "s1": ["habré estudiado"],
    "s2": ["habrás estudiado"],
    "s3": ["habrá estudiado"],
    "p1": ["habremos estudiado"],
    "p2": ["habréis estudiado"],
    "p3": ["habrán estudiado"]
  },
  "In Pas Per": {
    "s1": ["había estudiado"],
    "s2": ["habías estudiado"],
    "s3": ["había estudiado"],
    "p1": ["habíamos estudiado"],
    "p2": ["habíais estudiado"],
    "p3": ["habían estudiado"]
  },
  "In Cond Per": {
    "s1": ["habría estudiado"],
    "s2": ["habrías estudiado"],
    "s3": ["habría estudiado"],
    "p1": ["habríamos estudiado"],
    "p2": ["habríais estudiado"],
    "p3": ["habrían estudiado"]
  },
  "Sub Pres": {
    "s1": ["estudie"],
    "s2": ["estudies"],
    "s3": ["estudie"],
    "p1": ["estudiemos"],
    "p2": ["estudiéis"],
    "p3": ["estudien"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["estudia"],
    "s3": ["estudiad"],
    "p1": [""],
    "p2": ["estudie"],
    "p3": ["estudien"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no estudies"],
    "s3": ["no estudiéis"],
    "p1": [""],
    "p2": ["no estudie"],
    "p3": ["no estudien"]
  },
  "In Pres Pro": {
    "s1": ["estoy estudiando"],
    "s2": ["estás estudiando"],
    "s3": ["está estudiando"],
    "p1": ["estamos estudiando"],
    "p2": ["estáis estudiando"],
    "p3": ["están estudiando"]
  }
}, {
  "inf": "explicar",
  "inf_eng": "to explain",
  "In Pres": {
    "s1": ["explico"],
    "s2": ["explicas"],
    "s3": ["explica"],
    "p1": ["explicamos"],
    "p2": ["explicáis"],
    "p3": ["explican"]
  },
  "In Fut": {
    "s1": ["explicaré"],
    "s2": ["explicarás"],
    "s3": ["explicará"],
    "p1": ["explicaremos"],
    "p2": ["explicaréis"],
    "p3": ["explicarán"]
  },
  "In Imp": {
    "s1": ["explicaba"],
    "s2": ["explicabas"],
    "s3": ["explicaba"],
    "p1": ["explicábamos"],
    "p2": ["explicabais"],
    "p3": ["explicaban"]
  },
  "In Pret": {
    "s1": ["expliqué"],
    "s2": ["explicaste"],
    "s3": ["explicó"],
    "p1": ["explicamos"],
    "p2": ["explicasteis"],
    "p3": ["explicaron"]
  },
  "In Cond": {
    "s1": ["explicaría"],
    "s2": ["explicarías"],
    "s3": ["explicaría"],
    "p1": ["explicaríamos"],
    "p2": ["explicaríais"],
    "p3": ["explicarían"]
  },
  "In Pres Per": {
    "s1": ["he explicado"],
    "s2": ["has explicado"],
    "s3": ["ha explicado"],
    "p1": ["hemos explicado"],
    "p2": ["habéis explicado"],
    "p3": ["han explicado"]
  },
  "In Fut Per": {
    "s1": ["habré explicado"],
    "s2": ["habrás explicado"],
    "s3": ["habrá explicado"],
    "p1": ["habremos explicado"],
    "p2": ["habréis explicado"],
    "p3": ["habrán explicado"]
  },
  "In Pas Per": {
    "s1": ["había explicado"],
    "s2": ["habías explicado"],
    "s3": ["había explicado"],
    "p1": ["habíamos explicado"],
    "p2": ["habíais explicado"],
    "p3": ["habían explicado"]
  },
  "In Cond Per": {
    "s1": ["habría explicado"],
    "s2": ["habrías explicado"],
    "s3": ["habría explicado"],
    "p1": ["habríamos explicado"],
    "p2": ["habríais explicado"],
    "p3": ["habrían explicado"]
  },
  "Sub Pres": {
    "s1": ["explique"],
    "s2": ["expliques"],
    "s3": ["explique"],
    "p1": ["expliquemos"],
    "p2": ["expliquéis"],
    "p3": ["expliquen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["explica"],
    "s3": ["explicad"],
    "p1": [""],
    "p2": ["explique"],
    "p3": ["expliquen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no expliques"],
    "s3": ["no expliquéis"],
    "p1": [""],
    "p2": ["no explique"],
    "p3": ["no expliquen"]
  },
  "In Pres Pro": {
    "s1": ["estoy explicando"],
    "s2": ["estás explicando"],
    "s3": ["está explicando"],
    "p1": ["estamos explicando"],
    "p2": ["estáis explicando"],
    "p3": ["están explicando"]
  }
}, {
  "inf": "formar",
  "inf_eng": "to form",
  "In Pres": {
    "s1": ["formo"],
    "s2": ["formas"],
    "s3": ["forma"],
    "p1": ["formamos"],
    "p2": ["formáis"],
    "p3": ["forman"]
  },
  "In Fut": {
    "s1": ["formaré"],
    "s2": ["formarás"],
    "s3": ["formará"],
    "p1": ["formaremos"],
    "p2": ["formaréis"],
    "p3": ["formarán"]
  },
  "In Imp": {
    "s1": ["formaba"],
    "s2": ["formabas"],
    "s3": ["formaba"],
    "p1": ["formábamos"],
    "p2": ["formabais"],
    "p3": ["formaban"]
  },
  "In Pret": {
    "s1": ["formé"],
    "s2": ["formaste"],
    "s3": ["formó"],
    "p1": ["formamos"],
    "p2": ["formasteis"],
    "p3": ["formaron"]
  },
  "In Cond": {
    "s1": ["formaría"],
    "s2": ["formarías"],
    "s3": ["formaría"],
    "p1": ["formaríamos"],
    "p2": ["formaríais"],
    "p3": ["formarían"]
  },
  "In Pres Per": {
    "s1": ["he formado"],
    "s2": ["has formado"],
    "s3": ["ha formado"],
    "p1": ["hemos formado"],
    "p2": ["habéis formado"],
    "p3": ["han formado"]
  },
  "In Fut Per": {
    "s1": ["habré formado"],
    "s2": ["habrás formado"],
    "s3": ["habrá formado"],
    "p1": ["habremos formado"],
    "p2": ["habréis formado"],
    "p3": ["habrán formado"]
  },
  "In Pas Per": {
    "s1": ["había formado"],
    "s2": ["habías formado"],
    "s3": ["había formado"],
    "p1": ["habíamos formado"],
    "p2": ["habíais formado"],
    "p3": ["habían formado"]
  },
  "In Cond Per": {
    "s1": ["habría formado"],
    "s2": ["habrías formado"],
    "s3": ["habría formado"],
    "p1": ["habríamos formado"],
    "p2": ["habríais formado"],
    "p3": ["habrían formado"]
  },
  "Sub Pres": {
    "s1": ["forme"],
    "s2": ["formes"],
    "s3": ["forme"],
    "p1": ["formemos"],
    "p2": ["forméis"],
    "p3": ["formen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["forma"],
    "s3": ["formad"],
    "p1": [""],
    "p2": ["forme"],
    "p3": ["formen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no formes"],
    "s3": ["no forméis"],
    "p1": [""],
    "p2": ["no forme"],
    "p3": ["no formen"]
  },
  "In Pres Pro": {
    "s1": ["estoy formando"],
    "s2": ["estás formando"],
    "s3": ["está formando"],
    "p1": ["estamos formando"],
    "p2": ["estáis formando"],
    "p3": ["están formando"]
  }
}, {
  "inf": "freír",
  "inf_eng": "to fry",
  "In Pres": {
    "s1": ["frío"],
    "s2": ["fríes"],
    "s3": ["fríe"],
    "p1": ["freímos"],
    "p2": ["freís"],
    "p3": ["fríen"]
  },
  "In Fut": {
    "s1": ["freiré"],
    "s2": ["freirás"],
    "s3": ["freirá"],
    "p1": ["freiremos"],
    "p2": ["freiréis"],
    "p3": ["freirán"]
  },
  "In Imp": {
    "s1": ["freía"],
    "s2": ["freías"],
    "s3": ["freía"],
    "p1": ["freíamos"],
    "p2": ["freíais"],
    "p3": ["freían"]
  },
  "In Pret": {
    "s1": ["freí"],
    "s2": ["freíste"],
    "s3": ["frió"],
    "p1": ["freímos"],
    "p2": ["freísteis"],
    "p3": ["frieron"]
  },
  "In Cond": {
    "s1": ["freiría"],
    "s2": ["freirías"],
    "s3": ["freiría"],
    "p1": ["freiríamos"],
    "p2": ["freiríais"],
    "p3": ["freirían"]
  },
  "In Pres Per": {
    "s1": ["he frito"],
    "s2": ["has frito"],
    "s3": ["ha frito"],
    "p1": ["hemos frito"],
    "p2": ["habéis frito"],
    "p3": ["han frito"]
  },
  "In Fut Per": {
    "s1": ["habré frito"],
    "s2": ["habrás frito"],
    "s3": ["habrá frito"],
    "p1": ["habremos frito"],
    "p2": ["habréis frito"],
    "p3": ["habrán frito"]
  },
  "In Pas Per": {
    "s1": ["había frito"],
    "s2": ["habías frito"],
    "s3": ["había frito"],
    "p1": ["habíamos frito"],
    "p2": ["habíais frito"],
    "p3": ["habían frito"]
  },
  "In Cond Per": {
    "s1": ["habría frito"],
    "s2": ["habrías frito"],
    "s3": ["habría frito"],
    "p1": ["habríamos frito"],
    "p2": ["habríais frito"],
    "p3": ["habrían frito"]
  },
  "Sub Pres": {
    "s1": ["fría"],
    "s2": ["frías"],
    "s3": ["fría"],
    "p1": ["friamos"],
    "p2": ["friáis"],
    "p3": ["frían"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["fríe"],
    "s3": ["freíd"],
    "p1": [""],
    "p2": ["fría"],
    "p3": ["frían"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no frías"],
    "s3": ["no friáis"],
    "p1": [""],
    "p2": ["no fría"],
    "p3": ["no frían"]
  },
  "In Pres Pro": {
    "s1": ["estoy friendo"],
    "s2": ["estás friendo"],
    "s3": ["está friendo"],
    "p1": ["estamos friendo"],
    "p2": ["estáis friendo"],
    "p3": ["están friendo"]
  }
}, {
  "inf": "ganar",
  "inf_eng": "to win",
  "In Pres": {
    "s1": ["gano"],
    "s2": ["ganas"],
    "s3": ["gana"],
    "p1": ["ganamos"],
    "p2": ["ganáis"],
    "p3": ["ganan"]
  },
  "In Fut": {
    "s1": ["ganaré"],
    "s2": ["ganarás"],
    "s3": ["ganará"],
    "p1": ["ganaremos"],
    "p2": ["ganaréis"],
    "p3": ["ganarán"]
  },
  "In Imp": {
    "s1": ["ganaba"],
    "s2": ["ganabas"],
    "s3": ["ganaba"],
    "p1": ["ganábamos"],
    "p2": ["ganabais"],
    "p3": ["ganaban"]
  },
  "In Pret": {
    "s1": ["gané"],
    "s2": ["ganaste"],
    "s3": ["ganó"],
    "p1": ["ganamos"],
    "p2": ["ganasteis"],
    "p3": ["ganaron"]
  },
  "In Cond": {
    "s1": ["ganaría"],
    "s2": ["ganarías"],
    "s3": ["ganaría"],
    "p1": ["ganaríamos"],
    "p2": ["ganaríais"],
    "p3": ["ganarían"]
  },
  "In Pres Per": {
    "s1": ["he ganado"],
    "s2": ["has ganado"],
    "s3": ["ha ganado"],
    "p1": ["hemos ganado"],
    "p2": ["habéis ganado"],
    "p3": ["han ganado"]
  },
  "In Fut Per": {
    "s1": ["habré ganado"],
    "s2": ["habrás ganado"],
    "s3": ["habrá ganado"],
    "p1": ["habremos ganado"],
    "p2": ["habréis ganado"],
    "p3": ["habrán ganado"]
  },
  "In Pas Per": {
    "s1": ["había ganado"],
    "s2": ["habías ganado"],
    "s3": ["había ganado"],
    "p1": ["habíamos ganado"],
    "p2": ["habíais ganado"],
    "p3": ["habían ganado"]
  },
  "In Cond Per": {
    "s1": ["habría ganado"],
    "s2": ["habrías ganado"],
    "s3": ["habría ganado"],
    "p1": ["habríamos ganado"],
    "p2": ["habríais ganado"],
    "p3": ["habrían ganado"]
  },
  "Sub Pres": {
    "s1": ["gane"],
    "s2": ["ganes"],
    "s3": ["gane"],
    "p1": ["ganemos"],
    "p2": ["ganéis"],
    "p3": ["ganen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["gana"],
    "s3": ["ganad"],
    "p1": [""],
    "p2": ["gane"],
    "p3": ["ganen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no ganes"],
    "s3": ["no ganéis"],
    "p1": [""],
    "p2": ["no gane"],
    "p3": ["no ganen"]
  },
  "In Pres Pro": {
    "s1": ["estoy ganando"],
    "s2": ["estás ganando"],
    "s3": ["está ganando"],
    "p1": ["estamos ganando"],
    "p2": ["estáis ganando"],
    "p3": ["están ganando"]
  }
}, {
  "inf": "gastar",
  "inf_eng": "to spend",
  "In Pres": {
    "s1": ["gasto"],
    "s2": ["gastas"],
    "s3": ["gasta"],
    "p1": ["gastamos"],
    "p2": ["gastáis"],
    "p3": ["gastan"]
  },
  "In Fut": {
    "s1": ["gastaré"],
    "s2": ["gastarás"],
    "s3": ["gastará"],
    "p1": ["gastaremos"],
    "p2": ["gastaréis"],
    "p3": ["gastarán"]
  },
  "In Imp": {
    "s1": ["gastaba"],
    "s2": ["gastabas"],
    "s3": ["gastaba"],
    "p1": ["gastábamos"],
    "p2": ["gastabais"],
    "p3": ["gastaban"]
  },
  "In Pret": {
    "s1": ["gasté"],
    "s2": ["gastaste"],
    "s3": ["gastó"],
    "p1": ["gastamos"],
    "p2": ["gastasteis"],
    "p3": ["gastaron"]
  },
  "In Cond": {
    "s1": ["gastaría"],
    "s2": ["gastarías"],
    "s3": ["gastaría"],
    "p1": ["gastaríamos"],
    "p2": ["gastaríais"],
    "p3": ["gastarían"]
  },
  "In Pres Per": {
    "s1": ["he gastado"],
    "s2": ["has gastado"],
    "s3": ["ha gastado"],
    "p1": ["hemos gastado"],
    "p2": ["habéis gastado"],
    "p3": ["han gastado"]
  },
  "In Fut Per": {
    "s1": ["habré gastado"],
    "s2": ["habrás gastado"],
    "s3": ["habrá gastado"],
    "p1": ["habremos gastado"],
    "p2": ["habréis gastado"],
    "p3": ["habrán gastado"]
  },
  "In Pas Per": {
    "s1": ["había gastado"],
    "s2": ["habías gastado"],
    "s3": ["había gastado"],
    "p1": ["habíamos gastado"],
    "p2": ["habíais gastado"],
    "p3": ["habían gastado"]
  },
  "In Cond Per": {
    "s1": ["habría gastado"],
    "s2": ["habrías gastado"],
    "s3": ["habría gastado"],
    "p1": ["habríamos gastado"],
    "p2": ["habríais gastado"],
    "p3": ["habrían gastado"]
  },
  "Sub Pres": {
    "s1": ["gaste"],
    "s2": ["gastes"],
    "s3": ["gaste"],
    "p1": ["gastemos"],
    "p2": ["gastéis"],
    "p3": ["gasten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["gasta"],
    "s3": ["gastad"],
    "p1": [""],
    "p2": ["gaste"],
    "p3": ["gasten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no gastes"],
    "s3": ["no gastéis"],
    "p1": [""],
    "p2": ["no gaste"],
    "p3": ["no gasten"]
  },
  "In Pres Pro": {
    "s1": ["estoy gastando"],
    "s2": ["estás gastando"],
    "s3": ["está gastando"],
    "p1": ["estamos gastando"],
    "p2": ["estáis gastando"],
    "p3": ["están gastando"]
  }
}, {
  "inf": "gritar",
  "inf_eng": "to shout",
  "In Pres": {
    "s1": ["grito"],
    "s2": ["gritas"],
    "s3": ["grita"],
    "p1": ["gritamos"],
    "p2": ["gritáis"],
    "p3": ["gritan"]
  },
  "In Fut": {
    "s1": ["gritaré"],
    "s2": ["gritarás"],
    "s3": ["gritará"],
    "p1": ["gritaremos"],
    "p2": ["gritaréis"],
    "p3": ["gritarán"]
  },
  "In Imp": {
    "s1": ["gritaba"],
    "s2": ["gritabas"],
    "s3": ["gritaba"],
    "p1": ["gritábamos"],
    "p2": ["gritabais"],
    "p3": ["gritaban"]
  },
  "In Pret": {
    "s1": ["grité"],
    "s2": ["gritaste"],
    "s3": ["gritó"],
    "p1": ["gritamos"],
    "p2": ["gritasteis"],
    "p3": ["gritaron"]
  },
  "In Cond": {
    "s1": ["gritaría"],
    "s2": ["gritarías"],
    "s3": ["gritaría"],
    "p1": ["gritaríamos"],
    "p2": ["gritaríais"],
    "p3": ["gritarían"]
  },
  "In Pres Per": {
    "s1": ["he gritado"],
    "s2": ["has gritado"],
    "s3": ["ha gritado"],
    "p1": ["hemos gritado"],
    "p2": ["habéis gritado"],
    "p3": ["han gritado"]
  },
  "In Fut Per": {
    "s1": ["habré gritado"],
    "s2": ["habrás gritado"],
    "s3": ["habrá gritado"],
    "p1": ["habremos gritado"],
    "p2": ["habréis gritado"],
    "p3": ["habrán gritado"]
  },
  "In Pas Per": {
    "s1": ["había gritado"],
    "s2": ["habías gritado"],
    "s3": ["había gritado"],
    "p1": ["habíamos gritado"],
    "p2": ["habíais gritado"],
    "p3": ["habían gritado"]
  },
  "In Cond Per": {
    "s1": ["habría gritado"],
    "s2": ["habrías gritado"],
    "s3": ["habría gritado"],
    "p1": ["habríamos gritado"],
    "p2": ["habríais gritado"],
    "p3": ["habrían gritado"]
  },
  "Sub Pres": {
    "s1": ["grite"],
    "s2": ["grites"],
    "s3": ["grite"],
    "p1": ["gritemos"],
    "p2": ["gritéis"],
    "p3": ["griten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["grita"],
    "s3": ["gritad"],
    "p1": [""],
    "p2": ["grite"],
    "p3": ["griten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no grites"],
    "s3": ["no gritéis"],
    "p1": [""],
    "p2": ["no grite"],
    "p3": ["no griten"]
  },
  "In Pres Pro": {
    "s1": ["estoy gritando"],
    "s2": ["estás gritando"],
    "s3": ["está gritando"],
    "p1": ["estamos gritando"],
    "p2": ["estáis gritando"],
    "p3": ["están gritando"]
  }
}, {
  "inf": "guardar",
  "inf_eng": "to guard",
  "In Pres": {
    "s1": ["guardo"],
    "s2": ["guardas"],
    "s3": ["guarda"],
    "p1": ["guardamos"],
    "p2": ["guardáis"],
    "p3": ["guardan"]
  },
  "In Fut": {
    "s1": ["guardaré"],
    "s2": ["guardarás"],
    "s3": ["guardará"],
    "p1": ["guardaremos"],
    "p2": ["guardaréis"],
    "p3": ["guardarán"]
  },
  "In Imp": {
    "s1": ["guardaba"],
    "s2": ["guardabas"],
    "s3": ["guardaba"],
    "p1": ["guardábamos"],
    "p2": ["guardabais"],
    "p3": ["guardaban"]
  },
  "In Pret": {
    "s1": ["guardé"],
    "s2": ["guardaste"],
    "s3": ["guardó"],
    "p1": ["guardamos"],
    "p2": ["guardasteis"],
    "p3": ["guardaron"]
  },
  "In Cond": {
    "s1": ["guardaría"],
    "s2": ["guardarías"],
    "s3": ["guardaría"],
    "p1": ["guardaríamos"],
    "p2": ["guardaríais"],
    "p3": ["guardarían"]
  },
  "In Pres Per": {
    "s1": ["he guardado"],
    "s2": ["has guardado"],
    "s3": ["ha guardado"],
    "p1": ["hemos guardado"],
    "p2": ["habéis guardado"],
    "p3": ["han guardado"]
  },
  "In Fut Per": {
    "s1": ["habré guardado"],
    "s2": ["habrás guardado"],
    "s3": ["habrá guardado"],
    "p1": ["habremos guardado"],
    "p2": ["habréis guardado"],
    "p3": ["habrán guardado"]
  },
  "In Pas Per": {
    "s1": ["había guardado"],
    "s2": ["habías guardado"],
    "s3": ["había guardado"],
    "p1": ["habíamos guardado"],
    "p2": ["habíais guardado"],
    "p3": ["habían guardado"]
  },
  "In Cond Per": {
    "s1": ["habría guardado"],
    "s2": ["habrías guardado"],
    "s3": ["habría guardado"],
    "p1": ["habríamos guardado"],
    "p2": ["habríais guardado"],
    "p3": ["habrían guardado"]
  },
  "Sub Pres": {
    "s1": ["guarde"],
    "s2": ["guardes"],
    "s3": ["guarde"],
    "p1": ["guardemos"],
    "p2": ["guardéis"],
    "p3": ["guarden"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["guarda"],
    "s3": ["guardad"],
    "p1": [""],
    "p2": ["guarde"],
    "p3": ["guarden"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no guardes"],
    "s3": ["no guardéis"],
    "p1": [""],
    "p2": ["no guarde"],
    "p3": ["no guarden"]
  },
  "In Pres Pro": {
    "s1": ["estoy guardando"],
    "s2": ["estás guardando"],
    "s3": ["está guardando"],
    "p1": ["estamos guardando"],
    "p2": ["estáis guardando"],
    "p3": ["están guardando"]
  }
}, {
  "inf": "hablar",
  "inf_eng": "to speak",
  "In Pres": {
    "s1": ["hablo"],
    "s2": ["hablas"],
    "s3": ["habla"],
    "p1": ["hablamos"],
    "p2": ["habláis"],
    "p3": ["hablan"]
  },
  "In Fut": {
    "s1": ["hablaré"],
    "s2": ["hablarás"],
    "s3": ["hablará"],
    "p1": ["hablaremos"],
    "p2": ["hablaréis"],
    "p3": ["hablarán"]
  },
  "In Imp": {
    "s1": ["hablaba"],
    "s2": ["hablabas"],
    "s3": ["hablaba"],
    "p1": ["hablábamos"],
    "p2": ["hablabais"],
    "p3": ["hablaban"]
  },
  "In Pret": {
    "s1": ["hablé"],
    "s2": ["hablaste"],
    "s3": ["habló"],
    "p1": ["hablamos"],
    "p2": ["hablasteis"],
    "p3": ["hablaron"]
  },
  "In Cond": {
    "s1": ["hablaría"],
    "s2": ["hablarías"],
    "s3": ["hablaría"],
    "p1": ["hablaríamos"],
    "p2": ["hablaríais"],
    "p3": ["hablarían"]
  },
  "In Pres Per": {
    "s1": ["he hablado"],
    "s2": ["has hablado"],
    "s3": ["ha hablado"],
    "p1": ["hemos hablado"],
    "p2": ["habéis hablado"],
    "p3": ["han hablado"]
  },
  "In Fut Per": {
    "s1": ["habré hablado"],
    "s2": ["habrás hablado"],
    "s3": ["habrá hablado"],
    "p1": ["habremos hablado"],
    "p2": ["habréis hablado"],
    "p3": ["habrán hablado"]
  },
  "In Pas Per": {
    "s1": ["había hablado"],
    "s2": ["habías hablado"],
    "s3": ["había hablado"],
    "p1": ["habíamos hablado"],
    "p2": ["habíais hablado"],
    "p3": ["habían hablado"]
  },
  "In Cond Per": {
    "s1": ["habría hablado"],
    "s2": ["habrías hablado"],
    "s3": ["habría hablado"],
    "p1": ["habríamos hablado"],
    "p2": ["habríais hablado"],
    "p3": ["habrían hablado"]
  },
  "Sub Pres": {
    "s1": ["hable"],
    "s2": ["hables"],
    "s3": ["hable"],
    "p1": ["hablemos"],
    "p2": ["habléis"],
    "p3": ["hablen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["habla"],
    "s3": ["hablad"],
    "p1": [""],
    "p2": ["hable"],
    "p3": ["hablen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no hables"],
    "s3": ["no habléis"],
    "p1": [""],
    "p2": ["no hable"],
    "p3": ["no hablen"]
  },
  "In Pres Pro": {
    "s1": ["estoy hablando"],
    "s2": ["estás hablando"],
    "s3": ["está hablando"],
    "p1": ["estamos hablando"],
    "p2": ["estáis hablando"],
    "p3": ["están hablando"]
  }
}, {
  "inf": "hacer",
  "inf_eng": "to do",
  "In Pres": {
    "s1": ["hago"],
    "s2": ["haces"],
    "s3": ["hace"],
    "p1": ["hacemos"],
    "p2": ["hacéis"],
    "p3": ["hacen"]
  },
  "In Fut": {
    "s1": ["haré"],
    "s2": ["harás"],
    "s3": ["hará"],
    "p1": ["haremos"],
    "p2": ["haréis"],
    "p3": ["harán"]
  },
  "In Imp": {
    "s1": ["hacía"],
    "s2": ["hacías"],
    "s3": ["hacía"],
    "p1": ["hacíamos"],
    "p2": ["hacíais"],
    "p3": ["hacían"]
  },
  "In Pret": {
    "s1": ["hice"],
    "s2": ["hiciste"],
    "s3": ["hizo"],
    "p1": ["hicimos"],
    "p2": ["hicisteis"],
    "p3": ["hicieron"]
  },
  "In Cond": {
    "s1": ["haría"],
    "s2": ["harías"],
    "s3": ["haría"],
    "p1": ["haríamos"],
    "p2": ["haríais"],
    "p3": ["harían"]
  },
  "In Pres Per": {
    "s1": ["he hecho"],
    "s2": ["has hecho"],
    "s3": ["ha hecho"],
    "p1": ["hemos hecho"],
    "p2": ["habéis hecho"],
    "p3": ["han hecho"]
  },
  "In Fut Per": {
    "s1": ["habré hecho"],
    "s2": ["habrás hecho"],
    "s3": ["habrá hecho"],
    "p1": ["habremos hecho"],
    "p2": ["habréis hecho"],
    "p3": ["habrán hecho"]
  },
  "In Pas Per": {
    "s1": ["había hecho"],
    "s2": ["habías hecho"],
    "s3": ["había hecho"],
    "p1": ["habíamos hecho"],
    "p2": ["habíais hecho"],
    "p3": ["habían hecho"]
  },
  "In Cond Per": {
    "s1": ["habría hecho"],
    "s2": ["habrías hecho"],
    "s3": ["habría hecho"],
    "p1": ["habríamos hecho"],
    "p2": ["habríais hecho"],
    "p3": ["habrían hecho"]
  },
  "Sub Pres": {
    "s1": ["haga"],
    "s2": ["hagas"],
    "s3": ["haga"],
    "p1": ["hagamos"],
    "p2": ["hagáis"],
    "p3": ["hagan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["haz"],
    "s3": ["haced"],
    "p1": [""],
    "p2": ["haga"],
    "p3": ["hagan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no hagas"],
    "s3": ["no hagáis"],
    "p1": [""],
    "p2": ["no haga"],
    "p3": ["no hagan"]
  },
  "In Pres Pro": {
    "s1": ["estoy haciendo"],
    "s2": ["estás haciendo"],
    "s3": ["está haciendo"],
    "p1": ["estamos haciendo"],
    "p2": ["estáis haciendo"],
    "p3": ["están haciendo"]
  }
}, {
  "inf": "hervir",
  "inf_eng": "to boil",
  "In Pres": {
    "s1": ["hiervo"],
    "s2": ["hierves"],
    "s3": ["hierve"],
    "p1": ["hervimos"],
    "p2": ["hervís"],
    "p3": ["hierven"]
  },
  "In Fut": {
    "s1": ["herviré"],
    "s2": ["hervirás"],
    "s3": ["hervirá"],
    "p1": ["herviremos"],
    "p2": ["herviréis"],
    "p3": ["hervirán"]
  },
  "In Imp": {
    "s1": ["hervía"],
    "s2": ["hervías"],
    "s3": ["hervía"],
    "p1": ["hervíamos"],
    "p2": ["hervíais"],
    "p3": ["hervían"]
  },
  "In Pret": {
    "s1": ["herví"],
    "s2": ["herviste"],
    "s3": ["hirvió"],
    "p1": ["hervimos"],
    "p2": ["hervisteis"],
    "p3": ["hirvieron"]
  },
  "In Cond": {
    "s1": ["herviría"],
    "s2": ["hervirías"],
    "s3": ["herviría"],
    "p1": ["herviríamos"],
    "p2": ["herviríais"],
    "p3": ["hervirían"]
  },
  "In Pres Per": {
    "s1": ["he hervido"],
    "s2": ["has hervido"],
    "s3": ["ha hervido"],
    "p1": ["hemos hervido"],
    "p2": ["habéis hervido"],
    "p3": ["han hervido"]
  },
  "In Fut Per": {
    "s1": ["habré hervido"],
    "s2": ["habrás hervido"],
    "s3": ["habrá hervido"],
    "p1": ["habremos hervido"],
    "p2": ["habréis hervido"],
    "p3": ["habrán hervido"]
  },
  "In Pas Per": {
    "s1": ["había hervido"],
    "s2": ["habías hervido"],
    "s3": ["había hervido"],
    "p1": ["habíamos hervido"],
    "p2": ["habíais hervido"],
    "p3": ["habían hervido"]
  },
  "In Cond Per": {
    "s1": ["habría hervido"],
    "s2": ["habrías hervido"],
    "s3": ["habría hervido"],
    "p1": ["habríamos hervido"],
    "p2": ["habríais hervido"],
    "p3": ["habrían hervido"]
  },
  "Sub Pres": {
    "s1": ["hierva"],
    "s2": ["hiervas"],
    "s3": ["hierva"],
    "p1": ["hirvamos"],
    "p2": ["hirváis"],
    "p3": ["hiervan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["hierve"],
    "s3": ["hervid"],
    "p1": [""],
    "p2": ["hierva"],
    "p3": ["hiervan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no hiervas"],
    "s3": ["no hirváis"],
    "p1": [""],
    "p2": ["no hierva"],
    "p3": ["no hiervan"]
  },
  "In Pres Pro": {
    "s1": ["estoy hirviendo"],
    "s2": ["estás hirviendo"],
    "s3": ["está hirviendo"],
    "p1": ["estamos hirviendo"],
    "p2": ["estáis hirviendo"],
    "p3": ["están hirviendo"]
  }
}, {
  "inf": "informar",
  "inf_eng": "to inform",
  "In Pres": {
    "s1": ["informo"],
    "s2": ["informas"],
    "s3": ["informa"],
    "p1": ["informamos"],
    "p2": ["informáis"],
    "p3": ["informan"]
  },
  "In Fut": {
    "s1": ["informaré"],
    "s2": ["informarás"],
    "s3": ["informará"],
    "p1": ["informaremos"],
    "p2": ["informaréis"],
    "p3": ["informarán"]
  },
  "In Imp": {
    "s1": ["informaba"],
    "s2": ["informabas"],
    "s3": ["informaba"],
    "p1": ["informábamos"],
    "p2": ["informabais"],
    "p3": ["informaban"]
  },
  "In Pret": {
    "s1": ["informé"],
    "s2": ["informaste"],
    "s3": ["informó"],
    "p1": ["informamos"],
    "p2": ["informasteis"],
    "p3": ["informaron"]
  },
  "In Cond": {
    "s1": ["informaría"],
    "s2": ["informarías"],
    "s3": ["informaría"],
    "p1": ["informaríamos"],
    "p2": ["informaríais"],
    "p3": ["informarían"]
  },
  "In Pres Per": {
    "s1": ["he informado"],
    "s2": ["has informado"],
    "s3": ["ha informado"],
    "p1": ["hemos informado"],
    "p2": ["habéis informado"],
    "p3": ["han informado"]
  },
  "In Fut Per": {
    "s1": ["habré informado"],
    "s2": ["habrás informado"],
    "s3": ["habrá informado"],
    "p1": ["habremos informado"],
    "p2": ["habréis informado"],
    "p3": ["habrán informado"]
  },
  "In Pas Per": {
    "s1": ["había informado"],
    "s2": ["habías informado"],
    "s3": ["había informado"],
    "p1": ["habíamos informado"],
    "p2": ["habíais informado"],
    "p3": ["habían informado"]
  },
  "In Cond Per": {
    "s1": ["habría informado"],
    "s2": ["habrías informado"],
    "s3": ["habría informado"],
    "p1": ["habríamos informado"],
    "p2": ["habríais informado"],
    "p3": ["habrían informado"]
  },
  "Sub Pres": {
    "s1": ["informe"],
    "s2": ["informes"],
    "s3": ["informe"],
    "p1": ["informemos"],
    "p2": ["informéis"],
    "p3": ["informen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["informa"],
    "s3": ["informad"],
    "p1": [""],
    "p2": ["informe"],
    "p3": ["informen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no informes"],
    "s3": ["no informéis"],
    "p1": [""],
    "p2": ["no informe"],
    "p3": ["no informen"]
  },
  "In Pres Pro": {
    "s1": ["estoy informando"],
    "s2": ["estás informando"],
    "s3": ["está informando"],
    "p1": ["estamos informando"],
    "p2": ["estáis informando"],
    "p3": ["están informando"]
  }
}, {
  "inf": "intentar",
  "inf_eng": "to try",
  "In Pres": {
    "s1": ["intento"],
    "s2": ["intentas"],
    "s3": ["intenta"],
    "p1": ["intentamos"],
    "p2": ["intentáis"],
    "p3": ["intentan"]
  },
  "In Fut": {
    "s1": ["intentaré"],
    "s2": ["intentarás"],
    "s3": ["intentará"],
    "p1": ["intentaremos"],
    "p2": ["intentaréis"],
    "p3": ["intentarán"]
  },
  "In Imp": {
    "s1": ["intentaba"],
    "s2": ["intentabas"],
    "s3": ["intentaba"],
    "p1": ["intentábamos"],
    "p2": ["intentabais"],
    "p3": ["intentaban"]
  },
  "In Pret": {
    "s1": ["intenté"],
    "s2": ["intentaste"],
    "s3": ["intentó"],
    "p1": ["intentamos"],
    "p2": ["intentasteis"],
    "p3": ["intentaron"]
  },
  "In Cond": {
    "s1": ["intentaría"],
    "s2": ["intentarías"],
    "s3": ["intentaría"],
    "p1": ["intentaríamos"],
    "p2": ["intentaríais"],
    "p3": ["intentarían"]
  },
  "In Pres Per": {
    "s1": ["he intentado"],
    "s2": ["has intentado"],
    "s3": ["ha intentado"],
    "p1": ["hemos intentado"],
    "p2": ["habéis intentado"],
    "p3": ["han intentado"]
  },
  "In Fut Per": {
    "s1": ["habré intentado"],
    "s2": ["habrás intentado"],
    "s3": ["habrá intentado"],
    "p1": ["habremos intentado"],
    "p2": ["habréis intentado"],
    "p3": ["habrán intentado"]
  },
  "In Pas Per": {
    "s1": ["había intentado"],
    "s2": ["habías intentado"],
    "s3": ["había intentado"],
    "p1": ["habíamos intentado"],
    "p2": ["habíais intentado"],
    "p3": ["habían intentado"]
  },
  "In Cond Per": {
    "s1": ["habría intentado"],
    "s2": ["habrías intentado"],
    "s3": ["habría intentado"],
    "p1": ["habríamos intentado"],
    "p2": ["habríais intentado"],
    "p3": ["habrían intentado"]
  },
  "Sub Pres": {
    "s1": ["intente"],
    "s2": ["intentes"],
    "s3": ["intente"],
    "p1": ["intentemos"],
    "p2": ["intentéis"],
    "p3": ["intenten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["intenta"],
    "s3": ["intentad"],
    "p1": [""],
    "p2": ["intente"],
    "p3": ["intenten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no intentes"],
    "s3": ["no intentéis"],
    "p1": [""],
    "p2": ["no intente"],
    "p3": ["no intenten"]
  },
  "In Pres Pro": {
    "s1": ["estoy intentando"],
    "s2": ["estás intentando"],
    "s3": ["está intentando"],
    "p1": ["estamos intentando"],
    "p2": ["estáis intentando"],
    "p3": ["están intentando"]
  }
}, {
  "inf": "ir",
  "inf_eng": "to go",
  "In Pres": {
    "s1": ["voy"],
    "s2": ["vas"],
    "s3": ["va"],
    "p1": ["vamos"],
    "p2": ["vais"],
    "p3": ["van"]
  },
  "In Fut": {
    "s1": ["iré"],
    "s2": ["irás"],
    "s3": ["irá"],
    "p1": ["iremos"],
    "p2": ["iréis"],
    "p3": ["irán"]
  },
  "In Imp": {
    "s1": ["iba"],
    "s2": ["ibas"],
    "s3": ["iba"],
    "p1": ["íbamos"],
    "p2": ["ibais"],
    "p3": ["iban"]
  },
  "In Pret": {
    "s1": ["fui"],
    "s2": ["fuiste"],
    "s3": ["fue"],
    "p1": ["fuimos"],
    "p2": ["fuisteis"],
    "p3": ["fueron"]
  },
  "In Cond": {
    "s1": ["iría"],
    "s2": ["irías"],
    "s3": ["iría"],
    "p1": ["iríamos"],
    "p2": ["iríais"],
    "p3": ["irían"]
  },
  "In Pres Per": {
    "s1": ["he ido"],
    "s2": ["has ido"],
    "s3": ["ha ido"],
    "p1": ["hemos ido"],
    "p2": ["habéis ido"],
    "p3": ["han ido"]
  },
  "In Fut Per": {
    "s1": ["habré ido"],
    "s2": ["habrás ido"],
    "s3": ["habrá ido"],
    "p1": ["habremos ido"],
    "p2": ["habréis ido"],
    "p3": ["habrán ido"]
  },
  "In Pas Per": {
    "s1": ["había ido"],
    "s2": ["habías ido"],
    "s3": ["había ido"],
    "p1": ["habíamos ido"],
    "p2": ["habíais ido"],
    "p3": ["habían ido"]
  },
  "In Cond Per": {
    "s1": ["habría ido"],
    "s2": ["habrías ido"],
    "s3": ["habría ido"],
    "p1": ["habríamos ido"],
    "p2": ["habríais ido"],
    "p3": ["habrían ido"]
  },
  "Sub Pres": {
    "s1": ["vaya"],
    "s2": ["vayas"],
    "s3": ["vaya"],
    "p1": ["vayamos"],
    "p2": ["vayáis"],
    "p3": ["vayan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["ve"],
    "s3": ["id"],
    "p1": [""],
    "p2": ["vaya"],
    "p3": ["vayan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no vayas"],
    "s3": ["no vayáis"],
    "p1": [""],
    "p2": ["no vaya"],
    "p3": ["no vayan"]
  },
  "In Pres Pro": {
    "s1": ["estoy yendo"],
    "s2": ["estás yendo"],
    "s3": ["está yendo"],
    "p1": ["estamos yendo"],
    "p2": ["estáis yendo"],
    "p3": ["están yendo"]
  }
}, {
  "inf": "jugar",
  "inf_eng": "to play",
  "In Pres": {
    "s1": ["juego"],
    "s2": ["juegas"],
    "s3": ["juega"],
    "p1": ["jugamos"],
    "p2": ["jugáis"],
    "p3": ["juegan"]
  },
  "In Fut": {
    "s1": ["jugaré"],
    "s2": ["jugarás"],
    "s3": ["jugará"],
    "p1": ["jugaremos"],
    "p2": ["jugaréis"],
    "p3": ["jugarán"]
  },
  "In Imp": {
    "s1": ["jugaba"],
    "s2": ["jugabas"],
    "s3": ["jugaba"],
    "p1": ["jugábamos"],
    "p2": ["jugabais"],
    "p3": ["jugaban"]
  },
  "In Pret": {
    "s1": ["jugué"],
    "s2": ["jugaste"],
    "s3": ["jugó"],
    "p1": ["jugamos"],
    "p2": ["jugasteis"],
    "p3": ["jugaron"]
  },
  "In Cond": {
    "s1": ["jugaría"],
    "s2": ["jugarías"],
    "s3": ["jugaría"],
    "p1": ["jugaríamos"],
    "p2": ["jugaríais"],
    "p3": ["jugarían"]
  },
  "In Pres Per": {
    "s1": ["he jugado"],
    "s2": ["has jugado"],
    "s3": ["ha jugado"],
    "p1": ["hemos jugado"],
    "p2": ["habéis jugado"],
    "p3": ["han jugado"]
  },
  "In Fut Per": {
    "s1": ["habré jugado"],
    "s2": ["habrás jugado"],
    "s3": ["habrá jugado"],
    "p1": ["habremos jugado"],
    "p2": ["habréis jugado"],
    "p3": ["habrán jugado"]
  },
  "In Pas Per": {
    "s1": ["había jugado"],
    "s2": ["habías jugado"],
    "s3": ["había jugado"],
    "p1": ["habíamos jugado"],
    "p2": ["habíais jugado"],
    "p3": ["habían jugado"]
  },
  "In Cond Per": {
    "s1": ["habría jugado"],
    "s2": ["habrías jugado"],
    "s3": ["habría jugado"],
    "p1": ["habríamos jugado"],
    "p2": ["habríais jugado"],
    "p3": ["habrían jugado"]
  },
  "Sub Pres": {
    "s1": ["juegue"],
    "s2": ["juegues"],
    "s3": ["juegue"],
    "p1": ["juguemos"],
    "p2": ["juguéis"],
    "p3": ["jueguen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["juega"],
    "s3": ["jugad"],
    "p1": [""],
    "p2": ["juegue"],
    "p3": ["jueguen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no juegues"],
    "s3": ["no juguéis"],
    "p1": [""],
    "p2": ["no juegue"],
    "p3": ["no jueguen"]
  },
  "In Pres Pro": {
    "s1": ["estoy jugando"],
    "s2": ["estás jugando"],
    "s3": ["está jugando"],
    "p1": ["estamos jugando"],
    "p2": ["estáis jugando"],
    "p3": ["están jugando"]
  }
}, {
  "inf": "leer",
  "inf_eng": "to read",
  "In Pres": {
    "s1": ["leo"],
    "s2": ["lees"],
    "s3": ["lee"],
    "p1": ["leemos"],
    "p2": ["leéis"],
    "p3": ["leen"]
  },
  "In Fut": {
    "s1": ["leeré"],
    "s2": ["leerás"],
    "s3": ["leerá"],
    "p1": ["leeremos"],
    "p2": ["leeréis"],
    "p3": ["leerán"]
  },
  "In Imp": {
    "s1": ["leía"],
    "s2": ["leías"],
    "s3": ["leía"],
    "p1": ["leíamos"],
    "p2": ["leíais"],
    "p3": ["leían"]
  },
  "In Pret": {
    "s1": ["leí"],
    "s2": ["leíste"],
    "s3": ["leyó"],
    "p1": ["leímos"],
    "p2": ["leísteis"],
    "p3": ["leyeron"]
  },
  "In Cond": {
    "s1": ["leería"],
    "s2": ["leerías"],
    "s3": ["leería"],
    "p1": ["leeríamos"],
    "p2": ["leeríais"],
    "p3": ["leerían"]
  },
  "In Pres Per": {
    "s1": ["he leído"],
    "s2": ["has leído"],
    "s3": ["ha leído"],
    "p1": ["hemos leído"],
    "p2": ["habéis leído"],
    "p3": ["han leído"]
  },
  "In Fut Per": {
    "s1": ["habré leído"],
    "s2": ["habrás leído"],
    "s3": ["habrá leído"],
    "p1": ["habremos leído"],
    "p2": ["habréis leído"],
    "p3": ["habrán leído"]
  },
  "In Pas Per": {
    "s1": ["había leído"],
    "s2": ["habías leído"],
    "s3": ["había leído"],
    "p1": ["habíamos leído"],
    "p2": ["habíais leído"],
    "p3": ["habían leído"]
  },
  "In Cond Per": {
    "s1": ["habría leído"],
    "s2": ["habrías leído"],
    "s3": ["habría leído"],
    "p1": ["habríamos leído"],
    "p2": ["habríais leído"],
    "p3": ["habrían leído"]
  },
  "Sub Pres": {
    "s1": ["lea"],
    "s2": ["leas"],
    "s3": ["lea"],
    "p1": ["leamos"],
    "p2": ["leáis"],
    "p3": ["lean"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["lee"],
    "s3": ["leed"],
    "p1": [""],
    "p2": ["lea"],
    "p3": ["lean"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no leas"],
    "s3": ["no leáis"],
    "p1": [""],
    "p2": ["no lea"],
    "p3": ["no lean"]
  },
  "In Pres Pro": {
    "s1": ["estoy leyendo"],
    "s2": ["estás leyendo"],
    "s3": ["está leyendo"],
    "p1": ["estamos leyendo"],
    "p2": ["estáis leyendo"],
    "p3": ["están leyendo"]
  }
}, {
  "inf": "levantar",
  "inf_eng": "to raise",
  "In Pres": {
    "s1": ["levanto"],
    "s2": ["levantas"],
    "s3": ["levanta"],
    "p1": ["levantamos"],
    "p2": ["levantáis"],
    "p3": ["levantan"]
  },
  "In Fut": {
    "s1": ["levantaré"],
    "s2": ["levantarás"],
    "s3": ["levantará"],
    "p1": ["levantaremos"],
    "p2": ["levantaréis"],
    "p3": ["levantarán"]
  },
  "In Imp": {
    "s1": ["levantaba"],
    "s2": ["levantabas"],
    "s3": ["levantaba"],
    "p1": ["levantábamos"],
    "p2": ["levantabais"],
    "p3": ["levantaban"]
  },
  "In Pret": {
    "s1": ["levanté"],
    "s2": ["levantaste"],
    "s3": ["levantó"],
    "p1": ["levantamos"],
    "p2": ["levantasteis"],
    "p3": ["levantaron"]
  },
  "In Cond": {
    "s1": ["levantaría"],
    "s2": ["levantarías"],
    "s3": ["levantaría"],
    "p1": ["levantaríamos"],
    "p2": ["levantaríais"],
    "p3": ["levantarían"]
  },
  "In Pres Per": {
    "s1": ["he levantado"],
    "s2": ["has levantado"],
    "s3": ["ha levantado"],
    "p1": ["hemos levantado"],
    "p2": ["habéis levantado"],
    "p3": ["han levantado"]
  },
  "In Fut Per": {
    "s1": ["habré levantado"],
    "s2": ["habrás levantado"],
    "s3": ["habrá levantado"],
    "p1": ["habremos levantado"],
    "p2": ["habréis levantado"],
    "p3": ["habrán levantado"]
  },
  "In Pas Per": {
    "s1": ["había levantado"],
    "s2": ["habías levantado"],
    "s3": ["había levantado"],
    "p1": ["habíamos levantado"],
    "p2": ["habíais levantado"],
    "p3": ["habían levantado"]
  },
  "In Cond Per": {
    "s1": ["habría levantado"],
    "s2": ["habrías levantado"],
    "s3": ["habría levantado"],
    "p1": ["habríamos levantado"],
    "p2": ["habríais levantado"],
    "p3": ["habrían levantado"]
  },
  "Sub Pres": {
    "s1": ["levante"],
    "s2": ["levantes"],
    "s3": ["levante"],
    "p1": ["levantemos"],
    "p2": ["levantéis"],
    "p3": ["levanten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["levanta"],
    "s3": ["levantad"],
    "p1": [""],
    "p2": ["levante"],
    "p3": ["levanten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no levantes"],
    "s3": ["no levantéis"],
    "p1": [""],
    "p2": ["no levante"],
    "p3": ["no levanten"]
  },
  "In Pres Pro": {
    "s1": ["estoy levantando"],
    "s2": ["estás levantando"],
    "s3": ["está levantando"],
    "p1": ["estamos levantando"],
    "p2": ["estáis levantando"],
    "p3": ["están levantando"]
  }
}, {
  "inf": "levantarse",
  "inf_eng": "to get up",
  "In Pres": {
    "s1": ["me levanto"],
    "s2": ["te levantas"],
    "s3": ["se levanta"],
    "p1": ["nos levantamos"],
    "p2": ["os levantáis"],
    "p3": ["se levantan"]
  },
  "In Fut": {
    "s1": ["me levantaré"],
    "s2": ["te levantarás"],
    "s3": ["se levantará"],
    "p1": ["nos levantaremos"],
    "p2": ["os levantaréis"],
    "p3": ["se levantarán"]
  },
  "In Imp": {
    "s1": ["me levantaba"],
    "s2": ["te levantabas"],
    "s3": ["se levantaba"],
    "p1": ["nos levantábamos"],
    "p2": ["os levantabais"],
    "p3": ["se levantaban"]
  },
  "In Pret": {
    "s1": ["me levanté"],
    "s2": ["te levantaste"],
    "s3": ["se levantó"],
    "p1": ["nos levantamos"],
    "p2": ["levantasteis"],
    "p3": ["se levantaron"]
  },
  "In Cond": {
    "s1": ["me levantaría"],
    "s2": ["te levantarías"],
    "s3": ["se levantaría"],
    "p1": ["nos levantaríamos"],
    "p2": ["os levantaríais"],
    "p3": ["se levantarían"]
  },
  "In Pres Per": {
    "s1": ["me he levantado"],
    "s2": ["te has levantado"],
    "s3": ["se ha levantado"],
    "p1": ["nos hemos levantado"],
    "p2": ["os habéis levantado"],
    "p3": ["se han levantado"]
  },
  "In Fut Per": {
    "s1": ["me habré levantado"],
    "s2": ["te habrás levantado"],
    "s3": ["se habrá levantado"],
    "p1": ["nos habremos levantado"],
    "p2": ["os habréis levantado"],
    "p3": ["se habrán levantado"]
  },
  "In Pas Per": {
    "s1": ["me había levantado"],
    "s2": ["te habías levantado"],
    "s3": ["se había levantado"],
    "p1": ["nos habíamos levantado"],
    "p2": ["os habíais levantado"],
    "p3": ["se habían levantado"]
  },
  "In Cond Per": {
    "s1": ["me habría levantado"],
    "s2": ["te habrías levantado"],
    "s3": ["se habría levantado"],
    "p1": ["nos habríamos levantado"],
    "p2": ["os habríais levantado"],
    "p3": ["se habrían levantado"]
  },
  "Sub Pres": {
    "s1": ["me levante"],
    "s2": ["te levantes"],
    "s3": ["se levante"],
    "p1": ["nos levantemos"],
    "p2": ["os levantéis"],
    "p3": ["se levanten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["levántate"],
    "s3": ["levantaos"],
    "p1": [""],
    "p2": ["levántese"],
    "p3": ["levántense"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no te levantes"],
    "s3": ["no os levantéis"],
    "p1": [""],
    "p2": ["no se levante"],
    "p3": ["no se levanten"]
  },
  "In Pres Pro": {
    "s1": ["me estoy levantándo", "estoy levantándome"],
    "s2": ["te estás levantándo", "estás levantándote"],
    "s3": ["se está levantándo", "está levantándose"],
    "p1": ["nos estamos levantándo", "estamos levantándonos"],
    "p2": ["os estáis levantándo", "estáis levantándoos"],
    "p3": ["se están levantándo", "están levantándose"]
  }
}, {
  "inf": "limpiar",
  "inf_eng": "to clean",
  "In Pres": {
    "s1": ["limpio"],
    "s2": ["limpias"],
    "s3": ["limpia"],
    "p1": ["limpiamos"],
    "p2": ["limpiáis"],
    "p3": ["limpian"]
  },
  "In Fut": {
    "s1": ["limpiaré"],
    "s2": ["limpiarás"],
    "s3": ["limpiará"],
    "p1": ["limpiaremos"],
    "p2": ["limpiaréis"],
    "p3": ["limpiarán"]
  },
  "In Imp": {
    "s1": ["limpiaba"],
    "s2": ["limpiabas"],
    "s3": ["limpiaba"],
    "p1": ["limpiábamos"],
    "p2": ["limpiabais"],
    "p3": ["limpiaban"]
  },
  "In Pret": {
    "s1": ["limpié"],
    "s2": ["limpiaste"],
    "s3": ["limpió"],
    "p1": ["limpiamos"],
    "p2": ["limpiasteis"],
    "p3": ["limpiaron"]
  },
  "In Cond": {
    "s1": ["limpiaría"],
    "s2": ["limpiarías"],
    "s3": ["limpiaría"],
    "p1": ["limpiaríamos"],
    "p2": ["limpiaríais"],
    "p3": ["limpiarían"]
  },
  "In Pres Per": {
    "s1": ["he limpiado"],
    "s2": ["has limpiado"],
    "s3": ["ha limpiado"],
    "p1": ["hemos limpiado"],
    "p2": ["habéis limpiado"],
    "p3": ["han limpiado"]
  },
  "In Fut Per": {
    "s1": ["habré limpiado"],
    "s2": ["habrás limpiado"],
    "s3": ["habrá limpiado"],
    "p1": ["habremos limpiado"],
    "p2": ["habréis limpiado"],
    "p3": ["habrán limpiado"]
  },
  "In Pas Per": {
    "s1": ["había limpiado"],
    "s2": ["habías limpiado"],
    "s3": ["había limpiado"],
    "p1": ["habíamos limpiado"],
    "p2": ["habíais limpiado"],
    "p3": ["habían limpiado"]
  },
  "In Cond Per": {
    "s1": ["habría limpiado"],
    "s2": ["habrías limpiado"],
    "s3": ["habría limpiado"],
    "p1": ["habríamos limpiado"],
    "p2": ["habríais limpiado"],
    "p3": ["habrían limpiado"]
  },
  "Sub Pres": {
    "s1": ["limpie"],
    "s2": ["limpies"],
    "s3": ["limpie"],
    "p1": ["limpiemos"],
    "p2": ["limpiéis"],
    "p3": ["limpien"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["limpia"],
    "s3": ["limpiad"],
    "p1": [""],
    "p2": ["limpie"],
    "p3": ["limpien"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no limpies"],
    "s3": ["no limpiéis"],
    "p1": [""],
    "p2": ["no limpie"],
    "p3": ["no limpien"]
  },
  "In Pres Pro": {
    "s1": ["estoy limpiando"],
    "s2": ["estás limpiando"],
    "s3": ["está limpiando"],
    "p1": ["estamos limpiando"],
    "p2": ["estáis limpiando"],
    "p3": ["están limpiando"]
  }
}, {
  "inf": "llegar",
  "inf_eng": "to arrive",
  "In Pres": {
    "s1": ["llego"],
    "s2": ["llegas"],
    "s3": ["llega"],
    "p1": ["llegamos"],
    "p2": ["llegáis"],
    "p3": ["llegan"]
  },
  "In Fut": {
    "s1": ["llegaré"],
    "s2": ["llegarás"],
    "s3": ["llegará"],
    "p1": ["llegaremos"],
    "p2": ["llegaréis"],
    "p3": ["llegarán"]
  },
  "In Imp": {
    "s1": ["llegaba"],
    "s2": ["llegabas"],
    "s3": ["llegaba"],
    "p1": ["llegábamos"],
    "p2": ["llegabais"],
    "p3": ["llegaban"]
  },
  "In Pret": {
    "s1": ["llegué"],
    "s2": ["llegaste"],
    "s3": ["llegó"],
    "p1": ["llegamos"],
    "p2": ["llegasteis"],
    "p3": ["llegaron"]
  },
  "In Cond": {
    "s1": ["llegaría"],
    "s2": ["llegarías"],
    "s3": ["llegaría"],
    "p1": ["llegaríamos"],
    "p2": ["llegaríais"],
    "p3": ["llegarían"]
  },
  "In Pres Per": {
    "s1": ["he llegado"],
    "s2": ["has llegado"],
    "s3": ["ha llegado"],
    "p1": ["hemos llegado"],
    "p2": ["habéis llegado"],
    "p3": ["han llegado"]
  },
  "In Fut Per": {
    "s1": ["habré llegado"],
    "s2": ["habrás llegado"],
    "s3": ["habrá llegado"],
    "p1": ["habremos llegado"],
    "p2": ["habréis llegado"],
    "p3": ["habrán llegado"]
  },
  "In Pas Per": {
    "s1": ["había llegado"],
    "s2": ["habías llegado"],
    "s3": ["había llegado"],
    "p1": ["habíamos llegado"],
    "p2": ["habíais llegado"],
    "p3": ["habían llegado"]
  },
  "In Cond Per": {
    "s1": ["habría llegado"],
    "s2": ["habrías llegado"],
    "s3": ["habría llegado"],
    "p1": ["habríamos llegado"],
    "p2": ["habríais llegado"],
    "p3": ["habrían llegado"]
  },
  "Sub Pres": {
    "s1": ["llegue"],
    "s2": ["llegues"],
    "s3": ["llegue"],
    "p1": ["lleguemos"],
    "p2": ["lleguéis"],
    "p3": ["lleguen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["llega"],
    "s3": ["llegad"],
    "p1": [""],
    "p2": ["llegue"],
    "p3": ["lleguen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no llegues"],
    "s3": ["no lleguéis"],
    "p1": [""],
    "p2": ["no llegue"],
    "p3": ["no lleguen"]
  },
  "In Pres Pro": {
    "s1": ["estoy llegando"],
    "s2": ["estás llegando"],
    "s3": ["está llegando"],
    "p1": ["estamos llegando"],
    "p2": ["estáis llegando"],
    "p3": ["están llegando"]
  }
}, {
  "inf": "llenar",
  "inf_eng": "to fill",
  "In Pres": {
    "s1": ["lleno"],
    "s2": ["llenas"],
    "s3": ["llena"],
    "p1": ["llenamos"],
    "p2": ["llenáis"],
    "p3": ["llenan"]
  },
  "In Fut": {
    "s1": ["llenaré"],
    "s2": ["llenarás"],
    "s3": ["llenará"],
    "p1": ["llenaremos"],
    "p2": ["llenaréis"],
    "p3": ["llenarán"]
  },
  "In Imp": {
    "s1": ["llenaba"],
    "s2": ["llenabas"],
    "s3": ["llenaba"],
    "p1": ["llenábamos"],
    "p2": ["llenabais"],
    "p3": ["llenaban"]
  },
  "In Pret": {
    "s1": ["llené"],
    "s2": ["llenaste"],
    "s3": ["llenó"],
    "p1": ["llenamos"],
    "p2": ["llenasteis"],
    "p3": ["llenaron"]
  },
  "In Cond": {
    "s1": ["llenaría"],
    "s2": ["llenarías"],
    "s3": ["llenaría"],
    "p1": ["llenaríamos"],
    "p2": ["llenaríais"],
    "p3": ["llenarían"]
  },
  "In Pres Per": {
    "s1": ["he llenado"],
    "s2": ["has llenado"],
    "s3": ["ha llenado"],
    "p1": ["hemos llenado"],
    "p2": ["habéis llenado"],
    "p3": ["han llenado"]
  },
  "In Fut Per": {
    "s1": ["habré llenado"],
    "s2": ["habrás llenado"],
    "s3": ["habrá llenado"],
    "p1": ["habremos llenado"],
    "p2": ["habréis llenado"],
    "p3": ["habrán llenado"]
  },
  "In Pas Per": {
    "s1": ["había llenado"],
    "s2": ["habías llenado"],
    "s3": ["había llenado"],
    "p1": ["habíamos llenado"],
    "p2": ["habíais llenado"],
    "p3": ["habían llenado"]
  },
  "In Cond Per": {
    "s1": ["habría llenado"],
    "s2": ["habrías llenado"],
    "s3": ["habría llenado"],
    "p1": ["habríamos llenado"],
    "p2": ["habríais llenado"],
    "p3": ["habrían llenado"]
  },
  "Sub Pres": {
    "s1": ["llene"],
    "s2": ["llenes"],
    "s3": ["llene"],
    "p1": ["llenemos"],
    "p2": ["llenéis"],
    "p3": ["llenen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["llena"],
    "s3": ["llenad"],
    "p1": [""],
    "p2": ["llene"],
    "p3": ["llenen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no llenes"],
    "s3": ["no llenéis"],
    "p1": [""],
    "p2": ["no llene"],
    "p3": ["no llenen"]
  },
  "In Pres Pro": {
    "s1": ["estoy llenando"],
    "s2": ["estás llenando"],
    "s3": ["está llenando"],
    "p1": ["estamos llenando"],
    "p2": ["estáis llenando"],
    "p3": ["están llenando"]
  }
}, {
  "inf": "llevar",
  "inf_eng": "to carry",
  "In Pres": {
    "s1": ["llevo"],
    "s2": ["llevas"],
    "s3": ["lleva"],
    "p1": ["llevamos"],
    "p2": ["lleváis"],
    "p3": ["llevan"]
  },
  "In Fut": {
    "s1": ["llevaré"],
    "s2": ["llevarás"],
    "s3": ["llevará"],
    "p1": ["llevaremos"],
    "p2": ["llevaréis"],
    "p3": ["llevarán"]
  },
  "In Imp": {
    "s1": ["llevaba"],
    "s2": ["llevabas"],
    "s3": ["llevaba"],
    "p1": ["llevábamos"],
    "p2": ["llevabais"],
    "p3": ["llevaban"]
  },
  "In Pret": {
    "s1": ["llevé"],
    "s2": ["llevaste"],
    "s3": ["llevó"],
    "p1": ["llevamos"],
    "p2": ["llevasteis"],
    "p3": ["llevaron"]
  },
  "In Cond": {
    "s1": ["llevaría"],
    "s2": ["llevarías"],
    "s3": ["llevaría"],
    "p1": ["llevaríamos"],
    "p2": ["llevaríais"],
    "p3": ["llevarían"]
  },
  "In Pres Per": {
    "s1": ["he llevado"],
    "s2": ["has llevado"],
    "s3": ["ha llevado"],
    "p1": ["hemos llevado"],
    "p2": ["habéis llevado"],
    "p3": ["han llevado"]
  },
  "In Fut Per": {
    "s1": ["habré llevado"],
    "s2": ["habrás llevado"],
    "s3": ["habrá llevado"],
    "p1": ["habremos llevado"],
    "p2": ["habréis llevado"],
    "p3": ["habrán llevado"]
  },
  "In Pas Per": {
    "s1": ["había llevado"],
    "s2": ["habías llevado"],
    "s3": ["había llevado"],
    "p1": ["habíamos llevado"],
    "p2": ["habíais llevado"],
    "p3": ["habían llevado"]
  },
  "In Cond Per": {
    "s1": ["habría llevado"],
    "s2": ["habrías llevado"],
    "s3": ["habría llevado"],
    "p1": ["habríamos llevado"],
    "p2": ["habríais llevado"],
    "p3": ["habrían llevado"]
  },
  "Sub Pres": {
    "s1": ["lleve"],
    "s2": ["lleves"],
    "s3": ["lleve"],
    "p1": ["llevemos"],
    "p2": ["llevéis"],
    "p3": ["lleven"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["lleva"],
    "s3": ["llevad"],
    "p1": [""],
    "p2": ["lleve"],
    "p3": ["lleven"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no lleves"],
    "s3": ["no llevéis"],
    "p1": [""],
    "p2": ["no lleve"],
    "p3": ["no lleven"]
  },
  "In Pres Pro": {
    "s1": ["estoy llevando"],
    "s2": ["estás llevando"],
    "s3": ["está llevando"],
    "p1": ["estamos llevando"],
    "p2": ["estáis llevando"],
    "p3": ["están llevando"]
  }
}, {
  "inf": "llorar",
  "inf_eng": "to cry",
  "In Pres": {
    "s1": ["lloro"],
    "s2": ["lloras"],
    "s3": ["llora"],
    "p1": ["lloramos"],
    "p2": ["lloráis"],
    "p3": ["lloran"]
  },
  "In Fut": {
    "s1": ["lloraré"],
    "s2": ["llorarás"],
    "s3": ["llorará"],
    "p1": ["lloraremos"],
    "p2": ["lloraréis"],
    "p3": ["llorarán"]
  },
  "In Imp": {
    "s1": ["lloraba"],
    "s2": ["llorabas"],
    "s3": ["lloraba"],
    "p1": ["llorábamos"],
    "p2": ["llorabais"],
    "p3": ["lloraban"]
  },
  "In Pret": {
    "s1": ["lloré"],
    "s2": ["lloraste"],
    "s3": ["lloró"],
    "p1": ["lloramos"],
    "p2": ["llorasteis"],
    "p3": ["lloraron"]
  },
  "In Cond": {
    "s1": ["lloraría"],
    "s2": ["llorarías"],
    "s3": ["lloraría"],
    "p1": ["lloraríamos"],
    "p2": ["lloraríais"],
    "p3": ["llorarían"]
  },
  "In Pres Per": {
    "s1": ["he llorado"],
    "s2": ["has llorado"],
    "s3": ["ha llorado"],
    "p1": ["hemos llorado"],
    "p2": ["habéis llorado"],
    "p3": ["han llorado"]
  },
  "In Fut Per": {
    "s1": ["habré llorado"],
    "s2": ["habrás llorado"],
    "s3": ["habrá llorado"],
    "p1": ["habremos llorado"],
    "p2": ["habréis llorado"],
    "p3": ["habrán llorado"]
  },
  "In Pas Per": {
    "s1": ["había llorado"],
    "s2": ["habías llorado"],
    "s3": ["había llorado"],
    "p1": ["habíamos llorado"],
    "p2": ["habíais llorado"],
    "p3": ["habían llorado"]
  },
  "In Cond Per": {
    "s1": ["habría llorado"],
    "s2": ["habrías llorado"],
    "s3": ["habría llorado"],
    "p1": ["habríamos llorado"],
    "p2": ["habríais llorado"],
    "p3": ["habrían llorado"]
  },
  "Sub Pres": {
    "s1": ["llore"],
    "s2": ["llores"],
    "s3": ["llore"],
    "p1": ["lloremos"],
    "p2": ["lloréis"],
    "p3": ["lloren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["llora"],
    "s3": ["llorad"],
    "p1": [""],
    "p2": ["llore"],
    "p3": ["lloren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no llores"],
    "s3": ["no lloréis"],
    "p1": [""],
    "p2": ["no llore"],
    "p3": ["no lloren"]
  },
  "In Pres Pro": {
    "s1": ["estoy llorando"],
    "s2": ["estás llorando"],
    "s3": ["está llorando"],
    "p1": ["estamos llorando"],
    "p2": ["estáis llorando"],
    "p3": ["están llorando"]
  }
}, {
  "inf": "llover",
  "inf_eng": "to rain",
  "In Pres": {
    "s1": [""],
    "s2": [""],
    "s3": ["llueve"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "In Fut": {
    "s1": [""],
    "s2": [""],
    "s3": ["lloverá"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "In Imp": {
    "s1": [""],
    "s2": [""],
    "s3": ["llovía"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "In Pret": {
    "s1": [""],
    "s2": [""],
    "s3": ["llovió"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "In Cond": {
    "s1": [""],
    "s2": [""],
    "s3": ["llovería"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "In Pres Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["ha llovido"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "In Fut Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["habrá llovido"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "In Pas Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["había llovido"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "In Cond Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["habría llovido"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "Sub Pres": {
    "s1": [""],
    "s2": [""],
    "s3": ["llueva"],
    "p1": [""],
    "p2": [""],
    "p3": [""]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["llueve"],
    "s3": ["lloved"],
    "p1": [""],
    "p2": ["llueva"],
    "p3": ["lluevan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no lluevas"],
    "s3": ["no llováis"],
    "p1": [""],
    "p2": ["no llueva"],
    "p3": ["no lluevan"]
  },
  "In Pres Pro": {
    "s1": ["estoy lloviendo"],
    "s2": ["estás lloviendo"],
    "s3": ["está lloviendo"],
    "p1": ["estamos lloviendo"],
    "p2": ["estáis lloviendo"],
    "p3": ["están lloviendo"]
  }
}, {
  "inf": "luchar",
  "inf_eng": "to fight",
  "In Pres": {
    "s1": ["lucho"],
    "s2": ["luchas"],
    "s3": ["lucha"],
    "p1": ["luchamos"],
    "p2": ["lucháis"],
    "p3": ["luchan"]
  },
  "In Fut": {
    "s1": ["lucharé"],
    "s2": ["lucharás"],
    "s3": ["luchará"],
    "p1": ["lucharemos"],
    "p2": ["lucharéis"],
    "p3": ["lucharán"]
  },
  "In Imp": {
    "s1": ["luchaba"],
    "s2": ["luchabas"],
    "s3": ["luchaba"],
    "p1": ["luchábamos"],
    "p2": ["luchabais"],
    "p3": ["luchaban"]
  },
  "In Pret": {
    "s1": ["luché"],
    "s2": ["luchaste"],
    "s3": ["luchó"],
    "p1": ["luchamos"],
    "p2": ["luchasteis"],
    "p3": ["lucharon"]
  },
  "In Cond": {
    "s1": ["lucharía"],
    "s2": ["lucharías"],
    "s3": ["lucharía"],
    "p1": ["lucharíamos"],
    "p2": ["lucharíais"],
    "p3": ["lucharían"]
  },
  "In Pres Per": {
    "s1": ["he luchado"],
    "s2": ["has luchado"],
    "s3": ["ha luchado"],
    "p1": ["hemos luchado"],
    "p2": ["habéis luchado"],
    "p3": ["han luchado"]
  },
  "In Fut Per": {
    "s1": ["habré luchado"],
    "s2": ["habrás luchado"],
    "s3": ["habrá luchado"],
    "p1": ["habremos luchado"],
    "p2": ["habréis luchado"],
    "p3": ["habrán luchado"]
  },
  "In Pas Per": {
    "s1": ["había luchado"],
    "s2": ["habías luchado"],
    "s3": ["había luchado"],
    "p1": ["habíamos luchado"],
    "p2": ["habíais luchado"],
    "p3": ["habían luchado"]
  },
  "In Cond Per": {
    "s1": ["habría luchado"],
    "s2": ["habrías luchado"],
    "s3": ["habría luchado"],
    "p1": ["habríamos luchado"],
    "p2": ["habríais luchado"],
    "p3": ["habrían luchado"]
  },
  "Sub Pres": {
    "s1": ["luche"],
    "s2": ["luches"],
    "s3": ["luche"],
    "p1": ["luchemos"],
    "p2": ["luchéis"],
    "p3": ["luchen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["lucha"],
    "s3": ["luchad"],
    "p1": [""],
    "p2": ["luche"],
    "p3": ["luchen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no luches"],
    "s3": ["no luchéis"],
    "p1": [""],
    "p2": ["no luche"],
    "p3": ["no luchen"]
  },
  "In Pres Pro": {
    "s1": ["estoy luchando"],
    "s2": ["estás luchando"],
    "s3": ["está luchando"],
    "p1": ["estamos luchando"],
    "p2": ["estáis luchando"],
    "p3": ["están luchando"]
  }
}, {
  "inf": "manejar",
  "inf_eng": "to drive",
  "In Pres": {
    "s1": ["manejo"],
    "s2": ["manejas"],
    "s3": ["maneja"],
    "p1": ["manejamos"],
    "p2": ["manejáis"],
    "p3": ["manejan"]
  },
  "In Fut": {
    "s1": ["manejaré"],
    "s2": ["manejarás"],
    "s3": ["manejará"],
    "p1": ["manejaremos"],
    "p2": ["manejaréis"],
    "p3": ["manejarán"]
  },
  "In Imp": {
    "s1": ["manejaba"],
    "s2": ["manejabas"],
    "s3": ["manejaba"],
    "p1": ["manejábamos"],
    "p2": ["manejabais"],
    "p3": ["manejaban"]
  },
  "In Pret": {
    "s1": ["manejé"],
    "s2": ["manejaste"],
    "s3": ["manejó"],
    "p1": ["manejamos"],
    "p2": ["manejasteis"],
    "p3": ["manejaron"]
  },
  "In Cond": {
    "s1": ["manejaría"],
    "s2": ["manejarías"],
    "s3": ["manejaría"],
    "p1": ["manejaríamos"],
    "p2": ["manejaríais"],
    "p3": ["manejarían"]
  },
  "In Pres Per": {
    "s1": ["he manejado"],
    "s2": ["has manejado"],
    "s3": ["ha manejado"],
    "p1": ["hemos manejado"],
    "p2": ["habéis manejado"],
    "p3": ["han manejado"]
  },
  "In Fut Per": {
    "s1": ["habré manejado"],
    "s2": ["habrás manejado"],
    "s3": ["habrá manejado"],
    "p1": ["habremos manejado"],
    "p2": ["habréis manejado"],
    "p3": ["habrán manejado"]
  },
  "In Pas Per": {
    "s1": ["había manejado"],
    "s2": ["habías manejado"],
    "s3": ["había manejado"],
    "p1": ["habíamos manejado"],
    "p2": ["habíais manejado"],
    "p3": ["habían manejado"]
  },
  "In Cond Per": {
    "s1": ["habría manejado"],
    "s2": ["habrías manejado"],
    "s3": ["habría manejado"],
    "p1": ["habríamos manejado"],
    "p2": ["habríais manejado"],
    "p3": ["habrían manejado"]
  },
  "Sub Pres": {
    "s1": ["maneje"],
    "s2": ["manejes"],
    "s3": ["maneje"],
    "p1": ["manejemos"],
    "p2": ["manejéis"],
    "p3": ["manejen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["maneja"],
    "s3": ["manejad"],
    "p1": [""],
    "p2": ["maneje"],
    "p3": ["manejen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no manejes"],
    "s3": ["no manejéis"],
    "p1": [""],
    "p2": ["no maneje"],
    "p3": ["no manejen"]
  },
  "In Pres Pro": {
    "s1": ["estoy manejando"],
    "s2": ["estás manejando"],
    "s3": ["está manejando"],
    "p1": ["estamos manejando"],
    "p2": ["estáis manejando"],
    "p3": ["están manejando"]
  }
}, {
  "inf": "mantener",
  "inf_eng": "to maintain",
  "In Pres": {
    "s1": ["mantengo"],
    "s2": ["mantienes"],
    "s3": ["mantiene"],
    "p1": ["mantenemos"],
    "p2": ["mantenéis"],
    "p3": ["mantienen"]
  },
  "In Fut": {
    "s1": ["mantendré"],
    "s2": ["mantendrás"],
    "s3": ["mantendrá"],
    "p1": ["mantendremos"],
    "p2": ["mantendréis"],
    "p3": ["mantendrán"]
  },
  "In Imp": {
    "s1": ["mantenía"],
    "s2": ["mantenías"],
    "s3": ["mantenía"],
    "p1": ["manteníamos"],
    "p2": ["manteníais"],
    "p3": ["mantenían"]
  },
  "In Pret": {
    "s1": ["mantuve"],
    "s2": ["mantuviste"],
    "s3": ["mantuvo"],
    "p1": ["mantuvimos"],
    "p2": ["mantuvisteis"],
    "p3": ["mantuvieron"]
  },
  "In Cond": {
    "s1": ["mantendría"],
    "s2": ["mantendrías"],
    "s3": ["mantendría"],
    "p1": ["mantendríamos"],
    "p2": ["mantendríais"],
    "p3": ["mantendrían"]
  },
  "In Pres Per": {
    "s1": ["he mantenido"],
    "s2": ["has mantenido"],
    "s3": ["ha mantenido"],
    "p1": ["hemos mantenido"],
    "p2": ["habéis mantenido"],
    "p3": ["han mantenido"]
  },
  "In Fut Per": {
    "s1": ["habré mantenido"],
    "s2": ["habrás mantenido"],
    "s3": ["habrá mantenido"],
    "p1": ["habremos mantenido"],
    "p2": ["habréis mantenido"],
    "p3": ["habrán mantenido"]
  },
  "In Pas Per": {
    "s1": ["había mantenido"],
    "s2": ["habías mantenido"],
    "s3": ["había mantenido"],
    "p1": ["habíamos mantenido"],
    "p2": ["habíais mantenido"],
    "p3": ["habían mantenido"]
  },
  "In Cond Per": {
    "s1": ["habría mantenido"],
    "s2": ["habrías mantenido"],
    "s3": ["habría mantenido"],
    "p1": ["habríamos mantenido"],
    "p2": ["habríais mantenido"],
    "p3": ["habrían mantenido"]
  },
  "Sub Pres": {
    "s1": ["mantenga"],
    "s2": ["mantengas"],
    "s3": ["mantenga"],
    "p1": ["mantengamos"],
    "p2": ["mantengáis"],
    "p3": ["mantengan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["mantén"],
    "s3": ["mantened"],
    "p1": [""],
    "p2": ["mantenga"],
    "p3": ["mantengan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no mantengas"],
    "s3": ["no mantengáis"],
    "p1": [""],
    "p2": ["no mantenga"],
    "p3": ["no mantengan"]
  },
  "In Pres Pro": {
    "s1": ["estoy manteniendo"],
    "s2": ["estás manteniendo"],
    "s3": ["está manteniendo"],
    "p1": ["estamos manteniendo"],
    "p2": ["estáis manteniendo"],
    "p3": ["están manteniendo"]
  }
}, {
  "inf": "matar",
  "inf_eng": "to kill",
  "In Pres": {
    "s1": ["mato"],
    "s2": ["matas"],
    "s3": ["mata"],
    "p1": ["matamos"],
    "p2": ["matáis"],
    "p3": ["matan"]
  },
  "In Fut": {
    "s1": ["mataré"],
    "s2": ["matarás"],
    "s3": ["matará"],
    "p1": ["mataremos"],
    "p2": ["mataréis"],
    "p3": ["matarán"]
  },
  "In Imp": {
    "s1": ["mataba"],
    "s2": ["matabas"],
    "s3": ["mataba"],
    "p1": ["matábamos"],
    "p2": ["matabais"],
    "p3": ["mataban"]
  },
  "In Pret": {
    "s1": ["maté"],
    "s2": ["mataste"],
    "s3": ["mató"],
    "p1": ["matamos"],
    "p2": ["matasteis"],
    "p3": ["mataron"]
  },
  "In Cond": {
    "s1": ["mataría"],
    "s2": ["matarías"],
    "s3": ["mataría"],
    "p1": ["mataríamos"],
    "p2": ["mataríais"],
    "p3": ["matarían"]
  },
  "In Pres Per": {
    "s1": ["he matado"],
    "s2": ["has matado"],
    "s3": ["ha matado"],
    "p1": ["hemos matado"],
    "p2": ["habéis matado"],
    "p3": ["han matado"]
  },
  "In Fut Per": {
    "s1": ["habré matado"],
    "s2": ["habrás matado"],
    "s3": ["habrá matado"],
    "p1": ["habremos matado"],
    "p2": ["habréis matado"],
    "p3": ["habrán matado"]
  },
  "In Pas Per": {
    "s1": ["había matado"],
    "s2": ["habías matado"],
    "s3": ["había matado"],
    "p1": ["habíamos matado"],
    "p2": ["habíais matado"],
    "p3": ["habían matado"]
  },
  "In Cond Per": {
    "s1": ["habría matado"],
    "s2": ["habrías matado"],
    "s3": ["habría matado"],
    "p1": ["habríamos matado"],
    "p2": ["habríais matado"],
    "p3": ["habrían matado"]
  },
  "Sub Pres": {
    "s1": ["mate"],
    "s2": ["mates"],
    "s3": ["mate"],
    "p1": ["matemos"],
    "p2": ["matéis"],
    "p3": ["maten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["mata"],
    "s3": ["matad"],
    "p1": [""],
    "p2": ["mate"],
    "p3": ["maten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no mates"],
    "s3": ["no matéis"],
    "p1": [""],
    "p2": ["no mate"],
    "p3": ["no maten"]
  },
  "In Pres Pro": {
    "s1": ["estoy matando"],
    "s2": ["estás matando"],
    "s3": ["está matando"],
    "p1": ["estamos matando"],
    "p2": ["estáis matando"],
    "p3": ["están matando"]
  }
}, {
  "inf": "mentir",
  "inf_eng": "to lie",
  "In Pres": {
    "s1": ["miento"],
    "s2": ["mientes"],
    "s3": ["miente"],
    "p1": ["mentimos"],
    "p2": ["mentís"],
    "p3": ["mienten"]
  },
  "In Fut": {
    "s1": ["mentiré"],
    "s2": ["mentirás"],
    "s3": ["mentirá"],
    "p1": ["mentiremos"],
    "p2": ["mentiréis"],
    "p3": ["mentirán"]
  },
  "In Imp": {
    "s1": ["mentía"],
    "s2": ["mentías"],
    "s3": ["mentía"],
    "p1": ["mentíamos"],
    "p2": ["mentíais"],
    "p3": ["mentían"]
  },
  "In Pret": {
    "s1": ["mentí"],
    "s2": ["mentiste"],
    "s3": ["mintió"],
    "p1": ["mentimos"],
    "p2": ["mentisteis"],
    "p3": ["mintieron"]
  },
  "In Cond": {
    "s1": ["mentiría"],
    "s2": ["mentirías"],
    "s3": ["mentiría"],
    "p1": ["mentiríamos"],
    "p2": ["mentiríais"],
    "p3": ["mentirían"]
  },
  "In Pres Per": {
    "s1": ["he mentido"],
    "s2": ["has mentido"],
    "s3": ["ha mentido"],
    "p1": ["hemos mentido"],
    "p2": ["habéis mentido"],
    "p3": ["han mentido"]
  },
  "In Fut Per": {
    "s1": ["habré mentido"],
    "s2": ["habrás mentido"],
    "s3": ["habrá mentido"],
    "p1": ["habremos mentido"],
    "p2": ["habréis mentido"],
    "p3": ["habrán mentido"]
  },
  "In Pas Per": {
    "s1": ["había mentido"],
    "s2": ["habías mentido"],
    "s3": ["había mentido"],
    "p1": ["habíamos mentido"],
    "p2": ["habíais mentido"],
    "p3": ["habían mentido"]
  },
  "In Cond Per": {
    "s1": ["habría mentido"],
    "s2": ["habrías mentido"],
    "s3": ["habría mentido"],
    "p1": ["habríamos mentido"],
    "p2": ["habríais mentido"],
    "p3": ["habrían mentido"]
  },
  "Sub Pres": {
    "s1": ["mienta"],
    "s2": ["mientas"],
    "s3": ["mienta"],
    "p1": ["mintamos"],
    "p2": ["mintáis"],
    "p3": ["mientan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["miente"],
    "s3": ["mentid"],
    "p1": [""],
    "p2": ["mienta"],
    "p3": ["mientan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no mientas"],
    "s3": ["no mintáis"],
    "p1": [""],
    "p2": ["no mienta"],
    "p3": ["no mientan"]
  },
  "In Pres Pro": {
    "s1": ["estoy mintiendo"],
    "s2": ["estás mintiendo"],
    "s3": ["está mintiendo"],
    "p1": ["estamos mintiendo"],
    "p2": ["estáis mintiendo"],
    "p3": ["están mintiendo"]
  }
}, {
  "inf": "mirar",
  "inf_eng": "to watch",
  "In Pres": {
    "s1": ["miro"],
    "s2": ["miras"],
    "s3": ["mira"],
    "p1": ["miramos"],
    "p2": ["miráis"],
    "p3": ["miran"]
  },
  "In Fut": {
    "s1": ["miraré"],
    "s2": ["mirarás"],
    "s3": ["mirará"],
    "p1": ["miraremos"],
    "p2": ["miraréis"],
    "p3": ["mirarán"]
  },
  "In Imp": {
    "s1": ["miraba"],
    "s2": ["mirabas"],
    "s3": ["miraba"],
    "p1": ["mirábamos"],
    "p2": ["mirabais"],
    "p3": ["miraban"]
  },
  "In Pret": {
    "s1": ["miré"],
    "s2": ["miraste"],
    "s3": ["miró"],
    "p1": ["miramos"],
    "p2": ["mirasteis"],
    "p3": ["miraron"]
  },
  "In Cond": {
    "s1": ["miraría"],
    "s2": ["mirarías"],
    "s3": ["miraría"],
    "p1": ["miraríamos"],
    "p2": ["miraríais"],
    "p3": ["mirarían"]
  },
  "In Pres Per": {
    "s1": ["he mirado"],
    "s2": ["has mirado"],
    "s3": ["ha mirado"],
    "p1": ["hemos mirado"],
    "p2": ["habéis mirado"],
    "p3": ["han mirado"]
  },
  "In Fut Per": {
    "s1": ["habré mirado"],
    "s2": ["habrás mirado"],
    "s3": ["habrá mirado"],
    "p1": ["habremos mirado"],
    "p2": ["habréis mirado"],
    "p3": ["habrán mirado"]
  },
  "In Pas Per": {
    "s1": ["había mirado"],
    "s2": ["habías mirado"],
    "s3": ["había mirado"],
    "p1": ["habíamos mirado"],
    "p2": ["habíais mirado"],
    "p3": ["habían mirado"]
  },
  "In Cond Per": {
    "s1": ["habría mirado"],
    "s2": ["habrías mirado"],
    "s3": ["habría mirado"],
    "p1": ["habríamos mirado"],
    "p2": ["habríais mirado"],
    "p3": ["habrían mirado"]
  },
  "Sub Pres": {
    "s1": ["mire"],
    "s2": ["mires"],
    "s3": ["mire"],
    "p1": ["miremos"],
    "p2": ["miréis"],
    "p3": ["miren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["mira"],
    "s3": ["mirad"],
    "p1": [""],
    "p2": ["mire"],
    "p3": ["miren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no mires"],
    "s3": ["no miréis"],
    "p1": [""],
    "p2": ["no mire"],
    "p3": ["no miren"]
  },
  "In Pres Pro": {
    "s1": ["estoy mirando"],
    "s2": ["estás mirando"],
    "s3": ["está mirando"],
    "p1": ["estamos mirando"],
    "p2": ["estáis mirando"],
    "p3": ["están mirando"]
  }
}, {
  "inf": "montar",
  "inf_eng": "to mount",
  "In Pres": {
    "s1": ["monto"],
    "s2": ["montas"],
    "s3": ["monta"],
    "p1": ["montamos"],
    "p2": ["montáis"],
    "p3": ["montan"]
  },
  "In Fut": {
    "s1": ["montaré"],
    "s2": ["montarás"],
    "s3": ["montará"],
    "p1": ["montaremos"],
    "p2": ["montaréis"],
    "p3": ["montarán"]
  },
  "In Imp": {
    "s1": ["montaba"],
    "s2": ["montabas"],
    "s3": ["montaba"],
    "p1": ["montábamos"],
    "p2": ["montabais"],
    "p3": ["montaban"]
  },
  "In Pret": {
    "s1": ["monté"],
    "s2": ["montaste"],
    "s3": ["montó"],
    "p1": ["montamos"],
    "p2": ["montasteis"],
    "p3": ["montaron"]
  },
  "In Cond": {
    "s1": ["montaría"],
    "s2": ["montarías"],
    "s3": ["montaría"],
    "p1": ["montaríamos"],
    "p2": ["montaríais"],
    "p3": ["montarían"]
  },
  "In Pres Per": {
    "s1": ["he montado"],
    "s2": ["has montado"],
    "s3": ["ha montado"],
    "p1": ["hemos montado"],
    "p2": ["habéis montado"],
    "p3": ["han montado"]
  },
  "In Fut Per": {
    "s1": ["habré montado"],
    "s2": ["habrás montado"],
    "s3": ["habrá montado"],
    "p1": ["habremos montado"],
    "p2": ["habréis montado"],
    "p3": ["habrán montado"]
  },
  "In Pas Per": {
    "s1": ["había montado"],
    "s2": ["habías montado"],
    "s3": ["había montado"],
    "p1": ["habíamos montado"],
    "p2": ["habíais montado"],
    "p3": ["habían montado"]
  },
  "In Cond Per": {
    "s1": ["habría montado"],
    "s2": ["habrías montado"],
    "s3": ["habría montado"],
    "p1": ["habríamos montado"],
    "p2": ["habríais montado"],
    "p3": ["habrían montado"]
  },
  "Sub Pres": {
    "s1": ["monte"],
    "s2": ["montes"],
    "s3": ["monte"],
    "p1": ["montemos"],
    "p2": ["montéis"],
    "p3": ["monten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["monta"],
    "s3": ["montad"],
    "p1": [""],
    "p2": ["monte"],
    "p3": ["monten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no montes"],
    "s3": ["no montéis"],
    "p1": [""],
    "p2": ["no monte"],
    "p3": ["no monten"]
  },
  "In Pres Pro": {
    "s1": ["estoy montando"],
    "s2": ["estás montando"],
    "s3": ["está montando"],
    "p1": ["estamos montando"],
    "p2": ["estáis montando"],
    "p3": ["están montando"]
  }
}, {
  "inf": "morir",
  "inf_eng": "to die",
  "In Pres": {
    "s1": ["muero"],
    "s2": ["mueres"],
    "s3": ["muere"],
    "p1": ["morimos"],
    "p2": ["morís"],
    "p3": ["mueren"]
  },
  "In Fut": {
    "s1": ["moriré"],
    "s2": ["morirás"],
    "s3": ["morirá"],
    "p1": ["moriremos"],
    "p2": ["moriréis"],
    "p3": ["morirán"]
  },
  "In Imp": {
    "s1": ["moría"],
    "s2": ["morías"],
    "s3": ["moría"],
    "p1": ["moríamos"],
    "p2": ["moríais"],
    "p3": ["morían"]
  },
  "In Pret": {
    "s1": ["morí"],
    "s2": ["moriste"],
    "s3": ["murió"],
    "p1": ["morimos"],
    "p2": ["moristeis"],
    "p3": ["murieron"]
  },
  "In Cond": {
    "s1": ["moriría"],
    "s2": ["morirías"],
    "s3": ["moriría"],
    "p1": ["moriríamos"],
    "p2": ["moriríais"],
    "p3": ["morirían"]
  },
  "In Pres Per": {
    "s1": ["he muerto"],
    "s2": ["has muerto"],
    "s3": ["ha muerto"],
    "p1": ["hemos muerto"],
    "p2": ["habéis muerto"],
    "p3": ["han muerto"]
  },
  "In Fut Per": {
    "s1": ["habré muerto"],
    "s2": ["habrás muerto"],
    "s3": ["habrá muerto"],
    "p1": ["habremos muerto"],
    "p2": ["habréis muerto"],
    "p3": ["habrán muerto"]
  },
  "In Pas Per": {
    "s1": ["había muerto"],
    "s2": ["habías muerto"],
    "s3": ["había muerto"],
    "p1": ["habíamos muerto"],
    "p2": ["habíais muerto"],
    "p3": ["habían muerto"]
  },
  "In Cond Per": {
    "s1": ["habría muerto"],
    "s2": ["habrías muerto"],
    "s3": ["habría muerto"],
    "p1": ["habríamos muerto"],
    "p2": ["habríais muerto"],
    "p3": ["habrían muerto"]
  },
  "Sub Pres": {
    "s1": ["muera"],
    "s2": ["mueras"],
    "s3": ["muera"],
    "p1": ["muramos"],
    "p2": ["muráis"],
    "p3": ["mueran"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["muere"],
    "s3": ["morid"],
    "p1": [""],
    "p2": ["muera"],
    "p3": ["mueran"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no mueras"],
    "s3": ["no muráis"],
    "p1": [""],
    "p2": ["no muera"],
    "p3": ["no mueran"]
  },
  "In Pres Pro": {
    "s1": ["estoy muriendo"],
    "s2": ["estás muriendo"],
    "s3": ["está muriendo"],
    "p1": ["estamos muriendo"],
    "p2": ["estáis muriendo"],
    "p3": ["están muriendo"]
  }
}, {
  "inf": "mostrar",
  "inf_eng": "to show",
  "In Pres": {
    "s1": ["muestro"],
    "s2": ["muestras"],
    "s3": ["muestra"],
    "p1": ["mostramos"],
    "p2": ["mostráis"],
    "p3": ["muestran"]
  },
  "In Fut": {
    "s1": ["mostraré"],
    "s2": ["mostrarás"],
    "s3": ["mostrará"],
    "p1": ["mostraremos"],
    "p2": ["mostraréis"],
    "p3": ["mostrarán"]
  },
  "In Imp": {
    "s1": ["mostraba"],
    "s2": ["mostrabas"],
    "s3": ["mostraba"],
    "p1": ["mostrábamos"],
    "p2": ["mostrabais"],
    "p3": ["mostraban"]
  },
  "In Pret": {
    "s1": ["mostré"],
    "s2": ["mostraste"],
    "s3": ["mostró"],
    "p1": ["mostramos"],
    "p2": ["mostrasteis"],
    "p3": ["mostraron"]
  },
  "In Cond": {
    "s1": ["mostraría"],
    "s2": ["mostrarías"],
    "s3": ["mostraría"],
    "p1": ["mostraríamos"],
    "p2": ["mostraríais"],
    "p3": ["mostrarían"]
  },
  "In Pres Per": {
    "s1": ["he mostrado"],
    "s2": ["has mostrado"],
    "s3": ["ha mostrado"],
    "p1": ["hemos mostrado"],
    "p2": ["habéis mostrado"],
    "p3": ["han mostrado"]
  },
  "In Fut Per": {
    "s1": ["habré mostrado"],
    "s2": ["habrás mostrado"],
    "s3": ["habrá mostrado"],
    "p1": ["habremos mostrado"],
    "p2": ["habréis mostrado"],
    "p3": ["habrán mostrado"]
  },
  "In Pas Per": {
    "s1": ["había mostrado"],
    "s2": ["habías mostrado"],
    "s3": ["había mostrado"],
    "p1": ["habíamos mostrado"],
    "p2": ["habíais mostrado"],
    "p3": ["habían mostrado"]
  },
  "In Cond Per": {
    "s1": ["habría mostrado"],
    "s2": ["habrías mostrado"],
    "s3": ["habría mostrado"],
    "p1": ["habríamos mostrado"],
    "p2": ["habríais mostrado"],
    "p3": ["habrían mostrado"]
  },
  "Sub Pres": {
    "s1": ["muestre"],
    "s2": ["muestres"],
    "s3": ["muestre"],
    "p1": ["mostremos"],
    "p2": ["mostréis"],
    "p3": ["muestren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["muestra"],
    "s3": ["mostrad"],
    "p1": [""],
    "p2": ["muestre"],
    "p3": ["muestren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no muestres"],
    "s3": ["no mostréis"],
    "p1": [""],
    "p2": ["no muestre"],
    "p3": ["no muestren"]
  },
  "In Pres Pro": {
    "s1": ["estoy mostrando"],
    "s2": ["estás mostrando"],
    "s3": ["está mostrando"],
    "p1": ["estamos mostrando"],
    "p2": ["estáis mostrando"],
    "p3": ["están mostrando"]
  }
}, {
  "inf": "mover",
  "inf_eng": "to move",
  "In Pres": {
    "s1": ["muevo"],
    "s2": ["mueves"],
    "s3": ["mueve"],
    "p1": ["movemos"],
    "p2": ["movéis"],
    "p3": ["mueven"]
  },
  "In Fut": {
    "s1": ["moveré"],
    "s2": ["moverás"],
    "s3": ["moverá"],
    "p1": ["moveremos"],
    "p2": ["moveréis"],
    "p3": ["moverán"]
  },
  "In Imp": {
    "s1": ["movía"],
    "s2": ["movías"],
    "s3": ["movía"],
    "p1": ["movíamos"],
    "p2": ["movíais"],
    "p3": ["movían"]
  },
  "In Pret": {
    "s1": ["moví"],
    "s2": ["moviste"],
    "s3": ["movió"],
    "p1": ["movimos"],
    "p2": ["movisteis"],
    "p3": ["movieron"]
  },
  "In Cond": {
    "s1": ["movería"],
    "s2": ["moverías"],
    "s3": ["movería"],
    "p1": ["moveríamos"],
    "p2": ["moveríais"],
    "p3": ["moverían"]
  },
  "In Pres Per": {
    "s1": ["he movido"],
    "s2": ["has movido"],
    "s3": ["ha movido"],
    "p1": ["hemos movido"],
    "p2": ["habéis movido"],
    "p3": ["han movido"]
  },
  "In Fut Per": {
    "s1": ["habré movido"],
    "s2": ["habrás movido"],
    "s3": ["habrá movido"],
    "p1": ["habremos movido"],
    "p2": ["habréis movido"],
    "p3": ["habrán movido"]
  },
  "In Pas Per": {
    "s1": ["había movido"],
    "s2": ["habías movido"],
    "s3": ["había movido"],
    "p1": ["habíamos movido"],
    "p2": ["habíais movido"],
    "p3": ["habían movido"]
  },
  "In Cond Per": {
    "s1": ["habría movido"],
    "s2": ["habrías movido"],
    "s3": ["habría movido"],
    "p1": ["habríamos movido"],
    "p2": ["habríais movido"],
    "p3": ["habrían movido"]
  },
  "Sub Pres": {
    "s1": ["mueva"],
    "s2": ["muevas"],
    "s3": ["mueva"],
    "p1": ["movamos"],
    "p2": ["mováis"],
    "p3": ["muevan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["mueve"],
    "s3": ["moved"],
    "p1": [""],
    "p2": ["mueva"],
    "p3": ["muevan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no muevas"],
    "s3": ["no mováis"],
    "p1": [""],
    "p2": ["no mueva"],
    "p3": ["no muevan"]
  },
  "In Pres Pro": {
    "s1": ["estoy moviendo"],
    "s2": ["estás moviendo"],
    "s3": ["está moviendo"],
    "p1": ["estamos moviendo"],
    "p2": ["estáis moviendo"],
    "p3": ["están moviendo"]
  }
}, {
  "inf": "nacer",
  "inf_eng": "to be born",
  "In Pres": {
    "s1": ["nazco"],
    "s2": ["naces"],
    "s3": ["nace"],
    "p1": ["nacemos"],
    "p2": ["nacéis"],
    "p3": ["nacen"]
  },
  "In Fut": {
    "s1": ["naceré"],
    "s2": ["nacerás"],
    "s3": ["nacerá"],
    "p1": ["naceremos"],
    "p2": ["naceréis"],
    "p3": ["nacerán"]
  },
  "In Imp": {
    "s1": ["nacía"],
    "s2": ["nacías"],
    "s3": ["nacía"],
    "p1": ["nacíamos"],
    "p2": ["nacíais"],
    "p3": ["nacían"]
  },
  "In Pret": {
    "s1": ["nací"],
    "s2": ["naciste"],
    "s3": ["nació"],
    "p1": ["nacimos"],
    "p2": ["nacisteis"],
    "p3": ["nacieron"]
  },
  "In Cond": {
    "s1": ["nacería"],
    "s2": ["nacerías"],
    "s3": ["nacería"],
    "p1": ["naceríamos"],
    "p2": ["naceríais"],
    "p3": ["nacerían"]
  },
  "In Pres Per": {
    "s1": ["he nacido"],
    "s2": ["has nacido"],
    "s3": ["ha nacido"],
    "p1": ["hemos nacido"],
    "p2": ["habéis nacido"],
    "p3": ["han nacido"]
  },
  "In Fut Per": {
    "s1": ["habré nacido"],
    "s2": ["habrás nacido"],
    "s3": ["habrá nacido"],
    "p1": ["habremos nacido"],
    "p2": ["habréis nacido"],
    "p3": ["habrán nacido"]
  },
  "In Pas Per": {
    "s1": ["había nacido"],
    "s2": ["habías nacido"],
    "s3": ["había nacido"],
    "p1": ["habíamos nacido"],
    "p2": ["habíais nacido"],
    "p3": ["habían nacido"]
  },
  "In Cond Per": {
    "s1": ["habría nacido"],
    "s2": ["habrías nacido"],
    "s3": ["habría nacido"],
    "p1": ["habríamos nacido"],
    "p2": ["habríais nacido"],
    "p3": ["habrían nacido"]
  },
  "Sub Pres": {
    "s1": ["nazca"],
    "s2": ["nazcas"],
    "s3": ["nazca"],
    "p1": ["nazcamos"],
    "p2": ["nazcáis"],
    "p3": ["nazcan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["nace"],
    "s3": ["naced"],
    "p1": [""],
    "p2": ["nazca"],
    "p3": ["nazcan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no nazcas"],
    "s3": ["no nazcáis"],
    "p1": [""],
    "p2": ["no nazca"],
    "p3": ["no nazcan"]
  },
  "In Pres Pro": {
    "s1": ["estoy naciendo"],
    "s2": ["estás naciendo"],
    "s3": ["está naciendo"],
    "p1": ["estamos naciendo"],
    "p2": ["estáis naciendo"],
    "p3": ["están naciendo"]
  }
}, {
  "inf": "nadar",
  "inf_eng": "to swim",
  "In Pres": {
    "s1": ["nado"],
    "s2": ["nadas"],
    "s3": ["nada"],
    "p1": ["nadamos"],
    "p2": ["nadáis"],
    "p3": ["nadan"]
  },
  "In Fut": {
    "s1": ["nadaré"],
    "s2": ["nadarás"],
    "s3": ["nadará"],
    "p1": ["nadaremos"],
    "p2": ["nadaréis"],
    "p3": ["nadarán"]
  },
  "In Imp": {
    "s1": ["nadaba"],
    "s2": ["nadabas"],
    "s3": ["nadaba"],
    "p1": ["nadábamos"],
    "p2": ["nadabais"],
    "p3": ["nadaban"]
  },
  "In Pret": {
    "s1": ["nadé"],
    "s2": ["nadaste"],
    "s3": ["nadó"],
    "p1": ["nadamos"],
    "p2": ["nadasteis"],
    "p3": ["nadaron"]
  },
  "In Cond": {
    "s1": ["nadaría"],
    "s2": ["nadarías"],
    "s3": ["nadaría"],
    "p1": ["nadaríamos"],
    "p2": ["nadaríais"],
    "p3": ["nadarían"]
  },
  "In Pres Per": {
    "s1": ["he nadado"],
    "s2": ["has nadado"],
    "s3": ["ha nadado"],
    "p1": ["hemos nadado"],
    "p2": ["habéis nadado"],
    "p3": ["han nadado"]
  },
  "In Fut Per": {
    "s1": ["habré nadado"],
    "s2": ["habrás nadado"],
    "s3": ["habrá nadado"],
    "p1": ["habremos nadado"],
    "p2": ["habréis nadado"],
    "p3": ["habrán nadado"]
  },
  "In Pas Per": {
    "s1": ["había nadado"],
    "s2": ["habías nadado"],
    "s3": ["había nadado"],
    "p1": ["habíamos nadado"],
    "p2": ["habíais nadado"],
    "p3": ["habían nadado"]
  },
  "In Cond Per": {
    "s1": ["habría nadado"],
    "s2": ["habrías nadado"],
    "s3": ["habría nadado"],
    "p1": ["habríamos nadado"],
    "p2": ["habríais nadado"],
    "p3": ["habrían nadado"]
  },
  "Sub Pres": {
    "s1": ["nade"],
    "s2": ["nades"],
    "s3": ["nade"],
    "p1": ["nademos"],
    "p2": ["nadéis"],
    "p3": ["naden"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["nada"],
    "s3": ["nadad"],
    "p1": [""],
    "p2": ["nade"],
    "p3": ["naden"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no nades"],
    "s3": ["no nadéis"],
    "p1": [""],
    "p2": ["no nade"],
    "p3": ["no naden"]
  },
  "In Pres Pro": {
    "s1": ["estoy nadando"],
    "s2": ["estás nadando"],
    "s3": ["está nadando"],
    "p1": ["estamos nadando"],
    "p2": ["estáis nadando"],
    "p3": ["están nadando"]
  }
}, {
  "inf": "necesitar",
  "inf_eng": "to need",
  "In Pres": {
    "s1": ["necesito"],
    "s2": ["necesitas"],
    "s3": ["necesita"],
    "p1": ["necesitamos"],
    "p2": ["necesitáis"],
    "p3": ["necesitan"]
  },
  "In Fut": {
    "s1": ["necesitaré"],
    "s2": ["necesitarás"],
    "s3": ["necesitará"],
    "p1": ["necesitaremos"],
    "p2": ["necesitaréis"],
    "p3": ["necesitarán"]
  },
  "In Imp": {
    "s1": ["necesitaba"],
    "s2": ["necesitabas"],
    "s3": ["necesitaba"],
    "p1": ["necesitábamos"],
    "p2": ["necesitabais"],
    "p3": ["necesitaban"]
  },
  "In Pret": {
    "s1": ["necesité"],
    "s2": ["necesitaste"],
    "s3": ["necesitó"],
    "p1": ["necesitamos"],
    "p2": ["necesitasteis"],
    "p3": ["necesitaron"]
  },
  "In Cond": {
    "s1": ["necesitaría"],
    "s2": ["necesitarías"],
    "s3": ["necesitaría"],
    "p1": ["necesitaríamos"],
    "p2": ["necesitaríais"],
    "p3": ["necesitarían"]
  },
  "In Pres Per": {
    "s1": ["he necesitado"],
    "s2": ["has necesitado"],
    "s3": ["ha necesitado"],
    "p1": ["hemos necesitado"],
    "p2": ["habéis necesitado"],
    "p3": ["han necesitado"]
  },
  "In Fut Per": {
    "s1": ["habré necesitado"],
    "s2": ["habrás necesitado"],
    "s3": ["habrá necesitado"],
    "p1": ["habremos necesitado"],
    "p2": ["habréis necesitado"],
    "p3": ["habrán necesitado"]
  },
  "In Pas Per": {
    "s1": ["había necesitado"],
    "s2": ["habías necesitado"],
    "s3": ["había necesitado"],
    "p1": ["habíamos necesitado"],
    "p2": ["habíais necesitado"],
    "p3": ["habían necesitado"]
  },
  "In Cond Per": {
    "s1": ["habría necesitado"],
    "s2": ["habrías necesitado"],
    "s3": ["habría necesitado"],
    "p1": ["habríamos necesitado"],
    "p2": ["habríais necesitado"],
    "p3": ["habrían necesitado"]
  },
  "Sub Pres": {
    "s1": ["necesite"],
    "s2": ["necesites"],
    "s3": ["necesite"],
    "p1": ["necesitemos"],
    "p2": ["necesitéis"],
    "p3": ["necesiten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["necesita"],
    "s3": ["necesitad"],
    "p1": [""],
    "p2": ["necesite"],
    "p3": ["necesiten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no necesites"],
    "s3": ["no necesitéis"],
    "p1": [""],
    "p2": ["no necesite"],
    "p3": ["no necesiten"]
  },
  "In Pres Pro": {
    "s1": ["estoy necesitando"],
    "s2": ["estás necesitando"],
    "s3": ["está necesitando"],
    "p1": ["estamos necesitando"],
    "p2": ["estáis necesitando"],
    "p3": ["están necesitando"]
  }
}, {
  "inf": "notar",
  "inf_eng": "to note",
  "In Pres": {
    "s1": ["noto"],
    "s2": ["notas"],
    "s3": ["nota"],
    "p1": ["notamos"],
    "p2": ["notáis"],
    "p3": ["notan"]
  },
  "In Fut": {
    "s1": ["notaré"],
    "s2": ["notarás"],
    "s3": ["notará"],
    "p1": ["notaremos"],
    "p2": ["notaréis"],
    "p3": ["notarán"]
  },
  "In Imp": {
    "s1": ["notaba"],
    "s2": ["notabas"],
    "s3": ["notaba"],
    "p1": ["notábamos"],
    "p2": ["notabais"],
    "p3": ["notaban"]
  },
  "In Pret": {
    "s1": ["noté"],
    "s2": ["notaste"],
    "s3": ["notó"],
    "p1": ["notamos"],
    "p2": ["notasteis"],
    "p3": ["notaron"]
  },
  "In Cond": {
    "s1": ["notaría"],
    "s2": ["notarías"],
    "s3": ["notaría"],
    "p1": ["notaríamos"],
    "p2": ["notaríais"],
    "p3": ["notarían"]
  },
  "In Pres Per": {
    "s1": ["he notado"],
    "s2": ["has notado"],
    "s3": ["ha notado"],
    "p1": ["hemos notado"],
    "p2": ["habéis notado"],
    "p3": ["han notado"]
  },
  "In Fut Per": {
    "s1": ["habré notado"],
    "s2": ["habrás notado"],
    "s3": ["habrá notado"],
    "p1": ["habremos notado"],
    "p2": ["habréis notado"],
    "p3": ["habrán notado"]
  },
  "In Pas Per": {
    "s1": ["había notado"],
    "s2": ["habías notado"],
    "s3": ["había notado"],
    "p1": ["habíamos notado"],
    "p2": ["habíais notado"],
    "p3": ["habían notado"]
  },
  "In Cond Per": {
    "s1": ["habría notado"],
    "s2": ["habrías notado"],
    "s3": ["habría notado"],
    "p1": ["habríamos notado"],
    "p2": ["habríais notado"],
    "p3": ["habrían notado"]
  },
  "Sub Pres": {
    "s1": ["note"],
    "s2": ["notes"],
    "s3": ["note"],
    "p1": ["notemos"],
    "p2": ["notéis"],
    "p3": ["noten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["nota"],
    "s3": ["notad"],
    "p1": [""],
    "p2": ["note"],
    "p3": ["noten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no notes"],
    "s3": ["no notéis"],
    "p1": [""],
    "p2": ["no note"],
    "p3": ["no noten"]
  },
  "In Pres Pro": {
    "s1": ["estoy notando"],
    "s2": ["estás notando"],
    "s3": ["está notando"],
    "p1": ["estamos notando"],
    "p2": ["estáis notando"],
    "p3": ["están notando"]
  }
}, {
  "inf": "obtener",
  "inf_eng": "to obtain",
  "In Pres": {
    "s1": ["obtengo"],
    "s2": ["obtienes"],
    "s3": ["obtiene"],
    "p1": ["obtenemos"],
    "p2": ["obtenéis"],
    "p3": ["obtienen"]
  },
  "In Fut": {
    "s1": ["obtendré"],
    "s2": ["obtendrás"],
    "s3": ["obtendrá"],
    "p1": ["obtendremos"],
    "p2": ["obtendréis"],
    "p3": ["obtendrán"]
  },
  "In Imp": {
    "s1": ["obtenía"],
    "s2": ["obtenías"],
    "s3": ["obtenía"],
    "p1": ["obteníamos"],
    "p2": ["obteníais"],
    "p3": ["obtenían"]
  },
  "In Pret": {
    "s1": ["obtuve"],
    "s2": ["obtuviste"],
    "s3": ["obtuvo"],
    "p1": ["obtuvimos"],
    "p2": ["obtuvisteis"],
    "p3": ["obtuvieron"]
  },
  "In Cond": {
    "s1": ["obtendría"],
    "s2": ["obtendrías"],
    "s3": ["obtendría"],
    "p1": ["obtendríamos"],
    "p2": ["obtendríais"],
    "p3": ["obtendrían"]
  },
  "In Pres Per": {
    "s1": ["he obtenido"],
    "s2": ["has obtenido"],
    "s3": ["ha obtenido"],
    "p1": ["hemos obtenido"],
    "p2": ["habéis obtenido"],
    "p3": ["han obtenido"]
  },
  "In Fut Per": {
    "s1": ["habré obtenido"],
    "s2": ["habrás obtenido"],
    "s3": ["habrá obtenido"],
    "p1": ["habremos obtenido"],
    "p2": ["habréis obtenido"],
    "p3": ["habrán obtenido"]
  },
  "In Pas Per": {
    "s1": ["había obtenido"],
    "s2": ["habías obtenido"],
    "s3": ["había obtenido"],
    "p1": ["habíamos obtenido"],
    "p2": ["habíais obtenido"],
    "p3": ["habían obtenido"]
  },
  "In Cond Per": {
    "s1": ["habría obtenido"],
    "s2": ["habrías obtenido"],
    "s3": ["habría obtenido"],
    "p1": ["habríamos obtenido"],
    "p2": ["habríais obtenido"],
    "p3": ["habrían obtenido"]
  },
  "Sub Pres": {
    "s1": ["obtenga"],
    "s2": ["obtengas"],
    "s3": ["obtenga"],
    "p1": ["obtengamos"],
    "p2": ["obtengáis"],
    "p3": ["obtengan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["obtén"],
    "s3": ["obtened"],
    "p1": [""],
    "p2": ["obtenga"],
    "p3": ["obtengan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no obtengas"],
    "s3": ["no obtengáis"],
    "p1": [""],
    "p2": ["no obtenga"],
    "p3": ["no obtengan"]
  },
  "In Pres Pro": {
    "s1": ["estoy obteniendo"],
    "s2": ["estás obteniendo"],
    "s3": ["está obteniendo"],
    "p1": ["estamos obteniendo"],
    "p2": ["estáis obteniendo"],
    "p3": ["están obteniendo"]
  }
}, {
  "inf": "ocurrir",
  "inf_eng": "to occur",
  "In Pres": {
    "s1": [""],
    "s2": [""],
    "s3": ["ocurre"],
    "p1": [""],
    "p2": [""],
    "p3": ["ocurren"]
  },
  "In Fut": {
    "s1": [""],
    "s2": [""],
    "s3": ["ocurrirá"],
    "p1": [""],
    "p2": [""],
    "p3": ["ocurrirán"]
  },
  "In Imp": {
    "s1": [""],
    "s2": [""],
    "s3": ["ocurría"],
    "p1": [""],
    "p2": [""],
    "p3": ["ocurrían"]
  },
  "In Pret": {
    "s1": [""],
    "s2": [""],
    "s3": ["ocurrió"],
    "p1": [""],
    "p2": [""],
    "p3": ["ocurrieron"]
  },
  "In Cond": {
    "s1": [""],
    "s2": [""],
    "s3": ["ocurriría"],
    "p1": [""],
    "p2": [""],
    "p3": ["ocurrirían"]
  },
  "In Pres Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["ha ocurrido"],
    "p1": [""],
    "p2": [""],
    "p3": ["han ocurrido"]
  },
  "In Fut Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["habrá ocurrido"],
    "p1": [""],
    "p2": [""],
    "p3": ["habrán ocurrido"]
  },
  "In Pas Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["había ocurrido"],
    "p1": [""],
    "p2": [""],
    "p3": ["habían ocurrido"]
  },
  "In Cond Per": {
    "s1": [""],
    "s2": [""],
    "s3": ["habría ocurrido"],
    "p1": [""],
    "p2": [""],
    "p3": ["habrían ocurrido"]
  },
  "Sub Pres": {
    "s1": [""],
    "s2": [""],
    "s3": ["ocurra"],
    "p1": [""],
    "p2": [""],
    "p3": ["ocurran"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["ocurre"],
    "s3": ["ocurrid"],
    "p1": [""],
    "p2": ["ocurra"],
    "p3": ["ocurran"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no ocurras"],
    "s3": ["no ocurráis"],
    "p1": [""],
    "p2": ["no ocurra"],
    "p3": ["no ocurran"]
  },
  "In Pres Pro": {
    "s1": ["estoy ocurriendo"],
    "s2": ["estás ocurriendo"],
    "s3": ["está ocurriendo"],
    "p1": ["estamos ocurriendo"],
    "p2": ["estáis ocurriendo"],
    "p3": ["están ocurriendo"]
  }
}, {
  "inf": "odiar",
  "inf_eng": "to hate",
  "In Pres": {
    "s1": ["odio"],
    "s2": ["odias"],
    "s3": ["odia"],
    "p1": ["odiamos"],
    "p2": ["odiáis"],
    "p3": ["odian"]
  },
  "In Fut": {
    "s1": ["odiaré"],
    "s2": ["odiarás"],
    "s3": ["odiará"],
    "p1": ["odiaremos"],
    "p2": ["odiaréis"],
    "p3": ["odiarán"]
  },
  "In Imp": {
    "s1": ["odiaba"],
    "s2": ["odiabas"],
    "s3": ["odiaba"],
    "p1": ["odiábamos"],
    "p2": ["odiabais"],
    "p3": ["odiaban"]
  },
  "In Pret": {
    "s1": ["odié"],
    "s2": ["odiaste"],
    "s3": ["odió"],
    "p1": ["odiamos"],
    "p2": ["odiasteis"],
    "p3": ["odiaron"]
  },
  "In Cond": {
    "s1": ["odiaría"],
    "s2": ["odiarías"],
    "s3": ["odiaría"],
    "p1": ["odiaríamos"],
    "p2": ["odiaríais"],
    "p3": ["odiarían"]
  },
  "In Pres Per": {
    "s1": ["he odiado"],
    "s2": ["has odiado"],
    "s3": ["ha odiado"],
    "p1": ["hemos odiado"],
    "p2": ["habéis odiado"],
    "p3": ["han odiado"]
  },
  "In Fut Per": {
    "s1": ["habré odiado"],
    "s2": ["habrás odiado"],
    "s3": ["habrá odiado"],
    "p1": ["habremos odiado"],
    "p2": ["habréis odiado"],
    "p3": ["habrán odiado"]
  },
  "In Pas Per": {
    "s1": ["había odiado"],
    "s2": ["habías odiado"],
    "s3": ["había odiado"],
    "p1": ["habíamos odiado"],
    "p2": ["habíais odiado"],
    "p3": ["habían odiado"]
  },
  "In Cond Per": {
    "s1": ["habría odiado"],
    "s2": ["habrías odiado"],
    "s3": ["habría odiado"],
    "p1": ["habríamos odiado"],
    "p2": ["habríais odiado"],
    "p3": ["habrían odiado"]
  },
  "Sub Pres": {
    "s1": ["odie"],
    "s2": ["odies"],
    "s3": ["odie"],
    "p1": ["odiemos"],
    "p2": ["odiéis"],
    "p3": ["odien"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["odia"],
    "s3": ["odiad"],
    "p1": [""],
    "p2": ["odie"],
    "p3": ["odien"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no odies"],
    "s3": ["no odiéis"],
    "p1": [""],
    "p2": ["no odie"],
    "p3": ["no odien"]
  },
  "In Pres Pro": {
    "s1": ["estoy odiando"],
    "s2": ["estás odiando"],
    "s3": ["está odiando"],
    "p1": ["estamos odiando"],
    "p2": ["estáis odiando"],
    "p3": ["están odiando"]
  }
}, {
  "inf": "ofrecer",
  "inf_eng": "to offer",
  "In Pres": {
    "s1": ["ofrezco"],
    "s2": ["ofreces"],
    "s3": ["ofrece"],
    "p1": ["ofrecemos"],
    "p2": ["ofrecéis"],
    "p3": ["ofrecen"]
  },
  "In Fut": {
    "s1": ["ofreceré"],
    "s2": ["ofrecerás"],
    "s3": ["ofrecerá"],
    "p1": ["ofreceremos"],
    "p2": ["ofreceréis"],
    "p3": ["ofrecerán"]
  },
  "In Imp": {
    "s1": ["ofrecía"],
    "s2": ["ofrecías"],
    "s3": ["ofrecía"],
    "p1": ["ofrecíamos"],
    "p2": ["ofrecíais"],
    "p3": ["ofrecían"]
  },
  "In Pret": {
    "s1": ["ofrecí"],
    "s2": ["ofreciste"],
    "s3": ["ofreció"],
    "p1": ["ofrecimos"],
    "p2": ["ofrecisteis"],
    "p3": ["ofrecieron"]
  },
  "In Cond": {
    "s1": ["ofrecería"],
    "s2": ["ofrecerías"],
    "s3": ["ofrecería"],
    "p1": ["ofreceríamos"],
    "p2": ["ofreceríais"],
    "p3": ["ofrecerían"]
  },
  "In Pres Per": {
    "s1": ["he ofrecido"],
    "s2": ["has ofrecido"],
    "s3": ["ha ofrecido"],
    "p1": ["hemos ofrecido"],
    "p2": ["habéis ofrecido"],
    "p3": ["han ofrecido"]
  },
  "In Fut Per": {
    "s1": ["habré ofrecido"],
    "s2": ["habrás ofrecido"],
    "s3": ["habrá ofrecido"],
    "p1": ["habremos ofrecido"],
    "p2": ["habréis ofrecido"],
    "p3": ["habrán ofrecido"]
  },
  "In Pas Per": {
    "s1": ["había ofrecido"],
    "s2": ["habías ofrecido"],
    "s3": ["había ofrecido"],
    "p1": ["habíamos ofrecido"],
    "p2": ["habíais ofrecido"],
    "p3": ["habían ofrecido"]
  },
  "In Cond Per": {
    "s1": ["habría ofrecido"],
    "s2": ["habrías ofrecido"],
    "s3": ["habría ofrecido"],
    "p1": ["habríamos ofrecido"],
    "p2": ["habríais ofrecido"],
    "p3": ["habrían ofrecido"]
  },
  "Sub Pres": {
    "s1": ["ofrezca"],
    "s2": ["ofrezcas"],
    "s3": ["ofrezca"],
    "p1": ["ofrezcamos"],
    "p2": ["ofrezcáis"],
    "p3": ["ofrezcan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["ofrece"],
    "s3": ["ofreced"],
    "p1": [""],
    "p2": ["ofrezca"],
    "p3": ["ofrezcan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no ofrezcas"],
    "s3": ["no ofrezcáis"],
    "p1": [""],
    "p2": ["no ofrezca"],
    "p3": ["no ofrezcan"]
  },
  "In Pres Pro": {
    "s1": ["estoy ofreciendo"],
    "s2": ["estás ofreciendo"],
    "s3": ["está ofreciendo"],
    "p1": ["estamos ofreciendo"],
    "p2": ["estáis ofreciendo"],
    "p3": ["están ofreciendo"]
  }
}, {
  "inf": "olvidar",
  "inf_eng": "to forget",
  "In Pres": {
    "s1": ["olvido"],
    "s2": ["olvidas"],
    "s3": ["olvida"],
    "p1": ["olvidamos"],
    "p2": ["olvidáis"],
    "p3": ["olvidan"]
  },
  "In Fut": {
    "s1": ["olvidaré"],
    "s2": ["olvidarás"],
    "s3": ["olvidará"],
    "p1": ["olvidaremos"],
    "p2": ["olvidaréis"],
    "p3": ["olvidarán"]
  },
  "In Imp": {
    "s1": ["olvidaba"],
    "s2": ["olvidabas"],
    "s3": ["olvidaba"],
    "p1": ["olvidábamos"],
    "p2": ["olvidabais"],
    "p3": ["olvidaban"]
  },
  "In Pret": {
    "s1": ["olvidé"],
    "s2": ["olvidaste"],
    "s3": ["olvidó"],
    "p1": ["olvidamos"],
    "p2": ["olvidasteis"],
    "p3": ["olvidaron"]
  },
  "In Cond": {
    "s1": ["olvidaría"],
    "s2": ["olvidarías"],
    "s3": ["olvidaría"],
    "p1": ["olvidaríamos"],
    "p2": ["olvidaríais"],
    "p3": ["olvidarían"]
  },
  "In Pres Per": {
    "s1": ["he olvidado"],
    "s2": ["has olvidado"],
    "s3": ["ha olvidado"],
    "p1": ["hemos olvidado"],
    "p2": ["habéis olvidado"],
    "p3": ["han olvidado"]
  },
  "In Fut Per": {
    "s1": ["habré olvidado"],
    "s2": ["habrás olvidado"],
    "s3": ["habrá olvidado"],
    "p1": ["habremos olvidado"],
    "p2": ["habréis olvidado"],
    "p3": ["habrán olvidado"]
  },
  "In Pas Per": {
    "s1": ["había olvidado"],
    "s2": ["habías olvidado"],
    "s3": ["había olvidado"],
    "p1": ["habíamos olvidado"],
    "p2": ["habíais olvidado"],
    "p3": ["habían olvidado"]
  },
  "In Cond Per": {
    "s1": ["habría olvidado"],
    "s2": ["habrías olvidado"],
    "s3": ["habría olvidado"],
    "p1": ["habríamos olvidado"],
    "p2": ["habríais olvidado"],
    "p3": ["habrían olvidado"]
  },
  "Sub Pres": {
    "s1": ["olvide"],
    "s2": ["olvides"],
    "s3": ["olvide"],
    "p1": ["olvidemos"],
    "p2": ["olvidéis"],
    "p3": ["olviden"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["olvida"],
    "s3": ["olvidad"],
    "p1": [""],
    "p2": ["olvide"],
    "p3": ["olviden"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no olvides"],
    "s3": ["no olvidéis"],
    "p1": [""],
    "p2": ["no olvide"],
    "p3": ["no olviden"]
  },
  "In Pres Pro": {
    "s1": ["estoy olvidando"],
    "s2": ["estás olvidando"],
    "s3": ["está olvidando"],
    "p1": ["estamos olvidando"],
    "p2": ["estáis olvidando"],
    "p3": ["están olvidando"]
  }
}, {
  "inf": "querer",
  "inf_eng": "to want",
  "In Fut": {
    "s1": ["querré"],
    "s2": ["querrás"],
    "s3": ["querrá"],
    "p1": ["querremos"],
    "p2": ["querréis"],
    "p3": ["querrán"]
  },
  "In Pres": {
    "s1": ["quiero"],
    "s2": ["quieres"],
    "s3": ["quiere"],
    "p1": ["queremos"],
    "p2": ["queréis"],
    "p3": ["quieren"]
  },
  "In Imp": {
    "s1": ["quería"],
    "s2": ["querías"],
    "s3": ["quería"],
    "p1": ["queríamos"],
    "p2": ["queríais"],
    "p3": ["querían"]
  },
  "In Pret": {
    "s1": ["quise"],
    "s2": ["quisiste"],
    "s3": ["quiso"],
    "p1": ["quisimos"],
    "p2": ["quisisteis"],
    "p3": ["quisieron"]
  },
  "In Cond": {
    "s1": ["querría"],
    "s2": ["querrías"],
    "s3": ["querría"],
    "p1": ["querríamos"],
    "p2": ["querríais"],
    "p3": ["querrían"]
  },
  "In Pres Per": {
    "s1": ["he querido"],
    "s2": ["has querido"],
    "s3": ["ha querido"],
    "p1": ["hemos querido"],
    "p2": ["habéis querido"],
    "p3": ["han querido"]
  },
  "In Fut Per": {
    "s1": ["habré querido"],
    "s2": ["habrás querido"],
    "s3": ["habrá querido"],
    "p1": ["habremos querido"],
    "p2": ["habréis querido"],
    "p3": ["habrán querido"]
  },
  "In Pas Per": {
    "s1": ["había querido"],
    "s2": ["habías querido"],
    "s3": ["había querido"],
    "p1": ["habíamos querido"],
    "p2": ["habíais querido"],
    "p3": ["habían querido"]
  },
  "In Cond Per": {
    "s1": ["habría querido"],
    "s2": ["habrías querido"],
    "s3": ["habría querido"],
    "p1": ["habríamos querido"],
    "p2": ["habríais querido"],
    "p3": ["habrían querido"]
  },
  "Sub Pres": {
    "s1": ["quiera"],
    "s2": ["quieras"],
    "s3": ["quiera"],
    "p1": ["queramos"],
    "p2": ["queráis"],
    "p3": ["quieran"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["quiere"],
    "s3": ["quered"],
    "p1": [""],
    "p2": ["quiera"],
    "p3": ["quieran"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no quieras"],
    "s3": ["no queráis"],
    "p1": [""],
    "p2": ["no quiera"],
    "p3": ["no quieran"]
  },
  "In Pres Pro": {
    "s1": ["estoy queriendo"],
    "s2": ["estás queriendo"],
    "s3": ["está queriendo"],
    "p1": ["estamos queriendo"],
    "p2": ["estáis queriendo"],
    "p3": ["están queriendo"]
  }
}, {
  "inf": "pagar",
  "inf_eng": "to pay",
  "In Pres": {
    "s1": ["pago"],
    "s2": ["pagas"],
    "s3": ["paga"],
    "p1": ["pagamos"],
    "p2": ["pagáis"],
    "p3": ["pagan"]
  },
  "In Fut": {
    "s1": ["pagaré"],
    "s2": ["pagarás"],
    "s3": ["pagará"],
    "p1": ["pagaremos"],
    "p2": ["pagaréis"],
    "p3": ["pagarán"]
  },
  "In Imp": {
    "s1": ["pagaba"],
    "s2": ["pagabas"],
    "s3": ["pagaba"],
    "p1": ["pagábamos"],
    "p2": ["pagabais"],
    "p3": ["pagaban"]
  },
  "In Pret": {
    "s1": ["pagué"],
    "s2": ["pagaste"],
    "s3": ["pagó"],
    "p1": ["pagamos"],
    "p2": ["pagasteis"],
    "p3": ["pagaron"]
  },
  "In Cond": {
    "s1": ["pagaría"],
    "s2": ["pagarías"],
    "s3": ["pagaría"],
    "p1": ["pagaríamos"],
    "p2": ["pagaríais"],
    "p3": ["pagarían"]
  },
  "In Pres Per": {
    "s1": ["he pagado"],
    "s2": ["has pagado"],
    "s3": ["ha pagado"],
    "p1": ["hemos pagado"],
    "p2": ["habéis pagado"],
    "p3": ["han pagado"]
  },
  "In Fut Per": {
    "s1": ["habré pagado"],
    "s2": ["habrás pagado"],
    "s3": ["habrá pagado"],
    "p1": ["habremos pagado"],
    "p2": ["habréis pagado"],
    "p3": ["habrán pagado"]
  },
  "In Pas Per": {
    "s1": ["había pagado"],
    "s2": ["habías pagado"],
    "s3": ["había pagado"],
    "p1": ["habíamos pagado"],
    "p2": ["habíais pagado"],
    "p3": ["habían pagado"]
  },
  "In Cond Per": {
    "s1": ["habría pagado"],
    "s2": ["habrías pagado"],
    "s3": ["habría pagado"],
    "p1": ["habríamos pagado"],
    "p2": ["habríais pagado"],
    "p3": ["habrían pagado"]
  },
  "Sub Pres": {
    "s1": ["pague"],
    "s2": ["pagues"],
    "s3": ["pague"],
    "p1": ["paguemos"],
    "p2": ["paguéis"],
    "p3": ["paguen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["paga"],
    "s3": ["pagad"],
    "p1": [""],
    "p2": ["pague"],
    "p3": ["paguen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no pagues"],
    "s3": ["no paguéis"],
    "p1": [""],
    "p2": ["no pague"],
    "p3": ["no paguen"]
  },
  "In Pres Pro": {
    "s1": ["estoy pagando"],
    "s2": ["estás pagando"],
    "s3": ["está pagando"],
    "p1": ["estamos pagando"],
    "p2": ["estáis pagando"],
    "p3": ["están pagando"]
  }
}, {
  "inf": "parar",
  "inf_eng": "to stop",
  "In Pres": {
    "s1": ["paro"],
    "s2": ["paras"],
    "s3": ["para"],
    "p1": ["paramos"],
    "p2": ["paráis"],
    "p3": ["paran"]
  },
  "In Fut": {
    "s1": ["pararé"],
    "s2": ["pararás"],
    "s3": ["parará"],
    "p1": ["pararemos"],
    "p2": ["pararéis"],
    "p3": ["pararán"]
  },
  "In Imp": {
    "s1": ["paraba"],
    "s2": ["parabas"],
    "s3": ["paraba"],
    "p1": ["parábamos"],
    "p2": ["parabais"],
    "p3": ["paraban"]
  },
  "In Pret": {
    "s1": ["paré"],
    "s2": ["paraste"],
    "s3": ["paró"],
    "p1": ["paramos"],
    "p2": ["parasteis"],
    "p3": ["pararon"]
  },
  "In Cond": {
    "s1": ["pararía"],
    "s2": ["pararías"],
    "s3": ["pararía"],
    "p1": ["pararíamos"],
    "p2": ["pararíais"],
    "p3": ["pararían"]
  },
  "In Pres Per": {
    "s1": ["he parado"],
    "s2": ["has parado"],
    "s3": ["ha parado"],
    "p1": ["hemos parado"],
    "p2": ["habéis parado"],
    "p3": ["han parado"]
  },
  "In Fut Per": {
    "s1": ["habré parado"],
    "s2": ["habrás parado"],
    "s3": ["habrá parado"],
    "p1": ["habremos parado"],
    "p2": ["habréis parado"],
    "p3": ["habrán parado"]
  },
  "In Pas Per": {
    "s1": ["había parado"],
    "s2": ["habías parado"],
    "s3": ["había parado"],
    "p1": ["habíamos parado"],
    "p2": ["habíais parado"],
    "p3": ["habían parado"]
  },
  "In Cond Per": {
    "s1": ["habría parado"],
    "s2": ["habrías parado"],
    "s3": ["habría parado"],
    "p1": ["habríamos parado"],
    "p2": ["habríais parado"],
    "p3": ["habrían parado"]
  },
  "Sub Pres": {
    "s1": ["pare"],
    "s2": ["pares"],
    "s3": ["pare"],
    "p1": ["paremos"],
    "p2": ["paréis"],
    "p3": ["paren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["para"],
    "s3": ["parad"],
    "p1": [""],
    "p2": ["pare"],
    "p3": ["paren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no pares"],
    "s3": ["no paréis"],
    "p1": [""],
    "p2": ["no pare"],
    "p3": ["no paren"]
  },
  "In Pres Pro": {
    "s1": ["estoy parando"],
    "s2": ["estás parando"],
    "s3": ["está parando"],
    "p1": ["estamos parando"],
    "p2": ["estáis parando"],
    "p3": ["están parando"]
  }
}, {
  "inf": "pedir",
  "inf_eng": "to request",
  "In Pres": {
    "s1": ["pido"],
    "s2": ["pides"],
    "s3": ["pide"],
    "p1": ["pedimos"],
    "p2": ["pedís"],
    "p3": ["piden"]
  },
  "In Fut": {
    "s1": ["pediré"],
    "s2": ["pedirás"],
    "s3": ["pedirá"],
    "p1": ["pediremos"],
    "p2": ["pediréis"],
    "p3": ["pedirán"]
  },
  "In Imp": {
    "s1": ["pedía"],
    "s2": ["pedías"],
    "s3": ["pedía"],
    "p1": ["pedíamos"],
    "p2": ["pedíais"],
    "p3": ["pedían"]
  },
  "In Pret": {
    "s1": ["pedí"],
    "s2": ["pediste"],
    "s3": ["pidió"],
    "p1": ["pedimos"],
    "p2": ["pedisteis"],
    "p3": ["pidieron"]
  },
  "In Cond": {
    "s1": ["pediría"],
    "s2": ["pedirías"],
    "s3": ["pediría"],
    "p1": ["pediríamos"],
    "p2": ["pediríais"],
    "p3": ["pedirían"]
  },
  "In Pres Per": {
    "s1": ["he pedido"],
    "s2": ["has pedido"],
    "s3": ["ha pedido"],
    "p1": ["hemos pedido"],
    "p2": ["habéis pedido"],
    "p3": ["han pedido"]
  },
  "In Fut Per": {
    "s1": ["habré pedido"],
    "s2": ["habrás pedido"],
    "s3": ["habrá pedido"],
    "p1": ["habremos pedido"],
    "p2": ["habréis pedido"],
    "p3": ["habrán pedido"]
  },
  "In Pas Per": {
    "s1": ["había pedido"],
    "s2": ["habías pedido"],
    "s3": ["había pedido"],
    "p1": ["habíamos pedido"],
    "p2": ["habíais pedido"],
    "p3": ["habían pedido"]
  },
  "In Cond Per": {
    "s1": ["habría pedido"],
    "s2": ["habrías pedido"],
    "s3": ["habría pedido"],
    "p1": ["habríamos pedido"],
    "p2": ["habríais pedido"],
    "p3": ["habrían pedido"]
  },
  "Sub Pres": {
    "s1": ["pida"],
    "s2": ["pidas"],
    "s3": ["pida"],
    "p1": ["pidamos"],
    "p2": ["pidáis"],
    "p3": ["pidan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["pide"],
    "s3": ["pedid"],
    "p1": [""],
    "p2": ["pida"],
    "p3": ["pidan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no pidas"],
    "s3": ["no pidáis"],
    "p1": [""],
    "p2": ["no pida"],
    "p3": ["no pidan"]
  },
  "In Pres Pro": {
    "s1": ["estoy pidiendo"],
    "s2": ["estás pidiendo"],
    "s3": ["está pidiendo"],
    "p1": ["estamos pidiendo"],
    "p2": ["estáis pidiendo"],
    "p3": ["están pidiendo"]
  }
}, {
  "inf": "peinarse",
  "inf_eng": "to comb one's hair",
  "In Pres": {
    "s1": ["me peino"],
    "s2": ["te peinas"],
    "s3": ["se peina"],
    "p1": ["nos peinamos"],
    "p2": ["os peináis"],
    "p3": ["se peinan"]
  },
  "In Fut": {
    "s1": ["me peinaré"],
    "s2": ["te peinarás"],
    "s3": ["se peinará"],
    "p1": ["nos peinaremos"],
    "p2": ["os peinaréis"],
    "p3": ["se peinarán"]
  },
  "In Imp": {
    "s1": ["me peinaba"],
    "s2": ["te peinabas"],
    "s3": ["se peinaba"],
    "p1": ["nos peinábamos"],
    "p2": ["os peinabais"],
    "p3": ["se peinaban"]
  },
  "In Pret": {
    "s1": ["me peiné"],
    "s2": ["te peinaste"],
    "s3": ["se peinó"],
    "p1": ["nos peinamos"],
    "p2": ["os peinasteis"],
    "p3": ["se peinaron"]
  },
  "In Cond": {
    "s1": ["me peinaría"],
    "s2": ["te peinarías"],
    "s3": ["se peinaría"],
    "p1": ["nos peinaríamos"],
    "p2": ["os peinaríais"],
    "p3": ["se peinarían"]
  },
  "In Pres Per": {
    "s1": ["me he peinado"],
    "s2": ["te has peinado"],
    "s3": ["se ha peinado"],
    "p1": ["nos hemos peinado"],
    "p2": ["os habéis peinado"],
    "p3": ["se han peinado"]
  },
  "In Fut Per": {
    "s1": ["me habré peinado"],
    "s2": ["te habrás peinado"],
    "s3": ["se habrá peinado"],
    "p1": ["nos habremos peinado"],
    "p2": ["os habréis peinado"],
    "p3": ["se habrán peinado"]
  },
  "In Pas Per": {
    "s1": ["me había peinado"],
    "s2": ["te habías peinado"],
    "s3": ["se había peinado"],
    "p1": ["nos habíamos peinado"],
    "p2": ["os habíais peinado"],
    "p3": ["se habían peinado"]
  },
  "In Cond Per": {
    "s1": ["me habría peinado"],
    "s2": ["te habrías peinado"],
    "s3": ["se habría peinado"],
    "p1": ["nos habríamos peinado"],
    "p2": ["os habríais peinado"],
    "p3": ["se habrían peinado"]
  },
  "Sub Pres": {
    "s1": ["me peine"],
    "s2": ["te peines"],
    "s3": ["se peine"],
    "p1": ["nos peinemos"],
    "p2": ["os peinéis"],
    "p3": ["se peinen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["péinate"],
    "s3": ["peinaos"],
    "p1": [""],
    "p2": ["péinese"],
    "p3": ["péinense"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no te peines"],
    "s3": ["no os peinéis"],
    "p1": [""],
    "p2": ["no se peine"],
    "p3": ["no se peinen"]
  },
  "In Pres Pro": {
    "s1": ["me estoy peinándo", "estoy peinándome"],
    "s2": ["te estás peinándo", "estás peinándote"],
    "s3": ["se está peinándo", "está peinándose"],
    "p1": ["nos estamos peinándo", "estamos peinándonos"],
    "p2": ["os estáis peinándo", "estáis peinándoos"],
    "p3": ["se están peinándo", "están peinándose"]
  }
}, {
  "inf": "pensar",
  "inf_eng": "to think",
  "In Pres": {
    "s1": ["pienso"],
    "s2": ["piensas"],
    "s3": ["piensa"],
    "p1": ["pensamos"],
    "p2": ["pensáis"],
    "p3": ["piensan"]
  },
  "In Fut": {
    "s1": ["pensaré"],
    "s2": ["pensarás"],
    "s3": ["pensará"],
    "p1": ["pensaremos"],
    "p2": ["pensaréis"],
    "p3": ["pensarán"]
  },
  "In Imp": {
    "s1": ["pensaba"],
    "s2": ["pensabas"],
    "s3": ["pensaba"],
    "p1": ["pensábamos"],
    "p2": ["pensabais"],
    "p3": ["pensaban"]
  },
  "In Pret": {
    "s1": ["pensé"],
    "s2": ["pensaste"],
    "s3": ["pensó"],
    "p1": ["pensamos"],
    "p2": ["pensasteis"],
    "p3": ["pensaron"]
  },
  "In Cond": {
    "s1": ["pensaría"],
    "s2": ["pensarías"],
    "s3": ["pensaría"],
    "p1": ["pensaríamos"],
    "p2": ["pensaríais"],
    "p3": ["pensarían"]
  },
  "In Pres Per": {
    "s1": ["he pensado"],
    "s2": ["has pensado"],
    "s3": ["ha pensado"],
    "p1": ["hemos pensado"],
    "p2": ["habéis pensado"],
    "p3": ["han pensado"]
  },
  "In Fut Per": {
    "s1": ["habré pensado"],
    "s2": ["habrás pensado"],
    "s3": ["habrá pensado"],
    "p1": ["habremos pensado"],
    "p2": ["habréis pensado"],
    "p3": ["habrán pensado"]
  },
  "In Pas Per": {
    "s1": ["había pensado"],
    "s2": ["habías pensado"],
    "s3": ["había pensado"],
    "p1": ["habíamos pensado"],
    "p2": ["habíais pensado"],
    "p3": ["habían pensado"]
  },
  "In Cond Per": {
    "s1": ["habría pensado"],
    "s2": ["habrías pensado"],
    "s3": ["habría pensado"],
    "p1": ["habríamos pensado"],
    "p2": ["habríais pensado"],
    "p3": ["habrían pensado"]
  },
  "Sub Pres": {
    "s1": ["piense"],
    "s2": ["pienses"],
    "s3": ["piense"],
    "p1": ["pensemos"],
    "p2": ["penséis"],
    "p3": ["piensen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["piensa"],
    "s3": ["pensad"],
    "p1": [""],
    "p2": ["piense"],
    "p3": ["piensen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no pienses"],
    "s3": ["no penséis"],
    "p1": [""],
    "p2": ["no piense"],
    "p3": ["no piensen"]
  },
  "In Pres Pro": {
    "s1": ["estoy pensando"],
    "s2": ["estás pensando"],
    "s3": ["está pensando"],
    "p1": ["estamos pensando"],
    "p2": ["estáis pensando"],
    "p3": ["están pensando"]
  }
}, {
  "inf": "perder",
  "inf_eng": "to lose",
  "In Pres": {
    "s1": ["pierdo"],
    "s2": ["pierdes"],
    "s3": ["pierde"],
    "p1": ["perdemos"],
    "p2": ["perdéis"],
    "p3": ["pierden"]
  },
  "In Fut": {
    "s1": ["perderé"],
    "s2": ["perderás"],
    "s3": ["perderá"],
    "p1": ["perderemos"],
    "p2": ["perderéis"],
    "p3": ["perderán"]
  },
  "In Imp": {
    "s1": ["perdía"],
    "s2": ["perdías"],
    "s3": ["perdía"],
    "p1": ["perdíamos"],
    "p2": ["perdíais"],
    "p3": ["perdían"]
  },
  "In Pret": {
    "s1": ["perdí"],
    "s2": ["perdiste"],
    "s3": ["perdió"],
    "p1": ["perdimos"],
    "p2": ["perdisteis"],
    "p3": ["perdieron"]
  },
  "In Cond": {
    "s1": ["perdería"],
    "s2": ["perderías"],
    "s3": ["perdería"],
    "p1": ["perderíamos"],
    "p2": ["perderíais"],
    "p3": ["perderían"]
  },
  "In Pres Per": {
    "s1": ["he perdido"],
    "s2": ["has perdido"],
    "s3": ["ha perdido"],
    "p1": ["hemos perdido"],
    "p2": ["habéis perdido"],
    "p3": ["han perdido"]
  },
  "In Fut Per": {
    "s1": ["habré perdido"],
    "s2": ["habrás perdido"],
    "s3": ["habrá perdido"],
    "p1": ["habremos perdido"],
    "p2": ["habréis perdido"],
    "p3": ["habrán perdido"]
  },
  "In Pas Per": {
    "s1": ["había perdido"],
    "s2": ["habías perdido"],
    "s3": ["había perdido"],
    "p1": ["habíamos perdido"],
    "p2": ["habíais perdido"],
    "p3": ["habían perdido"]
  },
  "In Cond Per": {
    "s1": ["habría perdido"],
    "s2": ["habrías perdido"],
    "s3": ["habría perdido"],
    "p1": ["habríamos perdido"],
    "p2": ["habríais perdido"],
    "p3": ["habrían perdido"]
  },
  "Sub Pres": {
    "s1": ["pierda"],
    "s2": ["pierdas"],
    "s3": ["pierda"],
    "p1": ["perdamos"],
    "p2": ["perdáis"],
    "p3": ["pierdan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["pierde"],
    "s3": ["perded"],
    "p1": [""],
    "p2": ["pierda"],
    "p3": ["pierdan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no pierdas"],
    "s3": ["no perdáis"],
    "p1": [""],
    "p2": ["no pierda"],
    "p3": ["no pierdan"]
  },
  "In Pres Pro": {
    "s1": ["estoy perdiendo"],
    "s2": ["estás perdiendo"],
    "s3": ["está perdiendo"],
    "p1": ["estamos perdiendo"],
    "p2": ["estáis perdiendo"],
    "p3": ["están perdiendo"]
  }
}, {
  "inf": "permitir",
  "inf_eng": "to permit",
  "In Pres": {
    "s1": ["permito"],
    "s2": ["permites"],
    "s3": ["permite"],
    "p1": ["permitimos"],
    "p2": ["permitís"],
    "p3": ["permiten"]
  },
  "In Fut": {
    "s1": ["permitiré"],
    "s2": ["permitirás"],
    "s3": ["permitirá"],
    "p1": ["permitiremos"],
    "p2": ["permitiréis"],
    "p3": ["permitirán"]
  },
  "In Imp": {
    "s1": ["permitía"],
    "s2": ["permitías"],
    "s3": ["permitía"],
    "p1": ["permitíamos"],
    "p2": ["permitíais"],
    "p3": ["permitían"]
  },
  "In Pret": {
    "s1": ["permití"],
    "s2": ["permitiste"],
    "s3": ["permitió"],
    "p1": ["permitimos"],
    "p2": ["permitisteis"],
    "p3": ["permitieron"]
  },
  "In Cond": {
    "s1": ["permitiría"],
    "s2": ["permitirías"],
    "s3": ["permitiría"],
    "p1": ["permitiríamos"],
    "p2": ["permitiríais"],
    "p3": ["permitirían"]
  },
  "In Pres Per": {
    "s1": ["he permitido"],
    "s2": ["has permitido"],
    "s3": ["ha permitido"],
    "p1": ["hemos permitido"],
    "p2": ["habéis permitido"],
    "p3": ["han permitido"]
  },
  "In Fut Per": {
    "s1": ["habré permitido"],
    "s2": ["habrás permitido"],
    "s3": ["habrá permitido"],
    "p1": ["habremos permitido"],
    "p2": ["habréis permitido"],
    "p3": ["habrán permitido"]
  },
  "In Pas Per": {
    "s1": ["había permitido"],
    "s2": ["habías permitido"],
    "s3": ["había permitido"],
    "p1": ["habíamos permitido"],
    "p2": ["habíais permitido"],
    "p3": ["habían permitido"]
  },
  "In Cond Per": {
    "s1": ["habría permitido"],
    "s2": ["habrías permitido"],
    "s3": ["habría permitido"],
    "p1": ["habríamos permitido"],
    "p2": ["habríais permitido"],
    "p3": ["habrían permitido"]
  },
  "Sub Pres": {
    "s1": ["permita"],
    "s2": ["permitas"],
    "s3": ["permita"],
    "p1": ["permitamos"],
    "p2": ["permitáis"],
    "p3": ["permitan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["permite"],
    "s3": ["permitid"],
    "p1": [""],
    "p2": ["permita"],
    "p3": ["permitan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no permitas"],
    "s3": ["no permitáis"],
    "p1": [""],
    "p2": ["no permita"],
    "p3": ["no permitan"]
  },
  "In Pres Pro": {
    "s1": ["estoy permitiendo"],
    "s2": ["estás permitiendo"],
    "s3": ["está permitiendo"],
    "p1": ["estamos permitiendo"],
    "p2": ["estáis permitiendo"],
    "p3": ["están permitiendo"]
  }
}, {
  "inf": "perseguir",
  "inf_eng": "to pursue",
  "In Pres": {
    "s1": ["persigo"],
    "s2": ["persigues"],
    "s3": ["persigue"],
    "p1": ["perseguimos"],
    "p2": ["perseguís"],
    "p3": ["persiguen"]
  },
  "In Fut": {
    "s1": ["perseguiré"],
    "s2": ["perseguirás"],
    "s3": ["perseguirá"],
    "p1": ["perseguiremos"],
    "p2": ["perseguiréis"],
    "p3": ["perseguirán"]
  },
  "In Imp": {
    "s1": ["perseguía"],
    "s2": ["perseguías"],
    "s3": ["perseguía"],
    "p1": ["perseguíamos"],
    "p2": ["perseguíais"],
    "p3": ["perseguían"]
  },
  "In Pret": {
    "s1": ["perseguí"],
    "s2": ["perseguiste"],
    "s3": ["persiguió"],
    "p1": ["perseguimos"],
    "p2": ["perseguisteis"],
    "p3": ["persiguieron"]
  },
  "In Cond": {
    "s1": ["perseguiría"],
    "s2": ["perseguirías"],
    "s3": ["perseguiría"],
    "p1": ["perseguiríamos"],
    "p2": ["perseguiríais"],
    "p3": ["perseguirían"]
  },
  "In Pres Per": {
    "s1": ["he perseguido"],
    "s2": ["has perseguido"],
    "s3": ["ha perseguido"],
    "p1": ["hemos perseguido"],
    "p2": ["habéis perseguido"],
    "p3": ["han perseguido"]
  },
  "In Fut Per": {
    "s1": ["habré perseguido"],
    "s2": ["habrás perseguido"],
    "s3": ["habrá perseguido"],
    "p1": ["habremos perseguido"],
    "p2": ["habréis perseguido"],
    "p3": ["habrán perseguido"]
  },
  "In Pas Per": {
    "s1": ["había perseguido"],
    "s2": ["habías perseguido"],
    "s3": ["había perseguido"],
    "p1": ["habíamos perseguido"],
    "p2": ["habíais perseguido"],
    "p3": ["habían perseguido"]
  },
  "In Cond Per": {
    "s1": ["habría perseguido"],
    "s2": ["habrías perseguido"],
    "s3": ["habría perseguido"],
    "p1": ["habríamos perseguido"],
    "p2": ["habríais perseguido"],
    "p3": ["habrían perseguido"]
  },
  "Sub Pres": {
    "s1": ["persiga"],
    "s2": ["persigas"],
    "s3": ["persiga"],
    "p1": ["persigamos"],
    "p2": ["persigáis"],
    "p3": ["persigan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["persigue"],
    "s3": ["perseguid"],
    "p1": [""],
    "p2": ["persiga"],
    "p3": ["persigan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no persigas"],
    "s3": ["no persigáis"],
    "p1": [""],
    "p2": ["no persiga"],
    "p3": ["no persigan"]
  },
  "In Pres Pro": {
    "s1": ["estoy persiguiendo"],
    "s2": ["estás persiguiendo"],
    "s3": ["está persiguiendo"],
    "p1": ["estamos persiguiendo"],
    "p2": ["estáis persiguiendo"],
    "p3": ["están persiguiendo"]
  }
}, {
  "inf": "planchar",
  "inf_eng": "to iron",
  "In Pres": {
    "s1": ["plancho"],
    "s2": ["planchas"],
    "s3": ["plancha"],
    "p1": ["planchamos"],
    "p2": ["plancháis"],
    "p3": ["planchan"]
  },
  "In Fut": {
    "s1": ["plancharé"],
    "s2": ["plancharás"],
    "s3": ["planchará"],
    "p1": ["plancharemos"],
    "p2": ["plancharéis"],
    "p3": ["plancharán"]
  },
  "In Imp": {
    "s1": ["planchaba"],
    "s2": ["planchabas"],
    "s3": ["planchaba"],
    "p1": ["planchábamos"],
    "p2": ["planchabais"],
    "p3": ["planchaban"]
  },
  "In Pret": {
    "s1": ["planché"],
    "s2": ["planchaste"],
    "s3": ["planchó"],
    "p1": ["planchamos"],
    "p2": ["planchasteis"],
    "p3": ["plancharon"]
  },
  "In Cond": {
    "s1": ["plancharía"],
    "s2": ["plancharías"],
    "s3": ["plancharía"],
    "p1": ["plancharíamos"],
    "p2": ["plancharíais"],
    "p3": ["plancharían"]
  },
  "In Pres Per": {
    "s1": ["he planchado"],
    "s2": ["has planchado"],
    "s3": ["ha planchado"],
    "p1": ["hemos planchado"],
    "p2": ["habéis planchado"],
    "p3": ["han planchado"]
  },
  "In Fut Per": {
    "s1": ["habré planchado"],
    "s2": ["habrás planchado"],
    "s3": ["habrá planchado"],
    "p1": ["habremos planchado"],
    "p2": ["habréis planchado"],
    "p3": ["habrán planchado"]
  },
  "In Pas Per": {
    "s1": ["había planchado"],
    "s2": ["habías planchado"],
    "s3": ["había planchado"],
    "p1": ["habíamos planchado"],
    "p2": ["habíais planchado"],
    "p3": ["habían planchado"]
  },
  "In Cond Per": {
    "s1": ["habría planchado"],
    "s2": ["habrías planchado"],
    "s3": ["habría planchado"],
    "p1": ["habríamos planchado"],
    "p2": ["habríais planchado"],
    "p3": ["habrían planchado"]
  },
  "Sub Pres": {
    "s1": ["planche"],
    "s2": ["planches"],
    "s3": ["planche"],
    "p1": ["planchemos"],
    "p2": ["planchéis"],
    "p3": ["planchen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["plancha"],
    "s3": ["planchad"],
    "p1": [""],
    "p2": ["planche"],
    "p3": ["planchen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no planches"],
    "s3": ["no planchéis"],
    "p1": [""],
    "p2": ["no planche"],
    "p3": ["no planchen"]
  },
  "In Pres Pro": {
    "s1": ["estoy planchando"],
    "s2": ["estás planchando"],
    "s3": ["está planchando"],
    "p1": ["estamos planchando"],
    "p2": ["estáis planchando"],
    "p3": ["están planchando"]
  }
}, {
  "inf": "poder",
  "inf_eng": "to be able",
  "In Pres": {
    "s1": ["puedo"],
    "s2": ["puedes"],
    "s3": ["puede"],
    "p1": ["podemos"],
    "p2": ["podéis"],
    "p3": ["pueden"]
  },
  "In Fut": {
    "s1": ["podré"],
    "s2": ["podrás"],
    "s3": ["podrá"],
    "p1": ["podremos"],
    "p2": ["podréis"],
    "p3": ["podrán"]
  },
  "In Imp": {
    "s1": ["podía"],
    "s2": ["podías"],
    "s3": ["podía"],
    "p1": ["podíamos"],
    "p2": ["podíais"],
    "p3": ["podían"]
  },
  "In Pret": {
    "s1": ["pude"],
    "s2": ["pudiste"],
    "s3": ["pudo"],
    "p1": ["pudimos"],
    "p2": ["pudisteis"],
    "p3": ["pudieron"]
  },
  "In Cond": {
    "s1": ["podría"],
    "s2": ["podrías"],
    "s3": ["podría"],
    "p1": ["podríamos"],
    "p2": ["podríais"],
    "p3": ["podrían"]
  },
  "In Pres Per": {
    "s1": ["he podido"],
    "s2": ["has podido"],
    "s3": ["ha podido"],
    "p1": ["hemos podido"],
    "p2": ["habéis podido"],
    "p3": ["han podido"]
  },
  "In Fut Per": {
    "s1": ["habré podido"],
    "s2": ["habrás podido"],
    "s3": ["habrá podido"],
    "p1": ["habremos podido"],
    "p2": ["habréis podido"],
    "p3": ["habrán podido"]
  },
  "In Pas Per": {
    "s1": ["había podido"],
    "s2": ["habías podido"],
    "s3": ["había podido"],
    "p1": ["habíamos podido"],
    "p2": ["habíais podido"],
    "p3": ["habían podido"]
  },
  "In Cond Per": {
    "s1": ["habría podido"],
    "s2": ["habrías podido"],
    "s3": ["habría podido"],
    "p1": ["habríamos podido"],
    "p2": ["habríais podido"],
    "p3": ["habrían podido"]
  },
  "Sub Pres": {
    "s1": ["pueda"],
    "s2": ["puedas"],
    "s3": ["pueda"],
    "p1": ["podamos"],
    "p2": ["podáis"],
    "p3": ["puedan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["puede"],
    "s3": ["poded"],
    "p1": [""],
    "p2": ["pueda"],
    "p3": ["puedan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no puedas"],
    "s3": ["no podáis"],
    "p1": [""],
    "p2": ["no pueda"],
    "p3": ["no puedan"]
  },
  "In Pres Pro": {
    "s1": ["estoy pudiendo"],
    "s2": ["estás pudiendo"],
    "s3": ["está pudiendo"],
    "p1": ["estamos pudiendo"],
    "p2": ["estáis pudiendo"],
    "p3": ["están pudiendo"]
  }
}, {
  "inf": "poner",
  "inf_eng": "to put",
  "In Pres": {
    "s1": ["pongo"],
    "s2": ["pones"],
    "s3": ["pone"],
    "p1": ["ponemos"],
    "p2": ["ponéis"],
    "p3": ["ponen"]
  },
  "In Fut": {
    "s1": ["pondré"],
    "s2": ["pondrás"],
    "s3": ["pondrá"],
    "p1": ["pondremos"],
    "p2": ["pondréis"],
    "p3": ["pondrán"]
  },
  "In Imp": {
    "s1": ["ponía"],
    "s2": ["ponías"],
    "s3": ["ponía"],
    "p1": ["poníamos"],
    "p2": ["poníais"],
    "p3": ["ponían"]
  },
  "In Pret": {
    "s1": ["puse"],
    "s2": ["pusiste"],
    "s3": ["puso"],
    "p1": ["pusimos"],
    "p2": ["pusisteis"],
    "p3": ["pusieron"]
  },
  "In Cond": {
    "s1": ["pondría"],
    "s2": ["pondrías"],
    "s3": ["pondría"],
    "p1": ["pondríamos"],
    "p2": ["pondríais"],
    "p3": ["pondrían"]
  },
  "In Pres Per": {
    "s1": ["he puesto"],
    "s2": ["has puesto"],
    "s3": ["ha puesto"],
    "p1": ["hemos puesto"],
    "p2": ["habéis puesto"],
    "p3": ["han puesto"]
  },
  "In Fut Per": {
    "s1": ["habré puesto"],
    "s2": ["habrás puesto"],
    "s3": ["habrá puesto"],
    "p1": ["habremos puesto"],
    "p2": ["habréis puesto"],
    "p3": ["habrán puesto"]
  },
  "In Pas Per": {
    "s1": ["había puesto"],
    "s2": ["habías puesto"],
    "s3": ["había puesto"],
    "p1": ["habíamos puesto"],
    "p2": ["habíais puesto"],
    "p3": ["habían puesto"]
  },
  "In Cond Per": {
    "s1": ["habría puesto"],
    "s2": ["habrías puesto"],
    "s3": ["habría puesto"],
    "p1": ["habríamos puesto"],
    "p2": ["habríais puesto"],
    "p3": ["habrían puesto"]
  },
  "Sub Pres": {
    "s1": ["ponga"],
    "s2": ["pongas"],
    "s3": ["ponga"],
    "p1": ["pongamos"],
    "p2": ["pongáis"],
    "p3": ["pongan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["pon"],
    "s3": ["poned"],
    "p1": [""],
    "p2": ["ponga"],
    "p3": ["pongan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no pongas"],
    "s3": ["no pongáis"],
    "p1": [""],
    "p2": ["no ponga"],
    "p3": ["no pongan"]
  },
  "In Pres Pro": {
    "s1": ["estoy poniendo"],
    "s2": ["estás poniendo"],
    "s3": ["está poniendo"],
    "p1": ["estamos poniendo"],
    "p2": ["estáis poniendo"],
    "p3": ["están poniendo"]
  }
}, {
  "inf": "preguntar",
  "inf_eng": "to ask",
  "In Pres": {
    "s1": ["pregunto"],
    "s2": ["preguntas"],
    "s3": ["pregunta"],
    "p1": ["preguntamos"],
    "p2": ["preguntáis"],
    "p3": ["preguntan"]
  },
  "In Fut": {
    "s1": ["preguntaré"],
    "s2": ["preguntarás"],
    "s3": ["preguntará"],
    "p1": ["preguntaremos"],
    "p2": ["preguntaréis"],
    "p3": ["preguntarán"]
  },
  "In Imp": {
    "s1": ["preguntaba"],
    "s2": ["preguntabas"],
    "s3": ["preguntaba"],
    "p1": ["preguntábamos"],
    "p2": ["preguntabais"],
    "p3": ["preguntaban"]
  },
  "In Pret": {
    "s1": ["pregunté"],
    "s2": ["preguntaste"],
    "s3": ["preguntó"],
    "p1": ["preguntamos"],
    "p2": ["preguntasteis"],
    "p3": ["preguntaron"]
  },
  "In Cond": {
    "s1": ["preguntaría"],
    "s2": ["preguntarías"],
    "s3": ["preguntaría"],
    "p1": ["preguntaríamos"],
    "p2": ["preguntaríais"],
    "p3": ["preguntarían"]
  },
  "In Pres Per": {
    "s1": ["he preguntado"],
    "s2": ["has preguntado"],
    "s3": ["ha preguntado"],
    "p1": ["hemos preguntado"],
    "p2": ["habéis preguntado"],
    "p3": ["han preguntado"]
  },
  "In Fut Per": {
    "s1": ["habré preguntado"],
    "s2": ["habrás preguntado"],
    "s3": ["habrá preguntado"],
    "p1": ["habremos preguntado"],
    "p2": ["habréis preguntado"],
    "p3": ["habrán preguntado"]
  },
  "In Pas Per": {
    "s1": ["había preguntado"],
    "s2": ["habías preguntado"],
    "s3": ["había preguntado"],
    "p1": ["habíamos preguntado"],
    "p2": ["habíais preguntado"],
    "p3": ["habían preguntado"]
  },
  "In Cond Per": {
    "s1": ["habría preguntado"],
    "s2": ["habrías preguntado"],
    "s3": ["habría preguntado"],
    "p1": ["habríamos preguntado"],
    "p2": ["habríais preguntado"],
    "p3": ["habrían preguntado"]
  },
  "Sub Pres": {
    "s1": ["pregunte"],
    "s2": ["preguntes"],
    "s3": ["pregunte"],
    "p1": ["preguntemos"],
    "p2": ["preguntéis"],
    "p3": ["pregunten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["pregunta"],
    "s3": ["preguntad"],
    "p1": [""],
    "p2": ["pregunte"],
    "p3": ["pregunten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no preguntes"],
    "s3": ["no preguntéis"],
    "p1": [""],
    "p2": ["no pregunte"],
    "p3": ["no pregunten"]
  },
  "In Pres Pro": {
    "s1": ["estoy preguntando"],
    "s2": ["estás preguntando"],
    "s3": ["está preguntando"],
    "p1": ["estamos preguntando"],
    "p2": ["estáis preguntando"],
    "p3": ["están preguntando"]
  }
}, {
  "inf": "probar",
  "inf_eng": "to taste",
  "In Pres": {
    "s1": ["pruebo"],
    "s2": ["pruebas"],
    "s3": ["prueba"],
    "p1": ["probamos"],
    "p2": ["probáis"],
    "p3": ["prueban"]
  },
  "In Fut": {
    "s1": ["probaré"],
    "s2": ["probarás"],
    "s3": ["probará"],
    "p1": ["probaremos"],
    "p2": ["probaréis"],
    "p3": ["probarán"]
  },
  "In Imp": {
    "s1": ["probaba"],
    "s2": ["probabas"],
    "s3": ["probaba"],
    "p1": ["probábamos"],
    "p2": ["probabais"],
    "p3": ["probaban"]
  },
  "In Pret": {
    "s1": ["probé"],
    "s2": ["probaste"],
    "s3": ["probó"],
    "p1": ["probamos"],
    "p2": ["probasteis"],
    "p3": ["probaron"]
  },
  "In Cond": {
    "s1": ["probaría"],
    "s2": ["probarías"],
    "s3": ["probaría"],
    "p1": ["probaríamos"],
    "p2": ["probaríais"],
    "p3": ["probarían"]
  },
  "In Pres Per": {
    "s1": ["he probado"],
    "s2": ["has probado"],
    "s3": ["ha probado"],
    "p1": ["hemos probado"],
    "p2": ["habéis probado"],
    "p3": ["han probado"]
  },
  "In Fut Per": {
    "s1": ["habré probado"],
    "s2": ["habrás probado"],
    "s3": ["habrá probado"],
    "p1": ["habremos probado"],
    "p2": ["habréis probado"],
    "p3": ["habrán probado"]
  },
  "In Pas Per": {
    "s1": ["había probado"],
    "s2": ["habías probado"],
    "s3": ["había probado"],
    "p1": ["habíamos probado"],
    "p2": ["habíais probado"],
    "p3": ["habían probado"]
  },
  "In Cond Per": {
    "s1": ["habría probado"],
    "s2": ["habrías probado"],
    "s3": ["habría probado"],
    "p1": ["habríamos probado"],
    "p2": ["habríais probado"],
    "p3": ["habrían probado"]
  },
  "Sub Pres": {
    "s1": ["pruebe"],
    "s2": ["pruebes"],
    "s3": ["pruebe"],
    "p1": ["probemos"],
    "p2": ["probéis"],
    "p3": ["prueben"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["prueba"],
    "s3": ["probad"],
    "p1": [""],
    "p2": ["pruebe"],
    "p3": ["prueben"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no pruebes"],
    "s3": ["no probéis"],
    "p1": [""],
    "p2": ["no pruebe"],
    "p3": ["no prueben"]
  },
  "In Pres Pro": {
    "s1": ["estoy probando"],
    "s2": ["estás probando"],
    "s3": ["está probando"],
    "p1": ["estamos probando"],
    "p2": ["estáis probando"],
    "p3": ["están probando"]
  }
}, {
  "inf": "prometer",
  "inf_eng": "to promise",
  "In Pres": {
    "s1": ["prometo"],
    "s2": ["prometes"],
    "s3": ["promete"],
    "p1": ["prometemos"],
    "p2": ["prometéis"],
    "p3": ["prometen"]
  },
  "In Fut": {
    "s1": ["prometeré"],
    "s2": ["prometerás"],
    "s3": ["prometerá"],
    "p1": ["prometeremos"],
    "p2": ["prometeréis"],
    "p3": ["prometerán"]
  },
  "In Imp": {
    "s1": ["prometía"],
    "s2": ["prometías"],
    "s3": ["prometía"],
    "p1": ["prometíamos"],
    "p2": ["prometíais"],
    "p3": ["prometían"]
  },
  "In Pret": {
    "s1": ["prometí"],
    "s2": ["prometiste"],
    "s3": ["prometió"],
    "p1": ["prometimos"],
    "p2": ["prometisteis"],
    "p3": ["prometieron"]
  },
  "In Cond": {
    "s1": ["prometería"],
    "s2": ["prometerías"],
    "s3": ["prometería"],
    "p1": ["prometeríamos"],
    "p2": ["prometeríais"],
    "p3": ["prometerían"]
  },
  "In Pres Per": {
    "s1": ["he prometido"],
    "s2": ["has prometido"],
    "s3": ["ha prometido"],
    "p1": ["hemos prometido"],
    "p2": ["habéis prometido"],
    "p3": ["han prometido"]
  },
  "In Fut Per": {
    "s1": ["habré prometido"],
    "s2": ["habrás prometido"],
    "s3": ["habrá prometido"],
    "p1": ["habremos prometido"],
    "p2": ["habréis prometido"],
    "p3": ["habrán prometido"]
  },
  "In Pas Per": {
    "s1": ["había prometido"],
    "s2": ["habías prometido"],
    "s3": ["había prometido"],
    "p1": ["habíamos prometido"],
    "p2": ["habíais prometido"],
    "p3": ["habían prometido"]
  },
  "In Cond Per": {
    "s1": ["habría prometido"],
    "s2": ["habrías prometido"],
    "s3": ["habría prometido"],
    "p1": ["habríamos prometido"],
    "p2": ["habríais prometido"],
    "p3": ["habrían prometido"]
  },
  "Sub Pres": {
    "s1": ["prometa"],
    "s2": ["prometas"],
    "s3": ["prometa"],
    "p1": ["prometamos"],
    "p2": ["prometáis"],
    "p3": ["prometan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["promete"],
    "s3": ["prometed"],
    "p1": [""],
    "p2": ["prometa"],
    "p3": ["prometan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no prometas"],
    "s3": ["no prometáis"],
    "p1": [""],
    "p2": ["no prometa"],
    "p3": ["no prometan"]
  },
  "In Pres Pro": {
    "s1": ["estoy prometiendo"],
    "s2": ["estás prometiendo"],
    "s3": ["está prometiendo"],
    "p1": ["estamos prometiendo"],
    "p2": ["estáis prometiendo"],
    "p3": ["están prometiendo"]
  }
}, {
  "inf": "realizar",
  "inf_eng": "to achieve",
  "In Pres": {
    "s1": ["realizo"],
    "s2": ["realizas"],
    "s3": ["realiza"],
    "p1": ["realizamos"],
    "p2": ["realizáis"],
    "p3": ["realizan"]
  },
  "In Fut": {
    "s1": ["realizaré"],
    "s2": ["realizarás"],
    "s3": ["realizará"],
    "p1": ["realizaremos"],
    "p2": ["realizaréis"],
    "p3": ["realizarán"]
  },
  "In Imp": {
    "s1": ["realizaba"],
    "s2": ["realizabas"],
    "s3": ["realizaba"],
    "p1": ["realizábamos"],
    "p2": ["realizabais"],
    "p3": ["realizaban"]
  },
  "In Pret": {
    "s1": ["realicé"],
    "s2": ["realizaste"],
    "s3": ["realizó"],
    "p1": ["realizamos"],
    "p2": ["realizasteis"],
    "p3": ["realizaron"]
  },
  "In Cond": {
    "s1": ["realizaría"],
    "s2": ["realizarías"],
    "s3": ["realizaría"],
    "p1": ["realizaríamos"],
    "p2": ["realizaríais"],
    "p3": ["realizarían"]
  },
  "In Pres Per": {
    "s1": ["he realizado"],
    "s2": ["has realizado"],
    "s3": ["ha realizado"],
    "p1": ["hemos realizado"],
    "p2": ["habéis realizado"],
    "p3": ["han realizado"]
  },
  "In Fut Per": {
    "s1": ["habré realizado"],
    "s2": ["habrás realizado"],
    "s3": ["habrá realizado"],
    "p1": ["habremos realizado"],
    "p2": ["habréis realizado"],
    "p3": ["habrán realizado"]
  },
  "In Pas Per": {
    "s1": ["había realizado"],
    "s2": ["habías realizado"],
    "s3": ["había realizado"],
    "p1": ["habíamos realizado"],
    "p2": ["habíais realizado"],
    "p3": ["habían realizado"]
  },
  "In Cond Per": {
    "s1": ["habría realizado"],
    "s2": ["habrías realizado"],
    "s3": ["habría realizado"],
    "p1": ["habríamos realizado"],
    "p2": ["habríais realizado"],
    "p3": ["habrían realizado"]
  },
  "Sub Pres": {
    "s1": ["realice"],
    "s2": ["realices"],
    "s3": ["realice"],
    "p1": ["realicemos"],
    "p2": ["realicéis"],
    "p3": ["realicen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["realiza"],
    "s3": ["realizad"],
    "p1": [""],
    "p2": ["realice"],
    "p3": ["realicen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no realices"],
    "s3": ["no realicéis"],
    "p1": [""],
    "p2": ["no realice"],
    "p3": ["no realicen"]
  },
  "In Pres Pro": {
    "s1": ["estoy realizando"],
    "s2": ["estás realizando"],
    "s3": ["está realizando"],
    "p1": ["estamos realizando"],
    "p2": ["estáis realizando"],
    "p3": ["están realizando"]
  }
}, {
  "inf": "recibir",
  "inf_eng": "to receive",
  "In Pres": {
    "s1": ["recibo"],
    "s2": ["recibes"],
    "s3": ["recibe"],
    "p1": ["recibimos"],
    "p2": ["recibís"],
    "p3": ["reciben"]
  },
  "In Fut": {
    "s1": ["recibiré"],
    "s2": ["recibirás"],
    "s3": ["recibirá"],
    "p1": ["recibiremos"],
    "p2": ["recibiréis"],
    "p3": ["recibirán"]
  },
  "In Imp": {
    "s1": ["recibía"],
    "s2": ["recibías"],
    "s3": ["recibía"],
    "p1": ["recibíamos"],
    "p2": ["recibíais"],
    "p3": ["recibían"]
  },
  "In Pret": {
    "s1": ["recibí"],
    "s2": ["recibiste"],
    "s3": ["recibió"],
    "p1": ["recibimos"],
    "p2": ["recibisteis"],
    "p3": ["recibieron"]
  },
  "In Cond": {
    "s1": ["recibiría"],
    "s2": ["recibirías"],
    "s3": ["recibiría"],
    "p1": ["recibiríamos"],
    "p2": ["recibiríais"],
    "p3": ["recibirían"]
  },
  "In Pres Per": {
    "s1": ["he recibido"],
    "s2": ["has recibido"],
    "s3": ["ha recibido"],
    "p1": ["hemos recibido"],
    "p2": ["habéis recibido"],
    "p3": ["han recibido"]
  },
  "In Fut Per": {
    "s1": ["habré recibido"],
    "s2": ["habrás recibido"],
    "s3": ["habrá recibido"],
    "p1": ["habremos recibido"],
    "p2": ["habréis recibido"],
    "p3": ["habrán recibido"]
  },
  "In Pas Per": {
    "s1": ["había recibido"],
    "s2": ["habías recibido"],
    "s3": ["había recibido"],
    "p1": ["habíamos recibido"],
    "p2": ["habíais recibido"],
    "p3": ["habían recibido"]
  },
  "In Cond Per": {
    "s1": ["habría recibido"],
    "s2": ["habrías recibido"],
    "s3": ["habría recibido"],
    "p1": ["habríamos recibido"],
    "p2": ["habríais recibido"],
    "p3": ["habrían recibido"]
  },
  "Sub Pres": {
    "s1": ["reciba"],
    "s2": ["recibas"],
    "s3": ["reciba"],
    "p1": ["recibamos"],
    "p2": ["recibáis"],
    "p3": ["reciban"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["recibe"],
    "s3": ["recibid"],
    "p1": [""],
    "p2": ["reciba"],
    "p3": ["reciban"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no recibas"],
    "s3": ["no recibáis"],
    "p1": [""],
    "p2": ["no reciba"],
    "p3": ["no reciban"]
  },
  "In Pres Pro": {
    "s1": ["estoy recibiendo"],
    "s2": ["estás recibiendo"],
    "s3": ["está recibiendo"],
    "p1": ["estamos recibiendo"],
    "p2": ["estáis recibiendo"],
    "p3": ["están recibiendo"]
  }
}, {
  "inf": "reconocer",
  "inf_eng": "to recognize",
  "In Pres": {
    "s1": ["reconozco"],
    "s2": ["reconoces"],
    "s3": ["reconoce"],
    "p1": ["reconocemos"],
    "p2": ["reconocéis"],
    "p3": ["reconocen"]
  },
  "In Fut": {
    "s1": ["reconoceré"],
    "s2": ["reconocerás"],
    "s3": ["reconocerá"],
    "p1": ["reconoceremos"],
    "p2": ["reconoceréis"],
    "p3": ["reconocerán"]
  },
  "In Imp": {
    "s1": ["reconocía"],
    "s2": ["reconocías"],
    "s3": ["reconocía"],
    "p1": ["reconocíamos"],
    "p2": ["reconocíais"],
    "p3": ["reconocían"]
  },
  "In Pret": {
    "s1": ["reconocí"],
    "s2": ["reconociste"],
    "s3": ["reconoció"],
    "p1": ["reconocimos"],
    "p2": ["reconocisteis"],
    "p3": ["reconocieron"]
  },
  "In Cond": {
    "s1": ["reconocería"],
    "s2": ["reconocerías"],
    "s3": ["reconocería"],
    "p1": ["reconoceríamos"],
    "p2": ["reconoceríais"],
    "p3": ["reconocerían"]
  },
  "In Pres Per": {
    "s1": ["he reconocido"],
    "s2": ["has reconocido"],
    "s3": ["ha reconocido"],
    "p1": ["hemos reconocido"],
    "p2": ["habéis reconocido"],
    "p3": ["han reconocido"]
  },
  "In Fut Per": {
    "s1": ["habré reconocido"],
    "s2": ["habrás reconocido"],
    "s3": ["habrá reconocido"],
    "p1": ["habremos reconocido"],
    "p2": ["habréis reconocido"],
    "p3": ["habrán reconocido"]
  },
  "In Pas Per": {
    "s1": ["había reconocido"],
    "s2": ["habías reconocido"],
    "s3": ["había reconocido"],
    "p1": ["habíamos reconocido"],
    "p2": ["habíais reconocido"],
    "p3": ["habían reconocido"]
  },
  "In Cond Per": {
    "s1": ["habría reconocido"],
    "s2": ["habrías reconocido"],
    "s3": ["habría reconocido"],
    "p1": ["habríamos reconocido"],
    "p2": ["habríais reconocido"],
    "p3": ["habrían reconocido"]
  },
  "Sub Pres": {
    "s1": ["reconozca"],
    "s2": ["reconozcas"],
    "s3": ["reconozca"],
    "p1": ["reconozcamos"],
    "p2": ["reconozcáis"],
    "p3": ["reconozcan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["reconoce"],
    "s3": ["reconoced"],
    "p1": [""],
    "p2": ["reconozca"],
    "p3": ["reconozcan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no reconozcas"],
    "s3": ["no reconozcáis"],
    "p1": [""],
    "p2": ["no reconozca"],
    "p3": ["no reconozcan"]
  },
  "In Pres Pro": {
    "s1": ["estoy reconociendo"],
    "s2": ["estás reconociendo"],
    "s3": ["está reconociendo"],
    "p1": ["estamos reconociendo"],
    "p2": ["estáis reconociendo"],
    "p3": ["están reconociendo"]
  }
}, {
  "inf": "reír",
  "inf_eng": "to laugh",
  "In Pres": {
    "s1": ["río"],
    "s2": ["ríes"],
    "s3": ["ríe"],
    "p1": ["reímos"],
    "p2": ["reís"],
    "p3": ["ríen"]
  },
  "In Fut": {
    "s1": ["reiré"],
    "s2": ["reirás"],
    "s3": ["reirá"],
    "p1": ["reiremos"],
    "p2": ["reiréis"],
    "p3": ["reirán"]
  },
  "In Imp": {
    "s1": ["reía"],
    "s2": ["reías"],
    "s3": ["reía"],
    "p1": ["reíamos"],
    "p2": ["reíais"],
    "p3": ["reían"]
  },
  "In Pret": {
    "s1": ["reí"],
    "s2": ["reíste"],
    "s3": ["rio"],
    "p1": ["reímos"],
    "p2": ["reísteis"],
    "p3": ["rieron"]
  },
  "In Cond": {
    "s1": ["reiría"],
    "s2": ["reirías"],
    "s3": ["reiría"],
    "p1": ["reiríamos"],
    "p2": ["reiríais"],
    "p3": ["reirían"]
  },
  "In Pres Per": {
    "s1": ["he reído"],
    "s2": ["has reído"],
    "s3": ["ha reído"],
    "p1": ["hemos reído"],
    "p2": ["habéis reído"],
    "p3": ["han reído"]
  },
  "In Fut Per": {
    "s1": ["habré reído"],
    "s2": ["habrás reído"],
    "s3": ["habrá reído"],
    "p1": ["habremos reído"],
    "p2": ["habréis reído"],
    "p3": ["habrán reído"]
  },
  "In Pas Per": {
    "s1": ["había reído"],
    "s2": ["habías reído"],
    "s3": ["había reído"],
    "p1": ["habíamos reído"],
    "p2": ["habíais reído"],
    "p3": ["habían reído"]
  },
  "In Cond Per": {
    "s1": ["habría reído"],
    "s2": ["habrías reído"],
    "s3": ["habría reído"],
    "p1": ["habríamos reído"],
    "p2": ["habríais reído"],
    "p3": ["habrían reído"]
  },
  "Sub Pres": {
    "s1": ["ría"],
    "s2": ["rías"],
    "s3": ["ría"],
    "p1": ["riamos"],
    "p2": ["riáis"],
    "p3": ["rían"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["ríe"],
    "s3": ["reíd"],
    "p1": [""],
    "p2": ["ría"],
    "p3": ["rían"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no rías"],
    "s3": ["no riais"],
    "p1": [""],
    "p2": ["no ría"],
    "p3": ["no rían"]
  },
  "In Pres Pro": {
    "s1": ["estoy riendo"],
    "s2": ["estás riendo"],
    "s3": ["está riendo"],
    "p1": ["estamos riendo"],
    "p2": ["estáis riendo"],
    "p3": ["están riendo"]
  }
}, {
  "inf": "respirar",
  "inf_eng": "to breathe",
  "In Pres": {
    "s1": ["respiro"],
    "s2": ["respiras"],
    "s3": ["respira"],
    "p1": ["respiramos"],
    "p2": ["respiráis"],
    "p3": ["respiran"]
  },
  "In Fut": {
    "s1": ["respiraré"],
    "s2": ["respirarás"],
    "s3": ["respirará"],
    "p1": ["respiraremos"],
    "p2": ["respiraréis"],
    "p3": ["respirarán"]
  },
  "In Imp": {
    "s1": ["respiraba"],
    "s2": ["respirabas"],
    "s3": ["respiraba"],
    "p1": ["respirábamos"],
    "p2": ["respirabais"],
    "p3": ["respiraban"]
  },
  "In Pret": {
    "s1": ["respiré"],
    "s2": ["respiraste"],
    "s3": ["respiró"],
    "p1": ["respiramos"],
    "p2": ["respirasteis"],
    "p3": ["respiraron"]
  },
  "In Cond": {
    "s1": ["respiraría"],
    "s2": ["respirarías"],
    "s3": ["respiraría"],
    "p1": ["respiraríamos"],
    "p2": ["respiraríais"],
    "p3": ["respirarían"]
  },
  "In Pres Per": {
    "s1": ["he respirado"],
    "s2": ["has respirado"],
    "s3": ["ha respirado"],
    "p1": ["hemos respirado"],
    "p2": ["habéis respirado"],
    "p3": ["han respirado"]
  },
  "In Fut Per": {
    "s1": ["habré respirado"],
    "s2": ["habrás respirado"],
    "s3": ["habrá respirado"],
    "p1": ["habremos respirado"],
    "p2": ["habréis respirado"],
    "p3": ["habrán respirado"]
  },
  "In Pas Per": {
    "s1": ["había respirado"],
    "s2": ["habías respirado"],
    "s3": ["había respirado"],
    "p1": ["habíamos respirado"],
    "p2": ["habíais respirado"],
    "p3": ["habían respirado"]
  },
  "In Cond Per": {
    "s1": ["habría respirado"],
    "s2": ["habrías respirado"],
    "s3": ["habría respirado"],
    "p1": ["habríamos respirado"],
    "p2": ["habríais respirado"],
    "p3": ["habrían respirado"]
  },
  "Sub Pres": {
    "s1": ["respire"],
    "s2": ["respires"],
    "s3": ["respire"],
    "p1": ["respiremos"],
    "p2": ["respiréis"],
    "p3": ["respiren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["respira"],
    "s3": ["respirad"],
    "p1": [""],
    "p2": ["respire"],
    "p3": ["respiren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no respires"],
    "s3": ["no respiréis"],
    "p1": [""],
    "p2": ["no respire"],
    "p3": ["no respiren"]
  },
  "In Pres Pro": {
    "s1": ["estoy respirando"],
    "s2": ["estás respirando"],
    "s3": ["está respirando"],
    "p1": ["estamos respirando"],
    "p2": ["estáis respirando"],
    "p3": ["están respirando"]
  }
}, {
  "inf": "romper",
  "inf_eng": "to break",
  "In Pres": {
    "s1": ["rompo"],
    "s2": ["rompes"],
    "s3": ["rompe"],
    "p1": ["rompemos"],
    "p2": ["rompéis"],
    "p3": ["rompen"]
  },
  "In Fut": {
    "s1": ["romperé"],
    "s2": ["romperás"],
    "s3": ["romperá"],
    "p1": ["romperemos"],
    "p2": ["romperéis"],
    "p3": ["romperán"]
  },
  "In Imp": {
    "s1": ["rompía"],
    "s2": ["rompías"],
    "s3": ["rompía"],
    "p1": ["rompíamos"],
    "p2": ["rompíais"],
    "p3": ["rompían"]
  },
  "In Pret": {
    "s1": ["rompí"],
    "s2": ["rompiste"],
    "s3": ["rompió"],
    "p1": ["rompimos"],
    "p2": ["rompisteis"],
    "p3": ["rompieron"]
  },
  "In Cond": {
    "s1": ["rompería"],
    "s2": ["romperías"],
    "s3": ["rompería"],
    "p1": ["romperíamos"],
    "p2": ["romperíais"],
    "p3": ["romperían"]
  },
  "In Pres Per": {
    "s1": ["he roto"],
    "s2": ["has roto"],
    "s3": ["ha roto"],
    "p1": ["hemos roto"],
    "p2": ["habéis roto"],
    "p3": ["han roto"]
  },
  "In Fut Per": {
    "s1": ["habré roto"],
    "s2": ["habrás roto"],
    "s3": ["habrá roto"],
    "p1": ["habremos roto"],
    "p2": ["habréis roto"],
    "p3": ["habrán roto"]
  },
  "In Pas Per": {
    "s1": ["había roto"],
    "s2": ["habías roto"],
    "s3": ["había roto"],
    "p1": ["habíamos roto"],
    "p2": ["habíais roto"],
    "p3": ["habían roto"]
  },
  "In Cond Per": {
    "s1": ["habría roto"],
    "s2": ["habrías roto"],
    "s3": ["habría roto"],
    "p1": ["habríamos roto"],
    "p2": ["habríais roto"],
    "p3": ["habrían roto"]
  },
  "Sub Pres": {
    "s1": ["rompa"],
    "s2": ["rompas"],
    "s3": ["rompa"],
    "p1": ["rompamos"],
    "p2": ["rompáis"],
    "p3": ["rompan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["rompe"],
    "s3": ["romped"],
    "p1": [""],
    "p2": ["rompa"],
    "p3": ["rompan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no rompas"],
    "s3": ["no rompáis"],
    "p1": [""],
    "p2": ["no rompa"],
    "p3": ["no rompan"]
  },
  "In Pres Pro": {
    "s1": ["estoy rompiendo"],
    "s2": ["estás rompiendo"],
    "s3": ["está rompiendo"],
    "p1": ["estamos rompiendo"],
    "p2": ["estáis rompiendo"],
    "p3": ["están rompiendo"]
  }
}, {
  "inf": "saber",
  "inf_eng": "to know",
  "In Pres": {
    "s1": ["sé"],
    "s2": ["sabes"],
    "s3": ["sabe"],
    "p1": ["sabemos"],
    "p2": ["sabéis"],
    "p3": ["saben"]
  },
  "In Fut": {
    "s1": ["sabré"],
    "s2": ["sabrás"],
    "s3": ["sabrá"],
    "p1": ["sabremos"],
    "p2": ["sabréis"],
    "p3": ["sabrán"]
  },
  "In Imp": {
    "s1": ["sabía"],
    "s2": ["sabías"],
    "s3": ["sabía"],
    "p1": ["sabíamos"],
    "p2": ["sabíais"],
    "p3": ["sabían"]
  },
  "In Pret": {
    "s1": ["supe"],
    "s2": ["supiste"],
    "s3": ["supo"],
    "p1": ["supimos"],
    "p2": ["supisteis"],
    "p3": ["supieron"]
  },
  "In Cond": {
    "s1": ["sabría"],
    "s2": ["sabrías"],
    "s3": ["sabría"],
    "p1": ["sabríamos"],
    "p2": ["sabríais"],
    "p3": ["sabrían"]
  },
  "In Pres Per": {
    "s1": ["he sabido"],
    "s2": ["has sabido"],
    "s3": ["ha sabido"],
    "p1": ["hemos sabido"],
    "p2": ["habéis sabido"],
    "p3": ["han sabido"]
  },
  "In Fut Per": {
    "s1": ["habré sabido"],
    "s2": ["habrás sabido"],
    "s3": ["habrá sabido"],
    "p1": ["habremos sabido"],
    "p2": ["habréis sabido"],
    "p3": ["habrán sabido"]
  },
  "In Pas Per": {
    "s1": ["había sabido"],
    "s2": ["habías sabido"],
    "s3": ["había sabido"],
    "p1": ["habíamos sabido"],
    "p2": ["habíais sabido"],
    "p3": ["habían sabido"]
  },
  "In Cond Per": {
    "s1": ["habría sabido"],
    "s2": ["habrías sabido"],
    "s3": ["habría sabido"],
    "p1": ["habríamos sabido"],
    "p2": ["habríais sabido"],
    "p3": ["habrían sabido"]
  },
  "Sub Pres": {
    "s1": ["sepa"],
    "s2": ["sepas"],
    "s3": ["sepa"],
    "p1": ["sepamos"],
    "p2": ["sepáis"],
    "p3": ["sepan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sabe"],
    "s3": ["sabed"],
    "p1": [""],
    "p2": ["sepa"],
    "p3": ["sepan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no sepas"],
    "s3": ["no sepáis"],
    "p1": [""],
    "p2": ["no sepa"],
    "p3": ["no sepan"]
  },
  "In Pres Pro": {
    "s1": ["estoy sabiendo"],
    "s2": ["estás sabiendo"],
    "s3": ["está sabiendo"],
    "p1": ["estamos sabiendo"],
    "p2": ["estáis sabiendo"],
    "p3": ["están sabiendo"]
  }
}, {
  "inf": "sacar",
  "inf_eng": "to take out",
  "In Pres": {
    "s1": ["saco"],
    "s2": ["sacas"],
    "s3": ["saca"],
    "p1": ["sacamos"],
    "p2": ["sacáis"],
    "p3": ["sacan"]
  },
  "In Fut": {
    "s1": ["sacaré"],
    "s2": ["sacarás"],
    "s3": ["sacará"],
    "p1": ["sacaremos"],
    "p2": ["sacaréis"],
    "p3": ["sacarán"]
  },
  "In Imp": {
    "s1": ["sacaba"],
    "s2": ["sacabas"],
    "s3": ["sacaba"],
    "p1": ["sacábamos"],
    "p2": ["sacabais"],
    "p3": ["sacaban"]
  },
  "In Pret": {
    "s1": ["saqué"],
    "s2": ["sacaste"],
    "s3": ["sacó"],
    "p1": ["sacamos"],
    "p2": ["sacasteis"],
    "p3": ["sacaron"]
  },
  "In Cond": {
    "s1": ["sacaría"],
    "s2": ["sacarías"],
    "s3": ["sacaría"],
    "p1": ["sacaríamos"],
    "p2": ["sacaríais"],
    "p3": ["sacarían"]
  },
  "In Pres Per": {
    "s1": ["he sacado"],
    "s2": ["has sacado"],
    "s3": ["ha sacado"],
    "p1": ["hemos sacado"],
    "p2": ["habéis sacado"],
    "p3": ["han sacado"]
  },
  "In Fut Per": {
    "s1": ["habré sacado"],
    "s2": ["habrás sacado"],
    "s3": ["habrá sacado"],
    "p1": ["habremos sacado"],
    "p2": ["habréis sacado"],
    "p3": ["habrán sacado"]
  },
  "In Pas Per": {
    "s1": ["había sacado"],
    "s2": ["habías sacado"],
    "s3": ["había sacado"],
    "p1": ["habíamos sacado"],
    "p2": ["habíais sacado"],
    "p3": ["habían sacado"]
  },
  "In Cond Per": {
    "s1": ["habría sacado"],
    "s2": ["habrías sacado"],
    "s3": ["habría sacado"],
    "p1": ["habríamos sacado"],
    "p2": ["habríais sacado"],
    "p3": ["habrían sacado"]
  },
  "Sub Pres": {
    "s1": ["saque"],
    "s2": ["saques"],
    "s3": ["saque"],
    "p1": ["saquemos"],
    "p2": ["saquéis"],
    "p3": ["saquen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["saca"],
    "s3": ["sacad"],
    "p1": [""],
    "p2": ["saque"],
    "p3": ["saquen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no saques"],
    "s3": ["no saquéis"],
    "p1": [""],
    "p2": ["no saque"],
    "p3": ["no saquen"]
  },
  "In Pres Pro": {
    "s1": ["estoy sacando"],
    "s2": ["estás sacando"],
    "s3": ["está sacando"],
    "p1": ["estamos sacando"],
    "p2": ["estáis sacando"],
    "p3": ["están sacando"]
  }
}, {
  "inf": "salir",
  "inf_eng": "to leave",
  "In Pres": {
    "s1": ["salgo"],
    "s2": ["sales"],
    "s3": ["sale"],
    "p1": ["salimos"],
    "p2": ["salís"],
    "p3": ["salen"]
  },
  "In Fut": {
    "s1": ["saldré"],
    "s2": ["saldrás"],
    "s3": ["saldrá"],
    "p1": ["saldremos"],
    "p2": ["saldréis"],
    "p3": ["saldrán"]
  },
  "In Imp": {
    "s1": ["salía"],
    "s2": ["salías"],
    "s3": ["salía"],
    "p1": ["salíamos"],
    "p2": ["salíais"],
    "p3": ["salían"]
  },
  "In Pret": {
    "s1": ["salí"],
    "s2": ["saliste"],
    "s3": ["salió"],
    "p1": ["salimos"],
    "p2": ["salisteis"],
    "p3": ["salieron"]
  },
  "In Cond": {
    "s1": ["saldría"],
    "s2": ["saldrías"],
    "s3": ["saldría"],
    "p1": ["saldríamos"],
    "p2": ["saldríais"],
    "p3": ["saldrían"]
  },
  "In Pres Per": {
    "s1": ["he salido"],
    "s2": ["has salido"],
    "s3": ["ha salido"],
    "p1": ["hemos salido"],
    "p2": ["habéis salido"],
    "p3": ["han salido"]
  },
  "In Fut Per": {
    "s1": ["habré salido"],
    "s2": ["habrás salido"],
    "s3": ["habrá salido"],
    "p1": ["habremos salido"],
    "p2": ["habréis salido"],
    "p3": ["habrán salido"]
  },
  "In Pas Per": {
    "s1": ["había salido"],
    "s2": ["habías salido"],
    "s3": ["había salido"],
    "p1": ["habíamos salido"],
    "p2": ["habíais salido"],
    "p3": ["habían salido"]
  },
  "In Cond Per": {
    "s1": ["habría salido"],
    "s2": ["habrías salido"],
    "s3": ["habría salido"],
    "p1": ["habríamos salido"],
    "p2": ["habríais salido"],
    "p3": ["habrían salido"]
  },
  "Sub Pres": {
    "s1": ["salga"],
    "s2": ["salgas"],
    "s3": ["salga"],
    "p1": ["salgamos"],
    "p2": ["salgáis"],
    "p3": ["salgan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sal"],
    "s3": ["salid"],
    "p1": [""],
    "p2": ["salga"],
    "p3": ["salgan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no salgas"],
    "s3": ["no salgáis"],
    "p1": [""],
    "p2": ["no salga"],
    "p3": ["no salgan"]
  },
  "In Pres Pro": {
    "s1": ["estoy saliendo"],
    "s2": ["estás saliendo"],
    "s3": ["está saliendo"],
    "p1": ["estamos saliendo"],
    "p2": ["estáis saliendo"],
    "p3": ["están saliendo"]
  }
}, {
  "inf": "saltar",
  "inf_eng": "to jump",
  "In Pres": {
    "s1": ["salto"],
    "s2": ["saltas"],
    "s3": ["salta"],
    "p1": ["saltamos"],
    "p2": ["saltáis"],
    "p3": ["saltan"]
  },
  "In Fut": {
    "s1": ["saltaré"],
    "s2": ["saltarás"],
    "s3": ["saltará"],
    "p1": ["saltaremos"],
    "p2": ["saltaréis"],
    "p3": ["saltarán"]
  },
  "In Imp": {
    "s1": ["saltaba"],
    "s2": ["saltabas"],
    "s3": ["saltaba"],
    "p1": ["saltábamos"],
    "p2": ["saltabais"],
    "p3": ["saltaban"]
  },
  "In Pret": {
    "s1": ["salté"],
    "s2": ["saltaste"],
    "s3": ["saltó"],
    "p1": ["saltamos"],
    "p2": ["saltasteis"],
    "p3": ["saltaron"]
  },
  "In Cond": {
    "s1": ["saltaría"],
    "s2": ["saltarías"],
    "s3": ["saltaría"],
    "p1": ["saltaríamos"],
    "p2": ["saltaríais"],
    "p3": ["saltarían"]
  },
  "In Pres Per": {
    "s1": ["he saltado"],
    "s2": ["has saltado"],
    "s3": ["ha saltado"],
    "p1": ["hemos saltado"],
    "p2": ["habéis saltado"],
    "p3": ["han saltado"]
  },
  "In Fut Per": {
    "s1": ["habré saltado"],
    "s2": ["habrás saltado"],
    "s3": ["habrá saltado"],
    "p1": ["habremos saltado"],
    "p2": ["habréis saltado"],
    "p3": ["habrán saltado"]
  },
  "In Pas Per": {
    "s1": ["había saltado"],
    "s2": ["habías saltado"],
    "s3": ["había saltado"],
    "p1": ["habíamos saltado"],
    "p2": ["habíais saltado"],
    "p3": ["habían saltado"]
  },
  "In Cond Per": {
    "s1": ["habría saltado"],
    "s2": ["habrías saltado"],
    "s3": ["habría saltado"],
    "p1": ["habríamos saltado"],
    "p2": ["habríais saltado"],
    "p3": ["habrían saltado"]
  },
  "Sub Pres": {
    "s1": ["salte"],
    "s2": ["saltes"],
    "s3": ["salte"],
    "p1": ["saltemos"],
    "p2": ["saltéis"],
    "p3": ["salten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["salta"],
    "s3": ["saltad"],
    "p1": [""],
    "p2": ["salte"],
    "p3": ["salten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no saltes"],
    "s3": ["no saltéis"],
    "p1": [""],
    "p2": ["no salte"],
    "p3": ["no salten"]
  },
  "In Pres Pro": {
    "s1": ["estoy saltando"],
    "s2": ["estás saltando"],
    "s3": ["está saltando"],
    "p1": ["estamos saltando"],
    "p2": ["estáis saltando"],
    "p3": ["están saltando"]
  }
}, {
  "inf": "sugerir",
  "inf_eng": "to suggest",
  "In Pret": {
    "s1": ["sugerí"],
    "s2": ["sugeriste"],
    "s3": ["sugirió"],
    "p1": ["sugerimos"],
    "p2": ["sugeristeis"],
    "p3": ["sugirieron"]
  },
  "In Pres": {
    "s1": ["sugiero"],
    "s2": ["sugieres"],
    "s3": ["sugiere"],
    "p1": ["sugerimos"],
    "p2": ["sugerís"],
    "p3": ["sugieren"]
  },
  "In Fut": {
    "s1": ["sugeriré"],
    "s2": ["sugerirás"],
    "s3": ["sugerirá"],
    "p1": ["sugeriremos"],
    "p2": ["sugeriréis"],
    "p3": ["sugerirán"]
  },
  "In Imp": {
    "s1": ["sugería"],
    "s2": ["sugerías"],
    "s3": ["sugería"],
    "p1": ["sugeríamos"],
    "p2": ["sugeríais"],
    "p3": ["sugerían"]
  },
  "In Cond": {
    "s1": ["sugeriría"],
    "s2": ["sugerirías"],
    "s3": ["sugeriría"],
    "p1": ["sugeriríamos"],
    "p2": ["sugeriríais"],
    "p3": ["sugerirían"]
  },
  "In Pres Per": {
    "s1": ["he sugerido"],
    "s2": ["has sugerido"],
    "s3": ["ha sugerido"],
    "p1": ["hemos sugerido"],
    "p2": ["habéis sugerido"],
    "p3": ["han sugerido"]
  },
  "In Fut Per": {
    "s1": ["habré sugerido"],
    "s2": ["habrás sugerido"],
    "s3": ["habrá sugerido"],
    "p1": ["habremos sugerido"],
    "p2": ["habréis sugerido"],
    "p3": ["habrán sugerido"]
  },
  "In Pas Per": {
    "s1": ["había sugerido"],
    "s2": ["habías sugerido"],
    "s3": ["había sugerido"],
    "p1": ["habíamos sugerido"],
    "p2": ["habíais sugerido"],
    "p3": ["habían sugerido"]
  },
  "In Cond Per": {
    "s1": ["habría sugerido"],
    "s2": ["habrías sugerido"],
    "s3": ["habría sugerido"],
    "p1": ["habríamos sugerido"],
    "p2": ["habríais sugerido"],
    "p3": ["habrían sugerido"]
  },
  "Sub Pres": {
    "s1": ["sugiera"],
    "s2": ["sugieras"],
    "s3": ["sugiera"],
    "p1": ["sugiramos"],
    "p2": ["sugiráis"],
    "p3": ["sugieran"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sugiere"],
    "s3": ["sugerid"],
    "p1": [""],
    "p2": ["sugiera"],
    "p3": ["sugieran"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no sugieras"],
    "s3": ["no sugiráis"],
    "p1": [""],
    "p2": ["no sugiera"],
    "p3": ["no sugieran"]
  },
  "In Pres Pro": {
    "s1": ["estoy sugiriendo"],
    "s2": ["estás sugiriendo"],
    "s3": ["está sugiriendo"],
    "p1": ["estamos sugiriendo"],
    "p2": ["estáis sugiriendo"],
    "p3": ["están sugiriendo"]
  }
}, {
  "inf": "secar",
  "inf_eng": "to dry",
  "In Pres": {
    "s1": ["seco"],
    "s2": ["secas"],
    "s3": ["seca"],
    "p1": ["secamos"],
    "p2": ["secáis"],
    "p3": ["secan"]
  },
  "In Fut": {
    "s1": ["secaré"],
    "s2": ["secarás"],
    "s3": ["secará"],
    "p1": ["secaremos"],
    "p2": ["secaréis"],
    "p3": ["secarán"]
  },
  "In Imp": {
    "s1": ["secaba"],
    "s2": ["secabas"],
    "s3": ["secaba"],
    "p1": ["secábamos"],
    "p2": ["secabais"],
    "p3": ["secaban"]
  },
  "In Pret": {
    "s1": ["sequé"],
    "s2": ["secaste"],
    "s3": ["secó"],
    "p1": ["secamos"],
    "p2": ["secasteis"],
    "p3": ["secaron"]
  },
  "In Cond": {
    "s1": ["secaría"],
    "s2": ["secarías"],
    "s3": ["secaría"],
    "p1": ["secaríamos"],
    "p2": ["secaríais"],
    "p3": ["secarían"]
  },
  "In Pres Per": {
    "s1": ["he secado"],
    "s2": ["has secado"],
    "s3": ["ha secado"],
    "p1": ["hemos secado"],
    "p2": ["habéis secado"],
    "p3": ["han secado"]
  },
  "In Fut Per": {
    "s1": ["habré secado"],
    "s2": ["habrás secado"],
    "s3": ["habrá secado"],
    "p1": ["habremos secado"],
    "p2": ["habréis secado"],
    "p3": ["habrán secado"]
  },
  "In Pas Per": {
    "s1": ["había secado"],
    "s2": ["habías secado"],
    "s3": ["había secado"],
    "p1": ["habíamos secado"],
    "p2": ["habíais secado"],
    "p3": ["habían secado"]
  },
  "In Cond Per": {
    "s1": ["habría secado"],
    "s2": ["habrías secado"],
    "s3": ["habría secado"],
    "p1": ["habríamos secado"],
    "p2": ["habríais secado"],
    "p3": ["habrían secado"]
  },
  "Sub Pres": {
    "s1": ["seque"],
    "s2": ["seques"],
    "s3": ["seque"],
    "p1": ["sequemos"],
    "p2": ["sequéis"],
    "p3": ["sequen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["seca"],
    "s3": ["secad"],
    "p1": [""],
    "p2": ["seque"],
    "p3": ["sequen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no seques"],
    "s3": ["no sequéis"],
    "p1": [""],
    "p2": ["no seque"],
    "p3": ["no sequen"]
  },
  "In Pres Pro": {
    "s1": ["estoy secando"],
    "s2": ["estás secando"],
    "s3": ["está secando"],
    "p1": ["estamos secando"],
    "p2": ["estáis secando"],
    "p3": ["están secando"]
  }
}, {
  "inf": "seguir",
  "inf_eng": "to follow",
  "In Pres": {
    "s1": ["sigo"],
    "s2": ["sigues"],
    "s3": ["sigue"],
    "p1": ["seguimos"],
    "p2": ["seguís"],
    "p3": ["siguen"]
  },
  "In Fut": {
    "s1": ["seguiré"],
    "s2": ["seguirás"],
    "s3": ["seguirá"],
    "p1": ["seguiremos"],
    "p2": ["seguiréis"],
    "p3": ["seguirán"]
  },
  "In Imp": {
    "s1": ["seguía"],
    "s2": ["seguías"],
    "s3": ["seguía"],
    "p1": ["seguíamos"],
    "p2": ["seguíais"],
    "p3": ["seguían"]
  },
  "In Pret": {
    "s1": ["seguí"],
    "s2": ["seguiste"],
    "s3": ["siguió"],
    "p1": ["seguimos"],
    "p2": ["seguisteis"],
    "p3": ["siguieron"]
  },
  "In Cond": {
    "s1": ["seguiría"],
    "s2": ["seguirías"],
    "s3": ["seguiría"],
    "p1": ["seguiríamos"],
    "p2": ["seguiríais"],
    "p3": ["seguirían"]
  },
  "In Pres Per": {
    "s1": ["he seguido"],
    "s2": ["has seguido"],
    "s3": ["ha seguido"],
    "p1": ["hemos seguido"],
    "p2": ["habéis seguido"],
    "p3": ["han seguido"]
  },
  "In Fut Per": {
    "s1": ["habré seguido"],
    "s2": ["habrás seguido"],
    "s3": ["habrá seguido"],
    "p1": ["habremos seguido"],
    "p2": ["habréis seguido"],
    "p3": ["habrán seguido"]
  },
  "In Pas Per": {
    "s1": ["había seguido"],
    "s2": ["habías seguido"],
    "s3": ["había seguido"],
    "p1": ["habíamos seguido"],
    "p2": ["habíais seguido"],
    "p3": ["habían seguido"]
  },
  "In Cond Per": {
    "s1": ["habría seguido"],
    "s2": ["habrías seguido"],
    "s3": ["habría seguido"],
    "p1": ["habríamos seguido"],
    "p2": ["habríais seguido"],
    "p3": ["habrían seguido"]
  },
  "Sub Pres": {
    "s1": ["siga"],
    "s2": ["sigas"],
    "s3": ["siga"],
    "p1": ["sigamos"],
    "p2": ["sigáis"],
    "p3": ["sigan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sigue"],
    "s3": ["seguid"],
    "p1": [""],
    "p2": ["siga"],
    "p3": ["sigan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no sigas"],
    "s3": ["no sigáis"],
    "p1": [""],
    "p2": ["no siga"],
    "p3": ["no sigan"]
  },
  "In Pres Pro": {
    "s1": ["estoy siguiendo"],
    "s2": ["estás siguiendo"],
    "s3": ["está siguiendo"],
    "p1": ["estamos siguiendo"],
    "p2": ["estáis siguiendo"],
    "p3": ["están siguiendo"]
  }
}, {
  "inf": "sentar",
  "inf_eng": "to seat",
  "In Pres": {
    "s1": ["siento"],
    "s2": ["sientas"],
    "s3": ["sienta"],
    "p1": ["sentamos"],
    "p2": ["sentáis"],
    "p3": ["sientan"]
  },
  "In Fut": {
    "s1": ["sentaré"],
    "s2": ["sentarás"],
    "s3": ["sentará"],
    "p1": ["sentaremos"],
    "p2": ["sentaréis"],
    "p3": ["sentarán"]
  },
  "In Imp": {
    "s1": ["sentaba"],
    "s2": ["sentabas"],
    "s3": ["sentaba"],
    "p1": ["sentábamos"],
    "p2": ["sentabais"],
    "p3": ["sentaban"]
  },
  "In Pret": {
    "s1": ["senté"],
    "s2": ["sentaste"],
    "s3": ["sentó"],
    "p1": ["sentamos"],
    "p2": ["sentasteis"],
    "p3": ["sentaron"]
  },
  "In Cond": {
    "s1": ["sentaría"],
    "s2": ["sentarías"],
    "s3": ["sentaría"],
    "p1": ["sentaríamos"],
    "p2": ["sentaríais"],
    "p3": ["sentarían"]
  },
  "In Pres Per": {
    "s1": ["he sentado"],
    "s2": ["has sentado"],
    "s3": ["ha sentado"],
    "p1": ["hemos sentado"],
    "p2": ["habéis sentado"],
    "p3": ["han sentado"]
  },
  "In Fut Per": {
    "s1": ["habré sentado"],
    "s2": ["habrás sentado"],
    "s3": ["habrá sentado"],
    "p1": ["habremos sentado"],
    "p2": ["habréis sentado"],
    "p3": ["habrán sentado"]
  },
  "In Pas Per": {
    "s1": ["había sentado"],
    "s2": ["habías sentado"],
    "s3": ["había sentado"],
    "p1": ["habíamos sentado"],
    "p2": ["habíais sentado"],
    "p3": ["habían sentado"]
  },
  "In Cond Per": {
    "s1": ["habría sentado"],
    "s2": ["habrías sentado"],
    "s3": ["habría sentado"],
    "p1": ["habríamos sentado"],
    "p2": ["habríais sentado"],
    "p3": ["habrían sentado"]
  },
  "Sub Pres": {
    "s1": ["siente"],
    "s2": ["sientes"],
    "s3": ["siente"],
    "p1": ["sentemos"],
    "p2": ["sentéis"],
    "p3": ["sienten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sienta"],
    "s3": ["sentad"],
    "p1": [""],
    "p2": ["siente"],
    "p3": ["sienten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no sientes"],
    "s3": ["no sentéis"],
    "p1": [""],
    "p2": ["no siente"],
    "p3": ["no sienten"]
  },
  "In Pres Pro": {
    "s1": ["estoy sentando"],
    "s2": ["estás sentando"],
    "s3": ["está sentando"],
    "p1": ["estamos sentando"],
    "p2": ["estáis sentando"],
    "p3": ["están sentando"]
  }
}, {
  "inf": "sentirse",
  "inf_eng": "to feel",
  "In Pres": {
    "s1": ["me siento"],
    "s2": ["te sientes"],
    "s3": ["se siente"],
    "p1": ["nos sentimos"],
    "p2": ["os sentís"],
    "p3": ["se sienten"]
  },
  "In Fut": {
    "s1": ["me sentiré"],
    "s2": ["te sentirás"],
    "s3": ["se sentirá"],
    "p1": ["nos sentiremos"],
    "p2": ["os sentiréis"],
    "p3": ["se sentirán"]
  },
  "In Imp": {
    "s1": ["me sentía"],
    "s2": ["te sentías"],
    "s3": ["se sentía"],
    "p1": ["nos sentíamos"],
    "p2": ["os sentíais"],
    "p3": ["se sentían"]
  },
  "In Pret": {
    "s1": ["me sentí"],
    "s2": ["te sentiste"],
    "s3": ["se sintió"],
    "p1": ["nos sentimos"],
    "p2": ["os sentisteis"],
    "p3": ["se sintieron"]
  },
  "In Cond": {
    "s1": ["me sentiría"],
    "s2": ["te sentirías"],
    "s3": ["se sentiría"],
    "p1": ["nos sentiríamos"],
    "p2": ["os sentiríais"],
    "p3": ["se sentirían"]
  },
  "In Pres Per": {
    "s1": ["me he sentido"],
    "s2": ["te has sentido"],
    "s3": ["se ha sentido"],
    "p1": ["nos hemos sentido"],
    "p2": ["os habéis sentido"],
    "p3": ["se han sentido"]
  },
  "In Fut Per": {
    "s1": ["me habré sentido"],
    "s2": ["te habrás sentido"],
    "s3": ["se habrá sentido"],
    "p1": ["nos habremos sentido"],
    "p2": ["os habréis sentido"],
    "p3": ["se habrán sentido"]
  },
  "In Pas Per": {
    "s1": ["me había sentido"],
    "s2": ["te habías sentido"],
    "s3": ["se había sentido"],
    "p1": ["nos habíamos sentido"],
    "p2": ["os habíais sentido"],
    "p3": ["se habían sentido"]
  },
  "In Cond Per": {
    "s1": ["me habría sentido"],
    "s2": ["te habrías sentido"],
    "s3": ["se habría sentido"],
    "p1": ["nos habríamos sentido"],
    "p2": ["os habríais sentido"],
    "p3": ["se habrían sentido"]
  },
  "Sub Pres": {
    "s1": ["me sienta"],
    "s2": ["te sientas"],
    "s3": ["se sienta"],
    "p1": ["nos sintamos"],
    "p2": ["os sintáis"],
    "p3": ["se sientan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["siéntete"],
    "s3": ["sentíos"],
    "p1": [""],
    "p2": ["siéntase"],
    "p3": ["siéntanse"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no te sientas"],
    "s3": ["no os sentáis"],
    "p1": [""],
    "p2": ["no se sienta"],
    "p3": ["no se sientan"]
  },
  "In Pres Pro": {
    "s1": ["me estoy sintiéndo", "estoy sintiéndome"],
    "s2": ["te estás sintiéndo", "estás sintiéndote"],
    "s3": ["se está sintiéndo", "está sintiéndose"],
    "p1": ["nos estamos sintiéndo", "estamos sintiéndonos"],
    "p2": ["os estáis sintiéndo", "estáis sintiéndoos"],
    "p3": ["se están sintiéndo", "están sintiéndose"]
  }
}, {
  "inf": "ser",
  "inf_eng": "to be",
  "In Pres": {
    "s1": ["soy"],
    "s2": ["eres"],
    "s3": ["es"],
    "p1": ["somos"],
    "p2": ["sois"],
    "p3": ["son"]
  },
  "In Fut": {
    "s1": ["seré"],
    "s2": ["serás"],
    "s3": ["será"],
    "p1": ["seremos"],
    "p2": ["seréis"],
    "p3": ["serán"]
  },
  "In Imp": {
    "s1": ["era"],
    "s2": ["eras"],
    "s3": ["era"],
    "p1": ["éramos"],
    "p2": ["erais"],
    "p3": ["eran"]
  },
  "In Pret": {
    "s1": ["fui"],
    "s2": ["fuiste"],
    "s3": ["fue"],
    "p1": ["fuimos"],
    "p2": ["fuisteis"],
    "p3": ["fueron"]
  },
  "In Cond": {
    "s1": ["sería"],
    "s2": ["serías"],
    "s3": ["sería"],
    "p1": ["seríamos"],
    "p2": ["seríais"],
    "p3": ["serían"]
  },
  "In Pres Per": {
    "s1": ["he sido"],
    "s2": ["has sido"],
    "s3": ["ha sido"],
    "p1": ["hemos sido"],
    "p2": ["habéis sido"],
    "p3": ["han sido"]
  },
  "In Fut Per": {
    "s1": ["habré sido"],
    "s2": ["habrás sido"],
    "s3": ["habrá sido"],
    "p1": ["habremos sido"],
    "p2": ["habréis sido"],
    "p3": ["habrán sido"]
  },
  "In Pas Per": {
    "s1": ["había sido"],
    "s2": ["habías sido"],
    "s3": ["había sido"],
    "p1": ["habíamos sido"],
    "p2": ["habíais sido"],
    "p3": ["habían sido"]
  },
  "In Cond Per": {
    "s1": ["habría sido"],
    "s2": ["habrías sido"],
    "s3": ["habría sido"],
    "p1": ["habríamos sido"],
    "p2": ["habríais sido"],
    "p3": ["habrían sido"]
  },
  "Sub Pres": {
    "s1": ["sea"],
    "s2": ["seas"],
    "s3": ["sea"],
    "p1": ["seamos"],
    "p2": ["seáis"],
    "p3": ["sean"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sé"],
    "s3": ["sed"],
    "p1": [""],
    "p2": ["sea"],
    "p3": ["sean"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no seas"],
    "s3": ["no seais"],
    "p1": [""],
    "p2": ["no sea"],
    "p3": ["no sean"]
  },
  "In Pres Pro": {
    "s1": ["estoy siendo"],
    "s2": ["estás siendo"],
    "s3": ["está siendo"],
    "p1": ["estamos siendo"],
    "p2": ["estáis siendo"],
    "p3": ["están siendo"]
  }
}, {
  "inf": "servir",
  "inf_eng": "to serve",
  "In Pres": {
    "s1": ["sirvo"],
    "s2": ["sirves"],
    "s3": ["sirve"],
    "p1": ["servimos"],
    "p2": ["servís"],
    "p3": ["sirven"]
  },
  "In Fut": {
    "s1": ["serviré"],
    "s2": ["servirás"],
    "s3": ["servirá"],
    "p1": ["serviremos"],
    "p2": ["serviréis"],
    "p3": ["servirán"]
  },
  "In Imp": {
    "s1": ["servía"],
    "s2": ["servías"],
    "s3": ["servía"],
    "p1": ["servíamos"],
    "p2": ["servíais"],
    "p3": ["servían"]
  },
  "In Pret": {
    "s1": ["serví"],
    "s2": ["serviste"],
    "s3": ["sirvió"],
    "p1": ["servimos"],
    "p2": ["servisteis"],
    "p3": ["sirvieron"]
  },
  "In Cond": {
    "s1": ["serviría"],
    "s2": ["servirías"],
    "s3": ["serviría"],
    "p1": ["serviríamos"],
    "p2": ["serviríais"],
    "p3": ["servirían"]
  },
  "In Pres Per": {
    "s1": ["he servido"],
    "s2": ["has servido"],
    "s3": ["ha servido"],
    "p1": ["hemos servido"],
    "p2": ["habéis servido"],
    "p3": ["han servido"]
  },
  "In Fut Per": {
    "s1": ["habré servido"],
    "s2": ["habrás servido"],
    "s3": ["habrá servido"],
    "p1": ["habremos servido"],
    "p2": ["habréis servido"],
    "p3": ["habrán servido"]
  },
  "In Pas Per": {
    "s1": ["había servido"],
    "s2": ["habías servido"],
    "s3": ["había servido"],
    "p1": ["habíamos servido"],
    "p2": ["habíais servido"],
    "p3": ["habían servido"]
  },
  "In Cond Per": {
    "s1": ["habría servido"],
    "s2": ["habrías servido"],
    "s3": ["habría servido"],
    "p1": ["habríamos servido"],
    "p2": ["habríais servido"],
    "p3": ["habrían servido"]
  },
  "Sub Pres": {
    "s1": ["sirva"],
    "s2": ["sirvas"],
    "s3": ["sirva"],
    "p1": ["sirvamos"],
    "p2": ["sirváis"],
    "p3": ["sirvan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sirve"],
    "s3": ["servid"],
    "p1": [""],
    "p2": ["sirva"],
    "p3": ["sirvan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no sirvas"],
    "s3": ["no sirváis"],
    "p1": [""],
    "p2": ["no sirva"],
    "p3": ["no sirvan"]
  },
  "In Pres Pro": {
    "s1": ["estoy sirviendo"],
    "s2": ["estás sirviendo"],
    "s3": ["está sirviendo"],
    "p1": ["estamos sirviendo"],
    "p2": ["estáis sirviendo"],
    "p3": ["están sirviendo"]
  }
}, {
  "inf": "sobrevivir",
  "inf_eng": "to survive",
  "In Pres": {
    "s1": ["sobrevivo"],
    "s2": ["sobrevives"],
    "s3": ["sobrevive"],
    "p1": ["sobrevivimos"],
    "p2": ["sobrevivís"],
    "p3": ["sobreviven"]
  },
  "In Fut": {
    "s1": ["sobreviviré"],
    "s2": ["sobrevivirás"],
    "s3": ["sobrevivirá"],
    "p1": ["sobreviviremos"],
    "p2": ["sobreviviréis"],
    "p3": ["sobrevivirán"]
  },
  "In Imp": {
    "s1": ["sobrevivía"],
    "s2": ["sobrevivías"],
    "s3": ["sobrevivía"],
    "p1": ["sobrevivíamos"],
    "p2": ["sobrevivíais"],
    "p3": ["sobrevivían"]
  },
  "In Pret": {
    "s1": ["sobreviví"],
    "s2": ["sobreviviste"],
    "s3": ["sobrevivió"],
    "p1": ["sobrevivimos"],
    "p2": ["sobrevivisteis"],
    "p3": ["sobrevivieron"]
  },
  "In Cond": {
    "s1": ["sobreviviría"],
    "s2": ["sobrevivirías"],
    "s3": ["sobreviviría"],
    "p1": ["sobreviviríamos"],
    "p2": ["sobreviviríais"],
    "p3": ["sobrevivirían"]
  },
  "In Pres Per": {
    "s1": ["he sobrevivido"],
    "s2": ["has sobrevivido"],
    "s3": ["ha sobrevivido"],
    "p1": ["hemos sobrevivido"],
    "p2": ["habéis sobrevivido"],
    "p3": ["han sobrevivido"]
  },
  "In Fut Per": {
    "s1": ["habré sobrevivido"],
    "s2": ["habrás sobrevivido"],
    "s3": ["habrá sobrevivido"],
    "p1": ["habremos sobrevivido"],
    "p2": ["habréis sobrevivido"],
    "p3": ["habrán sobrevivido"]
  },
  "In Pas Per": {
    "s1": ["había sobrevivido"],
    "s2": ["habías sobrevivido"],
    "s3": ["había sobrevivido"],
    "p1": ["habíamos sobrevivido"],
    "p2": ["habíais sobrevivido"],
    "p3": ["habían sobrevivido"]
  },
  "In Cond Per": {
    "s1": ["habría sobrevivido"],
    "s2": ["habrías sobrevivido"],
    "s3": ["habría sobrevivido"],
    "p1": ["habríamos sobrevivido"],
    "p2": ["habríais sobrevivido"],
    "p3": ["habrían sobrevivido"]
  },
  "Sub Pres": {
    "s1": ["sobreviva"],
    "s2": ["sobrevivas"],
    "s3": ["sobreviva"],
    "p1": ["sobrevivamos"],
    "p2": ["sobreviváis"],
    "p3": ["sobrevivan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sobrevive"],
    "s3": ["sobrevivid"],
    "p1": [""],
    "p2": ["sobreviva"],
    "p3": ["sobrevivan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no sobrevivas"],
    "s3": ["no sobreviváis"],
    "p1": [""],
    "p2": ["no sobreviva"],
    "p3": ["no sobrevivan"]
  },
  "In Pres Pro": {
    "s1": ["estoy sobreviviendo"],
    "s2": ["estás sobreviviendo"],
    "s3": ["está sobreviviendo"],
    "p1": ["estamos sobreviviendo"],
    "p2": ["estáis sobreviviendo"],
    "p3": ["están sobreviviendo"]
  }
}, {
  "inf": "sonar",
  "inf_eng": "to sound",
  "In Pres": {
    "s1": ["sueno"],
    "s2": ["suenas"],
    "s3": ["suena"],
    "p1": ["sonamos"],
    "p2": ["sonáis"],
    "p3": ["suenan"]
  },
  "In Fut": {
    "s1": ["sonaré"],
    "s2": ["sonarás"],
    "s3": ["sonará"],
    "p1": ["sonaremos"],
    "p2": ["sonaréis"],
    "p3": ["sonarán"]
  },
  "In Imp": {
    "s1": ["sonaba"],
    "s2": ["sonabas"],
    "s3": ["sonaba"],
    "p1": ["sonábamos"],
    "p2": ["sonabais"],
    "p3": ["sonaban"]
  },
  "In Pret": {
    "s1": ["soné"],
    "s2": ["sonaste"],
    "s3": ["sonó"],
    "p1": ["sonamos"],
    "p2": ["sonasteis"],
    "p3": ["sonaron"]
  },
  "In Cond": {
    "s1": ["sonaría"],
    "s2": ["sonarías"],
    "s3": ["sonaría"],
    "p1": ["sonaríamos"],
    "p2": ["sonaríais"],
    "p3": ["sonarían"]
  },
  "In Pres Per": {
    "s1": ["he sonado"],
    "s2": ["has sonado"],
    "s3": ["ha sonado"],
    "p1": ["hemos sonado"],
    "p2": ["habéis sonado"],
    "p3": ["han sonado"]
  },
  "In Fut Per": {
    "s1": ["habré sonado"],
    "s2": ["habrás sonado"],
    "s3": ["habrá sonado"],
    "p1": ["habremos sonado"],
    "p2": ["habréis sonado"],
    "p3": ["habrán sonado"]
  },
  "In Pas Per": {
    "s1": ["había sonado"],
    "s2": ["habías sonado"],
    "s3": ["había sonado"],
    "p1": ["habíamos sonado"],
    "p2": ["habíais sonado"],
    "p3": ["habían sonado"]
  },
  "In Cond Per": {
    "s1": ["habría sonado"],
    "s2": ["habrías sonado"],
    "s3": ["habría sonado"],
    "p1": ["habríamos sonado"],
    "p2": ["habríais sonado"],
    "p3": ["habrían sonado"]
  },
  "Sub Pres": {
    "s1": ["suene"],
    "s2": ["suenes"],
    "s3": ["suene"],
    "p1": ["sonemos"],
    "p2": ["sonéis"],
    "p3": ["suenen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["suena"],
    "s3": ["sonad"],
    "p1": [""],
    "p2": ["suene"],
    "p3": ["suenen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no suenes"],
    "s3": ["no sonéis"],
    "p1": [""],
    "p2": ["no suene"],
    "p3": ["no suenen"]
  },
  "In Pres Pro": {
    "s1": ["estoy sonando"],
    "s2": ["estás sonando"],
    "s3": ["está sonando"],
    "p1": ["estamos sonando"],
    "p2": ["estáis sonando"],
    "p3": ["están sonando"]
  }
}, {
  "inf": "soñar",
  "inf_eng": "to dream",
  "In Pres": {
    "s1": ["sueño"],
    "s2": ["sueñas"],
    "s3": ["sueña"],
    "p1": ["soñamos"],
    "p2": ["soñáis"],
    "p3": ["sueñan"]
  },
  "In Fut": {
    "s1": ["soñaré"],
    "s2": ["soñarás"],
    "s3": ["soñará"],
    "p1": ["soñaremos"],
    "p2": ["soñaréis"],
    "p3": ["soñarán"]
  },
  "In Imp": {
    "s1": ["soñaba"],
    "s2": ["soñabas"],
    "s3": ["soñaba"],
    "p1": ["soñábamos"],
    "p2": ["soñabais"],
    "p3": ["soñaban"]
  },
  "In Pret": {
    "s1": ["soñé"],
    "s2": ["soñaste"],
    "s3": ["soñó"],
    "p1": ["soñamos"],
    "p2": ["soñasteis"],
    "p3": ["soñaron"]
  },
  "In Cond": {
    "s1": ["soñaría"],
    "s2": ["soñarías"],
    "s3": ["soñaría"],
    "p1": ["soñaríamos"],
    "p2": ["soñaríais"],
    "p3": ["soñarían"]
  },
  "In Pres Per": {
    "s1": ["he soñado"],
    "s2": ["has soñado"],
    "s3": ["ha soñado"],
    "p1": ["hemos soñado"],
    "p2": ["habéis soñado"],
    "p3": ["han soñado"]
  },
  "In Fut Per": {
    "s1": ["habré soñado"],
    "s2": ["habrás soñado"],
    "s3": ["habrá soñado"],
    "p1": ["habremos soñado"],
    "p2": ["habréis soñado"],
    "p3": ["habrán soñado"]
  },
  "In Pas Per": {
    "s1": ["había soñado"],
    "s2": ["habías soñado"],
    "s3": ["había soñado"],
    "p1": ["habíamos soñado"],
    "p2": ["habíais soñado"],
    "p3": ["habían soñado"]
  },
  "In Cond Per": {
    "s1": ["habría soñado"],
    "s2": ["habrías soñado"],
    "s3": ["habría soñado"],
    "p1": ["habríamos soñado"],
    "p2": ["habríais soñado"],
    "p3": ["habrían soñado"]
  },
  "Sub Pres": {
    "s1": ["sueñe"],
    "s2": ["sueñes"],
    "s3": ["sueñe"],
    "p1": ["soñemos"],
    "p2": ["soñéis"],
    "p3": ["sueñen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sueña"],
    "s3": ["soñad"],
    "p1": [""],
    "p2": ["sueñe"],
    "p3": ["sueñen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no sueñes"],
    "s3": ["no soñéis"],
    "p1": [""],
    "p2": ["no sueñe"],
    "p3": ["no sueñen"]
  },
  "In Pres Pro": {
    "s1": ["estoy soñando"],
    "s2": ["estás soñando"],
    "s3": ["está soñando"],
    "p1": ["estamos soñando"],
    "p2": ["estáis soñando"],
    "p3": ["están soñando"]
  }
}, {
  "inf": "sonreír",
  "inf_eng": "to smile",
  "In Pres": {
    "s1": ["sonrío"],
    "s2": ["sonríes"],
    "s3": ["sonríe"],
    "p1": ["sonreímos"],
    "p2": ["sonreís"],
    "p3": ["sonríen"]
  },
  "In Fut": {
    "s1": ["sonreiré"],
    "s2": ["sonreirás"],
    "s3": ["sonreirá"],
    "p1": ["sonreiremos"],
    "p2": ["sonreiréis"],
    "p3": ["sonreirán"]
  },
  "In Imp": {
    "s1": ["sonreía"],
    "s2": ["sonreías"],
    "s3": ["sonreía"],
    "p1": ["sonreíamos"],
    "p2": ["sonreíais"],
    "p3": ["sonreían"]
  },
  "In Pret": {
    "s1": ["sonreí"],
    "s2": ["sonreíste"],
    "s3": ["sonrió"],
    "p1": ["sonreímos"],
    "p2": ["sonreísteis"],
    "p3": ["sonrieron"]
  },
  "In Cond": {
    "s1": ["sonreiría"],
    "s2": ["sonreirías"],
    "s3": ["sonreiría"],
    "p1": ["sonreiríamos"],
    "p2": ["sonreiríais"],
    "p3": ["sonreirían"]
  },
  "In Pres Per": {
    "s1": ["he sonreído"],
    "s2": ["has sonreído"],
    "s3": ["ha sonreído"],
    "p1": ["hemos sonreído"],
    "p2": ["habéis sonreído"],
    "p3": ["han sonreído"]
  },
  "In Fut Per": {
    "s1": ["habré sonreído"],
    "s2": ["habrás sonreído"],
    "s3": ["habrá sonreído"],
    "p1": ["habremos sonreído"],
    "p2": ["habréis sonreído"],
    "p3": ["habrán sonreído"]
  },
  "In Pas Per": {
    "s1": ["había sonreído"],
    "s2": ["habías sonreído"],
    "s3": ["había sonreído"],
    "p1": ["habíamos sonreído"],
    "p2": ["habíais sonreído"],
    "p3": ["habían sonreído"]
  },
  "In Cond Per": {
    "s1": ["habría sonreído"],
    "s2": ["habrías sonreído"],
    "s3": ["habría sonreído"],
    "p1": ["habríamos sonreído"],
    "p2": ["habríais sonreído"],
    "p3": ["habrían sonreído"]
  },
  "Sub Pres": {
    "s1": ["sonría"],
    "s2": ["sonrías"],
    "s3": ["sonría"],
    "p1": ["sonriamos"],
    "p2": ["sonriáis"],
    "p3": ["sonrían"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sonríe"],
    "s3": ["sonreíd"],
    "p1": [""],
    "p2": ["sonría"],
    "p3": ["sonrían"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no sonrías"],
    "s3": ["no sonriáis"],
    "p1": [""],
    "p2": ["no sonría"],
    "p3": ["no sonrían"]
  },
  "In Pres Pro": {
    "s1": ["estoy sonriendo"],
    "s2": ["estás sonriendo"],
    "s3": ["está sonriendo"],
    "p1": ["estamos sonriendo"],
    "p2": ["estáis sonriendo"],
    "p3": ["están sonriendo"]
  }
}, {
  "inf": "soportar",
  "inf_eng": "to support",
  "In Pres": {
    "s1": ["soporto"],
    "s2": ["soportas"],
    "s3": ["soporta"],
    "p1": ["soportamos"],
    "p2": ["soportáis"],
    "p3": ["soportan"]
  },
  "In Fut": {
    "s1": ["soportaré"],
    "s2": ["soportarás"],
    "s3": ["soportará"],
    "p1": ["soportaremos"],
    "p2": ["soportaréis"],
    "p3": ["soportarán"]
  },
  "In Imp": {
    "s1": ["soportaba"],
    "s2": ["soportabas"],
    "s3": ["soportaba"],
    "p1": ["soportábamos"],
    "p2": ["soportabais"],
    "p3": ["soportaban"]
  },
  "In Pret": {
    "s1": ["soporté"],
    "s2": ["soportaste"],
    "s3": ["soportó"],
    "p1": ["soportamos"],
    "p2": ["soportasteis"],
    "p3": ["soportaron"]
  },
  "In Cond": {
    "s1": ["soportaría"],
    "s2": ["soportarías"],
    "s3": ["soportaría"],
    "p1": ["soportaríamos"],
    "p2": ["soportaríais"],
    "p3": ["soportarían"]
  },
  "In Pres Per": {
    "s1": ["he soportado"],
    "s2": ["has soportado"],
    "s3": ["ha soportado"],
    "p1": ["hemos soportado"],
    "p2": ["habéis soportado"],
    "p3": ["han soportado"]
  },
  "In Fut Per": {
    "s1": ["habré soportado"],
    "s2": ["habrás soportado"],
    "s3": ["habrá soportado"],
    "p1": ["habremos soportado"],
    "p2": ["habréis soportado"],
    "p3": ["habrán soportado"]
  },
  "In Pas Per": {
    "s1": ["había soportado"],
    "s2": ["habías soportado"],
    "s3": ["había soportado"],
    "p1": ["habíamos soportado"],
    "p2": ["habíais soportado"],
    "p3": ["habían soportado"]
  },
  "In Cond Per": {
    "s1": ["habría soportado"],
    "s2": ["habrías soportado"],
    "s3": ["habría soportado"],
    "p1": ["habríamos soportado"],
    "p2": ["habríais soportado"],
    "p3": ["habrían soportado"]
  },
  "Sub Pres": {
    "s1": ["soporte"],
    "s2": ["soportes"],
    "s3": ["soporte"],
    "p1": ["soportemos"],
    "p2": ["soportéis"],
    "p3": ["soporten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["soporta"],
    "s3": ["soportad"],
    "p1": [""],
    "p2": ["soporte"],
    "p3": ["soporten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no soportes"],
    "s3": ["no soportéis"],
    "p1": [""],
    "p2": ["no soporte"],
    "p3": ["no soporten"]
  },
  "In Pres Pro": {
    "s1": ["estoy soportando"],
    "s2": ["estás soportando"],
    "s3": ["está soportando"],
    "p1": ["estamos soportando"],
    "p2": ["estáis soportando"],
    "p3": ["están soportando"]
  }
}, {
  "inf": "subir",
  "inf_eng": "to go up",
  "In Pres": {
    "s1": ["subo"],
    "s2": ["subes"],
    "s3": ["sube"],
    "p1": ["subimos"],
    "p2": ["subís"],
    "p3": ["suben"]
  },
  "In Fut": {
    "s1": ["subiré"],
    "s2": ["subirás"],
    "s3": ["subirá"],
    "p1": ["subiremos"],
    "p2": ["subiréis"],
    "p3": ["subirán"]
  },
  "In Imp": {
    "s1": ["subía"],
    "s2": ["subías"],
    "s3": ["subía"],
    "p1": ["subíamos"],
    "p2": ["subíais"],
    "p3": ["subían"]
  },
  "In Pret": {
    "s1": ["subí"],
    "s2": ["subiste"],
    "s3": ["subió"],
    "p1": ["subimos"],
    "p2": ["subisteis"],
    "p3": ["subieron"]
  },
  "In Cond": {
    "s1": ["subiría"],
    "s2": ["subirías"],
    "s3": ["subiría"],
    "p1": ["subiríamos"],
    "p2": ["subiríais"],
    "p3": ["subirían"]
  },
  "In Pres Per": {
    "s1": ["he subido"],
    "s2": ["has subido"],
    "s3": ["ha subido"],
    "p1": ["hemos subido"],
    "p2": ["habéis subido"],
    "p3": ["han subido"]
  },
  "In Fut Per": {
    "s1": ["habré subido"],
    "s2": ["habrás subido"],
    "s3": ["habrá subido"],
    "p1": ["habremos subido"],
    "p2": ["habréis subido"],
    "p3": ["habrán subido"]
  },
  "In Pas Per": {
    "s1": ["había subido"],
    "s2": ["habías subido"],
    "s3": ["había subido"],
    "p1": ["habíamos subido"],
    "p2": ["habíais subido"],
    "p3": ["habían subido"]
  },
  "In Cond Per": {
    "s1": ["habría subido"],
    "s2": ["habrías subido"],
    "s3": ["habría subido"],
    "p1": ["habríamos subido"],
    "p2": ["habríais subido"],
    "p3": ["habrían subido"]
  },
  "Sub Pres": {
    "s1": ["suba"],
    "s2": ["subas"],
    "s3": ["suba"],
    "p1": ["subamos"],
    "p2": ["subáis"],
    "p3": ["suban"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["sube"],
    "s3": ["subid"],
    "p1": [""],
    "p2": ["suba"],
    "p3": ["suban"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no subas"],
    "s3": ["no subáis"],
    "p1": [""],
    "p2": ["no suba"],
    "p3": ["no suban"]
  },
  "In Pres Pro": {
    "s1": ["estoy subiendo"],
    "s2": ["estás subiendo"],
    "s3": ["está subiendo"],
    "p1": ["estamos subiendo"],
    "p2": ["estáis subiendo"],
    "p3": ["están subiendo"]
  }
}, {
  "inf": "suponer",
  "inf_eng": "to suppose",
  "In Pres": {
    "s1": ["supongo"],
    "s2": ["supones"],
    "s3": ["supone"],
    "p1": ["suponemos"],
    "p2": ["suponéis"],
    "p3": ["suponen"]
  },
  "In Fut": {
    "s1": ["supondré"],
    "s2": ["supondrás"],
    "s3": ["supondrá"],
    "p1": ["supondremos"],
    "p2": ["supondréis"],
    "p3": ["supondrán"]
  },
  "In Imp": {
    "s1": ["suponía"],
    "s2": ["suponías"],
    "s3": ["suponía"],
    "p1": ["suponíamos"],
    "p2": ["suponíais"],
    "p3": ["suponían"]
  },
  "In Pret": {
    "s1": ["supuse"],
    "s2": ["supusiste"],
    "s3": ["supuso"],
    "p1": ["supusimos"],
    "p2": ["supusisteis"],
    "p3": ["supusieron"]
  },
  "In Cond": {
    "s1": ["supondría"],
    "s2": ["supondrías"],
    "s3": ["supondría"],
    "p1": ["supondríamos"],
    "p2": ["supondríais"],
    "p3": ["supondrían"]
  },
  "In Pres Per": {
    "s1": ["he supuesto"],
    "s2": ["has supuesto"],
    "s3": ["ha supuesto"],
    "p1": ["hemos supuesto"],
    "p2": ["habéis supuesto"],
    "p3": ["han supuesto"]
  },
  "In Fut Per": {
    "s1": ["habré supuesto"],
    "s2": ["habrás supuesto"],
    "s3": ["habrá supuesto"],
    "p1": ["habremos supuesto"],
    "p2": ["habréis supuesto"],
    "p3": ["habrán supuesto"]
  },
  "In Pas Per": {
    "s1": ["había supuesto"],
    "s2": ["habías supuesto"],
    "s3": ["había supuesto"],
    "p1": ["habíamos supuesto"],
    "p2": ["habíais supuesto"],
    "p3": ["habían supuesto"]
  },
  "In Cond Per": {
    "s1": ["habría supuesto"],
    "s2": ["habrías supuesto"],
    "s3": ["habría supuesto"],
    "p1": ["habríamos supuesto"],
    "p2": ["habríais supuesto"],
    "p3": ["habrían supuesto"]
  },
  "Sub Pres": {
    "s1": ["suponga"],
    "s2": ["supongas"],
    "s3": ["suponga"],
    "p1": ["supongamos"],
    "p2": ["supongáis"],
    "p3": ["supongan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["supón"],
    "s3": ["suponed"],
    "p1": [""],
    "p2": ["suponga"],
    "p3": ["supongan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no supongas"],
    "s3": ["no supongáis"],
    "p1": [""],
    "p2": ["no suponga"],
    "p3": ["no supongan"]
  },
  "In Pres Pro": {
    "s1": ["estoy suponiendo"],
    "s2": ["estás suponiendo"],
    "s3": ["está suponiendo"],
    "p1": ["estamos suponiendo"],
    "p2": ["estáis suponiendo"],
    "p3": ["están suponiendo"]
  }
}, {
  "inf": "tener",
  "inf_eng": "to have",
  "In Pres": {
    "s1": ["tengo"],
    "s2": ["tienes"],
    "s3": ["tiene"],
    "p1": ["tenemos"],
    "p2": ["tenéis"],
    "p3": ["tienen"]
  },
  "In Fut": {
    "s1": ["tendré"],
    "s2": ["tendrás"],
    "s3": ["tendrá"],
    "p1": ["tendremos"],
    "p2": ["tendréis"],
    "p3": ["tendrán"]
  },
  "In Imp": {
    "s1": ["tenía"],
    "s2": ["tenías"],
    "s3": ["tenía"],
    "p1": ["teníamos"],
    "p2": ["teníais"],
    "p3": ["tenían"]
  },
  "In Pret": {
    "s1": ["tuve"],
    "s2": ["tuviste"],
    "s3": ["tuvo"],
    "p1": ["tuvimos"],
    "p2": ["tuvisteis"],
    "p3": ["tuvieron"]
  },
  "In Cond": {
    "s1": ["tendría"],
    "s2": ["tendrías"],
    "s3": ["tendría"],
    "p1": ["tendríamos"],
    "p2": ["tendríais"],
    "p3": ["tendrían"]
  },
  "In Pres Per": {
    "s1": ["he tenido"],
    "s2": ["has tenido"],
    "s3": ["ha tenido"],
    "p1": ["hemos tenido"],
    "p2": ["habéis tenido"],
    "p3": ["han tenido"]
  },
  "In Fut Per": {
    "s1": ["habré tenido"],
    "s2": ["habrás tenido"],
    "s3": ["habrá tenido"],
    "p1": ["habremos tenido"],
    "p2": ["habréis tenido"],
    "p3": ["habrán tenido"]
  },
  "In Pas Per": {
    "s1": ["había tenido"],
    "s2": ["habías tenido"],
    "s3": ["había tenido"],
    "p1": ["habíamos tenido"],
    "p2": ["habíais tenido"],
    "p3": ["habían tenido"]
  },
  "In Cond Per": {
    "s1": ["habría tenido"],
    "s2": ["habrías tenido"],
    "s3": ["habría tenido"],
    "p1": ["habríamos tenido"],
    "p2": ["habríais tenido"],
    "p3": ["habrían tenido"]
  },
  "Sub Pres": {
    "s1": ["tenga"],
    "s2": ["tengas"],
    "s3": ["tenga"],
    "p1": ["tengamos"],
    "p2": ["tengáis"],
    "p3": ["tengan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["ten"],
    "s3": ["tened"],
    "p1": [""],
    "p2": ["tenga"],
    "p3": ["tengan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no tengas"],
    "s3": ["no tengáis"],
    "p1": [""],
    "p2": ["no tenga"],
    "p3": ["no tengan"]
  },
  "In Pres Pro": {
    "s1": ["estoy teniendo"],
    "s2": ["estás teniendo"],
    "s3": ["está teniendo"],
    "p1": ["estamos teniendo"],
    "p2": ["estáis teniendo"],
    "p3": ["están teniendo"]
  }
}, {
  "inf": "terminar",
  "inf_eng": "to finish",
  "In Pres": {
    "s1": ["termino"],
    "s2": ["terminas"],
    "s3": ["termina"],
    "p1": ["terminamos"],
    "p2": ["termináis"],
    "p3": ["terminan"]
  },
  "In Fut": {
    "s1": ["terminaré"],
    "s2": ["terminarás"],
    "s3": ["terminará"],
    "p1": ["terminaremos"],
    "p2": ["terminaréis"],
    "p3": ["terminarán"]
  },
  "In Imp": {
    "s1": ["terminaba"],
    "s2": ["terminabas"],
    "s3": ["terminaba"],
    "p1": ["terminábamos"],
    "p2": ["terminabais"],
    "p3": ["terminaban"]
  },
  "In Pret": {
    "s1": ["terminé"],
    "s2": ["terminaste"],
    "s3": ["terminó"],
    "p1": ["terminamos"],
    "p2": ["terminasteis"],
    "p3": ["terminaron"]
  },
  "In Cond": {
    "s1": ["terminaría"],
    "s2": ["terminarías"],
    "s3": ["terminaría"],
    "p1": ["terminaríamos"],
    "p2": ["terminaríais"],
    "p3": ["terminarían"]
  },
  "In Pres Per": {
    "s1": ["he terminado"],
    "s2": ["has terminado"],
    "s3": ["ha terminado"],
    "p1": ["hemos terminado"],
    "p2": ["habéis terminado"],
    "p3": ["han terminado"]
  },
  "In Fut Per": {
    "s1": ["habré terminado"],
    "s2": ["habrás terminado"],
    "s3": ["habrá terminado"],
    "p1": ["habremos terminado"],
    "p2": ["habréis terminado"],
    "p3": ["habrán terminado"]
  },
  "In Pas Per": {
    "s1": ["había terminado"],
    "s2": ["habías terminado"],
    "s3": ["había terminado"],
    "p1": ["habíamos terminado"],
    "p2": ["habíais terminado"],
    "p3": ["habían terminado"]
  },
  "In Cond Per": {
    "s1": ["habría terminado"],
    "s2": ["habrías terminado"],
    "s3": ["habría terminado"],
    "p1": ["habríamos terminado"],
    "p2": ["habríais terminado"],
    "p3": ["habrían terminado"]
  },
  "Sub Pres": {
    "s1": ["termine"],
    "s2": ["termines"],
    "s3": ["termine"],
    "p1": ["terminemos"],
    "p2": ["terminéis"],
    "p3": ["terminen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["termina"],
    "s3": ["terminad"],
    "p1": [""],
    "p2": ["termine"],
    "p3": ["terminen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no termines"],
    "s3": ["no terminéis"],
    "p1": [""],
    "p2": ["no termine"],
    "p3": ["no terminen"]
  },
  "In Pres Pro": {
    "s1": ["estoy terminando"],
    "s2": ["estás terminando"],
    "s3": ["está terminando"],
    "p1": ["estamos terminando"],
    "p2": ["estáis terminando"],
    "p3": ["están terminando"]
  }
}, {
  "inf": "tirar",
  "inf_eng": "to throw",
  "In Pres": {
    "s1": ["tiro"],
    "s2": ["tiras"],
    "s3": ["tira"],
    "p1": ["tiramos"],
    "p2": ["tiráis"],
    "p3": ["tiran"]
  },
  "In Fut": {
    "s1": ["tiraré"],
    "s2": ["tirarás"],
    "s3": ["tirará"],
    "p1": ["tiraremos"],
    "p2": ["tiraréis"],
    "p3": ["tirarán"]
  },
  "In Imp": {
    "s1": ["tiraba"],
    "s2": ["tirabas"],
    "s3": ["tiraba"],
    "p1": ["tirábamos"],
    "p2": ["tirabais"],
    "p3": ["tiraban"]
  },
  "In Pret": {
    "s1": ["tiré"],
    "s2": ["tiraste"],
    "s3": ["tiró"],
    "p1": ["tiramos"],
    "p2": ["tirasteis"],
    "p3": ["tiraron"]
  },
  "In Cond": {
    "s1": ["tiraría"],
    "s2": ["tirarías"],
    "s3": ["tiraría"],
    "p1": ["tiraríamos"],
    "p2": ["tiraríais"],
    "p3": ["tirarían"]
  },
  "In Pres Per": {
    "s1": ["he tirado"],
    "s2": ["has tirado"],
    "s3": ["ha tirado"],
    "p1": ["hemos tirado"],
    "p2": ["habéis tirado"],
    "p3": ["han tirado"]
  },
  "In Fut Per": {
    "s1": ["habré tirado"],
    "s2": ["habrás tirado"],
    "s3": ["habrá tirado"],
    "p1": ["habremos tirado"],
    "p2": ["habréis tirado"],
    "p3": ["habrán tirado"]
  },
  "In Pas Per": {
    "s1": ["había tirado"],
    "s2": ["habías tirado"],
    "s3": ["había tirado"],
    "p1": ["habíamos tirado"],
    "p2": ["habíais tirado"],
    "p3": ["habían tirado"]
  },
  "In Cond Per": {
    "s1": ["habría tirado"],
    "s2": ["habrías tirado"],
    "s3": ["habría tirado"],
    "p1": ["habríamos tirado"],
    "p2": ["habríais tirado"],
    "p3": ["habrían tirado"]
  },
  "Sub Pres": {
    "s1": ["tire"],
    "s2": ["tires"],
    "s3": ["tire"],
    "p1": ["tiremos"],
    "p2": ["tiréis"],
    "p3": ["tiren"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["tira"],
    "s3": ["tirad"],
    "p1": [""],
    "p2": ["tire"],
    "p3": ["tiren"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no tires"],
    "s3": ["no tiréis"],
    "p1": [""],
    "p2": ["no tire"],
    "p3": ["no tiren"]
  },
  "In Pres Pro": {
    "s1": ["estoy tirando"],
    "s2": ["estás tirando"],
    "s3": ["está tirando"],
    "p1": ["estamos tirando"],
    "p2": ["estáis tirando"],
    "p3": ["están tirando"]
  }
}, {
  "inf": "tocar",
  "inf_eng": "to touch",
  "In Pres": {
    "s1": ["toco"],
    "s2": ["tocas"],
    "s3": ["toca"],
    "p1": ["tocamos"],
    "p2": ["tocáis"],
    "p3": ["tocan"]
  },
  "In Fut": {
    "s1": ["tocaré"],
    "s2": ["tocarás"],
    "s3": ["tocará"],
    "p1": ["tocaremos"],
    "p2": ["tocaréis"],
    "p3": ["tocarán"]
  },
  "In Imp": {
    "s1": ["tocaba"],
    "s2": ["tocabas"],
    "s3": ["tocaba"],
    "p1": ["tocábamos"],
    "p2": ["tocabais"],
    "p3": ["tocaban"]
  },
  "In Pret": {
    "s1": ["toqué"],
    "s2": ["tocaste"],
    "s3": ["tocó"],
    "p1": ["tocamos"],
    "p2": ["tocasteis"],
    "p3": ["tocaron"]
  },
  "In Cond": {
    "s1": ["tocaría"],
    "s2": ["tocarías"],
    "s3": ["tocaría"],
    "p1": ["tocaríamos"],
    "p2": ["tocaríais"],
    "p3": ["tocarían"]
  },
  "In Pres Per": {
    "s1": ["he tocado"],
    "s2": ["has tocado"],
    "s3": ["ha tocado"],
    "p1": ["hemos tocado"],
    "p2": ["habéis tocado"],
    "p3": ["han tocado"]
  },
  "In Fut Per": {
    "s1": ["habré tocado"],
    "s2": ["habrás tocado"],
    "s3": ["habrá tocado"],
    "p1": ["habremos tocado"],
    "p2": ["habréis tocado"],
    "p3": ["habrán tocado"]
  },
  "In Pas Per": {
    "s1": ["había tocado"],
    "s2": ["habías tocado"],
    "s3": ["había tocado"],
    "p1": ["habíamos tocado"],
    "p2": ["habíais tocado"],
    "p3": ["habían tocado"]
  },
  "In Cond Per": {
    "s1": ["habría tocado"],
    "s2": ["habrías tocado"],
    "s3": ["habría tocado"],
    "p1": ["habríamos tocado"],
    "p2": ["habríais tocado"],
    "p3": ["habrían tocado"]
  },
  "Sub Pres": {
    "s1": ["toque"],
    "s2": ["toques"],
    "s3": ["toque"],
    "p1": ["toquemos"],
    "p2": ["toquéis"],
    "p3": ["toquen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["toca"],
    "s3": ["tocad"],
    "p1": [""],
    "p2": ["toque"],
    "p3": ["toquen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no toques"],
    "s3": ["no toquéis"],
    "p1": [""],
    "p2": ["no toque"],
    "p3": ["no toquen"]
  },
  "In Pres Pro": {
    "s1": ["estoy tocando"],
    "s2": ["estás tocando"],
    "s3": ["está tocando"],
    "p1": ["estamos tocando"],
    "p2": ["estáis tocando"],
    "p3": ["están tocando"]
  }
}, {
  "inf": "tomar",
  "inf_eng": "to take",
  "In Pres": {
    "s1": ["tomo"],
    "s2": ["tomas"],
    "s3": ["toma"],
    "p1": ["tomamos"],
    "p2": ["tomáis"],
    "p3": ["toman"]
  },
  "In Fut": {
    "s1": ["tomaré"],
    "s2": ["tomarás"],
    "s3": ["tomará"],
    "p1": ["tomaremos"],
    "p2": ["tomaréis"],
    "p3": ["tomarán"]
  },
  "In Imp": {
    "s1": ["tomaba"],
    "s2": ["tomabas"],
    "s3": ["tomaba"],
    "p1": ["tomábamos"],
    "p2": ["tomabais"],
    "p3": ["tomaban"]
  },
  "In Pret": {
    "s1": ["tomé"],
    "s2": ["tomaste"],
    "s3": ["tomó"],
    "p1": ["tomamos"],
    "p2": ["tomasteis"],
    "p3": ["tomaron"]
  },
  "In Cond": {
    "s1": ["tomaría"],
    "s2": ["tomarías"],
    "s3": ["tomaría"],
    "p1": ["tomaríamos"],
    "p2": ["tomaríais"],
    "p3": ["tomarían"]
  },
  "In Pres Per": {
    "s1": ["he tomado"],
    "s2": ["has tomado"],
    "s3": ["ha tomado"],
    "p1": ["hemos tomado"],
    "p2": ["habéis tomado"],
    "p3": ["han tomado"]
  },
  "In Fut Per": {
    "s1": ["habré tomado"],
    "s2": ["habrás tomado"],
    "s3": ["habrá tomado"],
    "p1": ["habremos tomado"],
    "p2": ["habréis tomado"],
    "p3": ["habrán tomado"]
  },
  "In Pas Per": {
    "s1": ["había tomado"],
    "s2": ["habías tomado"],
    "s3": ["había tomado"],
    "p1": ["habíamos tomado"],
    "p2": ["habíais tomado"],
    "p3": ["habían tomado"]
  },
  "In Cond Per": {
    "s1": ["habría tomado"],
    "s2": ["habrías tomado"],
    "s3": ["habría tomado"],
    "p1": ["habríamos tomado"],
    "p2": ["habríais tomado"],
    "p3": ["habrían tomado"]
  },
  "Sub Pres": {
    "s1": ["tome"],
    "s2": ["tomes"],
    "s3": ["tome"],
    "p1": ["tomemos"],
    "p2": ["toméis"],
    "p3": ["tomen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["toma"],
    "s3": ["tomad"],
    "p1": [""],
    "p2": ["tome"],
    "p3": ["tomen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no tomes"],
    "s3": ["no toméis"],
    "p1": [""],
    "p2": ["no tome"],
    "p3": ["no tomen"]
  },
  "In Pres Pro": {
    "s1": ["estoy tomando"],
    "s2": ["estás tomando"],
    "s3": ["está tomando"],
    "p1": ["estamos tomando"],
    "p2": ["estáis tomando"],
    "p3": ["están tomando"]
  }
}, {
  "inf": "toser",
  "inf_eng": "to cough",
  "In Pres": {
    "s1": ["toso"],
    "s2": ["toses"],
    "s3": ["tose"],
    "p1": ["tosemos"],
    "p2": ["toséis"],
    "p3": ["tosen"]
  },
  "In Fut": {
    "s1": ["toseré"],
    "s2": ["toserás"],
    "s3": ["toserá"],
    "p1": ["toseremos"],
    "p2": ["toseréis"],
    "p3": ["toserán"]
  },
  "In Imp": {
    "s1": ["tosía"],
    "s2": ["tosías"],
    "s3": ["tosía"],
    "p1": ["tosíamos"],
    "p2": ["tosíais"],
    "p3": ["tosían"]
  },
  "In Pret": {
    "s1": ["tosí"],
    "s2": ["tosiste"],
    "s3": ["tosió"],
    "p1": ["tosimos"],
    "p2": ["tosisteis"],
    "p3": ["tosieron"]
  },
  "In Cond": {
    "s1": ["tosería"],
    "s2": ["toserías"],
    "s3": ["tosería"],
    "p1": ["toseríamos"],
    "p2": ["toseríais"],
    "p3": ["toserían"]
  },
  "In Pres Per": {
    "s1": ["he tosido"],
    "s2": ["has tosido"],
    "s3": ["ha tosido"],
    "p1": ["hemos tosido"],
    "p2": ["habéis tosido"],
    "p3": ["han tosido"]
  },
  "In Fut Per": {
    "s1": ["habré tosido"],
    "s2": ["habrás tosido"],
    "s3": ["habrá tosido"],
    "p1": ["habremos tosido"],
    "p2": ["habréis tosido"],
    "p3": ["habrán tosido"]
  },
  "In Pas Per": {
    "s1": ["había tosido"],
    "s2": ["habías tosido"],
    "s3": ["había tosido"],
    "p1": ["habíamos tosido"],
    "p2": ["habíais tosido"],
    "p3": ["habían tosido"]
  },
  "In Cond Per": {
    "s1": ["habría tosido"],
    "s2": ["habrías tosido"],
    "s3": ["habría tosido"],
    "p1": ["habríamos tosido"],
    "p2": ["habríais tosido"],
    "p3": ["habrían tosido"]
  },
  "Sub Pres": {
    "s1": ["tosa"],
    "s2": ["tosas"],
    "s3": ["tosa"],
    "p1": ["tosamos"],
    "p2": ["tosáis"],
    "p3": ["tosan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["tose"],
    "s3": ["tosed"],
    "p1": [""],
    "p2": ["tosa"],
    "p3": ["tosan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no tosas"],
    "s3": ["no tosáis"],
    "p1": [""],
    "p2": ["no tosa"],
    "p3": ["no tosan"]
  },
  "In Pres Pro": {
    "s1": ["estoy tosiendo"],
    "s2": ["estás tosiendo"],
    "s3": ["está tosiendo"],
    "p1": ["estamos tosiendo"],
    "p2": ["estáis tosiendo"],
    "p3": ["están tosiendo"]
  }
}, {
  "inf": "trabajar",
  "inf_eng": "to work",
  "In Pres": {
    "s1": ["trabajo"],
    "s2": ["trabajas"],
    "s3": ["trabaja"],
    "p1": ["trabajamos"],
    "p2": ["trabajáis"],
    "p3": ["trabajan"]
  },
  "In Fut": {
    "s1": ["trabajaré"],
    "s2": ["trabajarás"],
    "s3": ["trabajará"],
    "p1": ["trabajaremos"],
    "p2": ["trabajaréis"],
    "p3": ["trabajarán"]
  },
  "In Imp": {
    "s1": ["trabajaba"],
    "s2": ["trabajabas"],
    "s3": ["trabajaba"],
    "p1": ["trabajábamos"],
    "p2": ["trabajabais"],
    "p3": ["trabajaban"]
  },
  "In Pret": {
    "s1": ["trabajé"],
    "s2": ["trabajaste"],
    "s3": ["trabajó"],
    "p1": ["trabajamos"],
    "p2": ["trabajasteis"],
    "p3": ["trabajaron"]
  },
  "In Cond": {
    "s1": ["trabajaría"],
    "s2": ["trabajarías"],
    "s3": ["trabajaría"],
    "p1": ["trabajaríamos"],
    "p2": ["trabajaríais"],
    "p3": ["trabajarían"]
  },
  "In Pres Per": {
    "s1": ["he trabajado"],
    "s2": ["has trabajado"],
    "s3": ["ha trabajado"],
    "p1": ["hemos trabajado"],
    "p2": ["habéis trabajado"],
    "p3": ["han trabajado"]
  },
  "In Fut Per": {
    "s1": ["habré trabajado"],
    "s2": ["habrás trabajado"],
    "s3": ["habrá trabajado"],
    "p1": ["habremos trabajado"],
    "p2": ["habréis trabajado"],
    "p3": ["habrán trabajado"]
  },
  "In Pas Per": {
    "s1": ["había trabajado"],
    "s2": ["habías trabajado"],
    "s3": ["había trabajado"],
    "p1": ["habíamos trabajado"],
    "p2": ["habíais trabajado"],
    "p3": ["habían trabajado"]
  },
  "In Cond Per": {
    "s1": ["habría trabajado"],
    "s2": ["habrías trabajado"],
    "s3": ["habría trabajado"],
    "p1": ["habríamos trabajado"],
    "p2": ["habríais trabajado"],
    "p3": ["habrían trabajado"]
  },
  "Sub Pres": {
    "s1": ["trabaje"],
    "s2": ["trabajes"],
    "s3": ["trabaje"],
    "p1": ["trabajemos"],
    "p2": ["trabajéis"],
    "p3": ["trabajen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["trabaja"],
    "s3": ["trabajad"],
    "p1": [""],
    "p2": ["trabaje"],
    "p3": ["trabajen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no trabajes"],
    "s3": ["no trabajéis"],
    "p1": [""],
    "p2": ["no trabaje"],
    "p3": ["no trabajen"]
  },
  "In Pres Pro": {
    "s1": ["estoy trabajando"],
    "s2": ["estás trabajando"],
    "s3": ["está trabajando"],
    "p1": ["estamos trabajando"],
    "p2": ["estáis trabajando"],
    "p3": ["están trabajando"]
  }
}, {
  "inf": "traer",
  "inf_eng": "to bring",
  "In Pres": {
    "s1": ["traigo"],
    "s2": ["traes"],
    "s3": ["trae"],
    "p1": ["traemos"],
    "p2": ["traéis"],
    "p3": ["traen"]
  },
  "In Fut": {
    "s1": ["traeré"],
    "s2": ["traerás"],
    "s3": ["traerá"],
    "p1": ["traeremos"],
    "p2": ["traeréis"],
    "p3": ["traerán"]
  },
  "In Imp": {
    "s1": ["traía"],
    "s2": ["traías"],
    "s3": ["traía"],
    "p1": ["traíamos"],
    "p2": ["traíais"],
    "p3": ["traían"]
  },
  "In Pret": {
    "s1": ["traje"],
    "s2": ["trajiste"],
    "s3": ["trajo"],
    "p1": ["trajimos"],
    "p2": ["trajisteis"],
    "p3": ["trajeron"]
  },
  "In Cond": {
    "s1": ["traería"],
    "s2": ["traerías"],
    "s3": ["traería"],
    "p1": ["traeríamos"],
    "p2": ["traeríais"],
    "p3": ["traerían"]
  },
  "In Pres Per": {
    "s1": ["he traído"],
    "s2": ["has traído"],
    "s3": ["ha traído"],
    "p1": ["hemos traído"],
    "p2": ["habéis traído"],
    "p3": ["han traído"]
  },
  "In Fut Per": {
    "s1": ["habré traído"],
    "s2": ["habrás traído"],
    "s3": ["habrá traído"],
    "p1": ["habremos traído"],
    "p2": ["habréis traído"],
    "p3": ["habrán traído"]
  },
  "In Pas Per": {
    "s1": ["había traído"],
    "s2": ["habías traído"],
    "s3": ["había traído"],
    "p1": ["habíamos traído"],
    "p2": ["habíais traído"],
    "p3": ["habían traído"]
  },
  "In Cond Per": {
    "s1": ["habría traído"],
    "s2": ["habrías traído"],
    "s3": ["habría traído"],
    "p1": ["habríamos traído"],
    "p2": ["habríais traído"],
    "p3": ["habrían traído"]
  },
  "Sub Pres": {
    "s1": ["traiga"],
    "s2": ["traigas"],
    "s3": ["traiga"],
    "p1": ["traigamos"],
    "p2": ["traigáis"],
    "p3": ["traigan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["trae"],
    "s3": ["traed"],
    "p1": [""],
    "p2": ["traiga"],
    "p3": ["traigan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no traigas"],
    "s3": ["no traigáis"],
    "p1": [""],
    "p2": ["no traiga"],
    "p3": ["no traigan"]
  },
  "In Pres Pro": {
    "s1": ["estoy trayendo"],
    "s2": ["estás trayendo"],
    "s3": ["está trayendo"],
    "p1": ["estamos trayendo"],
    "p2": ["estáis trayendo"],
    "p3": ["están trayendo"]
  }
}, {
  "inf": "tratar",
  "inf_eng": "to treat",
  "In Pres": {
    "s1": ["trato"],
    "s2": ["tratas"],
    "s3": ["trata"],
    "p1": ["tratamos"],
    "p2": ["tratáis"],
    "p3": ["tratan"]
  },
  "In Fut": {
    "s1": ["trataré"],
    "s2": ["tratarás"],
    "s3": ["tratará"],
    "p1": ["trataremos"],
    "p2": ["trataréis"],
    "p3": ["tratarán"]
  },
  "In Imp": {
    "s1": ["trataba"],
    "s2": ["tratabas"],
    "s3": ["trataba"],
    "p1": ["tratábamos"],
    "p2": ["tratabais"],
    "p3": ["trataban"]
  },
  "In Pret": {
    "s1": ["traté"],
    "s2": ["trataste"],
    "s3": ["trató"],
    "p1": ["tratamos"],
    "p2": ["tratasteis"],
    "p3": ["trataron"]
  },
  "In Cond": {
    "s1": ["trataría"],
    "s2": ["tratarías"],
    "s3": ["trataría"],
    "p1": ["trataríamos"],
    "p2": ["trataríais"],
    "p3": ["tratarían"]
  },
  "In Pres Per": {
    "s1": ["he tratado"],
    "s2": ["has tratado"],
    "s3": ["ha tratado"],
    "p1": ["hemos tratado"],
    "p2": ["habéis tratado"],
    "p3": ["han tratado"]
  },
  "In Fut Per": {
    "s1": ["habré tratado"],
    "s2": ["habrás tratado"],
    "s3": ["habrá tratado"],
    "p1": ["habremos tratado"],
    "p2": ["habréis tratado"],
    "p3": ["habrán tratado"]
  },
  "In Pas Per": {
    "s1": ["había tratado"],
    "s2": ["habías tratado"],
    "s3": ["había tratado"],
    "p1": ["habíamos tratado"],
    "p2": ["habíais tratado"],
    "p3": ["habían tratado"]
  },
  "In Cond Per": {
    "s1": ["habría tratado"],
    "s2": ["habrías tratado"],
    "s3": ["habría tratado"],
    "p1": ["habríamos tratado"],
    "p2": ["habríais tratado"],
    "p3": ["habrían tratado"]
  },
  "Sub Pres": {
    "s1": ["trate"],
    "s2": ["trates"],
    "s3": ["trate"],
    "p1": ["tratemos"],
    "p2": ["tratéis"],
    "p3": ["traten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["trata"],
    "s3": ["tratad"],
    "p1": [""],
    "p2": ["trate"],
    "p3": ["traten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no trates"],
    "s3": ["no tratéis"],
    "p1": [""],
    "p2": ["no trate"],
    "p3": ["no traten"]
  },
  "In Pres Pro": {
    "s1": ["estoy tratando"],
    "s2": ["estás tratando"],
    "s3": ["está tratando"],
    "p1": ["estamos tratando"],
    "p2": ["estáis tratando"],
    "p3": ["están tratando"]
  }
}, {
  "inf": "usar",
  "inf_eng": "to use",
  "In Pres": {
    "s1": ["uso"],
    "s2": ["usas"],
    "s3": ["usa"],
    "p1": ["usamos"],
    "p2": ["usáis"],
    "p3": ["usan"]
  },
  "In Fut": {
    "s1": ["usaré"],
    "s2": ["usarás"],
    "s3": ["usará"],
    "p1": ["usaremos"],
    "p2": ["usaréis"],
    "p3": ["usarán"]
  },
  "In Imp": {
    "s1": ["usaba"],
    "s2": ["usabas"],
    "s3": ["usaba"],
    "p1": ["usábamos"],
    "p2": ["usabais"],
    "p3": ["usaban"]
  },
  "In Pret": {
    "s1": ["usé"],
    "s2": ["usaste"],
    "s3": ["usó"],
    "p1": ["usamos"],
    "p2": ["usasteis"],
    "p3": ["usaron"]
  },
  "In Cond": {
    "s1": ["usaría"],
    "s2": ["usarías"],
    "s3": ["usaría"],
    "p1": ["usaríamos"],
    "p2": ["usaríais"],
    "p3": ["usarían"]
  },
  "In Pres Per": {
    "s1": ["he usado"],
    "s2": ["has usado"],
    "s3": ["ha usado"],
    "p1": ["hemos usado"],
    "p2": ["habéis usado"],
    "p3": ["han usado"]
  },
  "In Fut Per": {
    "s1": ["habré usado"],
    "s2": ["habrás usado"],
    "s3": ["habrá usado"],
    "p1": ["habremos usado"],
    "p2": ["habréis usado"],
    "p3": ["habrán usado"]
  },
  "In Pas Per": {
    "s1": ["había usado"],
    "s2": ["habías usado"],
    "s3": ["había usado"],
    "p1": ["habíamos usado"],
    "p2": ["habíais usado"],
    "p3": ["habían usado"]
  },
  "In Cond Per": {
    "s1": ["habría usado"],
    "s2": ["habrías usado"],
    "s3": ["habría usado"],
    "p1": ["habríamos usado"],
    "p2": ["habríais usado"],
    "p3": ["habrían usado"]
  },
  "Sub Pres": {
    "s1": ["use"],
    "s2": ["uses"],
    "s3": ["use"],
    "p1": ["usemos"],
    "p2": ["uséis"],
    "p3": ["usen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["usa"],
    "s3": ["usad"],
    "p1": [""],
    "p2": ["use"],
    "p3": ["usen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no uses"],
    "s3": ["no uséis"],
    "p1": [""],
    "p2": ["no use"],
    "p3": ["no usen"]
  },
  "In Pres Pro": {
    "s1": ["estoy usando"],
    "s2": ["estás usando"],
    "s3": ["está usando"],
    "p1": ["estamos usando"],
    "p2": ["estáis usando"],
    "p3": ["están usando"]
  }
}, {
  "inf": "vender",
  "inf_eng": "to sell",
  "In Pres": {
    "s1": ["vendo"],
    "s2": ["vendes"],
    "s3": ["vende"],
    "p1": ["vendemos"],
    "p2": ["vendéis"],
    "p3": ["venden"]
  },
  "In Fut": {
    "s1": ["venderé"],
    "s2": ["venderás"],
    "s3": ["venderá"],
    "p1": ["venderemos"],
    "p2": ["venderéis"],
    "p3": ["venderán"]
  },
  "In Imp": {
    "s1": ["vendía"],
    "s2": ["vendías"],
    "s3": ["vendía"],
    "p1": ["vendíamos"],
    "p2": ["vendíais"],
    "p3": ["vendían"]
  },
  "In Pret": {
    "s1": ["vendí"],
    "s2": ["vendiste"],
    "s3": ["vendió"],
    "p1": ["vendimos"],
    "p2": ["vendisteis"],
    "p3": ["vendieron"]
  },
  "In Cond": {
    "s1": ["vendería"],
    "s2": ["venderías"],
    "s3": ["vendería"],
    "p1": ["venderíamos"],
    "p2": ["venderíais"],
    "p3": ["venderían"]
  },
  "In Pres Per": {
    "s1": ["he vendido"],
    "s2": ["has vendido"],
    "s3": ["ha vendido"],
    "p1": ["hemos vendido"],
    "p2": ["habéis vendido"],
    "p3": ["han vendido"]
  },
  "In Fut Per": {
    "s1": ["habré vendido"],
    "s2": ["habrás vendido"],
    "s3": ["habrá vendido"],
    "p1": ["habremos vendido"],
    "p2": ["habréis vendido"],
    "p3": ["habrán vendido"]
  },
  "In Pas Per": {
    "s1": ["había vendido"],
    "s2": ["habías vendido"],
    "s3": ["había vendido"],
    "p1": ["habíamos vendido"],
    "p2": ["habíais vendido"],
    "p3": ["habían vendido"]
  },
  "In Cond Per": {
    "s1": ["habría vendido"],
    "s2": ["habrías vendido"],
    "s3": ["habría vendido"],
    "p1": ["habríamos vendido"],
    "p2": ["habríais vendido"],
    "p3": ["habrían vendido"]
  },
  "Sub Pres": {
    "s1": ["venda"],
    "s2": ["vendas"],
    "s3": ["venda"],
    "p1": ["vendamos"],
    "p2": ["vendáis"],
    "p3": ["vendan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["vende"],
    "s3": ["vended"],
    "p1": [""],
    "p2": ["venda"],
    "p3": ["vendan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no vendas"],
    "s3": ["no vendáis"],
    "p1": [""],
    "p2": ["no venda"],
    "p3": ["no vendan"]
  },
  "In Pres Pro": {
    "s1": ["estoy vendiendo"],
    "s2": ["estás vendiendo"],
    "s3": ["está vendiendo"],
    "p1": ["estamos vendiendo"],
    "p2": ["estáis vendiendo"],
    "p3": ["están vendiendo"]
  }
}, {
  "inf": "venir",
  "inf_eng": "to come",
  "In Pres": {
    "s1": ["vengo"],
    "s2": ["vienes"],
    "s3": ["viene"],
    "p1": ["venimos"],
    "p2": ["venís"],
    "p3": ["vienen"]
  },
  "In Fut": {
    "s1": ["vendré"],
    "s2": ["vendrás"],
    "s3": ["vendrá"],
    "p1": ["vendremos"],
    "p2": ["vendréis"],
    "p3": ["vendrán"]
  },
  "In Imp": {
    "s1": ["venía"],
    "s2": ["venías"],
    "s3": ["venía"],
    "p1": ["veníamos"],
    "p2": ["veníais"],
    "p3": ["venían"]
  },
  "In Pret": {
    "s1": ["vine"],
    "s2": ["viniste"],
    "s3": ["vino"],
    "p1": ["vinimos"],
    "p2": ["vinisteis"],
    "p3": ["vinieron"]
  },
  "In Cond": {
    "s1": ["vendría"],
    "s2": ["vendrías"],
    "s3": ["vendría"],
    "p1": ["vendríamos"],
    "p2": ["vendríais"],
    "p3": ["vendrían"]
  },
  "In Pres Per": {
    "s1": ["he venido"],
    "s2": ["has venido"],
    "s3": ["ha venido"],
    "p1": ["hemos venido"],
    "p2": ["habéis venido"],
    "p3": ["han venido"]
  },
  "In Fut Per": {
    "s1": ["habré venido"],
    "s2": ["habrás venido"],
    "s3": ["habrá venido"],
    "p1": ["habremos venido"],
    "p2": ["habréis venido"],
    "p3": ["habrán venido"]
  },
  "In Pas Per": {
    "s1": ["había venido"],
    "s2": ["habías venido"],
    "s3": ["había venido"],
    "p1": ["habíamos venido"],
    "p2": ["habíais venido"],
    "p3": ["habían venido"]
  },
  "In Cond Per": {
    "s1": ["habría venido"],
    "s2": ["habrías venido"],
    "s3": ["habría venido"],
    "p1": ["habríamos venido"],
    "p2": ["habríais venido"],
    "p3": ["habrían venido"]
  },
  "Sub Pres": {
    "s1": ["venga"],
    "s2": ["vengas"],
    "s3": ["venga"],
    "p1": ["vengamos"],
    "p2": ["vengáis"],
    "p3": ["vengan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["ven"],
    "s3": ["venid"],
    "p1": [""],
    "p2": ["venga"],
    "p3": ["vengan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no vengas"],
    "s3": ["no vengáis"],
    "p1": [""],
    "p2": ["no venga"],
    "p3": ["no vengan"]
  },
  "In Pres Pro": {
    "s1": ["estoy viniendo"],
    "s2": ["estás viniendo"],
    "s3": ["está viniendo"],
    "p1": ["estamos viniendo"],
    "p2": ["estáis viniendo"],
    "p3": ["están viniendo"]
  }
}, {
  "inf": "ver",
  "inf_eng": "to see",
  "In Pres": {
    "s1": ["veo"],
    "s2": ["ves"],
    "s3": ["ve"],
    "p1": ["vemos"],
    "p2": ["veis"],
    "p3": ["ven"]
  },
  "In Fut": {
    "s1": ["veré"],
    "s2": ["verás"],
    "s3": ["verá"],
    "p1": ["veremos"],
    "p2": ["veréis"],
    "p3": ["verán"]
  },
  "In Imp": {
    "s1": ["veía"],
    "s2": ["veías"],
    "s3": ["veía"],
    "p1": ["veíamos"],
    "p2": ["veíais"],
    "p3": ["veían"]
  },
  "In Pret": {
    "s1": ["vi"],
    "s2": ["viste"],
    "s3": ["vio"],
    "p1": ["vimos"],
    "p2": ["visteis"],
    "p3": ["vieron"]
  },
  "In Cond": {
    "s1": ["vería"],
    "s2": ["verías"],
    "s3": ["vería"],
    "p1": ["veríamos"],
    "p2": ["veríais"],
    "p3": ["verían"]
  },
  "In Pres Per": {
    "s1": ["he visto"],
    "s2": ["has visto"],
    "s3": ["ha visto"],
    "p1": ["hemos visto"],
    "p2": ["habéis visto"],
    "p3": ["han visto"]
  },
  "In Fut Per": {
    "s1": ["habré visto"],
    "s2": ["habrás visto"],
    "s3": ["habrá visto"],
    "p1": ["habremos visto"],
    "p2": ["habréis visto"],
    "p3": ["habrán visto"]
  },
  "In Pas Per": {
    "s1": ["había visto"],
    "s2": ["habías visto"],
    "s3": ["había visto"],
    "p1": ["habíamos visto"],
    "p2": ["habíais visto"],
    "p3": ["habían visto"]
  },
  "In Cond Per": {
    "s1": ["habría visto"],
    "s2": ["habrías visto"],
    "s3": ["habría visto"],
    "p1": ["habríamos visto"],
    "p2": ["habríais visto"],
    "p3": ["habrían visto"]
  },
  "Sub Pres": {
    "s1": ["vea"],
    "s2": ["veas"],
    "s3": ["vea"],
    "p1": ["veamos"],
    "p2": ["veáis"],
    "p3": ["vean"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["ve"],
    "s3": ["ved"],
    "p1": [""],
    "p2": ["vea"],
    "p3": ["vean"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no veas"],
    "s3": ["no veáis"],
    "p1": [""],
    "p2": ["no vea"],
    "p3": ["no vean"]
  },
  "In Pres Pro": {
    "s1": ["estoy viendo"],
    "s2": ["estás viendo"],
    "s3": ["está viendo"],
    "p1": ["estamos viendo"],
    "p2": ["estáis viendo"],
    "p3": ["están viendo"]
  }
}, {
  "inf": "viajar",
  "inf_eng": "to travel",
  "In Pres": {
    "s1": ["viajo"],
    "s2": ["viajas"],
    "s3": ["viaja"],
    "p1": ["viajamos"],
    "p2": ["viajáis"],
    "p3": ["viajan"]
  },
  "In Fut": {
    "s1": ["viajaré"],
    "s2": ["viajarás"],
    "s3": ["viajará"],
    "p1": ["viajaremos"],
    "p2": ["viajaréis"],
    "p3": ["viajarán"]
  },
  "In Imp": {
    "s1": ["viajaba"],
    "s2": ["viajabas"],
    "s3": ["viajaba"],
    "p1": ["viajábamos"],
    "p2": ["viajabais"],
    "p3": ["viajaban"]
  },
  "In Pret": {
    "s1": ["viajé"],
    "s2": ["viajaste"],
    "s3": ["viajó"],
    "p1": ["viajamos"],
    "p2": ["viajasteis"],
    "p3": ["viajaron"]
  },
  "In Cond": {
    "s1": ["viajaría"],
    "s2": ["viajarías"],
    "s3": ["viajaría"],
    "p1": ["viajaríamos"],
    "p2": ["viajaríais"],
    "p3": ["viajarían"]
  },
  "In Pres Per": {
    "s1": ["he viajado"],
    "s2": ["has viajado"],
    "s3": ["ha viajado"],
    "p1": ["hemos viajado"],
    "p2": ["habéis viajado"],
    "p3": ["han viajado"]
  },
  "In Fut Per": {
    "s1": ["habré viajado"],
    "s2": ["habrás viajado"],
    "s3": ["habrá viajado"],
    "p1": ["habremos viajado"],
    "p2": ["habréis viajado"],
    "p3": ["habrán viajado"]
  },
  "In Pas Per": {
    "s1": ["había viajado"],
    "s2": ["habías viajado"],
    "s3": ["había viajado"],
    "p1": ["habíamos viajado"],
    "p2": ["habíais viajado"],
    "p3": ["habían viajado"]
  },
  "In Cond Per": {
    "s1": ["habría viajado"],
    "s2": ["habrías viajado"],
    "s3": ["habría viajado"],
    "p1": ["habríamos viajado"],
    "p2": ["habríais viajado"],
    "p3": ["habrían viajado"]
  },
  "Sub Pres": {
    "s1": ["viaje"],
    "s2": ["viajes"],
    "s3": ["viaje"],
    "p1": ["viajemos"],
    "p2": ["viajéis"],
    "p3": ["viajen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["viaja"],
    "s3": ["viajad"],
    "p1": [""],
    "p2": ["viaje"],
    "p3": ["viajen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no viajes"],
    "s3": ["no viajéis"],
    "p1": [""],
    "p2": ["no viaje"],
    "p3": ["no viajen"]
  },
  "In Pres Pro": {
    "s1": ["estoy viajando"],
    "s2": ["estás viajando"],
    "s3": ["está viajando"],
    "p1": ["estamos viajando"],
    "p2": ["estáis viajando"],
    "p3": ["están viajando"]
  }
}, {
  "inf": "vivir",
  "inf_eng": "to live",
  "In Pres": {
    "s1": ["vivo"],
    "s2": ["vives"],
    "s3": ["vive"],
    "p1": ["vivimos"],
    "p2": ["vivís"],
    "p3": ["viven"]
  },
  "In Fut": {
    "s1": ["viviré"],
    "s2": ["vivirás"],
    "s3": ["vivirá"],
    "p1": ["viviremos"],
    "p2": ["viviréis"],
    "p3": ["vivirán"]
  },
  "In Imp": {
    "s1": ["vivía"],
    "s2": ["vivías"],
    "s3": ["vivía"],
    "p1": ["vivíamos"],
    "p2": ["vivíais"],
    "p3": ["vivían"]
  },
  "In Pret": {
    "s1": ["viví"],
    "s2": ["viviste"],
    "s3": ["vivió"],
    "p1": ["vivimos"],
    "p2": ["vivisteis"],
    "p3": ["vivieron"]
  },
  "In Cond": {
    "s1": ["viviría"],
    "s2": ["vivirías"],
    "s3": ["viviría"],
    "p1": ["viviríamos"],
    "p2": ["viviríais"],
    "p3": ["vivirían"]
  },
  "In Pres Per": {
    "s1": ["he vivido"],
    "s2": ["has vivido"],
    "s3": ["ha vivido"],
    "p1": ["hemos vivido"],
    "p2": ["habéis vivido"],
    "p3": ["han vivido"]
  },
  "In Fut Per": {
    "s1": ["habré vivido"],
    "s2": ["habrás vivido"],
    "s3": ["habrá vivido"],
    "p1": ["habremos vivido"],
    "p2": ["habréis vivido"],
    "p3": ["habrán vivido"]
  },
  "In Pas Per": {
    "s1": ["había vivido"],
    "s2": ["habías vivido"],
    "s3": ["había vivido"],
    "p1": ["habíamos vivido"],
    "p2": ["habíais vivido"],
    "p3": ["habían vivido"]
  },
  "In Cond Per": {
    "s1": ["habría vivido"],
    "s2": ["habrías vivido"],
    "s3": ["habría vivido"],
    "p1": ["habríamos vivido"],
    "p2": ["habríais vivido"],
    "p3": ["habrían vivido"]
  },
  "Sub Pres": {
    "s1": ["viva"],
    "s2": ["vivas"],
    "s3": ["viva"],
    "p1": ["vivamos"],
    "p2": ["viváis"],
    "p3": ["vivan"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["vive"],
    "s3": ["vivid"],
    "p1": [""],
    "p2": ["viva"],
    "p3": ["vivan"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no vivas"],
    "s3": ["no viváis"],
    "p1": [""],
    "p2": ["no viva"],
    "p3": ["no vivan"]
  },
  "In Pres Pro": {
    "s1": ["estoy viviendo"],
    "s2": ["estás viviendo"],
    "s3": ["está viviendo"],
    "p1": ["estamos viviendo"],
    "p2": ["estáis viviendo"],
    "p3": ["están viviendo"]
  }
}, {
  "inf": "volar",
  "inf_eng": "to fly",
  "In Pres": {
    "s1": ["vuelo"],
    "s2": ["vuelas"],
    "s3": ["vuela"],
    "p1": ["volamos"],
    "p2": ["voláis"],
    "p3": ["vuelan"]
  },
  "In Fut": {
    "s1": ["volaré"],
    "s2": ["volarás"],
    "s3": ["volará"],
    "p1": ["volaremos"],
    "p2": ["volaréis"],
    "p3": ["volarán"]
  },
  "In Imp": {
    "s1": ["volaba"],
    "s2": ["volabas"],
    "s3": ["volaba"],
    "p1": ["volábamos"],
    "p2": ["volabais"],
    "p3": ["volaban"]
  },
  "In Pret": {
    "s1": ["volé"],
    "s2": ["volaste"],
    "s3": ["voló"],
    "p1": ["volamos"],
    "p2": ["volasteis"],
    "p3": ["volaron"]
  },
  "In Cond": {
    "s1": ["volaría"],
    "s2": ["volarías"],
    "s3": ["volaría"],
    "p1": ["volaríamos"],
    "p2": ["volaríais"],
    "p3": ["volarían"]
  },
  "In Pres Per": {
    "s1": ["he volado"],
    "s2": ["has volado"],
    "s3": ["ha volado"],
    "p1": ["hemos volado"],
    "p2": ["habéis volado"],
    "p3": ["han volado"]
  },
  "In Fut Per": {
    "s1": ["habré volado"],
    "s2": ["habrás volado"],
    "s3": ["habrá volado"],
    "p1": ["habremos volado"],
    "p2": ["habréis volado"],
    "p3": ["habrán volado"]
  },
  "In Pas Per": {
    "s1": ["había volado"],
    "s2": ["habías volado"],
    "s3": ["había volado"],
    "p1": ["habíamos volado"],
    "p2": ["habíais volado"],
    "p3": ["habían volado"]
  },
  "In Cond Per": {
    "s1": ["habría volado"],
    "s2": ["habrías volado"],
    "s3": ["habría volado"],
    "p1": ["habríamos volado"],
    "p2": ["habríais volado"],
    "p3": ["habrían volado"]
  },
  "Sub Pres": {
    "s1": ["vuele"],
    "s2": ["vueles"],
    "s3": ["vuele"],
    "p1": ["volemos"],
    "p2": ["voléis"],
    "p3": ["vuelen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["vuela"],
    "s3": ["volad"],
    "p1": [""],
    "p2": ["vuele"],
    "p3": ["vuelen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no vueles"],
    "s3": ["no voléis"],
    "p1": [""],
    "p2": ["no vuele"],
    "p3": ["no vuelen"]
  },
  "In Pres Pro": {
    "s1": ["estoy volando"],
    "s2": ["estás volando"],
    "s3": ["está volando"],
    "p1": ["estamos volando"],
    "p2": ["estáis volando"],
    "p3": ["están volando"]
  }
}, {
  "inf": "presentar",
  "inf_eng": "to introduce",
  "In Pres": {
    "s1": ["presento"],
    "s2": ["presentas"],
    "s3": ["presenta"],
    "p1": ["presentamos"],
    "p2": ["presentáis"],
    "p3": ["presentan"]
  },
  "In Fut": {
    "s1": ["presentaré"],
    "s2": ["presentarás"],
    "s3": ["presentará"],
    "p1": ["presentaremos"],
    "p2": ["presentaréis"],
    "p3": ["presentarán"]
  },
  "In Imp": {
    "s1": ["presentaba"],
    "s2": ["presentabas"],
    "s3": ["presentaba"],
    "p1": ["presentábamos"],
    "p2": ["presentabais"],
    "p3": ["presentaban"]
  },
  "In Pret": {
    "s1": ["presenté"],
    "s2": ["presentaste"],
    "s3": ["presentó"],
    "p1": ["presentamos"],
    "p2": ["presentasteis"],
    "p3": ["presentaron"]
  },
  "In Cond": {
    "s1": ["presentaría"],
    "s2": ["presentarías"],
    "s3": ["presentaría"],
    "p1": ["presentaríamos"],
    "p2": ["presentaríais"],
    "p3": ["presentarían"]
  },
  "In Pres Per": {
    "s1": ["he presentado"],
    "s2": ["has presentado"],
    "s3": ["ha presentado"],
    "p1": ["hemos presentado"],
    "p2": ["habéis presentado"],
    "p3": ["han presentado"]
  },
  "In Fut Per": {
    "s1": ["habré presentado"],
    "s2": ["habrás presentado"],
    "s3": ["habrá presentado"],
    "p1": ["habremos presentado"],
    "p2": ["habréis presentado"],
    "p3": ["habrán presentado"]
  },
  "In Pas Per": {
    "s1": ["había presentado"],
    "s2": ["habías presentado"],
    "s3": ["había presentado"],
    "p1": ["habíamos presentado"],
    "p2": ["habíais presentado"],
    "p3": ["habían presentado"]
  },
  "In Cond Per": {
    "s1": ["habría presentado"],
    "s2": ["habrías presentado"],
    "s3": ["habría presentado"],
    "p1": ["habríamos presentado"],
    "p2": ["habríais presentado"],
    "p3": ["habrían presentado"]
  },
  "Sub Pres": {
    "s1": ["presente"],
    "s2": ["presentes"],
    "s3": ["presente"],
    "p1": ["presentemos"],
    "p2": ["presentéis"],
    "p3": ["presenten"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["presenta"],
    "s3": ["presentad"],
    "p1": [""],
    "p2": ["presente"],
    "p3": ["presenten"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no presentes"],
    "s3": ["no presentéis"],
    "p1": [""],
    "p2": ["no presente"],
    "p3": ["no presenten"]
  },
  "In Pres Pro": {
    "s1": ["estoy presentando"],
    "s2": ["estás presentando"],
    "s3": ["está presentando"],
    "p1": ["estamos presentando"],
    "p2": ["estáis presentando"],
    "p3": ["están presentando"]
  }
}, {
  "inf": "esperar",
  "inf_eng": "to hope",
  "In Pres": {
    "s1": ["espero"],
    "s2": ["esperas"],
    "s3": ["espera"],
    "p1": ["esperamos"],
    "p2": ["esperáis"],
    "p3": ["esperan"]
  },
  "In Fut": {
    "s1": ["esperaré"],
    "s2": ["esperarás"],
    "s3": ["esperará"],
    "p1": ["esperaremos"],
    "p2": ["esperaréis"],
    "p3": ["esperarán"]
  },
  "In Imp": {
    "s1": ["esperaba"],
    "s2": ["esperabas"],
    "s3": ["esperaba"],
    "p1": ["esperábamos"],
    "p2": ["esperabais"],
    "p3": ["esperaban"]
  },
  "In Pret": {
    "s1": ["esperé"],
    "s2": ["esperaste"],
    "s3": ["esperó"],
    "p1": ["esperamos"],
    "p2": ["esperasteis"],
    "p3": ["esperaron"]
  },
  "In Cond": {
    "s1": ["esperaría"],
    "s2": ["esperarías"],
    "s3": ["esperaría"],
    "p1": ["esperaríamos"],
    "p2": ["esperaríais"],
    "p3": ["esperarían"]
  },
  "In Pres Per": {
    "s1": ["he esperado"],
    "s2": ["has esperado"],
    "s3": ["ha esperado"],
    "p1": ["hemos esperado"],
    "p2": ["habéis esperado"],
    "p3": ["han esperado"]
  },
  "In Fut Per": {
    "s1": ["habré esperado"],
    "s2": ["habrás esperado"],
    "s3": ["habrá esperado"],
    "p1": ["habremos esperado"],
    "p2": ["habréis esperado"],
    "p3": ["habrán esperado"]
  },
  "In Pas Per": {
    "s1": ["había esperado"],
    "s2": ["habías esperado"],
    "s3": ["había esperado"],
    "p1": ["habíamos esperado"],
    "p2": ["habíais esperado"],
    "p3": ["habían esperado"]
  },
  "In Cond Per": {
    "s1": ["habría esperado"],
    "s2": ["habrías esperado"],
    "s3": ["habría esperado"],
    "p1": ["habríamos esperado"],
    "p2": ["habríais esperado"],
    "p3": ["habrían esperado"]
  },
  "Sub Pres": {
    "s1": ["espere"],
    "s2": ["esperes"],
    "s3": ["espere"],
    "p1": ["esperemos"],
    "p2": ["esperéis"],
    "p3": ["esperen"]
  },
  "Imp Aff Pres": {
    "s1": [""],
    "s2": ["espera"],
    "s3": ["esperad"],
    "p1": [""],
    "p2": ["espere"],
    "p3": ["esperen"]
  },
  "Imp Neg Pres": {
    "s1": [""],
    "s2": ["no esperes"],
    "s3": ["no esperéis"],
    "p1": [""],
    "p2": ["no espere"],
    "p3": ["no esperen"]
  },
  "In Pres Pro": {
    "s1": ["estoy esperando"],
    "s2": ["estás esperando"],
    "s3": ["está esperando"],
    "p1": ["estamos esperando"],
    "p2": ["estáis esperando"],
    "p3": ["están esperando"]
  }
}];

export default VERB_DATA;