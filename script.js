const img_Button=document.getElementById('imgButton')
const search_Button=document.getElementById('searchImage')
const input_Hero=document.getElementById('inputHero')
const heroImage=document.getElementById("hero")
const superHero_Token=566697298948144;
const URL=`
https://www.superheroapi.com/api.php/${superHero_Token}`


const superHero=(id)=>{
 
  fetch(`${URL}/${id}`)
  .then(response=>response.json())
 .then(json=>{
  console.log(json)
   // const hero=json
  getHeroInfo(json)
   

  })
}
const random=()=>{
  const no_Of_Heros=731;
return Math.floor(Math.random()*no_Of_Heros)+1
  }
img_Button.onclick=()=>superHero(random())

const searchHero=(name)=>{
  console.log(input_Hero.value)
  fetch(`${URL}/search/${name}`)
  .then(response=>response.json())
  .then(json=>{
    
        const getHero=json.results[0]
        
        console.log(getHero)
    
    
  getHeroInfo(getHero)
    })
    }
const statEmoji={
  intelligence:'🧠',
  speed:'🏄',
  strength:'💪',
  durability:'🏋️',
  power:'💥',
  combat:'👊',
  
  
  }
const getHeroInfo=(character)=>{
  const name=`<h2>${character.name}</h2>`
  
const img=`<img src='${character.image.url}'height="300" width="300">`

  const stat=Object.keys(character.powerstats).map(stat=>{
    return `<p>${stat.toUpperCase()}${statEmoji[stat]}:${character.powerstats[stat]}</p>`
    
    }).join('')
 // console.log(stat.join(''))
  console.log(name)
     heroImage.innerHTML=`${name}${img}${stat}`
  
}
search_Button.onclick=()=>searchHero(input_Hero.value)