import classes from './ChoresList.module.css';

export default function ChoresList () {
   return <p>
      <div className='choresText'>
      <ol> <h2 className={classes.choresHeading}>Chores to do!</h2>
         <li className={classes.choresText}>Finish Laundry</li>
         <li className={classes.choresText}>Fold Clothes</li>
         <li className={classes.choresText}>Empty Dishwasher</li>
      </ol>
      </div>   
   </p>;
}

