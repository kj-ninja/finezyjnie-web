import React from 'react';
import * as styles from './ProductThumbnail.styles';
import { Product } from '../../types/common';

// todo: add fallback images to public folder
const fallbackDesktopImage = 'https://picsum.photos/200/400';
const fallbackMobileImage = 'https://picsum.photos/200/100';

function ProductThumbnail(props: Product) {
  return <div css={styles.productThumbnail(fallbackDesktopImage, fallbackMobileImage)} />;
}

export default ProductThumbnail;