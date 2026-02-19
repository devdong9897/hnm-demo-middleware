import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch } from "react-redux";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은", searchQuery);
    // 여기서 {type: ""}이라고 하면 바로 store로 가기 때문에 아래처럼 작성하면 미들웨어로 거쳐서 간다.
    dispatch(productAction.getProducts());
  };

  useEffect(() => {
    getProducts();
  }, [query.toString()]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
