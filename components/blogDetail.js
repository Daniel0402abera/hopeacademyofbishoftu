import React from 'react';
import styled from 'styled-components';
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: roboto;
  margin: 20px;
  padding: 50px;
  width: 100%;
  min-height: 400px;'
`;

const BlogImage = styled.img`
  width: 400px;
  height: 200px;
  object-fit: cover;
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
const ReadMoreButton = styled.button`
  border: none;
  background: none;
  color: #007bff;
  cursor: pointer;
  outline: none;
`;
const BlogDetails = ({ imageUrl, title, description }) => {
  return (
    <CardContainer>
      <BlogImage src={imageUrl} alt={title} />
      <BlogContent>
        <BlogTitle>{title}</BlogTitle>
        <BlogDescription>{description.slice(0,40)}...</BlogDescription>
      </BlogContent>
    </CardContainer>
  );
};
export default BlogDetails;
