// OGGI PARLIAMO DI DOM TRAVERSING E DOM MANIPULATION
// (attraversamento del DOM e manipolazione del DOM)
// il DOM è la rappresentazione a OGGETTI JS dei contenuti della pagina (titoli, p, ul, li, img, span etc.)

// Da oggi colleghiamo tutti i concetti "astratti" che abbiamo studiato in questi giorni (array, oggetti,
// cicli, funzioni etc.) a qualcosa di molto "materiale" come il documento web!

// Ma per quale motivo dovrebbe servirci JS nel presentare dei contenuti web? Per:
// - personalizzare i contenuti
// - rendere dinamiche date, messaggi etc.
// - fornire capacità di riconoscere l'utente (es. login)
// - mantenere un "guscio" statico e ri-creare dinamicamente delle sezioni "alla bisogna"

// Ottimo! Quindi, come faccio ad utilizzare JS per manipolare i contenuti HTML&CSS?
// Tramite un processo in 2 FASI:

// 1) DOM TRAVERSING -> attraversamento del DOM per la ricerca degli elementi con cui interagire
// 2) DOM MANIPULATION -> tecniche per alterare/eliminare/generare/modificare i contenuti

// ------------
// 1) DOM TRAVERSING (selezione degli elementi nella pagina in JS)
// vediamo da dove partire:
console.log(document)
// document è il documento WEB: il CUORE del DOM. Rappresenta la pagina caricata con questo foglio JS.
// A partire da questo macro-oggettone, noi utilizzeremo delle tecniche e dei metodi per attraversarlo
// e arrivare a selezionare quel titolo, quell'immagine, quell'elemento di quella lista etc.

// come selezioniamo gli elementi nel DOM?
// a) tramite l'ID di un elemento HTML
const title = document.getElementById('main-title')
console.log('TITLE PRESO CON GETELEMENTBYID', title)
const logo = document.getElementById('epicode-logo')
console.log('LOGO NELLA NAVBAR', logo)
const sbagliato = document.getElementById('non-esiste')
console.log('un elemento che non esiste', sbagliato)

// b) tramite la CLASSE degli elementi HTML
const specialElements = document.getElementsByClassName('special-element')
// getElementsByClassName torna una COLLEZIONE di elementi (come un array!)
console.log('SPECIAL ELEMENTS', specialElements)
// getElementsByClassName NON TORNA MAI UN RIFERIMENTO SINGOLO! torna TUTTI gli elementi
// dotati di quella classe sotto forma di "HTMLCollection" (una struttura molto simile ad un array
// dotata di indici/posizioni, ciclabile con i cicli for ma NON dotata di metodi avanzati come map,
// filter, reduce, forEach etc.)

const x = document.getElementsByClassName('table')
// OCCHIO! la x è un'ARRAY (HTMLCollection) con dentro UN OGGETTO (la tabella!)
// x non è la tabella, x è un ARRAY con dentro la tabella!
// vuoi la tabella? x[0] è la tabella!

const y = document.getElementsByClassName('xxxxxxxxxx')
// y è un ARRAY VUOTO, perchè la classe "xxxxxxxxxx" non esiste nella pagina

// le HTMLCollection sono delle strutture SIMILI agli array, ma non dei veri e propri array (mancano
// i metodi avanzati che abbiamo visto ieri); però potete se volete convertire una HTMLCollection in un
// vero e proprio array con lo SPREAD OPERATOR:

const xComeArray = [...x] // un nuovo "guscio" con dentro tutti gli elementi di x

// c) tramite il NOME del TAG!
const allTheParagraphs = document.getElementsByTagName('p')
console.log('TUTTI I PARAGRAFI', allTheParagraphs)

const allTheMains = document.getElementsByTagName('main') // tutti i tag <main> della pagina
// allTheMains NON È IL TAG MAIN!
// allTheMains[0] È IL TAG MAIN!
console.log('ARRAY DEI TAG MAIN DELLA PAGINA', allTheMains)

// getElementsByTagName torna una HTMLCollection di TUTTI gli elementi dotati di un determinato TAG
// tutti i p, div, li, header, main etc.
// fate SEMPRE attenzione a cosa è un ARRAY e cosa è un OGGETTO
const z = document.getElementsByTagName('stefano') // non esiste <stefano>
// z è un HTMLCollection vuota!

// d) UN elemento tramite un SELETTORE CSS
// questo serve quando l'elemento che volete recuperare non ha id, o si trova in una posizione scomoda:
// come selezioneremmo in CSS il secondo elemento della prima lista non ordinata? "nav ul li:nth-of-type(2)"
const secondLi = document.querySelector('nav ul li:nth-of-type(2)')
console.log('secondLi', secondLi)
// il metodo .querySelector() vi permette di riciclare tutte le vostre conoscenze dei selettori CSS
// per recuperare elementi nel DOM: inserite come stringa il selettore CSS (semplice o complicato che sia);
// se funziona in CSS, funzionerà anche in querySelector()
// e se ci sono PIÙ elementi che vengono colpiti da un selettore CSS?
// querySelector torna IL PRIMO ELEMENTO DEL DOM colpito dal selettore, oppure se il selettore non è valido
// torna null

// e) PIÙ elementi tramite un SELETTORE CSS
const allNavLis = document.querySelectorAll('nav ul li') // torna TUTTI GLI <li> dentro le <ul> dentro i <nav>
const allMainUlLis = document.querySelectorAll('#main-ul > li') // tutti gli <li> dentro l'elemento dotato di id "main-ul"
// la differenza è che querySelectorAll torna SEMPRE un array!
console.log('PER GIULIA', allMainUlLis)
// querySelectorAll() funziona COME querySelector() ma restituisce sempre un array (una NodeList in realtà)
// colleziona tutti gli elementi che vengono colpiti da un selettore CSS fornito.
// NB -> anche se gli elementi recuperati dal selettore CSS sono UNO SOLO, verrà restituito sotto forma
// di array!

console.log(document.getElementsByTagName('main')) // [ <main></main> ]

// se ci hai capito poco, ricordati queste due righe almeno!
// getElementById, querySelector -> ELEMENTO OPPURE NULL
// getElementsByClassName, getElementsByTagName, querySelectorAll -> ARRAY DI ELEMENTI
