
$(document).ready(function(){   /* Code inside will load after DOM is loaded. Needed for jQuery */
   $("#add").click(function(){   /* What happens when user clicks ADD */
       var today = new Date();   /* Gets the current date */
       var date = today.getDate()+"."+(today.getMonth()+1)+"."+today.getFullYear();
      /* Gets the numbers from date provided by var today and compiles them in the desired format */
       var heading = $("#heading").val();
       var paragraph = $("#field").val();
       if (paragraph != ""){   /* Prevents creating empty cells if field is empty*/
         $("#entries tbody").prepend($("<tr><td>"+ date +"</td><td>"+ paragraph +
            "</td><td><button type='button' class='remove btn'>REMOVE PARAGRAPH</button></td><tr>"));
            /* Adds table row with date, paragraph and remove button */
         $("#field").val("");   /* Clears the field after adding the entry*/
       }
       if (heading != ""){   /* Prevents creating empty cells if field is empty */
         $("#entries tbody").prepend($("<tr><td>"+ "" +"</td><th>"+ heading +
            "</th><td><button type='button' class='remove btn'>REMOVE HEADING</button></td><tr>"));
            /* Adds table row with empty cell, heading and remove button */
         $("#heading").val("");   /* Clears the field after adding the entry */
       }
   });
   $(document).on("click", "button.remove", function(){
       if (confirm("Remove entry?")) {   /* Asks for user confirmation */
           $(this).closest("tr").remove();   /* Removes the row of table if pressed OK */
         }
   });
 });
 function darkMode() {   /* Toggles dark mode on body */
   var element = document.body;
   element.classList.toggle("darkMode");
 }
