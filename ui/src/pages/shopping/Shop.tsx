import { useEffect, useState } from 'react';
import AsideLeft from '../../components/aside/AsideLeft';
import AsideRight from '../../components/aside/AsideRight';
import { Container, Content, CardContainer, ProductCard, SpanShop, PageButton, PageButtonContainer } from './styled';
import { getProducts } from '../../service/produtosApi';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
  brand: string;
  stored: number;
};

export const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 50,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts(pagination.page, pagination.pageSize);
      setProducts(response);
    };

    fetchProducts();
  }, [pagination]);
  
  return (
    <Container>
        <SpanShop>
          Exibindo: {products.length} produtos.
        </SpanShop>
      <Content>
        <CardContainer>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.brand}</p>
              <p>R$: {product.price},00</p>
              <img src={product.thumbnail
                ? product.thumbnail
                : 'https://via.placeholder.com/150'} alt={product.name} />
              <span>Estoque: {product.stored}</span>
              <p className='descript'>{product.description}</p>
              <button>Add to cart</button>
            </ProductCard>
          ))}
        </CardContainer>
      </Content>
      <PageButtonContainer>
        <button
          disabled={pagination.page === 1}
          onClick={() => {
            setPagination({ ...pagination, page: pagination.page - 1 })
            window.scrollTo(0, 0);
          }}
        >
          Anterior
        </button>
        {products && products.length > 0 && (
          <PageButton>
            {pagination.page}
          </PageButton>
        )
        }
        <button
          disabled={products.length < 50}
          onClick={() => {
            setPagination({ ...pagination, page: pagination.page + 1 });
            window.scrollTo(0, 0);
          }}
        >
          Próximo
        </button>
      </PageButtonContainer>

      <AsideLeft />
      <AsideRight />
    </Container>
  );
}