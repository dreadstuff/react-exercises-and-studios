import { useState } from 'react';

export default function ReportForm() {
    const [notes, setNotes] = useState("");

    const handleChange = (event) => {
        setNotes(event.target.value);
    }

    const handleSubmit = (event) => {
        alert("Form submitted");
        event.preventDefault();
    }

   return(
      <div>
         <form onSubmit={handleSubmit}>
            <label>Add your report here: <input type="textarea" value={notes} onChange={handleChange}/>
            </label>
            <input type="submit" />
         </form>

         <p>Preview: {notes}</p>
      </div>);
}