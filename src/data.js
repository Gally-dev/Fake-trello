export const data = [
  {
    id: 1,
    title: "BOARD GAMES",
    cards: [
      {
        id: 1,
        text: "Lost cities",
        image:{
          filename:'lost.png',
          alt:'kaiju',
        }
      },
      {
        id: 2,
        text: "Sumonner wars",
        labels: ["yellow", "green", "red", "blue", "purple"],
      },
      {
        id: 3,
        text: "Star realms",
      },
    ],
  },
  {
    id: 2,
    title: "TOKYO",
    cards: [
      { 
        id: 1, 
        text: "Yakuza attacks" 
      },
      { 
        id: 2, 
        text:"Kaiju brain smells",
        labels:['gold'],
        tags:['very', 'good', 'boy'],
        image:{
          filename:'kaiju.png',
          alt:'kaiju',
        }
       },
      { 
        id: 3, 
        text: "Bakugan: pyros tornado",
        labels:['magenta','lightgreen'],
        tags:['monster', '#bigHead']
       },
    ],
  },
   {
     id: 3,
     title: 'BRAIN THOUGHTS',
     cards:[
         {id: 1, text:"Som este tu?"},
         {id: 2, text:"Hovorime o tom vsetci"},
         {id: 3, text:"Peter Marcin este moderuje?"},
         {id: 4, text:"Dufam ze nie."},
     ],
   },
];
