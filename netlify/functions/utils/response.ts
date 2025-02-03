export interface ErrorResponse {
  success: false;
  message: string;
  details?: unknown;
}

export interface SuccessResponse<T> {
  success: true;
  data: T;
}

/**
 * Creates a structured success response for Netlify functions
 */
export function createSuccessResponse<T>(data: T): {
  statusCode: number;
  body: string;
} {
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      data
    })
  };
}

/**
 * Creates a structured error response for Netlify functions
 */
export function createErrorResponse(
  statusCode: number,
  message: string,
  details?: unknown
): {
  statusCode: number;
  body: string;
} {
  return {
    statusCode,
    body: JSON.stringify({
      success: false,
      message,
      ...(process.env.NODE_ENV === 'development' && details ? { details } : {})
    })
  };
}