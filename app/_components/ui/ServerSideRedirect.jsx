function ServerSideRedirect({ path }) {
  return <input type='hidden' name='callbackUrl' value={path} />;
}

export default ServerSideRedirect;
