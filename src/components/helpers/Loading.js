import React from 'react';
import styled from 'styled-components';
import SVGSpinner from '../svg/svg-spinner-balls';

const Styles = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  div {
    position: absolute;
    top: calc(50% - 200px);
    left: 50%;
    margin-left: -100px;
  }
`;

const Loading = () => {
  //
  return (
    <Styles>
      <div>
        <SVGSpinner />
      </div>
    </Styles>
  );
};

export default Loading;
