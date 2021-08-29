import React, { useState } from 'react';
import { Button, Label, Input, Container, Row } from 'reactstrap';
import './Login.css'


const NewUser = () => {

  var passwordOk = false;

  const regex = new RegExp('(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$')



  const [NewUserPassword, setNewUserPassword] = useState('');
  const [NewUserPasswordConfirmation, setNewUserPasswordConfirmation] = useState('');

  const handlePassword = event => {
    setNewUserPassword(event.target.value)
  }

  const handlePasswordConfirmation = event => {
    setNewUserPasswordConfirmation(event.target.value)
  }

  const checkPassword = () => {

    if (NewUserPassword === "") {
      alert("digite password")
      passwordOk = false;
    } else {
      if (NewUserPasswordConfirmation === "") {
        passwordOk = false;

        alert("Digite a confirmação do password")
      } else {
        if (NewUserPasswordConfirmation !== NewUserPassword) {
          passwordOk = false;

          alert("Password e confirmação são diferentes")
        } else {
          if (regex.test(NewUserPassword) == false) {
            passwordOk = false;

            alert("A senha deve contar ao menos uma letra maiscula, uma minuscula, um caracter especial e ter mais de 8 digitos")
          } else {
            if (regex.test(NewUserPassword) == true) {
              passwordOk = true;

            } if (passwordOk = true) {
              window.location.replace('http://localhost:3000/kanban-board');
            }
          }
        }
      }

    }
  }


  return (
    <Container style={{ padding: '32px', alignSelf: 'center', marginTop: '196px', marginBottom: '67px', width: '400px', height: '520px', display: 'flex', }} className="login-container"  >
      <Row className="login-title" style={{ fontFamily: 'Open Sans', fontSize: '38px', textDecoration: 'none solid rgb(255, 255, 255)', width: '368px', height: '64px', padding: '10px', alignSelf: 'center' }}>Login </Row>
      <Row  ><Label className="label-email" style={{ marginBottom: '10px', marginTop: '10px', marginLeft: '0px' }} for="Email"  >Email</Label ></Row>
      <Row > <Input className="input-email" style={{ marginBottom: '10px', marginTop: '10px' }} size="sm" type="email" name="email" id="email" placeholder="Email de cadastro" /></Row>
      <Row ><Label className="label-password" style={{ marginBottom: '10px', marginTop: '10px' }} for="password" >Senha</Label></Row>
      <Row ><Input className="input-password" style={{ marginBottom: '10px', marginTop: '10px' }} size="sm" type="password" value={NewUserPassword} name="password" id="password" placeholder="Senha" onChange={handlePassword} /></Row>
      <Row ><Label className="label-passwordConfirm" style={{ float: 'left', marginBottom: '10px', marginTop: '10px' }} for="passwordconfirmation">Digite a senha novamente </Label></Row>
      <Row ><Input className="input-passwordConfirm" style={{ marginBottom: '10px', marginTop: '10px' }} size="sm" type="password" value={NewUserPasswordConfirmation} name="passwordconfirmation" id="passwordconfirmation" placeholder="Confirme a senha" onChange={handlePasswordConfirmation} /></Row>
      <div><Button className="loginbt" style={{ backgroundColor: '#437391', fontFamily: 'Open Sans', width: '200px', height: '50px', marginLeft: '50px', marginTop: '10px' }} onClick={checkPassword}>
        Enviar

      </Button>
      </div>
    </Container>
  );


}

export default NewUser;