import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Search from "antd/es/input/Search";
import Anuncio from "../../anuncio";
import Pallet from "../colorsPalette";
import { IBarraPesquisaUi } from "./props";

const BarraPesquisaUi: React.FC<IBarraPesquisaUi> = ({ searchInput }) => {
  return (
    <Anuncio>
      <Search
        style={{
          marginTop: 50
        }}
        size="large"
        placeholder="Digite para pesquisar"
        onSearch={searchInput}
        enterButton={
          <Button
            style={{
              backgroundColor: Pallet.BackGround.principal,
              color: Pallet.Typography.principal,
              width: 60
            }}
            icon={
              <SearchOutlined />
            }
          />
        }
      />
    </Anuncio>
  )
}

export default BarraPesquisaUi;