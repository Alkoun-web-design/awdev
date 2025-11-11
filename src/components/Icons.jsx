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