// pages/404.js
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #e74c3c;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #95a5a6;
`;

const StyledLink = styled.p`
  color: #3498db;
  text-decoration: underline;
  cursor: pointer;
`;

const NotFoundPage = () => {

  
  return (
    <Container>
      <Title>404 - Not Found</Title>
      <Description>
        The page you are looking for might have been removed or is temporarily unavailable.
      </Description>
      <Link href="/">
        <StyledLink>Go back to the home page</StyledLink>
      </Link>
    </Container>
  );
};

export default NotFoundPage;
