import React, { PropsWithChildren, useRef, useState } from 'react';

const Anuncio: React.FC<PropsWithChildren> = ({ children }) => {
  const botaoAnuncio = useRef<HTMLAnchorElement>(null);

  const urlAnuncio =
    process.env.NODE_ENV === 'production'
      ? "https://www.effectiveratecpm.com/bs3yvzg1?key=ab607eb16f9a5cf1c6b1dc5ee6bece67"
      : "https://www.google.com.br/?hl=pt-BR";

  const abrirPupUnder = () => {
    window.open(urlAnuncio,
      'popunder',
      'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=1,height=1,left=500,top=500');

  }


  return (
    <>
      <div onClick={() => {
        if (process.env.NODE_ENV === 'production')
          abrirPupUnder();
      }}>
        {children}
      </div>
      <a ref={botaoAnuncio}
        rel="noreferrer"
        target="_blank"
        hidden
        href={urlAnuncio}>Anuncio</a>
    </>
  )
}

export default Anuncio;