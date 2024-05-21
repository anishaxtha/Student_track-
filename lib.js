export function extractIdFromUrl(url) {
  // Remove any leading or trailing slashes and split the string by '/'
  const parts = url.replace(/^\/+|\/+$/g, "").split("/");

  // Find the index of 'view' in the parts array
  const index = parts.indexOf("view");

  // If 'view' is found and there's at least one more part after it
  if (index !== -1 && index < parts.length - 1) {
    // Return the part next to 'view'
    return parts[index + 1];
  }

  // If 'view' is not found or there's no part after it, return null or handle it accordingly
  return null;
}
