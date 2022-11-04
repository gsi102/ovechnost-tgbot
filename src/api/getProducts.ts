import { SERVER } from "../const/const";

export async function getProducts() {
  return fetch(`${SERVER}/products/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.error(e));
}
