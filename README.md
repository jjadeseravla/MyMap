# PDB Tracker Frontend

This is a prototype for the react frontend(FE) we might use for the PDB Tracker App.

### Configuring the FE:
In ```src/app/config.js``` make sure it says:
```export const API_URL = 'http://localhost:9292'; ```


### How to use the PDB Tracker Frontend

It expects the sinatra backend to be running on http://localhost:9292. It also requires the Sinatra backend to send an appropriate CORS header, like so:

```ruby
  get '/:id' do
    headers 'Access-Control-Allow-Origin' => 'http://localhost:3000'
    employee = instantiate_employee(params[:id])
    serialize(employee)
  end
```

### Running the FE:
```npm start```
Server will start on localhost://3000

###To Do:

Then the main app should only be one page as the it currently needs a page before this to ask for individual IDs.  We need to get rid of this and automatically be shown the main page when logging in with the user name (instead of ID) and the user photo (instead of panda avatar).  
There is a jigsaw API to retrieve the information.
