import React, {useState} from 'react'
import {View, Text, TouchableOpacity ,StyleSheet} from  'react-native'
import Button from '../../Components/core/Button';
import ButtonTransparent from '../../Components/core/ButtonTransparent';
import Input from '../../Components/core/Input';
import Title from '../../Components/core/Title';
import Container from '../../Components/layout/ContainerView';
import Row from '../../Components/layout/Row';
import RecipeCard from '../../Components/core/RecipeCard'

const ProfileScreen = () =>{
    
var [ buttonClick, setButtonClick ] = useState({btnSelected: 1});

const notClicked ={
    backgroundColor: '#F4F5F7',
    color: '#9FA5C0', 
}
   return(
            <Container >
        <Row>
            <ButtonTransparent style={
						(buttonClick.btnSelected == 1)
							? null
							: {...notClicked}
					} 
                    onPress={() => setButtonClick({ btnSelected: 1 })} 
                    width={'80px'} 
                    
                    >
                All
            </ButtonTransparent>
            <ButtonTransparent style={
						(buttonClick.btnSelected == 2)
							? null
							: {...notClicked}
					} 
                    onPress={() => setButtonClick({ btnSelected: 2 })} 
                     width={'90px'}>
                Food
            </ButtonTransparent>
            <ButtonTransparent style={
						buttonClick.btnSelected == 3
							? null
							: {...notClicked}
					}
                    onPress={() => setButtonClick({ btnSelected: 3 })} 
                     width={'90px'}>
                Drink
            </ButtonTransparent>
            </Row>
            
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            </Container>
          
    )
}

var styles = StyleSheet.create({
})
export default ProfileScreen;