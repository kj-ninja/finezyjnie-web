import React from 'react';
import * as styles from './ProductImage.styles';
import { Images } from '../../../types/common';
import { useMediaQueries } from '../../../hooks/useMediaQueries';

interface Props {
  images: Images;
  name: string;
}

function ProductImage({ images, name }: Props) {
  const { isMobile } = useMediaQueries();

  const productImages = isMobile ? images.small : images.large;

  return (
    <div css={styles.productImageWrapper}>
      <img src={productImages?.[0]} alt={`Produkt: ${name}`} />
    </div>
  );
}

export default ProductImage;
