"use client"
import Link from "next/link"
import Image from "next/image"
import classes from "./main-header.module.css"
// the imported image is an object
import LogoImg from "@/assets/logo.png"
import MainHeaderBackground from "./main-header-background"
import { usePathname } from "next/navigation"

export default function MainHeader() {
	const path = usePathname()
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link
					href='/'
					className={classes.logo}
				>
					{/* When true, the image will be considered high priority and preload. Lazy loading is automatically disabled for images using priority. */}
					<Image
						src={LogoImg}
						alt='a plate with food on it'
						priority
					/>
					Next Level Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<Link
								href='/meals'
								className={
									path.startsWith("/meals") ? classes.active : undefined
								}
							>
								Browse Meals
							</Link>
						</li>
						<li>
							<Link
								href='/community'
								className={
									path.startsWith("/community") ? classes.active : undefined
								}
							>
								Foodies Community
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
