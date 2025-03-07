import Pallet from "../layout/colorsPalette";
import { ILink } from "./props";

const LinkUi: React.FC<ILink> = ({ children, url }) => {
  return (
    <a style={{ color: Pallet.Typography.principal }} href={url}>
      {children}
    </a>
  )
}

export default LinkUi;