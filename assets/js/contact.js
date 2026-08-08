(() => {
  const form = document.querySelector('[data-quote-form]');
  if (!form) return;

  const group = form.querySelector('[data-service-group]');
  const checkboxes = [...group.querySelectorAll('input[type="checkbox"]')];
  const error = group.querySelector('[data-service-error]');
  const dateInput = form.querySelector('#preferred-date');

  // Prevent choosing a date in the past.
  if (dateInput) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];
    dateInput.min = localDate;
  }

  const validateServices = () => {
    const valid = checkboxes.some((box) => box.checked);
    group.classList.toggle('has-error', !valid);
    error.hidden = valid;
    return valid;
  };

  checkboxes.forEach((box) => {
    box.addEventListener('change', validateServices);
  });

  form.addEventListener('submit', (event) => {
    const nativeValid = form.checkValidity();
    const servicesValid = validateServices();

    if (!nativeValid || !servicesValid) {
      event.preventDefault();
      form.reportValidity();

      if (!servicesValid) {
        group.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
})();
