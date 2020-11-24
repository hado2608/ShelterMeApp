-------------------------------------------------------------------
-- seed.sql
---- creates the sample database for the website listings
-------------------------------------------------------------------


-- table to store shelter data
CREATE TABLE IF NOT EXISTS shelter(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shelterName TEXT,
    shelterAddress TEXT,
    zipCode TEXT,
    phoneNumber TEXT,
    websiteURL TEXT
);

-- populate shelter table
INSERT INTO shelter VALUES(
    shelterName = 'Dorothy Day Center',
    shelterAddress = '183 Old Sixth Street Saint Paul, MN 55102',
    zipCode = '55102',
    phoneNumber = '(651) 647-2350',
    websiteURL = 'https://www.cctwincities.org/locations/'
);
INSERT INTO shelter VALUES(
    shelterName = 'Naomi Family Residence',
    shelterAddress = '77 E 9th Street St. Paul, MN 55101',
    zipCode = '55101',
    phoneNumber = '(651) 228-1800',
    websiteURL = 'https://www.ugmtc.org'
);
INSERT INTO shelter VALUES(
    shelterName = 'The Family Place',
    shelterAddress = '244 Tenth Street East Saint Paul, MN 55101',
    zipCode = '55101',
    phoneNumber = '(651) 225-9354',
    websiteURL = 'http://famplace.org/'
);
INSERT INTO shelter VALUES(
    shelterName = 'Union Gospel Mission Twin Cities',
    shelterAddress = '435 East University Avenue St. Paul, MN 55101',
    zipCode = '55101',
    phoneNumber = '(612) 292-1721',
    websiteURL = 'https://www.ugmtc.org/'
);
INSERT INTO shelter VALUES(
    shelterName = 'Higher Ground Saint Paul Shelter',
    shelterAddress = '435 Dorothy Day Place St. Paul, MN 55102',
    zipCode = '55102',
    phoneNumber = '(651) 647-2330',
    websiteURL = 'https://www.cctwincities.org/locations/higher-ground-saint-paul/'
);
INSERT INTO shelter VALUES(
    shelterName = 'Kingdom Pathways Freedom Outreach',
    shelterAddress = '1088 University Ave W St. Paul, MN 55104',
    zipCode = '55104',
    phoneNumber = '(651) 387-8393',
    websiteURL = 'http://www.kingdompathways.org/'
);
INSERT INTO shelter VALUES(
    shelterName = 'Catholic Charities Family Service Center',
    shelterAddress = '2001 Van Dyke Street Maplewood, MN 55109',
    zipCode = '55109',
    phoneNumber = '(651) 291-0211',
    websiteURL = 'https://www.cctwincities.org/locations/family-service-center/'
);
INSERT INTO shelter VALUES(
    shelterName = 'People Serving People Minneapolis',
    shelterAddress = '614 Third Street South Minneapolis, MN 55415',
    zipCode = '55415',
    phoneNumber = '(612) 332-4500',
    websiteURL = 'http://www.peopleservingpeople.org'
);
INSERT INTO shelter VALUES(
    shelterName = 'Hope Street Shelter for Young Adults',
    shelterAddress = '1121 East 46th Street Minneapolis, MN 55407',
    zipCode = '55407',
    phoneNumber = '(612) 827-9372',
    websiteURL = 'https://www.cctwincities.org/locations/hope-street-shelter/'
);
INSERT INTO shelter VALUES(
    shelterName = 'Mary`s Place',
    shelterAddress = '401 North 7th St Minneapolis, MN 55405',
    zipCode = '55405',
    phoneNumber = '(612) 338-4855',
    websiteURL = 'https://sharingandcaringhands.org/'
);

-- table to store tag data
CREATE TABLE IF NOT EXISTS tag(
    tagName TEXT PRIMARY KEY
);

-- populate tag table
INSERT INTO tag VALUES('Women only');
INSERT INTO tag VALUES('Meals provided');
INSERT INTO tag VALUES('Shower facilities');
INSERT INTO tag VALUES('Laundry facilities');
INSERT INTO tag VALUES('Medical care available');
INSERT INTO tag VALUES('Mail facilities');
INSERT INTO tag VALUES('Veteran services');
INSERT INTO tag VALUES('Religious affiliation');
INSERT INTO tag VALUES('Addiction and rehabilitation support');
INSERT INTO tag VALUES('Mental health services');
INSERT INTO tag VALUES('Education resources');
INSERT INTO tag VALUES('Day shelter only');
INSERT INTO tag VALUES('Overnight shelter only');
INSERT INTO tag VALUES('Women and children only');
INSERT INTO tag VALUES('Transitional housing');
INSERT INTO tag VALUES('Social services');
INSERT INTO tag VALUES('Childcare available');
INSERT INTO tag VALUES('Men only');
INSERT INTO tag VALUES('Pay-to-stay shelter');
INSERT INTO tag VALUES('Long-term care');
INSERT INTO tag VALUES('Felons allowed');
INSERT INTO tag VALUES('Job training available');
INSERT INTO tag VALUES('Family shelter');
INSERT INTO tag VALUES('Computer lab');
INSERT INTO tag VALUES('Youth shelter');
INSERT INTO tag VALUES('Clothing provided');
INSERT INTO tag VALUES('Bus cards available');

-- table to store tag assignment data
CREATE TABLE IF NOT EXISTS tagAssignment(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tagName TEXT,
    shelterId INTEGER
);

-- populate tag assignment table
INSERT INTO tagAssignment VALUES(tagName = 'Women only', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Meals provided', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Shower facilities', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Laundry facilities', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Medical care available', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Mail facilities', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Veteran services', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Addiction and rehabilitation support', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Mental health services', shelterId = 1);
INSERT INTO tagAssignment VALUES(tagName = 'Women and children only', shelterId = 2);
INSERT INTO tagAssignment VALUES(tagName = 'Addiction and rehabilitation support', shelterId = 2);
INSERT INTO tagAssignment VALUES(tagName = 'Education resources', shelterId = 2);
INSERT INTO tagAssignment VALUES(tagName = 'Meals provided', shelterId = 2);
INSERT INTO tagAssignment VALUES(tagName = 'Medical care available', shelterId = 2);
INSERT INTO tagAssignment VALUES(tagName = 'Religious affiliation', shelterId = 2);
INSERT INTO tagAssignment VALUES(tagName = 'Transitional housing', shelterId = 3);
INSERT INTO tagAssignment VALUES(tagName = 'Day shelter only', shelterId = 3);
INSERT INTO tagAssignment VALUES(tagName = 'Meals provided', shelterId = 3);
INSERT INTO tagAssignment VALUES(tagName = 'Social services', shelterId = 3);
INSERT INTO tagAssignment VALUES(tagName = 'Childcare available', shelterId = 3);
INSERT INTO tagAssignment VALUES(tagName = 'Men only', shelterId = 4);
INSERT INTO tagAssignment VALUES(tagName = 'Education resources', shelterId = 4);
INSERT INTO tagAssignment VALUES(tagName = 'Religious affiliation', shelterId = 4);
INSERT INTO tagAssignment VALUES(tagName = 'Addiction and rehabilitation support', shelterId = 4);
INSERT INTO tagAssignment VALUES(tagName = 'Meals provided', shelterId = 4);
INSERT INTO tagAssignment VALUES(tagName = 'Social services', shelterId = 4);
INSERT INTO tagAssignment VALUES(tagName = 'Transitional housing', shelterId = 4);
INSERT INTO tagAssignment VALUES(tagName = 'Pay-to-stay shelter', shelterId = 5);
INSERT INTO tagAssignment VALUES(tagName = 'Overnight shelter only', shelterId = 5);
INSERT INTO tagAssignment VALUES(tagName = 'Shower facilities', shelterId = 5);
INSERT INTO tagAssignment VALUES(tagName = 'Meals provided', shelterId = 5);
INSERT INTO tagAssignment VALUES(tagName = 'Social services', shelterId = 5);
INSERT INTO tagAssignment VALUES(tagName = 'Mental health services', shelterId = 6);
INSERT INTO tagAssignment VALUES(tagName = 'Transitional housing', shelterId = 6);
INSERT INTO tagAssignment VALUES(tagName = 'Religious affiliation', shelterId = 6);
INSERT INTO tagAssignment VALUES(tagName = 'Addiction and rehabilitation support', shelterId = 6);
INSERT INTO tagAssignment VALUES(tagName = 'Medical care available', shelterId = 6);
INSERT INTO tagAssignment VALUES(tagName = 'Long-term care', shelterId = 6);
INSERT INTO tagAssignment VALUES(tagName = 'Felons allowed', shelterId = 6);
INSERT INTO tagAssignment VALUES(tagName = 'Job training available', shelterId = 6);
INSERT INTO tagAssignment VALUES(tagName = 'Family shelter', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Childcare available', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Computer lab', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Education resources', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Long-term care', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Medical care available', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Laundry facilities', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Meals provided', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Shower facilities', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Social services', shelterId = 7);
INSERT INTO tagAssignment VALUES(tagName = 'Family shelter', shelterId = 8);
INSERT INTO tagAssignment VALUES(tagName = 'Transitional housing', shelterId = 8);
INSERT INTO tagAssignment VALUES(tagName = 'Long-term care', shelterId = 8);
INSERT INTO tagAssignment VALUES(tagName = 'Laundry facilities', shelterId = 8);
INSERT INTO tagAssignment VALUES(tagName = 'Social services', shelterId = 8);
INSERT INTO tagAssignment VALUES(tagName = 'Job training available', shelterId = 8);
INSERT INTO tagAssignment VALUES(tagName = 'Youth shelter', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Long-term care', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Meals provided', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Clothing provided', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Laundry facilities', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Mental health services', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Medical care available', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Education resources', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Job training available', shelterId = 9);
INSERT INTO tagAssignment VALUES(tagName = 'Family shelter', shelterId = 10);
INSERT INTO tagAssignment VALUES(tagName = 'Meals provided', shelterId = 10);
INSERT INTO tagAssignment VALUES(tagName = 'Medical care available', shelterId = 10);
INSERT INTO tagAssignment VALUES(tagName = 'Clothing provided', shelterId = 10);
INSERT INTO tagAssignment VALUES(tagName = 'Bus cards available', shelterId = 10);
INSERT INTO tagAssignment VALUES(tagName = 'Long-term care', shelterId = 10);
