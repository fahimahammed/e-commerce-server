import { products, categories } from "../../db.js";

export const resolvers = {
    Query: {
      products: () =>products,
      catagories: ()=> categories,
      product: (parent, args, context) =>{
        const result = products.find(product=> product.id == args.productId);
        return result;
      },
      catagory: (parent, {catagoryId}, context)=>{
        const result = categories.find(catagory=> catagory.id === catagoryId);
        return result;
      }
    },
    
  };
