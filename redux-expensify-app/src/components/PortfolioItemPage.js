import React from 'react';

const PortfolioItemPage = (props) => {
    console.log(props);
    return (
        <div>
            <h2>A things I've Done</h2>
            <p>This page is for the item with the id of {props.match.params.id}.</p>
        </div>
    );
}

export default PortfolioItemPage;
