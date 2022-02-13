export const creatUSerStatement = (dataTosend) => {
    return `INSERT INTO Users_Table (ID, First_Name, Last_Name, Email, created_at, updated_at, confirmed, verified, Firebase_id) VALUES ('104', ${datatosend.firstName}, 'Tan', 'tanrolan@gmail.com', 'Wednesday, December 22, 2021', 'Wednesday, December 22, 2021', 'TRUE', 'FALSE', '102'`
}

export const updateUSerSQLStatement = (datatosend) => {
return `select.... ${dataTosend.verified}`
}