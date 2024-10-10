import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import List from '../components/List';

const Groups = () => {
    return (
        <div className="bg-light min-vh-100">
            <Header />
            <div className="d-flex justify-content-between p-4">
                <h1 className="h4">My JUG Tour</h1>
                <Button text={"Add group"} classname='btn btn-success' />
            </div>
            <List />
        </div>
    );
}

export default Groups;
