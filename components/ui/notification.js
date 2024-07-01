import { createPortal } from 'react-dom';

import classes from './notification.module.css';

const Notification = ({ title, message, status }) => {
  let statusClass = '';

  if (status === 'success') {
    statusClass = classes.success;
  }

  if (status === 'error') {
    statusClass = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClass}`;

  return createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notification')
  );
};
export default Notification;
