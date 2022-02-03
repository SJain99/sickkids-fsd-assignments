-- Groups devices together based on every column except device_id, and selects based on minimum device_id
-- Deletes every device that meets the same criteria, but has a different device_id

DELETE FROM Devices
WHERE device_id NOT IN
(
    SELECT MIN(device_id)
    FROM Devices
    GROUP BY user_id, type, account_number, device_info, created, status
);