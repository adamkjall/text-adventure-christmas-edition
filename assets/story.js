export const story = {
  start: {
    message:
      ` Hej alla där ute! Det är jag som är tomten. Jag och nissarna höll på och arbetade för fullt i tomteverkstan inför julen när det plötsligt 
      hände något... Vår bästa fixar-nisse Lisa blev kidnappad! Kan ni snälla hjälpa mig?`,
    choices: [
      {
        text: "Ja vi hjälper till",
        next: "hjälp"
      },
      {
        text: "Nej vi har ingen lust",
        next: "nej"
      },
    ]
  },
  hjälp: {
    message: "Tack för att ni vill hjälpa till! Den enda ledtråden vi har är att några nissar såg någon springa mot lagret...",
    choices: [
      {
        text: "Spring till lagret",
        next: "springa"
      },
      {
        text: "Ta släden till lagret",
        next: "släden"
      }
    ]
  },
  släden: {
    message: "ÅH NEJ! Släden är trasig! Tomten har varit slarvig och har inte skött om den... GAME OVER",
    choices: [
      {
        text: "Börja om",
        next: "start"
      }
    ]
  },
  springa: {
    message: "Det gick fort. Ni är redan framme vid lagret. Längst in i lagret, där det är mörkast och kallast finns en dörr... Vågar ni öppna den?",
    choices: [
      {
        text: "Vi vågar",
        next: "sistadörren"
      },
      {
        text: "Nä vi vågar inte",
        next: "still"
      }
    ]
  },
  sistadörren: {
    message: "Ni öppnar dörren och där inne ser ni... LISA! Och kindnapparen! Kidnapparen tog ni fast och låste in. Hurra, ni klarade det! Julen är räddad!",
    choices: [
      {
        text: "Spela igen",
        next: "start"
      }
    ]
  },
  still: {
    message: "Ni letar och letar på alla andra ställen men nissen Lisa finns ingenstans... GAME OVER",
    choices: [
      {
        text: "Börja om",
        next: "start"
      }
    ]
  },
  nej: {
    message: `Nissarna och tomten arbetar på för fullt, utan nissen Lisa eftersom ni inte ville hjälpa till... Nissarna jobbar och jobbar.
    Utan Lisa hinner dom inte äta eller sova! Till slut svimmar en nisse!`,
    choices: [
      {
        text: "Vi ågrar oss, vi hjälper till",
        next: "ångrar"
      },
      {
        text: "Nä vi hjälper fortfarande inte till",
        next: "ejhjälp"
      }
    ]
  },
  ångrar: {
    message: `Tusen tack! Den enda ledtråden vi har är att några nissar såg någon springa mot lagret...
    Ni springer till lagret och letar överallt. Till slut hamnar ni längst in i lagret. Där det är mörkast och kallast finns en dörr... 
    Vågor ni öppna den?`,
    choices: [
      {
        text: "Vi vågar",
        next: "sistadörren"
      },
      {
        text: "Nä vi vågar inte",
        next: "still"
      }
    ]
  },
  ejhjälp: {
    message: `Tomten och nissarna sliter och sliter men dom orkar inte med allt arbete. Julen blir inställd... GAME OVER`,
    choices: [
      {
        text: "Spela igen",
        next: "start"
      }
    ]
  }
}
