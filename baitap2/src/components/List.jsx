import React from 'react';
import Button from './Button';

const List = () => {
    const data = [
        {id: 1, name: 'Seattle JUG', location: 'Seattle, WA', event: "September 13, 2022: Micro frontends for Java developers"},
        {id: 2, name: 'NYC JUG', location: 'New York, NY', event: "September 14, 2022: Micro frontends for Java developers"},
        {id: 3, name: 'Chicago JUG', location: 'Chicago, IL', event: "September 15, 2022: Micro frontends for Java developers"},
        {id: 4, name: 'SF JUG', location: 'San Francisco, CA', event: "September 16, 2022: Micro frontends for Java developers"},
    ];

    return (
        <div className="overflow-auto mx-4 my-4">
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Events</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.location || 'Unknown'}</td>
                            <td>{item.event}</td>
                            <td>
                                <div className="d-flex justify-content-start">
                                    <Button text={"Edit"} classname='btn btn-primary me-2' />
                                    <Button text={"Delete"} classname='btn btn-danger' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
