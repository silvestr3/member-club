import { apiConfig } from "./api-config";

export async function fetchClientInformation(clientId) {
  const result = await fetch(`${apiConfig.baseURL}/clients/${clientId}`);

  if (result.status === 404) {
    return null;
  }

  const data = await result.json();
  return data;
}
