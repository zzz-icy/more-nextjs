export default function MealPage({ params }) {
	return (
		<main>
			<h1 style={{ color: "white", textAlign: "center" }}>
				Meal {params.mealSlug}
			</h1>
		</main>
	)
}
