
const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


const generateJokes = async () => {
  
  
  try{
    const setHeader = {
      headers: {
        Accept: 'Application/json'
      }
    }
    
    const res = await fetch('https://icanhazdadjoke.com', setHeader);
  
  const data = await res.json();
  
  joke.innerHTML = data.joke;
  
}catch(err){
  console.log(`The error is ${err}`)
}
  }
  
  

  jokeBtn.addEventListener("click", generateJokes);
  
  generateJokes();