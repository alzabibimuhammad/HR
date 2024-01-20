// components/Breadcrumbs.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
  &:hover {
    color: #6AB2DF;
  }
`;


const BreadcrumbsContainer = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 30px;
  margin-left: 25px;
`;

const Separator = styled.span`
  margin: 0 5px;
  color: inherit;
`;

const Heading = styled.h3`
  margin: 0;
  display: flex;
`;

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

  const crumbs = pathSegments.map((segment, index) => {
  const route = `/${pathSegments.slice(0, index + 1).join('/')}`;

    return {
      text: segment,
      link: route === '' ? '/' : route,
    };
  });

  return (
    <>

    <BreadcrumbsContainer>
      {crumbs.map((crumb, index) => (
        <BreadcrumbLink key={index} href={crumb.link}>
          <Heading>

            {crumb.text} {index !== crumbs.length - 1 && '/'}
          </Heading>
        </BreadcrumbLink>
      ))}
    </BreadcrumbsContainer>
    </>
  );
};

export default Breadcrumbs;
