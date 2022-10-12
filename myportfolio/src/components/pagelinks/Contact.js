// import React, {useState} from 'react';

// export default function Contact() {

//  const [name, setName] = useState ('');
//  const [email, setEmail] = useState ('');
//  const [message, setMessage] = useState ('');
//  const [errorMessage, setErrorMessage] = useState ('');

//  const handleInputChange = (e) => {
//   //getting the value and name of the input which triggered the change
//   const { target} = e;
//   const inputType = target.name;
//   const inputValue = target.Value;
  
//   //based on the input type, we set the state of either email, username and password

//   if(inputType === 'email') {
//    setEmail(inputvalue);
//    } else if (inputType === 'name') {
//     setName(inputvalue);
//     } else {
//      setMessage(inputvalue);
//      } 
//  };

//  const handleFormSubmit =(e) => {
//   e.preventDefault();

//   if(!name) {
//    setErrorMessage('Please leave your name!');
//    return;
//   } 
//   if(!email) {
//    setErrorMessage('Please leave your email!');
//    return;
//   }
//   if(!message) {
//    setErrorMessage('Please leave a message!');
//    return;
//   }
//   setName('');
//   setEmail('');
//   setMessage('');
//   setErrorMessage('');
//  };
 
//  return (
//   <div class="contact-page">
//    <h1>Contact</h1>
//    <form className='form'>
//     <input
//     value = {name}
//     name="name"
//     onChange={handleInputChange}
//     type="name"
//     placeholder='Name'
//     />
// <input
//     value = {email}
//     name="email"
//     onChange={handleInputChange}
//     type="email"
//     placeholder='Email'
//     />
// <textarea
//     value = {message}
//     name="message"
//     onChange={handleInputChange}
//     type="textarea"
//     placeholder='message...'
//     />
//     <button type="button" class="submit-btn" onClick={handleFormSubmit}>
//      Submit
//     </button>
//    </form>
//    {errorMessage && (
//     <div class="error">
// <p className="error-text"> {errorMessage}</p>
//     </div>
//    )}
//    <div class="email-copy">
//     <br></br>
//     <p>Feel Free to email me at: </p>
//     <a href='mailto:anuraagsaini@yahoo.co.in'
//     style={{
//      color:'red',
//      marginRight:'15px',
//      fontSize:'18px',
//     }} >
//      anuraagsaini@yahoo.co.in
//     </a>
//     <p>for any further enquiries!</p>
//    </div>
//   </div>
//  );
// }