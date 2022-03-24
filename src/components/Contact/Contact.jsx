import React, { useRef, useState } from "react";
import { Alert, IconButton, Collapse } from "@mui/material";
import { LocalPhone, Email, Apartment, Send, Close } from "@mui/icons-material";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const classes = useStyles();
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState({});
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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
              />
              <label htmlFor="" className="label_field">
                Name
              </label>
            </div>

            <div className="form_field_group field">
              <input
                className={`text_field ${darkMode && "black"}`}
                type="text"
                name="user_subject"
                onChange={handleChange}
              />
              <label htmlFor="" className="label_field">
                Subject
              </label>
            </div>

            <div className="form_field_group field">
              <input
                className={`text_field ${darkMode && "black"}`}
                type="text"
                name="user_email"
                onChange={handleChange}
              />
              <label htmlFor="" className="label_field">
                Email
              </label>
            </div>

            <div className="form_field_group field">
              <textarea
                className={`text_field ${darkMode && "black"} textarea`}
                type="text"
                name="message"
                onChange={handleChange}
              />
              <label htmlFor="" className="label_field">
                Message
              </label>
            </div>

            <button className={`form_button ${darkMode && 'darkBtn'}`}>
              Send
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
