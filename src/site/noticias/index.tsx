import React, { useState } from 'react';
import ListPostsUi from '../../ui/listPosts';
import BarAnuncioUI from '../../ui/barAnuncioUI';

const NoticiasView: React.FC = () => {
  return (
    <>
      <ListPostsUi tipo='noticias' />
      <BarAnuncioUI />
    </>
  )
}

export default NoticiasView;  