/** Alpine.js x-data for Complete Profile form */
export const profileSetupAlpineXData = `{
  submitting: false,
  showSuccess: false,
  formData: {
    avatar: '',
    firstName: '',
    lastName: '',
    bio: '',
    location: '',
    website: '',
    jobTitle: '',
    company: '',
    facebook: '',
    linkedin: ''
  },
  errors: {},
  validateField(fieldName, value) {
    this.errors[fieldName] = '';
    if (fieldName === 'firstName' && !String(value).trim()) return 'First name is required';
    if (fieldName === 'lastName' && !String(value).trim()) return 'Last name is required';
    if (fieldName === 'bio' && String(value).length > 200) return 'Bio must be less than 200 characters';
    if (fieldName === 'website' && value && !/^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*\\/?$/.test(value)) {
      return 'Please enter a valid website URL';
    }
    if (fieldName === 'facebook' && value && !/^(https?:\\/\\/)?(www\\.)?facebook\\.com\\/[a-zA-Z0-9(.?)?]/.test(value)) {
      return 'Please enter a valid Facebook URL';
    }
    return '';
  },
  validateForm() {
    this.errors = {};
    let isValid = true;
    ['firstName', 'lastName'].forEach((field) => {
      const error = this.validateField(field, this.formData[field]);
      if (error) {
        this.errors[field] = error;
        isValid = false;
      }
    });
    ['bio', 'website', 'facebook'].forEach((field) => {
      if (this.formData[field]) {
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
  handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('File size must be less than 2MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.formData.avatar = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}`
