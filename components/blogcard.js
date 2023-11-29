import React from 'react';
import styled from 'styled-components';
const CardContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 400px;
  height: 450px; 
`;

const BlogImage = styled.img`
  width: 400px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const BlogContent = styled.div`
  width: 400px;
  padding: 16px;
`;

const BlogTitle = styled.h2`
  width: 400px;
  margin-top: 0;
  font-size: 1.5rem;
`;

const BlogDescription = styled.p`
  width: 400px;
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
const BlogCard = ({ imageUrl, title, description }) => {
  return (
    <CardContainer>
      <BlogImage src={imageUrl} alt={title} />
      <BlogContent>
        <BlogTitle>{title}</BlogTitle>
        <BlogDescription>{description.slice(0,50)}</BlogDescription>
      </BlogContent>
      <ReadMoreButton >Read More</ReadMoreButton>
    </CardContainer>
  );
};
export default BlogCard;
