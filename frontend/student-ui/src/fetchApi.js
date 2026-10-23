
const API_URL = "http://localhost:8080";

export async function getJson(url) {
  const response = await fetch(url);
  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  if (!response.ok) {
    const message =
      typeof data === "string"
        ? data
        : data.error || data.message || JSON.stringify(data);

    throw new Error("HTTP " + response.status + ": " + message);
  }

  // Detect an HTML response instead of JSON
  if (typeof data === "string" && data.trim().startsWith("<!doctype html")) {
    throw new Error("Received HTML instead of JSON. Check the backend URL.");
  }

  return data;
}

export async function getStudent(id) {
  return getJson(API_URL + "/api/students/" + id);
}
