"use server"

import { saveMeal } from "./meals"
import redirect from "next/navigation"

function isInvalidText(text) {
	return !text || text.trim() === ""
}

// because we are using useFormState hook
export const shareMeal = async (prevState, formData) => {
	// 'use server' inside of a function is different
	// because this creates a so-called Server Action, which is a function that's guaranteed
	// to execute on the server, and only there.
	// "use server"
	// if used here, the component has to be a server  component, otherwise the build process will not allow you to define use client and use server in the same file
	// but you can define them separately and then import it
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	}
	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.includes("@") ||
		!meal.image ||
		meal.image.size === 0
	) {
		// throw new Error("Invalid input!")
		return {
			message: "Invalid input.",
		}
	}
	await saveMeal(meal)
	redirect("/meals")
}
