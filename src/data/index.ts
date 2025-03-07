const data = new Date().toLocaleDateString(`pt-BR`, {
  day: `2-digit`,
  month: `2-digit`,
  year: `numeric`
});

interface IData {
  title: string;
  date: string;
}

export const posts : IData[] = [
      {
        title: `Noticia BLOBLBOLBOBOLBOBODOSDPOFPDFPSDFLSDPFSDPFSDPFPSDPFSPDKFPSPDFKPSDPFKSDPFKPSDKSDKF ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia BLOBLBOLBOBOLBOBODOSDPOFPDFPSDFLSDPFSDPFSDPFPSDPFSPDKFPSPDFKPSDPFKSDPFKPSDKSDKF ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      },
      {
        title: `Noticia ` + Math.random().toString(),
        date: data
      }
]