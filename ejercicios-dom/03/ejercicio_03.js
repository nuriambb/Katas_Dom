/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')
for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}
document.body.appendChild(ul)
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementoEliminar = document.querySelector('.fn-remove-me')
elementoEliminar.remove()

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ulCars = document.createElement('ul')

for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  li.setAttribute('data-function', 'printHere')
  ulCars.appendChild(li)
}

document.body.appendChild(ulCars)

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (let i = 0; i < countries2.length; i++) {
  const elemento = countries2[i]
  //console.log(elemento)
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  h4.innerText = elemento.title
  img.src = elemento.imgUrl
  div.appendChild(h4)
  div.appendChild(img)
  document.body.appendChild(div)
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la serie de divs.

const button = document.createElement('button')
button.innerText = 'Elimina el último'
document.body.appendChild(button)
let elementoaEliminar = countries2[4]

function eliminar() {
  const todosLosDiv = document.querySelectorAll('div')
  todosLosDiv[todosLosDiv.length - 1].remove()
}

button.addEventListener('click', eliminar)
document.body.appendChild(button)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//divs que elimine ese mismo elemento del html.

const allDivsToRemove = document.querySelectorAll('div')
for (const div of allDivsToRemove) {
  const button = document.createElement('button')
  button.textContent = 'Elimíname!'
  button.addEventListener('click', (e) => e.target.parentElement.remove())
  div.appendChild(button)
}
