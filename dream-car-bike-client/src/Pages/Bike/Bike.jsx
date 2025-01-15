

const Bike = ({ bike }) => {

    const {_id, name, companyName, price, image, category} = bike

    return (
        <div>
            <div className=" bg-base-100 max-w-80 shadow-xl">
                <figure>
                    <img
                    className=" w-full h-52"
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bike;