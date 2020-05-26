const container = document.querySelector('#target-container');
const form = document.querySelector("#myForm");
form.addEventListener('submit', validateForm);


function validateForm(e) {
    e.preventDefault();


    const fields = ["name", "chips", "vision"];
    const values = [];

    for (let i = 0; i < fields.length; i++) {
      fieldname = fields[i];
      let value = document.forms["myForm"][fieldname].value;
        switch(i) {
            case 0: 
                
                if ( value === "") {
            
                  alert(fieldname + " not valid, please enter a name");
                  return false;
                } else {
                    values[i] = value;
                }
                break;
            case 1 : 
                
                if (isNaN(value) || value < 1 || value > 10) {
                    alert(fieldname + " not valid, please enter a number from 1 to 10");
                    return false;
                  } else {
                    values[i] = value;
                  }
                  break;
            case 2 :
                
                if (isNaN(value) || value < 1 || value > 100) {
                    alert(fieldname + " not valid, please enter a number from 1 to 100");
                    return false;
                  } else {
                    values[i] = value;
                  }
                 break; 
        } 
         
    }
    container.removeChild(form);
    const card = makeEmptyCard();
    const inputs = makeInputsObject(...values);
    renderCard(card, inputs);
    return true;
}


https://drive.google.com/file/d/1Vkyg3z0hnUHzVRNlEV07GucyZVM037WB/view?usp=sharing



function makeEmptyCard(){
    const card = {
        cardDiv : makeEl('div', 'card mt-4  card-horizontal'),
        img: makeEl('img', 'card-img-top'),
        imgSrc: 'https://drive.google.com/thumbnail?id=1Vkyg3z0hnUHzVRNlEV07GucyZVM037WB',
        cardBodyDiv: makeEl('div', 'card-body'),
        title: makeEl('h4', 'card-title'),
        p1: makeEl('p', 'card-text'),
        p2: makeEl('p', 'card-text'),
        p3: makeEl('p', 'card-text')
    }
    return card
}


function makeEl(el, classNm){
    const thisEl = document.createElement(el);
    thisEl.className = classNm;  
    return thisEl
}

function makeInputsObject(...args){
    const obj = {
        input1 : `name: ${args[0]}`,
        input2 : `chips loving: ${args[1]}`,
        input3: `vision: ${args[2]}`
    }
    return obj 
}

function renderCard(card, inputs){
    console.log(card);
    console.log(inputs);
    container.appendChild(card.cardDiv);
    card.img.src = card.imgSrc;
    card.cardDiv.appendChild(card.img);
    card.cardDiv.appendChild(card.cardBodyDiv);
    card.title.innerText = 'welcome to the revolution!';
    card.p1.innerText = inputs.input1;
    card.p2.innerText = inputs.input2;
    card.p3.innerText = inputs.input3;
    card.cardBodyDiv.appendChild(card.title);
    card.cardBodyDiv.appendChild(card.p1);
    card.cardBodyDiv.appendChild(card.p2);
    card.cardBodyDiv.appendChild(card.p3);



    // nameOutput.style.fontSize = '60px';
    // nameOutput.style.color = 'white'
    // container.appendChild(newDiv);
    // newDiv.appendChild(nameOutput);
    // console.log(container);''
}




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