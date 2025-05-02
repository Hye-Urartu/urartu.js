import * as jose from "jose";

/**
 *
 * @param {string} urartuUrl
 */
export function urartuClient(urartuUrl) {
  if (!urartuUrl) {
    throw new Error("urartuUrl is required");
  }
}

/**
 *
 * @param {string} token
 * @returns {Object}
 */
export function decodeToken(token) {
  return jose.decodeJwt(token);
}
