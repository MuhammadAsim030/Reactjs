import cardImage from './assets/cardImage.png'


const Card = (Props)  => {
    return (
        <>
            <div className="card mx-10">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus eum aliquam reprehenderit excepturi commodi consequatur ea inventore fugit fugiat autem. Consectetur voluptates accusamus temporibus, tempora magnam debitis neque illum ut!</p>
            <img className="card-img" src={cardImage}></img>
                <h3 className='name'>Asim Farooq</h3>
                <p className='age'>Age: 25</p>
            </div>
        </>
    );
}

export default Card