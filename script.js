var produit = ["pepsi", "fanta", "sprite","cocacola", "hamoud","menth", "croissant"]
var prix = [30, 40, 50 , 20 , 100,11, 35]
var descriptions = ["Lorem ipsum dolor", " sit amet consectetur adipisicing", "elit.Neque quia id quidem", "laboriosam sequi officiis quasi.Amet", "quasi fugit.Neque in omnis nesciunt! Neque assumenda quo quia vitae ducimus porro ?"]
var img = ["imgs/pepsi.jpg", "imgs/fanta.jpg","imgs/sprite.jpg","imgs/cola.jpg","imgs/hamoud.jpg","imgs/menth.jpg","imgs/croissants.png"]
const pell = document.querySelector('#pell')
const body = document.querySelector('body')
var allprod = [];

for (let i = 0; i < produit.length; i++) {
    const listep = {
        id : i,
        name :produit[i],
        price :prix[i],
        desc : descriptions[i],
    }
    allprod.push(listep);

    //listproducts
    pell.innerHTML +=`
    <div class="card" style="width: 18rem;">
  <img src="${img[i]}" class="card-img-top" alt="..." height ="190px">
  <div class="card-body">
    <h5 class="card-title">${produit[i]}</h5>
    <p class="card-text">${descriptions[i]}</p>
    <p>price : ${prix[i]} </p>
    <button id="${[i]}" class="btn-addtocart btn btn-primary">click click!!</button>
  </div>
</div>
    
    `
}
//themes
j=-1;
const theme = document.querySelector('#theme')
theme.addEventListener('click', (e) => {
  j= j+1;
  console.log(j)
  switch (j) {
    case 0:
      console.log("case 0 ")
      body.classList.add("light");
      break;
      case 1:
        console.log("case 1 ")
        body.classList.add("dark")
        break;
      case 2:
        console.log("case 2 ")
        body.classList.remove("dark","light")
      j=-1
          break;
        }
        
})
 //modal

 $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

tbody = document.querySelector('tbody')
const already =[]
const tocart =document.querySelectorAll('.btn-addtocart')
const s = []

for (let i = 0; i < tocart.length; i++) {
  const tab = document.createElement('tr')
  tocart[i].addEventListener('click', function (e) {
    
    e.preventDefault()
    var element = allprod[e.target.id].name
    let price = allprod[e.target.id].price
    const can = already.filter(alr => alr === element )
    if (element == can) {
      s[i]++
      console.log("works")
      text ="#p" +i.toString()
      const ele = document.querySelector(text)
      ele.innerText = s[i]

    } else {
      s[i]=1
      already.push(element)
    tbody.innerHTML += `
    <tr>
      <td class="name">${element}</td>
      <td class="quantities"  id ="p${[i]}">${s[i]}</td>
    <td> ${price} </td> 
    <td > ${price} </td>   

  </tr>
    ` 
    }  
    console.log(s)
  })


  
}
  


  
