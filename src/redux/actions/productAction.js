function getProducts() {
  // getState: 현재의 state정보
  return async (dispatch, getState) => {
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
}

export productAction = { getProducts }

