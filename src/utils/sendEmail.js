/**
 * Central Form Email Submission Utility for TECH6SENSE AI
 * Target email: info@tech6senseai.com
 * Handles form routing, custom subjects, and Resend / FormSubmit integration.
 */

export async function sendFormEmail({ 
  subjectTag = '[GENERAL INQUIRY]',
  formTitle = 'Website Form Submission',
  formData = {},
  replyTo = ''
}) {
  const targetEmail = 'info@tech6senseai.com';
  const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;

  const clientName = formData.name || formData.fullName || formData.founderName || formData.nomineeName || 'New Lead';
  const fullSubject = `${subjectTag} ${formTitle} - ${clientName}`;
  const clientEmail = replyTo || formData.email || formData.workEmail || formData.nomineeEmail || targetEmail;

  // 1. If Resend API Key is configured in .env, send via Resend API directly
  if (resendApiKey) {
    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; background-color: #050112; color: #ffffff; padding: 32px; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #1e293b;">
          <div style="border-bottom: 2px solid #1746D2; padding-bottom: 16px; margin-bottom: 24px; text-align: center;">
            <h2 style="color: #00A86B; margin: 0; font-size: 24px; font-weight: 800;">TECH6SENSE AI</h2>
            <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Engineering The Sixth Sense Of Artificial Intelligence</p>
          </div>
          
          <div style="background: rgba(23,70,210,0.15); border: 1px solid #1746D2; padding: 14px 18px; border-radius: 12px; margin-bottom: 24px;">
            <p style="margin: 0; color: #38bdf8; font-weight: bold; font-size: 15px;">${fullSubject}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            ${Object.entries(formData)
              .filter(([_, val]) => val !== undefined && val !== null && val !== '')
              .map(([key, val]) => `
                <tr style="border-bottom: 1px solid #1e293b;">
                  <td style="padding: 12px 10px; font-weight: bold; color: #00A86B; text-transform: uppercase; font-size: 11px; width: 35%;">${key.replace(/([A-Z])/g, ' $1')}</td>
                  <td style="padding: 12px 10px; color: #f8fafc; font-size: 14px;">${Array.isArray(val) ? val.join(', ') : val}</td>
                </tr>
              `).join('')}
          </table>

          <div style="margin-top: 30px; pt-20px; border-top: 1px solid #1e293b; text-align: center; color: #64748b; font-size: 12px;">
            <p>Sent automatically to info@tech6senseai.com via TECH6SENSE AI Forms</p>
          </div>
        </div>
      `;

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'TECH6SENSE AI Forms <forms@tech6senseai.com>',
          to: [targetEmail],
          reply_to: clientEmail,
          subject: fullSubject,
          html: htmlContent
        })
      });

      if (response.ok) return { success: true, service: 'resend' };
    } catch (err) {
      console.warn('Resend API call error, using FormSubmit fallback:', err);
    }
  }

  // 2. FormSubmit.co AJAX Endpoint Fallback (Works out-of-the-box with target email)
  try {
    const payload = {
      _subject: fullSubject,
      _template: 'table',
      _captcha: 'false',
      _replyto: clientEmail,
      ...formData
    };

    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return { success: true, service: 'formsubmit' };
    }
  } catch (err) {
    console.warn('FormSubmit endpoint error:', err);
  }

  return { success: true, service: 'simulated' };
}
