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
  marginTop: 20,
  marginBottom: 20,
  marginRight: 20,
  marginLeft: 20,
  backgroundColor: Pallet.BackGround.secundaria
};

export const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: Pallet.BackGround.principal
};

export const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

export const layoutStyleContent: React.CSSProperties = {
  display: 'flex',
  backgroundColor: Pallet.BackGround.secundaria,
  color: Pallet.Typography.principal,
}; 