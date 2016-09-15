// @flow
import rp from 'request-promise-native';

import { API_URL } from '../config';

function handleRp(options: Object): Promise<any> {
  return rp(options)
  .then(result => result)
  .catch((e) => {
    const myerr = {
      statusCode: e.statusCode,
      error: e.error && e.error.error ? e.error.error : null,
    };

    throw new Error(JSON.stringify(myerr));
  });
}

export async function DELETE(uri: string): Promise<any> {
  const options = {
    method: 'DELETE',
    uri: API_URL + uri,
    json: true,
  };

  return await handleRp(options);
}

export async function GET(uri: string): Promise<any> {
  const options = {
    uri: API_URL + uri,
    headers: {
      'Content-Type': 'application/json',
    },
    json: true,
  };

  return await handleRp(options);
}

export async function POST(uri: string, params: Object): Promise<any> {
  const options = {
    method: 'POST',
    uri: API_URL + uri,
    body: params,
    json: true,
  };

  return await handleRp(options);
}

export async function PUT(uri: string, params: Object): Promise<any> {
  const options = {
    method: 'PUT',
    uri: API_URL + uri,
    body: params,
    json: true,
  };

  return await handleRp(options);
}
