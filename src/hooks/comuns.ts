
export function formatarDataPorExtenso(data: string): string {
  const opcoes: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const dt = new Date(data);

  return dt.toLocaleDateString('pt-BR', opcoes);
}

export function getDataAtual(){
  const now = new Date();
  const data = now.toLocaleDateString()
  return data;
}