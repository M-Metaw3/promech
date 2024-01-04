"use client"
// import { useEffect, useState } from 'react';


// import { getAuthTokenCookie } from '../utils/auth';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
// const PrivateRoute = ({ children }) => {
//   const router = useRouter();
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     //   const { push } = useRouter();
//     const authToken = getAuthTokenCookie();
//     if (!authToken) {
//       // User is not authenticated, redirect to login page
//       redirect('/login');
//     } else {
//       // User is authenticated
//       setAuthenticated(true);
//     }
//   }, []);

//   return authenticated ? <>{children}</> : null;
// };

// export default PrivateRoute;
import { useEffect, useState } from 'react';
import { getAuthTokenCookie } from '../utils/auth';
// import { useRouter } from 'next/router';
// import { redirect } from 'next/dist/next-server/server/api-utils';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authToken = getAuthTokenCookie();
    if (!authToken) {
      // User is not authenticated, redirect to login page
      redirect('/login');
    } else {
      // User is authenticated
      setAuthenticated(true);
    }
  }, []);

  return authenticated ? <>{children}</> : null;
};

export default PrivateRoute;

