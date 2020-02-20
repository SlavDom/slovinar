import * as React from 'react';
import Link from "next/link";
import styled from 'styled-components';

const LinkA = styled.a`
  color: white;
  display: inline-block;
  font-weight: 500;
  &:hover {
    text-decoration: none;
  }
`;

const MyLink = ({ className, href, hasLabel }) => {
    return (
      <Link href={href}>
          <LinkA className={className}>{hasLabel}</LinkA>
      </Link>
    );
};

export default MyLink