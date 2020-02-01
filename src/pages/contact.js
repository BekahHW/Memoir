import React, { useState } from "react";

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")


const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${name}`)
}
return(
  <form onSubmit={handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true">
   <input type="hidden" name="bot-field" />
  <label>
    Email
    <input type="email" name="email" value={email}
          onChange={e => setEmail(e.target.value)} required/>
  </label>
  <label>
    Name
    <input type="text" value={name}
          onChange={e => setName(e.target.value)} />
  </label>
  <label>
    Message
    <textarea type="text" value={message} onChange={e => setMessage(e.target.value)}
     required/>
  </label>
  <button type="submit">Submit</button>

</form>
)}

export default ContactPage
