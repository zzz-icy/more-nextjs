import Link from "next/link"
import classes from "./main-header.module.css"
// the imported image is an object
import LogoImg from "@/assets/logo.png"

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<Link
				href='/'
				className={classes.logo}
			>
				<img
					src={LogoImg.src}
					alt='a plate with food on it'
				/>
				Next Level Food
			</Link>
			<nav className={classes.nav}>
				<ul>
					<li>
						<Link href='/meals'>Browse Meals</Link>
					</li>
					<li>
						<Link href='/community'>Foodies Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
