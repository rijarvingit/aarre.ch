// Form Security Configuration
export const FORM_CONFIG = {
  // Form Security Settings
  MIN_FORM_TIME: 3000, // Minimum time in milliseconds before form can be submitted (3 seconds)
  MAX_MESSAGE_LENGTH: 2000, // Maximum characters allowed in message
  MIN_MESSAGE_LENGTH: 10, // Minimum characters required in message

  // Spam Detection Thresholds
  MAX_UPPERCASE_RATIO: 0.5, // Maximum percentage of uppercase letters allowed
};

// Spam Detection Patterns
export const SPAM_PATTERNS = {
  // Email patterns that commonly indicate spam
  email: [
    /spam|fake|test|bot/i,
    /\+\d{3,}@/, // Gmail plus addressing with 3+ digits
    /@tempmail\./i,
    /@10minutemail\./i,
    /@guerrillamail\./i,
    /@throwaway\./i,
    /@mailinator\./i,
    /@yopmail\./i
  ],

  // Message patterns that commonly indicate spam
  message: [
    /\bviagra\b|\bcialis\b|\bporn\b|\bcasino\b|\bloan\b|\bmoney\b|\bearn\b|\bprofit\b/i,
    /http[s]?:\/\/[^\s]+\.(com|net|org|biz|info)\/[^\s]+/i, // Links with common domains
    /^(.)\1{15,}/, // Repeated characters (15+ repeats)
    /\b\w*\d{8,}\w*\b/, // Very long number sequences (8+ digits)
    /\b\w*[^\w\s]{5,}\w*\b/ // Multiple special characters (5+)
  ],

  // Name patterns that commonly indicate spam
  name: [
    /\d{4,}/, // 4+ numbers in name
    /\b\w*[^\w\s]\w*[^\w\s]\w*[^\w\s]\w*\b/, // 3+ special characters in name
    /^(.)\1{5,}/, // Repeated characters in name (5+ repeats)
    /\b\w*\d{3,}\w*\b/ // 3+ numbers in name
  ]
};

// Form Field Configuration
export const FORM_FIELDS = {
  name: {
    minLength: 2,
    maxLength: 100,
    required: true
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  message: {
    minLength: 10,
    maxLength: 2000,
    required: true
  }
};

// Validation Functions
export function validateEmail(email: string): boolean {
  return FORM_FIELDS.email.pattern.test(email);
}

export function checkSpamPatterns(field: 'email' | 'message' | 'name', value: string): boolean {
  const patterns = SPAM_PATTERNS[field];
  for (const pattern of patterns) {
    if (pattern.test(value)) {
      return true;
    }
  }
  return false;
}

export interface FormValidationResult {
  valid: boolean;
  message?: string;
  field?: string;
}

export function validateFormData(
  name: string,
  email: string,
  message: string,
  honeypot: string,
  formStartTime: number
): FormValidationResult {
  // Check honeypot field
  if (honeypot !== '') {
    console.log('Honeypot triggered - likely bot');
    return { valid: false, message: 'Spam detected' };
  }

  // Check minimum time (anti-rapid submission)
  const timeElapsed = Date.now() - formStartTime;
  if (timeElapsed < FORM_CONFIG.MIN_FORM_TIME) {
    console.log('Form submitted too quickly:', timeElapsed);
    return { valid: false, message: 'Please wait a moment before submitting' };
  }

  // Check minimum message length
  if (message.length < FORM_CONFIG.MIN_MESSAGE_LENGTH) {
    return {
      valid: false,
      message: `Message must be at least ${FORM_CONFIG.MIN_MESSAGE_LENGTH} characters long.`,
      field: 'message'
    };
  }

  // Check maximum message length
  if (message.length > FORM_CONFIG.MAX_MESSAGE_LENGTH) {
    return {
      valid: false,
      message: `Message is too long. Please keep it under ${FORM_CONFIG.MAX_MESSAGE_LENGTH} characters.`,
      field: 'message'
    };
  }

  // Validate email format
  if (!validateEmail(email)) {
    return {
      valid: false,
      message: 'Please enter a valid email address.',
      field: 'email'
    };
  }

  // Check for spam patterns in email
  if (checkSpamPatterns('email', email)) {
    console.log('Spam email detected');
    return {
      valid: false,
      message: 'Please use a valid email address.',
      field: 'email'
    };
  }

  // Check for spam patterns in name
  if (checkSpamPatterns('name', name)) {
    console.log('Spam name detected');
    return {
      valid: false,
      message: 'Please enter a valid name.',
      field: 'name'
    };
  }

  // Check for spam patterns in message
  if (checkSpamPatterns('message', message)) {
    console.log('Spam message detected');
    return {
      valid: false,
      message: 'Please avoid promotional content and excessive special characters.',
      field: 'message'
    };
  }

  // Check for excessive capitalization
  const upperCaseRatio = (message.match(/[A-Z]/g) || []).length / message.length;
  if (upperCaseRatio > FORM_CONFIG.MAX_UPPERCASE_RATIO) {
    return {
      valid: false,
      message: 'Please avoid excessive capitalization.',
      field: 'message'
    };
  }

  return { valid: true };
}
