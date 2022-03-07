
const displLocalStorageCart = () => {
  const cart = getCart ();
  for (const name in cart) {
    mahi(name);
  }
} 


const myFunction = () => {
  const nameField = document.getElementById('search-btn');
  const name = nameField.value;
  if(!name) {
    return;
  }
 mahi(name);
 addProductToCart(name);
  nameField.value='';
}

const mahi = name =>{
  const ul = document.getElementById('ul');
  const li = document.createElement('li');


  li.innerText = name  ;


  ul.appendChild(li); 
}

const getCart = () => {
  const cart = localStorage.getItem('cart');
  let cartObj;
  if(cart){
    cartObj = JSON.parse(cart);
  }
  else {
    cartObj = {}; 
  }
  return cartObj;
}
const addProductToCart = name => {
  const cart = getCart();
  if (cart [name]){
    cart[name]=cart[name]+1;
    
  }
  else {
    cart [name]=1;
  }
  const cartStringfied = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringfied);
}
const placeOder = () => {
  document.getElementById('products').textContent = '';
  localStorage.removeItem('cart');
}
displLocalStorageCart()




