import React, { PropsWithChildren } from "react";
import Pallet from "../colorsPalette";

const PostUi: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: Pallet.BackGround.secundaria
    }}>
      {children}
    </div>
  )
}

export default PostUi;