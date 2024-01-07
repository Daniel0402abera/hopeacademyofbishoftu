import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const CardContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: roboto;
  margin: 20px;
  padding: 20px;
  width: 400px;
  min-height: 400px;'
`;

const BlogImage = styled.img`
  width: 400px;
  height: 200px;
  object-fit: contain;
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
const BlogCard = ({ imageUrl, title, description, readMore }) => {

  return (
    <CardContainer>
      <BlogImage src={imageUrl} alt={title} />
      <BlogContent>
        <BlogTitle>{title}</BlogTitle>
        <BlogDescription>{description.slice(0,40)}...</BlogDescription>
      </BlogContent>
      <Link href={readMore}>Read More</Link>
    </CardContainer>
  );
};
export default BlogCard;
