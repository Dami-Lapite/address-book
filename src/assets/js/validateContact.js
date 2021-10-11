function isAlphabetic(str) {
  return str !== "" && !/[^a-z]/i.test(str);
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email !== "" && re.test(String(email).toLowerCase());
}

function validatePhone(phone_number) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phone_number !== "" && re.test(String(phone_number));
}

function checkContact(contact) {
  return (
    isAlphabetic(contact.first_name) &&
    isAlphabetic(contact.last_name) &&
    validateEmail(contact.email) &&
    validatePhone(contact.phone_number)
  );
}
