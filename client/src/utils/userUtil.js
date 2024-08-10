import { graphQLRequest } from "./request";

export const userLoader = async ({ params: { userid } }) => {
  const query = `query User($userid: String!) {
    user(userid: $userid) {
        id
        username
        email
        role
        city
        address
    }
    }`;
  const variables = { userid };
  const data = await graphQLRequest({ query, variables });

  return data;
};

export const updateUser = async (
  updateUserId,
  username,
  email,
  role,
  address,
  city
) => {
  const query = `mutation UpdateUser($updateUserId: String!, $username: String!, $role: String, $email: String, $city: String, $address: String) {
        updateUser(id: $updateUserId, username: $username, role: $role, email: $email, city: $city, address: $address) {
            id  
            username
            email
            role
            address
            city
        }
    }`;

  const data = await graphQLRequest({
    query,
    variables: {
      updateUserId,
      username,
      email,
      role,
      address,
      city,
    },
  });
  console.log(updateUserId, username, email, role, address, city);

  return data;
};

export const register = async (uid, username, password, email, role, address, city) => {
  const query = `mutation Register($uid: String!, $username: String!, $password: String, $email: String, $role: String, $city: String, $address: String) {
  register(uid: $uid, username: $username, password: $password, email: $email, role: $role, city: $city, address: $address) {
    id
    uid
    username
    password
    email
    role
    address
    city
  }
}`;

  const data = await graphQLRequest({
    query,
    variables: {
      uid,
      username,
      password,
      email, 
      role,
      address,
      city
    },
  });
  return data;
};


export const login = async (username, password) => {
  const query = `query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      uid
      username
      email
      password
      role  
      city
      address
    }
  }`;

  const data = await graphQLRequest({
    query,
    variables: {
      username,
      password,
    },
  });
  return data;
};

export const loginWithGoogle = async (email) => {
  const query = `query LoginWithGoogle($email: String!) {
  loginWithGoogle(email: $email) {
    id
      uid
      username
      email
      password
      role  
      city
      address  
  }
}`;

  const data = await graphQLRequest({
    query,
    variables: {
      email
    },
  });
  return data;
};




