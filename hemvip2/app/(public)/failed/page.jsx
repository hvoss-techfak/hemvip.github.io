"use client"

import { Callout } from "@/components/core"
import { Suspense, useEffect } from "react"

export default function Page() {
	useEffect(() => {
		localStorage.removeItem("hemvip-pages")
		localStorage.removeItem("hemvip-study")
	}, [])
	return (
		<Suspense fallback={<div></div>}>
			<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
				<div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
					<div className="h-screen inset-0 flex items-center justify-center z-50">
						<Callout type="warning" className="min-w-96">
							<div className="flex gap-2 flex-col ">
								<h2 className="text-xl font-semibold">Study Failed</h2>
								<p className="leading-7 first:mt-0">Your study is uncomplete because of failed attention check</p>
								<div className="">
									Visit{" "}
									<a
										className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
										href="https://www.prolific.com/"
									>
										Prolific
									</a>{" "}
									to start new study.
								</div>
							</div>
						</Callout>
					</div>
				</div>
			</div>
		</Suspense>
	)
}
