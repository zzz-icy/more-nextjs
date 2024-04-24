import { getMeal } from "@/lib/meals"
import classes from "./page.module.css"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }) {
	const meal = getMeal(params.mealSlug)
	if (!meal) {
		notFound()
	}
	return {
		title: meal.title,
		description: meal.summary,
	}
}

export default function MealDetailsPage({ params }) {
	const meal = getMeal(params.mealSlug)
	// the notFound function, which is imported from next/navigation.
	// Calling this function will stop this component from executing and will show the closest not-found or error page.
	if (!meal) {
		notFound()
	}

	const { title, image, summary, creator, creator_email } = meal
	let { instructions } = meal
	instructions = instructions.replace(/\n/g, "<br />")
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image
						fill
						src={image}
						alt={title}
					/>
				</div>
				<div className={classes.headerText}>
					<h1>{title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${creator_email}`}>{creator}</a>
					</p>
					<p className={classes.summary}>{summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{ __html: instructions }}
				></p>
			</main>
		</>
	)
}
