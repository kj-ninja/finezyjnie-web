import React from 'react';
import * as commonStyles from '../../../styles/commonStyles';
import * as styles from './Offers.styles';
import Text from '../../../components/Text/Text';
import { pageContent } from '../pageContent';
import Carousel from '../../../components/Carousel/Carousel';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../api/shop';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import Spinner from '../../../components/Spinner/Spinner';

function Offers() {
  const { isPending, error, data } = useQuery({
    queryKey: ['products', { page: 1, pageSize: 6, tag: 'promoted' }],
    queryFn: () => fetchProducts({ page: 1, pageSize: 6, tag: 'promoted' }),
  });
  const { isMobile } = useMediaQueries();

  return (
    <section css={[commonStyles.container, styles.offers]}>
      <div css={styles.offersSection}>
        <Text variant={isMobile ? 'mHeadline2' : 'dHeadline2'} uppercase color="white">
          {pageContent.offersTitle}
        </Text>
      </div>

      {isPending && <Spinner />}

      {/*todo: add error message component*/}
      {error && (
        <Text variant="body16" color="error">
          {error.message}
        </Text>
      )}

      <div css={styles.carouselWrapper}>
        {data?.products && <Carousel products={data.products} />}
      </div>
    </section>
  );
}

export default Offers;
