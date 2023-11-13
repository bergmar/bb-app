const apiHost = "api/";

export const fetchFromBackend = async (endpoint: string) => {
  const url = `${apiHost}${endpoint}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Log the details of the error
      console.error(`Error: ${response.status} - ${response.statusText}`);
      throw new Error(`Error: ${response.statusText}`);
    }

    // If the response is successful, parse and return the JSON
    return response.json();
  } catch (error) {
    // Log the error details
    console.error('Error fetching data:', (error as Error).message);
    throw error; // rethrow the error to allow React Query to catch it
  }
};
