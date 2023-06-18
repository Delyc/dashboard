import React from "react";
import { Next, Prev } from "./Svgs";
import styles from '../../styles/Home.module.scss'

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const handlePageClick = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    return (
        <div className={styles.paginate}>
            <div>
            </div>
            <div className={styles.paginate__pages}>
            <button className={styles.nextPrev} onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                <Prev />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                className={styles.paginate__page}
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </button>
            ))}
            <button className={styles.nextPrev} onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                <Next />
            </button>
            </div>
        </div>
    );
};

export default Pagination;
