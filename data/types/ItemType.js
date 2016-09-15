// @flow
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {
  toGlobalId
} from 'graphql-relay';

const ItemType = new GraphQLObjectType({
    name: 'Item',
    description:'Items type is a product model with price and title',
    fields: ()=> ({
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve: (obj) => toGlobalId("Item", obj._id)
      },
      itemId: {
        type: GraphQLString,
        resolve: (obj) => obj.id
      },
      title: { type: GraphQLString },
      price: { type: GraphQLInt },
      createdAt: 
        {
          type: GraphQLString,
          resolve: (obj) => new Date(obj.createdAt).toISOString()
        }
    })
});

export default ItemType;