'use client';
import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const DetailPage = () => {
  const router = useSearchParams();
  console.log(router);

  const previews = router.get('preview');

  console.log(previews);
  // const { query }: any = router;

  // const [ha, setHa] = useState('' as any);

  // const p = query.preview;

  // useEffect(() => {
  //   setHa(p);
  // }, [p]);

  return <div>{previews}</div>;
};

export default DetailPage;
