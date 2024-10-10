import React from 'react';

const Header = () => {
    return (
        <header className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
            <h1 className="h5">Home</h1>
            <div className="d-flex gap-3 align-items-center">
                <a className="text-secondary">@Thanh Nhan</a>
                <a>|</a>
                <a className="text-secondary" href="#">GitHub</a>
            </div>
        </header>
    );
};

export default Header;
