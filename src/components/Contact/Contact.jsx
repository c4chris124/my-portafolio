import React, { useRef, useState } from "react";
import { Alert, IconButton, Collapse } from "@mui/material";
import { LocalPhone, Email, Apartment, Send, Close } from "@mui/icons-material";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { validate } from "./validation";

const Contact = () => {
  const classes = useStyles();
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(true);
  const [errors, setErrors] = useState({});
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [input, setInput] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });

  

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleBlurError = (e) => {
    setErrors(validate(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zoo8p27",
        "template_sfmfxlv",
        formRef.current,
        "Nh6lP2LvX564Neg81"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const checkProperties = (obj) => {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] !== "") return false;
    }
    return true;
  };

  return (
    <div className="contact-container">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discus your projects</h1>
          <div className="c-info">
            <div className="c-info-item">
              <LocalPhone className={classes.items} />
              +502 31553614
            </div>
            <div className="c-info-item">
              <Email className={classes.items} />
              c4chris124@gmail.com
            </div>
            <div className="c-info-item">
              <Apartment className={classes.items} />
              Guatemala city, Guatemala
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story</b> Get in touch. Always freelancing if the
            right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form_field_group field">
              <input
                className={`text_field ${darkMode && "black"}`}
                type="text"
                name="user_name"
                onChange={handleChange}
                onBlur={handleBlurError}
                value={input.user_name}
              />
              <label htmlFor="" className="label_field">
                Name
              </label>
              {errors.user_name ? (
                <p className="field_error">{errors.user_name}</p>
              ) : null}
            </div>

            <div className="form_field_group field">
              <input
                className={`text_field ${darkMode && "black"}`}
                type="text"
                name="user_subject"
                onChange={handleChange}
                onBlur={handleBlurError}
                value={input.user_subject}
              />
              <label htmlFor="" className="label_field">
                Subject
              </label>
              {errors.user_subject ? (
                <p className="field_error">{errors.user_subject}</p>
              ) : null}
            </div>

            <div className="form_field_group field">
              <input
                className={`text_field ${darkMode && "black"}`}
                type="text"
                name="user_email"
                onChange={handleChange}
                onBlur={handleBlurError}
                value={input.user_email}
              />
              <label htmlFor="" className="label_field">
                Email
              </label>
              {errors.user_email ? (
                <p className="field_error">{errors.user_email}</p>
              ) : null}
            </div>

            <div className="form_field_group field">
              <textarea
                className={`text_field ${darkMode && "black"} textarea`}
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlurError}
                value={input.message}
              />
              <label htmlFor="" className="label_field">
                Message
              </label>
              {errors.message ? (
                <p className="field_error">{errors.message}</p>
              ) : null}
            </div>
            <button
              className={`
                form_button 
                ${darkMode && "darkBtn"} 
                ${
                  !Object.keys(errors).length && !checkProperties(input)
                    ? ""
                    : "disabled"
                } 
              `}
              disabled={
                !Object.keys(errors).length && !checkProperties(input)
                  ? false
                  : true
              }
            >
              <span>
              Send
              </span>
              <Send />
            </button>
            {done ? (
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                        setInput({});
                      }}
                    >
                      <Close fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Sent!
                </Alert>
              </Collapse>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
