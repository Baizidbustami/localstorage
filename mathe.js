// const addListItems = () => {
//     const cart = getItems ();
//     for (const name in cart){
//         getCart(name);
//     }
// }

// const myFunction = () => {
//     const inputButton = document.getElementById('search-btn');
    
//     const name = inputButton.value;
//     if(!name){
//         return
//     };
//     getCart (name);
//     addProductToCart(name);
    
//      inputButton.value='';
// }

// const getCart = name => {
// const ul = document.getElementById('ul');
// const li = document.createElement('li');
// li.innerText = name;
// ul.appendChild(li);
// }

// const getItems = () => {
//     const ali = localStorage.getItem('cart');
//     let cartObj;
//     if(ali){
//         cartObj = JSON.parse(ali);
//     }
//     else {
//         cartObj = {};
//     }
//     return cartObj;
// }
// const addProductToCart = name => {
//     const cart = getItems();
//     if(cart [name]){
//         cart[name] = cart[name]+1;
//     }
//   const cartStringfied = JSON.stringify(cart);
//   localStorage.setItem ('cart',cartStringfied);
// }
// const placeOder = () => {
//     document.getElementById('products').textContent = '';
//     localStorage.removeItem('cart');
//   }
// addListItems ();


 const addListItems = () => {
         const cart = getItems ();
        for (const name in cart){
            getCart(name);
       }
    }
const myFunction = () => {
const input = document.getElementById('search-btn');
const name = input.value;
if(!name){
    return;
};
getCart (name);
addProductToCart (name);
input.value='';
}

const getCart = name => {
    const parent = document.getElementById('ul');
    const li = document.createElement('li');

    li.innerText=name;
    parent.appendChild(li);
}

const getItems = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
       cartObj = JSON.parse(cart);
    }
    else{
        cartObj={};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getItems();
    if(cart [name]){
        cart[name] = cart[name]+1;
    }
    else {
        cart [name]=1;
    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfied);
}

const placeOder = () => {
        document.getElementById('products').textContent = '';
        localStorage.removeItem('cart');
      }
    addListItems ();

    const mahi = () => {
        const response = confirm ('Are you gogin to picnic?');
        if(response == true) {
          alert ('amake pta biks karo');
          console.log(response)
        }
        else{
          console.log('dure giye mor')
        }
      }
      const goodBy = () => {
          const name = prompt ('What is your name?');
          if(name){
             console.log(name) 
          }
      }