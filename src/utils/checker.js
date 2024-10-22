export function validateEmail(email) {
  var pattern = /\S+@\S+\.\S+/;
  return pattern.test(String(email).toLowerCase());
}
export function validatePhone(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
}
