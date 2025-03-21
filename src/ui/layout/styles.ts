import Pallet from "./colorsPalette";

export const headerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: Pallet.BackGround.principal
};

export const contentStyle: React.CSSProperties = {
  backgroundColor: Pallet.BackGround.secundaria
};

export const footerStyle: React.CSSProperties = {
  backgroundColor: Pallet.BackGround.principal
};

export const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: 'fantasy',
  backgroundColor: Pallet.BackGround.secundaria
};

export const layoutStyleContent: React.CSSProperties = {
  display: 'flex',
  marginLeft: 50,
  alignItems: 'flex-start',
  backgroundColor: Pallet.BackGround.secundaria,
  color: Pallet.Typography.secundaria,
}; 