const list = document.querySelector('ul');
const buttonshowAll = document.querySelector('.showAll');
const buttonMapAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterAll = document.querySelector('.filter-all')
let myLi = '';


//For each
function showAll(productsArray){

    myLi = '';

    productsArray.forEach(product => {

        myLi += `
        
            <li >
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price" > R$ ${product.price}</p>
            </li>
        `
    
        
    });
    
    list.innerHTML = myLi


}


// Map serve para criar um novo array à partir de um array
function mapAllItens(){


    const newPrices = menuOptions.map((product) =>({
        //spread operator
        ...product,
        price: product.price * 0.9,
       
    }))

    showAll(newPrices)

}

// Reduce é para reduzir/somar informações no array
// acumulador e o valor atual
function sumAllItens(){
    const totalValue = menuOptions.reduce( (acc,curr) => acc + curr.price, 0)

    list.innerHTML = `<li>
        <p> O valor total dos itens é R$${totalValue}</p>
    </li>
    `
    
}


//Filter tambem cria um novo array, porem filtra os itens 
function filterAllItens(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}


buttonshowAll.addEventListener('click',()=> showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllItens)
buttonFilterAll.addEventListener('click', filterAllItens)

