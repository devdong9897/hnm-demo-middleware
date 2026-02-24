function getProducts(searchQuery) {
  // getState: 현재의 state정보
  return async (dispatch, getState) => {
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // 여기서 이제 reducer로 보냄
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
