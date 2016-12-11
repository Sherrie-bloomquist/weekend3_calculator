[x] set up folders and files needed  
[x] install jquery, Node, and Express  
[x] connect to server on port 8080  
[x] set up route for the index.html on base url
[x] create 2 input boxes, 1 drop down box, 1 enter button, 1 clear button   
[] set up post and get routes that fire on button click  
[x] client side is taking in the 2 numerical values and mathematical operation and bundling in an object to send to the server { x: 3, y: 4, type: "Add" }  
[] server side is performing the logic   
[] send answer back down to client side to display on the DOM  
[x] clear button resets the experience  


Weekend Challenge 3: Your Own Calculator

Welcome to your third weekend challenge!

We are going to be building a calculator application using jQuery, Node, and Express, all hosted on Heroku!

The logic for the calculator needs to be housed on the Server, where the client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM). Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this: { x: 3, y: 4, type: "Add" }

Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.

Finally, build a 'clear' button that resets the whole experience.
