# Turbotax for common medical forms

Tech demo for a react app with Node backend to pre-fill most common medical forms with sane defaults, as a service.

Demo at [http://paperworklabs.herokuapp.com](http://paperworklabs.herokuapp.com)

Screenshots:

![](/demo.png) | ![](/demo2.png)
:-----------------------------:|:-------------------------:
							   |




## Quick Start


    # Install dependencies
    npm install

    # Start development server
    npm run dev



## To deploy on Heroku Dev:

Set up a new app

	heroku config:set NPM_CONFIG_PRODUCTION=false




-------

## dev commands:

	heroku pg:psql

	CREATE TABLE forms (
	  formhash text PRIMARY KEY,
	  patientuid text NOT NULL,
	  formname text NOT NULL,
	  data jsonb
	);
