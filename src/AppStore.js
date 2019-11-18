import React from 'react';
import './App.css';
import './AppStore.css';

class AppStore extends React.Component {
  render() {
    return (
      <div className="site-container">
        <div className="app-store-title-div" >
          <h1> 
            The Columbus App Store
          </h1>
        </div>
        <div className="body-div" >
          <div className="table-container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Type of Data Processing</th>
                  <th>App Name</th>
                  <th>Description</th>
                  <th>App Type</th>
                  <th>Current Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3">Browsing and Profiling</td>
                  <td>Table Browser</td>
                  <td>Browse a table Google Map Style</td>
                  <td>Open Source</td>
                  <td><a className="btn-link" href="https://hub.docker.com/r/kaushikc92/tablebrowser">Available</a></td>
                </tr>
                <tr>
                  <td>Table Profiler</td>
                  <td>Profile a table to collect many statistics</td>
                  <td>Hosted</td>
                  <td><a className="btn-link" href="http://ec2-52-23-246-64.compute-1.amazonaws.com:8000/frontend/index/">Available</a></td>
                </tr>
                <tr>
                  <td>Attribute Type Detector</td>
                  <td>Detect the type of an attribute using deep learning</td>
                  <td>Open source</td>
                  <td></td>
                </tr>
                <tr>
                  <td rowspan="2">Querying</td>
                  <td>SQL Querier</td>
                  <td>Query CDrive data {"in"} place {"in"} SQL</td>
                  <td>Open source</td>
                  <td><a className="btn-link" href="https://hub.docker.com/r/columbustech/sql-querier">Available</a></td>
                </tr>
                <tr>
                  <td>Poly Querier</td>
                  <td>Query a table using SQL, Python, or R</td>
                  <td>Open source</td>
                  <td></td>
                </tr>
                <tr>
                  <td rowspan="3">Cleaning</td>
                  <td>{"String"} Prepper</td>
                  <td>Profile and normalize a set of strings</td>
                  <td>Open source</td>
                  <td><a className="btn-link" href="https://hub.docker.com/r/columbustech/string-prepper">Available</a></td>
                </tr>
                <tr>
                  <td>Value Normalizer</td>
                  <td>Normalize a set of values</td>
                  <td>Open source</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Missing Value Detector</td>
                  <td>Detect possible synonyms {"for"} missing value</td>
                  <td>Open source</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Collaboration</td>
                  <td>Cymphony</td>
                  <td>Tool to enable a wide variety of crowdsourcing workflows</td>
                  <td>Open source</td>
                  <td></td>
                </tr>
                <tr>
                  <td rowspan="4">Entity Matching</td>
                  <td>Cloud Matcher</td>
                  <td>Self-service entity matching tool</td>
                  <td>Hosted</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Cloud Labeler</td>
                  <td>Label tuple pairs as match/no-match, using one user or a set of users</td>
                  <td>Open source</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Label Debugger</td>
                  <td>Debug a set of labeled tuple pairs to find mislabeled tuple pairs</td>
                  <td>Open source</td>
                  <td><a className="btn-link" href="https://hub.docker.com/r/sbhat92/label-debugger">Available</a></td>
                </tr>
                <tr>
                  <td>Blocking Rule Executor</td>
                  <td>Execute blocking rules on large tables {"for"} entity matching</td>
                  <td>Hosted</td>
                  <td><a className="btn-link" href="http://ec2-54-81-8-255.compute-1.amazonaws.com:8000/frontend/index/">Available</a></td>
                </tr>
                <tr>
                  <td>Domain Specific App</td>
                  <td>GLM Numerical Model</td>
                  <td>Execute a limnology model and generate large output files</td>
                  <td>Open source</td>
                  <td><a className="btn-link" href="https://hub.docker.com/r/columbustech/glm-numerical-model">Available</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AppStore;
