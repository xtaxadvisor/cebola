import type { HandlerEvent } from '@netlify/functions';

// Allowed origins (Use environment variable or defaults)
const ALLOWED_ORIGINS = [
  process.env.VITE_APP_URL || 'http://localhost:3000',
  'https://xtaxadvisors.netlify.app'
];

// Default CORS headers
export const corsHeaders = {
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Max-Age': '86400', // Cache preflight response for 24 hours
};

/**
 * Gets CORS headers dynamically based on the request's origin.
 */
export function getCorsHeaders(event: HandlerEvent) {
  const origin = event.headers.origin || event.headers.referer || '';

  return {
    ...corsHeaders,
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  };
}

/**
 * Handles CORS preflight requests and applies appropriate headers.
 */
export function handleCors(event: HandlerEvent) {
  const headers = getCorsHeaders(event);

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  return headers;
}