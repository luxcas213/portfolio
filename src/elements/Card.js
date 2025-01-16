import './Card.css';

function CardDefault({ title, startDate, onClick }) {
   return (
      <div class='ag-courses_item' onClick={onClick}>
         <a href='/#' class='ag-courses-item_link'>
            <div class='ag-courses-item_bg' />
            <div class='ag-courses-item_title'>{title}</div>
            <div class='ag-courses-item_date-box'>
               <span class='ag-courses-item_date'> {startDate}</span>
            </div>
         </a>
      </div>
   );
}

export default CardDefault;
