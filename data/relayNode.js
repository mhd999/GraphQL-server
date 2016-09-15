// // @flow
// import {
//   fromGlobalId,
//   nodeDefinitions,
// } from 'graphql-relay';

// import ItemType from './types/ItemType';

// const { nodeInterface, nodeField } = nodeDefinitions(
//     (globalId) => {
//       let {type, id} = fromGlobalId(globalId);

//       switch(type) {
//         case: 'Store'
//           return ItemType;
//         default:
//           return null;
//       }
//     },
//     (obj) => {
//       if (obj instanceof Store) {
//         return storeType;
//       }
//       return null;
//     }
//   );
