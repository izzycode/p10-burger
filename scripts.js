const startTheGrill = () => {
  // declare variables
  const TAX_PERCENTAGE = 7
  const BASE_PRICE = 7
  const EXTRA = 50
  let proteinCounter = 0,
      ingredients = 0

  // ------------------------DOM queries
  //  grab all the toppings
  let toppings = document.querySelectorAll('#toppings img')
  // grab all the protein
  let protein = document.querySelectorAll('#protein img')
  //  grab linst in between buns
  let list = document.getElementById('builder-canvas')
  // grab base
  let base = document.getElementById('base')

  const addBasePrice = () => {
    if(ingredients == 1){
      base.prepend( document.createTextNode( `$ ${BASE_PRICE} ` ) )
    }
  }

  toppings.forEach( img => {
    img.addEventListener('click', ev => {
      list.innerHTML += `<li>${ev.target.outerHTML}</li>`
      ingredients ++
      addBasePrice()
    })
  })

  protein.forEach( img => {
    img.addEventListener('click', ev => {
      list.innerHTML += `<li>${ev.target.outerHTML}</li>`
      proteinCounter ++
      ingredients ++
      addBasePrice()
    })
  })

}

document.addEventListener('DOMContentLoaded', startTheGrill )
