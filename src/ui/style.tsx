import styled from '@emotion/styled';
import Pallet from './layout/colorsPalette';

export const HoverLink = styled.div(() => {
  return {
    borderRadius: 6,
    ':hover': {
      backgroundColor: Pallet.Typography.terciaria
    }
  }
});