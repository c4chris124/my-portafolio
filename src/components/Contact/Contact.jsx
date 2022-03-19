import React, { useRef, useState } from "react";
import { TextField, Button, Alert, IconButton, Collapse } from "@mui/material";
import { LocalPhone, Email, Apartment, Send, Close } from "@mui/icons-material";
import { useStyles } from "./styles";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const classes = useStyles();
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState({})


  const handleChange = (e) =>{
    setInput({...input, [e.target.name]: e.target.value})
  }

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
              <LocalPhone className={classes.root} />
              +502 31553614
            </div>
            <div className="c-info-item">
              <Email className={classes.root} />
              c4chris124@gmail.com
            </div>
            <div className="c-info-item">
              <Apartment className={classes.root} />
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
            <TextField
              className={classes.textFields}
              label="Name"
              variant="outlined"
              name="user_name"
              onChange={handleChange}
              error={input.user_name ? false : true}
            />
            <TextField
              className={classes.textFields}
              label="Subject"
              variant="outlined"
              name="user_subject"
              onChange={handleChange}
              error={input.user_subject ? false : true}
            />
            <TextField
              className={classes.textFields}
              label="Email"
              variant="outlined"
              name="user_email"
              onChange={handleChange}
              error={input.user_email ? false : true}
            />

            <TextField
              className={classes.textArea}
              fullWidth
              label="Message"
              multiline
              rows={5}
              name="message"
              onChange={handleChange}
              error={input.message ? false : true}
            />

            <Button
              className={classes.button}
              variant="contained"
              color="success"
              startIcon={<Send />}
              type="submit"
              disabled={Object.keys(input).length == 4 ? false : true}
            >
              Send
            </Button>
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
