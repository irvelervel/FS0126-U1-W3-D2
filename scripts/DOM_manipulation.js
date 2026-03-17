// 2) DOM MANIPULATION
// Dopo aver capito quali sono le tecniche principali per recuperare elementi nella pagina,
// vediamo ora come è possibile interagire con loro per cambiarne i contenuti, i connotati visivi etc.

// - come modificare il contenuto testuale di un elemento
// devo lavorare sulla proprietà "innerText" dell'elemento recuperato (in alt. esiste anche "textContent")
// es.
// recupero l'h1 della pagina
const h1 = document.getElementById('main-title')
console.log('H1', h1)
// ne cambio il contenuto!
console.log(h1.innerText)
h1.innerText = 'Questo è il nuovo titolo!' // sovrascrivendo la proprietà innerText cambio il contenuto!

// recupero il bottone del form, ho dato al tag form un id "newsletter-form"
const formButton = document.querySelector('#newsletter-form button') // prendo il button dentro id="newsletter-form"
console.log("l'ho trovato?", formButton)
// ora cambio il contenuto testuale del bottone
formButton.innerText = 'CLICCAMI!'

// diciamo in generale che con innerText possiamo modificare tutto il contenuto testuale che intercorre
// tra i tag di apertura e chiusura -> <button>TESTO</button>    <p>CONTENUTO</p>   ecc.

// - come modificare il contenuto HTML di un elemento
const linksList = document.getElementById('nav-links') // il tag <ul>
console.log('LISTA DEI LINK', linksList)
// potete interagire con il contenuto HTML di un elemento con la proprietà "innerHTML"
console.log(linksList.innerHTML) // leggo il suo valore attuale
linksList.innerHTML = '<li>ELEMENTO GENERATO DA JS!</li>'

linksList.innerHTML = `
    <li>
        <a href="#">PRIMO</a>
    </li>
    <li>
        <a href="#">SECONDO</a>
    </li>
    <li>
        <a href="#">TERZO</a>
    </li>
`

// e se invece di sostituirla interamente, io volessi AGGIUNGERE un elemento <li>?

linksList.innerHTML = linksList.innerHTML + '<li><a href="#">QUARTO</a></li>'
// linksList.innerHTML += "<li>QUARTO</li>"

// - assegnare/rimuovere una CLASSE CSS ad un elemento
// recupero un riferimento a "title-p"
const par = document.getElementById('title-p')
// le classi CSS di questo elemento sono a disposizione nella sua proprietà "classList"
par.classList.add('text-red') // par è diventato -> <p class="text-red">EPICODE IL BLOG DEI DEVELOPERS</p>
par.classList.add('text-start') // aggiunge classe text-start
par.classList.remove('text-start') // rimuove classe text-start
par.classList.remove()
// poi ci sono toggle, contains, etc.

// - assegnare/rimuovere stili inline agli elementi
par.style.border = '3px solid black'
par.style.fontSize = '1.5em'
par.style.backgroundColor = 'yellow'
