import { graphQLRequest } from "./request";

export const catogoriesLoader = async () => {
  const query = `query Categories {
      categories {
      id
      categoryname
      description
      userid{
        uid
      }
    }
  }`;
  const data = await graphQLRequest({ query });

  return data;
};

export const categoryLoader = async ({ params: { categoryid } }) => {
  const query = `query Category($categoryid: String!) {
    category(categoryid: $categoryid) {
      id
      userid {
        uid
      }
      categoryname
      description
    }
  }`;
  const variables = { categoryid };
  const data = await graphQLRequest({ query, variables });

  return data;
};

export const updateCategory = async (updateCategoryId, categoryname, description) => {
  const query = `mutation UpdateCategory($updateCategoryId: String!, $categoryname: String!, $description: String!) {
    updateCategory(id: $updateCategoryId, categoryname: $categoryname, description: $description) {
      id
      categoryname
      description
    }
  }`;

  const data = await graphQLRequest({
    query,
    variables: {
      updateCategoryId,
      categoryname,
      description,
    },
  });

  return data;
};

export const deleteCategory = async (deleteCategoryId) => {
  const query = `mutation Mutation($deleteCategoryId: String!) {
    deleteCategory(id: $deleteCategoryId) {
      id
    }
  }`;
  const data = await graphQLRequest({
    query,
    variables: {deleteCategoryId}
  })

  return data
};

export const addCategory = async (userid, categoryname, description) => {
  const query = `mutation Mutation($userid: String!, $categoryname: String!, $description: String) {
  addCategory(userid: $userid, categoryname: $categoryname, description: $description) {
    userid {
      uid
    }
    categoryname
    description
  }
}`;

  const data = await graphQLRequest({
    query,
    variables: {
      userid,
      categoryname,
      description
    },
  });

  return data
};

