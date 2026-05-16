const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <p className="footer-brand">JTS Beauty</p>
          <p className="footer-text">
            Premium wigs, styling products, and beauty essentials crafted for a confident, polished look.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Products</p>
          <a href="#shop" className="footer-link">
            Products
          </a>
          <a href="#wig-categories" className="footer-link">
            Wigs
          </a>
          <a href="#shop" className="footer-link">
            Bonnets
          </a>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Contact</p>
          <a href="mailto:jtsbeautyworldboutiquellc@gmail.com" className="footer-link">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </span>
            <span>jtsbeautyworldboutiquellc@gmail.com</span>
          </a>
          <a href="tel:+15612553698" className="footer-link">
            <span className="footer-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.81.34 1.6.64 2.34a2 2 0 0 1-.45 2.11L8.91 9.91a16 16 0 0 0 6 6l1.73-1.73a2 2 0 0 1 2.11-.45c.74.3 1.53.52 2.34.64A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span>561-255-3698</span>
          </a>
          <p className="footer-heading" style={{ marginTop: '18px' }}>Follow Us</p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/177aaiVESS/" target="_blank" rel="noreferrer" className="footer-link">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </span>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/jtsbeautyworld?utm_source=qr&igsh=MXgxOHV0cWZvdHE2Zg==" target="_blank" rel="noreferrer" className="footer-link">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@jtsbeauty?_r=1&_t=ZP-96CYRj8ubNP" target="_blank" rel="noreferrer" className="footer-link">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18a6 6 0 0 1-6-6h4a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2h4v8a6 6 0 0 1-6 6z" />
                </svg>
              </span>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-note">© 2026 JTS Beauty. Crafted for premium wig and serum shopping.</p>
      </div>
    </footer>
  )
}

export default Footer
