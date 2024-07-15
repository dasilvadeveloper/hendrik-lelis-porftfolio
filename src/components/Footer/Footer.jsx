import React, { Component } from "react";
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div id="contacts">
            <h1>
              Hendrik Vinicius <br />
              da Silva Lelis
            </h1>
            <div class="contacts">
              <div class="col">
                <h5>Social</h5>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/hendriklelis/">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/dasilvadeveloper/">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/liife_not_found">Twitter</a>
                  </li>
                  <li>
                    <a href="https://github.com/dasilvadeveloper">Github</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h5>Contacts</h5>
                <ul>
                  <li>
                    <a href="tel:+351932723551">+351 932 723 551</a>
                  </li>
                  <li>
                    <a href="mailto:dasilvadeveloper@icloud.com">
                      dasilvadeveloper@icloud.com
                    </a>
                  </li>
                  <li>
                    <a>@dasilvadeveloper</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form  action="https://api.staticforms.xyz/submit" method="post">
            <h1>Contact</h1>
            <input type="hidden" name="accessKey" value="a20e0954-b016-41ac-964d-6b723ccaf44e"></input>
            <input type="text" required name="name" placeholder="Name " />
            <input type="hidden" name="redirectTo" value="#"/>
            <input type="hidden" name="replyTo" value="./"/>
            <input type="text" required name="subject" placeholder="Subject" />
            <textarea placeholder="Message" name="$message" cols="30" rows="10"></textarea>

            <button type="submit">Submit</button>
          </form>
        </footer>
        <div class="copyright">
          <p>copyright © {new Date().getFullYear()} Hendrik Lelis</p>
          <p>all rights reserved</p>
          <p>
            designed & developed by 
            <a href="https://www.instagram.com/hendrik.lelis/">
              <strong> @hendrik.lelis</strong>
            </a>
          </p>
          <p>v3.0.0</p>
        </div>
      </>
    );
  }
}
