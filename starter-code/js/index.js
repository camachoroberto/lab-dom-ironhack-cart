let button = document.getElementById('new-item-create');
let cont = 0;
button.onclick = () => {

  let addNameProduct = document.getElementById('product-name');
  let addprice = document.getElementById('product-price');
  let listProduct = document.getElementById('list-product');
  let product = document.createElement('div');

  if (addNameProduct.value.trim() == '') {
    alert('Please input a product name')
  } else if (addprice.value == '') {
    alert('Please enter a price greater than zero')
  }
  else {
    product.innerHTML = `
  <div class='box'>
    <div>${++cont}</div>
    <div>${addNameProduct.value}</div>
    <div>$<span class='price'>${Number(addprice.value).toFixed(2)}</span></div>
    <div><label>QTY <input type="number" value="1" class="quantity" onchange="valueUpdate()"></label></div>
    <div>$<span class="total-product-price">${Number(addprice).toFixed(2)}</span></div>
    <div><button class="btn btn-delete" type="button" onclick="deleteProduct(this)">Delete</button></div>
  </div>
  ` ;

    listProduct.appendChild(product);
    addNameProduct.value = '';
    addprice.value = '';
    valueUpdate();
  }
}

valueUpdate = () => {
  let sumPrices = document.getElementById('total-price')
  let allQty = document.querySelectorAll('.quantity');
  let allPrices = document.querySelectorAll('.price');
  let totalProductPrice = document.querySelectorAll('.total-product-price');
  let totalPrice = 0;

  for (let i = 0; i < allQty.length; i++) {
    let oneQty = allQty[i].value;
    let onePrice = parseFloat(allPrices[i].innerText);
    let priceProduct = oneQty * onePrice;

    totalProductPrice[i].innerText = Number(priceProduct).toFixed(2);
    totalPrice += priceProduct;
  }
  sumPrices.innerText = Number(totalPrice).toFixed(2);
}

deleteProduct = (product) => {
  product.parentNode.parentNode.remove();
  valueUpdate();
}