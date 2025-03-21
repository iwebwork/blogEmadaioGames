import React, { PropsWithChildren } from "react";
import Pallet from "../colorsPalette";

const PostUi: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: Pallet.BackGround.secundaria,
      marginBottom: 50,
      marginRight: 20
    }}>
      {children}
    </div>
  )
}

export default PostUi;