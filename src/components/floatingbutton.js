import React, { useState } from 'react';
import './floatingbutton.css';
import PriceCalculatorForm from './calculator';

const FloatingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="floating-button" onClick={openModal}>
        Get A Quote
      </div>
      <PriceCalculatorForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FloatingButton;