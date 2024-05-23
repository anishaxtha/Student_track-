export function extractIdFromUrl(url) {
  // Remove any leading or trailing slashes and split the string by '/'
  const parts = url.replace(/^\/+|\/+$/g, "").split("/");

  // Find the index of 'view', 'parentsview', or 'institute' in the parts array
  const viewIndex = parts.indexOf("view");
  const parentsViewIndex = parts.indexOf("parentsview");
  const instituteIndex = parts.indexOf("institute");
  const academicIndex = parts.indexOf("academic");

  // Determine which index to use (the first one that appears in the URL)
  const index = [
    viewIndex,
    parentsViewIndex,
    instituteIndex,
    academicIndex,
  ].find((i) => i !== -1);

  // If one of the keywords is found and there's at least one more part after it
  if (index !== -1 && index < parts.length - 1) {
    // Return the part next to the found keyword
    return parts[index + 1];
  }

  // If none of the keywords is found or there's no part after it, return null or handle it accordingly
  return null;
}
