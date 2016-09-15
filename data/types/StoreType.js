// @flow
import {
  GraphQLObjectType,
} from 'graphql';

import {
  connectionArgs,
  connectionFromPromisedArray,
  globalIdField,
} from 'graphql-relay';

import ItemConnection from '../connections/ItemConnection';

import {getItems} from '../../api/itemService';

let StoreType = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
      //Relay require global id for each obj
      id: globalIdField('Store'),
      itemConnection: {
        type: ItemConnection.connectionType,
        args: connectionArgs, //first, last ...etc
        //connectionFromPromisedArray: convert returning array to connection structure first-arg:promise obj second-arg: args obj 
        resolve: (_, args) => connectionFromPromisedArray(
            getItems(),
            args
        )
      }
    })
});

export default StoreType;