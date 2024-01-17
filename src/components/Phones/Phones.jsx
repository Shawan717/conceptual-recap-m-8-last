
import Phone from "./Phone/Phone";


const Phones = ({phones}) => {


    return (
        <div>
            <h3 className="my-5 text-2xl text-center">All Category Phones</h3>
           <div className="grid grid-cols-3">
           {
                
                phones && phones.length>0 && phones?.map(phone=><Phone key={phone.id}  phone={phone}></Phone>)
            
           }
           </div>
        </div>
    );
};

export default Phones;