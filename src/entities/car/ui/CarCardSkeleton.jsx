const CarCardSkeleton = () => {
  // Мы используем те же стили, что и у настоящей карточки,
  // чтобы скелетон занимал столько же места.
  return (
    <div className="car-card skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
    </div>
  );
};

export default CarCardSkeleton;
