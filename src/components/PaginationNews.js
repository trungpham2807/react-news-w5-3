import React from 'react'
import { Pagination } from 'react-bootstrap'
const PaginationNews = ({ setCurrentPage, currentPage }) => {
    let active = 1;
    let items = [];
    const handleClick = (number) => {

        setCurrentPage(number)
    }
    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => handleClick(number)} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    console.log(items)
    const paginationBasic = () => {



        return (
            <div>
                <Pagination id="" size="lg">{items}</Pagination>
                <br /> 
            </div>
        )

    }

    return paginationBasic()
}

export default PaginationNews