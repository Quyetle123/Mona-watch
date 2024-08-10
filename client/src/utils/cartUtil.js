import { graphQLRequest } from "./request";

export const cartsLoader = async ({ params: { userid } }) => {
  const query = `query Carts($userid: String!) {
    carts(userid: $userid) {
      id 
      userid
      productid
      productname 
      image
      price
      quantity
    }
  }`;
  const variables = { userid };
  const data = await graphQLRequest({ query, variables });

  return data;
};

export const addCart = async (userid, productid, productname, image, price, quantity) => {
  const query = `mutation AddCart($userid: String!, $productid: String!, $productname: String!, $image: String!, $price: Int!, $quantity: Int!) {
    addCart(userid: $userid, productid: $productid, productname: $productname, image: $image, price: $price, quantity: $quantity) {
      id
      userid
      productid
      productname
      image
      price
      quantity  
    }
  }`;

  const data = await graphQLRequest({
    query,
    variables: {
      userid,
      productid,
      productname,
      image,
      price,
      quantity,
    },
  });
  return data;
};

export const cartWithProductId = async ({ params: { productid } }) => {
  const query = `qquery CartWithProductId($productid: String!) {
    CartWithProductId(productid: $productid) {
      id
      userid
      productid
      quantity  
    }
  }`;
  const variables = { productid };
  const data = await graphQLRequest({ query, variables });

  return data;
};

export const updateCart = async (updateCartId, quantity) => {
  const query = `mutation UpdateCart($updateCartId: String!, $quantity: Int!) {
    updateCart(id: $updateCartId, quantity: $quantity) {
      id
      userid
      productid
      quantity  
    }
  }`;

  const data = await graphQLRequest({
    query,
    variables: {
      updateCartId,
      quantity,
    },
  });

  return data;
};

export const deleteCart = async (deleteCartId) => {
  const query = `mutation DeleteCart($deleteCartId: String!) {
    deleteCart(id: $deleteCartId) {
    id
    productname  
    }
  }`;
  const data = await graphQLRequest({
    query,
    variables: {deleteCartId}
  })

  return data
};
