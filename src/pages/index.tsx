import React from 'react';
import InputWithIcon from "@/components/UI/inputWithIcon/InputWithIcon";
import Button from "@/components/UI/button/Button";
import InputAuthorization from "@/components/UI/InputAuthorization/InputAuthorization";
import SwitchInput from "@/components/UI/switchInput/SwitchInput";
import Checkbox from "@/components/UI/inputCheckbox/Checkbox";


const Home = () => {

    const hand = () => {
        console.log('dasd')
    }

    return (
        <>

            <Button onClick={hand}>das</Button>
            <Checkbox/>
            <SwitchInput/>
            <InputWithIcon onChange={hand} placeholder={''}/>
        </>
    );
};

export default Home;