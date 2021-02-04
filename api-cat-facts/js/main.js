document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://cat-fact.herokuapp.com/facts'
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const randomNum = Math.floor(Math.random() * 5)
        console.log(data)
        document.querySelector('h2').innerText = data[randomNum].text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}