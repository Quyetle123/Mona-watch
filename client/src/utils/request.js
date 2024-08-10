// import { GRAPHQL_SERVER } from "./constants";

// const token = localStorage.getItem("accessToken");

export const graphQLRequest = async (payload, options = {}) => {
  if (localStorage.getItem("accessToken")) {
    const res = await fetch("http://localhost:4000/graphQL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
        ...options,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      if (res.status === 403) {
        return null;
      }
    }

    const { data } = await res.json();
    return data;
  }
  return null;
};
