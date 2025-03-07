import { ILink } from "./props";

const LinkUi: React.FC<ILink> = ({ children, url }) => {
  return (
    <a style={{ color: 'black' }} href={url}>
      {children}
    </a>
  )
}

export default LinkUi;