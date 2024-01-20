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

export async function createEntry(estimate, signal) {
  console.log("CREATE ENTRY CALLED", estimate);
  const url = `${API_BASE_URL}/request`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: estimate }),
    signal,
  };
  return await fetchJson(url, options, estimate);
}

export async function listRequests(signal) {
  const url = `${API_BASE_URL}/request`;
  return await fetchJson(url, { headers, signal });
}

// export async function updateEstimate(estimate_id, formData, signal) {
//   const url = `${API_BASE_URL}/request/${estimate_id}`;
//   const options = {
//     method: "PUT",
//     headers,
//     body: JSON.stringify({ data: formData }),
//     signal,
//   };
//   return await fetchJson(url, options);
// }

// export async function readEstimate(reservationId, signal) {
//   const url = `${API_BASE_URL}/request/${reservationId}`;
//   return await fetchJson(url, { headers, signal }, {});
// }