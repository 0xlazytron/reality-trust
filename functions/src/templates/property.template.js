module.exports = function propertyTemplate(data) {
  const {
    name,
    email,
    phone,
    address,
    bedrooms,
    bathrooms,
    squareFeet,
    yearBuilt,
    condition,
    description,
    reasonForSelling,
    askingPrice,
    mortgageBalance,
    pictures = [],
    videos = []
  } = data;

  const imagesHTML = pictures.map(url => `
    <img 
      src="${url}" 
      style="width:100%; max-width:200px; border-radius:8px; margin:10px; object-fit:cover;"
    />
  `).join("");

  const videosHTML = videos.map(url => `
    <a href="${url}" target="_blank" style="display:block; margin:8px 0; color:#0054A8; text-decoration:none;">
      ▶️ Watch Video
    </a>
  `).join("");

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        background:#f2f2f2;
        font-family:Arial,sans-serif;
        margin:0;
        padding:0;
      }
      .container {
        max-width:700px;
        margin:40px auto;
        background:#ffffff;
        border-radius:12px;
        padding:30px;
        box-shadow:0 4px 15px rgba(0,0,0,0.1);
      }
      h2 {
        text-align:center;
        color:#0054A8;
        margin-bottom:30px;
      }
      .section-title {
        background:#0054A8;
        color:#fff;
        padding:10px 15px;
        border-radius:8px;
        margin-top:20px;
        margin-bottom:10px;
      }
      .row {
        display:flex;
        justify-content:space-between;
        padding:8px 0;
        border-bottom:1px solid #eee;
      }
      .row:last-child {
        border-bottom:none;
      }
      .label {
        font-weight:bold;
        color:#555;
      }
      p {
        color:#333;
        line-height:1.5;
      }
      .gallery {
        text-align:center;
        margin-top:15px;
      }
      .footer {
        text-align:center;
        margin-top:30px;
        font-size:12px;
        color:#999;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>🏠 New Property Submission</h2>

      <div class="section-title">Client Information</div>
      <div class="row"><span class="label">Name:</span><span>${name}</span></div>
      <div class="row"><span class="label">Email:</span><span>${email}</span></div>
      <div class="row"><span class="label">Phone:</span><span>${phone}</span></div>
      <div class="row"><span class="label">Address:</span><span>${address}</span></div>

      <div class="section-title">Property Details</div>
      <div class="row"><span class="label">Bedrooms:</span><span>${bedrooms}</span></div>
      <div class="row"><span class="label">Bathrooms:</span><span>${bathrooms}</span></div>
      <div class="row"><span class="label">Square Feet:</span><span>${squareFeet}</span></div>
      <div class="row"><span class="label">Year Built:</span><span>${yearBuilt}</span></div>
      <div class="row"><span class="label">Condition:</span><span>${condition}</span></div>
      <div class="row"><span class="label">Asking Price:</span><span>$${askingPrice}</span></div>
      <div class="row"><span class="label">Mortgage Balance:</span><span>$${mortgageBalance}</span></div>

      <p><strong>Description:</strong><br>${description}</p>
      <p><strong>Reason for Selling:</strong><br>${reasonForSelling}</p>

      ${pictures.length > 0 ? `
        <div class="section-title">Property Images 📸</div>
        <div class="gallery">${imagesHTML}</div>
      ` : ''}

      ${videos.length > 0 ? `
        <div class="section-title">Property Videos 🎥</div>
        <div class="gallery">${videosHTML}</div>
      ` : ''}

      <div class="footer">
        Realty Trust © ${new Date().getFullYear()}
      </div>
    </div>
  </body>
  </html>
  `;
};
