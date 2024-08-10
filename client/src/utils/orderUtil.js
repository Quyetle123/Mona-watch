import { graphQLRequest } from "./request";

export const ordersLoader = async ({ params: { userid } }) => {
  const query = `query Orders($userid: String!) {
    orders(userid: $userid) {
      id
      userid
      productname
      total
      address
      city
      quantity
      createdAt
      status  
    }
  }`;
  const variables = { userid };
  const data = await graphQLRequest({ query, variables });

  return data;
};

export const allOrderLoader = async () => {
  const query = `query AllOrder {
    allOrder {
      id
      userid
      productname
      total
      address
      city
      quantity
      createdAt
      status    
    }
  }`;
  const data = await graphQLRequest({ query });

  return data;
};

export const addOrder = async (
  userid,
  total,
  address,
  city,
  productname,
  quantity,
  status
) => {
  const query = `mutation AddOrder($userid: String!, $total: Int!, $address: String!, $city: String!, $productname: [String!]!, $quantity: [Int!]!, $status: String!) {
        addOrder(userid: $userid, total: $total, address: $address, city: $city, productname: $productname, quantity: $quantity, status: $status) {
        id
        userid
        total
        address
        city
        productname
        quantity
        status
        }
    }`;

  const data = await graphQLRequest({
    query,
    variables: {
      userid,
      total,
      address,
      city,
      productname,
      quantity,
      status,
    },
  });

  return data;
};

export const updateOrder = async (updateOrderId, status) => {
  const query = `mutation UpdateOrder($updateOrderId: String!, $status: String!) {
    updateOrder(id: $updateOrderId, status: $status) {
      id
      userid
      total
      address
      city
      productname
      quantity
      status  
    }
  }`;
  const variables = { updateOrderId, status };

  const data = await graphQLRequest({ query, variables });

  return data;
};

export const deleteOrder = async (deleteOrderId) => {
  const query = `mutation DeleteOrder($deleteOrderId: String!) {
    deleteOrder(id: $deleteOrderId) {
      id  
    }
  }`;
  const data = await graphQLRequest({
    query,
    variables: { deleteOrderId },
  });

  return data;
};
