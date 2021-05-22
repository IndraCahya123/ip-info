import locationIcon from '../assets/location-pin.png';

function Address(props) {
    const persentage = 50;

    return (
        <div style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: `translateX(-${persentage}%)`,
            backgroundColor: "#fff",
            width: 350,
            minHeight: 150,
            zIndex: 10,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            display: "flex",
            flexDirection: "column",
            padding: 15
        }}>
            <p style={{ fontFamily: "'Abhaya Libre'", fontSize: 24, fontWeight: "bolder" }}>My Location</p>
            <div className="d-flex align-items-center mb-3">
                <img
                    src={locationIcon}
                    alt="location pin"
                    width="32px"
                    height="32px"
                />
                <span style={{ fontFamily: "'Nunito Sans'", fontSize: 16, fontWeight: "bold", marginLeft: 15 }}>{props.city + ", " + props.region}</span>
            </div>
            <button type="button" className="btn-sm btn-dark w-100" onClick={() => props.setShowMaps(false)}> Close </button>
        </div>
    )
}

export default Address
