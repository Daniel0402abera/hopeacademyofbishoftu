'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Image from 'next/image';
import usePostData from '../api/usePostData';
const StyledInput = styled.input`
  appearance: none;
  outline: none;
  border-radius: 0px;
  border: 1px solid #ccc;
  padding:3px 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s ease-in-out;
  &:hover,
  &:focus {
    border-color: #6b7280;
  }
`;
const StyledLabel = styled.label`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin: 5px;
`;
const StyledTextArea = styled('textarea')`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1976d2; 
  }
`;
const StyledSelect = styled.select`
  appearance: none;
  outline: none;
  border: 1px solid #ccc;
  padding: 4px 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s ease-in-out;

  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23333" viewBox="0 0 24 24"%3E%3Cpath d="M7 10l5 5 5-5z" /%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px 16px;
  &:hover,
  &:focus {
    border-color: #6b7280;
  }
`;

const StyledButton = styled.button`
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  padding: 10px 16px;
  margin: 20px 0px;
  transition: background-color 0.3s ease-in-out;
  background-color: #00008b !important; /* Dark blue */
  color: #fff;
  border: 1px solid #00008b !important; /* Dark blue */

  &:hover,
  &:focus {
    background-color: #0000cd !important; /* Medium blue */
    border-color: #0000cd !important; /* Medium blue */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #6a5acd !important; /* Slate blue */
    border-color: #6a5acd !important; /* Slate blue */
  }
`;
const RegistrationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 20px;
  background: white;
  width: 100%; /* Adjust the width for mobile */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) { /* Apply styles for larger screens (e.g., tablets) */
    margin: 5px 50px;
    padding: 40px 60px;
    width: 50%;
  }
`;
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  font-family: Roboto;
  min-height: 100vh; 
  background-color: #dfe4df; 
`;
const Header = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const Address = styled.div`
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const StudentRegistration = () => {
 const {
    postData,
    isLoading,
    error,
    isSuccess
  } = usePostData();
  const formik = useFormik({
    initialValues: {
        "firstName": "",
        "lastName": "",
        "middleName": "",
        "dob": "",
        // "placeOfBirth": "fincha",
        "phoneNumberM" : "",
        "phoneNumberF": "",
        "gender": "",
        "nationality": "",
        //religion is missing
        "motherTongue": "",
        "otherLanguage": "",
        //english fluency
        "currentGradeLevel": "",
        "GradeLevelApplyingFor": "",
        "applyingForYear": "",
        //remove mother title
        // "motherTitle": "Ms",
        "motherFullName": "",
        "email": "",
        //remove father title
        // "fatherTitle": "Bikala",
        "fatherFullName": "",
        "NameOfCurrentSchool": "",
        "CountryOfCurrentSchool": "",
        "YearOrGradeOfLeavingCurrentSchool": "",
        "specialEducationalSupport": "",
        "specialEducationalSupportDetails": "",
        "Doesyourchildreceivespecialeducationalsupportathishercurrentschool": "",
        //missing fields here
        "religion": "",
    },
      onSubmit: async (values, { setSubmitting }) => {
      try {
        const result = await postData(`${process.env.NEXT_PUBLIC_BASE_URL}api/students`, values); 
        console.log('Form submitted successfully:', result);
      } catch (error) {
        console.error('Error submitting form:', error.message);
      } finally {
        setSubmitting(false);
      }
    },
  }) 
  return (
    <Page>
        <RegistrationFormContainer>
          <Header>
          <Image
              src="/img/h.png"
              alt="H"
              width="150"
              height="150"
              className="w-20"
            />
              <h1 style={{fontWeight: '700', fontSize: '18px', color: 'darkblue'}}>PRE- APPLICATION FORM HOPE ACADEMY OF<br></br> BISHOFTU</h1>
          </Header>
          <Address>
            <h1>BISHOFTU, ETHIOPIA</h1>
            <h1>Tel. 09-04040404, 09-07050505</h1>
            <h1>Email: admissions@hopeaccademybishoftu.org</h1>
          </Address>
          <p style={{  display: 'flex', margin: '15px 0px', justifyContent: 'center', textAlign: 'start'}}>To ensure that your child's application is processed efficiently, please fill this form completely with the necessary information. Please note that applications cannot be processed unless ALL sections of the Application Form are completed. If a section does not apply, please mark as "N/A" (not applicable) thus indicating that the information in the section has been noted.</p>

      
      <form onSubmit={formik.handleSubmit}>
        {/* Student Information */}
        <h1 style={{fontWeight: '600', margin: '15px 0px'}}>&#x2022;&nbsp;STUDENT INFOROMATION</h1>
        <div>
        <div>
        <StyledLabel>Student Name</StyledLabel>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px', }}> 
        <StyledInput 
          style={{width: '32%'}} 
          type="text"
          placeholder='First'
          name='firstName'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          required
        />
        <StyledInput
          style={{width: '32%'}} 
          type="text"
          name='middleName'
          value={formik.values.middleName}
          placeholder='Middle'
          onChange={formik.handleChange}
        />
        <StyledInput
        style={{width: '32%'}} 
          placeholder='Last'
          type="text"
          name='lastName'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          required
        />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '66%'}}>
          <StyledLabel>Date of Birth</StyledLabel>
          <StyledInput
          type="date"
          name='dob'
          value={formik.values.dob}
          onChange={formik.handleChange}
          required
        />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', width: '32%', justifyContent: 'center'}}>
          <StyledLabel>Gender</StyledLabel>
          <div>
            <label className='m-2'>
              <input 
                className='m-2'
                type="radio"
                name='gender'
                value='Male'
                checked={formik.values.gender === 'Male'}
                onChange={formik.handleChange}
              />
              Male
            </label>
            <label>
              <input
                className='m-2'
                type="radio"
                name='gender'
                value='Female'
                checked={formik.values.gender === 'Female'}
                onChange={formik.handleChange}
              />
              Female
            </label>
          </div>

          </div>
        </div>
        <div>
          <StyledLabel>Religion</StyledLabel>
        <div>
  <label className='m-2'>
    <input
      className='m-2'
      type="radio"
      name='religion'
      value='muslim'
      checked={formik.values.religion === 'muslim'}
      onChange={formik.handleChange}
    />
    Muslim
  </label>

  <label className='m-2'>
    <input
      className='m-2'
      type="radio"
      name='religion'
      value='christian'
      checked={formik.values.religion === 'christian'}
      onChange={formik.handleChange}
    />
    Christian
  </label>

      <StyledInput
        className='ml-4'
        style={{width: 'auto'}}
        type="text"
        placeholder='Other'
        name='religion'
        value={formik.values.religion}
        onChange={formik.handleChange}
      />
</div>
</div>
        
        
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <StyledLabel>Nationality</StyledLabel>
      <StyledInput
          type="text"
          name='nationality'
          value={formik.values.nationality}
          onChange={formik.handleChange}
        />
      </div>

      {/* row 3 */}
     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px'}}>
          <div style={{display: 'flex', width: '32%', flexDirection: 'column'}}>
          <StyledLabel>MotherTongue</StyledLabel>
          <StyledInput
          type="text"
          name='motherTongue'
          value={formik.values.motherTongue}
          onChange={formik.handleChange}
        />
         
          </div>
          <div style={{display: 'flex', flexDirection: 'column', width: '32%'}}>
          <StyledLabel>Other Languages</StyledLabel>
          <StyledInput
          type='text'
          name='otherLanguage'
          value={formik.values.otherLanguage}
          onChange={formik.handleChange}
          />
          </div>

          <div style={{display:'flex', width: '33%', flexDirection: 'column', justifyContent: 'center',}}>
          <StyledLabel>Fluent in English</StyledLabel>
          <div>
  <label className='m-2'>
    <input
      className='m-2'
      type="radio"
      name='answer'
      value="Yes"
      checked={formik.values.answer === 'Yes'}
      onChange={formik.handleChange}
    />
    Yes
  </label>

  <label className='m-2'>
    <input
      className='m-2'
      type="radio"
      name='answer'
      value="No"
      checked={formik.values.answer === 'No'}
      onChange={formik.handleChange}
    />
    No
  </label>
</div>
          </div>
        </div>


        {/* row 4 */}

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px'}}>
          <div style={{display: 'flex', width: '32%', flexDirection: 'column'}}>
          <StyledLabel>Current Grade Level</StyledLabel>
            <StyledSelect
            name='currentGradeLevel'
            value={formik.values.currentGradeLevel}
            onChange={formik.handleChange}
            >
              <option disabled>--- select grade ----</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>G1</option>
              <option>G2</option>
              <option>G3</option>
              <option>G4</option>
              <option>G5</option>
              <option>G6</option>
              <option>G7</option>
              <option>G8</option>
            </StyledSelect>
          
          </div>
          <div style={{display: 'flex', width: '32%', flexDirection: 'column'}}>
          <StyledLabel>Grade Applying For</StyledLabel>
            <StyledSelect
            name='GradeLevelApplyingFor'
            value={formik.values.GradeLevelApplyingFor}
            onChange={formik.handleChange}
            >
              <option disabled>--- select grade ----</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>G1</option>
              <option>G2</option>
              <option>G3</option>
              <option>G4</option>
              <option>G5</option>
              <option>G6</option>
              <option>G7</option>
              <option>G8</option>
            </StyledSelect>
          
          </div>
          <div style={{display: 'flex', width: '32%', flexDirection: 'column'}}>
          <StyledLabel>Applying for (Year)</StyledLabel>
          <select
               style={{
                minWidth: '120px', 
                border: `1px solid #cdc9c6`,
                padding: '6px',
                '&:focus': {
                  outline: 'none', 
                  borderColor: `1px solid #cdc9c6`,
                  boxShadow: `none  `, 
                },
              }}
                name='applyingForYear'
                value={formik.values.applyingForYear}
                onChange={formik.handleChange}
              >
                {Array.from({ length: 50 }, (_, i) => (
                  <option key={i} value={2023 - i}>
                    {2023 - i}
                  </option>
                ))}
              </select>
          </div>
        </div>
        </div>

        {/* Mother Information */}
        <h1 style={{fontWeight: '600', margin: '25px 0px'}}>&#x2022;&nbsp;MOTHER DETAILS</h1>
        <div>
        <div>
        <StyledLabel>Mother's Name</StyledLabel>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px', }}> 
        <StyledInput 
           style={{width: '100%'}} 
          type="text"
          placeholder="Mother's Fullname" 
          name='motherFullName'
          value={formik.motherFullName}
          onChange={formik.handleChange}
          required
        />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px',}}>
         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '15px 0px', width: '49%'}}>
         <StyledLabel>Phone Number</StyledLabel>
         <StyledInput
         type='number'
         name='phoneNumberM'
         value={formik.values.phoneNumberM}
         onChange={formik.handleChange}
         />
         </div>
         <div style={{display: 'flex', width: '49%', flexDirection: 'column', justifyContent: 'space-between', margin: '15px 0px',}}>
         <StyledLabel>Email</StyledLabel>
         <StyledInput 
         name='email'
         value={formik.values.email}
         onChange={formik.handleChange}
         />
         </div>
        </div>
        </div>

        {/* Father's Details */}
        <h1 style={{fontWeight: '600', margin: '25px 0px'}}>&#x2022;&nbsp;FATHER DETAILS</h1>
        <div>
        <div>
        <StyledLabel>Father's Name</StyledLabel>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px', }}> 
        <StyledInput 
           style={{width: '100%'}} 
          type="text"
          placeholder="Father's Fullname"
          name='fatherFullName'
          value={formik.values.fatherFullName}
          onChange={formik.handleChange}
          required
        />
        
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px',}}>
         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '15px 0px', width: '49%'}}>
         <StyledLabel>Phone Number</StyledLabel>
         <StyledInput 
         type='number'
         name='phoneNumberF'
         value={formik.values.phoneNumberF}
         onChange={formik.handleChange}
         />
         </div>
         <div style={{display: 'flex', width: '49%', flexDirection: 'column', justifyContent: 'space-between', margin: '15px 0px',}}>
         <StyledLabel>Email</StyledLabel>
         <StyledInput 
         type='email'
         />
         </div>
        </div>
        </div>
           {/* current schooling */}
           <h1 style={{fontWeight: '600', marginTop: '25px'}}>&#x2022;&nbsp;CURRENT SCHOOLING</h1>
           <p style={{fontStyle: 'italic', marginBottom: '10px'}}>This form is to be filled by student transfred from another school to our school.</p>
        <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '48%'}}>
        <StyledLabel>Name of Current School</StyledLabel>
        
        <StyledInput
          type="text"
          placeholder='Name of School'
          name='NameOfCurrentSchool'
          value={formik.values.NameOfCurrentSchool}
          onChange={formik.handleChange}
        />
        </div>
       
        <div style={{display: 'flex', flexDirection: 'column', width: '48%'}}>
        <StyledLabel>Address of the School</StyledLabel>
        <StyledInput
          type="text"
          placeholder='First'
          name='CountryOfCurrentSchool'
          value={formik.values.CountryOfCurrentSchool}
          onChange={formik.handleChange}
        />
        </div> 
        </div>
        <div>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', margin: '10px 0px'}}>
        <StyledLabel>Year/​Grade of Leaving</StyledLabel>
        
        <StyledInput
          type="text"
          placeholder='First'
          name='YearOrGradeOfLeavingCurrentSchool'
          value={formik.values.YearOrGradeOfLeavingCurrentSchool}
          onChange={formik.handleChange}
        />
        </div> 
        </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{width: '65%'}}>
        <StyledLabel>It is possible that your child requires special educational support?</StyledLabel>
        <div>
      <label className='m-2'>
        <input
          className='m-2'
          type="radio"
          name='specialEducationalSupport'
          checked={formik.values.specialEducationalSupport === true}
          onChange={() => formik.setFieldValue('specialEducationalSupport', true)}
        />
        Yes
      </label>
      <label className='m-2'>
        <input
          className='m-2'
          type="radio"
          name='specialEducationalSupport'
          checked={formik.values.specialEducationalSupport === false}
          onChange={() => formik.setFieldValue('specialEducationalSupport', false)}
        />
        No
      </label>
    </div>


        </div>
        <div style={{width: '35%',}}>
        <StyledLabel>If YES please give details</StyledLabel>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <StyledInput
          name='specialEducationalSupportDetails'
          value={formik.values.specialEducationalSupportDetails}
          onChange={formik.handleChange}
          />
        </div>
        </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{width: '65%'}}>
        <StyledLabel>Does your child receive special educational support at his/​her current school?</StyledLabel>
        <div>
  <label className='m-2'>
    <input 
      className='m-2'
      type="radio"
      name='Doesyourchildreceivespecialeducationalsupportathishercurrentschool'
      value="Yes"
      checked={formik.values.Doesyourchildreceivespecialeducationalsupportathishercurrentschool === 'Yes'}
      onChange={formik.handleChange}
    />
    Yes
  </label>
  <label className='m-2'>
    <input
      className='m-2'
      type="radio"
      name='Doesyourchildreceivespecialeducationalsupportathishercurrentschool'
      value="No"
      checked={formik.values.Doesyourchildreceivespecialeducationalsupportathishercurrentschool === 'No'}
      onChange={formik.handleChange}
    />
    No 
  </label>
  <p style={{ fontStyle: 'italic', fontSize: '13px' }}>
    Some additional information or disclaimer.
  </p>
</div>


        </div>
        <div style={{width: '35%',}}>
        <StyledLabel>If YES please give details</StyledLabel>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <StyledInput/>
        </div>
        </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <StyledLabel>Are there any family circumstances which you feel we should be aware of?</StyledLabel>
        <StyledTextArea></StyledTextArea>
        </div>

        <div>
    <h1 style={{fontWeight: '600', marginTop: '25px', marginBottom: '10px'}}>&#x2022;&nbsp;TERMS AND CONDITIONS</h1>
    <div style={{margin: '5px 0px'}}>
      <input style={{marginRight: '10px'}} type='checkbox' required />
      I understand that to confirm this application I have to complete the payment of the 100 USD for the registration fee
    </div>
    <div style={{margin: '5px 0px'}}>
      <input style={{marginRight: '10px'}} type='checkbox' required />
      I understand that if I withdraw my application, my registration fee will NOT be refundable  
    </div>
    <div style={{margin: '5px 0px'}}>
      <input style={{marginRight: '10px'}} type='checkbox' required />
      I declare that I am the child's parent/legal guardian 
    </div>
    <div style={{margin: '5px 0px'}}>
      <input style={{marginRight: '10px'}} type='checkbox' required />
      I declare also that I am aware that you will contact my child's current school for a reference.
    </div>
  </div>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </RegistrationFormContainer>
    </Page>
  );
};

export default StudentRegistration;
