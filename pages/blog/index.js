'use client'
import BlogCard from "../../components/blogcard";
import styled from 'styled-components';
import Navbar from "../../components/navbar";
import useGetData from "../api/useGetData";
import CircularProgress from '@mui/material/CircularProgress';
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 300px;
`;

export default function Blog(){
 
  let endpoint = `https://hopeschool.onrender.com/api/blogs?populate=*`;
  const {
    data: blog,
    isLoading: loading,
    isError: errorr,
    isFetching: fetching,
  } = useGetData(endpoint);
  const blogs = blog?.data;
  if (loading) {
    return  <div style={{display:'flex',justifyContent:'center', alignItems:'center', height:'50vh'}} >
      <CircularProgress color="primary" />
    </div>;
  }


  return(
  <>

  <CardContainer>
    {
      blogs?.map((blog) => {
        return blog ? 
        <BlogCard readMore={`/blog/${blog.id}`} title={blog?.attributes?.Title} description={blog?.attributes?.Description[0].children[0].text} imageUrl={blog?.attributes?.img?.data[0].attributes.url}/> : 'No blogs ...'
      })
    }
    </CardContainer>
  </>)
}