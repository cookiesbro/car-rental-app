
const CarPageSkeleton = () => {
  return (
    <div className="skeleton-car-page-container">
      <div className="skeleton-car-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <hr
        style={{
          margin: '20px 0',
          border: 'none',
          borderTop: '1px solid #eee',
        }}
      />
      <div className="skeleton-text" style={{ width: '40%' }}></div>
      <div className="skeleton-calendar"></div>
    </div>
  );
};

export default CarPageSkeleton;
