import express from 'express';
import {schema} from './data/schema';
import GraphQLHTTP from 'express-graphql';

let app = express();


app.use('/graphql', GraphQLHTTP({
		schema,
		graphiql: true
	}));


app.listen(8080,  () => console.log('Listening on port 8080')); 


export default app;

