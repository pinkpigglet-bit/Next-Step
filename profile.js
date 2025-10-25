// profile.js
const PROFILE_KEY = 'profile.v1';

function getProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null'); }
  catch { return null; }
}

function isProfileComplete(p = getProfile()) {
  return p
    && typeof p.name === 'string' && p.name.trim().length > 0
    && Number(p.age) > 0
    && Number(p.height_cm) > 0
    && Number(p.weight_kg) > 0;
}

// Redirect to setup if profile incomplete
function requireProfile() {
  if (!isProfileComplete()) location.replace('setup.html#required');
}

function saveProfile(p) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
}

function clearProfile() {
  localStorage.removeItem(PROFILE_KEY);
}
