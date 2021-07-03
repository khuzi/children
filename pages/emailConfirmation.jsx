import React from "react";

export default function EmailConfirmation() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div>
        <h1>Thank You For Signing Up</h1>
      </div>
      <div className="w-50 mt-3">
        <p>
          We have just sent you an email. If you are unable to find, then simply
          search for 'Inspirable'. Once you have confirmed your email, we'll
          send you your free eBook. If there are issues in you receiving the
          email kindly complete the form again or email us at
          contactus@inspirable.io.
        </p>
      </div>
    </div>
  );
}
