import SectionTitle from "../../components/sectionTitle";
import { Mission } from "../../components/data";
import { Vision}  from '../../components/data';
import Card from "../../components/card";
import PopupWidget from "../../components/popupWidget";
export default function OurValues(){
    return(
        <div>
        <SectionTitle
        pretitle="Our Values">
        </SectionTitle>  
        <Card imgPos='right' data={Mission} />
        <Card  data={Vision} />
        <PopupWidget />
        </div>
        
    );
}