"use client"
import React, { useEffect, useState } from 'react';
import PdfViewer from '@/components/Pdf';
import { getAuthTokenCookie } from '@/utils/auth';
import { useRouter } from 'next/navigation';

const YourPage = (): JSX.Element => {
  const [certificates, setCertificates] = useState<any>([]);
  const { push } = useRouter();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const tokenString = getAuthTokenCookie();
      const parseToken = tokenString && JSON.parse(tokenString);
      console.log(parseToken?.user?.id);

      if (!tokenString) {
        push('/login');
        return;
      } else {
        const response = await fetch(
          `http://promech-backend.addictaco.com/api/certificates/?populate[user][populate]=true&filters[users_permissions_user]=${parseToken.user.id}&populate[image][populate]=true&populate[pdf][populate]=true`
        );
        const datares = await response.json();
        console.log(datares.data);
        setCertificates(datares.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {certificates &&
        certificates?.map((el: any) => (
          <PdfViewer key={el.id} certificate={el} />
        ))}
    </div>
  );
};

export default YourPage;


