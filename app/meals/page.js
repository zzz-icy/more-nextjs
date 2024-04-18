import Image from "next/image"
import Link from "next/link"

import classes from "./page.module.css"
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"

export default async function MealsPage() {
	const meals = await getMeals()

	return (
		<>
			<header className={classes.header}>
				<h1>Delicious meals, created </h1>
				<span className={classes.highlight}>by you</span>
				<p>
					Choose your favorite recipe ans cook it yourself. It is easy and fun!
				</p>
				<p className={classes.cta}>
					<Link href='/meals/share'>Share your Favorite Recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<MealsGrid meals={meals} />
			</main>
		</>
	)
}
