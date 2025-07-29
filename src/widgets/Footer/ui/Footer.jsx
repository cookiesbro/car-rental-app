const Footer = () => {
    return (
        <footer className="app-footer">
        {/* Сначала вставляем наш блок со статистикой */}
        <div className="stats-section">
          <div className="stat-item">
            <h2 className="stat-number">7+ Years</h2>
            <p className="stat-description">
              In the rental market, premium cars redefine luxury travel
              experiences
            </p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">72+ Cars</h2>
            <p className="stat-description">
              Premium cars redefine luxury travel with unmatched style and
              sophistication
            </p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">1+ bln.</h2>
            <p className="stat-description">
              EuroElite Cars fleet is valued in euros, representing its premium
              quality and European sophistication
            </p>
          </div>
        </div>
        {/* Затем можно добавить блок с копирайтом */}
        <div className="copyright-section">
          © 2025 Твой лучший каршеринг. Все права защищены.
        </div>
      </footer>
    );
};

export default Footer;
