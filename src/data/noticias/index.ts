const date = new Date().toLocaleDateString(`pt-BR`, {
  day: `2-digit`,
  month: `2-digit`,
  year: `numeric`
});

const noticias = [
  {
    id: 1,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 2,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 3,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 4,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
];

export default noticias;