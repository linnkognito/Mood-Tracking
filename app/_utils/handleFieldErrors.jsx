export function applyFieldErrors(err, setError, setAuthError) {
  const fields = ['email', 'password', 'name'];
  fields.forEach((field) => {
    if (err[field]) {
      setError(field, { type: 'server', message: err[field][0] });
    }
  });

  if (err.error) {
    setAuthError(err.error);
  }
}
