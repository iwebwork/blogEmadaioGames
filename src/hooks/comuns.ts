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
