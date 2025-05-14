const regionalSpellings = {
words: {
airplane: {'en-US': 'airplane', 'en-GB': 'aeroplane', 'en-AU': 'aeroplane', 'en-CA': 'airplane'},
aluminum: {'en-US': 'aluminum', 'en-GB': 'aluminium', 'en-AU': 'aluminium', 'en-CA': 'aluminium'},
analyze: {'en-US': 'analyze', 'en-GB': 'analyse', 'en-AU': 'analyse', 'en-CA': 'analyze'},
apologize: {'en-US': 'apologize', 'en-GB': 'apologise', 'en-AU': 'apologise', 'en-CA': 'apologize'},
armor: {'en-US': 'armor', 'en-GB': 'armour', 'en-AU': 'armour', 'en-CA': 'armour'},
behavior: {'en-US': 'behavior', 'en-GB': 'behaviour', 'en-AU': 'behaviour', 'en-CA': 'behaviour'},
canceled: {'en-US': 'canceled', 'en-GB': 'cancelled', 'en-AU': 'cancelled', 'en-CA': 'cancelled'},
center: {'en-US': 'center', 'en-GB': 'centre', 'en-AU': 'centre', 'en-CA': 'centre'},
color: {'en-US': 'color', 'en-GB': 'colour', 'en-AU': 'colour', 'en-CA': 'colour'},
defense: {'en-US': 'defense', 'en-GB': 'defence', 'en-AU': 'defence', 'en-CA': 'defence'},
dialog: {'en-US': 'dialog', 'en-GB': 'dialogue', 'en-AU': 'dialogue', 'en-CA': 'dialogue'},
draft: {'en-US': 'draft', 'en-GB': 'draught', 'en-AU': 'draught', 'en-CA': 'draft'},
enroll: {'en-US': 'enroll', 'en-GB': 'enrol', 'en-AU': 'enrol', 'en-CA': 'enrol'},
fiber: {'en-US': 'fiber', 'en-GB': 'fibre', 'en-AU': 'fibre', 'en-CA': 'fibre'},
gray: {'en-US': 'gray', 'en-GB': 'grey', 'en-AU': 'grey', 'en-CA': 'grey'},
honor: {'en-US': 'honor', 'en-GB': 'honour', 'en-AU': 'honour', 'en-CA': 'honour'},
jewelry: {'en-US': 'jewelry', 'en-GB': 'jewellery', 'en-AU': 'jewellery', 'en-CA': 'jewellery'},
labeled: {'en-US': 'labeled', 'en-GB': 'labelled', 'en-AU': 'labelled', 'en-CA': 'labelled'},
labor: {'en-US': 'labor', 'en-GB': 'labour', 'en-AU': 'labour', 'en-CA': 'labour'},
license: {'en-US': 'license', 'en-GB': 'licence', 'en-AU': 'licence', 'en-CA': 'licence'},
liter: {'en-US': 'liter', 'en-GB': 'litre', 'en-AU': 'litre', 'en-CA': 'litre'},
maneuver: {'en-US': 'maneuver', 'en-GB': 'manoeuvre', 'en-AU': 'manoeuvre', 'en-CA': 'maneuver'},
marvelous: {'en-US': 'marvelous', 'en-GB': 'marvellous', 'en-AU': 'marvellous', 'en-CA': 'marvellous'},
meter: {'en-US': 'meter', 'en-GB': 'metre', 'en-AU': 'metre', 'en-CA': 'metre'},
mold: {'en-US': 'mold', 'en-GB': 'mould', 'en-AU': 'mould', 'en-CA': 'mould'},
neighbor: {'en-US': 'neighbor', 'en-GB': 'neighbour', 'en-AU': 'neighbour', 'en-CA': 'neighbour'},
offense: {'en-US': 'offense', 'en-GB': 'offence', 'en-AU': 'offence', 'en-CA': 'offence'},
organize: {'en-US': 'organize', 'en-GB': 'organise', 'en-AU': 'organise', 'en-CA': 'organize'},
pajamas: {'en-US': 'pajamas', 'en-GB': 'pyjamas', 'en-AU': 'pyjamas', 'en-CA': 'pyjamas'},
plow: {'en-US': 'plow', 'en-GB': 'plough', 'en-AU': 'plough', 'en-CA': 'plough'},
practice: {'en-US': 'practice', 'en-GB': 'practise', 'en-AU': 'practise', 'en-CA': 'practice'},
program: {'en-US': 'program', 'en-GB': 'programme', 'en-AU': 'program', 'en-CA': 'program'},
realize: {'en-US': 'realize', 'en-GB': 'realise', 'en-AU': 'realise', 'en-CA': 'realize'},
rumor: {'en-US': 'rumor', 'en-GB': 'rumour', 'en-AU': 'rumour', 'en-CA': 'rumour'},
saber: {'en-US': 'saber', 'en-GB': 'sabre', 'en-AU': 'sabre', 'en-CA': 'sabre'},
theater: {'en-US': 'theater', 'en-GB': 'theatre', 'en-AU': 'theatre', 'en-CA': 'theatre'},
tire: {'en-US': 'tire', 'en-GB': 'tyre', 'en-AU': 'tyre', 'en-CA': 'tire'},
traveled: {'en-US': 'traveled', 'en-GB': 'travelled', 'en-AU': 'travelled', 'en-CA': 'travelled'},
traveler: {'en-US': 'traveler', 'en-GB': 'traveller', 'en-AU': 'traveller', 'en-CA': 'traveller'},
valor: {'en-US': 'valor', 'en-GB': 'valour', 'en-AU': 'valour', 'en-CA': 'valour'},
vapor: {'en-US': 'vapor', 'en-GB': 'vapour', 'en-AU': 'vapour', 'en-CA': 'vapour'},
vise: {'en-US': 'vise', 'en-GB': 'vice', 'en-AU': 'vice', 'en-CA': 'vise'},
whiskey: {'en-US': 'whiskey', 'en-GB': 'whisky', 'en-AU': 'whisky', 'en-CA': 'whisky'}
},

getSpelling: function(word, locale) {
if (this.words[word] && this.words[word][locale]) {
return this.words[word][locale];
}
return word;
},

getAllVariations: function(word) {
return this.words[word] || {};
},

getIncorrectSpellings: function(locale) {
const incorrect = {};
for (const [word, variations] of Object.entries(this.words)) {
const correct = variations[locale];
for (const [loc, spelling] of Object.entries(variations)) {
if (loc !== locale && spelling !== correct) {
if (!incorrect[spelling]) {
incorrect[spelling] = correct;
}
}
}
}
return incorrect;
}

};

// Optional: Export for Node.js environment if needed

if (typeof module !== 'undefined' && module.exports) {
module.exports = regionalSpellings;
}
