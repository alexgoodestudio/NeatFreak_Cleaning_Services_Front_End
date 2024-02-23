const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);
    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function createEntry(subscriber, signal) {
  console.log("CREATE ENTRY CALLED", subscriber);
  const url = `${API_BASE_URL}/subscribers`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: subscriber }),
    signal,
  };
  return await fetchJson(url, options, subscriber);
}


export async function listSubscribers(signal) {
  const url = `${API_BASE_URL}/subscribers`;
  return await fetchJson(url, { headers, signal });
}

export async function listResponse(inputData, signal) {
  const url = `${API_BASE_URL}/responses`;
  console.log("the input:",inputData,", inputData made to API Call")
  return await fetchJson(url, { 
    headers,
    method: "POST",
    body: JSON.stringify({ data: inputData }),
    signal 
    });
}

export async function deleteSubscriber(subscriber_id, formData, signal) {
  const url = `${API_BASE_URL}/subscribers/${subscriber_id}`;
  const options = {
    method: "DELETE",
    headers,
    signal,
  };
  return await fetchJson(url, options);
}

export async function readSubscriber(subscriberId, signal) {
  const url = `${API_BASE_URL}/subscribers/${subscriberId}`;
  return await fetchJson(url, { headers, signal }, {});
}