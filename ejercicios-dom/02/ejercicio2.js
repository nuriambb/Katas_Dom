//1.1 Inserta dinamicamente en un html un div vacio con javascript.
const mydiv = document.createElement('div')
document.body.appendChild(mydiv)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement('div')
const nuevoParrafo = document.createElement('p')
nuevoParrafo.innerHTML = 'Soy un párrafo nuevo'
document.body.appendChild(divConP)
divConP.appendChild(nuevoParrafo)

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//	loop con javascript.
const divConSeisP = document.createElement('div')
for (let i = 1; i < 7; i++) {
  const cadaNuevoParrafo = document.createElement('p')
  cadaNuevoParrafo.innerText = `Soy en párrafo número ${i}`
  divConSeisP.appendChild(cadaNuevoParrafo)
}
document.body.appendChild(divConSeisP)

/*1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.*/
const pDinamico = document.createElement('p')
pDinamico.innerText = 'Soy dinámico!'
document.body.appendChild(pDinamico)
//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const nuevoH2 = document.querySelector('h2.fn-insert-here')
nuevoH2.innerText = 'Wubba Lubba dub dub'
/*if (nuevoH2) {
  nuevoH2.textContent = 'Wubba Lubba dub dub'
} else {
  console.error('No se encontró')
}*/

/*1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}
document.body.appendChild(ul)

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementos = document.querySelectorAll('.fn-remove-me')
elementos.forEach((elemento) => {
  elemento.parentNode.removeChild(elemento)
})

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.

const newp = document.createElement('p')
newp.textContent = 'Voy en medio!'
let div2 = document.getElementById('div2')
let padre = div2.parentNode
padre.insertBefore(newp, div2)
//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//	.fn-insert-here
const añadirADiv = document.querySelectorAll('div.fn-insert-here')
console.log(document.querySelectorAll('div.fn-insert-here'))
for (let i = 0; i < añadirADiv.length; i++) {
  const div = añadirADiv[i]
  const pdentro = document.createElement('p')
  pdentro.textContent = 'Voy dentro!'
  div.appendChild(pdentro)
}
