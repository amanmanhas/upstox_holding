const apiCall = async (
  url = 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
) => {
  const response = await fetch(url);
  return response.json();
};

export default apiCall;
