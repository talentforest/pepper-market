interface IItemDescriptionProps {
  itemName: string;
  description: string;
  price: number;
}

const ProductDesc = ({
  itemName,
  description,
  price,
}: IItemDescriptionProps) => {
  return (
    <section className='mt-4'>
      <h1 className='text-2xl font-bold text-gray-900'>{itemName}</h1>
      <span className='mt-3 block text-xl text-gray-900'>
        ₩ {price.toLocaleString('ko')}
      </span>
      <p className='mt-3 mb-6 text-gray-700'>{description}</p>
    </section>
  );
};

export default ProductDesc;
