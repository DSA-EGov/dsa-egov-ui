import type { ToastContainerProps } from 'react-toastify';

export const toastDefaultProps: ToastContainerProps = {
  position: 'top-right',
  theme: 'light',
  limit: 5,
  draggable: false,
  newestOnTop: true,
  pauseOnHover: true,
  closeButton: true,
  closeOnClick: false,
};
