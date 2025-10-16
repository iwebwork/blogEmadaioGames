import { useCallback } from "react";
import { useSearchParams } from "react-router";
import { Updates } from "./props";

export const useSetMultipleUrlParams = () => {
  const [, setSearchParams] = useSearchParams();

  // Esta função aceita um objeto com todas as chaves e valores a serem atualizados
  const setMultipleParams = useCallback((updates: Updates) => {

    setSearchParams((currentSearchParams) => {
      // Cria uma cópia do estado ATUAL da URL
      const newSearchParams = new URLSearchParams(currentSearchParams);

      // Itera sobre todas as atualizações solicitadas no objeto
      for (const [key, value] of Object.entries(updates)) {

        // Aplica a mesma lógica de 'set ou delete'
        if (value !== null && value !== undefined && value !== '') {
          newSearchParams.set(key, String(value));
        } else {
          newSearchParams.delete(key);
        }
      }

      // Retorna o objeto final para o setSearchParams em uma única atualização
      return newSearchParams;
    });

  }, [setSearchParams]); // Dependências limpas

  return setMultipleParams;
};