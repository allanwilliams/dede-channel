import Link from "next/link"
export default function BoxInfo (){

    return (
        <div className="row">
            <div className="col-lg-3 col-12">
                <div className="small-box bg-success">
                    <div className="inner">
                        <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                        <p>Bounce Rate</p>
                    </div>
                    <div className="icon">
                        <i className="ion ion-stats-bars" />
                    </div>
                    <Link href="/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
                </div>
            </div>
        </div>  
    )
}