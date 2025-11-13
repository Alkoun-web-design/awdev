export default function Footer() {

    const attributions = [
        { name: "AjaxGb", link: "https://sketchfab.com/ajaxgb"},
        { name: "Patrick Matthew", link: "https://sketchfab.com/patrickmatthew"},
        { name: "Antropik", link: "https://sketchfab.com/Antropik"},
        { name: "SebastianSosnowski", link: "https://sketchfab.com/SebastianSosnowski"},
        { name: "holgcool", link: "https://sketchfab.com/holgcool"},
        { name: "Sousinho", link: "https://sketchfab.com/sousinho"},
        { name: "ul1tka", link: "https://sketchfab.com/ul1tka"},
        { name: "Scott Buckley", link: "https://www.scottbuckley.com.au/library/permafrost/"},
    ]

    return (
        <footer className="absolute text-sm bg-gray-900 bottom-0 px-6 py-2 mb-2 mx-2 rounded-full font-[Roboto]">
            <p className="inline">Special thanks to:</p>
            {attributions.map((attribute) => (
                <a className="" href={attribute.link}> {attribute.name}</a>
            ))}
        </footer>
    )
}