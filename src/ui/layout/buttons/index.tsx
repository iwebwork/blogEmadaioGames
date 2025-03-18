import { Button, Popover } from "antd"
import { URL_YOUTUBE } from "../../../constants"
import Anuncio from "../../anuncio"
import Pallet from "../colorsPalette"
import { YoutubeOutlined } from "@ant-design/icons";

export const ButtonYouTubeUi: React.FC = () => {
  const onClickYouTube = () => {
    window.open(URL_YOUTUBE, '_blank', 'noopener,noreferrer')
  }

  return (
    <Anuncio>
      <Popover content={'YouTube'} placement="right">
        <Button style={{
          height: 45,
          width: 45,
          backgroundColor: Pallet.Typography.terciaria,
          borderColor: Pallet.Typography.secundaria
        }}
          variant="solid"
          shape="round"
          icon={<YoutubeOutlined />}
          onClick={onClickYouTube}
        />
      </Popover>
    </Anuncio>
  )
}
