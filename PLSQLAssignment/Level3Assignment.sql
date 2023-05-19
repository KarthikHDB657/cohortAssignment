
/*Write a PL/SQL block to create a trigger that automatically updates a table with the current date and time whenever a row is inserted.*/
---------------------
CREATE TABLE sam_Table (
    sampe_date        DATE,
    description       VARCHAR(30)
);
CREATE OR REPLACE TRIGGER new_trigger
    AFTER INSERT ON CO_EMPLOYERINFO
    FOR EACH ROW
DECLARE
    empno         CO_EMPLOYERINFO.EMPID%TYPE;
    action        VARCHAR2(7);
BEGIN
    action := 'Added';
    empno := :NEW.EMPID;
	
    INSERT INTO sam_Table VALUES (SYSDATE,
        action || ' employee # ' || empno);
		
Exception
 When Others
   Then raise_application_error(-20001,sqlerrm);		
END;

/*Write a PL/SQL block to create a stored procedure that takes in two dates and returns a list of employees who were hired between those dates, along with their hire dates and job title.*/
-----------------------------------------
CREATE TABLE EMPLOTABLE
(EMPLOYEE_ID NUMBER PRIMARY KEY,
 FIRST_NAME VARCHAR(20) NOT NULL,
 LAST_NAME VARCHAR(25) NOT NULL,
 EMAIL VARCHAR(25) NOT NULL,
 PHONE_NUMBER VARCHAR(20) NOT NULL,
 HIRE_DATE DATE NOT NULL,
 JOB_ID NUMBER NOT NULL,
 SALARY DECIMAL NOT NULL,
 DEPARTMENT_ID NUMBER NOT NULL
 
);

Describe EMPLOTABLE;
INSERT INTO EMPLOTABLE (EMPLOYEE_ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,DEPARTMENT_ID)
VALUES (1,'Tony','Starc','starc@gmail.com','0123456789',TO_DATE('15/1/2008','DD/MM/YYYY'),1,45000.00,1);
INSERT INTO EMPLOTABLE (EMPLOYEE_ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,DEPARTMENT_ID)
VALUES (2,'Bruce','Wayne','bruce@gmail.com','0123456788',TO_DATE('15/1/2009','DD/MM/YYYY'),1,40000.00,1);
INSERT INTO EMPLOTABLE (EMPLOYEE_ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,DEPARTMENT_ID)
VALUES (3,'Larry','Ellison','larry@gmail.com','0123456787',TO_DATE('15/1/2010','DD/MM/YYYY'),1,30000.00,1);
INSERT INTO EMPLOTABLE (EMPLOYEE_ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,DEPARTMENT_ID)
VALUES (4,'Steve','Jobs','steve@gmail.com','0123456786',TO_DATE('15/1/2011','DD/MM/YYYY'),2,35000.00,2);
INSERT INTO EMPLOTABLE (EMPLOYEE_ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,DEPARTMENT_ID)
VALUES (5,'Remy','Lebeau','remy@gmail.com','0123456785',TO_DATE('15/1/2012','DD/MM/YYYY'),2,30000.00,2);
INSERT INTO EMPLOTABLE (EMPLOYEE_ID,FIRST_NAME,LAST_NAME,EMAIL,PHONE_NUMBER,HIRE_DATE,JOB_ID,SALARY,DEPARTMENT_ID)
VALUES (6,'Clark','Kent','clark@gmail.com','0123456784',TO_DATE('15/1/2013','DD/MM/YYYY'),2,20000.00,2);


SET SERVEROUTPUT ON
CREATE OR REPLACE PROCEDURE EMP_DATE_PROC(PROC_SDATE    in date,
                                              PROC_EDATE      in date)IS
BEGIN
  FOR I IN (SELECT EMPLOYEE_ID,
                   FIRST_NAME,
                   LAST_NAME,
                   JOB_ID,
                   HIRE_DATE,
                   SALARY
            FROM EMPLOTABLE
            WHERE HIRE_DATE between PROC_SDATE and PROC_EDATE
          )
   LOOP
     DBMS_OUTPUT.PUT_LINE('EMPLOYEE -> '||I.EMPLOYEE_ID||' -> NAME -> '||I.FIRST_NAME||' '||I.LAST_NAME||' -> JOB_ID -> '||I.JOB_ID||' HIRE_DATE -> '||I.HIRE_DATE||' -> SALARY -> '||I.SALARY);
   END LOOP;
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('ERROR -> '||SQLERRM);
END;
/
set serveroutput on;
DECLARE
   PROC_SDATE DATE:=TO_DATE('15/1/2008','DD/MM/YYYY');
   PROC_EDATE DATE:=TO_DATE('15/1/2013','DD/MM/YYYY');
BEGIN
    EMP_DATE_PROC(PROC_SDATE,PROC_EDATE);
   
END;

/*Write a PL/SQL block to create a nested table type, insert data into the nested table, and then query the nested table to retrieve specific data.*/
--------------------
SET SERVEROUTPUT ON;
CREATE OR REPLACE TYPE my_nested_table IS TABLE OF VARCHAR2 (10);
/
CREATE TABLE student_prof(
	 stud_id    	NUMBER,
	 stud_name  	VARCHAR2 (20),
	 student_schedule   my_nested_table
) NESTED TABLE student_schedule STORE AS nested_tab_space;
/
INSERT INTO student_prof (stud_id, stud_name, student_schedule)
VALUES (101, 'Maths', my_nested_table('mon', 'Fri'));
INSERT INTO student_prof (stud_id, stud_name, student_schedule)
VALUES (102, 'Computer', my_nested_table('mon','wed', 'Fri'));
/
--querying
SELECT * FROM student_prof;



/*Reversal of A String*/
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

/*First question*/
create type num_array as table of number;
Create or replace package DemoPack48
As 
  
  FUNCTION ArraySum(arrNum num_array) RETURN number;
--  PROCEDURE SORTARRAYDESC(arrNum num_array);
END;
/
Create or replace package body DemoPack48
As 
 Function ArraySum(arrNum num_array)
 Return number
 IS
 addition NUMBER(5);
 BEGIN
  addition:=0;
  for i in 1...arrNum.count Loop
   addition:= addition + arrNum(i);
  end loop;
  return addition;
 END;
END;
/

set serveroutput on
declare 
 myarray num_array;
 begin 
  myarray = num_array();
  myarray.extend(5)
  myarray(1):=1;
  myarray(2):=2;
  myarray(3):=3;
  myarray(4):=4;
  myarray(5):=5;
  DBMS_OUTPUT.PUT_LINE(DemoPack48.ArraySum( myarray ));
end;
/

/*1st question assignment*/
CREATE OR REPLACE PACKAGE test_package AS

  TYPE int_array IS TABLE OF INTEGER;
  
  FUNCTION calculate_sum(arr IN int_array) RETURN INTEGER;
  
  PROCEDURE sort_array_desc(arr IN OUT int_array);
  
END array_operations;
/

CREATE OR REPLACE PACKAGE BODY test_package AS

  FUNCTION calculate_sum(arr IN int_array) RETURN INTEGER IS
    total_sum INTEGER := 0;
  BEGIN
    FOR i IN 1..arr.COUNT LOOP
      total_sum := total_sum + arr(i);
    END LOOP;
    RETURN total_sum;
  END calculate_sum;
  
  PROCEDURE sort_array_desc(arr IN OUT int_array) IS
    temp INTEGER;
  BEGIN
    FOR i IN 1..arr.COUNT-1 LOOP
      FOR j IN i+1..arr.COUNT LOOP
        IF arr(j) > arr(i) THEN
          temp := arr(i);
          arr(i) := arr(j);
          arr(j) := temp;
        END IF;
      END LOOP;
    END LOOP;
  END sort_array_desc;
  
END test_package;
/

-- Call the function to calculate the sum of an array
DECLARE
  arr int_array := int_array(1, 2, 3, 4, 5);
  total_sum INTEGER;
BEGIN
  total_sum := test_package.calculate_sum(arr);
  DBMS_OUTPUT.PUT_LINE('Sum of the array: ' || total_sum);
END;
/

-- Call the procedure to sort an array in descending order
DECLARE
  arr int_array := int_array(9, 5, 2, 7, 1, 4);
BEGIN
  test_package.sort_array_desc(arr);
  DBMS_OUTPUT.PUT_LINE('Sorted array: ' || arr);
END;
/


  

   
 
