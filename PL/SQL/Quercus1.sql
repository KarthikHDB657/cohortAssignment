DESCRIBE CO_EMPLOYERINFO;
DESCRIBE CO_EMPLOYERPOSITION;
Select * From CO_EMPLOYERINFO;

INSERT INTO CO_EMPLOYERINFO (EMPID,EMPFIRSTNAME,EMPLASTNAME,ADDRESS,DEPARTMENT,PROJECT,DOB,GENDER) VALUES (1,'Sanjay', 'Mehra','Hyderabad(HYD)','HR','P1',to_date('01-12-1976', 'dd-mm-yyyy'),'M');
INSERT INTO CO_EMPLOYERINFO (EMPID,EMPFIRSTNAME,EMPLASTNAME,ADDRESS,DEPARTMENT,PROJECT,DOB,GENDER) VALUES (2,'Ananya', 'Mishra','Delhi(DEL)','Admin','P2',to_date('02-05-1968', 'dd-mm-yyyy'),'F');
INSERT INTO CO_EMPLOYERINFO (EMPID,EMPFIRSTNAME,EMPLASTNAME,ADDRESS,DEPARTMENT,PROJECT,DOB,GENDER) VALUES (3,'Rohan', 'Diwan','Mumbai(BOM)','Account','P3',to_date('01-01-1980', 'dd-mm-yyyy'),'M');
INSERT INTO CO_EMPLOYERINFO (EMPID,EMPFIRSTNAME,EMPLASTNAME,ADDRESS,DEPARTMENT,PROJECT,DOB,GENDER) VALUES (4,'Sonia', 'Kulkarni','Hyderabad(HYD)','HR','P1',to_date('02-05-1982', 'dd-mm-yyyy'),'F');
INSERT INTO CO_EMPLOYERINFO (EMPID,EMPFIRSTNAME,EMPLASTNAME,ADDRESS,DEPARTMENT,PROJECT,DOB,GENDER) VALUES (5,'Ankit', 'Kapoor','Delhi(DEL)','Admin','P2',to_date('03-07-1994', 'dd-mm-yyyy'),'M');

INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (5,'Manager',to_date('01-05-2022', 'dd-mm-yyyy'),500000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (1,'Executive',to_date('02-05-2022', 'dd-mm-yyyy'),75000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (2,'Manager',to_date('01-05-2022', 'dd-mm-yyyy'),90000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (3,'Lead',to_date('02-05-2022', 'dd-mm-yyyy'),85000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (2,'Executive',to_date('01-05-2022', 'dd-mm-yyyy'),300000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (1,'Executive',to_date('02-05-2022', 'dd-mm-yyyy'),75000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (2,'Manager',to_date('01-05-2022', 'dd-mm-yyyy'),90000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (3,'Lead',to_date('02-05-2022', 'dd-mm-yyyy'),85000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (2,'Executive',to_date('01-05-2022', 'dd-mm-yyyy'),300000);
INSERT INTO CO_EMPLOYERPOSITION (EMPID,EMPPOSITION,DATEOFJOINING,SALARY) VALUES (110,'Executive',to_date('01-05-2022', 'dd-mm-yyyy'),300000);

Select * From CO_EMPLOYERPOSITION;

//1.Write a query to fetch the EmpFname from the EmployeeInfo table in upper case and use the ALIAS name as EmpName
Select UPPER(EMPFIRSTNAME) As EmpName
FROM CO_EMPLOYERINFO;

//2.Write a query to fetch the number of employees working in the department ‘HR’.
Select Count(EMPFIRSTNAME)
FROM CO_EMPLOYERINFO
WHERE DEPARTMENT = 'HR';

//3.Write a query to retrieve the first four characters of  EmpLname from the EmployeeInfo table.
SELECT substr(EMPLASTNAME,1,4) 
FROM CO_EMPLOYERINFO;

//4.Write a query to create a new table which consists of data and structure copied from the other table.
CREATE TABLE copied_EMPINFO
  AS (SELECT * FROM CO_EMPLOYERINFO);
Describe table copied_EMPINFO;

//5.Write a query to retrieve the EmpFname and EmpLname in a single column as “FullName”. The first name and the last name must be separated with space.
SELECT CONCAT(CONCAT(EMPFIRSTNAME,' '),EMPLASTNAME) as FullName from CO_EMPLOYERINFO;

//6.Write a query to retrieve Departments who have less than 2 employees working in it.
Select DEPARTMENT
from CO_EMPLOYERINFO 
where DEPARTMENT In (SELECT DEPARTMENT FROM CO_EMPLOYERINFO GROUP
BY DEPARTMENT HAVING COUNT(*)<2);

//7.Write a query to find the third-highest salary from the EmpPosition table.
select Max(SALARY)
from CO_EMPLOYERPOSITION
where SALARY not in
(select Max(SALARY)
from CO_EMPLOYERPOSITION
where SALARY not in 
(select Max(SALARY)
from CO_EMPLOYERPOSITION));

//8.Write a query to find the Nth highest salary from the table without using TOP/limit keyword.(Need to specify N)
SELECT SALARY FROM CO_EMPLOYERPOSITION e1 WHERE N-1 = (SELECT COUNT(DISTINCT SALARY) FROM CO_EMPLOYERPOSITION e2 WHERE e2.SALARY > e1.SALARY)

select * from(
select  SALARY, dense_rank() 
over(order by SALARY desc)r from CO_EMPLOYERPOSITION) 
where r=&n;

//9.Write a query to fetch 50% records from the EmployeeInfo table.
SELECT *
FROM CO_EMPLOYERINFO
ORDER BY EMPID
FETCH FIRST 50 PERCENT ROWS ONLY;

//10.Write a query to retrieve duplicate records from a table.
SELECT EMPID, COUNT(EMPID)
FROM CO_EMPLOYERPOSITION
GROUP BY EMPID
HAVING COUNT(EMPID) > 1;

/*Level 2 Assignment*/
/*1.Write a PL/SQL block to calculate the incentive of an employee whose ID is 110.*/
set serveroutput on;
DECLARE
  incentive   NUMBER(8,2);
BEGIN
  SELECT SALARY * 0.12 INTO incentive
  FROM CO_EMPLOYERPOSITION
  WHERE EMPID = 110;
DBMS_OUTPUT.PUT_LINE('Incentive  = ' || TO_CHAR(incentive));
END;

/*2.Write a PL/SQL program to check whether a given character is letter or digit.*/
set serveroutput on;
DECLARE
    get_character CHAR(1) := '&enter_a_character';
BEGIN
    IF ( get_character >= 'A' AND get_character <= 'Z' ) OR ( get_character >= 'a' AND get_character <= 'z' ) THEN
      dbms_output.Put_line ('entered character is a letter');
    ELSE
      dbms_output.Put_line ('entered character is not a letter');

      IF get_character BETWEEN '0' AND '9' THEN
        dbms_output.Put_line ('entered character is a digit');
      ELSE
        dbms_output.Put_line ('entered character is not a digit');
      END IF;
    END IF;
END; 

/* 3.Write a PL/SQL program to check whether a date falls on weekend i.e. SATURDAY or SUNDAY.*/
set serveroutput on;
DECLARE
date1 DATE := TO_DATE('&new_date', 'DD-MON-YYYY');
get_day VARCHAR2(15);
BEGIN
get_day := RTRIM(TO_CHAR(date1, 'DAY'));
IF get_day IN ('SATURDAY', 'SUNDAY') THEN
dbms_output.new_line;
DBMS_OUTPUT.PUT_LINE 
('The day of the given date is '||get_day||' and it falls on weekend');
ELSE
dbms_output.new_line;
DBMS_OUTPUT.PUT_LINE ('The day of the given date is '||get_day||' and it does not fall on the weekend');
END IF;
END;

/*4.Write a PL/SQL program to check whether a given number is positive, negative or zero.*/
set serveroutput on;
DECLARE
giv_num NUMBER := &get_num;
BEGIN
IF giv_num < 0 THEN
DBMS_OUTPUT.PUT_LINE ('The number '||giv_num||' is a negative number');
ELSIF giv_num = 0 THEN
DBMS_OUTPUT.PUT_LINE ('The number '||giv_num||' is equal to zero');
ELSE
DBMS_OUTPUT.PUT_LINE ('The number '||giv_num||' is a positive number');
END IF;
END;

/*5.Write a PL/SQL program to find whether a given string is palindrome or not.*/
set serveroutput on;
declare
  n number;
	m number;
	temp number:=0;
	rem number;

begin
	n:=&get_num;
	m:=n;
	
  while n>0
	loop
		rem:=mod(n,10);
		temp:=(temp*10)+rem;
		n:=trunc(n/10);
	end loop; -- end of while loop here
	
	if m = temp
	then
		dbms_output.put_line('true');
	else
		dbms_output.put_line('false');
	end if;
end;



/*6.Write a PL/SQL block to display the current date and time.*/
set serveroutput on;
DECLARE

BEGIN 

    -- prints date in  dd-mmm-yy
    dbms_output.put_line(sysdate);  

    -- print current date and time 
    dbms_output.put_line(TO_CHAR(sysdate,'yyyy-mm-dd hh:mm:ss')); 
END;

/*7.Write a PL/SQL block to calculate the area of a rectangle, given its length and width as input.*/
set serveroutput on;
DECLARE
  -- Declaration of length and assigning values 
  l NUMBER(4, 2) := &get_num; 
  --Declaration of breadth and assigning values 
  b NUMBER(4, 2) := &get_num; 
  --Declaration of a variable for Area of rectangle 
  a NUMBER(4, 2); 
BEGIN 
    
  -- calculate area
  a := l * b; 

 --Display area 
  dbms_output.Put_line('Area of the rectangle is  ' || a); 
 
END; 

/*8.Write a PL/SQL block to display the first 10 even numbers.*/
set serveroutput on;
DECLARE
      
     CNT NUMBER:=1;
    BEGIN
       WHILE(CNT <= 20) LOOP
               IF(MOD(CNT,2)=0) THEN
                      DBMS_OUTPUT.PUT_LINE(CNT);
              END IF;
               CNT:=CNT+1;
      END LOOP;
   END;
   
/*Level 3 Assignments*/

--CREATE OR REPLACE PACKAGE somepackage
--As 
--  Function ArraySum(type arr IS VARRAY(5) OF INTEGER) Return INTEGER;
----  --Procedure descendingArray(VARARRAY(3));
--End;
--/
/*Assignment 4*/
CREATE OR REPLACE FUNCTION reverseString(inputString IN varchar2)
RETURN VARCHAR2 IS
l_str varchar2(30):=inputString;
rev_str varchar2(20);
len  NUMBER;
BEGIN
len:=length(l_str);
  FOR i in REVERSE 1..len LOOP
    rev_str:=rev_str || substr(l_str,i,1);
  END LOOP;
  RETURN rev_str;
END;
/
set serveroutput on;
DECLARE
   input_str varchar2(30):='&enter_string';
   result_str varchar2(30);
BEGIN
   result_str := reverseString(input_str);
   dbms_output.put_line('Reverse of a string ' || result_str);
END;









