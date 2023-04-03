import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Container = styled.div.attrs({ className: 'container' })``;

export const Block = styled.div.attrs({})`
  padding: 5rem 1rem 4rem;
`;

export const TopPadding = styled.div`
  height: 56px;
  @media (min-width: 1025px) {
    height: 86px;
  }
`;
