Notebook
========

This is a project assignment as part of IvanOnTech Academy course. It is a webpage intended as an online notebook for writing one or few paragraphs each day. It could be used for blogging, for keeping track of events or tasks, or as a diary.

At the current form the work can be saved by saving the webpage with browser's Save As function and rewriting the file after next edit. Then, to make this notebook accessible online, the user needs another service like Google Docs. In real life other functions would be added to the script that send the user input to a server and then request this data when the page is opened again.

How it works
------------
* On top of the page there is a button for switching to a simple dark mode.
* In the first text area user gives a heading to a paragraph.
* In the second text area user writes the paragraph.
* When the ADD button is pressed, two table rows are created. The first one contains the heading and a button for removing it. The second row contains the current date, the paragraph and a button for removing this row.
* If both areas are empty, ADD button does nothing. If one of the areas is filled, its assigned function is executed, meaning that it is possible to add only a heading or only a paragraph.
* Unnecessary or wrong entries can be removed using the REMOVE buttons. As the heading and paragraph are separate entries, they can also be removed separately. This enables, for example, to remove a heading, add more paragraphs and add the heading again on top of all paragraphs. 
* New entries are added on top of the table. It is possible to remove an entry from any position, but it is not possible to add another one in its place unless it was on the top. 

Improvement points
------------------
* To enable replacing older entries, more functions could be added. For example, it would be possible to move table rows up and down. On the other hand, inability to edit can be seen as a feature of trust or safety.
* The current way of saving work is inconvenient. As mentioned, the data should also be sent to a server, not only displayed on the webpage.