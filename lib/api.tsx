export const fetchJSON = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    console.log(`request failed: ${res.status}`);
    return;
  }
  return await res.json();
};
