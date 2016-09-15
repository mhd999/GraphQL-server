// @flow
import {
  connectionDefinitions,
} from 'graphql-relay';

import ItemType from '../types/itemType';

let ItemConnection = connectionDefinitions({
    name: 'Item',
    nodeType: ItemType
});

export default ItemConnection;