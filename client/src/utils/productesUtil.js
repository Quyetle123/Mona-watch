import { graphQLRequest } from "./request";

export const productsLoader = async () => {
  const query = `query Products {
    products {
      id
      productname
      image
      price
      description
      quantity
      sold
    }
  }`;
  const data = await graphQLRequest({ query });

  return data;
};

export const productLoader = async ({ params: { productid } }) => {
  const Qquery = `query Product($productid: String!) {
    product(productid: $productid) {
      id,
      categoryid,
      productname,
      image,
      price,
      description,
      quantity,
      sold
    }
  }`;
  const variables = { productid };
  const {product} = await graphQLRequest({ query: Qquery, variables });

  return {product};
};

export const addProduct = async (
  addProductId,
  productname,
  description,
  price,
  image,
  quantity,
  sold
) => {
  const query = `mutation AddProduct($addProductId: String!, $categoryid: String!, $productname: String!, $description: String!, $price: Int!, $image: String!, $quantity: Int, $sold: Int) {
  addProduct(id: $addProductId, categoryid: $categoryid, productname: $productname, description: $description, price: $price, image: $image, quantity: $quantity, sold: $sold) {
    id
    categoryid
    productname
    description
    price
    image
  }
}`;

  const data = await graphQLRequest({
    query,
    variables: {
      addProductId,
      categoryid: addProductId,
      productname,
      description,
      price,
      image,
      quantity,
      sold,
    },
  });

  return data;
};

export const updateProduct = async (
  updateProductId,
  categoryid,
  productname,
  description,
  price,
  image,
  quantity
) => {
  const query = `mutation UpdateProduct($updateProductId: String!, $categoryid: String!, $productname: String!, $description: String!, $price: Int!, $image: String!, $quantity: Int) {
  updateProduct(id: $updateProductId, categoryid: $categoryid, productname: $productname, description: $description, price: $price, image: $image, quantity: $quantity) {
    id,
    categoryid,
    productname,
    description,
    price,
    image,
    quantity  
  }
}`;

  const data = await graphQLRequest({
    query,
    variables: {
      updateProductId,
      categoryid,
      productname,
      description,
      price,
      image,
      quantity,
    },
  });

  return data;
};

export const deleteProduct = async (deleteProductId) => {
  const query = `mutation DeleteProduct($deleteProductId: String!) {
    deleteProduct(id: $deleteProductId) {
      id
    }
  }`;
  const data = await graphQLRequest({
    query,
    variables: { deleteProductId },
  });

  return data;
};

export const productWithCategortId = async ({ params: { categoryid } }) => {
  const Allquery = `query ProductWithcateId($categoryid: String!) {
    ProductWithcateId(categoryid: $categoryid) {
      id
      categoryid
      productname
      description
      price
      image
    }
  }`;
  const DestPriceQuery = `query ProductWithcateIdPriceDesc($categoryid: String!) {
    ProductWithcateIdPriceDesc(categoryid: $categoryid) {
      id
      categoryid
      productname
      description
      image
      price
    }
  }`;
  const AscPriceQuery = `query ProductWithcateIdPriceAsc($categoryid: String!) {
    ProductWithcateIdPriceAsc(categoryid: $categoryid) {
      id
      categoryid
      productname
      image
      description
      price
    }
  }`;
  const sellingPrice = `query SellingProductWithcateId($categoryid: String!) {
    SellingProductWithcateId(categoryid: $categoryid) {
      id
      categoryid
      productname
      description
      image
      price
    }
  }`
  const variables = { categoryid };
  const { ProductWithcateId } = await graphQLRequest({
    query: Allquery,
    variables,
  });
  const { ProductWithcateIdPriceDesc } = await graphQLRequest({
    query: DestPriceQuery,
    variables,
  });
  const { ProductWithcateIdPriceAsc } = await graphQLRequest({
    query: AscPriceQuery,
    variables,
  });
  const { SellingProductWithcateId } = await graphQLRequest({
    query: sellingPrice,
    variables,
  });

  return { ProductWithcateId, ProductWithcateIdPriceDesc, ProductWithcateIdPriceAsc, SellingProductWithcateId};
};

export const productWithId = async (productid) => {
  const query = `query Product($productid: String!) {
  product(productid: $productid) {
    id,
    categoryid,
    productname,
    image,
    price,
    description
    quatity
    sold
  }
}`;
  const variables = { productid };
  const data = await graphQLRequest({ query, variables });

  return data;
};

export const homeProduct = async () => {
  const sellingQuery = `query SellingProduct {
    sellingProduct {
      id
      productname
      description
      categoryid
      image
      price
      quantity
      sold
    }
  }`;
  const newQuery = `query NewProduct {
    newProduct {
      id
      categoryid
      productname
      image
      description
      price
      quantity
      sold
    }
  }`;
  const { sellingProduct } = await graphQLRequest({ query: sellingQuery });
  const { newProduct } = await graphQLRequest({ query: newQuery });

  return { sellingProduct, newProduct };
};
