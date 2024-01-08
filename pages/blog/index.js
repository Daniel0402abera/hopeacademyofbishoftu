'use client'
import BlogCard from "../../components/blogcard";
import styled from 'styled-components';
import Navbar from "../../components/navbar";
import useGetData from "../api/useGetData";
import CircularProgress from '@mui/material/CircularProgress';
import PopupWidget from "../../components/popupWidget";
import { BallBeat } from "react-pure-loaders";
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 300px;
`;

export default function Blog(){
 
  let endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs?populate=*`;
  const {
    data: blog,
    isLoading: loading,
    isError: error,
    isFetching: fetching,
  } = useGetData(endpoint);
  const blogs = blog?.data;

  if (loading) {
    return  <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'50vh'}} >

      <BallBeat
          color={'#123abc'}
          loading={loading}
        />
    </div>;
  }


  return(
  <>

  <CardContainer>
    {
      blogs?.map((blog) => {
        return fetching ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'darkblue', fontSize: '14px', fontWeight: '500'}}><CircularProgress color="primary" /></div> : blog ?
        <BlogCard readMore={`/blog/${blog.id}`} title={blog?.attributes?.Title} description={blog?.attributes?.Description[0].children[0].text} imageUrl={blog?.attributes?.img?.data[0].attributes.url}/> : 'No blogs ...'
      })
    }
    </CardContainer>
    <PopupWidget />
  </>)
}