# cs197project
CS 197 React Project

React App requires server directory 
server directory 

note the sql files
pasadena.sql: SQL create pasadena database, create tables and fill with data  
It's a one line change in server/index.js if you want use another database name 
Also in the pasadena.sql file you will have to remove the first two lines   
which specify creates the pasadena database   
i.e delete these 2 lines  

create database pasadena;  
use pasadena;   






MYSQL commands 
mysql -uroot -pYourPassword < pasadena.sql

From mysql  
verify the database/tables/data  are there  

to run the Server 
npm run devStart  

CLIENT 
go into client direcotry
npm install   (uses package.json to install packages)

npm start (start React app)

to create the React app from scratch  
npx create-react-app . (in the client directory)  
install modules  
npm i bootstrap , mysql ...  
Copy over the files (replace App.js)  

the React App should start up with the UI 
(there are try... catches so it will at least start up with the express server)



GITHUB commands

git clone https://github.com/gaewebdesign/cs197project  .

git add <file>
git commit -m "my message"
git push
