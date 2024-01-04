// components/Pagination.js
import React from 'react';
import Link from 'next/link';

const Pagination = ({ currentPage, totalPages }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <nav aria-label="Page Navigation" className="pagination-container">
            <ul className="pagination align-items-center">
                {!isFirstPage && (
                    <li className="page-item">
                        <Link href={`/${currentPage - 1}`} aria-label="Previous Page">
                            <a className="page-link">
                                <i className="fas fa-angle-left"></i>
                            </a>
                        </Link>
                    </li>
                )}

                {/* Page numbers (can be optimized for large number of pages) */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                        <Link href={`/${page}`}>
                            <a className="page-link">{page}</a>
                        </Link>
                    </li>
                ))}

                {!isLastPage && (
                    <li className="page-item">
                        <Link href={`/${currentPage + 1}`} aria-label="Next Page">
                            <a className="page-link">
                                <i className="fas fa-angle-right"></i>
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
