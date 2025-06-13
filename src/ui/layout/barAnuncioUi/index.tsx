import React from "react";
import { useState } from "react";

// REMOVER NA FIX/MASTER
const BarAnuncioUI: React.FC = () => {
  const urlAnuncio = 'https://www.effectiveratecpm.com/bs3yvzg1?key=ab607eb16f9a5cf1c6b1dc5ee6bece67';

  const [iframeSrc, setIframeSrc] = useState<string>(
    urlAnuncio
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      // Gera uma nova URL aleatória ou lógica de atualização
      setIframeSrc(
        urlAnuncio
      );
    }, 20000); // Atualiza a cada 20 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo no desmontar
  }, []);

  return (
    <iframe title='Anuncio' src={iframeSrc} width="95%" height="200" style={{
      marginBottom: 20
    }} />
  )
}

export default BarAnuncioUI;