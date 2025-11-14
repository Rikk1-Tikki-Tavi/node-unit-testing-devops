/**
 * User Authentication Validator
 * Functions to validate email and password formats
 */

/**
 * Validates email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if email format is valid
 */
function validateEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    
    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates password strength
 * Requirements: minimum 8 characters, at least 1 uppercase letter, at least 1 number
 * @param {string} password - Password to validate
 * @returns {boolean} - True if password meets requirements
 */
function validatePassword(password) {
    if (typeof password !== 'string') {
        return false;
    }
    
    // Check minimum length
    if (password.length < 8) {
        return false;
    }
    
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    
    // Check for at least one number
    if (!/[0-9]/.test(password)) {
        return false;
    }
    
    return true;
}

module.exports = {
    validateEmail,
    validatePassword
};