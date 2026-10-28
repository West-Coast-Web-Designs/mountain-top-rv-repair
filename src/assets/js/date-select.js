// Require service to be scheduled at least 3 days out
const serviceDateInput = document.getElementById('service-date');

if (serviceDateInput) {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 3);
  const yyyy = minDate.getFullYear();
  const mm = String(minDate.getMonth() + 1).padStart(2, '0');
  const dd = String(minDate.getDate()).padStart(2, '0');
  const minDateString = `${yyyy}-${mm}-${dd}`;
  serviceDateInput.min = minDateString;

  // Browsers (notably iOS Safari) still allow typing/picking dates before min,
  // so bump any early date up to the minimum on blur
  serviceDateInput.addEventListener('blur', function () {
    if (serviceDateInput.value && serviceDateInput.value < minDateString) {
      serviceDateInput.value = minDateString;
    }
  });
}
