import React, { PropsWithChildren, useRef } from 'react';

const Anuncio: React.FC<PropsWithChildren> = ({ children }) => {
  const botaoAnuncio = useRef<HTMLAnchorElement>(null);

  return (
    <>
      <div onClick={() => {
        //if (process.env.NODE_ENV === 'production')
        botaoAnuncio.current?.click();
        // else
        //   console.log('aconteceu click e não vou exibir o anuncio pq estou programando');
      }}>
        {children}
      </div>
      <a ref={botaoAnuncio}
        rel="noreferrer"
        target="_blank"
        hidden
        href={"https://www.effectiveratecpm.com/bs3yvzg1?key=ab607eb16f9a5cf1c6b1dc5ee6bece67"}>Anuncio</a>
    </>
  )
}

export default Anuncio;