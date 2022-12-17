import React from 'react';
import { useOktaAuth } from '@okta/okta-react';


function Footer() {
  const { authState, oktaAuth } = useOktaAuth();

  const handleLogin = () => oktaAuth.signInWithRedirect();
  const handleLogout = () => oktaAuth.signOut();

  return (
    <footer>
      <hr />
      {
        !authState || !authState.isAuthenticated ?
        (
          <>
            <p>Please log in</p>
            <button type="button" onClick={handleLogin}>Login</button>
          </>
        ) :
        (
          <>
            <p>You&apos;re logged in!</p>
            <button type="button" onClick={handleLogout}>Logout</button>
          </>
        )
      }
    </footer>
  );
}

export default Footer;