console.log("hi");

const container = document.querySelector('#target-container');
const row = document.createElement('div');
row.className = 'row'; 
container.appendChild(row);
const numRevs = 9;
const cardArray  = Array.from({ length: numRevs });
const revs = [
    {name: "Che Guevara", dates: '1928-1967', quote: '"Every day People straighten up the hair, why not the heart?"'},
    {name: "Emiliano Zapata", dates: '1879-1919', quote: '"It is better to die on your feet than to live on your knees."'},
    {name: "Fritz Fanon", dates: '1879-1919', quote: ''},
    {name: "Ghandi", dates: '1879-1919', quote: ''},
    {name: "James Connoly", dates: '1879-1919', quote:'' },
    {name: "Leon Trotsky", dates: '1879-1919', quote: ''},
    {name: "Mother Jones", dates: '1879-1919', quote: ''},
    {name: "Rosa Luxembourg", dates: '1879-1919', quote: ''},
    {name: "Toussaint L'ouverture", dates: '1879-1919', quote: ''},
]

cardArray.forEach((card, i)=>{
    card = makeEmptyCard(i);
    renderCard(card, revs[i]);
})

    
    
   



function makeEmptyCard(i){
    const card = {
        cardDiv : makeEl('div', 'card mt-4'),
        img: makeEl('img', 'card-img-top'),
        imgSrc: `img-use/${i}.jpg`,
        cardBodyDiv: makeEl('div', 'card-body'),
        title: makeEl('h4', 'card-title text-center text-white'),
        p1: makeEl('p', 'card-text text-white text-center dates'),
        // p2: makeEl('p', 'card-text d-inline text-white date'),
        p3: makeEl('p', 'card-text mt-3 text-white quote')
    }
    return card
}


function makeEl(el, classNm){
    const thisEl = document.createElement(el);
    thisEl.className = classNm;  
    return thisEl
}



function renderCard(card, rev){
    row.appendChild(card.cardDiv);
    card.img.src = card.imgSrc;
    card.cardDiv.appendChild(card.img);
    card.cardDiv.appendChild(card.cardBodyDiv);
    card.title.innerText = `${rev.name}`
    card.p1.innerText = `${rev.dates}`;
    // card.p2.innerText = `${rev.died}`;
    card.p3.innerText = `${rev.quote}`;
    card.cardBodyDiv.appendChild(card.title);
    card.cardBodyDiv.appendChild(card.p1);
    // card.cardBodyDiv.appendChild(card.p2);
    card.cardBodyDiv.appendChild(card.p3);



    // nameOutput.style.fontSize = '60px';
    // nameOutput.style.color = 'white'
    // container.appendChild(newDiv);
    // newDiv.appendChild(nameOutput);
    // console.log(container);''
}


// function makeInputsObject(...args){
//     const obj = {
//         input1 : `name: ${args[0]}`,
//         input2 : `chip loving: ${args[1]}`,
//         input3: `vision: ${args[2]}`
//     }
//     return obj 
// }

// function printName(...args){
//     console.log(args[0]);
    
 
//     const newDiv = document.createElement('div');
//     newDiv.className = 'row mt-4 ml-1';
//     const nameOutput = document.createElement('p');
//     nameOutput.innerText = `welcome to the revolution, ${args[0]}`;

// }
    // const cardDiv = document.createElement('div');
    // cardDiv.className = 'card mt-4';
    // const img = document.createElement('img');
    // img.className = 'card-img-top';
    // img.src = 'img/ghandi.jpg';
    // const cardBodyDiv = document.createElement('div');
    // cardBodyDiv.className = 'card-body';
    // const title = document.createElement('h4');
    // title.className = 'card-title';