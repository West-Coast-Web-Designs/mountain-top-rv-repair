// Require service to be scheduled at least 3 days out
const serviceDateInput = document.getElementById('service-date');

if (serviceDateInput) {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 3);
  const yyyy = minDate.getFullYear();
  const mm = String(minDate.getMonth() + 1).padStart(2, '0');
  const dd = String(minDate.getDate()).padStart(2, '0');
  serviceDateInput.min = `${yyyy}-${mm}-${dd}`;
}
