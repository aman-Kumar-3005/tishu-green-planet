/**
 * Tishu Green Planet - Form Validation & WhatsApp Conversion Engine
 * Validates form inputs and handles direct WhatsApp messaging integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactFormValidation();
  initNewsletterValidation();
});

/**
 * 1. Contact Form Client-side Validation & WhatsApp Routing
 */
function initContactFormValidation() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const phoneInput = contactForm.querySelector('#userPhone');
  const emailInput = contactForm.querySelector('#userEmail');
  const nameInput = contactForm.querySelector('#userName');
  const serviceInput = contactForm.querySelector('#userService');
  const messageInput = contactForm.querySelector('#userMessage');
  const alertContainer = document.getElementById('formStatusAlert');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      markInvalid(nameInput, 'Please enter your full name (minimum 2 characters).');
      isValid = false;
    } else {
      markValid(nameInput);
    }

    // Validate Phone (10 digits standard in India)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phoneInput.value.replace(/\s+/g, '').replace(/^(\+91|91)/, '');
    if (!phoneRegex.test(cleanPhone)) {
      markInvalid(phoneInput, 'Please enter a valid 10-digit Indian mobile number.');
      isValid = false;
    } else {
      markValid(phoneInput);
    }

    // Validate Email (standard format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      markInvalid(emailInput, 'Please enter a valid email address.');
      isValid = false;
    } else {
      markValid(emailInput);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
      markInvalid(messageInput, 'Please enter your message or query details.');
      isValid = false;
    } else {
      markValid(messageInput);
    }

    if (!isValid) return;

    // If valid, create WhatsApp message and prompt user
    const serviceChosen = serviceInput ? serviceInput.value : 'General Inquiry';
    const clientWhatsAppNumber = '919876543210'; // Placeholder to be replaced with client WhatsApp

    const formattedMessage = encodeURIComponent(
      `🌱 *New Website Inquiry - Tishu Green Planet*\n\n` +
      `*Name:* ${nameInput.value.trim()}\n` +
      `*Phone:* ${phoneInput.value.trim()}\n` +
      `*Email:* ${emailInput.value.trim()}\n` +
      `*Interest / Service:* ${serviceChosen}\n` +
      `*Message:* ${messageInput.value.trim()}`
    );

    const waUrl = `https://wa.me/${clientWhatsAppNumber}?text=${formattedMessage}`;

    if (alertContainer) {
      alertContainer.innerHTML = `
        <div class="alert alert-success d-flex align-items-center gap-3 p-3 rounded-3" role="alert">
          <i class="fas fa-check-circle fs-3 text-success"></i>
          <div>
            <strong>Thank you, ${nameInput.value.trim()}!</strong> Your message is ready.
            <div class="mt-2">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-custom btn-whatsapp-custom py-1 px-3">
                <i class="fab fa-whatsapp"></i> Send via WhatsApp Directly
              </a>
            </div>
          </div>
        </div>
      `;
      alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Optionally redirect to WhatsApp after 2 seconds
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);

    contactForm.reset();
    resetValidationClasses([nameInput, phoneInput, emailInput, messageInput]);
  });

  function markInvalid(input, errorText) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('form-feedback')) {
      feedback.textContent = errorText;
      feedback.classList.remove('valid');
      feedback.classList.add('invalid');
    }
  }

  function markValid(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains('form-feedback')) {
      feedback.textContent = '';
      feedback.classList.remove('invalid');
      feedback.classList.add('valid');
    }
  }

  function resetValidationClasses(inputs) {
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
      const feedback = input.nextElementSibling;
      if (feedback && feedback.classList.contains('form-feedback')) {
        feedback.textContent = '';
        feedback.classList.remove('valid', 'invalid');
      }
    });
  }
}

/**
 * 2. Newsletter Subscription Feedback
 */
function initNewsletterValidation() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (!newsletterForm) return;

  const emailInput = newsletterForm.querySelector('input[type="email"]');

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailInput) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('🌱 Thank you for subscribing to Tishu Green Planet updates!');
    emailInput.value = '';
  });
}
