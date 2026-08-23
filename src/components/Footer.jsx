import { contactInfo, footerColumns } from '../data/content';

export default function Footer() {
  return (
    <div id="contact" className="container-fluid site-footer pt-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-6 pb-4">
            <span className="wordmark d-inline-block mb-3">TicTek</span>
            <p className="lead-text">
              TicTek est une ESN spécialisée en ingénierie logicielle : développement web sur-mesure, applications
              mobiles, assurance qualité et infrastructure cloud. Nous livrons du code que vos équipes n'auront pas
              à réécrire dans 18 mois.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div className="col-lg-2 col-md-6 pb-4" key={col.title}>
              <h3 className="mb-3">{col.title}</h3>
              <div className="link-animated d-flex flex-column">
                {col.links.map((link) => (
                  <a href={link.href} key={link.label}>{link.label}</a>
                ))}
              </div>
            </div>
          ))}

          <div className="col-lg-4 col-md-6 pb-4">
            <h3 className="mb-3">Contact</h3>
            <div className="d-flex mb-2">
              <i className="bi bi-geo-alt me-2 footer-icon"></i>
              <p className="mb-0">{contactInfo.address}</p>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-envelope-open me-2 footer-icon"></i>
              <p className="mb-0">{contactInfo.email}</p>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-telephone me-2 footer-icon"></i>
              <p className="mb-0">{contactInfo.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          <p className="mb-0">
            &copy; 2026 <a href="#hero">TicTek</a>. Tous droits réservés. Conçu et développé avec la même rigueur
            que ce que nous livrons à nos clients.
          </p>
        </div>
      </div>
    </div>
  );
}
