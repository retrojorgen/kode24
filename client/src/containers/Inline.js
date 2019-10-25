import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";

import { NewsLetter } from "../components/Forms";
import { Triangle } from "../components/AnimationItems";
import { AddToEmailList } from "../api/Mailchimp";

const AdWrapper = styled.div`
  width: 100%;
  background-color: #17071e;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;

  align-items: column;
  @media (min-width: 700px) {
    align-items: row;
    border: 10px solid #171716;
  }
  #left-triangle {
    background-color: black;
    clip-path: url(#newsletter-triangle);
    -webkit-clip-path: url(#newsletter-triangle);
    width: 400px;
    height: 400px;
    background-size: cover;
    background-blend-mode: screen;
    position: absolute;
    top: 0;
    margin-left: -200px;
    opacity: 0.4;
    left: 40px;
    background-image: url("https://www.dagbladet.no/files/2019/10/25/giphy-blowup.gif");
    background-position: right center;
    transform: scale(-1, 1);
    @media (min-width: 700px) {
      opacity: 1;
      top: 40px;
      margin-left: 0;
    }
  }
  &:before {
    content: "";
    position: absolute;
    right: -400px;
    top: 0;
    width: 100%;
    height: 100%;
    transform: skew(-27deg);
    background-color: rgba(120, 42, 156, 0.03);
  }
`;

const AdText = styled.h2`
  display: none;
  background-color: transparent;
  border: 1px solid #c200e4;
  box-shadow: 0 0 10px 10px rgba(145, 97, 168, 0.1);
  padding: 0.6em;
  color: white;
  box-decoration-break: clone;
  position: relative;
  text-transform: uppercase;
  transform: skew(1deg) rotate(-1deg);
  position: absolute;

  top: 400px;
  left: 100px;
  @media (min-width: 700px) {
    display: inline-block;
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

class Inline extends Component {
  state = {
    triangle: "",
    email: "",
    name: "",
    loading: false,
    done: false
  };

  handleEmailForm = event => {
    event.preventDefault();
    this.setState({ loading: true });

    AddToEmailList(
      {
        name: this.state.name,
        email: this.state.email
      },
      response => {
        this.setState({
          loading: false,
          done: true
        });
      }
    );
  };

  handleEmailInput = value => {
    this.setState({ email: value });
  };

  handleNameInput = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <AdWrapper>
        <BackgroundAnimation
          ref={this.state.triangle}
          color="rgba(120, 42, 156, 1)"
          glow="0 0 10px 10px rgba(145, 97, 168, 0.06)"
        >
          <Triangle speed="20s" offset="0s" />
          <Triangle speed="20s" offset="2s" />
          <Triangle speed="20s" offset="4s" />
          <Triangle speed="20s" offset="6s" />
          <Triangle speed="20s" offset="8s" />
          <Triangle speed="20s" offset="10s" />
          <Triangle speed="20s" offset="12s" />
          <Triangle speed="20s" offset="14s" />
          <Triangle speed="20s" offset="16s" />
          <Triangle speed="20s" offset="18s" />
          <Triangle speed="20s" offset="20s" />
        </BackgroundAnimation>
        <svg width="0" height="0">
          <defs>
            <clipPath id="newsletter-triangle">
              <path class="st0" d="M0.1,1.3" />
              <polygon points="-0.1,1.5 203.8,400.6 400.8,1.5 " />
            </clipPath>
          </defs>
        </svg>
        <div id="left-triangle" />
        <AdText>1500 påmeldt!</AdText>
        <NewsLetter onSubmit={this.handleEmailForm}>
          <h1>Blås opp hjernen!</h1>
          <h2>
            Med kode24s ukentlige <br /> <u>håndskrevne</u> nyhetsbrev!
          </h2>
          <p>
            Oppsummering uka som gikk, humor, de feteste jobbene, og en titt bak
            scenen. <br />
            Meld deg på du også! 🤓
          </p>

          {!this.state.done && (
            <Fragment>
              <div className="input-row">
                <label>
                  <input
                    type="text"
                    required
                    value={this.state.name}
                    onChange={event => this.handleNameInput(event.target.value)}
                    placeholder="navn"
                  />
                </label>
              </div>
              <div className="input-row">
                <label>
                  <input
                    type="email"
                    required
                    value={this.state.email}
                    onChange={event =>
                      this.handleEmailInput(event.target.value)
                    }
                    placeholder="e-post"
                  />
                </label>
              </div>
              <button
                type="submit"
                className={`${this.state.loading ? "loading" : ""}`}
              >
                <span>Meld meg på</span>
              </button>
            </Fragment>
          )}

          {this.state.done && (
            <p className="thank-you">
              Takk {this.state.name}! Du får snart nyhetsbrevet vårt til{" "}
              {this.state.email}. <br />
              <br />
            </p>
          )}
        </NewsLetter>
      </AdWrapper>
    );
  }
}

export default Inline;
