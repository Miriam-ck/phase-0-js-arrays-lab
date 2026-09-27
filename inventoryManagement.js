// Write your code here
let products = ["Laptop", "Phone","Headphones","Monitor"]

function logFirstProduct(){
  console.log(products[0]);
}
logFirstProduct();

function addProduct(product){
  products.push(product);
}
addProduct("Keyboard");

function updateProductName(index, newName){
  products[index] = newName;
}
updateProductName(1, "piano");

function removeLastProduct(){
  products.pop();
}
removeLastProduct();  

module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};





// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
