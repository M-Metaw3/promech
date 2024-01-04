// import { redirect } from 'next/navigation'

// import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';

// const checkTokenAndNavigate = () => {
//   // const router = useRouter();
//   // const token = JSON.parse(Cookies.get('token'))?JSON.parse(Cookies.get('token')):null
// const users = Cookies.get("token")?JSON.parse(Cookies.get("token")):null


//   if (users) {
//     console.log(users)
//  return token;
//   }else{
// return  redirect('/login')
//   }

// };
// export default checkTokenAndNavigate;
// authUtils.js


import Cookies from 'js-cookie';

const TOKEN_COOKIE_KEY = 'authToken';

export const setAuthTokenCookie = (token) => {
  Cookies.set(TOKEN_COOKIE_KEY, token, { expires: 7 }); // Adjust the expiration as needed
};

export const getAuthTokenCookie = () => {
  return Cookies.get(TOKEN_COOKIE_KEY);
};

export const removeAuthTokenCookie = () => {
  Cookies.remove(TOKEN_COOKIE_KEY);
};

