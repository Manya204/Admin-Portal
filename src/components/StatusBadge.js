import React from 'react';

const StatusBadge = ({ status }) => {
  let badgeClass = '';

  if (status === 'Approved') {
    badgeClass = 'bg-success-subtle text-success';
  } else if (status === 'Rejected') {
    badgeClass = 'bg-danger-subtle text-danger';
  } else {
    badgeClass = 'bg-secondary-subtle text-secondary';
  }

  return (
    <span className={`badge ${badgeClass} px-3 py-2  rounded`}>
      {status}
    </span>
  );
};

export default StatusBadge;
