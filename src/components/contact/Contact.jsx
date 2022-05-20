import emailjs from 'emailjs-com';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Separator from '../../assets/Separator.png';
import './contact.css';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USERID;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (e) => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#form', USER_ID)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message sent successfully'
        });
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text
        });
      });
    reset();
  };

  const handleError = (errors) => console.log(errors);

  const error = {
    name: { required: "Your name is required" },
    email: { required: "Your email address is required" },
  };

  return (
    <div className='app__contact grad__abt section__padding' id='contact'>
      <div className="app__contact-heading">
        <h1>GET IN TOUCH</h1>
      </div>
      <div className="app__contact-content">
        <p>I'd love to know about your project.</p>
      </div>
      <img src={Separator} alt="img" />

      <div className="app__contact-form">

        <form id='form' onSubmit={handleSubmit(onSubmit, handleError)}>
          <small className='text-danger'>
            {errors?.name && errors.name.message}
          </small>
          <input
            name='name'
            type='text'
            placeholder='Enter Your Name'
            {...register("name", error.name)}
          />

          <small className='text-danger'>
            {errors?.email && errors.email.message}
          </small>
          <input
            name='email'
            type='email'
            placeholder='Enter Your Email'
            {...register("email", error.email)}
          />

          <textarea
            name='message'
            type='text'
            placeholder='Your Message'
            {...register("message", { required: true })}
          />

          <input type="submit" />
        </form>

      </div>

    </div>
  );
};

export default Contact;
