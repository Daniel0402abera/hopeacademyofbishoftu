import { CircularProgress } from "@mui/material";
import PagesContainer from "../../components/pagesContainer"
import useGetData from "../api/useGetData";
import PopupWidget from "../../components/popupWidget";

export default function OurCommunity() {

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
      <PagesContainer title={'Our Community'} props={data}/>
             <PopupWidget />
            </>
    )
  }
  
