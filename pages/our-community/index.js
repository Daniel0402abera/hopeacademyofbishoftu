import { CircularProgress } from "@mui/material";
import PagesContainer from "../../components/pagesContainer"
import useGetData from "../api/useGetData";
import PopupWidget from "../../components/popupWidget";
import { BallBeat } from "react-pure-loaders";

export default function OurCommunity() {

  let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/community?populate=*`;
  
  const {
    data,
    isLoading,
    isError,
    isFetching
  } = useGetData(endpoint);
  
  if (isLoading) {
    return  <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'50vh'}} >

      <BallBeat
          color={'#123abc'}
          loading={isLoading}
        />
    </div>;
  }

    return (
  
      <>
      <PagesContainer title={'Our Community'} props={data}/>
             <PopupWidget />
            </>
    )
  }
  
