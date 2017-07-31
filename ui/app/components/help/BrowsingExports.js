import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Alert } from 'react-bootstrap';

export default () =>
  <div className="help">
    <ol className="breadcrumb">
      <li>
        <Link to="/help">Help</Link>
      </li>
      <li className="active">Browsing Exports</li>
    </ol>
    <Jumbotron className="hero">
      <h1>Browsing Exports</h1>
      <p>
        Find and re-use exports created by other users and humanitarian organizations.
      </p>
    </Jumbotron>
    <div className="helpDetailContainer">
      <section className="helpDetailBody">
        <Row>
          <Col sm={8}>
            <p>
              If you're mapping as part of a humanitarian effort, it's possible that someone has already created an export relevant to your project.
              Browsing and downloading exports doesn't require a user account.
            </p>

            <h3>Exports List</h3>
            <img src="/static/ui/images/docs/searchexports.png" style={{width:"100%"}}></img>
            <ol>
              <li>
                <strong>Search Box:</strong> Enter a query that will be matched against the Name, Description or Project of an export.
              </li>
              <li>
                <strong>Only my Exports:</strong> If you're logged in, display only exports created by you.
              </li>
            </ol>


            <h3>Export Details</h3>
            <img src="/static/ui/images/docs/exportdetail.png" style={{width:"100%"}}></img>
            <p>
              <strong>Left Panel: Export Details.</strong> Shows the date of creation, user who created the export, and the feature selection.
            </p>
            <p>
              <strong>Center Panel: Export Runs.</strong> Each "Run" of the export is associated with a list of file downloads, one for each export file format.
            </p>

            <h3>Re-running an Export</h3>
            <p>
                In the time since an Export was created, it's possible information has been added or updated on the main OpenStreetMap database.
                Any downloaded files since won't contain that improved information. 
                Re-running an export creates new files with the same area and feature selections, using the latest OSM data.
                You will need to authenticate with an account to re-run an export.
            </p>
        
            <h3>Cloning an Export</h3>
            <p>
              "Cloning" an export lets you create a new export based on an existing one, possibly using the same area, description or feature selection,
              and modifying each setting to suit your needs.
              For more details on the Create Export form, see the documentation : <Link to="/help/quick_start">Quick Start</Link>.
            </p>
          </Col>
          <Col sm={3} smOffset={1} className="helpToc">
            <h3>IN THIS AREA</h3>
            <ul>
              <li>Export List</li>
              <li>Export Details</li>
              <li>Re-running an Export</li>
              <li>Cloning an Export</li>
            </ul>
          </Col>
        </Row>
      </section>
    </div>
  </div>;