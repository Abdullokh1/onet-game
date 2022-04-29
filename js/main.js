const list = document.querySelector('.list');




let arr = []
for (let i = 0; i < 4; i++) {
  pokemons.forEach((item) => {
    arr.push(item)
  })
}

let length = arr.length = 60
for (let i = 0; i < 100; i++) {
  const a = Math.floor(Math.random() * length);
  const b = Math.floor(Math.random() * length);
  const res = arr[a];
  arr[a] = arr[b];
  arr[b] = res;
}


let x = 1;
let y = 1;
arr.forEach((item) => {
  if (x > 10) {
    x = 1;
    y++
  }
  let li = document.createElement('li');
  li.className = `list__item X-${x} Y-${y} Id=${item.id}`;
  
  li.innerHTML = `
  <button class="list__btn">
     <img class="list__img" id='${item.id}' src="${item.img}" alt="img" height="85">
    </button> 
  `;
  list.appendChild(li);
  x++;

});



const listItem = document.querySelectorAll('.list__item');



let imgId = []
let xCount = []
let yCount = []
let infoArr = []



let imgId1;
listItem.forEach(el => {
  el.addEventListener('click', (e) => {
    infoArr.length == 2 ? infoArr.length = 0 : null;
    let obj = {
      id: e.target.id,
      x: el.classList[1].slice(2,3),
      y: el.classList[2].slice(2,3),
    }
    el.classList.add('clicked');
    infoArr.push(obj)
  })
})

listItem.forEach(item =>{
  item.addEventListener('click', ()=>{
   let first = infoArr[0].id
   let second = infoArr[1] ? infoArr[1].id : null;

   if(first == second){
     if(item.classList.contains('clicked')){
       listItem.forEach(ell =>{
         if(ell.classList.contains('clicked')){
           ell.classList.add('remove')
         }
       })
     }
   }
  })
})



const listBtn = document.querySelectorAll('.list__btn')

listBtn.forEach(el => {
  el.addEventListener('click', () => {
    listBtn.forEach(item => {
      item.classList.remove('active')
    })
    el.classList.add('active')
  })
})








