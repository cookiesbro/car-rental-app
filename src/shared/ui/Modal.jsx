const Modal = ({ isOpen, onClose, children }) => {
  // Если `isOpen` равно false, компонент ничего не рендерит.
  if (!isOpen) {
    return null;
  }

  // Эта функция нужна, чтобы клик внутри модального окна не закрывал его
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  // `onClose` будет вызываться при клике на подложку или на кнопку "X"
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick}>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
