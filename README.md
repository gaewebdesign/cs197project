# cs197project
CS 197 React Project

to run this React App
server directory

note the sql files
test.sql  contains SQL commands to install tables into the 'test' database
data.sql  contains SQL commands to install tables and data into the 'cert' database

you can pick your databases (but then need to change some of the code )

MYSQL commands
mysql -uroot -p
(enter password at the prompt
mysql -uroot -pYourPassword
create database test;
create database cert;

Import the test.sql , data.sql files 
mysql -uroot -ptomatoxxxx test < test.sql 
mysql -uroot -ptomatoxxxx cert < data.sql 

From mysql 
verify the database/tables are there

run the Server
npm run devStart


CLIENT
go into client direcotry
npm install   (uses package.json to install packages)

npx create-react-app  (start React app)

IF THIS CRASHES
the express server is not properly set up
MAYBE: 
didn't run the express server
didn't install the two databases/table (test,cert)

GITHUB commands

git clone https://github.com/gaewebdesign/cs197project  .

git add <file>
git commit -m "my message"
git push
