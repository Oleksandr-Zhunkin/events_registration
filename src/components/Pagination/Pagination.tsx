import { useDispatch, useSelector } from "react-redux";
import { selectTotalPages } from "../../../redux/events/selectors";
import { useEffect, useState } from "react";
import { eventsThunk } from "../../../redux/events/operations";
import { AppDispatch } from "../../../redux/store";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import s from "./Pagination.module.scss";

const Pagination = () => {
  const totalPages = useSelector(selectTotalPages);
  const dispatch: AppDispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };
  useEffect(() => {
    dispatch(eventsThunk(currentPage));
  }, [dispatch, currentPage]);

  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      <button
        className={s.btn}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>
      {pages.map((page) => (
        <button
          className={s.btn}
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
      <button
        className={s.btn}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
