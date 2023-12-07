import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
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
  // State variables for form fields
  const [studentName, setStudentName] = React.useState('');
  const [dob, setDOB] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [motherTongue, setMotherTongue] = React.useState('');
  // ... other state variables for the remaining fields

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

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
              <h1 style={{fontWeight: '700', fontSize: '18px', color: 'darkblue'}}>PRE- APPLICATION FORM HOPE ACADEMY OF<br></br> BOSHOFTU</h1>
          </Header>
          <Address>
            <h1>BISHOFTU, ETHIOPIA</h1>
            <h1>Tel. 09-04040404, 09-07050505</h1>
            <h1>Email: admissions@hopeaccademybishoftu.org</h1>
          </Address>
          <p style={{  display: 'flex', margin: '15px 0px', justifyContent: 'center', textAlign: 'start'}}>To ensure that your child's application is processed efficiently, please fill this form completely with the necessary information. Please note that applications cannot be processed unless ALL sections of the Application Form are completed. If a section does not apply, please mark as "N/A" (not applicable) thus indicating that the information in the section has been noted.</p>

      
      <form onSubmit={handleSubmit}>
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
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <StyledInput
        style={{width: '32%'}} 
          type="text"
          value={studentName}
          placeholder='Middle'
          onChange={(e) => setStudentName(e.target.value)}
        />
        <StyledInput
        style={{width: '32%'}} 
          placeholder='Last'
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px'}}>
          <div style={{display: 'flex', flexDirection: 'column', width: '66%'}}>
          <StyledLabel>Date of Birth</StyledLabel>
         
          <StyledInput
          type="date"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
        
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', width: '32%', justifyContent: 'center'}}>
          <StyledLabel>Gender</StyledLabel>
           <div>
           <label className='m-2'>
            <input 
              className='m-2'
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label >
            <input
              className='m-2'
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
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
              value="Muslim"
              checked={gender === 'muslim'}
              onChange={(e) => setGender(e.target.value)}
            />
            Muslim
          </label>

          <label>
            <input
              className='m-2'
              type="radio"
              value="christian"
              checked={gender === 'christian'}
              onChange={(e) => setGender(e.target.value)}
            />
            Christian
          </label>
          <StyledInput
          className='ml-4'
          style={{width: '75%'}}
          type="text"
          placeholder='Other'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        </div>
          </div>
        
        
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <StyledLabel>Nationality</StyledLabel>
      <StyledInput
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

      </div>

      {/* row 3 */}
     <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px'}}>
          <div style={{display: 'flex', width: '32%', flexDirection: 'column'}}>
          <StyledLabel>MotherTongue</StyledLabel>
         
          <StyledInput
          type="text"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
         
          </div>
          <div style={{display: 'flex', flexDirection: 'column', width: '32%'}}>
          <StyledLabel>Other Languages</StyledLabel>
          <StyledInput/>
          </div>

          <div style={{display:'flex', width: '33%', flexDirection: 'column', justifyContent: 'center',}}>
          <StyledLabel>Fluent in English</StyledLabel>
        <div>
          <label className='m-2'>
            <input
              className='m-2'
              type="radio"
              value="Muslim"
              checked={gender === 'muslim'}
              onChange={(e) => setGender(e.target.value)}
            />
            Yes
          </label>

          <label>
            <input
              className='m-2'
              type="radio"
              value="christian"
              checked={gender === 'christian'}
              onChange={(e) => setGender(e.target.value)}
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
            <StyledSelect>
              <option disabled>--- select grade ----</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
            </StyledSelect>
          
          </div>
          <div style={{display: 'flex', width: '32%', flexDirection: 'column'}}>
          <StyledLabel>Grade level applying for?</StyledLabel>
        
            <StyledSelect>
              <option disabled>--- select grade ----</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
            </StyledSelect>
          
          </div>
          <div style={{display: 'flex', width: '32%', flexDirection: 'column'}}>
          <StyledLabel>Applying for (Year)</StyledLabel>
            <StyledSelect>
              <option disabled>--- select grade ----</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
            </StyledSelect>

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
           style={{width: '32%'}} 
          type="text"
          placeholder='First'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <StyledInput
        style={{width: '32%'}} 
          type="text"
          value={studentName}
          placeholder='Middle'
          onChange={(e) => setStudentName(e.target.value)}
        />
        <StyledInput
        style={{width: '32%'}} 
          placeholder='Last'
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px',}}>
         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '15px 0px', width: '49%'}}>
         <StyledLabel>Phone Number</StyledLabel>
         <StyledInput />
         </div>
         <div style={{display: 'flex', width: '49%', flexDirection: 'column', justifyContent: 'space-between', margin: '15px 0px',}}>
         <StyledLabel>Email</StyledLabel>
         <StyledInput />
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
           style={{width: '32%'}} 
          type="text"
          placeholder='First'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <StyledInput
        style={{width: '32%'}} 
          type="text"
          value={studentName}
          placeholder='Middle'
          onChange={(e) => setStudentName(e.target.value)}
        />
        <StyledInput
        style={{width: '32%'}} 
          placeholder='Last'
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '15px 0px',}}>
         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '15px 0px', width: '49%'}}>
         <StyledLabel>Phone Number</StyledLabel>
         <StyledInput />
         </div>
         <div style={{display: 'flex', width: '49%', flexDirection: 'column', justifyContent: 'space-between', margin: '15px 0px',}}>
         <StyledLabel>Email</StyledLabel>
         <StyledInput />
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
          placeholder='First'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        </div>
       
        <div style={{display: 'flex', flexDirection: 'column', width: '48%'}}>
        <StyledLabel>Address of the School</StyledLabel>
        
        <StyledInput
          type="text"
          placeholder='First'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        </div> 
        
        </div>
        <div>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', margin: '10px 0px'}}>
        <StyledLabel>Year/​Grade of Leaving</StyledLabel>
        
        <StyledInput
          type="text"
          placeholder='First'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
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
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            Yes
          </label>
          <label >
            <input
              className='m-2'
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            No
          </label>
        </div>
        </div>
        <div style={{width: '35%',}}>
        <StyledLabel>If YES please give details</StyledLabel>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <StyledInput/>
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
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            Yes
          </label>
          <label >
            <input
              className='m-2'
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            No
          </label>
          <p style={{fontStyle: 'italic', fontSize: '13px'}}>The school reserves the right to withdraw the place offered before or after admission in the light of incomplete disclousure.</p>
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
          <input type='checkbox'/> I understand that  to confirm this application I have to complete the payment of the 100 USD for registration fee
        </div>
        <div style={{margin: '5px 0px'}}>
          <input type='checkbox'/> I understand that if I withdraw my application, my registration fee will NOT be refundable  
        </div>
        <div style={{margin: '5px 0px'}}>
          <input type='checkbox'/> I declare that I am the child's parent/legal guardian 
        </div>
        <div style={{margin: '5px 0px'}}>
          <input type='checkbox'/> I declare also that I am aware that you will contact my child's current school for a reference.
        </div>
        </div>
        <StyledButton type="submit">Submit</StyledButton>
      </form>
    </RegistrationFormContainer>
    </Page>
  );
};

export default StudentRegistration;