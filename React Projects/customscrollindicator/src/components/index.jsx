import { use } from "react";



export default function ScrollIndicator({ url }) {

    const [data, SetData] = useState(null);
    const [loading, SetLoading] = useState(false);
    const [error, SetError] = useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            SetLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json()

            console.log(data);

            if (data && data.products && data.products.lenght > 0) {
                SetData(data.products);
                SetLoading(false);

            }
        } catch (e) {
            console.log(e);
            SetError(e);
        }
    }

    useEffect(() => {
        fetch(url);

    }, [url])


    function handleScrollPercentage() {
        console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;


        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled / height) * 100);
    }


    useEffect(() => {

        window.addEventListener('scroll', handleScrollPercentage)
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        }
    }, [])



    console.log("Data:", data, loading);

    return <div>
        <div className="top-container">

            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container"></div>
            <div className="current-progress-bar" style={{ width: `${scrollPercentage}` }}></div>
        </div>


        <div className="data-container">

            {data && data.length > 0 ?
                data.map(dataItem => <p> {dataItem.title}</p>)
                : null}
        </div>


    </div>
}