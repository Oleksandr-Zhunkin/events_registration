import { useSelector } from "react-redux";
import { selectTotalPages } from "../../../redux/events/selectors";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import s from "./Pagination.module.scss";
import { PropPagination } from "../../../types/types";

const Pagination = ({ currentPage, setCurrentPage }: PropPagination) => {
  const totalPages = useSelector(selectTotalPages);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

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
