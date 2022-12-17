import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import { RequiredAuth } from './secureRoute';

import Home from '../pages/home';
import Resource from '../pages/resource';
import Environment from '../pages/enviroment';
import Report from '../pages/report';
import Job from '../pages/job';
import Help from '../pages/help';
import Loading from '../pages/loading';

import Layout from '../components/layout'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/'  exact={true} element={<Home />} />
            <Route path='login/callback' element={<LoginCallback loadingElement={<Loading />} />} />
            {/* <Route path='/resource' element={<RequiredAuth />}> */}
            <Route path='/resource' element={<Layout><Resource key={'Resource'}/></Layout>} />
            <Route path='/environment' element={<Layout><Environment key={'Environment'} /></Layout>} />
            <Route path='/report' element={<Layout><Report key={'Report'} /></Layout>} />
            <Route path='/job' element={<Layout><Job key={'Job'} /></Layout>} />
            <Route path='/help' element={<Layout><Help key={'Help'} /></Layout>} />
            {/* </Route> */}
        </Routes>
    );
};

export default AppRoutes;