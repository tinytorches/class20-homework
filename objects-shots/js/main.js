document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
  let drinkChoice = document.querySelector('input').value.split(' ').join('')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkChoice

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data)
      console.log(data.drinks[0])
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
      })
    
    .catch(err => {
      console.log(`error ${err}`)
      document.querySelector('h2').innerText = 'I don\'t think that\'s a drink I\'ve heard of. Try again?'
  });
}

// need to conduct a proper search that returns an actual result composed of two words with a spacing in the middle.
// works for one-word searches that do have a result though like '    whiskey  ' or '  gin     '.