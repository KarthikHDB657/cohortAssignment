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
