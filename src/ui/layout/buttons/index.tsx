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
          width: 50,
          color: Pallet.Typography.principal,
          backgroundColor: Pallet.Typography.youTube,
          border: 0
        }}
          variant="solid"
          icon={<YoutubeOutlined style={{
            fontSize: 23
          }} />}
          onClick={onClickYouTube}
        />
      </Popover>
    </Anuncio>
  )
}
