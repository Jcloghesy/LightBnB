-- ========================================================================= --
-- ===============  04_MOST_VISITED_CITIES.SQL  ============================ --

SELECT properties.city, COUNT(reservations) AS total_reservations
FROM reservations
JOIN properties ON properties.id = property_id
GROUP BY city
ORDER BY total_reservations DESC;


-- ========================================================================= --
-- ========================================================================= --
