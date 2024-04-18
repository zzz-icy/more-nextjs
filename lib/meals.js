import sql from "better-sqlite3"

const db = sql("meals.db")

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000))
	return db.prepare("SELECT * FROM meals").all() // fetching all rows
	// db.prepare("SELECT * FROM meals").get() // for single row
}
