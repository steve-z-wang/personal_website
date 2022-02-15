// src/components/Navbar.js
import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid"


const pages = ["About", "Projects", "Blog", "Photo"]

export default function Navbar() {

	return (
		<header className="bg-stone-800 text-stone-200">
			<div className="container mx-auto p-4 flex justify-between items-center">
				<a className="text-lg font-bold">
					Steve Wang
				</a>

				<nav className="hidden md:flex">
					{pages.map((page) => (
						<a herf="#" className="mr-5 font-semibold hover:text-stone-50">
							{page}
						</a>
					))}
				</nav>

				<div class="md:hidden flex">
					<button>
						<MenuIcon className="md:hidden w-5 h-5" />
					</button>
				</div>
			</div>
		</header>
	);
}
