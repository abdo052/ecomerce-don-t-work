import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryContainer from "../../component/Category/CategoryContainer";
import Pagination from "../../component/Utilty/Pagination";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/action/categoryAction";

const AllCategoryPage = () => {
  // bind or acces all data from redux folder
  const dispatch = useDispatch();

  useEffect(() => {
    // call >> {getAllCategory} << from redux {Action} >>
    // controll limit product on page and controll number of page(paginations)
    dispatch(getAllCategory(4));
  }, []);

  // allCategory >> bind state from file rootReducer.js
  // // get data from server (redux)
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  // to get page number
  let pageCount = 0;

  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
    // console.log(category.paginationResult.numberOfPages);
  }

  // when press pagination data changed
  const getPage = (page) => {
    // receive data from pagination && categoryActions
    dispatch(getAllCategoryPage(page));
    console.log(page);
  };

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
