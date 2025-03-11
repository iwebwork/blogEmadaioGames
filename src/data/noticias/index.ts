const date = new Date().toLocaleDateString(`pt-BR`, {
  day: `2-digit`,
  month: `2-digit`,
  year: `numeric`
});

export interface IData {
  id: number;
  title: string;
  date: string;
}

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
  {
    id: 5,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 6,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 7,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 8,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 9,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 10,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 11,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 12,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 13,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 14,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 15,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 16,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 17,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: 18,
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  }
];

export default noticias;