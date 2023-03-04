import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utilty/SubTitle";
// import cloth from '../../images/clothe.png';
// import cat2 from "../../images/cat2.png";
// import labtop from "../../images/labtop.png";
// import sale from "../../images/sale.png";
// import pic from "../../images/pic.png";
/// bind data BY [dispatch] from any redux file
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../redux/action/categoryAction";

const HomeCategory = () => {
  // bind or acces all data from redux folder
  const dispatch = useDispatch();

  useEffect(() => {
    // call >> {getAllCategory} << from redux {Action} >>
    dispatch(getAllCategory());
  }, []);

  // allCategory >> bind state from file rootReducer.js
  // // get data from server
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  

  const colors = [
    "#ffd3e8",
    "#f4dba5",
    "#55cfdf",
    "#ff6262",
    "#0034ff",
    "#ffd3e8",
  ];

  return (
    <Container>
      {/* send props  to SubTitle */}
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          category.data ? (
            category.data.slice(0, 6).map((item, index) => {
              return (
                <CategoryCard
                 key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random()*5) +1 ]}
                />
              );
            })
          ) : (
            <h4>لا يوجد بيانات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
