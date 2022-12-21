
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import Routes from './pages/router';
import { oktaAuthConfig } from "./utils/config";

function App() {
    const oktaAuth = new OktaAuth(oktaAuthConfig);

    const navigate = useNavigate();
    const restoreOriginalUri = (_oktaAuth, originalUri) => {
        navigate(toRelativeUrl(originalUri || '/', window.location.origin));
    };

    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Routes />
        </Security>
    );
}

export default App;