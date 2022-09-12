 let prices = [5,50,15,10,10,5,5,5]
 let flexr = document.querySelector('.flexr')
 let inputs = document.querySelectorAll('.card .card-body input')   
 let prc = document.querySelectorAll('.card h5 span')
 let add = document.querySelectorAll('.card .sub')
 let submit = document.querySelectorAll('.card .submit')
 let card = document.querySelectorAll('.card')
 let procced = document.getElementById('procced')
 let products = []
 let check = document.querySelectorAll('.card i') 
 let checks = Array.from(check)
 let title =  document.querySelectorAll('.card .card-title')
 let h1 = document.querySelector('h1')
 let h2 = document.querySelector('h2')
 let h3 = document.querySelector('h3')
 let b = document.querySelector('b')
 function handle_checking(){


   for(let i= 0; i<9; i++){
// prices
        add[i].onclick = function(){
            prc[i].innerHTML = prices[i] * inputs[i].value
        }
// end prices

// submit
    document.getElementById(`cart${i+1}`).style.display = 'none'
    submit[i].onclick = function(){
        document.getElementById(`cart${i+1}`).style.display = 'block'
        products.push(document.getElementById(`cart${i+1}`))
    }
    // end submit

    // cancel
    document.getElementById(`cancel${i+1}`).onclick = function(){
        document.getElementById(`cart${i+1}`).style.display = 'none'
        
        products.pop(document.getElementById(`cart${i+1}`))
    }
// end cancel


procced.onclick = () => {
let prd = [...new Set(products)]
    if(prd.length == 0){
        alert('select an item')
    }
    
    else if(prd.length > 0){
        
        var txt = document.createTextNode('Your Shopping')
        h3.append(txt)
        for(let x = 0;x<prd.length; x++) {

            
            b.style.fontSize = '24px'
            b.innerHTML += `${title[Number(prd[x].id[4])-1].innerHTML} * ${inputs[Number(prd[x].id[4])-1].value} : ${prd[x].previousElementSibling.textContent}  <br>`
       }
        flexr.remove()
        h1.remove()
        h2.remove()
        procced.parentElement.remove()
        procced.remove()
        document.body.style.display = 'flex'
        document.body.style.justifyContent = 'center'
        document.body.style.alignItems = 'center'
        document.body.style.flexDirection = 'column'
let xl = document.createElement('div')
xl.classList = 'btn btn-success'
let text = document.createTextNode('Print')
xl.append(text)

document.body.appendChild(xl)
xl.onclick = () => {xl.remove() ; print()}
        
    }
}
}


    
} 

handle_checking()
