import { use } from "react";



export default function ScrollIndicator({ url }) {

    const [data, SetData] = useState(null);
    const [loading, SetLoading] = useState(false);
    const [error, SetError] = useState(null);

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
    console.log("Data:", data, loading);

    return <div><h1>Custom Scroll Indicator</h1>
        <div className="data-container">

            {data && data.length > 0 ?
                data.map(dataItem => <p> {dataItem.title}</p>)
            :null}
        </div>


    </div>
}