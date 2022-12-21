import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import Sidebar from '../sidebar'
import userAction from '../../redux/action/userAction'

export default function Layout({ children }) {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function authenticate() {
      if (!authState) return;

      if (!authState.isAuthenticated) {
        oktaAuth.signInWithRedirect();
      } else {
        setUserInfo(authState.idToken.claims);
        // dispatch(userAction.setUser(authState.idToken.claims))
      }
    }

    authenticate();
  }, [authState, oktaAuth]);

  useEffect(() => {
    if (userInfo !== null) {
      axios.get('https://639feb7024d74f9fe829db07.mockapi.io/api/v1/user')
        .then(response => {
          dispatch(userAction.setUser(response.data[0]))
          // const exist = response.data.some(v => (v.email_id === userInfo.email))
          const exist = response.data.filter(val => (val.email_id === userInfo.email));
          if (exist.length === 0) {
            const users = { first_name: userInfo.first_name, last_name: userInfo.last_name, email_id: userInfo.email };
            axios.post('https://639feb7024d74f9fe829db07.mockapi.io/api/v1/user', users)
              .then(response => {
                if (response.data.status !== 'success') {
                  console.log(response.data);
                }
              });
          }
        });
    }
  }, [userInfo])

  if (authState?.isAuthenticated && userInfo) {
    return (
      <div className='h-full w-full'>
        <Sidebar active={children.key} />
        <div className='p-5 mt-4 ml-[48px] md:ml-[190px]'>
          <h2>Welcome {userInfo.name + '(' + userInfo.email + ')'}</h2>
          <div className='m-auto rounded-lg shadow-lg p-6 bg-white'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}