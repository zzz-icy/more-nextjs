import { getMeal } from "@/lib/meals"
import classes from "./page.module.css"
import Image from "next/image"
export default function MealDetailsPage({ params }) {
	const meal = getMeal(params.mealSlug)
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
