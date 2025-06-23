export function applyFieldErrors(err, setError, setAuthError) {
  const fields = ['email', 'password', 'name'];
  fields.forEach((field) => {
    if (err[field]) {
      const message = Array.isArray(err[field]) ? err[field][0] : err[field];

      setError(field, { type: 'server', message });
    }
  });

  if (err.error) {
    console.error(er.error);

    setAuthError(err.error);
  }
}
