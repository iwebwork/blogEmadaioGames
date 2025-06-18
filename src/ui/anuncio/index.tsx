import React, { PropsWithChildren, useRef, useState } from 'react';
import hookApi from '../../hooks/api';
import { IResponseAnuncio } from './props';

const Anuncio: React.FC<PropsWithChildren> = ({ children }) => {
  const botaoAnuncio = useRef<HTMLAnchorElement>(null);
  const [url, setUrl] = useState("");

  const { post } = hookApi();

  React.useEffect(() => {
    getUrlAnuncio();
  }, []);

  const getUrlAnuncio = async () => {
    const result = (await post({ url: `/api/anuncios/selectTipo/${1}`, body: {} }));
    if (!result.isValid)
      return;

    const data: IResponseAnuncio = result.data;
    setUrl(data.corpo);
  }

  const abrirPupUnder = async () => {
    window.open(url.toString(),
      'popunder',
      'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=1,height=1,left=500,top=500');
  }

  return (
    <div onClick={abrirPupUnder}>
      {children}
      <a ref={botaoAnuncio}
        rel="noreferrer"
        target="_blank"
        hidden
        href={url}>Anuncio</a>
    </div>
  )
}

export default Anuncio;