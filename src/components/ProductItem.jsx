import { getPbImageURL } from '@/utils';


function ProductItem({ item }) {
  return (
    <li>
      <figure className="flex flex-col gap-3 items-center">
        <img
          src={getPbImageURL(item, 'photo')}
          className="w-40"
          alt={item.title}
        />
        <figcaption className="flex flex-col text-center">
          <span className="title text-orange-700 font-extrabold text-xl uppercase">
            {item.title}
          </span>
          <span className="price">KRW {item.price.toLocaleString()}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export default ProductItem;
