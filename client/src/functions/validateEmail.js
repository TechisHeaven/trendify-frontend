export function validateEmail(email) {
    
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the regular expression
    const isValidFormat = emailRegex.test(email);

    // Additional checks for specific properties
    const hasLocalPart = email.split("@")[0].length > 0; // Check if the local part is not empty
    const hasDomainPart = email.split("@")[1] && email.split("@")[1].length > 0; // Check if the domain part is not empty

    // Final validation: Check if the email is valid format and has non-empty local and domain parts
    const isValidEmail = isValidFormat && hasLocalPart && hasDomainPart;

    return isValidEmail;
  }
