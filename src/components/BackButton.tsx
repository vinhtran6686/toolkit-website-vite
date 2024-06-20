import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const BackButton = () => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className=" btn btn-neutral btn-sm cursor-pointer mb-4"
    >
      <IoMdArrowRoundBack size={16} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;