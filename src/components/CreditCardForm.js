import React, { useState } from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCardForm = ({ cards, setCards, setShowForm, setLastCardAdded }) => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    handleSubmit();
    console.log("error", errors);
    if (Object.keys(errors).length === 0) {
      console.log("values", values);
      setLastCardAdded(values.cardNumber);
      setCards([...cards, values]);
      setShowForm(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
            <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div>
            <Form onSubmit={onSubmitHandle}>
              <Form.Group>
                <Form.Control
                  type="text"
                  onInput={(e) => {
                    e.target.value = e.target.value.match("^[a-zA-Z- ]*");
                  }}
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 16);
                  }}
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Expiration Date (MM/YY)"
                      pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 3);
                      }}
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="Security Code"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvv}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit"
              >
                Validate and Add
              </Button>
            </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
