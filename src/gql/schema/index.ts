export const typeDefs = `#graphql
  
  type Query {
    products: [Product]
    catagories: [Catagory]
    product(productId: ID): Product
    catagory(catagoryId: ID): Catagory
  }

  type Product{
    id: ID
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    catagoryId: ID
  }

  type Catagory{
    id: ID
    name: String
  }
`;