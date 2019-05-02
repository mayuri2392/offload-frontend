function getProducts(){
  return new Promise((resolve, reject) => {
    fetch("http://localhost:5000/products")
    .then(response => {
      response.json().then(json => {
        resolve(json.data);
      }).catch(e => reject(e));
    }).catch(err => reject(err))
  })
}


export default getProducts;