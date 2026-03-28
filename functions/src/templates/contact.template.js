module.exports = function contactTemplate(data) {
  const { name, email, phone, message } = data;
  const currentYear = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <style>
      body { background:#f2f2f2; font-family:Arial,sans-serif; margin:0; padding:0; }
      .container { max-width:600px; margin:40px auto; background:#ffffff; border-radius:12px; padding:30px; box-shadow:0 4px 15px rgba(0,0,0,0.1); }
      h2 { text-align:center; color:#0054A8; margin-bottom:30px; }
      .section-title { background:#0054A8; color:#fff; padding:10px 15px; border-radius:8px; margin-top:20px; margin-bottom:10px; font-weight:bold; }
      .row { display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid #eee; }
      .row:last-child { border-bottom:none; }
      .label { font-weight:bold; color:#555; width: 30%; }
      .value { color:#333; width: 70%; text-align: right; }
      .message-box { background:#f9f9f9; padding:15px; border-radius:8px; border:1px solid #eee; margin-top:10px; color:#333; line-height:1.6; }
      .footer { text-align:center; margin-top:30px; font-size:12px; color:#999; }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>📩 New Contact Inquiry</h2>
      
      <div class="section-title">Inquiry Details</div>
      <div class="row"><span class="label">Name:</span><span class="value">${name}</span></div>
      <div class="row"><span class="label">Email:</span><span class="value">${email}</span></div>
      <div class="row"><span class="label">Phone:</span><span class="value">${phone || 'N/A'}</span></div>

      <div class="section-title">Message</div>
      <div class="message-box">
        ${message.replace(/\n/g, '<br>')}
      </div>

      <div class="footer">
        Realty Trust © ${currentYear} | Automated Notification
      </div>
    </div>
  </body>
  </html>
  `;
};