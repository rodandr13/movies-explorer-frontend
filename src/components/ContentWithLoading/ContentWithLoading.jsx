import React from 'react';
import Preloader from '../Preloader/Preloader';

function ContentWithLoading({ isLoading, children }) {
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        children
      )}
    </>
  );
}

export default ContentWithLoading;
