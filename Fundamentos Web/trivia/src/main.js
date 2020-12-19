let questionDisney = [
    [
        "¿Que causa la muerte de mufasa? :(",
        "estampida de nus",
        "las hienas",
        "estampida de bisontes",
        "estampida de antilopes",
        1,
        "../img/Disney/mufasa.gif"
    ],
    [
        "princesa disney que no termina emparejada al final de la pelicula",
        "Pocahontas",
        "Mulan",
        "Rapunzel",
        "Tiana",
        1,
        "../img/Disney/pareja.jpg"
    ],
    [
        "Primer Largometraje de Disney",
        "Pinocho",
        "Dumbo",
        "Fantasia",
        "Blancanieves y los 7 enanitos",
        4,
        "../img/Disney/cortometraje.gif"
    ],
    [
        "¿cual de estos no es el nombre de un enanito?",
        "grunon",
        "Dormilon",
        "Feliz",
        "travieso",
        4,
        "../img/Disney/enanitos.jpg"

    ],
    [
        "EL genio de aladdin no podia matar a nadie, resusitar a los muertos ni...",
        "Hacer a alguien rey de Agrabah",
        "Hacer que alguien se enamore de otro Alguien",
        "hacer que alguien viaje al futuro",
        "hacer que alguien se olvide de otro alguien.",
        2,
        "../img/Disney/genio.gif"
    ],
    [
        "A que colores cambian todo el rato Flora y Primavera el vestido de aurora en la Bella Durmiente?",
        "rosa y amarillo",
        "azul y verde",
        "rosa y violeta",
        "rosa y azul--",
        4,
        "../img/Disney/florayprimavera.gif"
    ],
    [
        "¿Como muere la madre de bambi?",
        "En un incendio",
        "Por causas naturales",
        "Por el disparo de un cazador",
        "No se sabe",
        3,
        "../img/Disney/bambi.jpg"
    ],
    [
        "¿Cual es el premio que recibiria el ganador del torneo de tiro con arco de Robin Hood?",
        "Un beso de lady marian y una flecha de oro",
        "Una bolsa de monedas de oro",
        "La iglesia del Fraile Tuck",
        "La torre mas alta del Castillo del rey ricardo",
        1,
        "../img/Disney/robinHoobe.jpg"
    ],
    [
        "¿Por que Hades quiere matar a Hercules cuando es un bebe?",
        "Porque las moiras le dicen que este lo vencera a los 18 años",
        "Porque quiere vengarse de su padre Zeus",
        "Porque los titanes se lo piden",
        "No quiere matarle, solo convertirlo en mortal",
        1,
        "../img/Disney/Hercules.gif"
    ],
    [
        "A que se dedica Kristoff en Frozen",
        "Es cuidador de Alces",
        "Es el lenador de Arendelle",
        "Es vendedor de hielo",
        "Fabrica trineos",
        3,
        "../img/Disney/Kristoff.jpg"
    ],
    [
        " 'Yo te quiero enseñar un fantastico mundo, ven princesa y deja a tu corazon sonar...' ",
        " 'Yo te puedo mostras cosas maravillosas. Ven princesa y dejate llevar a un mundo ideal' ",
        " 'Fabulosa vision, sentimiento divino, voy volando contigo hacia un  nuevo amanecer' ",
        " 'un mundo ideal, un mundo en el que tu y yo podamos decidir como vivir' ",
        " 'un mundo ideal, mira bien lo que hay, alli mil cosas voy a ver' ",
        1,
        "../img/Disney/aladdin.gif"
    ],
    [
        "Que pelicula salvo de la quiebra a Disney?",
        "La dama y el vagabundo",
        "Los 101 dalmatas",
        "BlancaNieves",
        "Toy Story",
        2,
        "../img/Disney/disney.jpg"
    ],
];

let questionMitologia = [
    [
        "¿Cuál de estas divinidades no es hermana de las otras tres?",
        "Hermes",
        "Poseidon",
        "Atenea",
        "Artemisa",
        2,
        "../img/Mitologia/culebron-1.gif"
    ],
    [
        "Hefesto es el dios de :",
        "El comercio",
        "Las pastores y rebanos",
        "El fuego y la forja",
        "El vino",
        3,
        "../img/Mitologia/culebron.gif"
    ],
    [
        "Cuantas hermanas gorgonas habian: ",
        "Tres",
        "Dos",
        "Cuatro",
        "Seis",
        1,
        "../img/Mitologia/culebron-1.gif"
    ],
    [
        "Apolo es el dios de:",
        "Las artes",
        "La cosecha",
        "La violencia",
        "La guerra",
        2,
        "../img/Mitologia/culebron.gif"
    ],
    [
        "Quien le dio la caja a pandora?",
        "Zeus",
        "Poseidon",
        "Dionisio",
        "Hades",
        1,
        "../img/Mitologia/culebron-1.gif"
    ],
    [
        "Quien mato a Aquiles?",
        "Paris",
        "Menelao",
        "Hades",
        "Hector",
        1,
        "../img/Mitologia/culebron-1.gif"
    ],
    [
        "Quien mato a la bestia conocida como Minotauro?",
        "Heracles",
        "Perseo",
        "Teseo",
        "Aquiles",
        3,
        "../img/Mitologia/culebron-1.gif"
    ],
    [
        "Titan que le regalo el fuego a los hombres",
        "Prometeo",
        "Helios",
        "Hiperion",
        "Atlas",
        1,
        "../img/Mitologia/culebron-1.gif"
    ],
    [
        "Nike es diosa de: ",
        "Suerte",
        "Victoria",
        "Guerra",
        "Venganza",
        2,
        "../img/Mitologia/culebron-1.gif"
    ],
    [
        "Como se llamaba el barquero del inframundo?",
        "Caronte",
        "Cal",
        "Cerbero",
        "Ciclope",
        1,
        "../img/Mitologia/culebron.gif"
    ],
    [
        "Nombre romano de Hermes:",
        "Marte",
        "Pluton",
        "Baco",
        "Mercurio",
        4,
        "../img/Mitologia/culebron-1.gif"
    ],
];

let points = 0,
    disney = "disney",
    mito = "mito",
    currentQuestion = 0,
    questionTimer,
    timeForQuestion = 60, // segundos
    timeLeftForQuestion;;

document.querySelector('#bttnhome').addEventListener("click", () => {
    const name = document.querySelector('#nickname').value;
    document.querySelector('#user').innerHTML = name;
    if (name === "") {
        document.querySelector('#error-user').classList.remove('d-none');
    } else {
        document.querySelector('#part-login').classList.add('d-none');
        document.querySelector('#part-cat').classList.remove('d-none');
    }
});

document.querySelector('#bttnDisney').addEventListener('click', () => {
    document.querySelector('.start').classList.add('d-none');
    document.querySelector('.play').classList.remove('d-none');
    generarCard(questionDisney, "disney");
});

document.querySelector('#bttnMitologia').addEventListener('click', () => {
    document.querySelector('.start').classList.add('d-none');
    document.querySelector('.play').classList.remove('d-none');
    generarCard(questionMitologia, "mito");
});
/**
 * 
 * @param {Array} arreglo con la info de una pregunta en especifico 
 * @param {*} indice de la pregunta en el arreglo de todas las preguntas
 */
const CardMitologia = ({ question, index, a, b, c, d, img }) => {
    let wrapper = document.createElement("div");
    const cardContent = `
    <div class="q${index}">
        <b class="questions">
        ${index}. ${question}
        </b>
        <br/>
        <p class="visualPart">
        <img src="${img}" class="img" /><b class="timer${index} timer"></b>
        <p>
        <ul class='options'>
            <li > 
                <label for='q1' >
                <input type='radio' name=${index} value='1' id='q1' onclick="optionSelected(mito, 1, this)" />
                1.${a}
                </label>
            </li>
            <li >
                <label for='q2' >
                <input type='radio' name=${index} value='2' id='q2' onclick="optionSelected(mito, 2, this)" /> 
                2.${b}
                </label>
            </li> 
            <li > 
                <label for='q3' >
                <input type='radio' name=${index} value='3' id='q3' onclick="optionSelected(mito, 3, this)" /> 
                3.${c}
                </label> 
            </li> 
            <li > 
                <label for='q4' >
                <input type='radio' name=${index} value='4' id='q4' onclick="optionSelected(mito, 4, this)" />
                4.${d}
                </label> 
            </li> 
        </ul> 
    </div>
 `;

    wrapper.innerHTML = cardContent;
    return wrapper;
}
const CardDisney = ({ question, index, a, b, c, d, img }) => {
    let wrapper = document.createElement("div");
    const cardContent = `
    <div class="q${index}">
        <b class="questions">
        ${index}. ${question}
        </b>
        <br/>
        <p class="visualPart">
        <img src="${img}" class="img" /><b class="timer${index} timer"></b>
        <p>
        <ul class='options'>
            <li > 
                <label for='q1' >
                <input type='radio' name=${index} value='1' id='q1' onclick="optionSelected(disney, 1, this)" />
                1.${a}
                </label>
            </li>
            <li >
                <label for='q2' >
                <input type='radio' name=${index} value='2' id='q2' onclick="optionSelected(disney, 2, this)" /> 
                2.${b}
                </label>
            </li> 
            <li > 
                <label for='q3' >
                <input type='radio' name=${index} value='3' id='q3' onclick="optionSelected(disney, 3, this)" /> 
                3.${c}
                </label> 
            </li> 
            <li > 
                <label for='q4' >
                <input type='radio' name=${index} value='4' id='q4' onclick="optionSelected(disney, 4, this)" />
                4.${d}
                </label> 
            </li> 
        </ul> 
    </div>
 `;

    wrapper.innerHTML = cardContent;
    return wrapper;
}
const generarCard = (array, opcion) => {
    let dest = document.querySelector(".play");
    let html;
    let q = array[currentQuestion];
    if (opcion == "disney") {
        html = CardDisney({
            question: q[0],
            index: currentQuestion + 1,
            a: q[1],
            b: q[2],
            c: q[3],
            d: q[4],
            img: q[6]
        });
    } else {
        html = CardMitologia({
            question: q[0],
            index: currentQuestion + 1,
            a: q[1],
            b: q[2],
            c: q[3],
            d: q[4],
            img: q[6]
        });
    }
    dest.appendChild(html); //agregar como hijo

    setupQuestionTimer();
}
function optionSelected(opcion, selected, bttn) {
    let correct;
    let questions;

    if (opcion == "disney") {
        correct = questionDisney[currentQuestion][5];
        questions = questionDisney;
    }
    else {
        correct = questionMitologia[currentQuestion][5];
        questions = questionMitologia;
    }
    console.log('current: ' + currentQuestion + "kha " + correct
        + " selected:" + selected + "bttn: " + bttn);
    if (selected == correct) {
        points += 1;
        bttn.parentElement.classList.add('right');
        let sonido = document.createElement("iframe");
        sonido.setAttribute("src", "../sonido/oki.mp3");
        document.body.appendChild(sonido);
    } else {
        bttn.parentElement.classList.add('wrong');
        let sonido = document.createElement("iframe");
        sonido.setAttribute("src", "../sonido/bad.mp3");
        document.body.appendChild(sonido);
    }
    
    if (currentQuestion == questions.length - 1) {
        clearTimeout(questionTimer);
        setTimeout(function () {
            if (points > 7) {
                return finish({
                    txt: "wow, eres todo un experto",
                    title: "Increibleeee",
                    total: questions.length,
                    img: "../img/winner1.gif"
                });
            }
            else if (points > 5) {
                return finish({
                    txt: "casi casi te sabes todo wow",
                    title: "BIEN HECHO",
                    total: questions.length,
                    img: "../img/winner2.gif"
                });
            } else {
                return finish({
                    txt: "bueno, que bueno que hay salud",
                    title: "tas'bien?",
                    total: questions.length,
                    img: "../img/loser.gif"
                });
            }
        }, 3000);
    }

    setTimeout(function () {
        NextQuestion(opcion);
    }, 3000);

}
function NextQuestion(opcion) {
    currentQuestion += 1;
    document.querySelector(`.q${currentQuestion}`).classList.add('d-none');
    if (opcion == "disney") {
        generarCard(questionDisney, opcion);
    }
    else {
        generarCard(questionMitologia, opcion);
    }
}

function setupQuestionTimer() {
    if (currentQuestion > 1) {
        clearTimeout(questionTimer);
    }
    timeLeftForQuestion = timeForQuestion;

    // Cada 1 segundo, nuestro temporizador llamará a la función countdownTick(). 
    questionTimer = setTimeout(countdownTick, 1000);
}
// La función countdownTick() se ejecuta cada un segundo, y actualiza el tiempo restante para responder en la pantalla del jugador.
function countdownTick() {
    timeLeftForQuestion -= 1;
    updateTime();
    if (timeLeftForQuestion == 0) {
        return finish({
            txt: "tan rapido como una tortuga, ups",
            title: "se acabo el tiempo",
            total: 0,
            img: "../img/timeOut.gif"
        });
    }
    questionTimer = setTimeout(countdownTick, 1000);
}
function updateTime() {
    document.querySelector(`.timer${currentQuestion + 1}`).innerText = timeLeftForQuestion;
}
function finish({ txt, title, img, total }) {
    let wrapper = document.createElement("div");
    const cardContent = `
        <h1 class="ftitle">${title}</h1>
        <b class="fpoint">${points}/${total}</b>
        <img src="${img}" class="fimg"/>
        <br/>
        <b class="ftxt">${txt}</b>
    `;
    wrapper.innerHTML = cardContent;
    let dest = document.querySelector(".finish");
    dest.appendChild(wrapper);
    document.querySelector('.play').classList.add('d-none');
    document.querySelector('.finish').classList.remove('d-none');
}