//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  // const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const url = 'https://opentdb.com/api.php?amount=10'


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // document.querySelector('#questionHeader').innerText = data.
        document.querySelector('#answerHeader').innerText = data.correct_answer
        answer = 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function showAnswer() {
  document.querySelector()
}