/** Alpine.js x-data object for Create Account form (HTML copy tab) */
export const createAccountAlpineXData = `{
  submitting: false,
  showSuccess: false,
  showPassword: false,
  showConfirmPassword: false,
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  },
  errors: {},
  validateField(fieldName, value) {
    this.errors[fieldName] = '';
    if (fieldName === 'firstName' && !String(value).trim()) return 'First name is required';
    if (fieldName === 'lastName' && !String(value).trim()) return 'Last name is required';
    if (fieldName === 'email') {
      if (!String(value).trim()) return 'Email is required';
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(String(value))) return 'Please enter a valid email address';
    }
    if (fieldName === 'password') {
      if (!value) return 'Password is required';
      if (String(value).length < 8) return 'Password must be at least 8 characters';
    }
    if (fieldName === 'confirmPassword' && value !== this.formData.password) return 'Passwords do not match';
    if (fieldName === 'terms' && !value) return 'You must accept the terms and conditions';
    return '';
  },
  validateForm() {
    this.errors = {};
    let isValid = true;
    Object.keys(this.formData).forEach((field) => {
      if (field !== 'phone') {
        const error = this.validateField(field, this.formData[field]);
        if (error) {
          this.errors[field] = error;
          isValid = false;
        }
      }
    });
    return isValid;
  },
  async submitForm() {
    if (!this.validateForm()) {
      const firstError = document.querySelector('.error-input');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }
    this.submitting = true;
    await new Promise((resolve) => setTimeout(resolve, 1500));
    this.showSuccess = true;
    this.submitting = false;
  },
  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      terms: false
    };
    this.errors = {};
    this.showSuccess = false;
  }
}`
