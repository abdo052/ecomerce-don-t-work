import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";    

const CategoryContainer = ({data, loading}) => {
 
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
      <div className="admin-content-text"> كل التصنيفات </div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
           data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
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

export default CategoryContainer;
