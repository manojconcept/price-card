import { React } from "react";
import "./App.css";

function App() {
  return (
    <div className="container mainFream">
      <div class="container overflow-hidden">
        <div class="row gy-5">
          <div class="col-4">
            <div class="p-3 border borderlg">
              <div>
                <div className="heading">
                  <p className="text-secondary">Free</p>
                </div>
                <h1>$0/month</h1>
                <hr className="text-secondary"></hr>
                <p><i class="bi bi-check fs-5"></i> Single User</p>
                <p><i class="bi bi-check fs-5"></i> 50GB Storage</p>
                <p><i class="bi bi-check fs-5"></i> Unlimited Public Projects</p>
                <p><i class="bi bi-check fs-5"></i> Unlimited Access</p>
                <div className="text-secondary">
                  <p><i class="bi bi-x"></i> Community Access</p>
                  <p><i class="bi bi-x"></i> Unlimited Prviate Projects</p>
                  <p><i class="bi bi-x"></i> Dedicated Phone Support</p>
                  <p><i class="bi bi-x"></i> Free Subdomain</p>
                  <p><i class="bi bi-x"></i> Monthly Status Reports</p>
                </div>
                <div className="button">
                  <button className="btnButton bg-primary" type="submit">Button</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 border borderlg">
              <div>
                <div className="heading">
                  <p className="text-secondary">Plus</p>
                </div>
                <h1>$9/month</h1>
                <hr className="text-secondary"></hr>
                <p><i class="bi bi-check fs-5"></i> 5 User</p>
                <p><i class="bi bi-check fs-5"></i> 50GB Storage</p>
                <p><i class="bi bi-check fs-5"></i> Unlimited Public Projects</p>
                <p><i class="bi bi-check fs-5"></i> Unlimited Access</p>
                <p><i class="bi bi-check fs-5"></i> Community Access</p>
                <p><i class="bi bi-check fs-5"></i> Unlimited Prviate Projects</p>
                <p><i class="bi bi-check fs-5"></i> Dedicated Phone Support</p>
                <p><i class="bi bi-check fs-5"></i> Free Subdomain</p>
                <div className="text-secondary">
                  <p><i class="bi bi-x"></i> Monthly Status Reports</p>
                </div>
                <div className="button">
                  <button className="btnButton bg-primary" type="submit">Button</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="p-3 border borderlg">
              <div>
                <div className="heading">
                  <p className="text-secondary">Pro</p>
                </div>
                <h1>$49/month</h1>
                <hr className="text-secondary"></hr>
                <p> <i class="bi bi-check fs-5"></i> Unlimited User</p>
                <p><i class="bi bi-check fs-5"></i> 50GB Storage</p>
                <p><i class="bi bi-check fs-5"></i> Unlimited Public Projects</p>
                <p><i class="bi bi-check fs-5"></i> Unlimited Access</p>
                <p><i class="bi bi-check fs-5"></i> Community Access</p>
                <p><i class="bi bi-check fs-5"></i> Unlimited Prviate Projects</p>
                <p><i class="bi bi-check fs-5"></i> Dedicated Phone Support</p>
                <p><i class="bi bi-check fs-5"></i> Free Subdomain</p>
                <p><i class="bi bi-check fs-5"></i> Monthly Status Reports</p>
                <div className="button">
                  <button className="btnButton bg-primary" type="submit">Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default App;