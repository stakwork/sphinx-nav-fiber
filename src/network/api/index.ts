import { API_URL } from "~/constants";

const request = async <Res>(
  url: string,
  config?: RequestInit
): Promise<Res> => {
  const response = await fetch(url, config);

  return response.json();
};

export const api = {
  get: <Res>(endpoint: string, headers?: RequestInit["headers"]) =>
    request<Res>(`${API_URL}${endpoint}`, headers ? { headers } : undefined),
  post: <TBody extends RequestInit["body"], Res>(
    endpoint: string,
    body: TBody,
    headers?: RequestInit["headers"]
  ) => request<Res>(`${API_URL}${endpoint}`, { body, headers: {
    ...headers,
    "Content-Type": "application/json",
  }, method: "POST",  }),
};
