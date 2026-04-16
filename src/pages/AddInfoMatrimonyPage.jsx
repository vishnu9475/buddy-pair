import React from 'react'
import { useNavigate } from 'react-router-dom';
import AdditionalDetailsForm from '../comp_vishnu/AdditionalDetailsForm'

function Page10() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/interestedinPage');
  }

  return (
    <div>
      <AdditionalDetailsForm handleNext={handleNext}/>
    </div>
  );
}
export default Page10
