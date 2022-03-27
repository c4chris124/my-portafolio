export const validate = (input) => {
  let errors = {};

  if (!input.user_name) {
    errors.user_name = "Your name is required";
  } else if (!/^[a-zA-Z]+$/.test(input.user_name)) {
    errors = "a valid Name is required, (letters only)";
  }

  if (!input.user_subject) {
    errors.user_subject = "Please tell me the reason you want to contact me";
  }

  if (!input.user_email) {
    errors.user_email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input.user_email)
  ) {
    errors.user_email = "A valid email is required, ex. example@example.com";
  }

  if (!input.message) {
    errors.message = "Your message is so important";
  }

  return errors
};
