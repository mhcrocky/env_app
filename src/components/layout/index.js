import Sidebar from '../sidebar'
import React, { useEffect } from "react";

import { useOktaAuth } from "@okta/okta-react";

export default function Layout({ children }) {
  const { authState, oktaAuth } = useOktaAuth();

  useEffect(() => {
    async function authenticate() {
      if (!authState) return;

      if (!authState.isAuthenticated) {
        await oktaAuth.signInWithRedirect('/resource');
      }
    }

    authenticate();
  }, [authState, oktaAuth]);

  if (authState?.isAuthenticated) {
    return (
      <div className='h-full w-full'>
        <Sidebar active={children.key} />
        <div className='p-5 mt-4 ml-[48px] md:ml-[162px]'>
          <div className='m-auto rounded-lg shadow-lg p-6 bg-white'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}