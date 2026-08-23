import { contactInfo } from '../data/content';

export default function TopBar() {
  return (
    <div className="container-fluid px-5 d-none d-lg-block topbar-line">
      <div className="row gx-0">
        <div className="col-lg-12 text-center text-lg-start">
          <div className="d-inline-flex align-items-center" style={{ height: 40 }}>
            <small className="me-3 topbar-item">
              <i className="fa fa-phone-alt me-2"></i>{contactInfo.phone}
            </small>
            <small className="topbar-item">
              <i className="fa fa-envelope-open me-2"></i>{contactInfo.email}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
