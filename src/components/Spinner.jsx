import { useEffect, useState } from 'react';

export default function Spinner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="spinner"
      className={`position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center${show ? ' show' : ''}`}
    >
      <div className="spinner"></div>
    </div>
  );
}
