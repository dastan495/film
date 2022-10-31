let film = document.querySelector(".cobra");
let input = document.querySelector('#inp')


    







fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
  .then((a) => a.json())
  .then((b) => {
    console.log(b);
    b.Search.forEach((asd) => {
    //   console.log(asd.Title);
      film.innerHTML += `
      <div class="card" style="width: 16rem;">
      <img src= ${asd.Poster} class="card-img-top" alt=""/>
      <div class="card-body">
      <h4>${asd.Title}</h4>
      <p class = 'card-text'>${asd.Year}</p>
      </div>
      </div>
        `;
    });
  });

//   input.addEventListener('input', (e) => {
//     let xxx = Search.filter((item) => {
//         if(item.Title.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) != -1) {
//              return true
//         } else {
//             return false 
//         }
//     }) 
//     return xxx
// })


/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div  ${asd.Title}  class="card-body">
    <p class='${asd.Year}'</p>
  </div>
</div> */
