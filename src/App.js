import React from 'react';
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640'
    }
    const smallOpts = {
      height: '250',
      width: '400'
    }
    return (
      <div className="site-container">
        <div className="title-div" >
          <h1> 
            The Columbus Ecosystem of Data Solutions
          </h1>
          <h3 className="mt-4">
            A cloud-based extension of PyData
          </h3>
          <a className="btn btn-primary mt-3" href="https://www.github.com/columbustech/cdrive">
            Browse Source Code
          </a>
        </div>
        <div className="body-div" >
          <div className="content mb-4">
            <h3>
              Columbus is a scalable, collaborative, cloud-{"native"}, customizable solution {"for"} all your data cleaning and integration needs.
            </h3>
          </div>
          <div className="content">
            <h4>
              Introduction
            </h4>
            <p>
              PyData is a popular and growing ecosystem of Python tools to {"do"} data science. Examples of well-known tools (that is, packages) {"in"} PyData are pandas, scikit-learn, and matplotlib.
            </p>
            <p>
              PyData however is limited {"in"} several important ways. It is difficult to scale. For example, reading and querying a CSV file of 20G using a pandas data frame is slow (and may not 
              even be possible on a desktop machine {"with"} limited memory). It is difficult to share data, such as the above mentioned CSV file {"with"} other data scientists {"in"} the same team, 
              who often sit {"in"} different locations. Today there is no easy way {"for"} all team members to view the data {"in"} real time. Finally, it is difficult to collaborate, such as 
              collaboratively cleaning a table, or labeling examples {"for"} machine learning using a team of data scientists.
            </p>
            <p>
              Columbus is a cloud-based extension of PyData that addresses the above limitations. To use Columbus:
            </p>
            <ul>
              <li>
                A team of data scientists first downloads and installs CDrive on AWS. CDrive is similar to Google Drive: each user {"in"} the team can easily create an account on CDrive, uploads and
                downloads files, and shares files {"with"} other users. However, CDrive is {"private"} to only the team (so that the data remains {"private"} and secure). 
              </li>
              <li>
                Next, each user can download apps on DockerHub to his/her CDrive account, then invoke the apps to perform data tasks, the way any iPhone user can easily install and use apps from the 
                {"App"} Store on his/her iPhone. {"Apps"} cover a wide range of tasks, such as data profiling, cleaning, matching, and labeling. There are also apps that quickly allow a user to 
                collaborate on a wide variety of tasks {"with"} other users, {"in"} a crowdsourcing fashion.
              </li>
            </ul>
            <p>
              Thus, Columbus is like Google Drive crossbred {"with"} the iPhone App Store, and each app {"for"} CDrive is analogous to a {"package in"} the PyData ecosystem. The following example
              illustrates how Columbus can be used:
            </p>
            <hr />
            <p className="example">
              <i>
              Emma, a data scientist, needs to deduplicate data {"in"} a large CSV table X of 3M tuples. Emma first works on her desktop. She uses tools {"in"} the PyData ecosystem (such as the 
              PyMatcher packages) to take a sample Y of 100K tuples from X, then experiment {"with"} Y to find a good blocker (that is, a set of rules). Emma attempts to apply the blocker to table X. 
              But the PyData tools run too slowly, already taking more than 3 hours to run, still without any results.
              </i>
            </p>
            <p className="example">
              <i>
              To speed up, Emma decides to use Columbus. She logs into her CDrive account and uploads table X. Next, she installs an app that can execute a blocker fast on a large table, using a Spark
              implementation. Emma uses the app to perform blocking and obtains the result within 5 minutes. 
              </i>
            </p>
            <p className="example">
              <i>
              Next, Emma takes a sample C of 1000 tuple pairs from the blocking output. She needs to label these pairs as match/no-match, to train an ML-based matcher. Emma installs a labeling app on
              CDrive, then uses the {"app"} to notify three interns {"in"} her team, asking them to help label the data. The app automatically distributes the labeling load among the interns and 
              monitors their progress. Emma uses another CDrive app to train an ML-based matcher using the labeled data, then apply the matcher to the blocking output to predict matching pairs. 
              Finally, Emma downloads the matching pairs from her CDrive account back to her desktop, {"for"} further analysis.
              </i>
            </p>
            <hr />
          </div>
          <div className="content">
            <h4>
              A Quick Tour of Columbus
            </h4>
            <YouTube
              videoId="uMvqmm-u42Y"
              opts={opts}
            />
          </div>
          <div className="content">
            <h4>
              Use Columbus
            </h4>
            <p>
              To use Columbus, <a href="https://www.github.com/columbustech/cdrive" className="btn-link">download and install CDrive</a>, then explore the <Link className="btn-link" to="/appstore"> 
              App Store</Link> to find desired data apps.
            </p>
          </div>
          <div className="content">
            <h4>
              Customer Stories
            </h4>
            <p>
              Explore how domain scientists {"in"} the Center {"for"} Limnology at the University of Wisconsin-Madison have used Columbus to scale data processing and share computation models {"with"}
              colleagues across the world, using a CDrive specifically installed {"for"} them called columbus4limnology.io. 
            </p>
            <p>
              Explore how domain scientists {"in"} the Department of Geography at the University of Wisconsin-Madison have used Columbus to build a knowledge base and use it to reduce the 
              destruction of the Amazon Rainforest caused by cattle grazing. 
            </p>
          </div>
          <div className="content">
            <h4>
              Example Use Cases
            </h4>
            <p>
              Examples of what you can {"do with"} Columbus:
            </p>
            <div className="container">
              <div className="row">
                <div className="col nopadding">
                  <p>
                    Upload, share, and browse files
                  </p>
                  <YouTube
                    videoId="5i9PdXIppl8"
                    opts={smallOpts}
                  />
                </div>
                <div className="col nopadding">
                  <p>
                    Query a large table {"in"} place using SQL {"in"} seconds or minutes
                  </p>
                  <YouTube
                    videoId="uMvqmm-u42Y"
                    opts={smallOpts}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col pt-5">
                  <p>
                    Profile a table and interactively explore the rich set of collected statistics
                  </p>
                  <YouTube
                    videoId="eghJxfK6vMA"
                    opts={smallOpts}
                  />
                </div>
                <div className="col pt-5">
                  <p>
                    Debug a labeled set of tuple pairs to find mislabeled tuple pairs
                  </p>
                  <YouTube
                    videoId="GktiMfXdzxc"
                    opts={smallOpts}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col pt-5">
                  <p>
                    Execute blocking rules {"for"} entity matching
                  </p>
                  <YouTube
                    videoId="e5iSFxAQgsw"
                    opts={smallOpts}
                  />
                </div>
                <div className="col pt-5">
                  <p>
                    Deploy and share a domain-specific model as an app
                  </p>
                  <YouTube
                    videoId="MOAqfwpMfUY"
                    opts={smallOpts}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h4>
              Columbus Team
            </h4>
            <p>
              Columbus is a joint project of multiple academic and industrial partners.
            </p>
            <ul>
              <li>
                The University of Wisconsin-Madison, USA
                <ul>
                  <li>
                    Sankarshan Umesh Bhat
                  </li>
                  <li>
                    Kaushik Chandrasekhar (project lead)
                  </li>
                  <li>
                    AnHai Doan
                  </li>
                  <li>
                    Amanpreet Singh Saini
                  </li>
                </ul>
              </li>
              <li>
                Qatar Computing Research Institute, Qatar
                <ul>
                  <li>
                    Mourrad Ouzzani
                  </li>
                  <li>
                    Nan Tang
                  </li>
                  <li>
                    Saravanan Thirumuruganathan
                  </li>
                </ul>
              </li>
              <li>
                Megagon Labs, USA
                <ul>
                  <li>
                    Wang-Chiew Tan (project lead)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="content">
            <h4>
              Contact Us
            </h4>
            <p>
              Please email columbustechio@gmail.com.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
