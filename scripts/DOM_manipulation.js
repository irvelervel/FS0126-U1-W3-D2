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

// - cambiare attributi agli elementi
// prendiamo il logo di epicode in alto
const logoImg = document.getElementById('epicode-logo')
// come cambiare il valore dell'attributo src?
// con .getAttribute(nomeAttributo) -> LEGGETE
logoImg.getAttribute('src') // "./assets/img/logo.svg"
// con .setAttribute(nomeAttributo, valore) -> MODIFICATE
logoImg.setAttribute('src', 'https://placebear.com/200/200')

// cambio l'href al primo link della ul dei links
const firstAnchor = document.querySelector('#nav-links > li:nth-of-type(1) > a')
firstAnchor.setAttribute('href', 'https://www.google.it')

// creiamo ora degli elementi DA ZERO!
// per creare un elemento da zero avrete bisogno di un metodo chiamato createElement()
const newImg = document.createElement('img') // <img /> --> 1)
// aggiungo ora all'immagine una src
newImg.setAttribute('src', 'https://placedog.net/300/300') // --> 2)
newImg.setAttribute('alt', 'Doggo picture') // --> 2)
// <img src="https://placedog.net/300/300" alt="Doggo picture" />
// l'elemento esiste ed è valido, ma NON è stato ancora inserito nella pagina da nessuna parte!
// per inserire un elemento nella pagina, ci sono diversi modi; quello più semplice è APPENDERLO
// ad un contenitore!
// recuperiamo il parent element -> il tag <main>
const main = document.querySelector('main') // <main>...</main>
main.appendChild(newImg) // appendo alla fine del <main> la mia nuova immagine creata da 0 --> 3)

// 1) prima si crea un elemento VUOTO con createElement() -> un <p></p> una <img />
// 2) ora si riempie l'elemento vuoto con contenuti, testo, attributi etc.
// 3) ora l'elemento esiste ma solo "in memoria", quindi dobbiamo appenderlo da qualche parte! -> appendChild()

// creiamo un paragrafo da zero, ci mettiamo dentro un po' di testo, assegniamo una classe CSS e lo
// inseriamo nel documento

// 1)
const newP = document.createElement('p') // <p></p>
// 2)
// inserisco del contenuto
newP.innerText = `Lorem ipsum Lorem ipsum Lorem ipsum Lorem
ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum`
// aggiungo una classe
newP.classList.add('big-text')
// risultato -> <p class="big-text">Lorem ipsum ......</p>

// 3)
// prendo un riferimento del contenitore in cui lo voglio inserire
const parent = document.getElementById('form-section')
// ci appendo dentro il mio nuovo paragrafo
parent.appendChild(newP)

// ESERCIZIO
// a) metti in corsivo tutti i link nella prima lista non ordinata (menu nav)
// #nav-links li
const allTheLinks = document.querySelectorAll('#nav-links li') // [li, li, li, li]
console.log(allTheLinks)

// metterli in corsivo...?
// allTheLinks.style.fontStyle = 'italic' <-- SBAGLIATO! stai dando un attributo CSS non agli elementi,
// ma all'array!

// CICLO l'ARRAY
for (let i = 0; i < allTheLinks.length; i++) {
  // APPLICO LA PROPRIETÀ A allTheLinks[i], cioè l'elemento dell'array
  allTheLinks[i].style.fontStyle = 'italic'
}

// scrivi una funzione che prenda tutti gli h2 della pagina e li sottolinei
const underlineAllh2 = function () {
  // 1) recupero tutti gli h2
  const tuttiGlih2 = document.getElementsByTagName('h2')
  // CICLO L'ARRAY DEGLI h2
  for (let i = 0; i < tuttiGlih2.length; i++) {
    tuttiGlih2[i].style.textDecoration = 'underline'
  }
}
underlineAllh2()
