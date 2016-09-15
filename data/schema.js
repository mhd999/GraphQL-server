// @flow
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

//Relay helper methods
import {
  globalIdField,
  fromGlobalId,
  nodeDefinitions,
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray,
  mutationWithClientMutationId
} from "graphql-relay";


// let Schema = (db: Object) => {

//   let store = {};


//   let itemType = new GraphQLObjectType({
//     name: 'Item',
//     fields: () => ({
//       //relay require an id for connection
//       id: {
//         type: new GraphQLNonNull(GraphQLID),
//         resolve: (obj) => obj._id
//       },
//       title: { type: GraphQLString },
//       price: { type: GraphQLInt },
//       createdAt: 
//         {
//           type: GraphQLString,
//           resolve: (obj) => new Date(obj.createdAt).toISOString()
//         }
//     })
//   });

//   let itemConnection = connectionDefinitions({
//     name: 'Item',
//     nodeType: itemType
//   });

  // let storeType = new GraphQLObjectType({
  //   name: 'Store',
  //   fields: () => ({
  //     //Relay require global id for each obj
  //     id: globalIdField('Store'),
  //     itemConnection: {
  //       type: itemConnection.connectionType,
  //       args: connectionArgs, //first, last ...etc
  //       //connectionFromPromisedArray: convert returning array to connection structure first-arg:promise obj second-arg: args obj 
  //       resolve: (_, args) => connectionFromPromisedArray(
  //         db.collection("items")
  //           .find({})
  //           .sort({createdAt: -1})
  //           .limit(args.first).toArray(),
  //         args
  //       )
  //     }
  //   })
  // });

//   //mutation
//   let createItemMutation = mutationWithClientMutationId({
//     name: 'CreateItem',

//     inputFields: {
//       title: {type: new GraphQLNonNull(GraphQLString)},
//       price: {type: new GraphQLNonNull(GraphQLFloat)}
//     },
//     //return after mutateAndGetPayload
//     outputFields: {
//       itemEdge: {
//         type: itemConnection.edgeType,
//         resolve: (obj) => ({node:obj.ops[0], cursor: obj.insertedId}) 
//       }, 
//       store: {
//         type: storeType,
//         resolve: () => store
//       }
//     },

//     mutateAndGetPayload: ({title, price}) => {
//       return db.collection("items").insertOne({
//         title, 
//         price,
//         createdAt: Date.now()
//       });
//     }
//   });


  // let schema = new GraphQLSchema({
  //   query: new GraphQLObjectType({
  //     name: 'Query',
  //     fields: () => ({
  //       store: {
  //         type: storeType,
  //         resolve: () => store
  //       }
  //     })
    
//     }),
//      mutation: new GraphQLObjectType({
//       name: 'Mutation',
//       fields: ()=> ({
//         createItem: createItemMutation
//       })
//     })
//   });



 

//   return schema
// };
import StoreType from './types/StoreType';
let store = {};

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: ()=> ({
    store: {
      type: StoreType,
      resolve: () => ({})
    }
  })
});


export const schema = new GraphQLSchema({
  query: Query
});

export default schema;
