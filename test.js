const { validateEmail, validatePassword } = require('./main');

describe('User Authentication Validator Tests', () => {
    
    // ========== EMAIL VALIDATION TESTS ==========
    
    describe('validateEmail - Valid Cases', () => {
        test('Valid Case 1: Standard email format should pass', () => {
            expect(validateEmail('user@example.com')).toBe(true);
        });

        test('Valid Case 2: Email with subdomain should pass', () => {
            expect(validateEmail('john.doe@company.co.id')).toBe(true);
        });
    });

    describe('validateEmail - Invalid Cases', () => {
        test('Invalid Case 1: Email without @ symbol should fail', () => {
            expect(validateEmail('userexample.com')).toBe(false);
        });

        test('Invalid Case 2: Email without domain should fail', () => {
            expect(validateEmail('user@')).toBe(false);
        });
    });

    // describe('validateEmail - Intentional Break Test', () => {
    //     test('BREAK TEST: Intentionally expecting wrong output', () => {
    //         // This test is designed to fail on purpose
    //         // Comment out this test for passing CI/CD run
    //         expect(validateEmail('valid@email.com')).toBe(false);
    //     });
    // });

    // ========== PASSWORD VALIDATION TESTS ==========
    
    describe('validatePassword - Valid Cases', () => {
        test('Valid Case 1: Strong password with all requirements should pass', () => {
            expect(validatePassword('Password123')).toBe(true);
        });

        test('Valid Case 2: Password with special characters should pass', () => {
            expect(validatePassword('MyP@ssw0rd!')).toBe(true);
        });
    });

    describe('validatePassword - Invalid Cases', () => {
        test('Invalid Case 1: Password too short should fail', () => {
            expect(validatePassword('Pass1')).toBe(false);
        });

        test('Invalid Case 2: Password without uppercase should fail', () => {
            expect(validatePassword('password123')).toBe(false);
        });

        test('Invalid Case 3: Password without numbers should fail', () => {
            expect(validatePassword('PasswordOnly')).toBe(false);
        });
    });
});