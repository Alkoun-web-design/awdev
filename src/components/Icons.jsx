export function RightChevron() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	    	<path fill="currentColor" d="M10.707 17.707L16.414 12l-5.707-5.707l-1.414 1.414L13.586 12l-4.293 4.293z" />
	    </svg>
    )
}

export function LeftChevron() { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		    <path fill="currentColor" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z" />
	    </svg>
    )
}

export function Link() {
    return (
	    <svg className="inline h-5 w-5 mb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	    	<path fill="currentColor" d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z" />
	    	<path fill="currentColor" d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2z" />
	    </svg>
    )
}

export function Close() { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	    	<path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z" />
	    </svg>
    )
}

export function PlayIcon() {
    return(
        <svg className="inline ml-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
        	<defs>
        		<mask id="SVGu4ff0bvt">
        			<g fill="none" strokeLinejoin="round" strokeWidth={4}>
        				<path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
        				<path fill="#000" stroke="#000" d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"></path>
        			</g>
        		</mask>
        	</defs>
        	<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGu4ff0bvt)"></path>
        </svg>
    )
}

export function PauseIcon() { 
    return(
        <svg className="inline ml-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
        	<defs>
        		<mask id="SVGmWZpVL0o">
        			<g fill="none" strokeLinejoin="round" strokeWidth={4}>
        				<path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
        				<path stroke="#000" strokeLinecap="round" d="M19 18v12m10-12v12"></path>
        			</g>
        		</mask>
        	</defs>
        	<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGmWZpVL0o)"></path>
        </svg>
    )
}

export function LinkIcon2(){
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48">
			<defs>
				<mask id="SVGoWjt7dcv">
					<g fill="none" strokeWidth={4}>
						<path stroke="#fff" d="M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983"></path>
						<rect width={34} height={34} x={4} y={10} fill="#fff" stroke="#fff" strokeLinejoin="round" rx={3}></rect>
						<path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m18.44 23.11l5.292-5.51c1.451-1.451 3.837-1.42 5.328.072s1.523 3.877.072 5.328l-1.91 2.023m-13.756 3.724c-.51.51-1.565 1.53-1.565 1.53c-1.452 1.451-1.492 4.038 0 5.53c1.49 1.49 3.876 1.523 5.328.071l5.164-4.688"></path>
						<path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M18.663 28.328a3.86 3.86 0 0 1-1.131-2.473A3.67 3.67 0 0 1 18.592 23m3.729 2.861c1.491 1.491 1.523 3.877.072 5.329"></path>
					</g>
				</mask>
			</defs>
			<path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGoWjt7dcv)"></path>
		</svg>
	)
}