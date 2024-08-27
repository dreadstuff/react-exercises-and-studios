import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: 'Favorites', value:'favorites'},{label: 'To Try', value:'to try'},{label: 'Yuck', value:'yuck'}];
   const [boardName, setName] = useState('no boards yet');
   const types = boards.map((board) => {
      return <option value={board.value}>{board.label}</option>
   
});
   const handleChange = (event) => {
      setName(event.target.value)
   };

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board </label>
       <select value={boardName} onChange={handleChange}>
        {types}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
} 