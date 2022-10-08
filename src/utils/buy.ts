
export async function buy(id: string) {
  const object = {
    productId: id,
    userId: "d826b445-b90b-443a-82e3-59a8128b63b9",
  };

  const requestInfo = {
    method: "POST",
    body: JSON.stringify(object),
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  };

  const addProduct = await fetch("http://localhost:5000/cart/add", requestInfo);

}
