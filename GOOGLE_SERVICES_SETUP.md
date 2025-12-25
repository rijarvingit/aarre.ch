# Google Services Setup Guide

This guide will help you set up Google Analytics 4 and Google reCAPTCHA v3 for the Aarre Intelligence website.

## 1. Google Analytics 4 Setup

### Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon in the bottom left)
3. In the **Property** column, click **Create Property**
4. Enter property details:
   - Property name: `Aarre Intelligence`
   - Reporting time zone: Select your timezone (e.g., `Switzerland - Zurich`)
   - Currency: `CHF - Swiss Franc`
5. Click **Next**
6. Fill in business details and click **Create**
7. Accept the Terms of Service

### Step 2: Set Up a Web Data Stream

1. In the **Web** section, click **Add stream**
2. Enter your website URL: `https://aarre.ch`
3. Stream name: `Aarre Intelligence Website`
4. Click **Create stream**

### Step 3: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this ID

### Step 4: Update the Code

Update the Google Analytics ID in the following file:

**File:** `src/components/CookieConsent.tsx`

```typescript
// Line 7: Replace with your actual GA4 Measurement ID
const GA_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your Google Analytics ID
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

---

## 2. Google reCAPTCHA v3 Setup

### Step 1: Register Your Site

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click the **+** button to create a new site
3. Fill in the registration form:
   - **Label**: `Aarre Intelligence Website`
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add `aarre.ch` (and `localhost` for testing)
   - Accept the reCAPTCHA Terms of Service
4. Click **Submit**

### Step 2: Get Your Site Key

1. After registration, you'll see two keys:
   - **Site Key** (used in frontend)
   - **Secret Key** (used for server-side verification - not needed for FormSubmit.co)
2. Copy the **Site Key**

### Step 3: Update the Code

Update the reCAPTCHA site key in the following file:

**File:** `src/pages/Contact.tsx`

```typescript
// Line 9: Replace with your actual reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6LfjcDYsAAAAAHspeS8_p55hrQ5Z9ZyzNguAtVfk';
```

Replace the key with your actual reCAPTCHA v3 Site Key.

---

## 3. Testing

### Test Google Analytics

1. Build and deploy your site
2. Visit your website
3. Accept the cookie consent
4. Go to Google Analytics → Reports → Realtime
5. You should see your visit in real-time

### Test reCAPTCHA

1. Go to your Contact page
2. Fill out the form and submit
3. Check the browser console for: `✓ reCAPTCHA executed successfully`
4. The form should submit successfully

---

## 4. Form Security Features Active

Your contact form now includes these spam protection measures:

### ✅ Honeypot Field
- Hidden field that catches automated bots
- Bots will fill it out, humans won't see it
- Form automatically rejects submissions with content in this field

### ✅ Time-Based Validation
- Prevents rapid-fire submissions (minimum 3 seconds)
- Stops automated scripts and bots that submit too quickly
- Legitimate users won't notice this delay

### ✅ Content Analysis
- Detects spam keywords (viagra, casino, loan, etc.)
- Blocks excessive links in messages
- Prevents special character spam
- Checks for repeated characters and suspicious patterns
- Validates email formats and name patterns

### ✅ reCAPTCHA v3
- Invisible bot protection
- No user interaction required
- Analyzes user behavior to detect bots

### ✅ Client-Side Validation
- Multiple layers of form validation
- Real-time feedback for users
- Prevents submission of invalid data

---

## 5. Privacy Compliance

### Cookie Consent
- Users must explicitly accept cookies before Google Analytics loads
- Choice is stored in localStorage
- Users can decline analytics tracking

### Data Collection
- Google Analytics: Anonymized website usage data
- reCAPTCHA: Bot detection data (privacy-focused v3)
- Form data: Sent securely to FormSubmit.co

---

## 6. Troubleshooting

### Google Analytics Not Working
- Check that the Measurement ID is correct
- Ensure user accepted cookie consent
- Check browser console for errors
- Verify domain is added in GA4 settings

### reCAPTCHA Not Working
- Check that the Site Key is correct
- Ensure domain is registered in reCAPTCHA admin
- Check browser console for errors
- Verify reCAPTCHA script loads (check Network tab)

### Form Not Submitting
- Check browser console for JavaScript errors
- Ensure all required fields are filled
- Wait at least 3 seconds before submitting
- Verify FormSubmit.co configuration

---

## 7. Production Checklist

Before deploying to production:

- [ ] Update Google Analytics ID in `src/components/CookieConsent.tsx`
- [ ] Update reCAPTCHA Site Key in `src/pages/Contact.tsx`
- [ ] Test cookie consent banner
- [ ] Test Google Analytics tracking
- [ ] Test contact form submission
- [ ] Test reCAPTCHA verification
- [ ] Verify privacy policy links work
- [ ] Test on mobile devices

---

## Support

For issues with:
- **Google Analytics**: [GA4 Help Center](https://support.google.com/analytics)
- **reCAPTCHA**: [reCAPTCHA Help](https://developers.google.com/recaptcha/docs/faq)
- **FormSubmit**: [FormSubmit Documentation](https://formsubmit.co/documentation)
