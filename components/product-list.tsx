import { ProductWithCount } from '@/pages';
import useSWR from 'swr';
import ProductBox from './product';

interface ProductListProps {
  kind: 'favs' | 'sales' | 'purchases';
}
interface Record {
  id: number;
  product: ProductWithCount;
}
interface ProductListResponse {
  [key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
  const { data } = useSWR<ProductListResponse>(`/api/users/me/${kind}`);

  return data ? (
    <>
      {data[kind]?.map((record) => (
        <ProductBox
          key={record.product.id}
          href={`${record.product.id}`}
          title={record.product.name}
          subtitle={record.product.description}
          price={record.product.price}
          isLikedCount={record.product._count?.favs}
        />
      ))}
    </>
  ) : null;
}
