export const messages = [
  {
    id: 1,
    href: "#",
    from: "Apple Store",
    subject: "Verify Your Apple ID",
    status: "Unread",
    isExternal: true,
    receiver: ["me"],
    avatar: "<img src='/images/apple.png' alt='Apple Logo' />",
    datetime: "2023-04-03T20:21",
    preview: "Your Apple ID password has expired. Please login and verify your Apple ID and create a new password. If this is not done in the next two hours your account is at risk of loosing things like personal images, saved file and documents, and important emails.",
    body: `
      <html>
        <head>
          <style>
            .image {
              width: 40px;
              margin-bottom: 30px;
            }
            .header {
              font-size: 40px;
              margin-bottom: 30px;
            }
            .sub-header {
              font-size: 24px;
              margin-bottom: 30px;
            }
            .content {
              margin-bottom: 30px;
            }
            .link {
              color: #2DA4FF;
              text-decoration-line: underline;
            }
          </style>
        </head>
        <body>
          <img class='image' src='/images/apple.png' alt='Apple Logo' />
          <div>
            <h1 class="header">Verify Your Apple ID</h1>
            <h3 class="sub-header">Your Apple ID password has expired.</h3>
            <p class="content">Please login and verify your Apple ID and create a new password. If this is not done in the next two hours your account is at risk of loosing things like personal images, saved file and documents, and important emails.</p>
            <a href="#" class="link">Verify your Apple ID</a>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 2,
    href: "#",
    from: "Melody Cheung",
    status: "Unread",
    subject: "Conference Room For All-Hands",
    isExternal: false,
    receiver: ["Marketing Team"],
    avatar: "<img src='/images/Melody.png' alt='Melody' />",
    datetime: "2023-04-03T19:35",
    preview: "We've rescheduled our team's all hands to be at 1pm next Friday. The conference room has been updated on your calendar invite.",
    body: `
      <html>
        <head>
          <style>
          .header {
            font-size: 40px;
            margin-bottom: 30px;
          }
          .sub-header {
            font-size: 24px;
            margin-bottom: 30px;
          }
          .content {
            margin-bottom: 30px;
          }
          .link {
            color: #2DA4FF;
            text-decoration-line: underline;
          }
        </style>
        </head>
        <body>
          <div>
            <h1 class="header">Conference room for all all-hands</h1>
            <h3 class="content">We've rescheduled our team's all hands to be at 1pm next Friday. The conference room has been updated on your calendar invite.</h3>
            <p>Meeting agenda:</p>
            <ul class="content">
              <li>1. Go over last weeks wins and losses</li>
              <li>2. Zach will be showing designs for the PDP</li>
              <li>3. We will be finalizing sprint 3 deliverables</li>
            </ul>
            <p>See you all there</p>
            <p>Melody</p>
          </div>
        </body>
      </html>
    `
  },
  {
    id: 3,
    href: "#",
    from: "Stanley Knowles",
    role: "Office of Dr.",
    status: "Unread",
    subject: "Appointment w/ Dr. Knowles: 5/5",
    isExternal: false,
    receiver: ["me"],
    datetime: "2023-04-03T19:35",
    preview: "Your appointment with Dr. Knowles is this Thursday at 2:40. Please arrive by 2:30 and remember to bring your insurance card. If you have time to do the premedical screening before hand you can find a link below.",
    body: `
      <html>
        <head>
          <style>
          .header {
            font-size: 40px;
            margin-bottom: 30px;
          }
          .sub-header {
            font-size: 24px;
            margin-bottom: 30px;
          }
          .content {
            margin-bottom: 30px;
          }
          .link {
            color: #2DA4FF;
            text-decoration-line: underline;
          }
        </style>
        </head>
        <body>
          <div>
            <h1 class="header">Appointment w/ Dr. Knowles: 5/5</h1>
            <h3 class="content">Your appointment with Dr. Knowles is this Thursday at 2:40. Please arrive by 2:30 and remember to bring your insurance card. <br/>If you have time to do the premedical screening before hand you can find a link below.</h3>
            <a href="#" class="link">Verify your Apple ID</a>
            <p>We look forward to meeting you</p>
            <p>Dr. Stanley's Team</p>
          </div>
        </body>
      </html>
    `
  }
];
