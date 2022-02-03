-- Return the 10 most recently added devices, along with the respective users
-- Simply change the "10" in the code should you need more or less results

SELECT TOP 10 * FROM Devices
INNER JOIN Users ON Devices.user_id = Users.user_id
ORDER BY created DESC