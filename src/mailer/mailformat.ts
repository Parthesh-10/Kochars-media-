function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function userMail(parsedData: any) {
  const { name } = parsedData.data;
  return {
    from: `"Kochhar Media Planner" <${process.env.ADMIN_MAIL}>`,
    to: parsedData.data.email,
    subject: "Thank You for Contacting Us",
    html: `
    <h1>Hello ${capitalizeFirstLetter(name)}</h1>
    <p>Thank you for reaching out to us and for submitting the contact form.</p>
    <p>We’ve received your message and appreciate you taking the time to get in touch. Our team is currently reviewing your inquiry, 
    and we’ll get back to you as soon as possible.</p>
    <p>We look forward to connecting with you soon.</p>
    <p>Kind regards,</p>
    <p>Kochhar Media Planner Team</p>
  `,
  };
}

export function adminMail(parsedData: any) {
  const { name, phone, email, message } = parsedData.data;
  return {
    from: `"Contact Page" <${process.env.ADMIN_MAIL}>`,
    to: `${process.env.ADMIN_MAIL}`,
    subject: `Contact Form Submission`,
    html: `
   <h1>User Details</h1>
   <p>Name: ${name}</p>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `,
  };
}
