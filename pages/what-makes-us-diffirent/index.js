'use client'
import useGetData from '../api/useGetData';

import PagesContainer from '../../components/pagesContainer';
import { CircularProgress } from '@mui/material';
import PopupWidget from '../../components/popupWidget';

export default function WhatMakesUsDiffirent() {

  let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/overview?populate=*`;
  // let endpoint = 'http://localhost:1337/api/overview?populate=*';
  const {
    data,
    isLoading,
    isError,
    isFetching
  } = useGetData(endpoint);
  
  if (isLoading) {
    return  <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'50vh'}} >
      <CircularProgress color="primary" />
    </div>;
  }

    return (
      <>
       <PagesContainer title={'What Makes Us Diffirent'} props={data}/>
      <PopupWidget />
      </>
     

    )
  }
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  