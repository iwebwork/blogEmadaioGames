import Pallet from "./colorsPalette";

export const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  backgroundColor: Pallet.BackGround.principal
};

export const contentStyle: React.CSSProperties = {
  flex: 1,
  textAlign: 'center',
};

export const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: Pallet.BackGround.principal
};

export const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

export const layoutStyleContent: React.CSSProperties = {
  display: 'flex',
  backgroundColor: Pallet.BackGround.secundaria,
  color: Pallet.Typography.principal,
}; 