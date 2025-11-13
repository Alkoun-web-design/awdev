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

export function LinkedIcon(){
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><circle cx={4.983} cy={5.009} r={2.188} fill="currentColor"></circle><path fill="currentColor" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path></svg>
	)
}

export function GithubIcon(){
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 1024 1024">
			<path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3"></path>
		</svg>
	)
}

export function FacebookIcon() {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 14 14">
			<path fill="currentColor" d="M0 12.923V1.077A1.077 1.077 0 0 1 1.077 0h11.846A1.077 1.077 0 0 1 14 1.077v11.846A1.077 1.077 0 0 1 12.923 14h-3.23V8.895h.764a.657.657 0 0 0 .657-.657V7.41a.655.655 0 0 0-.657-.657h-.722V5.74c0-.905.41-.905.819-.905h.527a.6.6 0 0 0 .464-.193a.63.63 0 0 0 .193-.464v-.796a.67.67 0 0 0-.646-.69H9.854a2.498 2.498 0 0 0-2.574 2.8v1.26h-.69a.657.657 0 0 0-.667.657v.83a.657.657 0 0 0 .668.656h.689V14H1.077A1.077 1.077 0 0 1 0 12.923"></path>
		</svg>
	)
}