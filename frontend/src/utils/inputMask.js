export function phone(e) {
  // Regex
  // (61) 98855-6600

  e.currentTarget.maxLength = 15;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  e.currentTarget.value = value;

  return e;
}
