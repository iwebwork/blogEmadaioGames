const TokenService = {
    getLocalRefreshToken() {
      const userStr = localStorage.getItem('usuario');
      let user = null;
      if (userStr)
        user = JSON.parse(userStr);
      return user?.refreshToken;
    },
  
    getLocalAccessToken() {
      const userStr = localStorage.getItem('usuario') || null;
      let user = null;
      if (userStr !== null)
        user = JSON.parse(userStr);
      return user?.accessToken;
    },
  
    getUser() {
      const userStr = localStorage.getItem('usuario');
      let user = null;
      if (userStr)
        user = JSON.parse(userStr);
      return {user} as object;
    },
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setUser(usuario: any) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
    },
  
    removeUser() {
      localStorage.removeItem('usuario');
    }
  };
  
  export default TokenService;