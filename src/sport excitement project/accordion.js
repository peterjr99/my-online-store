import React from "react"
import "react-bootstrap"
import "./app.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

const faqdatas = [
  {
      item:"When can we expect Velosaty to launch?"
  },
  {
      item:"When can we expect Velosaty to launch?"
  },
  {
      item:"When can we expect Velosaty to launch?"
  },
  {
      item:"When can we expect Velosaty to launch?"
  }
]



function Accordions() {
  return (
    <div className=" accordion-div container-fluid  ">
     <span className="faqtitle"> FAQ </span>

     {faqdatas.map((faqdata) => (
        
      <div className="faqdiv">
     <div className="faq-individual">
        <p className="faqtext"> {faqdata.item} </p>
        <FontAwesomeIcon icon={faChevronDown} className="arrowdownicon"/>
      
        </div>
     </div>

      ))}

     
      
        </div>
     
    
  );
}

export default Accordions;

 