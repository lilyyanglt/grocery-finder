export const API = "https://sheet.best/api/sheets/50dd1ede-5a4c-440d-af55-d3ff313a9307";

export const testData = JSON.parse(`[
  {
    "id": "1",
    "storeName": "superStore",
    "itemName": "melon",
    "itemPrice": "2.99",
    "itemDesc": "per pound"
  },
  {
    "id": "2",
    "storeName": "superStore",
    "itemName": "strawberries",
    "itemPrice": "4.99",
    "itemDesc": "per pound"
  },
  {
    "id": "3",
    "storeName": "superStore",
    "itemName": "chicken",
    "itemPrice": "1.99",
    "itemDesc": "pack"
  },
  {
    "id": "4",
    "storeName": "superStore",
    "itemName": "apples",
    "itemPrice": "3.99",
    "itemDesc": "per pound"
  },
  {
    "id": "5",
    "storeName": "superStore",
    "itemName": "bananas",
    "itemPrice": "8",
    "itemDesc": "per pound"
  },
  {
    "id": "6",
    "storeName": "superStore",
    "itemName": "bread",
    "itemPrice": "9",
    "itemDesc": "pack"
  },
  {
    "id": "7",
    "storeName": "superStore",
    "itemName": "cookies",
    "itemPrice": "5.56",
    "itemDesc": "pack"
  },
  {
    "id": "8",
    "storeName": "walmart",
    "itemName": "melon",
    "itemPrice": "4.99",
    "itemDesc": "per pound"
  },
  {
    "id": "9",
    "storeName": "walmart",
    "itemName": "chicken",
    "itemPrice": "4.99",
    "itemDesc": "pack"
  },
  {
    "id": "10",
    "storeName": "walmart",
    "itemName": "bread",
    "itemPrice": "2",
    "itemDesc": "per pound"
  },
  {
    "id": "11",
    "storeName": "walmart",
    "itemName": "melon",
    "itemPrice": "1",
    "itemDesc": "per pound"
  },
  {
    "id": "12",
    "storeName": "walmart",
    "itemName": "cookies",
    "itemPrice": "5.99",
    "itemDesc": "pack"
  },
  {
    "id": "13",
    "storeName": "walmart",
    "itemName": "bananas",
    "itemPrice": "12",
    "itemDesc": "per pound"
  },
  {
    "id": "14",
    "storeName": "walmart",
    "itemName": "strawberries",
    "itemPrice": "12",
    "itemDesc": "pack"
  },
  {
    "id": "15",
    "storeName": "superStore",
    "itemName": "melon",
    "itemPrice": "2.99",
    "itemDesc": "per pound"
  }
]`);

export const dummyFetch = () => {
  return new Promise(resolve => {
    console.log(testData)
    setTimeout(
      () => resolve(testData)
    , 2000)
  })
}
