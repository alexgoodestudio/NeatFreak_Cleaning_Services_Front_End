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
  const url = `${API_BASE_URL}/request`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: subscriber }),
    signal,
  };
  return await fetchJson(url, options, subscriber);
}

// export async function createChat(inputValue, signal){
//   console.log('CREATE CHAT CALLED')
//   const url = `${API_BASE_URL}/response`
//   const options ={
//     method: "POST",
//     headers,
//     body: JSON.stringify({data: inputValue}),
//     signal
//   }
//   return await fetchJson(url, options, inputValue)
// }

export async function listRequests(signal) {
  const url = `${API_BASE_URL}/request`;
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
  const url = `${API_BASE_URL}/request/${subscriber_id}`;
  const options = {
    method: "DELETE",
    headers,
    signal,
  };
  return await fetchJson(url, options);
}

export async function readEstimate(subscriberId, signal) {
  const url = `${API_BASE_URL}/request/${subscriberId}`;
  return await fetchJson(url, { headers, signal }, {});
}