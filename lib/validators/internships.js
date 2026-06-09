const validStatuses = new Set([
  "New",
  "Saved",
  "Applied",
  "Interview",
  "Offer",
  "Rejected"
]);

export function validateInternshipPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return "Request body must be a valid internship object.";
  }

  if (!payload.company || !String(payload.company).trim()) {
    return "Company is required.";
  }

  if (!payload.role || !String(payload.role).trim()) {
    return "Role is required.";
  }

  if (payload.link && !isValidUrl(payload.link)) {
    return "Application link must be a valid URL.";
  }

  if (payload.score !== undefined && payload.score !== null && payload.score !== "") {
    const score = Number(payload.score);

    if (!Number.isInteger(score) || score < 0 || score > 100) {
      return "Score must be a whole number between 0 and 100.";
    }
  }

  if (payload.status && !validStatuses.has(payload.status)) {
    return "Status is not supported.";
  }

  return "";
}

export function normalizeInternshipPayload(payload) {
  return {
    company: String(payload.company).trim(),
    role: String(payload.role).trim(),
    location: optionalString(payload.location),
    link: optionalString(payload.link),
    source: optionalString(payload.source),
    score: payload.score === "" || payload.score === undefined || payload.score === null
      ? null
      : Number(payload.score),
    status: payload.status || "New",
  };
}

function optionalString(value) {
  if (value === undefined || value === null) {
    return null;
  }

  const trimmed = String(value).trim();
  return trimmed || null;
}

function isValidUrl(value) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}
