import React from 'react';
import styled from 'styled-components';
import useGetData from '../../api/useGetData';
import { useRouter } from 'next/router';
import Navbar from '../../../components/navbar';
const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
  width: 100%;
`;
const CardContainer = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  font-family: roboto;
  margin: 20px;
  padding: 50px;
  width: 50%;
`;

const BlogImage = styled.img`
  width: 900px;
  max-height: 500px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const BlogContent = styled.div`
  padding: 16px;
`;

const BlogTitle = styled.h2`
  font-weight: 600;
  margin-top: 0;
  font-size: 1.3rem;
`;

const BlogDescription = styled.p`
  color: #555;
  font-size: 1rem;
`;
const BlogDetails = ({ params }) => {
   const router = useRouter();
    const { id } = router.query; 
    let endpoints = `https://hopeschool.onrender.com/api/blogs/${id}?populate=*`;

    const {
        data: blog,
        isLoading: loading,
        isError: errorr,
        isFetching: fetching,
      } = useGetData(endpoints);
      console.log(blog?.data);
  return (
    
    <>
    <Container>
      <CardContainer>
      <BlogImage src={blog?.data?.attributes?.img?.data[0].attributes.url}  />
      <BlogContent>
        <BlogTitle>{blog?.data?.attributes.Title}</BlogTitle>
        <BlogDescription>{blog?.data?.attributes?.Description[0]?.children[0]?.text}</BlogDescription>
      </BlogContent>
    </CardContainer>
    </Container>
    </>
  );
};
export default BlogDetails;
