'use client';
import { useEffect } from 'react';

export default function NotFound() {

  useEffect(() => {
    alert("잘못된 접근이에용~~");
    window.location.replace('/');
  }, []);

  return null; 
}