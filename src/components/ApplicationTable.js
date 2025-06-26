import React, { useState } from 'react';
import StatusBadge from './StatusBadge';
import '../styles/ApplicationTable.css';

const initialApplications = [
    { id: '0001', date: '28 December 2022', status: 'Approved' },
    { id: '0002', date: '28 December 2022', status: 'Rejected' },
    { id: '0003', date: '28 December 2022', status: 'Approved' },
    { id: '0004', date: '28 December 2022', status: 'Approved' },
    { id: '0005', date: '28 December 2022', status: 'Approved' },
    { id: '0006', date: '28 December 2022', status: 'Rejected' },
    { id: '0007', date: '28 December 2022', status: 'Approved' },
    { id: '0008', date: '28 December 2022', status: 'Rejected' },
];

const tabs = ['All', 'Approved', 'Rejected'];

const ApplicationTable = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [applications, setApplications] = useState(initialApplications);
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const filteredData = applications.filter(item =>
        activeTab === 'All' ? true : item.status === activeTab
    );

    const toggleDropdown = (id) => {
        setOpenDropdownId(prev => (prev === id ? null : id));
    };

    const updateStatus = (id, newStatus) => {
        const updated = applications.map(app =>
            app.id === id ? { ...app, status: newStatus } : app
        );
        setApplications(updated);
        setOpenDropdownId(null);
    };

    return (
        <div className="table-wrapper animate-fade-in">
            <div className="d-flex align-items-center mb-3">
                <h5 className="fw-bold">Applications</h5> &nbsp;&nbsp;
                <span className="badge bg-warning text-dark">3 New</span>
            </div>

            <div className="custom-tabs d-flex gap-4 border-bottom mb-3">
                {tabs.map(tab => (
                    <div
                        key={tab}
                        className={`tab-item pb-2 ${activeTab === tab ? 'active-tab' : ''}`}
                        onClick={() => setActiveTab(tab)}
                        style={{ cursor: 'pointer' }}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <table className="table table-borderless table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Application ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th style={{ width: '40px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(row => (
                        <tr key={row.id}>
                            <td data-label="Application ID" className="text-primary text-decoration-underline">{row.id}</td>
                            <td data-label="Date">{row.date}</td>
                            <td data-label="Status">
                                <StatusBadge status={row.status} />
                            </td>
                            <td data-label="More" className="position-relative">
                                <span
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => toggleDropdown(row.id)}
                                >
                                    ⋮
                                </span>
                                {openDropdownId === row.id && (
                                    <ul className="dropdown-menu-custom">
                                        <li onClick={() => updateStatus(row.id, 'Approved')}>Mark as Approved</li>
                                        <li onClick={() => updateStatus(row.id, 'Rejected')}>Mark as Rejected</li>
                                    </ul>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationTable;
