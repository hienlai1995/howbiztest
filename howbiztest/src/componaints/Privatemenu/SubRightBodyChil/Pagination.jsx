import clsx from "clsx";
import styles from "./SubRightBody.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePages } from "../../../redux/actions";
function Pagination() {
  const dispath = useDispatch();
  const [pagination, setPagination] = useState({
    page: 1,
    perpage: 1,
    total: 100,
  });
  const totalPage = Math.ceil(pagination.total / pagination.perpage);
  function handlePageChane(newpage) {
    setPagination({ ...pagination, page: newpage });
    dispath(changePages(pagination.page));
  }

  return (
    <div className={clsx(styles.paginationContainer)}>
      <button
        className={clsx(styles.PaginationBtn)}
        disabled={pagination.page <= 1}
        onClick={() => handlePageChane(pagination.page - 1)}
      >
        prev
      </button>
      <button
        className={clsx(styles.PaginationBtn)}
        disabled={pagination.page >= totalPage}
        onClick={() => handlePageChane(pagination.page + 1)}
      >
        next
      </button>
    </div>
  );
}
export default Pagination;
