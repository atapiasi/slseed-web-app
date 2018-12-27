/**
 * Local stage configuration.
 *
 * @module config/local
 */

module.exports = {
  port: 8081,
  headers: {
    'strict-transport-security': ['max-age=31536000', 'includeSubDomains', 'preload'].join(';'),
    'x-xss-protection': ['1', 'mode=block'].join(';'),
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'same-origin',
    'x-frame-options': 'deny',
    'content-security-policy': [
      "script-src 'self' 'nonce-2726c7f26c' https://cdnjs.cloudflare.com https://*.googleapis.com https://*.facebook.net https://*.facebook.com",
      "img-src 'self' data: https://*.cloudfront.net https://*.google.com https://*.googleapis.com https://*.gstatic.com https://*.facebook.com",
      "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://*.googleapis.com",
      'font-src data: https://cdnjs.cloudflare.com https://*.gstatic.com',
      "connect-src 'self' http://localhost:* https://*.amazonaws.com",
      'frame-src http://*.facebook.com',
      "manifest-src 'self'",
      "default-src 'self'",
      "object-src 'none'"
    ].join(';')
  }
};
