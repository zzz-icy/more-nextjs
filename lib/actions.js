"use server"

import { saveMeal } from "./meals"
import redirect from "next/navigation"
export const shareMeal = async (formData) => {
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
	await saveMeal(meal)
	redirect("/meals")
}
