import {GET} from './httpService';

export async function getItems(): Promise<Item[]> {
  const result = await GET('/');
  return result;
}
